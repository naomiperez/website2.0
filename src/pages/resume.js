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

        <h2>Experience</h2>

        <h3>Smartcar</h3>
        <h4 className="no-underline">Software Engineer II</h4>
        <p>
          <small>
            <i>Dec 2021 — May 2025 | Mountain View, CA (Remote)</i>
          </small>
        </p>
        <ul>
          <li>Built dozens of production-grade API endpoints powering integrations with 35+ car brands</li>
          <li>Developed a sliding window rate limiter to reduce upstream errors and smooth traffic bursts</li>
          <li>Created real-time vehicle data ingestion pipelines using AWS Firehose and Kinesis</li>
          <li>Built a backend-for-frontend service for Smartcar’s Developer Dashboard and metrics</li>
          <li>Developed a simulation platform to mimic real-world API responses for test environments</li>
          <li>Led cross-functional planning, scoped tickets, and mentored junior engineers</li>
          <li>Promoted from Associate SWE to SWE II in under 3 years — a company record</li>
        </ul>

        <h3>USC Information Sciences Institute</h3>
        <h4 className="no-underline">Summer Research Intern</h4>
        <p>
          <small>
            <i>May 2018 — Aug 2019 | Los Angeles, CA</i>
          </small>
        </p>
        <ul>
          <li>Designed ontologies and semantic wikis for a global neuroimaging consortium</li>
          <li>Wrote data transformation logic for T2WML, mapping tabular datasets to Wikidata</li>
        </ul>

        <h3>Deep Brain Neurotech Lab</h3>
        <h4 className="no-underline">Research Intern & Peer Mentor</h4>
        <p>
          <small>
            <i>Aug 2017 — Jan 2019 | College Park, MD</i>
          </small>
        </p>
        <ul>
          <li>Simulated neural networks in Python/NEURON to support non-invasive treatments for neurodegenerative disorders</li>
          <li>Debugged 3D neuroimaging outputs with clinical researchers</li>
          <li>Mentored 40+ students and helped onboard new lab members</li>
        </ul>

        <h2>Technical Skills</h2>
        <p>
          <strong>Languages:</strong> JavaScript, TypeScript, SQL, Python, Java 8 <br />
          <strong>Backend:</strong> Node.js, Express, REST APIs, OAuth 2.0, PostgreSQL, Redis, Microservices, NPM <br />
          <strong>Frontend:</strong> React, React Native, HTML/CSS, Material UI, D3.js <br />
          <strong>Cloud & Infra:</strong> AWS (RDS, CloudWatch Logs, Metrics, Dashboards), Firehose, Kinesis, Docker, Buddy CI <br />
          <strong>Tooling & DevOps:</strong> Git, Linux, Retool, Metabase, Figma
        </p>
      </div>
    </Layout>
  );
}
