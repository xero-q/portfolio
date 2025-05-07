"use client";

import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import { useState } from "react";

export default function Home() {
  const [showBody, setShowBody] = useState(false);
  return (
    <div className="mx-auto flex flex-col justify-center w-full px-4">
      <Hero onDisplayed={() => setShowBody(true)} />
      {showBody && (
        <>
          <AboutMe />
          <Skills />
        </>
      )}
    </div>
  );
}
