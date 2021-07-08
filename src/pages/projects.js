import React from 'react'
import Helmet from 'react-helmet'
import { StaticImage } from 'gatsby-plugin-image'
import { headData } from '../mock/data'
import Layout from '../components/Layout'

export default function ProjectsIndex() {
  return (
    <Layout>
      <Helmet title={`Projects | ${headData.title}`} />
        <div className="container">
            <h1>Projects.</h1>
            <p className="subtitle">
              A few projects I&apos;ve created.
            </p>
            <h2>Mood Tracking App</h2>
              <p>
                <small>
                  <i>
                    Tools: React.js, React Native, Expo SDK, Firestore, Firebase Auth, Victory Native (Data Visualization Library)
                  </i>
                </small>
              </p>
              <p>
              I have always wanted to create a mood tracking app, so I was so excited to build this app as a method of teaching myself the React Native framework and improving my skills with React.js, databases, cloud storage, authentication, and data visualization.
              </p>
              <p>
              This app is a current and on-going project for myself. So far, I've implemented account creation and persistent login with Firebase Auth; data storage, management, and querying with Firebase Firestore and React Hooks; and visualization of data insights with the data visualization library. A user can log in to their account with an email and password (or just open the app to the home page if they have previously logged in), log their mood (in addition to other "factors") each day on a calendar, change previous logs, and view personal monthly insights on the Insights page. 
              </p>
              <p>
              In the future, I hope to make improvements to the UI  such as optimizing the rendering of certain components and visual/theme improvements. I also hope to add more "factors" that users can track. The app currently allows for users to log mood and sleep, so in the future I hope to add even more such as energy levels, activity levels, medications, and potentially even implement integrations with other health tracking apps, like Apple Health and Google Fit. With more factors, I also hope to add more complex data insights, where users can compare how factors affect their mood. I've published the app to Expo Web, and I hope to publish it to the IOS App store, as well. All coming soon!
              </p>
              <StaticImage src="../images/80app/home.PNG" width="250" alt="App Homepage" />
              &emsp;&emsp;
              <StaticImage src="../images/80app/sleepTrack.PNG" width="250" alt="App Sleep Tracking on Homepage" />
              &emsp;&emsp;
              <StaticImage src="../images/80app/insights.PNG" width="250" alt="App Insights Page" />
            <h2>MAFIA43 Android App</h2>
              <h4 className="no-underline">
                A mobile app built in Android Studio that serves as a virtual moderator for the Mafia party game
              </h4>
              <p>
                <small>
                  <i>
                    Tools: Android Studio, Kotlin
                  </i>
                </small>
              </p>
              <p>
                Because the classic Mafia party game prohibits a moderator from 
                participating in the game, I worked with a remote team to develop this 
                mobile app that automates the moderator role. I was able to support my 
                team in the struggles of collaborating remotely by setting up a line of 
                communication, meeting schedule, and a task breakdown plan that worked 
                for all members. 
              </p>
              <p>
                I implemented multiple UI components from mockups created 
                by team members, the UI and logic of a reusable and scrollable player 
                selection component, night phase screens, and the win-state detection logic 
                of the game. I built these features in Android Studio using Kotlin, a programming 
                language comparable to Java with added features.
              </p>
            <h2>Testudo Noserubber Game</h2>
            <h4 className="no-underline">
                A 2D-platformer game built in Unity that promotes UMD student health
              </h4>
             <p>
                <small>
                  <i>
                    Tools: Unity, C#
                  </i>
                </small>
              </p>
              <p>
                I contributed to a four person team to build this 2D platformer game 
                with the Unity game engine with C#. Without using any imported assets, and with a
                relatively short amount of time (2-3 weeks), our team was able to design engaging gameplay 
                that references the UMD mascot, Testudo, and the student tradition of rubbing the nose of 
                Testudo statues on campus for good luck.
              </p>
              <p>
                Using an Agile methodology, I integrated and tested my contributions 
                with team members code. Using Unity GameObjects, Components, and C# scripts, I 
                implemented various animations and game mechanics including collision detection 
                with event triggers (C# scripts), game physics, moving platforms via linear interpolation with vectors, 
                and sound effects. I also lead the creative design of the gameplay and UI.
              </p>
              <StaticImage src="../images/tnr.png" width="600" alt="Gameplay Screenshot" />
            <h2>Ticket Tracking System API</h2>
              <p>
                <small>
                  <i>
                    Tools: JavaScript, Node.js, Express.js, MongoDB
                  </i>
                </small>
              </p>
              <p>
                To improve my skills in vanilla JavaScript and RESTful APIs, I built this 
                ticket-tracking system API (similar to applications like JIRA) in JavaScript. 
                This RESTful API supports basic CRUD operations. I used Express.js and Node.js 
                for the backend to create endpoints, used MongoDB as the database, and defined 
                a data schema using MongoDB's Mongoose.
              </p>
            <h2>Akka Resource Manager Actor</h2>
              <h4 className="no-underline">
                A concurrent, message-driven resource manager built with Akka framework in Java.
              </h4>
              <p>
                <small>
                  <i>
                    Tools: Akka Framework, Java, Eclipse
                  </i>
                </small>
              </p>
              <p>
                This system allows users to request abstract resources. A ResourceManager forwards 
                requests for remote resources, and processes requests to access and manage local 
                resources (e.g., write access to a resource, enable/disable resource).
              </p>
              <p>

                I built this program in a concurrent and distributed software course. 
                Multithreaded and concurrent software was a weakness of mine, and as I 
                began to teach myself React using async functionality, I realized I couldn't 
                avoid the necessity of a skills in asynchronous programs.
              </p>
              <p>
                For this project, I spent a lot of time planning by note-taking, drawing diagrams, and overall forming a deep understanding of the Akka message-passing framework. This planning process made testing and debugging a very efficient and painless process; I was able to develop a methodology for planning and understanding a complex project in a short amount of time. I got a perfect score by the professors tests, too!
              </p>
              <a href="https://www.notion.so/Akka-Resource-Manager-Notes-9167bd1364014888bb0cf09d1f3de5e6" className="button" target="_blank">
                Project Notes
              </a>
        
        </div>
    </Layout>
  )
}