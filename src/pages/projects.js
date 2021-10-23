import React from 'react';
import Helmet from 'react-helmet';
import { StaticImage } from 'gatsby-plugin-image';
import { headData } from '../mock/data';
import Layout from '../components/Layout';
import Blurb from '../components/Blurb';
import SEO from '../components/SEO';

export default function ProjectsIndex() {
  return (
    <Layout>
      <SEO title="Projects" description="Naomi Perez's Projects" />
      <Blurb title="Projects">
        <p>A few highlights of my projects</p>
      </Blurb>
      <div className="container">
        <div className="full-project">
          <h2>MoorseCode</h2>
          <p style={{ textIndent: 0 }}>
            <small>
              <i>Technologies: JavaScript, Node.js, npm, React.js, MaterialUI</i>
            </small>
          </p>
          <p>
            MoorseCode is a series of projects that allow users to encode and decode a version of
            morse code, Moo-rse Code. <br /><br />
            <p>
              npx Module: An open-source npx command line tool that allows users to encode and decode Moorse Code.{' '}
              <br />
              <StaticImage src="../images/moorse.png" alt="Moorse Code NPX Module Example" />
              Link:{' '}
              <a href="https://www.npmjs.com/package/moorse-code">
                https://www.npmjs.com/package/moorse-code
              </a>
            </p>
            <br />
            <p>
              Web App: A web app that allows users to translate Moorse Code. <br />
              <StaticImage src="../images/moorseWeb.png" alt="Moorse Code Web App Example" />
              Link:{' '}
              <a href="https://moorse-code.netlify.app/" target="_blank">
                https://moorse-code.netlify.app/
              </a>
            </p>
          </p>
        </div>
        <div className="full-project">
          <h2>AddMoodTracker</h2>
          <p style={{ textIndent: 0 }}>
            <small>
              <i>
                TTechnologies: React.js, React Native, Expo SDK, Firestore, Firebase Auth, Victory
                Native (Data Visualization Library)
              </i>
            </small>
          </p>
          <p>
            Add+ allows users to track daily logs of various mental health factors such as mood,
            sleep, caffeine intake, and energy levels. Add's simplicity of use and soothing,
            coffee-themed UI are tailored for those who struggle with executive dysfunction.
            Utilizing Firebase Authentication and Firestore, users can easily register via email,
            and all of their data is stored in a persistent and secure database. Various software
            platforms, tools, and modules such as React Native, Expo, @react-navigation, and the
            React Context API contribute to Add's fast loading and high performance.
          </p>
          <p>
            Add+ also generates visualizations of personal data insights on the "Insights" tab. This
            feature is implemented using the Victory Native data visualization library.
          </p>
          <StaticImage src="../images/add/onboard1.PNG" width="150" alt="App Onboarding Screen" />
          &emsp;&emsp;
          <StaticImage src="../images/add/onboard2.PNG" width="150" alt="App Onboarding Screen" />
          &emsp;&emsp;
          <StaticImage src="../images/add/onboard3.PNG" width="150" alt="App Onboarding Screen" />
          &emsp;&emsp;
          <StaticImage
            src="../images/add/login.PNG"
            width="150"
            alt="App Login Screen"
          ></StaticImage>
          &emsp;&emsp;
          <StaticImage
            src="../images/add/home.PNG"
            width="150"
            alt="App Home Screen 1"
          ></StaticImage>
          &emsp;&emsp;
          <StaticImage
            src="../images/add/home2.PNG"
            width="150"
            alt="App Home Screen 2"
          ></StaticImage>
          &emsp;&emsp;
          <StaticImage src="../images/80app/insights.PNG" width="150" alt="App Insights Page" />
        </div>
        <div className="full-project">
          <h2>MAFIA43 Android App</h2>
          <h4 className="no-underline">
            A mobile app built in Android Studio that serves as a virtual moderator for the Mafia
            party game
          </h4>
          <p style={{ textIndent: 0 }}>
            <small>
              <i>Technologies: Android Studio, Kotlin</i>
            </small>
          </p>
          <p>
            Because the classic Mafia party game prohibits a moderator from participating in the
            game, I worked with a remote team to develop this mobile app that automates the
            moderator role. I was able to support my team in the struggles of collaborating remotely
            by setting up a line of communication, meeting schedule, and a task breakdown plan that
            worked for all members.
          </p>
          <p>
            I implemented multiple UI components from mockups created by team members, the UI and
            logic of a reusable and scrollable player selection component, night phase screens, and
            the win-state detection logic of the game. I built these features in Android Studio
            using Kotlin, a programming language comparable to Java with added features.
          </p>
          <p>
            <center>
              <a
                href="https://github.com/naomiperez/CMSC436-Group-43"
                target="_blank"
                className="media no-underline"
                style={{ padding: 0, textIndent: 0 }}
              >
                <StaticImage src="../images/github.png" width="70" alt="GitHub Icon"></StaticImage>
                <p>See GitHub Repo</p>
              </a>
            </center>
          </p>
        </div>
        <div className="full-project">
          <h2>Testudo Noserubber Game</h2>
          <h4 className="no-underline">
            A 2D-platformer game built in Unity that promotes UMD student health
          </h4>
          <p style={{ textIndent: 0 }}>
            <small>
              <i>Technologies: Unity, C#</i>
            </small>
          </p>
          <p>
            I contributed to a four person team to build this 2D platformer game with the Unity game
            engine with C#. Without using any imported assets, and with a relatively short amount of
            time (2-3 weeks), our team was able to design engaging gameplay that references the UMD
            mascot, Testudo, and the student tradition of rubbing the nose of Testudo statues on
            campus for good luck.
          </p>
          <p>
            Using an Agile methodology, I integrated and tested my contributions with team members
            code. Using Unity GameObjects, Components, and C# scripts, I implemented various
            animations and game mechanics including collision detection with event triggers (C#
            scripts), game physics, moving platforms via linear interpolation with vectors, and
            sound effects. I also lead the creative design of the gameplay and UI.
          </p>
          <center>
            <StaticImage src="../images/tnr.png" width="600" alt="Gameplay Screenshot" />
          </center>
          <br></br>
          <p>
            <center>
              <a
                href="https://github.com/naomiperez/TestudoNoserubber"
                target="_blank"
                className="media no-underline"
                style={{ padding: 0 }}
              >
                <StaticImage src="../images/github.png" width="70" alt="GitHub Icon"></StaticImage>
                <p>See GitHub Repo</p>
              </a>
            </center>
          </p>
        </div>
        <div className="full-project">
          <h2>Ticket Tracking System API</h2>
          <p style={{ textIndent: 0 }}>
            <small>
              <i>Technologies: JavaScript, Node.js, Express.js, MongoDB</i>
            </small>
          </p>
          <p>
            To improve my skills in vanilla JavaScript and RESTful APIs, I built this
            ticket-tracking system API (similar to applications like JIRA) in JavaScript. This
            RESTful API supports basic CRUD operations. I used Express.js and Node.js for the
            back-end to create endpoints, utilized MongoDB as the database, and defined a data
            schema using MongoDB's Mongoose.
          </p>
        </div>
        <div className="full-project">
          <h2>Akka Resource Manager Actor</h2>
          <h4 className="no-underline">
            A concurrent, message-driven resource manager built with Akka framework in Java.
          </h4>
          <p style={{ textIndent: 0 }}>
            <small>
              <i>Technologies: Akka Framework, Java, Eclipse, JUnit</i>
            </small>
          </p>
          <p>
            This system allows users to request abstract resources. A ResourceManager forwards
            requests for remote resources, and processes requests to access and manage local
            resources (e.g., write access to a resource, enable/disable resource).
          </p>
          <p>
            In efforts to improve my skills in multithreaded and concurrent software, I spent a lot
            of extra time planning and creating unit tests for this project.
          </p>
          <p>
            I planned and organized the architecture by note-taking, drawing diagrams, and overall
            forming a deep understanding of the Akka message-passing framework. This planning
            process made testing and debugging a very efficient and painless process; I was able to
            develop a methodology for planning and understanding a complex project in a short amount
            of time. I ended up passing 100% of the professors tests, as well.
          </p>
          <a
            href="https://www.notion.so/Akka-Resource-Manager-Notes-9167bd1364014888bb0cf09d1f3de5e6"
            className="button"
            target="_blank"
          >
            Project Notes
          </a>
        </div>
      </div>
    </Layout>
  );
}
