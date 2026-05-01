import Image from "next/image";
import Link from "next/link";
import type { DictHeader } from "@/dictionaries/types";

export function Header({ dict, lang }: { dict: DictHeader; lang: "ja" | "en" }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[rgba(12,12,16,0.7)] border-b border-line">
      <div className="container-x flex items-center justify-between h-16 px-6">
        <Link href="#" className="flex items-center gap-2.5">
          <Image src="/logo.png" alt="Reki note" width={28} height={28} className="rounded-md" />
          <span className="font-semibold tracking-tight text-[15px]">Reki note</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7 text-sm muted">
          <a href="#problem" className="hover:text-[#ececef] transition-colors duration-180">{dict.benefits}</a>
          <a href="#features" className="hover:text-[#ececef] transition-colors duration-180">{dict.features}</a>
          <a href="#works-with" className="hover:text-[#ececef] transition-colors duration-180">{dict.integrations}</a>
          <a href="#compare" className="hover:text-[#ececef] transition-colors duration-180">{dict.compare}</a>
          <a href="#privacy" className="hover:text-[#ececef] transition-colors duration-180">{dict.privacy}</a>
          <a href="#how" className="hover:text-[#ececef] transition-colors duration-180">{dict.howItWorks}</a>
        </nav>
        <div className="flex items-center gap-3">
          {/* 言語切り替え */}
          <div className="flex items-center text-xs font-mono-num tracking-widest border border-line rounded-md overflow-hidden">
            <Link
              href="/ja/lp/"
              className={`px-2.5 py-1.5 transition-colors duration-180 ${
                lang === "ja"
                  ? "bg-[rgba(167,139,250,0.15)] text-[#a78bfa]"
                  : "text-[#5e5e6a] hover:text-[#ececef]"
              }`}
            >
              JA
            </Link>
            <span className="w-px h-4 bg-line" />
            <Link
              href="/en/lp/"
              className={`px-2.5 py-1.5 transition-colors duration-180 ${
                lang === "en"
                  ? "bg-[rgba(167,139,250,0.15)] text-[#a78bfa]"
                  : "text-[#5e5e6a] hover:text-[#ececef]"
              }`}
            >
              EN
            </Link>
          </div>
          <a href="#download" className="btn-primary !py-2.5 !px-4 text-sm">{dict.waitlist}</a>
        </div>
      </div>
    </header>
  );
}
