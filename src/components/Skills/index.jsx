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

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full mt-5 fade-in">
      <h2 className="text-3xl font-bold mb-5">Skills</h2>
      <div className="flex flex-col mb-2">
        <h3 className="text-2xl font-semibold mb-2 text-left">Frontend</h3>
        <div className="flex items-center">
          {skillsFrontend.map((skill) => (
            <div className="flex items-center mr-2" key={skill.name}>
              <Image src={skill.src} width={40} height={40} alt={skill.name} />
              <span className="skill-badge">{skill.name} </span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col">
        <h3 className="text-2xl font-semibold mb-2 text-left">Backend</h3>
        <div className="flex items-center">
          {skillsBackend.map((skill) => (
            <div className="flex items-center mr-2" key={skill.name}>
              <Image
                src={skill.src}
                width={skill.size || 40}
                height={skill.size || 40}
                alt={skill.name}
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
