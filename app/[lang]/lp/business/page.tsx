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
  const title = isJa
    ? "Reki note — 議事録ツール、1つで足りる。"
    : "Reki note — One place for every conversation.";
  const description = isJa
    ? "システム音声に統合されたAI議事録アプリ。デバイス上の全ての音声を記録しよう。"
    : "An AI meeting recorder built into system audio. Capture every conversation on your device, then come back to it later.";
  const url = `/${params.lang}/lp/business/`;

  return {
    metadataBase: new URL("https://rekinote.app"),
    alternates: {
      canonical: url,
      languages: {
        ja: "/ja/lp/business/",
        en: "/en/lp/business/",
      },
    },
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "website",
      images: [
        {
          url: "/ogp.jpg",
          width: 1200,
          height: 630,
          alt: "Reki note",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/ogp.jpg"],
    },
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
