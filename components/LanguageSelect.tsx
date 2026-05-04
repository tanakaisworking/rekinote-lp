"use client";

import { usePathname } from "next/navigation";

const LANGUAGE_OPTIONS = [
  { value: "en", label: "English" },
  { value: "ja", label: "日本語" },
] as const;

export function LanguageSelect({ lang }: { lang: "ja" | "en" }) {
  const pathname = usePathname();
  const variant = pathname?.includes("/lp/student") ? "student" : "business";

  return (
    <div className="relative">
      <select
        aria-label="Select language"
        className="min-w-[7.5rem] appearance-none rounded-md border border-line bg-[rgba(18,18,24,0.92)] px-3 py-2 pr-9 text-sm text-[#ececef] outline-none transition-colors duration-180 hover:border-[#4a4a57] focus:border-[#a78bfa]"
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
      <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[10px] text-[#8e8e98]">
        ▼
      </span>
    </div>
  );
}
