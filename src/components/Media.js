import React from 'react'
import linkedin from '../images/linkedin.png'
import resume from '../images/resume.png'
import github from '../images/github.png'
import { GatsbyImage } from "gatsby-plugin-image"


export default class Media extends React.Component {

    render() {
        return (
            <div className="media-grid">
                <a href="https://www.linkedin.com/in/naomisp/" target="_blank" >
                    <img src={linkedin} alt="linkedin" className="media" />
                </a>
                {/* <img src={resume} alt="resume" className="media" /> */}
                <a href="https://github.com/naomiperez" target="_blank" >
                    <img src={github} alt="git" className="media" />
                </a>
            </div>
        );
    }

}