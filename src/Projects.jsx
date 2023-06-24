import React from "react";
import FetchProjects from "./FetchProjects";

const Projects = () => {
  const { projects, isLoading } = FetchProjects();

  if (isLoading)
    return (
      <section className="projects">
        <h2>Loading...</h2>
      </section>
    );

  return (
    <section className="projects">
      <div className="title">
        <h2>Projects</h2>
        <div className="title-underline"></div>
      </div>

      <div className="projects-center">
        {projects.map(({ title, url, id, img }) => (
          <a
            href={url}
            key={id}
            target="_blank"
            rel="noreferrer"
            className="project"
          >
            <img src={img} alt={title} className="img" />
            <h5>{title}</h5>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Projects;
