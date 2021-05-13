import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Blurb from '../components/Blurb'
import { Link } from 'gatsby'
import { headData } from '../mock/data'
import naomi from '../images/grad.png'
import umd from '../images/umd.jpeg'
import gwc from '../images/gwc.jpeg'


export default function About(){

    return (
    <Layout>
        
        <Helmet title={`About | ${headData.title}`} />
        <Blurb title="About Me." img={naomi}></Blurb>
        <div className="about">
            <div className="container">
        
            <div className="leftcol">
                <p>
                Hi, I'm Naomi! I'm a software engineer and soon to be graduate from the University of Maryland in College Park where I study Computer Science. 
                </p>
                <p>
                My prorgamming career began in high school when I graduated from the Girls Who Code Summer Immersion Program. Since learning about the art of problem solving and building tools with tech, I've worked in multiple computational research labs, completed two internships at the USC Information Science Institute, and build several personal projects and applications to pursue my passions. 
                <br></br>
                <br></br>
                My passions to help people and make an impact on the world have dictated my software engineering career. In high school, I volunteered over 600 hours at a teen-to-teen mental health crisis hotline, which changed the course of my life. I talked peers through substance abuse problems, mental health issues, abuse situations, even suicide. I developed a strong skill in empathetic communication and active listening, which has helped me greatly in team environments, understanding/anticipating the needs of others, and generally being in tune with the people around me. 
                <br></br>
                <br></br>
                In my future career, I strive to make an impact like I did when answering phones at the crisis hotline. I have sought out opportunities in computational neuroscience research of neurological disorders, leadership opportunities to inspire young women interest in STEM, and building applications and projects infused with my eagerness to help others.
                </p>
            </div>

            <div className="rightcol">
                <img src={umd} alt="University of Maryland Logo" id="image1"/>
                <img src={gwc} alt="Girls Who Code Group Picture" id="image2"/>
            </div>
            </div>
        </div>
    </Layout>
    )

}