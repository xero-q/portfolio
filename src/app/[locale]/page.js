"use client";

import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import Certifications from "@/components/Certifications";
import Projects from "@/components/Projects";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLocale } from "@/context/LocaleContext";
import { translations } from "@/lib/i18n";

export default function Home() {
  const [showBody, setShowBody] = useState(false);
  const { locale } = useLocale();
  const t = translations[locale];

  return (
    <div className="flex flex-col">
      <main className="flex-1">
        <div className="mx-auto flex flex-col justify-center w-full px-4">
          <LanguageSwitcher locale={locale} />
          <Hero t={t} onDisplayed={() => setShowBody(true)} />
          {showBody && (
            <>
              <div className="flex flex-col mb-4 lg:flex-row lg:items-start lg:gap-10 lg:mx-auto lg:border lg:border-gray-600 lg:p-6 lg:rounded-2xl lg:shadow-[0_0_20px_rgba(100,100,100,0.4)]">
                <AboutMe t={t} />
                <Skills t={t} />
              </div>
              <Certifications t={t} />
              <Projects t={t} />
              <ContactForm t={t} />
              <div className="h-[40px]"></div>
            </>
          )}
        </div>
      </main>
      {showBody && (
        <footer className="h-[100px] bg-gray-900 text-white flex justify-center items-center max-w-full px-2">
          <Footer t={t} />
        </footer>
      )}
    </div>
  );
}
