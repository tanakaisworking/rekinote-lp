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
  audience: "business" | "student" | "developer" | "vision";
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
    {
      key: "developer",
      href: `/${lang}/lp/developer/`,
      label: dict.developerLabel,
      desc: dict.developerDesc,
    },
    ...(dict.visionLabel
      ? [
          {
            key: "vision" as const,
            href: `/${lang}/product/vision/`,
            label: dict.visionLabel,
            desc: dict.visionDesc ?? "",
          },
        ]
      : []),
    {
      key: "other",
      href: `/${lang}/lp/`,
      label: dict.otherLabel,
      desc: dict.otherDesc,
    },
  ];

  return (
    <footer className="border-t border-line">
      <div className="container-x px-6 py-14">
        <div className="text-xs font-mono-num tracking-[0.22em] uppercase text-[#8e8e98]">
          {dict.switchHeading}
        </div>
        <div className="mt-4 grid gap-3 grid-cols-2 lg:grid-cols-4">
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
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm font-semibold text-[#ececef]">{link.label}</span>
                  {isActive ? (
                    <span className="text-xs text-[#cdbdff] shrink-0">{dict.currentLabel}</span>
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

      <div className="border-t border-line">
        <div className="container-x px-6 py-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2.5">
            <Image src="/logo.png" alt="" width={20} height={20} className="rounded-md" />
            <span className="text-sm font-semibold tracking-tight">{dict.tagline}</span>
          </div>
          <div className="flex flex-wrap items-center gap-4 text-xs muted">
            <LanguageSelect lang={lang} />
            <span className="w-px h-3.5 bg-[rgba(255,255,255,0.12)]" aria-hidden />
            <a href="https://hibachi-inc.jp" className="hover:text-[#ececef] transition-colors duration-180">
              {dict.company}
            </a>
            <span className="w-px h-3.5 bg-[rgba(255,255,255,0.12)]" aria-hidden />
            <Link href={`/${lang}/legal/privacy/`} className="hover:text-[#ececef] transition-colors duration-180">
              {lang === "ja" ? "プライバシーポリシー" : "Privacy Policy"}
            </Link>
            <span className="w-px h-3.5 bg-[rgba(255,255,255,0.12)]" aria-hidden />
            <Link href={`/${lang}/legal/terms/`} className="hover:text-[#ececef] transition-colors duration-180">
              {lang === "ja" ? "利用規約" : "Terms of Service"}
            </Link>
            {lang === "ja" && (
              <>
                <span className="w-px h-3.5 bg-[rgba(255,255,255,0.12)]" aria-hidden />
                <Link href="/ja/legal/tokushoho/" className="hover:text-[#ececef] transition-colors duration-180">
                  特定商取引法に基づく表記
                </Link>
              </>
            )}
            <span className="w-px h-3.5 bg-[rgba(255,255,255,0.12)]" aria-hidden />
            <span className="dim">© 2026 HIBACHI inc.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
