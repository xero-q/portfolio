"use client";

import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import { useState } from "react";

export default function Home() {
  const [showAboutMe, setShowAboutMe] = useState(false);
  return (
    <div className="mx-auto flex flex-col justify-center w-full px-2">
      <Hero onDisplayed={() => setShowAboutMe(true)} />
      {showAboutMe && <AboutMe />}
    </div>
  );
}
