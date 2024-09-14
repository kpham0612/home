// src/components/home/Project.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProjectCard = ({ project }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={project.image} className="card-img-top" alt={project.title} />
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text">{project.description}</p>
          <a href={project.link} className="btn btn-primary">View Details</a>
        </div>
      </div>
    </div>
  );
};

const Project = ({ heading, items }) => {
  if (!items || !items.length) return null;

  return (
    <div className="container">
      <h2 className="my-4">{heading}</h2>
      <div className="row">
        {items.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
