import React from "react";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";


const Projects = ({ t }) => {
  return (
    <div className="section-container">
      <h2 className="section-header">{t.projects.header}</h2>
      <div className="section-body">
        {projects.map((project, index) => (
          <ProjectCard
            {...project}
            t={t}
            description={t.projects.descriptions[index]}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
