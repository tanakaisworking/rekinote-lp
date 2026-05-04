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
      canonical: `/${params.lang}/lp/business/`,
      languages: {
        ja: "/ja/lp/business/",
        en: "/en/lp/business/",
      },
    },
    title: isJa
      ? "Reki note — 議事録ツール、1つで足りる。"
      : "Reki note — Local-first meeting memory for Mac.",
    description: isJa
      ? "Macで起きる全ての通話と対面の会話を、1つのアプリに。Zoom / Meet / Teams / Slack 対応のAI議事録アプリ。"
      : "Capture calls across Zoom, Meet, Teams, Slack huddles, and in-person meetings, then search the full record with your own AI keys.",
  };
}

export default async function BusinessLpPage({
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
        <div className="light-section-scope bg-[#f0f0f0] text-[#0c0c10]">
          <Problem dict={dict.Problem} />
          <Features dict={dict.Features} />
          <WorksWith dict={dict.WorksWith} />
          <Compare dict={dict.Compare} />
          <HowItWorks dict={dict.HowItWorks} />
          <FinalCTA dict={dict.FinalCTA} />
        </div>
      </main>
      <Footer dict={dict.Footer} lang={params.lang} audience="business" />
    </>
  );
}
