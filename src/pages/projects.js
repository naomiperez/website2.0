import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/Layout';
import Blurb from '../components/Blurb';
import SEO from '../components/SEO';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../mock/data';

// StaticImage requires a literal src at build time, so hero images are
// declared here (one per project id) instead of inside the data file.
const heroes = {
  'moorse-code': (
    <StaticImage
      src="../images/moorseWeb.png"
      alt="MoorseCode web app translating English into cow-themed Morse code"
    />
  ),
  'add-mood-tracker': (
    <StaticImage
      src="../images/add/home.PNG"
      alt="Add+ home screen showing today's mood log"
    />
  ),
  'testudo-noserubber': (
    <StaticImage
      src="../images/tnr.png"
      alt="Testudo Noserubber 2D platformer gameplay screenshot"
    />
  ),
};

// Split projects into "At Smartcar" (work) and "Personal projects".
// Anything with `context: 'Smartcar'` goes into the work section.
const smartcarProjects = projectsData.filter((p) => p.context === 'Smartcar');
const personalProjects = projectsData.filter((p) => !p.context);

function ProjectSection({ id, title, subtitle, projects }) {
  if (!projects.length) return null;
  return (
    <section className="project-section" aria-labelledby={id}>
      <h2 id={id} className="project-section__title">
        {title}
      </h2>
      {subtitle && <p className="project-section__subtitle">{subtitle}</p>}
      <div className="project-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            hero={heroes[project.id] || null}
          />
        ))}
      </div>
    </section>
  );
}

export default function ProjectsIndex() {
  return (
    <Layout>
      <SEO title="Projects" description="Naomi Perez's Projects" />
      <Blurb title="Projects">
        <p>Selected work, plus side projects I built to learn.</p>
      </Blurb>
      <div className="container">
        <ProjectSection
          id="at-smartcar"
          title="At Smartcar"
          projects={smartcarProjects}
        />
        <ProjectSection
          id="personal-projects"
          title="Personal projects"
          projects={personalProjects}
        />
      </div>
    </Layout>
  );
}
