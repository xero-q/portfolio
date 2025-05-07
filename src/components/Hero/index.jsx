"use client";

import React from "react";
import Image from "next/image";
import TypewriterText from "@/components/TypewriterText";
import Socials from "@/components/Socials";
import { useState } from "react";

const Hero = ({ onDisplayed }) => {
  const [showSecond, setShowSecond] = useState(false);
  const [showSocials, setShowSocials] = useState(false);

  const handleCompleteText = () => {
    if (onDisplayed) {
      onDisplayed();
    }
    setShowSocials(true);
  };

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
            onComplete={handleCompleteText}
          />
        )}
      </div>
      {showSocials && <Socials />}
    </div>
  );
};

export default Hero;
