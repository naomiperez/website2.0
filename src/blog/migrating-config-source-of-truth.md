---
title: "How I Migrated Config from Six Services to One Source of Truth"
author: Naomi
date: 2026-05-21
excerpt: A walkthrough of a top-down full-stack migration that consolidated a hardcoded configuration list duplicated across six services into a single database-backed source of truth — without breaking a single customer integration.
---

<h2>TL;DR</h2>
<ul>
  <li><strong>The problem:</strong> A configuration list (supported countries) was duplicated as a static array in six services. Adding one country meant a coordinated five-PR migration — and missing one place silently corrupted the user experience.</li>
  <li><strong>The approach:</strong> A top-down migration from a new Postgres table outward to every consumer, with each layer's hardcoded list left in place until its replacement shipped.</li>
  <li><strong>The result:</strong> ~700 lines of duplicated config replaced by ~400 lines of database-backed infrastructure. Six weeks of work, zero broken integrations, and a class of bugs eliminated for good.</li>
</ul>

<h2>Why this was worth fixing</h2>

<p>It started as a small feature request: add three new countries to the supported-countries list.</p>

<p>I was a software engineer at Smartcar at the time. I went looking for where the list lived, and I found it in the auth service. I added three lines, ran the tests, opened the PR. Then a teammate caught it: "you also need to update it in the dashboard frontend." I added the three countries there. Then in the compatibility matrix. Then in an internal database-proxy service. Then in a backend utility module. Then in a region-grouping helper.</p>

<p>By the time I was done with the "simple" feature, I had touched six repositories and ended up shipping a coordinated multi-PR change. The next person to add or remove a country would have to do the same thing — or, more likely, miss one of the six places, and the system would be subtly inconsistent for some subset of users.</p>

<p>It wasn't the kind of bug that crashes anything. It was the kind that quietly makes the user experience inconsistent for some people, depending on which surface of the product they were looking at.</p>

<p>I scoped a follow-up project to consolidate all six hardcoded lists into a single source of truth and migrate every consumer over to it. Six weeks later it was done.</p>

<h2>The shape of the problem</h2>

<p>The data itself was trivial: roughly 30 to 60 country records, each with a code, display name, region, and an icon URL. It changed maybe four times a year as the product expanded.</p>

<p>The complexity wasn't in the data — it was in the consumers:</p>

<ul>
  <li>An <strong>auth service</strong> used the list to validate user country selection, with synchronous lookups baked into request middleware.</li>
  <li>A <strong>compatibility-matrix frontend</strong> used it to populate region-grouped dropdowns.</li>
  <li>A <strong>developer dashboard</strong> used it inside Redux sagas to populate a playground UI.</li>
  <li>A <strong>database-proxy service</strong> had no idea the list existed but would need to expose it.</li>
  <li>A <strong>Netlify function</strong> brokered between the static marketing site and the dashboard's backend.</li>
  <li>Several <strong>region groupings</strong> ("Europe," "North America") were derived from the country list.</li>
</ul>

<p>Each consumer had different latency tolerances, different cache lifetimes, and different deployment cadences. A simple "remove the list and point everything at the database" approach wouldn't work. Some consumers needed near-instant lookup. Some could tolerate hundreds of milliseconds. The static site compiled at build time and couldn't make a runtime DB call at all.</p>

<h2>The plan</h2>

<p>I designed the migration top-down: start at the database, work outward to the leaves, leave the existing hardcoded lists in place until each consumer was migrated, then remove them in a final cleanup.</p>

```text
Postgres table  →  ORM model + queries  →  DB-proxy whitelist
   →  Auth service middleware  →  Dashboard backend
   →  React hooks + sagas + Netlify function
```

<p>The key constraint: at every stage, the system had to keep working. No all-at-once cutover.</p>

<h2>Stage 1 — the database</h2>

<p>I created a <code>supported_countries</code> table with one row per country. The schema is small but two choices mattered:</p>

```sql
CREATE TABLE countries (
    code VARCHAR(3) NOT NULL,
    display_name VARCHAR(100) NOT NULL,
    icon VARCHAR(255),
    region VARCHAR(100) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
```

<p><strong>No synthetic id.</strong> The country code (ISO 3166-1) is already a stable, globally unique identifier. Adding an autoincrement <code>id</code> would have been one more thing to keep in sync between environments. I added a primary-key constraint on <code>code</code> in a follow-up migration.</p>

<p><strong>Region as a string, not a foreign key.</strong> I considered normalizing into a <code>regions</code> table, but decided not to. There are only five regions, they don't change, and a foreign key would have meant every consumer needed to do a join. The extra normalization wouldn't have gained much, and it would have added query complexity for every consumer.</p>

<h2>Stage 2 — the ORM model and queries</h2>

<p>I added a Sequelize <code>Country</code> model and three queries: <code>findAll</code>, <code>getByCode</code>, and <code>getByRegion</code>. The integration tests for these queries were the easiest tests on the project — and they paid off, because every consumer downstream relied on them being correct.</p>

<h2>Stage 3 — the database-proxy whitelist</h2>

<p>The database-proxy service was a thin layer that let other services execute pre-approved queries against the database without coupling those services to the schema. Every callable query had to be explicitly whitelisted to prevent unbounded query exposure.</p>

<p>I added <code>findAll</code> and <code>getByCode</code> to the whitelist for the new <code>Country</code> model. While I was there, I fixed a latent bug where an empty <code>params</code> object wasn't iterable — caught by the new query exercising a previously-unused code path. A classic case of stale code being exercised in a new way.</p>

<h2>Stage 4 — the auth service</h2>

<p>This was the hardest migration. The auth service had a large set of synchronous country utilities — <code>isInvalidCode</code>, <code>getMenuOptions</code>, <code>getRegion</code>, <code>getCodesByRegion</code>, <code>getFallback</code> — embedded throughout request middleware, all of which expected synchronous lookups.</p>

<p>The migration had three parts:</p>

<ol>
  <li><strong>Add a session-level country list.</strong> I created a middleware (<code>attachCountries</code>) that ran early in the request lifecycle, fetched the countries from the database (with caching), and attached them to the session. Every downstream util then read from the session instead of an imported static map.</li>
  <li><strong>Make the utils source-agnostic.</strong> Each util got rewritten to accept the country list as input rather than reading from a static module. This let me migrate consumers one at a time and keep tests passing.</li>
  <li><strong>Consolidate the helpers.</strong> The originals were scattered. I moved them into one module so future changes had one place to land.</li>
</ol>

<p>I also improved an error message while I was there. The auth service used to throw "country is invalid" for both unrecognized country codes <em>and</em> unsupported-but-valid countries. I split those into two errors — "country is invalid" (genuinely malformed input) and "country not supported" (valid input we just don't operate in). Customers building country selectors had been asking for that distinction for a while.</p>

<h2>Stage 5 — the dashboard</h2>

<p>The developer dashboard had a country selector backed by a Redux saga. I added a <code>dbProxy</code> service to the root saga and reducers, wrote a <code>fetchCountries</code> saga that called the new endpoint, and updated the playground to consume the result. I added a <code>node-cache</code> instance with a check period to avoid hammering the database.</p>

<h2>Stage 6 — the static marketing site</h2>

<p>This one was a static site that couldn't make runtime database calls. The live result of this stage is publicly visible at <a href="https://smartcar.com/global" target="_blank" rel="noreferrer">smartcar.com/global</a> — the country list and region groupings on that page are rendered from the database I set up in stage 1, via the Netlify function described below.</p>

<p>I added a Netlify function (<code>countries</code>) that fetched from the database and cached the result, plus two new React hooks:</p>

```js
const { countries, isLoading } = useCountries();
const { matrix } = useCompatibilityMatrix({ countries });
```

<p>The <code>getRegion</code> util that consumers across the codebase used had been synchronous; I made it async and updated every call site. I also alphabetized the country lists returned from <code>getOptionsByRegion</code>, which had been a nagging design issue for a long time.</p>

<h2>Caching, layer by layer</h2>

<p>Every layer of the system had a different caching strategy because every layer had different freshness requirements:</p>

<ul>
  <li><strong>Auth service:</strong> an in-memory map plus a session-level snapshot, refreshed on a TTL.</li>
  <li><strong>Dashboard backend:</strong> <code>node-cache</code> with a check period.</li>
  <li><strong>Netlify function:</strong> in-memory cache that lived for the function's invocation.</li>
  <li><strong>Frontend hooks:</strong> SWR-style caching at the component level.</li>
</ul>

<p>The country list updates roughly four times a year, so five-minute staleness was fine everywhere. Picking the right cache for each layer mattered less than picking the right <em>lifetime</em> for that cache. Too long, and a country addition takes hours to propagate. Too short, and the database gets called constantly for no real reason.</p>

<h2>Rollout</h2>

<p>Because every consumer had a "before" version (hardcoded list) and an "after" version (DB-backed), I could ship them independently. I deployed in this order:</p>

<ol>
  <li>Database migration + ORM + queries — invisible to everyone.</li>
  <li>Database-proxy whitelist — invisible to everyone.</li>
  <li>Dashboard backend migration — invisible to users (same data, different source).</li>
  <li>Static marketing site — first user-visible change, alphabetized lists.</li>
  <li>Auth service — replaced static list with session-level data.</li>
  <li>Dashboard frontend — final consumer.</li>
</ol>

<p>At every stage, the previous stages' hardcoded lists were still in place. A bug in stage 4 wouldn't have affected stages 1–3. After everything was migrated, the static lists were deleted in a single cleanup PR.</p>

<h2>Telemetry</h2>

<p>I added structured logs to every fetch — which service, which cache layer, hit or miss, query duration. After two weeks of production traffic I could see exactly how often each layer was hitting the database (rarely, thanks to caching), how long the queries took (low single-digit milliseconds), and whether any consumer was misconfigured.</p>

<p>The telemetry caught one real bug: the Netlify function was bypassing its cache because of a path-resolution issue. I'd have noticed eventually, but the logs caught it within a day.</p>

<h2>What I'd do differently</h2>

<p><strong>Start with telemetry.</strong> I added the structured logs midway through the migration. If I'd added them in stage 1, I'd have had baseline data on which consumers actually called the static list and how often, which would have informed cache-lifetime decisions from the start.</p>

<p><strong>Push back on the Netlify-function layer.</strong> It added complexity for marginal benefit. In retrospect I'd have argued for either a build-time fetch (regenerate the static site when countries change) or a direct call from the static site to the dashboard backend.</p>

<p><strong>Decompose the auth service migration further.</strong> I shipped it as one large PR. It would have been less risky as three smaller ones, even if each shipped behind a feature flag.</p>

<h2>Takeaways</h2>

<p>A few takeaways from the project:</p>

<ol>
  <li><strong>Hardcoded configuration tends to drift out of sync, especially in places no one looks.</strong> When six places need to be updated together, someone will miss one. The result usually isn't a dramatic failure — it's a slow drift toward inconsistency, where different parts of the product show different things to the same user. Migration projects like this aren't flashy, but they prevent a whole class of bugs instead of patching them one at a time.</li>
  <li><strong>Top-down migrations are easier than doing everything at once.</strong> Because every layer kept its existing hardcoded list until its replacement was ready, the system stayed working throughout. There was no coordinated cutover and no risky rollback. The only project-wide step at the end was deleting the now-unused static lists.</li>
</ol>

<hr />

<p><em>If you've worked on a similar migration — or are about to — I'd love to compare notes. Reach out via <a href="https://www.linkedin.com/in/naomiperez/" target="_blank" rel="noreferrer">LinkedIn</a> or email.</em></p>
