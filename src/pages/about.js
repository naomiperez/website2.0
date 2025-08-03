import React from 'react';
import Layout from '../components/Layout';
import Blurb from '../components/Blurb';
import SEO from '../components/SEO';
import { StaticImage } from 'gatsby-plugin-image';

export default function About() {
  return (
    <Layout>
      <SEO title="About Me" description="About Naomi Perez" />
      <Blurb title="About Me">
        <p>Fullstack software engineer focused on developer experience and scalable APIs.</p>
      </Blurb>
      <div className="about">
        <div className="row">
          <p>
            Hi, I'm Naomi — a software engineer with a background in building APIs, developer tools,
            and internal platforms. I graduated with a B.S. in Computer Science from the University
            of Maryland and most recently worked as a Software Engineer II at Smartcar, where I
            built scalable APIs for 35+ car brands and led projects that improved developer
            onboarding, testing, and observability.
          </p>
        </div>
        <div className="row">
          <StaticImage src="../images/umd.png" width="200" alt="UMD Logo" id="image1" />
        </div>
        <div className="row">
          <p>
            I got my start in programming through the Girls Who Code Summer Immersion Program, and
            I’ve been passionate about creating accessible and impactful software ever since. Over
            the years, I’ve worked on semantic web tools at USC ISI, simulated neural networks at
            UMD’s Neurotech Lab, and developed real-time data pipelines and simulation tooling at
            Smartcar.
          </p>
        </div>
        <div className="row">
          <StaticImage src="../images/gwc.png" width="574" alt="GWC Group Picture" id="image2" />
        </div>
        <div className="row">
          <p>
            I'm especially interested in projects that sit at the intersection of infrastructure,
            UX, and developer tooling — anything that makes systems smoother and empowers other
            engineers. Outside of work, I like drawing, arts & crafts, exploring LA, and thinking
            a little too hard about API design and dashboard layouts.
          </p>
        </div>
      </div>
    </Layout>
  );
}
