import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Naomi Perez', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Naomi',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://docs.google.com/document/d/120Et-twQ4ST9mPET73sFLFP4TX0d1Q_S8u8O_z49K_M/edit?usp=drive_link',
};

// PROJECTS DATA
// Order within each section = display order. The Projects page splits
// these into "At Smartcar" (context: 'Smartcar') and "Personal projects"
// (no context) — so order within each group matters more than overall order.
export const projectsData = [
  // -------------------- Smartcar (professional) --------------------
  {
    id: 'sc-rate-limiter',
    emoji: '🚦',
    title: 'Distributed Rate Limiter',
    year: 2023,
    status: 'Shipped',
    category: 'Backend',
    context: 'Smartcar',
    featured: true,
    outcome:
      'A per-vehicle sliding-window rate limiter that shields upstream third-party APIs from misbehaving integrations. Sub-millisecond p99 on the hot path with an atomic check-and-insert in a single Redis round trip. Shipped via a three-stage gated rollout — onboarded every new customer with zero regression to existing integrations and ran for 2+ years.',
    tags: ['Node.js', 'Express', 'Redis', 'Lua', 'TypeScript'],
    links: [],
  },
  {
    id: 'sc-config-migration',
    emoji: '🌍',
    title: 'Full-Stack Config Migration',
    year: 2024,
    status: 'Shipped',
    category: 'Backend',
    context: 'Smartcar',
    featured: true,
    outcome:
      'Consolidated a hardcoded config list duplicated across six services into a single Postgres-backed source of truth — Sequelize models through OAuth middleware up to React hooks, with per-layer caching so the DB hit never lands on the hot path. Eliminated a recurring class of coordinated multi-repo PRs and broke zero in-production integrations.',
    tags: ['Postgres', 'Sequelize', 'Node.js', 'Express', 'React', 'Redux Sagas'],
    links: [],
  },
  {
    id: 'sc-analytics-pipeline',
    emoji: '📊',
    title: 'Analytics Dashboard Pipeline',
    year: 2025,
    status: 'Shipped',
    category: 'Data',
    context: 'Smartcar',
    featured: true,
    outcome:
      'End-to-end customer analytics pipeline behind a redesigned dashboard — Redshift materialized views, Node aggregation processors with gap-backfilling, a Redis caching layer, and React widgets. Sub-second renders, and the graceful-degradation pattern I introduced (empty-shape defaults per processor) became the team standard so one failing query never takes the whole dashboard down.',
    tags: ['Redshift', 'Postgres', 'Node.js', 'Redis', 'React', 'Sequelize', 'Knex'],
    links: [],
  },

  // -------------------- Personal projects --------------------
  {
    id: 'moorse-code',
    emoji: '🐮',
    title: 'MoorseCode',
    year: 2021,
    status: 'Shipped',
    category: 'Web',
    outcome:
      'An open-source npx CLI and companion web app that encode and decode a cow-themed twist on Morse code.',
    tags: ['JavaScript', 'Node.js', 'React', 'MaterialUI', 'npm'],
    links: [
      { label: 'Live demo', href: 'https://moorse-code.netlify.app/' },
      { label: 'npm', href: 'https://www.npmjs.com/package/moorse-code' },
    ],
  },
  {
    id: 'add-mood-tracker',
    emoji: '🧠',
    title: 'Add+ Mood Tracker',
    year: 2021,
    status: 'Shipped',
    category: 'Mobile',
    outcome:
      'A mobile mood tracker designed for people with executive dysfunction — daily logs of mood, sleep, caffeine, and energy with a soothing coffee-themed UI and visual insights.',
    tags: ['React Native', 'Expo', 'Firestore', 'Firebase Auth', 'Victory Native'],
    links: [{ label: 'GitHub', href: 'https://github.com/naomiperez/80' }],
  },
  {
    id: 'mafia43',
    emoji: '🕵️',
    title: 'MAFIA43 Android App',
    year: 2020,
    status: 'Coursework',
    category: 'Mobile',
    outcome:
      'A virtual moderator for the Mafia party game so the moderator can actually play. Built with a remote team — I owned the reusable player-selection component, night-phase screens, and win-state logic.',
    tags: ['Android Studio', 'Kotlin'],
    links: [{ label: 'GitHub', href: 'https://github.com/naomiperez/CMSC436-Group-43' }],
  },
  {
    id: 'testudo-noserubber',
    emoji: '🐢',
    title: 'Testudo Noserubber',
    year: 2020,
    status: 'Coursework',
    category: 'Games',
    outcome:
      'A 2D platformer built in Unity with original assets in under three weeks. I led creative direction and implemented collision detection, moving platforms, animations, and sound.',
    tags: ['Unity', 'C#'],
    links: [{ label: 'GitHub', href: 'https://github.com/naomiperez/TestudoNoserubber' }],
  },
  {
    id: 'ticket-tracker',
    emoji: '🎟️',
    title: 'Ticket Tracking System API',
    year: 2021,
    status: 'Learning project',
    category: 'Backend',
    outcome:
      'A JIRA-style RESTful API for tracking tickets, built to sharpen my vanilla JavaScript and REST design skills. Supports full CRUD with a Mongoose-defined schema.',
    tags: ['JavaScript', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
    links: [],
  },
  {
    id: 'akka-resource-manager',
    emoji: '✉️',
    title: 'Akka Resource Manager Actor',
    year: 2020,
    status: 'Coursework',
    category: 'Backend',
    outcome:
      'A concurrent, message-driven resource manager built on the Akka actor framework. I leaned hard on planning and unit tests, and ended up passing 100% of the professor\'s tests.',
    tags: ['Akka', 'Java', 'JUnit', 'Eclipse'],
    links: [
      {
        label: 'Project notes',
        href: 'https://www.notion.so/Akka-Resource-Manager-Notes-9167bd1364014888bb0cf09d1f3de5e6',
      },
    ],
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
