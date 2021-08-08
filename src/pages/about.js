import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import Blurb from '../components/Blurb';
import { headData } from '../mock/data';
import { StaticImage } from 'gatsby-plugin-image';
import SEO from '../components/SEO';

export default function About() {
  return (
    <Layout>
      <SEO title="About Me" description="About Naomi Perez" />
      <Blurb title="About Me">
        <p>Junior software engineer and graduate of CS @ UMD.</p>
      </Blurb>
      <div className="about">
        <div className="row">
          <p>
            Hi, I'm Naomi. I'm a software engineer and graduate from the University of Maryland in
            College Park where I studied Computer Science.
          </p>
        </div>
        <div className="row">
          <StaticImage src="../images/umd.png" width="200" alt="UMD Logo" id="image1" />
        </div>
        <div className="row">
          <p>
            My prorgamming career began in high school when I graduated from the Girls Who Code
            Summer Immersion Program. Since discovering my passion, I've worked in multiple
            computational research labs, contributed to multiple projects through my internships at
            the USC Information Science Institute, and built several personal projects and
            applications to continuously learn and develop my technical skills.
          </p>
        </div>
        <div className="row">
          <StaticImage src="../images/gwc.png" width="574" alt="GWC Group Picture" id="image2" />
        </div>
      </div>
    </Layout>
  );
}
