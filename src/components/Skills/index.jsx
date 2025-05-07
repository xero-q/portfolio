import React from "react";
import Image from "next/image";

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
  },
  {
    name: "DynamoDB",
    src: "/assets/logos/dynamodb.svg"
  }
];

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-5 fade-in">
      <h2 className="text-3xl font-bold mb-5">Skills</h2>
      <div className="flex flex-col mb-2">
        <h3 className="text-2xl font-semibold mb-2 text-left">Frontend</h3>
        <div className="flex items-center flex-wrap">
          {skillsFrontend.map((skill) => (
            <div className="flex items-center mr-2" key={skill.name}>
              <Image
                src={skill.src}
                width={40}
                height={40}
                alt={skill.name}
                className="object-contain opacity-0 translate-y-5 transition-all duration-700 ease-out"
                onLoadingComplete={(img) => {
                  img.classList.remove("opacity-0", "translate-y-5");
                }}
              />
              <span className="skill-badge">{skill.name} </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col mb-2">
        <h3 className="text-2xl font-semibold mb-2 text-left">Backend</h3>
        <div className="flex items-center flex-wrap">
          {skillsBackend.map((skill) => (
            <div className="flex items-center mr-2" key={skill.name}>
              <Image
                src={skill.src}
                width={skill.size || 40}
                height={skill.size || 40}
                alt={skill.name}
                className="object-contain opacity-0 translate-y-5 transition-all duration-700 ease-out"
                onLoadingComplete={(img) => {
                  img.classList.remove("opacity-0", "translate-y-5");
                }}
              />
              <span className="skill-badge">{skill.name} </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col mb-2">
        <h3 className="text-2xl font-semibold mb-2 text-left">DBMS</h3>
        <div className="flex items-center flex-wrap">
          {skillsDatabases.map((skill) => (
            <div className="flex items-center mr-2" key={skill.name}>
              <Image
                src={skill.src}
                width={skill.size || 40}
                height={skill.size || 40}
                alt={skill.name}
                className="object-contain opacity-0 translate-y-5 transition-all duration-700 ease-out"
                onLoadingComplete={(img) => {
                  img.classList.remove("opacity-0", "translate-y-5");
                }}
              />
              <span className="skill-badge">{skill.name} </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
