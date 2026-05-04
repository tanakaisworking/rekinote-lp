 "use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import type { DictHeader } from "@/dictionaries/types";
import { LanguageSelect } from "@/components/LanguageSelect";

export function Header({ dict, lang }: { dict: DictHeader; lang: "ja" | "en" }) {
  const [isLightMode, setIsLightMode] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsLightMode(window.scrollY > 520);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-md transition-colors duration-300 ${
        isLightMode
          ? "border-[rgba(12,12,16,0.08)] bg-[rgba(248,248,250,0.78)] text-[#0c0c10] shadow-[0_10px_30px_-24px_rgba(12,12,16,0.28)]"
          : "border-line bg-[rgba(12,12,16,0.7)] text-[#ececef]"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16 px-6">
        <Link href="#" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="Reki note" width={28} height={28} className="rounded-md" />
          <span className="font-semibold tracking-tight text-[15px]">Reki note</span>
        </Link>
        <nav className={`hidden md:flex items-center gap-7 text-sm transition-colors duration-300 ${isLightMode ? "text-[#5f6472]" : "muted"}`}>
          <a href="#problem" className={`transition-colors duration-180 ${isLightMode ? "hover:text-[#0c0c10]" : "hover:text-[#ececef]"}`}>{dict.benefits}</a>
          <a href="#features" className={`transition-colors duration-180 ${isLightMode ? "hover:text-[#0c0c10]" : "hover:text-[#ececef]"}`}>{dict.features}</a>
          <a href="#works-with" className={`transition-colors duration-180 ${isLightMode ? "hover:text-[#0c0c10]" : "hover:text-[#ececef]"}`}>{dict.integrations}</a>
          <a href="#compare" className={`transition-colors duration-180 ${isLightMode ? "hover:text-[#0c0c10]" : "hover:text-[#ececef]"}`}>{dict.compare}</a>
          <a href="#how" className={`transition-colors duration-180 ${isLightMode ? "hover:text-[#0c0c10]" : "hover:text-[#ececef]"}`}>{dict.howItWorks}</a>
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <LanguageSelect lang={lang} lightMode={isLightMode} />
          </div>
          <a href="#download" className="btn-primary !py-2.5 !px-4 text-sm">{dict.waitlist}</a>
        </div>
      </div>
    </header>
  );
}
