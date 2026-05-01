import "server-only";
import type { Dictionary } from "./types";

const dictionaries: Record<"ja" | "en", () => Promise<Dictionary>> = {
  ja: () => import("./ja.json").then((module) => module.default as Dictionary),
  en: () => import("./en.json").then((module) => module.default as Dictionary),
};

export const getDictionary = async (locale: "ja" | "en"): Promise<Dictionary> => {
  return dictionaries[locale]?.() ?? dictionaries.ja();
};
