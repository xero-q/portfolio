"use client";

import React, { createContext, useContext, useState } from "react";

// Create the context with a default value
const LocaleContext = createContext(["en", () => {}]);

// Hook to use the locale context
export const useLocale = () => useContext(LocaleContext);

// Provider component
export const LocaleProvider = ({ children, locale: initialLocale }) => {
  const [locale, setLocale] = useState(
    ["en", "es"].includes(initialLocale) ? initialLocale : "en"
  );

  return (
    <LocaleContext.Provider value={{ locale, setLocale }}>
      {children}
    </LocaleContext.Provider>
  );
};
