import React from 'react'
import { StaticImage } from "gatsby-plugin-image"

export default class Media extends React.Component {

    render() {
        return (
            <div className="media-grid">
                <a href="https://www.linkedin.com/in/naomisp/" target="_blank" className="media">
                    <StaticImage src="../images/linkedin.png" width="100" alt="LinkedIn" rel="noreferrer" />
                </a>
                <a href="https://github.com/naomiperez" target="_blank" className="media" >
                    <StaticImage src="../images/github.png" width="100" alt="GitHub" />
                </a>
                <a href="https://docs.google.com/document/d/1S3BlhLZJvhDDUNZ7pOEjT7ic9kaV2zvH/edit?usp=sharing&ouid=113715452245383192870&rtpof=true&sd=true" target="_blank" className="media" ><StaticImage src="../images/resume.png" width="90" alt="Resume" rel="noreferrer"></StaticImage></a>
            </div>
        );
    }

}