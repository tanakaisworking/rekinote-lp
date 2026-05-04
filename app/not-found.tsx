"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  const isJa = pathname?.startsWith("/ja");
  const isEn = pathname?.startsWith("/en");
  const locale = isJa ? "ja" : isEn ? "en" : "en";
  const homeHref = locale === "ja" ? "/ja/lp/" : "/en/lp/";
  const copy = locale === "ja"
    ? {
        eyebrow: "404 / Page not found",
        title: "このページは見つかりません",
        body: "URLが変更されたか、存在しないページにアクセスされています。トップページから目的の情報へ戻れます。",
        primary: "トップページへ戻る",
        secondary: "ルートへ戻る",
      }
    : {
        eyebrow: "404 / Page not found",
        title: "This page could not be found",
        body: "The URL may have changed, or the page does not exist. You can return to the top page from here.",
        primary: "Back to top page",
        secondary: "Back to root",
      };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0c0c10] px-6 py-16 text-[#ececef]">
      <div className="hero-orb" />
      <div className="container-x relative z-10 flex min-h-[calc(100vh-8rem)] items-center justify-center">
        <section className="card-strong w-full max-w-2xl rounded-[28px] px-8 py-12 text-center shadow-[0_30px_80px_-40px_rgba(139,92,246,0.55)] sm:px-12">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#f5f5f7] sm:text-5xl">
            {copy.title}
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#b6b6c2] sm:text-base">
            {copy.body}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link href={homeHref} className="btn-primary min-w-[220px]">
              {copy.primary}
            </Link>
            <Link href="/" className="btn-ghost min-w-[220px]">
              {copy.secondary}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
