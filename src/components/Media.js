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
                <a href="https://docs.google.com/document/d/e/2PACX-1vREt_MRSTOvR_6Bfv7y83Dzume1zrt9rphyH8dRNtUrqcv2rIDvYOuTTMYcQQcg4A/pub" target="_blank" className="media" ><StaticImage src="../images/resume.png" width="90" alt="Resume" rel="noreferrer"></StaticImage></a>
            </div>
        );
    }
}