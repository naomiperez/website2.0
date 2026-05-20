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

export default function ProjectsIndex() {
  return (
    <Layout>
      <SEO title="Projects" description="Naomi Perez's Projects" />
      <Blurb title="Projects">
        <p>A few highlights of my projects — shipped apps, coursework, and learning experiments.</p>
      </Blurb>
      <div className="container">
        <div className="project-grid">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              hero={heroes[project.id] || null}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
}
