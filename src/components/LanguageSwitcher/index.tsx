import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import Image from "next/image";
import { SUPPORTED_LOCALES, DEFAULT_LOCALE, UNION_LOCALES } from "@/lib/constants";
import styles from "./language-switcher.module.scss";

interface LanguageSwitcherProps {
  locale: UNION_LOCALES;
} 

const LanguageSwitcher = ({ locale }: LanguageSwitcherProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const switchLocale = (newLocale, force = false) => {
    if (newLocale === locale && !force) return;
    const newPath = pathname.replace(/^\/[a-z]{2}/, `/${newLocale}`);
    router.replace(newPath);
  };

  useEffect(() => {
    if (!SUPPORTED_LOCALES.includes(pathname.substring(1) as UNION_LOCALES)) {
      switchLocale(DEFAULT_LOCALE, true);
    }
  }, [pathname]);

  return (
    <div className="flex justify-center items-center space-x-2 bg-transparent w-fit mx-auto mt-2">
      <button
        className={`buttonFlag ${locale === 'en' ? styles.selected:''}`}
        aria-label="English"
        onClick={() => switchLocale("en")}
      >
        <Image
          width={512}
          height={512}
          src="/assets/flags/uk.svg"
          alt="UK Flag"
          title="English"
          className="w-8 h-8 rounded-full object-contain"
        />
      </button>

      <button
       className={`buttonFlag ${locale === 'es' ? styles.selected:''}`}
        aria-label="Español"
        onClick={() => switchLocale("es")}
      >
        <Image
          width={750}
          height={500}
          src="/assets/flags/spain.svg"
          alt="Spain Flag"
          title="Español"
          className="w-8 h-8 rounded-full"
        />
      </button>

      <button
       className={`buttonFlag ${locale === 'fr' ? styles.selected:''}`}
        aria-label="Français"
        onClick={() => switchLocale("fr")}
      >
        <Image
          width={300}
          height={300}
          src="/assets/flags/france.svg"
          alt="France Flag"
          title="Français"
          className="w-8 h-8 rounded-full"
        />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
