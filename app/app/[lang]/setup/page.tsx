import type { Metadata } from "next";
import { SetupDemo } from "@/components/SetupDemo";

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
    title: isJa ? "セットアップデモ — Reki note" : "Setup Demo — Reki note",
    description: isJa
      ? "スピーカーとマイクの動作を確認して、Reki noteを使い始める準備をしましょう。"
      : "Verify your speaker and microphone setup before using Reki note.",
    robots: { index: false, follow: false },
  };
}

export default function SetupPage({
  params,
}: {
  params: { lang: "ja" | "en" };
}) {
  return <SetupDemo lang={params.lang} />;
}
