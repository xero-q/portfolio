import { useLocale } from "@/context/LocaleContext";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const LanguageSwitcher = () => {
  const { locale, setLocale } = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale) => {
    if (newLocale === locale) return;
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${newLocale}`);
    router.replace(newPath);
  };

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
    </div>
  );
};

export default LanguageSwitcher;
