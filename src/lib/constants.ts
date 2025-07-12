export const SUPPORTED_LOCALES = ["en", "es", "fr"] as const;
export const DEFAULT_LOCALE = "en";

export type UNION_LOCALES = (typeof SUPPORTED_LOCALES)[number];
