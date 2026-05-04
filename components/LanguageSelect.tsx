"use client";

import { usePathname } from "next/navigation";

const LANGUAGE_OPTIONS = [
  { value: "en", label: "English" },
  { value: "ja", label: "日本語" },
] as const;

export function LanguageSelect({ lang, lightMode = false }: { lang: "ja" | "en"; lightMode?: boolean }) {
  const pathname = usePathname();
  const variant = pathname?.includes("/lp/student") ? "student" : "business";

  return (
    <div className="relative">
      <select
        aria-label="Select language"
        className={`min-w-[7.5rem] appearance-none rounded-md border px-3 py-2 pr-9 text-sm outline-none transition-colors duration-180 ${
          lightMode
            ? "border-[rgba(12,12,16,0.1)] bg-[rgba(255,255,255,0.8)] text-[#17171c] hover:border-[rgba(12,12,16,0.22)] focus:border-[#8b5cf6]"
            : "border-line bg-[rgba(18,18,24,0.92)] text-[#ececef] hover:border-[#4a4a57] focus:border-[#a78bfa]"
        }`}
        value={lang}
        onChange={(event) => {
          window.location.href = `/${event.target.value}/lp/${variant}/`;
        }}
      >
        {LANGUAGE_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <span className={`pointer-events-none absolute inset-y-0 right-3 flex items-center text-[10px] ${lightMode ? "text-[#6b7280]" : "text-[#8e8e98]"}`}>
        ▼
      </span>
    </div>
  );
}
