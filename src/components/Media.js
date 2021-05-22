import React from 'react'
import { StaticImage } from "gatsby-plugin-image"


export default class Media extends React.Component {

    render() {
        return (
            <div className="media-grid">
                <a href="https://www.linkedin.com/in/naomisp/" target="_blank" >
                    <StaticImage src="../images/linkedin.png" width="100" alt="LinkedIn" className="media" />
                </a>
                {/* <img src={resume} alt="resume" className="media" /> */}
                <a href="https://github.com/naomiperez" target="_blank" >
                    <StaticImage src="../images/github.png" width="100" alt="GitHub" className="media" />
                </a>
            </div>
        );
    }

}