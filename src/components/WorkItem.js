// src/components/WorkItem.js
import React from "react";
import "../styles/WorkItem.css";

function WorkItem({ title, description, technologies, imageUrl, projectUrl }) {
  return (
    <div className="work-item">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
      <a href={projectUrl} target="_blank" rel="noopener noreferrer">
        View Project
      </a>
    </div>
  );
}

export default WorkItem;
