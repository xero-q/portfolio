import { useLocale } from "@/context/LocaleContext";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from "@/lib/constants";

const LanguageSwitcher = () => {
  const { locale, setLocale } = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale, force = false) => {
    if (newLocale === locale && !force) return;
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${newLocale}`);
    router.replace(newPath);
  };

  useEffect(() => {
    if (!SUPPORTED_LOCALES.includes(pathname.substring(1))) {
      switchLocale(DEFAULT_LOCALE, true);
    }
  }, [pathname]);

  return (
    <div className="flex justify-center items-center space-x-2 bg-transparent w-fit mx-auto">
      <button
        className="w-12 h-12 rounded-full flex justify-center items-center shadow-md hover:scale-105 transition-transform cursor-pointer"
        aria-label="English"
        onClick={() => switchLocale("en")}
      >
        <img
          src="/assets/flags/uk.svg"
          alt="UK Flag"
          className="w-8 h-8 rounded-full object-contain"
        />
      </button>

      <button
        className="w-12 h-12 rounded-full flex justify-center items-center shadow-md hover:scale-105 transition-transform cursor-pointer"
        aria-label="Español"
        onClick={() => switchLocale("es")}
      >
        <img
          src="/assets/flags/spain.svg"
          alt="Spain Flag"
          className="w-8 h-8 rounded-full"
        />
      </button>

      <button
        className="w-12 h-12 rounded-full flex justify-center items-center shadow-md hover:scale-105 transition-transform cursor-pointer"
        aria-label="Español"
        onClick={() => switchLocale("fr")}
      >
        <img
          src="/assets/flags/france.svg"
          alt="France Flag"
          className="w-8 h-8 rounded-full"
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
