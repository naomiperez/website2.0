import React from 'react';
import Helmet from 'react-helmet';
import Projects from '../components/Projects';
import { headData } from '../mock/data';
import courses from '../mock/courses';
import Layout from '../components/Layout';
import Blurb from '../components/Blurb';
import SEO from '../components/SEO';

export default function Resume() {
  return (
    <Layout>
      <SEO title="Resume" description="Naomi Perez Resume Overview" />
      <Blurb title="Resume">
        <p>A history of my professional and academic experiences</p>
      </Blurb>
      <div className="container">
        <h2>University of Maryland, College Park</h2>
        <h4 className="no-underline">B.S. in Computer Science</h4>
        <p>
          <small>
            <i>August 2017 &mdash; May 2021</i>
          </small>
        </p>
        <h4 className="no-underline">Courses:</h4>
        <Projects data={courses} />

        <h2>Experience</h2>
        <h3>
          USC Information Science Institute (AI Group under Dr. Yolanda Gil)
        </h3>
        <h4 className="no-underline">Web Developer Consultant</h4>
        <p>
          <small>
            <i>July 2021 &mdash; Present</i>
          </small>
        </p>
        <p>
        • Designing responsive and easily discoverable websites (with HTML, CSS, SCSS, JavaScript,
          and React.js) and refactoring websites, for clients
        </p>
        <h4 className="no-underline">Data Engineer Intern</h4>
        <p>
          <small>
            <i>May 2019 &mdash; August 2019</i>
          </small>
        </p>
        <p>
        • Developed ETL process to extend open-source knowledge base, Wikidata, with large public datasets <br></br>
        • Optimized Python app for use in ETL process via integration testing and resolving errors found
        </p>
        <h4 className="no-underline">Ontology Research Intern</h4>
        <p>
          <small>
            <i>May 2018 &mdash; August 2018</i>
          </small>
        </p>
        <p>
        • Gathered requirements for and developed semantic webpages, knowledge graphs, and wikis that allow neuroimaging consortium to efficiently query data of 25,000 subjects and 1,400 scientists
        </p>

        <h3>
          Deep Brain Neurotech Lab, University of Maryland
        </h3>
        <h4 className="no-underline">Peer Mentor and Research Intern</h4>
        <p>
          <small>
            <i>August 2017 &mdash; January 2019</i>
          </small>
        </p>
        <p>
          • Programmed models of neurons with HOC scripting language used in simulations of neuronal networks <br></br>
          • Mentored cohort of 40+ students and presented research to head neurologists of UMD Medical Center
        </p>

        <p>
        * Offered Summer 2020 Software Engineering Internship at AT&T; internship cancelled due to COVID-19
        </p>

        <h2>Organizations</h2>
        <h3>Girls Who Code & Association of Women in Computing</h3>
        <p>
          <small>
            <i>June 2016 &mdash; Present</i>
          </small>
        </p>
        <p>
        • Mentored and created curriculum for ~40 young women in CS principles as teaching assistant for Girls Who Code Club <br></br>
        • Awarded two scholarships to attend oSTEM 2020 and Grace Hopper 2020 Conferences <br></br>
        • Graduated from GWC Summer Immersion Program in high school and built game in Python as final project
        </p>
        <h3>Lean On Me Mental Health Text Line – Shift Lead</h3>
        <p>
          <small>
            <i>June 2020 &mdash; May 2021</i>
          </small>
        </p>
        <p>
        • Provided texting support, trained new members, and managed shift schedule and communication
        </p>

        <h2>Girls Who Code Summer Immersion Program</h2>
        <h4 className="no-underline">Where my programming career began...</h4>
        <p>
          <small>
            <i>June 2016 &mdash; August 2016</i>
          </small>
        </p>
        <p>
          At 15 years old, I was denied access to the only computer science course offered at my
          school due to the course capacity being full. As a young feminist, I was dejected since
          the students enrolled were made up of 90% male-identifying students. Persistent to learn
          CS fundamentals in a structured, academic environment, I applied and was accepted into
          this 7-week long Computer Science program for high school students. I learned computer
          science and hardware principles using various languages and technologies like Scratch,
          Python, Arduino with C++, HTML, CSS, and JavaScript.
        </p>
        <br></br>
        <p>
          <a
            href="https://medium.com/@ConnectToGood/overheard-this-summer-at-at-t-offices-22a9ea96ec73#1752"
            target="_blank"
          >
            See my quote featured in Connect To Good Medium article on GWC Summer Program
          </a>
        </p>
        <br></br>
        <p>
          I also gained invaluable communication skills, experience in pair-programming, a
          vocabulary to understand my experiences as an underrepresented identity in STEM, and had
          the opportunity to present a formal proposal to the Fullscreen Media leadership team
          (including Sarah Harden, President of Otter Media at Fullscreen Media) for a new feature
          to implement in their upcoming mobile-app. This feature was added to the app one year
          after my presentation (named "Watch Party").
          <br></br>
          <br></br>
          <p>
            <a
              href="https://about.att.com/csr/home/blog/2016/07/a_field_trip_to_the.html"
              target="_blank"
            >
              Article by Senior Communications Manager of Corporate Social Responsibility at AT&T,
              Brynne Dunn, on attending our Fullscreen proposal presentations
            </a>
          </p>
        </p>
        <br></br>
        <p>
          For my final project, I worked in a team to develop a 2D side-scroller game in Python
          using the PyGame library. I pair programmed game mechanics (inputs, sprites,
          animations/redrawing, etc.) in a main loop via event polling and handling. The game was
          named Farm Factory Flee, in which a pig must escape an angry farmer and avoid obstacles
          like pitchforks and hay bails D: ! I lead the gameplay design, which was inpired by my
          recent decision to become vegan.
        </p>
      </div>
    </Layout>
  );
}
