import React from 'react'
import linkedin from '../images/linkedin.png'
import resume from '../images/resume.png'
import github from '../images/github.png'

export default class Media extends React.Component {

    render() {
        return (
            <div className="media-grid">
                <a href="https://www.linkedin.com/in/naomisp/" style={{border:0}}>
                <img src={linkedin} alt="linkedin" className="media" />
                </a>
                <img src={resume} alt="resume" className="media" />
                <img src={github} alt="git" className="media" />
            </div>
        );
    }

}