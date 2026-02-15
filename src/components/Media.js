import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function Media() {
  return (
    <div className="media-grid media-grid--hand-drawn" aria-label="Links: LinkedIn, GitHub, Resume">
      <a
        href="https://www.linkedin.com/in/naomisp/"
        target="_blank"
        rel="noreferrer"
        className="media media__link"
      >
        <span className="media__icon-wrap">
          <StaticImage
            src="../images/linkedin.png"
            width="100"
            alt="LinkedIn"
            className="media__icon"
          />
        </span>
      </a>
      <a
        href="https://github.com/naomiperez"
        target="_blank"
        rel="noreferrer"
        className="media media__link"
      >
        <span className="media__icon-wrap">
          <StaticImage
            src="../images/github.png"
            width="100"
            alt="GitHub"
            className="media__icon"
          />
        </span>
      </a>
      <a
        href="https://drive.google.com/file/d/1DaGb4CdBtDyaLStjQgOWjLwSFy5vQoPr/view?usp=sharing"
        target="_blank"
        rel="noreferrer"
        className="media media__link"
      >
        <span className="media__icon-wrap">
          <StaticImage src="../images/resume.png" width="90" alt="Resume" className="media__icon" />
        </span>
      </a>
    </div>
  );
}
