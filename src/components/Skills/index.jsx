import React from "react";
import SkillIcon from "@/components/SkillIcon";

const skillsFrontend = [
  {
    name: "Angular",
    src: "/assets/logos/angular.svg"
  },
  {
    name: "React.js",
    src: "/assets/logos/react.svg"
  },
  {
    name: "Next.js",
    src: "/assets/logos/next.svg"
  }
];

const skillsBackend = [
  {
    name: "NestJS",
    src: "/assets/logos/nest.svg"
  },
  {
    name: "Django",
    src: "/assets/logos/django.png",
    size: 60
  },
  {
    name: "FastAPI",
    src: "/assets/logos/fastapi.svg",
    size: 80
  }
];

const skillsDatabases = [
  {
    name: "PostgreSQL",
    src: "/assets/logos/postgresql.svg"
  },
  {
    name: "MySQL",
    src: "/assets/logos/mysql.svg",
    size: 90
  },
  {
    name: "SQLite",
    src: "/assets/logos/sqlite.svg",
    size: 90
  },
  {
    name: "MongoDB",
    src: "/assets/logos/mongodb.svg",
    size: 90
  },
  {
    name: "Redis",
    src: "/assets/logos/redis.svg",
    size: 90
  }
];

const skillsDevOps = [
  {
    name: "AWS",
    src: "/assets/logos/aws.svg"
  },
  {
    name: "Google Cloud",
    src: "/assets/logos/gcp.svg",
    size: 90
  }
];

const skillsOthers = [
  {
    name: "Git",
    src: "/assets/logos/git.svg",
    size: 50
  },
  {
    name: "Docker",
    src: "/assets/logos/docker.svg",
    size: 70
  }
];

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-5 mx-auto md:max-w-[700px] lg:max-w-[900px] fade-in">
      <h2 className="text-3xl font-bold mb-5">Skills</h2>
      <div className="skill-container">
        <h3 className="skill-header">Frontend</h3>
        <div className="skills-list">
          {skillsFrontend.map((skill) => (
            <SkillIcon key={skill.name} {...skill} />
          ))}
        </div>
      </div>
      <div className="skill-container">
        <h3 className="skill-header">Backend</h3>
        <div className="skills-list">
          {skillsBackend.map((skill) => (
            <SkillIcon key={skill.name} {...skill} />
          ))}
        </div>
      </div>
      <div className="skill-container">
        <h3 className="skill-header">DBMS</h3>
        <div className="skills-list">
          {skillsDatabases.map((skill) => (
            <SkillIcon key={skill.name} {...skill} />
          ))}
        </div>
      </div>
      <div className="skill-container">
        <h3 className="skill-header">DevOps</h3>
        <div className="skills-list">
          {skillsDevOps.map((skill) => (
            <SkillIcon key={skill.name} {...skill} />
          ))}
        </div>
      </div>
      <div className="skill-container">
        <h3 className="skill-header">Others</h3>
        <div className="skills-list">
          {skillsOthers.map((skill) => (
            <SkillIcon key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
