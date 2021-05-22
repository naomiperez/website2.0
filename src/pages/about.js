import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Blurb from '../components/Blurb'
import { headData } from '../mock/data'
import { StaticImage } from "gatsby-plugin-image"



export default function About(){

    return (
    <Layout>
        <Helmet title={`About | ${headData.title}`} />
        <Blurb title="About Me." ></Blurb>
            <div className="about">
                    <div className="row">
                        <p>
                        Hi, I'm Naomi! I'm a software engineer and graduate from the University of Maryland in College Park where I studied Computer Science. 
                        </p>
                    </div>
                    <div className="row">
                        <StaticImage src="../images/umd.png" width="200" alt="UMD Logo" id="image1" />
                    </div>
                    <div className="row">
                        <p>
                        My prorgamming career began in high school when I graduated from the Girls Who Code Summer Immersion Program. Since learning about the art of problem solving and building tools with tech, I've worked in multiple computational research labs, completed two internships at the USC Information Science Institute, and build several personal projects and applications to pursue my passions. 
                        </p>
                        </div>
                        <div className="row">
                            <StaticImage src="../images/gwc.png" width="574" alt="GWC Group Picture" id="image2" />
                        </div>
                        <div className="row">
                        <p>
                        My passions to help people and make an impact on the world have dictated my software engineering career. In high school, I volunteered over 600 hours at a teen-to-teen mental health crisis hotline, which changed the course of my life. I talked peers through substance abuse problems, mental health issues, abuse situations, even suicide. I developed a strong skill in empathetic communication and active listening, which has helped me greatly in team environments, understanding/anticipating the needs of others, and generally being in tune with the people around me. 
                        </p>

                    </div>
                    <div className="video-responsive">
                                <iframe
                                src={`https://www.youtube.com/embed/MDa5q0WeD4k`}
                                title="Embedded youtube"
                                />
                    </div>
                    <div className="row">
                        <p>
                        In my future career, I strive to make an impact like I did when answering phones at the crisis hotline. I have sought out opportunities in computational neuroscience research of neurological disorders, leadership opportunities to inspire young women interest in STEM, and building applications and projects infused with my eagerness to help others.
                        </p>
                    </div>
            </div>
    </Layout>
    )

}

