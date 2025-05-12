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
    setShowSecond(true);
    setShowSocials(true);
    if (onDisplayed) {
      onDisplayed();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full mt-15">
      <Image
        src="/assets/me.jpg"
        alt="Aníbal Sánchez Numa"
        width={220}
        height={220}
        className="rounded-full object-cover mb-2 fade-in"
      />
      <div className="text-2xl font-semibold mb-2">
        <TypewriterText
          text="Hi, I'm Aníbal Sánchez"
          onComplete={handleCompleteText}
        />
      </div>
      {showSecond && (
        <div className="text-center text-2xl text-gray-300 font-semibold fade-in w-fit px-3 py-2 rounded-2xl bg-gradient-to-br from-gray-600 to-blue-900 shadow-[0_0_20px_rgba(100,100,100,0.4)]">
          Senior Software Engineer
        </div>
      )}

      {showSocials && <Socials />}
    </div>
  );
};

export default Hero;
