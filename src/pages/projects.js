import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import { headData } from '../mock/data'

import Layout from '../components/Layout'


export default function ProjectsIndex() {
  return (
    <Layout>
      <Helmet title={`Projects | ${headData.title}`} />
      <div className="container">
        <header>
          <h1>Projects.</h1>
          <p className="subtitle">A few projects I&apos;ve created.</p>
          <h2>Coming soon...</h2>
          {/* <h4 className="no-underline">
            A free, open source notes app for the web.
          </h4>
          <p>
            <small>
              <i>
                Date &mdash; Tools: TypeScript, React/Redux, Node/Express, GitHub OAuth
              </i>
            </small>
          </p>
          <p>
            I built this app because I wanted __. I also wanted it to sync without creating users or
            requiring a database.
          </p>
          <p>
            The app allows ___ and more!
          </p>

          <Link to="/building-takenote" className="button">
            Write-up
          </Link>
          <a href="https://github.com/taniarascia/takenote" className="button">
            Source
          </a>
          <a href="https://takenote.dev/app" className="button">
            Demo
          </a>
          <a href="https://takenote.dev" className="link-image" target="_blank">
          </a> */}
        </header>
      </div>
    </Layout>
  )
}