import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Features } from "@/components/Features";
import { WorksWith } from "@/components/WorksWith";
import { Compare } from "@/components/Compare";
import { Privacy } from "@/components/Privacy";
import { HowItWorks } from "@/components/HowItWorks";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import type { Dictionary } from "@/dictionaries/types";

type Lang = "ja" | "en";

const developerDictionaries: Record<Lang, Dictionary> = {
  ja: {
    Header: {
      benefits: "変化",
      features: "機能",
      integrations: "対応環境",
      compare: "比較",
      privacy: "プロバイダ",
      howItWorks: "仕組み",
      pricing: "料金",
      download: "Mac版を無料ダウンロード",
      downloadWin: "Win版",
    },
    Hero: {
      title1: "AI議事録への課金、",
      title2: "APIキー発行で終わり",
      subtitle: "全サービスの音声情報をMarkdownに",
      desc: "データはローカル保存。無料キーでも十分。",
      downloadMac: "Mac版 無料ダウンロード",
      downloadWin: "Windows版 無料ダウンロード",
      mac: "Mac",
      macSub: "Apple Silicon（M1以降）",
      win: "Win",
      winSub: "Windows 10以降・ベータ版",
      winNote: "Mac版が安定版です。Windows版は一部機能に制限があります",
    },
    Problem: {
      eyebrow: "The Problem",
      title1: "APIキーは無料で作れる",
      title2: "なのに議事録ツールだけ、",
      title3: "月額を取ってくる。",
      desc: "OpenAIもGeminiもGroqも、キーを発行すれば従量課金か無料で使える。なのに議事録になった途端、月額$20のSaaSが出てくる。出力は独自形式でObsidianに入らない。音声はそっちのクラウドに吸われる。",
      before: "Before",
      beforeTitle: "覚えがあるはず。",
      beforeItems: [
        { name: "APIキーで済む処理に、月額サブスク", price: "従量で済むのに固定費" },
        { name: "出力がPDFか独自形式", price: "Obsidianに入らない" },
        { name: "音声がクラウドに送られる", price: "社内の会話を渡してる" },
        { name: "プロバイダが固定で変えられない", price: "新モデルに乗り換えできない" },
      ],
      total: "結果",
      beforeTotal: "APIキーで済むのに、月額を払わされる",
      beforeTotalDesc: "ツールに合わせる側になってる",
      after: "After",
      afterTitle: "持ってるもので、全部動く",
      afterDesc: "APIキーとローカル環境だけで完結",
      afterItems: [
        "キーを入れるだけ。無料枠でも動く",
        "出力はMarkdown。ObsidianにもGitにも",
        "音声はローカル保存。クラウドに上がらない",
        "プロバイダは設定ひとつで切り替え",
      ],
      afterTotal: "月額費用ゼロ",
      afterTotalDesc: "従量課金だけで回る",
    },
    Features: {
      eyebrow: "Benefits",
      title1: "Rekiで",
      title2: "議事録の取り方が変わる",
      rows: [
        {
          num: "01",
          phase: "設定後すぐ",
          title: "キーを入れたら、もう動く。",
          body: "OpenAI、Gemini、Groq。無料枠のキーでもいい。サブスクは発生しない。それだけ。",
        },
        {
          num: "02",
          phase: "会議後すぐ",
          title: ".mdで保存。あとは好きにしろ。",
          body: "Obsidian Vaultに放り込むも良し、git commitするも良し。議事録はMarkdownでローカルに残る。独自フォーマットに閉じ込められることはない。",
        },
        {
          num: "03",
          phase: "いつでも",
          title: "音声データ、Rekiにも送らない。",
          body: "ここが他と根本的に違う。音声はあなたのMacに保存される。文字起こしはあなたが選んだAIプロバイダに直接送信される。Rekiのサーバーを経由しない。弊社があなたの会議の中身を見ることはない。",
        },
      ],
      notificationTitle: "会議を検出しました",
      notificationApp: "App",
      notificationCalendar: "カレンダー",
      notificationCalendarValue: "Backend API Review",
      notificationBtn: "録音を開始",
      chatQuestion: "今日のスタンドアップで決まったアクションアイテムは？",
      chatAnswerLabel: "ANSWER",
      chatAnswer: "次の3点が決定されました。\n① 開発環境はGroq（Whisperモデル）に切り替え\n② 本番はgpt-4o-transcribeを維持\n③ 月次コスト上限は$30で設定",
      chatSource: "出典: Engineering Standup 5/7 10:00",
      memoryLabel: "MEETINGS",
      memoryItems: [
        { date: "今日", title: "Engineering Standup", excerpt: "APIコスト最適化..." },
        { date: "3日前", title: "Tech Review", excerpt: "GraphQL移行のPoC方針" },
        { date: "先週", title: "Architecture Review", excerpt: "マイクロサービス分割" },
        { date: "2週前", title: "1on1 / 田中×松嶋", excerpt: "採用方針の変更" },
        { date: "先月", title: "Infra Planning", excerpt: "Supabase移行の決定" },
      ],
    },
    WorksWith: {
      eyebrow: "Works With Your Stack",
      title: "どの会議ツールでも、そのまま。",
      desc: "OSレベルで音声をキャプチャ。Bot招待不要。",
      apps: [
        { name: "Zoom", slug: "zoom" },
        { name: "Google Meet", slug: "googlemeet" },
        { name: "Teams", icon: "users" },
        { name: "Discord", slug: "discord" },
        { name: "Slack Huddle", slug: "slack" },
        { name: "その他の会議ツール", slug: "apple" },
        { name: "対面MTG", icon: "messages" },
        { name: "音声ファイル読み込み", icon: "mic" },
        { name: "その他のデバイス音声", fallback: "…" },
      ],
    },
    Compare: {
      eyebrow: "Compare",
      title1: "SaaS vs 自作 vs",
      title2: "Reki。",
      desc: "",
      colFeature: "比較軸",
      col2: "SaaS型（Otter / Fireflies等）",
      col3: "自作スクリプト / CLI",
      footnote: "※想定機能の比較",
      rows: [
        {
          feature: "APIキー持ち込み",
          reki: { tone: "good", text: "自分のキーで動く" },
          otherAi: { tone: "bad", text: "専用サブスク必要" },
          notes: { tone: "good", text: "自分で組める" },
        },
        {
          feature: "出力形式",
          reki: { tone: "good", text: "Markdown" },
          otherAi: { tone: "bad", text: "独自フォーマット" },
          notes: { tone: "soso", text: "実装が必要" },
        },
        {
          feature: "データ保存先",
          reki: { tone: "good", text: "ローカル（非経由）" },
          otherAi: { tone: "bad", text: "クラウド必須" },
          notes: { tone: "good", text: "自分で設定" },
        },
      ],
    },
    Privacy: {
      eyebrow: "Your Choice of Provider",
      title1: "プロバイダは、",
      title2: "あなたが選ぶ。",
      facts: [
        "設定ひとつで切り替え",
        "無料枠のキーでも動く",
        "今後も追加予定",
      ],
      providersLabel: "PROVIDERS",
      providersDesc: "手持ちのAIをそのまま利用",
      providers: ["OpenAI", "Gemini", "Groq Cloud", "OpenRouter", "NVIDIA", "+ 今後追加"],
    },
    HowItWorks: {
      eyebrow: "How it Works",
      title1: "キーを入れる。録音する。",
      title2: ".mdが残る。",
      input01Label: "Input 01",
      input01Title: "会議音声",
      transcript: [
        { time: "00:03", speaker: "田中", color: "#a78bfa", text: "認証プロトコル、OAuth 2.0で進めましょう。GraphQL移行のPoCは来週から。" },
        { time: "00:18", speaker: "松嶋", color: "#7c9cf0", text: "DBスキーマの変更が伴うので、移行スクリプトのテストを先に回しておきます。" },
        { time: "00:34", speaker: "鈴木", color: "#60d394", text: "Blue/Greenデプロイの環境構築、金曜までに用意します。" },
      ],
      input02Label: "Input 02",
      input02Title: "カレンダー情報",
      calendarMeeting: "Backend API Review",
      calendarDate: "日時",
      calendarDateValue: "2026/05/07 13:00",
      calendarParticipants: "参加者",
      calendarParticipantsValue: "田中、松嶋、鈴木",
      calendarTool: "ツール",
      calendarNote: "会議名・参加者・ツールを自動で紐づけ",
      outputLabel: "Output",
      outputTitle: "Markdownナレッジベース",
      outputCards: [
        { title: "全文検索", body: "過去の議論を横断検索" },
        { title: "AI質問応答", body: "「先週決まったDB方針は？」で答えが出る" },
        { title: "ナレッジ蓄積", body: ".mdが積み上がり、意思決定ログになる" },
      ],
    },
    FinalCTA: {
      title: "サブスクはいらない。\nAPIキーだけでいい。",
      desc: "データは手元に残る。出力はMarkdown。",
      macSub: "Apple Silicon（M1以降）",
      winSub: "Windows 10以降・ベータ版",
      btnDefault: "Mac版を無料ダウンロード",
      btnWin: "Windows版を無料ダウンロード",
      preview: {
        ariaLabel: "Reki note developer home preview",
        recordTitle: "録音を開始",
        recordSubtitle: "次の会議を記録",
        importAudio: "録音を読み込む",
        todaySchedule: "今日の会議",
        schedule: [
          { time: "10:00", title: "Engineering Standup", status: "進行中" },
          { time: "13:00", title: "Backend API Review", status: "Zoom" },
          { time: "16:30", title: "1on1", status: "対面" },
        ],
        home: "ホーム",
        heading: "ホーム",
        subheading: "会議の記録を、全部ここに。",
        searchPlaceholder: "議事録を検索",
        filters: ["今日", "新しい順", "決定事項"],
        sessions: [
          {
            title: "Engineering Standup",
            time: "今日 10:00〜10:15",
            app: "Zoom",
            attendees: "6",
            preview: "Groq切り替えでAPIコスト30%削減。本番はgpt-4o継続。月次上限$30で設定。",
          },
          {
            title: "Backend API Review",
            time: "5/6 13:00〜14:00",
            app: "Google Meet",
            attendees: "4",
            preview: "認証プロトコルはOAuth 2.0で決定。GraphQL移行PoCは来週開始。DB移行スクリプト先行テスト。",
          },
          {
            title: "1on1 / 田中×松嶋",
            time: "5/5 16:30〜17:00",
            app: "対面",
            attendees: "2",
            preview: "Q3採用方針を変更。エンジニア2名→1名に絞る。残り予算でAI基盤を強化する方針。",
          },
        ],
        attendeesUnit: "名",
        aiLink: "会議に入る",
        aiQuestion: "今日のスタンドアップで決まったアクションアイテムは？",
      },
    },
    Footer: {
      tagline: "Reki note ・ APIキーだけで動く議事録。",
      company: "運営会社",
      switchHeading: "ユースケース",
      businessLabel: "ビジネス向け",
      businessDesc: "会議、商談、1on1、対面MTGの記録を1つに。",
      studentLabel: "学生向け",
      studentDesc: "講義、文字起こし、試験前の見返しをラクに。",
      developerLabel: "開発者向け",
      developerDesc: "BYOK、Markdown出力、ローカル完結の議事録。",
      otherLabel: "その他",
      otherDesc: "どのユースケースが合うか迷ったらこちら。",
      currentLabel: "表示中",
    },
  },
  en: {
    Header: {
      benefits: "Benefits",
      features: "Features",
      integrations: "Integrations",
      compare: "Compare",
      privacy: "Providers",
      howItWorks: "How it works",
      pricing: "Pricing",
      download: "Download for Mac",
      downloadWin: "Windows",
    },
    Hero: {
      title1: "AI meeting notes?",
      title2: "Just grab an API key.",
      subtitle: "Turn every meeting into Markdown",
      desc: "Data stays local. Even a free-tier key is enough.",
      downloadMac: "Download for Mac",
      downloadWin: "Download for Windows",
      mac: "Mac",
      macSub: "Apple Silicon (M1+)",
      win: "Windows",
      winSub: "Windows 10+ · Beta",
      winNote: "Mac is the stable release. Some features may be limited on Windows",
    },
    Problem: {
      eyebrow: "The Problem",
      title1: "API keys are free.",
      title2: "Yet meeting tools still want",
      title3: "a monthly subscription.",
      desc: "OpenAI, Gemini, Groq — generate a key and you're on pay-as-you-go or a free tier. But the moment you want meeting notes, it's $20/month SaaS. Output locked in proprietary format. Audio shipped to their cloud.",
      before: "Before",
      beforeTitle: "Sound familiar?",
      beforeItems: [
        { name: "API key would do, tool charges monthly", price: "Fixed cost for a pay-as-you-go task" },
        { name: "Output is PDF or proprietary", price: "Won't open in Obsidian" },
        { name: "Audio uploaded to their cloud", price: "Your conversations, their servers" },
        { name: "Provider locked in", price: "Can't switch to new models" },
      ],
      total: "Result",
      beforeTotal: "An API key would do, but you're paying monthly",
      beforeTotalDesc: "The tool decides, not you",
      after: "After",
      afterTitle: "Run it on what you already have",
      afterDesc: "API key + local machine. That's it.",
      afterItems: [
        "Paste your key. Free-tier works too",
        "Output is Markdown. Obsidian, Git, whatever",
        "Audio stays local. Never leaves your machine",
        "Switch providers in one setting",
      ],
      afterTotal: "No monthly bill",
      afterTotalDesc: "Pay-as-you-go only",
    },
    Features: {
      eyebrow: "Benefits",
      title1: "With Reki,",
      title2: "meeting notes work differently",
      rows: [
        {
          num: "01",
          phase: "Right after setup",
          title: "Paste your key. Done.",
          body: "OpenAI, Gemini, Groq. Free-tier keys work. No subscription. That's it.",
        },
        {
          num: "02",
          phase: "After each meeting",
          title: "Saved as .md. Do what you want with it.",
          body: "Drop it into your Obsidian vault. Push it to Git. Grep it. Whatever you do with Markdown, it just works. No proprietary format locking you in.",
        },
        {
          num: "03",
          phase: "Always",
          title: "Your audio never touches Reki's servers.",
          body: "This is what makes Reki fundamentally different. Audio is stored on your Mac. Transcription is sent directly from your machine to the AI provider you chose. It never passes through Reki's servers. We never see the contents of your meetings.",
        },
      ],
      notificationTitle: "Meeting detected",
      notificationApp: "App",
      notificationCalendar: "Calendar",
      notificationCalendarValue: "Backend API Review",
      notificationBtn: "Start Recording",
      chatQuestion: "What action items came out of today's standup?",
      chatAnswerLabel: "ANSWER",
      chatAnswer: "Three decisions were made:\n1. Dev environment switches to Groq (Whisper)\n2. Production stays on gpt-4o-transcribe\n3. Monthly cost cap set at $30",
      chatSource: "Source: Engineering Standup 5/7 10:00",
      memoryLabel: "MEETINGS",
      memoryItems: [
        { date: "Today", title: "Engineering Standup", excerpt: "API cost optimization..." },
        { date: "3d ago", title: "Tech Review", excerpt: "GraphQL migration PoC plan" },
        { date: "Last week", title: "Architecture Review", excerpt: "Microservice split decision" },
        { date: "2w ago", title: "1:1 / Tanaka & Matsushima", excerpt: "Hiring plan revised" },
        { date: "Last month", title: "Infra Planning", excerpt: "Supabase migration decided" },
      ],
    },
    WorksWith: {
      eyebrow: "Works With Your Stack",
      title: "Any meeting tool. As-is.",
      desc: "OS-level audio capture. No bot invite needed.",
      apps: [
        { name: "Zoom", slug: "zoom" },
        { name: "Google Meet", slug: "googlemeet" },
        { name: "Teams", icon: "users" },
        { name: "Discord", slug: "discord" },
        { name: "Slack Huddle", slug: "slack" },
        { name: "Other apps on device", slug: "apple" },
        { name: "In-person meetings", icon: "messages" },
        { name: "Import audio files", icon: "mic" },
        { name: "Other audio sources", fallback: "…" },
      ],
    },
    Compare: {
      eyebrow: "Compare",
      title1: "SaaS vs DIY vs",
      title2: "Reki.",
      desc: "",
      colFeature: "Features",
      col2: "SaaS (Otter / Fireflies etc.)",
      col3: "DIY Script / CLI",
      footnote: "* Conceptual comparison",
      rows: [
        {
          feature: "Bring your own API key",
          reki: { tone: "good", text: "Runs on your key" },
          otherAi: { tone: "bad", text: "Subscription required" },
          notes: { tone: "good", text: "Build it yourself" },
        },
        {
          feature: "Output format",
          reki: { tone: "good", text: "Markdown" },
          otherAi: { tone: "bad", text: "Proprietary" },
          notes: { tone: "soso", text: "You implement it" },
        },
        {
          feature: "Data storage",
          reki: { tone: "good", text: "Local (no relay)" },
          otherAi: { tone: "bad", text: "Cloud required" },
          notes: { tone: "good", text: "You configure it" },
        },
      ],
    },
    Privacy: {
      eyebrow: "Your Choice of Provider",
      title1: "You pick",
      title2: "the provider.",
      facts: [
        "Switch in one setting",
        "Free-tier keys work too",
        "More providers coming",
      ],
      providersLabel: "PROVIDERS",
      providersDesc: "Use what you already have",
      providers: ["OpenAI", "Gemini", "Groq Cloud", "OpenRouter", "NVIDIA", "+ More coming soon"],
    },
    HowItWorks: {
      eyebrow: "How it Works",
      title1: "Paste your key. Hit record.",
      title2: "Get .md files.",
      input01Label: "Input 01",
      input01Title: "Meeting Audio",
      transcript: [
        { time: "00:03", speaker: "Tanaka", color: "#a78bfa", text: "Auth protocol decided — going with OAuth 2.0. GraphQL migration PoC starts next week." },
        { time: "00:18", speaker: "Matsushima", color: "#7c9cf0", text: "DB schema changes are involved, so I'll run the migration script tests first." },
        { time: "00:34", speaker: "Suzuki", color: "#60d394", text: "Blue/Green deploy environment will be ready by Friday." },
      ],
      input02Label: "Input 02",
      input02Title: "Calendar Info",
      calendarMeeting: "Backend API Review",
      calendarDate: "Date",
      calendarDateValue: "2026/05/07 13:00",
      calendarParticipants: "Attendees",
      calendarParticipantsValue: "Tanaka, Matsushima, Suzuki",
      calendarTool: "Tool",
      calendarNote: "Meeting name, attendees, and tool auto-linked",
      outputLabel: "Output",
      outputTitle: "Markdown Knowledge Base",
      outputCards: [
        { title: "Full-text search", body: "Search across all past meetings" },
        { title: "AI Q&A", body: "\"What did we decide last week?\" — answered" },
        { title: "Knowledge log", body: ".md per meeting. Searchable decision log" },
      ],
    },
    FinalCTA: {
      title: "No subscription needed.\nJust an API key.",
      desc: "Data stays on your machine. Output is Markdown.",
      macSub: "Apple Silicon (M1+)",
      winSub: "Windows 10+ · Beta",
      btnDefault: "Download for Mac",
      btnWin: "Download for Windows",
      preview: {
        ariaLabel: "Reki note developer home preview",
        recordTitle: "Start Recording",
        recordSubtitle: "Capture the next meeting",
        importAudio: "Import recording",
        todaySchedule: "Today's meetings",
        schedule: [
          { time: "10:00", title: "Engineering Standup", status: "In progress" },
          { time: "13:00", title: "Backend API Review", status: "Zoom" },
          { time: "16:30", title: "1:1", status: "In-person" },
        ],
        home: "Home",
        heading: "Home",
        subheading: "Every meeting record, in one place.",
        searchPlaceholder: "Search transcripts",
        filters: ["Today", "Newest", "Decisions"],
        sessions: [
          {
            title: "Engineering Standup",
            time: "Today 10:00–10:15",
            app: "Zoom",
            attendees: "6",
            preview: "Groq switch cut API cost 30%. Production stays on gpt-4o. Monthly cap set at $30.",
          },
          {
            title: "Backend API Review",
            time: "5/6 13:00–14:00",
            app: "Google Meet",
            attendees: "4",
            preview: "Auth protocol: OAuth 2.0 decided. GraphQL migration PoC starts next week. DB migration script test first.",
          },
          {
            title: "1:1 / Tanaka & Matsushima",
            time: "5/5 16:30–17:00",
            app: "In-person",
            attendees: "2",
            preview: "Q3 hiring plan revised. One engineer hire instead of two. Remaining budget goes to AI infrastructure.",
          },
        ],
        attendeesUnit: " people",
        aiLink: "Enter meeting",
        aiQuestion: "What action items came out of today's standup?",
      },
    },
    Footer: {
      tagline: "Reki note ・ Meeting notes that run on your API key.",
      company: "Company",
      switchHeading: "Use Cases",
      businessLabel: "Business",
      businessDesc: "Meetings, customer calls, 1:1s, and team memory.",
      studentLabel: "Student",
      studentDesc: "Lectures, transcripts, and easier exam-season catch-up.",
      developerLabel: "Developer",
      developerDesc: "BYOK, Markdown output, local-first meeting notes.",
      otherLabel: "Other",
      otherDesc: "Not sure which fits? Browse all use cases.",
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
  const isJa = params.lang === "ja";
  const title = isJa
    ? "Reki note for Developers — AI議事録への課金、APIキー発行で終わり。"
    : "Reki note for Developers — AI meeting notes? Just grab an API key.";
  const description = isJa
    ? "APIキーを設定するだけで議事録が動く。追加サブスク不要、無料キーでもOK。出力はMarkdown、データはローカル保存。"
    : "Paste your API key and get meeting notes. No extra subscription — even free-tier keys work. Output is Markdown, data stays local.";
  const url = `/${params.lang}/lp/developer/`;

  return {
    metadataBase: new URL("https://rekinote.app"),
    alternates: {
      canonical: url,
      languages: {
        ja: "/ja/lp/developer/",
        en: "/en/lp/developer/",
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
          alt: "Reki note for Developers",
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

export default function DeveloperLpPage({
  params,
}: {
  params: { lang: Lang };
}) {
  const dict = developerDictionaries[params.lang];

  return (
    <>
      <Header dict={dict.Header} lang={params.lang} />
      <main>
        <Hero dict={dict.Hero} lang={params.lang} audience="developer" />
        <div className="light-section-scope bg-[#f0f0f0] text-[#0c0c10]">
          <Problem dict={dict.Problem} />
          <Features dict={dict.Features} />
          <WorksWith dict={dict.WorksWith} />
          <Compare dict={dict.Compare} />
          <Privacy dict={dict.Privacy} />
          <HowItWorks dict={dict.HowItWorks} />
          <FinalCTA dict={dict.FinalCTA} lang={params.lang} />
        </div>
      </main>
      <Footer dict={dict.Footer} lang={params.lang} audience="developer" />
    </>
  );
}
