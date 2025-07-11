import React from "react";
import SkillIcon from "@/components/SkillIcon";
import skillsProgrammingLanguages from "@/data/skills/programming-languages.json";
import skillsFrontend from "@/data/skills/frontend.json";
import skillsBackend from "@/data/skills/backend.json";
import skillsDatabases from "@/data/skills/databases.json";
import skillsDevOps from "@/data/skills/devops.json";
import skillsMachineLearning from "@/data/skills/machine-learning.json";
import skillsOthers from "@/data/skills/others.json";

const Skills = ({ t }) => {
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
