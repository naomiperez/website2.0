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
        href="https://docs.google.com/document/d/120Et-twQ4ST9mPET73sFLFP4TX0d1Q_S8u8O_z49K_M/edit?usp=drive_link"
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
