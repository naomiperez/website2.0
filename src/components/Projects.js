import React from 'react'
import PropTypes from "prop-types"
import useCollapse from 'react-collapsed'
import Collapse from "@kunukn/react-collapse";


export default function Projects({ data }) {
    let collapsed = true;
    let maxItems = 3;
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    let nodes = [];
    data.map((node) => {
      nodes.push(node);
    })
    
    const notCollapsed = nodes.slice(0, maxItems);
    let collapsedNodes = nodes.slice(maxItems, nodes.length);

    return (
      <div>
        <div className="projects">
          
           { notCollapsed.map((node) => {
              return DisplayProjects(node);
            })
            }
          </div>
          <button className="expand-button" {...getToggleProps({ style: { display: "block" } })}>
            {isExpanded ? '-' : '+'}
          </button>
          <br/>
          <div {...getCollapseProps()}>
            <div className="projects" >
              {collapsedNodes.map((node) => {
                return DisplayProjects(node);
              })
              }
            </div>
          </div>
       
      </div>
    );
}

function DisplayProjects(node) {
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
    );
}

Projects.propTypes = {
  names: PropTypes.array.isRequired,
};
