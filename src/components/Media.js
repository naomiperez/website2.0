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
                <a href="https://drive.google.com/file/d/1DaGb4CdBtDyaLStjQgOWjLwSFy5vQoPr/view?usp=sharing" target="_blank" className="media" ><StaticImage src="../images/resume.png" width="90" alt="Resume" rel="noreferrer"></StaticImage></a>
            </div>
        );
    }
}