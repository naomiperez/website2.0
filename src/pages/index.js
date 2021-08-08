import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import { headData } from '../mock/data';
import projects from '../mock/projects';
import Projects from '../components/Projects';
import Blurb from '../components/Blurb';
import Media from '../components/Media';

const Home = () => {
  const { title } = headData;

  const Section = ({ title, children, button, ...props }) => (
    <section {...props}>
      <h2 className="section-title">
        {title}
        {button && (
          <Link className="section-button" to="/blog">
            View all
          </Link>
        )}
      </h2>
      {children}
    </section>
  );

  return (
    <>
      <Layout>
        <Helmet title={title} />
        <Blurb title="I'm Naomi Perez." showImage={true}>
          <p>
            I&apos;m a software developer specializing in building web and mobile applications.
            Welcome to my digital portfolio! 😊
          </p>
        </Blurb>
        <div className="container index">
          <Section title="Projects.">
            <Projects data={projects} />
          </Section>
          <Section title="Where else you can find me...">
            <Media></Media>
          </Section>
        </div>
      </Layout>
    </>
  );
};

export default Home;
