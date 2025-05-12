import React from "react";
import ProjectCard from "@/components/ProjectCard";
import { translations } from "@/lib/i18n";
import { useLocale } from "@/context/LocaleContext";

const projects = [
  {
    link: "https://opstalent.com",
    imgUrl: "/assets/projects/opstalent.png"
  },
  {
    link: "https://www.dspot.com.pl",
    imgUrl: "/assets/projects/dspot.png"
  },
  {
    link: "https://tickets.lanetalk.com",
    imgUrl: "/assets/projects/tickets.png"
  },
  {
    link: "https://admin.lanetalk.com",
    imgUrl: "/assets/projects/admin-lanetalk.png"
  },
  {
    link: "https://livescore.lanetalk.com",
    imgUrl: "/assets/projects/livescore-lanetalk.png"
  },
  {
    link: "https://afrimedtelehealth.com/",
    imgUrl: "/assets/projects/afrimed.png"
  },
  {
    link: "https://mips.makerdao.com",
    imgUrl: "/assets/projects/mips.png"
  },
  {
    link: "https://www.construex.com.ec/",
    imgUrl: "/assets/projects/construex.png"
  }
];

const Projects = () => {
  const { locale } = useLocale();
  const t = translations[locale];

  return (
    <div className="section-container">
      <h2 className="section-header">{t.projects.header}</h2>
      <div className="section-body">
        {projects.map((project, index) => (
          <ProjectCard
            {...project}
            description={t.projects.descriptions[index]}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
