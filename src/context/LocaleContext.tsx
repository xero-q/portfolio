"use client";

import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, UNION_LOCALES } from "@/lib/constants";

interface LocaleContextType {
  locale: UNION_LOCALES;
  setLocale: Dispatch<SetStateAction<string>>;
}

const LocaleContext = createContext<LocaleContextType | undefined>(undefined);

export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};

interface LocaleProviderProps {
  children: ReactNode;
  locale: UNION_LOCALES;
}

export const LocaleProvider = ({ children, locale: initialLocale }:LocaleProviderProps) => {
  const [locale, setLocale] = useState(
    SUPPORTED_LOCALES.includes(initialLocale) ? initialLocale : DEFAULT_LOCALE
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};
