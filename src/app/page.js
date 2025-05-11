"use client";

import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";

export default function Home() {
  const [showBody, setShowBody] = useState(false);
  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <div className="mx-auto flex flex-col justify-center w-full px-4">
          <Hero onDisplayed={() => setShowBody(true)} />
          {showBody && (
            <>
              <div className="flex flex-col mb-4 lg:flex-row lg:items-start lg:gap-10 lg:mx-auto lg:border lg:border-gray-600 lg:p-6 lg:rounded-2xl lg:shadow-[0_0_20px_rgba(100,100,100,0.4)]">
                <AboutMe />
                <Skills />
              </div>
              <Certifications />
              <Projects />
              <ContactForm />
              <div className="h-[40px]"></div>
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
