import type { Dictionary } from "./types";
import ja from "./ja.json";
import en from "./en.json";

const dictionaries: Record<string, Dictionary> = {
  ja: ja as unknown as Dictionary,
  en: en as unknown as Dictionary,
};

export type Locale = "ja" | "en";

export function getDictionary(locale: string): Dictionary {
  return dictionaries[locale] ?? dictionaries.ja;
}
