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
          <h2>Extract Transform Load Process for Extending WikiData</h2>
          <h4 className="no-underline">
            A process I designed and documented for anyone who has the necessary ISI tools to extend a free and open knowledge base, WikiData.
          </h4>
          <p>
            <small>
              <i>
                Tools: Akka Framework, Java, Eclipse
              </i>
            </small>
          </p>
          <p></p>
          <h2>Akka Resource Manager Actor</h2>
          <h4 className="no-underline">
            A concurrent, message-driven resource manager built with Akka framework in Java.
          </h4>
          <p>
            <small>
              <i>
                Tools: Akka Framework, Java, Eclipse
              </i>
            <br></br>
            This system allows users to request abstract resources. A ResourceManager forwards requests for remote resources, and processes requests to access and manage local resources (e.g., write access to a resource, enable/disable resource).
            </small>
          </p>
          <p>

            I built this program in a concurrent and distributed software course. Multithreaded and concurrent software was a weakness of mine, and as I began to teach myself React using async functionality, I realized I couldn't keep turning away from necessity to understand mulithreaded programs.
            </p>
            <p>
            For this project, I spent a lot of time planning by note-taking, drawing diagrams, and overall forming a deep understanding of the Akka message-passing framework. This planning process made testing and debugging a very efficient and painless process; I was able to develop a methodology for planning and understanding a complex project in a short amount of time. I got a perfect score by the professors tests, too!
          </p>
          <a href="https://www.notion.so/Akka-Resource-Manager-Notes-9167bd1364014888bb0cf09d1f3de5e6" className="button">
            Project Notes
          </a>
        </header>
      </div>
    </Layout>
  )
}