import React from 'react'
import Helmet from 'react-helmet'
import Projects from '../components/Projects'
import { headData } from '../mock/data'
import courses from '../mock/courses'

import Layout from '../components/Layout'

export default function Education() {
  return (
    <Layout>
      <Helmet title={`Education | ${headData.title}`} />
      <div className="container">
        <header>
          <h1>Education.</h1>
          <p className="subtitle">A history of my formal educational experiences</p>
          <h2>University of Maryland, College Park</h2>
          <h4 className="no-underline">
            Pursuing B.S. in Computer Science
          </h4>
          <p>
            <small>
              <i>
                August 2017 &mdash; May 2021
              </i>
            </small>
          </p>
          <h4 className="no-underline">
            Courses:
          </h4>
          <Projects data={courses} />
          {/* <div className="courses-grid">
            <div className="course-item">
              <p>
                CMSC131 Object Oriented Programming I - Programming fundamentals & OOP principles
                <p>
                    <small>
                    <i>
                        Technologies: Java & Eclipse IDE
                    </i>
                    </small>
                </p>
              </p>
            </div>
            <div className="course-item">
              <p>
                CMSC132 Object Oriented Programming II - Object-oriented software development
                <p>
                    <small>
                    <i>
                        Technologies: Java & Eclipse IDE
                    </i>
                    </small>
                </p>
              </p>
            </div>
            <div className="course-item">
              <p>
                CMSC216 Introduction to Computer Systems - Fundamental concepts that enable programs to execute on real hardware
                <p>
                    <small>
                    <i>
                        Technologies: C, Assembly 
                    </i>
                    </small>
                </p>
              </p>
            </div>
            <div className="course-item">
              <p>
                CMSC 250 Discrete Structures - Fundamental mathematical concepts related to computer science
              </p>
              </div>
              <div className="course-item">
              <p>
                CMSC330 Organization of Programming Languages - Study of programming languages syntax, semantics, and implementation
                <p>
                    <small>
                    <i>
                        Technologies: OCaml, Ruby, SQL
                    </i>
                    </small>
                </p>
              </p>
            </div>
            <div className="course-item">
              <p>
                CMSC351 Algorithms - Techniques for designing efficient computer algorithms and analyzing their running times
              </p>
            </div>
            <div className="course-item">
              <p>
                CMSC320 Data Science - Data management systems, exploratory & statistical data analysis & data/information visualization
                <p>
                    <small>
                    <i>
                        Technologies: R, Python, SQLite
                    </i>
                    </small>
                </p>
              </p>
            </div>
            <div className="course-item">
              <p>
                CMSC420 Advanced Data Structures - Description, properties, and storage allocation functions of data structures
                <p>
                    <small>
                    <i>
                        Technologies: Java and Eclipse IDE
                    </i>
                    </small>
                </p>
              </p>
            </div>
            <div className="course-item">
              <p>
                CMSC433 Programming Language Technologies and Paradigms - Programming concurrent and distributed software
                <p>
                    <small>
                    <i>
                        Technologies: R, Python, SQLite
                    </i>
                    </small>
                </p>
              </p>
            <p>
                TBC...
            </p>
          </div> 
           </div>
          */}
       
        </header>
      </div>
    </Layout>
  )
}