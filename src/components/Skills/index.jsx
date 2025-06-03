import React from "react";
import SkillIcon from "@/components/SkillIcon";
import { translations } from "@/lib/i18n";
import { useLocale } from "@/context/LocaleContext";

const skillsProgrammingLanguages = [
  {
    name: "JavaScript",
    src: "/assets/logos/javascript.svg",
    size: 20
  },
  {
    name: "TypeScript",
    src: "/assets/logos/typescript.svg",
    size: 20
  },
  {
    name: "Python",
    src: "/assets/logos/python.svg",
    size: 30
  },
  {
    name: "C#",
    src: "/assets/logos/csharp.svg",
    size: 30
  }
];

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
    name: "ASP.NET Core",
    src: "/assets/logos/aspnetcore.svg"
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
  },
  {
    name: "SQL Server",
    src: "/assets/logos/sqlserver.svg"
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

const skillsMachineLearning = [
  {
    name: "Scikit Learn",
    src: "/assets/logos/sklearn.png"
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
  const { locale } = useLocale();
  const t = translations[locale];

  return (
    <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start w-full mt-5 lg:mt-0 mx-auto lg:mx-0 lg:max-w-[650px] fade-in border border-gray-600 p-4 rounded-2xl shadow-[0_0_20px_rgba(100,100,100,0.4)] lg:border-none lg:shadow-none lg:p-0">
      <h2 className="text-3xl font-semibold mb-5">{t.skills.header}</h2>
      <div className="skill-container">
        <h3 className="skill-header">{t.skills.programming}</h3>
        <div className="skills-list">
          {skillsProgrammingLanguages.map((skill) => (
            <SkillIcon key={skill.name} {...skill} />
          ))}
        </div>
      </div>
      <div className="skill-container">
        <h3 className="skill-header">{t.skills.frontend}</h3>
        <div className="skills-list">
          {skillsFrontend.map((skill) => (
            <SkillIcon key={skill.name} {...skill} />
          ))}
        </div>
      </div>
      <div className="skill-container">
        <h3 className="skill-header">{t.skills.backend}</h3>
        <div className="skills-list">
          {skillsBackend.map((skill) => (
            <SkillIcon key={skill.name} {...skill} />
          ))}
        </div>
      </div>
      <div className="skill-container">
        <h3 className="skill-header">{t.skills.databases}</h3>
        <div className="skills-list">
          {skillsDatabases.map((skill) => (
            <SkillIcon key={skill.name} {...skill} />
          ))}
        </div>
      </div>
      <div className="skill-container">
        <h3 className="skill-header">{t.skills.devops}</h3>
        <div className="skills-list">
          {skillsDevOps.map((skill) => (
            <SkillIcon key={skill.name} {...skill} />
          ))}
        </div>
      </div>
      <div className="skill-container">
        <h3 className="skill-header">{t.skills.ai}</h3>
        <div className="skills-list">
          {skillsMachineLearning.map((skill) => (
            <SkillIcon key={skill.name} {...skill} />
          ))}
        </div>
      </div>
      <div className="skill-container">
        <h3 className="skill-header">{t.skills.others}</h3>
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
