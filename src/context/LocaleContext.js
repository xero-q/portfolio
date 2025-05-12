"use client";

import React, { createContext, useContext, useState } from "react";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES } from "@/lib/constants";

const LocaleContext = createContext(["en", () => {}]);

export const useLocale = () => useContext(LocaleContext);

export const LocaleProvider = ({ children, locale: initialLocale }) => {
  const [locale, setLocale] = useState(
    SUPPORTED_LOCALES.includes(initialLocale) ? initialLocale : DEFAULT_LOCALE
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};
