"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { LanguageSelect } from "@/components/LanguageSelect";

export function VisionHeader({ lang, cta }: { lang: "ja" | "en"; cta: string }) {
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
        <Link href={`/${lang}/lp/business/`} className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="Reki note" width={28} height={28} className="rounded-md" />
          <span className="font-semibold tracking-tight text-[15px]">Reki note</span>
        </Link>
        <div className="flex items-center gap-3">
          <div className="hidden md:block">
            <LanguageSelect lang={lang} lightMode={isLightMode} />
          </div>
          <Link href={`/${lang}/lp/business/`} className="btn-primary !py-2.5 !px-4 text-sm">
            {cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
