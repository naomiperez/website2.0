import React from 'react';
import Layout from '../components/Layout';
import Blurb from '../components/Blurb';
import SEO from '../components/SEO';

export default function Resume() {
  return (
    <Layout>
      <SEO title="Resume" description="Naomi Perez Resume Overview" />
      <Blurb title="Resume">
        <p>A brief history of where I’ve been and what I’ve built so far.</p>
      </Blurb>
      <div className="container">
        <h2>Education</h2>
        <h3>University of Maryland, College Park</h3>
        <h4 className="no-underline">B.S. in Computer Science</h4>
        <p>
          <small>
            <i>August 2017 — May 2021</i>
          </small>
        </p>

        <h2>Technical Skills</h2>
        <p>
          <strong>Languages:</strong> JavaScript, TypeScript, SQL, Python, Java 8 <br />
          <strong>Backend:</strong> Node.js, Express, REST APIs, OAuth 2.0, PostgreSQL, Redis, NPM, WebSockets, Microservices<br />
          <strong>Frontend:</strong> React, React Native, HTML/CSS, Material UI, D3.js <br />
          <strong>Cloud & Serverless:</strong> AWS (RDS, S3, Lambda, API Gateway, Kinesis, CloudWatch Logs & Alarms), Docker <br />
          <strong>Tooling & DevOps:</strong> Git, Buddy CI, Linux, Retool, Metabase, Figma, Postman, Agile/Scrum
        </p>

        <h2>Experience</h2>

        <h3>Smartcar</h3>
        <h4 className="no-underline">Software Engineer II</h4>
        <p>
          <small>
            <i>Dec 2021 — May 2025 | Mountain View, CA (Remote)</i>
          </small>
        </p>
        <ul>
          <li>Owned development of dozens of full-stack API features connecting 35+ car brands, enabling developers to
interact with connected vehicles through a unified, consent-based interface</li>
          <li>Built a sliding window rate-limiting system to prevent traffic bursts and reduce upstream errors, improving API
stability and reliability for developers</li>
          <li>Engineered real-time ingestion pipelines for streaming vehicle data, integrating Firehose/Kinesis data into
analytics tools for observability</li>
          <li>Developed Backend-for-Frontend service to support a redesigned Developer Dashboard, enabling
data-driven UX features and customer usage analytics, boosting dashboard engagement by 30%</li>
          <li>Regularly contributed to cross-functional project planning, writing and scoping tickets, and mentoring junior
teammates on debugging, automated testing (Selenium, Jest, Mocha), monitoring, and log instrumentation</li>
          <li>Promoted twice in less than 3 years - setting a company record</li>
      </ul>

        <h3>USC Information Sciences Institute (ISI), AI Division</h3>
        <h4 className="no-underline">Summer Research Intern</h4>
        <p>
          <small>
            <i>May 2018 — Aug 2019 | Los Angeles, CA</i>
          </small>
        </p>
        <ul>
          <li>Collaborated with researchers at a global neuroimaging consortium to design a structured knowledge base
with semantic search capabilities via SPARQL — enabling neuroscience teams worldwide to query and
explore interconnected research data</li>
          <li>Designed data transformation logic for T2WML, a tool for mapping tabular data to Wikidata, enabling
ingestion of large CSV datasets (e.g. 2M+ rows) into structured knowledge graphs</li>
        </ul>

        <h3>Deep Brain Neurotech Lab</h3>
        <h4 className="no-underline">Research Intern & Peer Mentor</h4>
        <p>
          <small>
            <i>Aug 2017 — Jan 2019 | College Park, MD</i>
          </small>
        </p>
        <ul>
          <li>Built and simulated biologically realistic neuronal networks in NEURON using Python, modelling biochemical
neural activity under an FDA M-CERSI grant to support non-invasive treatments for neurodegenerative
disorders (e.g., TMS, EMS)</li>
          <li>Partnered with clinical researchers to identify and resolve data inconsistencies in 3D neuroimaging outputs,
refining simulation results for accuracy and reliability</li>
          <li>Trained and mentored 40+ students, facilitating peer learning and tool usage</li>
        </ul>
      </div>
    </Layout>
  );
}
