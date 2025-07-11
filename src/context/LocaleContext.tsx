"use client";

import React, { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "@/lib/constants";

interface LocaleContextType {
  locale: string;
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
  locale: string;
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
