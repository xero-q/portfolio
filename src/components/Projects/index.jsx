import React from "react";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    description: "OpsTalent company website",
    link: "https://opstalent.com",
    imgUrl: "/assets/projects/opstalent.png"
  },
  {
    description: "Dspot company website",
    link: "https://www.dspot.com.pl",
    imgUrl: "/assets/projects/dspot.png"
  },
  {
    description: "Lanetalk company tickets platform",
    link: "https://tickets.lanetalk.com",
    imgUrl: "/assets/projects/tickets.png"
  },
  {
    description: "Afrimed company website",
    link: "https://afrimedtelehealth.com/",
    imgUrl: "/assets/projects/afrimed.png"
  },
  {
    description: "Construex: Building, industry and design marketplace",
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
