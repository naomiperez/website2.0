import React from 'react';

export default function ProjectCard({ project, hero }) {
  const { emoji, title, year, status, outcome, tags, links, featured } = project;

  return (
    <article className={`project-card${featured ? ' project-card--featured' : ''}`}>
      {hero && <div className="project-card__hero">{hero}</div>}
      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="project-card__year">{year}</span>
          <span className="project-card__status">{status}</span>
          {featured && <span className="project-card__featured">Featured</span>}
        </div>

        <h2 className="project-card__title">
          <span aria-hidden="true">{emoji}</span> {title}
        </h2>

        <p className="project-card__outcome">{outcome}</p>

        {tags && tags.length > 0 && (
          <ul className="project-card__tags" aria-label="Technologies">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}

        {links && links.length > 0 && (
          <div className="project-card__links">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card__link"
              >
                {link.label} →
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
