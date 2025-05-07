"use client";

import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import { useState } from "react";

export default function Home() {
  const [showBody, setShowBody] = useState(false);
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <div className="mx-auto flex flex-col justify-center w-full px-4">
          <Hero onDisplayed={() => setShowBody(true)} />
          {showBody && (
            <>
              <AboutMe />
              <Skills />
            </>
          )}
        </div>
      </main>
      {showBody && (
        <footer className="h-[100px] bg-gray-900 text-white flex justify-center items-center">
          <Footer />
        </footer>
      )}
    </div>
  );
}
