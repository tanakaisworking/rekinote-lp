import Image from "next/image";
import Link from "next/link";
import type { DictFooter } from "@/dictionaries/types";
import { LanguageSelect } from "@/components/LanguageSelect";

export function Footer({
  dict,
  lang,
  audience,
}: {
  dict: DictFooter;
  lang: "ja" | "en";
  audience: "business" | "student";
}) {
  const links = [
    {
      key: "business",
      href: `/${lang}/lp/business/`,
      label: dict.businessLabel,
      desc: dict.businessDesc,
    },
    {
      key: "student",
      href: `/${lang}/lp/student/`,
      label: dict.studentLabel,
      desc: dict.studentDesc,
    },
  ] as const;

  return (
    <footer className="border-t border-line">
      <div className="container-x px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-14">
          <div className="order-2 lg:order-1">
            <div className="flex items-center gap-2.5">
              <Image src="/logo.png" alt="" width={24} height={24} className="rounded-md" />
              <span className="font-semibold tracking-tight">Reki note</span>
            </div>
            <p className="mt-3 dim text-xs">
              {dict.tagline}
            </p>
            <div className="mt-8 flex flex-row items-center gap-5 text-sm muted">
              <LanguageSelect lang={lang} />
              <span className="w-px h-4 bg-[rgba(255,255,255,0.12)]" aria-hidden />
              <a href="https://hibachi-inc.jp" className="hover:text-[#ececef] transition-colors duration-180">
                {dict.company}
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="text-xs font-mono-num tracking-[0.22em] uppercase text-[#8e8e98]">
              {dict.switchHeading}
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {links.map((link) => {
                const isActive = link.key === audience;
                return (
                  <Link
                    key={link.key}
                    href={link.href}
                    className={`rounded-2xl border p-4 transition-colors duration-180 ${
                      isActive
                        ? "border-[rgba(167,139,250,0.55)] bg-[rgba(139,92,246,0.08)]"
                        : "border-line bg-[rgba(18,18,24,0.55)] hover:border-line-strong"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm font-semibold text-[#ececef]">{link.label}</span>
                      {isActive ? (
                        <span className="text-xs text-[#cdbdff]">{dict.currentLabel}</span>
                      ) : null}
                    </div>
                    <p className="mt-2 text-xs leading-6 text-[#9d9daa]">
                      {link.desc}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="container-x px-6 py-6 dim text-xs flex flex-col md:flex-row justify-between gap-2">
          <span>© 2026 HIBACHI inc.</span>
        </div>
      </div>
    </footer>
  );
}
