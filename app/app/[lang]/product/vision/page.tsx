import type { Metadata } from "next";
import type { DictFinalCTA, DictFooter } from "@/dictionaries/types";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { VisionHeader } from "./VisionHeader";

type Lang = "ja" | "en";

type VisionDict = {
  header: { cta: string };
  meta: { title: string; description: string };
  origin: { eyebrow: string; headline: string; sub: string };
  name: { eyebrow: string; intro: string; kanji: string; sub: string };
  meaning: {
    eyebrow: string;
    title: string;
    items: { compound: string; reading: string; meaning: string }[];
  };
  historyCalendar: { eyebrow: string; title: string; sub: string };
  transformation: { eyebrow: string; title: string; body: string };
  aiReady: {
    eyebrow: string;
    title: string;
    body: string;
    steps: { label: string; desc: string }[];
  };
  layer: {
    eyebrow: string;
    title: string;
    layers: { label: string; sub: string }[];
    rekiIndex: number;
    otherAppsLabel: string;
    feedsAiLabel: string;
  };
  tagline: { line1: string; line2: string };
  cta: DictFinalCTA;
  footer: DictFooter;
};

const visionDictionaries: Record<Lang, VisionDict> = {
  ja: {
    header: { cta: "Reki note を試す" },
    meta: {
      title: "Reki note — プロダクトビジョン",
      description:
        "Rekiは東京・渋谷生まれ。「歴」という漢字に込めた想いと、AIライフの縁の下の力持ちを目指すプロダクトビジョン。",
    },
    origin: {
      eyebrow: "Origin",
      headline: "Rekiは、\n渋谷で生まれた。",
      sub: "2025年、神南のオフィスにて。",
    },
    name: {
      eyebrow: "The Name",
      intro: "名前の由来は、",
      kanji: "歴",
      sub: "たった一文字の漢字。",
    },
    meaning: {
      eyebrow: "Meaning",
      title: "「歴」が持つ意味は、ひとつじゃない。",
      items: [
        { compound: "歴史", reading: "れきし", meaning: "起きたことの記録。あなたの日々も、積もれば歴史になる。" },
        { compound: "暦", reading: "こよみ", meaning: "時間に区切りをつけるもの。カレンダーの原型。" },
        { compound: "経歴", reading: "けいれき", meaning: "歩いてきた道のり。仕事と経験の重なり。" },
        { compound: "来歴", reading: "らいれき", meaning: "どこから来て、どこへ向かうか。ものごとの成り立ち。" },
      ],
    },
    historyCalendar: {
      eyebrow: "Definition",
      title: "Reki noteは、\nあなたのHistory Calendar。",
      sub: "あなたが記録する。AIが活かす。",
    },
    transformation: {
      eyebrow: "Philosophy",
      title: "AIが、何かすごいものに変える。",
      body: "Rekiに残した記録はAIに渡り、加工されて、あなたにとって意味のある形に変わる。\n変換はAIの仕事。\nRekiは、ただ記録する。",
    },
    aiReady: {
      eyebrow: "How It Works",
      title: "Rekiは、AIに渡せるデータを作る。",
      body: "カレンダーから今やっていることを拾い、音声を記録する。あとで何かに使いたくなったとき、そのままAIに渡せる。",
      steps: [
        { label: "Calendar", desc: "予定を取り込んで、文脈をつくる" },
        { label: "Record", desc: "会議・講義・対話の音声を、そのまま残す" },
        { label: "Structure", desc: "音声とカレンダーを紐づけて、構造化する" },
        { label: "AI Ready", desc: "AIに渡せる形で、ずっと手元に置いておく" },
      ],
    },
    layer: {
      eyebrow: "Architecture",
      title: "Rekiがいるのは、この位置。",
      layers: [
        { label: "Hardware", sub: "マイク・スピーカー・カメラ" },
        { label: "OS", sub: "macOS / Windows" },
        { label: "Reki note", sub: "音声とカレンダーを構造化して記録" },
        { label: "LLM / AI", sub: "文字起こし・要約・質問応答" },
        { label: "Apps", sub: "ドキュメント・チャット・CRM・議事録" },
      ],
      rekiIndex: 2,
      otherAppsLabel: "普通のアプリ",
      feedsAiLabel: "AIに渡る",
    },
    tagline: {
      line1: "あなたのAIライフの、",
      line2: "縁の下の力持ち。",
    },
    cta: {
      title: "それが、Reki note。\nまず触ってみてほしい。",
      desc: "準備ができたらすぐ届けます。メールだけで登録完了。",
      macSub: "Apple Silicon（M1以降）",
      winSub: "Windows 10以降・ベータ版",
      btnDefault: "Mac版を無料ダウンロード",
      btnWin: "Windows版を無料ダウンロード",
      preview: {
        ariaLabel: "Reki note ホーム画面プレビュー",
        recordTitle: "録音を開始",
        recordSubtitle: "次のミーティングを記録",
        importAudio: "録音を読み込む",
        todaySchedule: "今日の予定",
        schedule: [
          { time: "10:00", title: "週次定例", status: "まもなく" },
          { time: "13:00", title: "クライアントMTG", status: "Google Meet" },
          { time: "16:00", title: "1on1 / 田中", status: "対面" },
        ],
        home: "ホーム",
        heading: "ホーム",
        subheading: "あなたの記録を、全部ここに。",
        searchPlaceholder: "記録を検索",
        filters: ["今日", "新しい順", "すべて"],
        sessions: [
          {
            title: "週次定例 / プロダクトチーム",
            time: "今日 10:00〜10:45",
            app: "Google Meet",
            attendees: "6",
            preview: "リリース日を5/15に確定。QAは来週水曜まで。デザインレビューは完了。",
          },
          {
            title: "クライアントMTG / A社",
            time: "5/7 13:00〜14:00",
            app: "Zoom",
            attendees: "4",
            preview: "要件の追加ヒアリング。API連携の範囲を確認。次回は見積もり提示。",
          },
          {
            title: "1on1 / 田中",
            time: "5/6 16:00〜16:30",
            app: "対面",
            attendees: "2",
            preview: "キャリアの方向性について。来月の目標設定を次回までに準備。",
          },
        ],
        attendeesUnit: "名",
        aiLink: "記録を開く",
        aiQuestion: "今週のクライアントMTGで決まったアクションアイテムは？",
      },
    },
    footer: {
      tagline: "Reki note ・ あなたの記録を、価値に変える。",
      company: "運営会社",
      switchHeading: "ページ",
      businessLabel: "ビジネス向け",
      businessDesc: "会議、商談、1on1、対面MTGの記録を1つに。",
      studentLabel: "学生向け",
      studentDesc: "講義、文字起こし、試験前の見返しをラクに。",
      developerLabel: "開発者向け",
      developerDesc: "API連携、音声処理、プラグイン開発の技術情報。",
      visionLabel: "プロダクトビジョン",
      visionDesc: "Rekiの名前の由来と、目指す世界。",
      otherLabel: "トップ",
      otherDesc: "Reki noteの概要ページ。",
      currentLabel: "表示中",
    },
  },
  en: {
    header: { cta: "Try Reki note" },
    meta: {
      title: "Reki note — Product Vision",
      description:
        "Reki was born in Shibuya, Tokyo. The vision behind the name, the kanji, and the product that aims to be the unsung hero of your AI life.",
    },
    origin: {
      eyebrow: "Origin",
      headline: "Reki was born\nin Shibuya, Tokyo.",
      sub: "Jinnan, Shibuya. 2025.",
    },
    name: {
      eyebrow: "The Name",
      intro: "Named after one kanji:",
      kanji: "歴",
      sub: "One character. Many layers.",
    },
    meaning: {
      eyebrow: "Meaning",
      title: "歴 means more than one thing.",
      items: [
        { compound: "歴史", reading: "rekishi", meaning: "A record of what happened. Your records add up the same way." },
        { compound: "暦", reading: "koyomi", meaning: "How we split time into pieces. The idea behind every calendar." },
        { compound: "経歴", reading: "keireki", meaning: "The path behind you. Work and experience, stacked." },
        { compound: "来歴", reading: "raireki", meaning: "Where things come from, and where they go next." },
      ],
    },
    historyCalendar: {
      eyebrow: "Definition",
      title: "Reki note is\nyour History Calendar.",
      sub: "You record. AI makes it count.",
    },
    transformation: {
      eyebrow: "Philosophy",
      title: "AI turns it into something good.",
      body: "What Reki records gets picked up by AI, reshaped, and turned into something that actually matters to you.\nThat part is AI's job.\nReki just records.",
    },
    aiReady: {
      eyebrow: "How It Works",
      title: "Reki builds data AI can actually use.",
      body: "It picks up what you're doing from your calendar, records the audio, and keeps it ready for whenever you want to hand it off to AI.",
      steps: [
        { label: "Calendar", desc: "Pull in your schedule. Build context." },
        { label: "Record", desc: "Capture audio from meetings, lectures, conversations." },
        { label: "Structure", desc: "Tie audio to calendar events. Make it structured." },
        { label: "AI Ready", desc: "Keep it stored in a shape AI can work with." },
      ],
    },
    layer: {
      eyebrow: "Architecture",
      title: "This is where Reki sits.",
      layers: [
        { label: "Hardware", sub: "Mic, speaker, camera" },
        { label: "OS", sub: "macOS / Windows" },
        { label: "Reki note", sub: "Structures and records audio with calendar" },
        { label: "LLM / AI", sub: "Transcription, summaries, Q&A" },
        { label: "Apps", sub: "Docs, chat, CRM, meeting notes" },
      ],
      rekiIndex: 2,
      otherAppsLabel: "Typical apps",
      feedsAiLabel: "into AI",
    },
    tagline: {
      line1: "The unsung hero",
      line2: "of your AI life.",
    },
    cta: {
      title: "That is Reki note.\nGive it a try.",
      desc: "We'll tell you the moment it's ready. Just drop your email.",
      macSub: "Apple Silicon (M1+)",
      winSub: "Windows 10+ · Beta",
      btnDefault: "Download for Mac",
      btnWin: "Download for Windows",
      preview: {
        ariaLabel: "Reki note home screen preview",
        recordTitle: "Start Recording",
        recordSubtitle: "Capture the next meeting",
        importAudio: "Import Audio",
        todaySchedule: "Today's Schedule",
        schedule: [
          { time: "10:00", title: "Weekly Standup", status: "Soon" },
          { time: "13:00", title: "Client Meeting", status: "Google Meet" },
          { time: "16:00", title: "1:1 / Tanaka", status: "In person" },
        ],
        home: "Home",
        heading: "Home",
        subheading: "All your records, right here.",
        searchPlaceholder: "Search records",
        filters: ["Today", "Newest", "All"],
        sessions: [
          {
            title: "Weekly Standup / Product",
            time: "Today 10:00–10:45",
            app: "Google Meet",
            attendees: "6",
            preview: "Release date set to 5/15. QA due next Wednesday. Design review complete.",
          },
          {
            title: "Client Meeting / Acme Corp",
            time: "5/7 13:00–14:00",
            app: "Zoom",
            attendees: "4",
            preview: "Additional requirements hearing. Confirmed API integration scope. Next: estimate.",
          },
          {
            title: "1:1 / Tanaka",
            time: "5/6 16:00–16:30",
            app: "In person",
            attendees: "2",
            preview: "Career direction discussion. Prepare next month's goals by next session.",
          },
        ],
        attendeesUnit: "",
        aiLink: "Open record",
        aiQuestion: "What action items came out of this week's client meeting?",
      },
    },
    footer: {
      tagline: "Reki note · Turn your records into value.",
      company: "Company",
      switchHeading: "Pages",
      businessLabel: "Business",
      businessDesc: "Meetings, customer calls, 1:1s, and team memory.",
      studentLabel: "Student",
      studentDesc: "Lectures, transcripts, and easier exam-season catch-up.",
      developerLabel: "Developer",
      developerDesc: "API integrations, audio processing, and plugin development.",
      visionLabel: "Product Vision",
      visionDesc: "The story behind Reki's name and mission.",
      otherLabel: "Top",
      otherDesc: "Reki note overview page.",
      currentLabel: "Current",
    },
  },
};

export function generateStaticParams() {
  return [{ lang: "ja" }, { lang: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Lang };
}): Promise<Metadata> {
  const dict = visionDictionaries[params.lang].meta;
  const url = `/${params.lang}/product/vision/`;

  return {
    metadataBase: new URL("https://rekinote.app"),
    alternates: {
      canonical: url,
      languages: {
        ja: "/ja/product/vision/",
        en: "/en/product/vision/",
      },
    },
    title: dict.title,
    description: dict.description,
    openGraph: {
      title: dict.title,
      description: dict.description,
      url,
      type: "website",
      images: [
        { url: "/ogp.jpg", width: 1200, height: 630, alt: "Reki note" },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.title,
      description: dict.description,
      images: ["/ogp.jpg"],
    },
  };
}

export default function VisionPage({
  params,
}: {
  params: { lang: Lang };
}) {
  const dict = visionDictionaries[params.lang];

  return (
    <>
      <VisionHeader lang={params.lang} cta={dict.header.cta} />
      <main>
        {/* ─── ACT 1: STORY ─── */}

        {/* Origin — dark hero */}
        <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="hero-orb" />
          <div className="container-x relative z-10 px-6 py-32 md:py-48 text-center">
            <h1 className="vision-statement text-white gradient-text whitespace-pre-line">
              {dict.origin.headline}
            </h1>
            <p className="mt-8 text-base muted max-w-[400px] mx-auto tracking-wide font-mono-num uppercase">
              {dict.origin.sub}
            </p>
          </div>
        </section>

        {/* The Name — consolidated: intro → kanji → closing */}
        <section className="px-6 py-24 md:py-32">
          <div className="container-x text-center">
            <p className="text-xl md:text-2xl leading-relaxed">
              {dict.name.intro}
            </p>
            <div className="my-8 md:my-12">
              <span className="vision-kanji gradient-text-strong">{dict.name.kanji}</span>
            </div>
            <p className="mt-2 text-xl md:text-2xl muted leading-relaxed">
              {dict.name.sub}
            </p>
          </div>
        </section>

        {/* Transition: dark → light */}
        <div className="h-40 md:h-56 bg-gradient-to-b from-[#0c0c10] via-[#4a4a52] to-[#f0f0f0]" />

        {/* ─── ACT 2: MEANING ─── */}

        <div className="light-section-scope bg-[#f0f0f0] text-[#0c0c10]">
          {/* Meaning cards */}
          <section className="section">
            <div className="container-x">
              <h2 className="text-3xl md:text-[42px] font-bold tracking-tight leading-[1.35]">
                {dict.meaning.title}
              </h2>
              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {dict.meaning.items.map((item) => (
                  <div
                    key={item.compound}
                    className="rounded-2xl border border-[rgba(12,12,16,0.08)] bg-white/80 p-6 md:p-8"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="text-4xl md:text-5xl font-bold tracking-tight">
                        {item.compound}
                      </span>
                      <span className="text-sm text-[#8c8c97] font-mono-num">
                        {item.reading}
                      </span>
                    </div>
                    <p className="mt-4 text-[15px] leading-[1.85] text-[#525866]">
                      {item.meaning}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* History Calendar statement */}
          <section className="section">
            <div className="container-x text-center py-8 md:py-16">
              <h2 className="vision-statement whitespace-pre-line font-bold tracking-tight">
                {dict.historyCalendar.title}
              </h2>
              <p className="mt-6 text-xl md:text-2xl text-[#525866]">
                {dict.historyCalendar.sub}
              </p>
            </div>
          </section>
        </div>

        {/* Transition: light → dark */}
        <div className="h-40 md:h-56 bg-gradient-to-b from-[#f0f0f0] via-[#4a4a52] to-[#0c0c10]" />

        {/* ─── ACT 3: PHILOSOPHY (emotional climax) ─── */}

        <section className="relative overflow-hidden py-28 md:py-40 px-6">
          <div className="hero-orb" style={{ top: "-120px" }} />
          <div className="container-x relative z-10 max-w-[760px] mx-auto text-center">
            <h2 className="text-3xl md:text-[48px] font-bold tracking-tight leading-[1.25] text-white gradient-text">
              {dict.transformation.title}
            </h2>
            <p className="mt-8 text-lg md:text-xl muted leading-[2] whitespace-pre-line max-w-[580px] mx-auto">
              {dict.transformation.body}
            </p>
          </div>
        </section>

        {/* ─── ACT 4: PROOF ─── */}

        {/* AI-Ready Data — 4-step flow */}
        <section className="section">
          <div className="container-x">
            <h2 className="text-3xl md:text-[42px] font-bold tracking-tight leading-[1.35]">
              {dict.aiReady.title}
            </h2>
            <p className="mt-5 text-[15px] muted leading-[1.9] max-w-[640px]">
              {dict.aiReady.body}
            </p>

            {/* Steps: single column on mobile, 4-col on lg */}
            <div className="mt-12 grid gap-0 lg:grid-cols-4 lg:gap-4">
              {dict.aiReady.steps.map((step, i) => (
                <div key={step.label} className="relative">
                  <div className="card p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[rgba(139,92,246,0.15)] text-[#a78bfa] text-xs font-bold font-mono-num">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm font-semibold font-mono-num tracking-wide uppercase text-[#a78bfa]">
                        {step.label}
                      </span>
                    </div>
                    <p className="text-sm muted leading-[1.75]">{step.desc}</p>
                  </div>
                  {/* Vertical connector on mobile/tablet, horizontal chevron on lg */}
                  {i < dict.aiReady.steps.length - 1 && (
                    <>
                      <div className="flex justify-center lg:hidden py-1">
                        <div className="h-6 w-0.5 bg-[rgba(139,92,246,0.25)]" />
                      </div>
                      <div className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-6 h-6 items-center justify-center text-[#8c8c97]">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                          <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Layer Stack */}
        <section className="py-16 md:py-24 px-6" style={{ background: "#13131a" }}>
          <div className="container-x">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight leading-[1.35]">
                {dict.layer.title}
              </h2>
            </div>
            <div className="max-w-[540px] mx-auto flex flex-col">
              {dict.layer.layers.map((layer, i) => {
                const isReki = i === dict.layer.rekiIndex;
                const isLastLayer = i === dict.layer.layers.length - 1;
                const showZoneDivider = i === dict.layer.rekiIndex;
                return (
                  <div key={layer.label} className="relative">
                    <div
                      className={`relative flex items-center gap-5 px-6 py-5 md:px-8 md:py-6 border ${
                        isReki
                          ? "border-[rgba(139,92,246,0.5)] bg-[rgba(139,92,246,0.1)] rounded-2xl shadow-[0_0_32px_-8px_rgba(139,92,246,0.35)] z-10 my-1"
                          : "border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.02)]"
                      } ${!isReki && i === 0 ? "rounded-t-2xl" : ""} ${!isReki && isLastLayer ? "rounded-b-2xl" : ""}`}
                    >
                      <div className="flex-1 min-w-0">
                        <span className={`text-sm md:text-base font-semibold ${
                          isReki ? "text-[#c4b5fd]" : "text-[#ececef]"
                        }`}>
                          {layer.label}
                        </span>
                        <span className={`block text-xs md:text-sm mt-0.5 ${
                          isReki ? "text-[#a78bfa]/70" : "text-[#8c8c97]"
                        }`}>
                          {layer.sub}
                        </span>
                      </div>
                      {isLastLayer && (
                        <span className="flex items-center gap-1.5 text-[11px] text-[#8c8c97] flex-shrink-0 border border-[rgba(255,255,255,0.08)] rounded-full px-3 py-1">
                          ← {dict.layer.otherAppsLabel}
                        </span>
                      )}
                    </div>

                    {/* Zone divider: after Reki, before LLM */}
                    {showZoneDivider && (
                      <div className="flex items-center gap-3 my-3 px-2">
                        <div className="flex-1 border-t border-dashed border-[rgba(139,92,246,0.3)]" />
                        <span className="text-[11px] text-[#a78bfa] font-mono-num tracking-wider uppercase whitespace-nowrap">
                          ↓ {dict.layer.feedsAiLabel}
                        </span>
                        <div className="flex-1 border-t border-dashed border-[rgba(139,92,246,0.3)]" />
                      </div>
                    )}

                    {/* Regular connector line */}
                    {!isLastLayer && !showZoneDivider && (
                      <div className="flex justify-center">
                        <div className="h-3 w-px bg-[rgba(255,255,255,0.08)]" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── ACT 5: CLOSE ─── */}

        {/* Tagline + CTA */}
        <section className="relative overflow-hidden pt-20 md:pt-32">
          <div className="container-x relative z-10 text-center mb-16 md:mb-24 px-6">
            <h2 className="vision-statement text-white gradient-text leading-[1.3]">
              {dict.tagline.line1}
              <br />
              {dict.tagline.line2}
            </h2>
          </div>
          <FinalCTA dict={dict.cta} lang={params.lang} showPreview={true} />
        </section>
      </main>
      <Footer dict={dict.footer} lang={params.lang} audience="vision" />
    </>
  );
}
