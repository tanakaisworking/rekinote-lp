import { getDictionary } from "@/dictionaries/getDictionary";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Features } from "@/components/Features";
import { WorksWith } from "@/components/WorksWith";
import { Compare } from "@/components/Compare";
import { HowItWorks } from "@/components/HowItWorks";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export function generateStaticParams() {
  return [{ lang: "ja" }, { lang: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: { lang: "ja" | "en" };
}): Promise<Metadata> {
  const isJa = params.lang === "ja";
  return {
    metadataBase: new URL("https://rekinote.app"),
    alternates: {
      canonical: `/${params.lang}/lp/`,
      languages: {
        ja: "/ja/lp/",
        en: "/en/lp/",
      },
    },
    title: isJa
      ? "Reki note — 議事録ツール、1つで足りる。"
      : "Reki note — One app for all your meeting notes.",
    description: isJa
      ? "Macで起きる全ての通話と対面の会話を、1つのアプリに。Zoom / Meet / Teams / Slack 対応のAI議事録アプリ。"
      : "All calls and in-person conversations on your Mac, in one app. AI meeting notes for Zoom / Meet / Teams / Slack.",
  };
}

export default async function LpPage({
  params,
}: {
  params: { lang: "ja" | "en" };
}) {
  const dict = await getDictionary(params.lang);

  return (
    <>
      <Header dict={dict.Header} lang={params.lang} />
      <main>
        <Hero dict={dict.Hero} lang={params.lang} />
        <Problem dict={dict.Problem} />
        <Features dict={dict.Features} />
        <WorksWith dict={dict.WorksWith} />
        <Compare dict={dict.Compare} />
        <HowItWorks dict={dict.HowItWorks} />
        <FinalCTA dict={dict.FinalCTA} />
      </main>
      <Footer dict={dict.Footer} lang={params.lang} />
    </>
  );
}
