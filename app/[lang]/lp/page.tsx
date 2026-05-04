import Link from "next/link";
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
      ? "Reki note — あなたはどっち？"
      : "Reki note — Choose your setup.",
    description: isJa
      ? "仕事向けと学生向け、あなたに合うReki noteのLPを選べます。"
      : "Choose the Reki note experience that fits your workflow: work or classes.",
  };
}

export default function LpPage({
  params,
}: {
  params: { lang: "ja" | "en" };
}) {
  const isJa = params.lang === "ja";
  const copy = isJa
    ? {
        eyebrow: "Choose Your Route",
        title: "あなた、どっち？",
        body: "Reki noteは、会話を記録したい人のためのプロダクト。仕事で使うか、講義で使うかで、見るべきLPを分けました。",
        businessLabel: "Business",
        businessTitle: "仕事で使いたい",
        businessBody: "会議、商談、1on1、対面MTG。議事録を1本に集約したい人向け。",
        businessCta: "Business LPを見る",
        studentLabel: "Student",
        studentTitle: "講義で使いたい",
        studentBody: "講義ノート、文字起こし、時間割保存。理解に集中したい学生向け。",
        studentCta: "Student LPを見る",
      }
    : {
        eyebrow: "Choose Your Route",
        title: "Choose your setup.",
        body: "Reki note works across work calls and class recordings, but the value is different in each context. Pick the version built for how you use it.",
        businessLabel: "Business",
        businessTitle: "I want it for work",
        businessBody: "For meetings, customer calls, 1:1s, and in-person discussions that should become searchable team memory.",
        businessCta: "Explore Business",
        studentLabel: "Student",
        studentTitle: "I want it for classes",
        studentBody: "For lectures, transcripts, and exam-season catch-up when you want a steadier way to keep the record.",
        studentCta: "Explore Student",
      };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0c0c10] px-6 py-16 text-[#ececef]">
      <div className="hero-orb" />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(circle at 22% 18%, rgba(139,92,246,0.18), transparent 32%), radial-gradient(circle at 82% 22%, rgba(59,130,246,0.16), transparent 28%)",
        }}
      />
      <div className="container-x relative z-10 flex min-h-[calc(100vh-8rem)] items-center justify-center">
        <section className="w-full max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">{copy.eyebrow}</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#f5f5f7] sm:text-5xl md:text-6xl">
              {copy.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#b6b6c2] sm:text-base">
              {copy.body}
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <Link
              href={`/${params.lang}/lp/business/`}
              className="card-strong group rounded-[28px] p-8 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="text-xs font-mono-num tracking-[0.24em] text-[#a78bfa] uppercase">
                {copy.businessLabel}
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[#f5f5f7] sm:text-3xl">
                {copy.businessTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#b6b6c2] sm:text-[15px]">
                {copy.businessBody}
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#d8ccff] transition-colors duration-180 group-hover:text-white">
                <span>{copy.businessCta}</span>
                <span aria-hidden="true">→</span>
              </div>
            </Link>

            <Link
              href={`/${params.lang}/lp/student/`}
              className="card group rounded-[28px] p-8 transition-transform duration-200 hover:-translate-y-1 hover:border-line-strong"
            >
              <div className="text-xs font-mono-num tracking-[0.24em] text-[#7c9cf0] uppercase">
                {copy.studentLabel}
              </div>
              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-[#f5f5f7] sm:text-3xl">
                {copy.studentTitle}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[#b6b6c2] sm:text-[15px]">
                {copy.studentBody}
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#b9cdfd] transition-colors duration-180 group-hover:text-white">
                <span>{copy.studentCta}</span>
                <span aria-hidden="true">→</span>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
