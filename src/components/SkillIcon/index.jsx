import React from "react";
import Image from "next/image";

const SkillIcon = ({ name, src, size = 40 }) => {
  return (
    <div className="flex items-center mr-2 mb-2">
      <div className="w-16 h-16 flex items-center justify-center">
        <Image
          src={src}
          alt={name}
          width={size}
          height={size}
          className="object-contain"
        />
      </div>
      <span className="skill-badge">{name}</span>
    </div>
  );
};

export default SkillIcon;
