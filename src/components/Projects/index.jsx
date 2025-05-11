import React from "react";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    description: "Website of OpsTalent company",
    link: "https://opstalent.com",
    imgUrl: "/assets/projects/opstalent.png"
  },
  {
    description: "Website of Dspot company",
    link: "https://www.dspot.com.pl",
    imgUrl: "/assets/projects/dspot.png"
  },
  {
    description: "Tickets platform of Lanetalk Company",
    link: "https://tickets.lanetalk.com",
    imgUrl: "/assets/projects/tickets.png"
  },
  {
    description: "Website of Afrimed Company",
    link: "https://afrimedtelehealth.com/",
    imgUrl: "/assets/projects/afrimed.png"
  },
  {
    description:
      "Construex: El Marketplace de Construcción, Industria y Diseño",
    link: "https://www.construex.com.ec/",
    imgUrl: "/assets/projects/construex.png"
  }
];

const Projects = () => {
  return (
    <div className="section-container">
      <h2 className="section-header">Projects</h2>
      <div className="section-body">
        {projects.map((project, index) => (
          <ProjectCard {...project} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
