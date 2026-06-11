import type { Dictionary } from "./types";
import ja from "./ja.json";
import en from "./en.json";
import ko from "./ko.json";
import zhTw from "./zh-tw.json";

const dictionaries: Record<string, Dictionary> = {
  ja: ja as unknown as Dictionary,
  en: en as unknown as Dictionary,
  ko: ko as unknown as Dictionary,
  "zh-tw": zhTw as unknown as Dictionary,
};

export type Locale = "ja" | "en" | "ko" | "zh-tw";

export const locales: Locale[] = ["ja", "en", "ko", "zh-tw"];

export function getDictionary(locale: string): Dictionary {
  return dictionaries[locale] ?? dictionaries.ja;
}
