import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import { headData } from '../mock/data'
import projects from '../mock/projects'
import Projects from '../components/Projects'
import Blurb from '../components/Blurb'
import Media from '../components/Media'
import naomi from '../images/avatar.jpg'

export default () => {
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
  )

  return (
    <>
      <Layout>
      <Helmet title={title} />
      <Blurb title="I'm Naomi Perez." img={naomi}>
        <p>
          I&apos;m a software engineer and an artist. Welcome to my digital portfolio &nbsp; :)
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