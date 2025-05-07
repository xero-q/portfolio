"use client";

import React from "react";
import Image from "next/image";
import TypewriterText from "@/components/TypewriterText";
import { useState } from "react";

const Hero = ({ onDisplayed }) => {
  const [showSecond, setShowSecond] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center w-full mt-5">
      <Image
        src="/assets/me.jpg"
        alt="Aníbal Sánchez"
        width={220}
        height={220}
        className="rounded-4xl shadow-2xs mb-2 fade-in"
      />
      <div className="text-2xl font-bold">
        <TypewriterText
          text="Hi, I'm Aníbal Sánchez"
          onComplete={() => setShowSecond(true)}
        />
      </div>
      <div className="text-2xl font-bold">
        {showSecond && (
          <TypewriterText
            text="Senior Software Engineer"
            onComplete={() => onDisplayed()}
          />
        )}
      </div>
    </div>
  );
};

export default Hero;
