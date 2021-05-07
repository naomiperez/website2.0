import React from 'react'
import PropTypes from "prop-types"

export default function Projects({ data }) {

    return (
      <div className="projects">
        {data.map((node) => {
          return (
            <div className="project" key={node.title}>
              <div>
                <a
                  href={node.path || node.source}
                  key={node.path || node.source}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="icon">{node.icon}</div>
                  <h3>{node.title}</h3>
                </a>
                <div className="description">{node.description}</div>
              </div>
            </div>
          )
        })}
      </div>
    )
}

Projects.propTypes = {
  names: PropTypes.array.isRequired,
};
