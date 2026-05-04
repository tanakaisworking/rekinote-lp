import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Features } from "@/components/Features";
import { WorksWith } from "@/components/WorksWith";
import { Compare } from "@/components/Compare";
import { HowItWorks } from "@/components/HowItWorks";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import type { Dictionary } from "@/dictionaries/types";

type Lang = "ja" | "en";

const studentDictionaries: Record<Lang, Dictionary> = {
  ja: {
    Header: {
      benefits: "変化",
      features: "価値",
      integrations: "授業環境",
      compare: "比較",
      privacy: "プライバシー",
      howItWorks: "仕組み",
      waitlist: "先行ユーザー登録",
    },
    Hero: {
      title1: "講義ノート取るの、",
      title2: "やめた。",
      subtitle: "マイク録音で文字起こし。講義まとめまで自動化。",
      desc: "対面授業もオンライン授業も、時間割に沿って保存。ノートを取る時間を、理解する時間に変える学生向けReki。",
      waitlist: "先行ユーザー登録",
      mac: "Mac",
      macSub: "先行配信中",
      win: "Win",
      winSub: "リリース準備中",
    },
    Problem: {
      eyebrow: "The Problem",
      title1: "真面目な人ほど、",
      title2: "講義中に",
      title3: "損してる。",
      desc: "話を理解したいのに、手はノートを取るのに必死。板書を書いている間に説明を聞き逃し、オンライン授業と対面授業の記録は散らばる。試験前には、どこで言っていたか探す時間ばかり増えていく。",
      before: "Before",
      beforeTitle: "手作業のノート整理",
      beforeItems: [
        { name: "板書を書き写す", price: "理解が止まる" },
        { name: "聞き逃した箇所を勘で補う", price: "精度が落ちる" },
        { name: "授業ごとにメモが散らばる", price: "復習が遅い" },
        { name: "試験前に過去ノートを掘り返す", price: "時間が消える" }
      ],
      total: "結果",
      beforeTotal: "毎回バラバラ",
      beforeTotalDesc: "理解より記録が優先される",
      after: "After",
      afterTitle: "Rekiに講義ノートを集約",
      afterDesc: "対面授業 / オンライン授業 / ゼミを1本化",
      afterItems: [
        "マイク録音で講義をそのまま記録",
        "文字起こしと要点整理が自動で残る",
        "時間割に沿って授業ごとに保存される",
        "過去講義を横断してAIに質問できる"
      ],
      afterTotal: "理解に集中",
      afterTotalDesc: "ノート作業を後ろに回せる",
    },
    Features: {
      eyebrow: "Benefits",
      title1: "Rekiで",
      title2: "授業の受け方が変わる",
      rows: [
        {
          num: "01",
          phase: "今すぐ",
          title: "書くより、聞く時間が増える。",
          body: "講義中はノートの体裁より、教授の話そのものに集中。録音、文字起こし、講義まとめまで自動化されるから、理解に必要な認知資源を残せます。"
        },
        {
          num: "02",
          phase: "数日後",
          title: "復習が、あとで効いてくる。",
          body: "授業ごとに保存された講義ノートをあとから見返し、要点をすぐ確認。聞き逃した箇所も、全文検索とAI質問で取り戻せます。"
        },
        {
          num: "03",
          phase: "試験前",
          title: "学期分の講義が、ひとつの記憶になる。",
          body: "半年前の定義も、先週の補足説明も、授業横断でまとめて参照。学期が進むほど、復習の速度と精度が変わります。"
        }
      ],
      notificationTitle: "授業を検出しました",
      notificationApp: "App",
      notificationCalendar: "時間割",
      notificationCalendarValue: "経済学入門",
      notificationBtn: "録音を開始",
      chatQuestion: "先週のミクロ経済学で教授が強調していたポイントは？",
      chatAnswerLabel: "ANSWER",
      chatAnswer: "次の3点が強調されていました。\n① 限界効用の低下\n② 需要曲線のシフト条件\n③ 中間試験では図示も問う",
      chatSource: "出典: ミクロ経済学 5/1 10:40",
      memoryLabel: "LECTURES",
      memoryItems: [
        { date: "今日", title: "経済学入門", excerpt: "限界費用と価格..." },
        { date: "3日前", title: "英語ディスカッション", excerpt: "発表テーマの修正" },
        { date: "先週", title: "ゼミ / 消費者行動", excerpt: "参考論文を追加" },
        { date: "2週前", title: "統計学", excerpt: "分散分析の補足" },
        { date: "半年前", title: "春学期ガイダンス", excerpt: "評価配分の説明" }
      ],
    },
    WorksWith: {
      eyebrow: "Works Where You Learn",
      title: "いつもの授業環境、そのままで。",
      desc: "教室のマイク録音も、PC上のオンライン授業も、Rekiが授業としてまとめて扱う。講義ノートの保存場所をひとつに寄せられます。",
      apps: [
        { name: "Zoom", slug: "zoom" },
        { name: "Google Meet", slug: "googlemeet" },
        { name: "Teams", icon: "users" },
        { name: "Discord", slug: "discord" },
        { name: "YouTube Live", slug: "youtube" },
        { name: "LMS配信", fallback: "LMS" },
        { name: "Macアプリ全般", slug: "apple" },
        { name: "対面講義", icon: "messages" },
        { name: "その他の授業環境", fallback: "…" }
      ],
    },
    Compare: {
      eyebrow: "Compare",
      title1: "ただの文字起こしと、",
      title2: "何が違うのか。",
      desc: "Rekiは、学生の復習導線までまとめて設計する。",
      colFeature: "比較軸",
      footnote: "※学生向け想定機能の比較",
      rows: [
        ["授業の保存単位", "時間割ごとに整理", "音声ファイル単位", "手書きノート単位"],
        ["対面講義の扱い", "マイク録音で対応", "録音の持ち込みが必要", "自分で書くしかない"],
        ["オンライン授業の扱い", "検知して録音", "都度操作が必要", "別ノートになる"],
        ["復習のしやすさ", "全文検索 + AI質問", "聞き返し中心", "ページを探す"],
        ["講義まとめ", "自動で要点整理", "原文中心", "自分で再整理"],
        ["試験前の横断確認", "複数授業を一括検索", "不可 / 限定的", "手作業で見返す"]
      ],
    },
    Privacy: {
      eyebrow: "Privacy by Design",
      title1: "学びの記録を、",
      title2: "自分の手元に。",
      facts: [
        "音声ファイルはあなたのMacに保存",
        "文字起こしは選んだAIプロバイダへ直接送信",
        "講義まとめも自分のAIキーで動作"
      ],
      providersLabel: "PROVIDERS",
      providersDesc: "契約済みAIをそのまま利用可能",
      providers: ["OpenAI", "Gemini", "Groq Cloud", "OpenRouter", "NVIDIA", "+ 今後追加"],
    },
    HowItWorks: {
      eyebrow: "How it Works",
      title1: "シンプルに、",
      title2: "講義ノートが残る。",
      input01Label: "Input 01",
      input01Title: "講義音声",
      transcript: [
        { time: "00:03", speaker: "教授", color: "#a78bfa", text: "今日は需要曲線がシフトする条件を3つに分けて確認します。" },
        { time: "00:18", speaker: "教授", color: "#a78bfa", text: "価格の変化と、需要そのものの変化は別で考えてください。" },
        { time: "00:34", speaker: "学生", color: "#7c9cf0", text: "中間試験では図を使った説明も必要ですか？" }
      ],
      input02Label: "Input 02",
      input02Title: "時間割情報",
      calendarMeeting: "ミクロ経済学",
      calendarDate: "日時",
      calendarDateValue: "2026/05/08 10:40",
      calendarParticipants: "形式",
      calendarParticipantsValue: "対面講義 / 120名",
      calendarTool: "ツール",
      calendarNote: "講義名・時間・形式を紐づけて、あとから探しやすく整理",
      outputLabel: "Output",
      outputTitle: "講義ナレッジベース",
      outputCards: [
        { title: "全文検索", body: "定義、用語、教授の補足を横断検索" },
        { title: "AI質問応答", body: "『前回の宿題条件は？』を自然言語で確認" },
        { title: "試験前の資産化", body: "学期をまたいで積み上がる、自分だけの講義アーカイブ" }
      ],
    },
    FinalCTA: {
      title: "講義ノートを、\n自分で取り続ける？",
      desc: "まずは授業を録音して、文字起こしと講義まとめを残すところから。気づいた頃には、ノートのために理解を止める時間が減っていきます。",
      macSub: "先行配信中",
      winSub: "リリース準備中",
      placeholder: "メールアドレスを入力",
      btnLoading: "送信中...",
      btnDefault: "先行ユーザー登録",
      successTitle: "ご登録ありがとうございます！",
      successDesc: "準備が整い次第、ご案内のメールをお送りします。",
      errorDuplicate: "このメールアドレスは既に登録されています。",
      errorGeneral: "エラーが発生しました。時間をおいて再度お試しください。",
      preview: {
        ariaLabel: "Reki note student home preview",
        recordTitle: "録音を開始",
        recordSubtitle: "次の講義を記録",
        importAudio: "録音を読み込む",
        todaySchedule: "今日の授業",
        schedule: [
          { time: "09:00", title: "英語ディスカッション", status: "まもなく" },
          { time: "10:40", title: "ミクロ経済学", status: "対面講義" },
          { time: "16:00", title: "マーケティング基礎", status: "Google Meet" }
        ],
        home: "ホーム",
        heading: "ホーム",
        subheading: "講義の記録を、全部ここに。",
        searchPlaceholder: "講義ノートを検索",
        filters: ["今日", "新しい順", "90分講義"],
        sessions: [
          {
            title: "ミクロ経済学 / 第5回",
            time: "今日 10:40〜12:10",
            app: "対面",
            attendees: "120",
            preview: "需要曲線のシフト要因を3分類。中間試験では図の説明が必要。参考文献は第3章。"
          },
          {
            title: "英語ディスカッション / Week 4",
            time: "5/6 09:00〜10:20",
            app: "Zoom",
            attendees: "18",
            preview: "プレゼンテーマを変更。次回までにイントロ部分を提出。発音修正ポイントを記録。"
          },
          {
            title: "ゼミ / 消費者行動",
            time: "5/2 14:00〜15:30",
            app: "対面",
            attendees: "12",
            preview: "先行研究の比較整理が必要。次回は仮説の根拠を数字で補強する。"
          }
        ],
        attendeesUnit: "名",
        aiLink: "講義に入る",
        aiQuestion: "先週のミクロ経済学で教授が強調していたポイントは？"
      },
    },
    Footer: {
      tagline: "Reki note ・ 講義の記録を、理解の味方に。",
      company: "運営会社",
    },
  },
  en: {
    Header: {
      benefits: "Benefits",
      features: "Features",
      integrations: "Class Setup",
      compare: "Compare",
      privacy: "Privacy",
      howItWorks: "How it works",
      waitlist: "Join the Waitlist",
    },
    Hero: {
      title1: "I stopped taking",
      title2: "lecture notes.",
      subtitle: "Record with your mic. Get transcripts and lecture summaries automatically.",
      desc: "In-person lectures and online classes are saved by schedule, so your attention stays on understanding instead of formatting notes.",
      waitlist: "Join the Waitlist",
      mac: "Mac",
      macSub: "Early Access",
      win: "Windows",
      winSub: "Coming soon",
    },
    Problem: {
      eyebrow: "The Problem",
      title1: "The more serious you are,",
      title2: "the more class time",
      title3: "you lose.",
      desc: "You want to understand the lecture, but your hands are busy formatting notes. While copying slides or the board, you miss explanations. Later, in-person and online class records are scattered when you need them most.",
      before: "Before",
      beforeTitle: "Manual note-taking flow",
      beforeItems: [
        { name: "Copy slides and the board", price: "Attention drops" },
        { name: "Patch missed points from memory", price: "Accuracy falls" },
        { name: "Keep notes across different apps", price: "Review slows down" },
        { name: "Dig through old notes before exams", price: "Time disappears" }
      ],
      total: "Outcome",
      beforeTotal: "Always fragmented",
      beforeTotalDesc: "Recording wins over understanding",
      after: "After",
      afterTitle: "Let Reki own the class notes",
      afterDesc: "One place for lectures, seminars, and online classes",
      afterItems: [
        "Capture lectures with your mic",
        "Keep transcripts and lecture summaries automatically",
        "Save everything by class schedule",
        "Ask AI questions across past lectures"
      ],
      afterTotal: "Focus on learning",
      afterTotalDesc: "Move note labor out of the lecture itself",
    },
    Features: {
      eyebrow: "Benefits",
      title1: "What changes",
      title2: "for students with Reki?",
      rows: [
        {
          num: "01",
          phase: "Right away",
          title: "More listening time. Less formatting time.",
          body: "During class, your attention stays on what the professor is actually saying. Recording, transcription, and lecture summaries are automated, so understanding gets your cognitive bandwidth back."
        },
        {
          num: "02",
          phase: "A few days later",
          title: "Review gets faster when class ends.",
          body: "Lecture notes are already organized by class. Search the transcript, jump to the summary, and recover anything you missed without replaying everything from scratch."
        },
        {
          num: "03",
          phase: "By exam season",
          title: "A semester turns into searchable memory.",
          body: "Definitions from months ago and last week's clarifications sit in one archive. The more classes you save, the more useful your study history becomes."
        }
      ],
      notificationTitle: "Lecture detected",
      notificationApp: "App",
      notificationCalendar: "Schedule",
      notificationCalendarValue: "Intro to Economics",
      notificationBtn: "Start Recording",
      chatQuestion: "What did the professor emphasize in microeconomics last week?",
      chatAnswerLabel: "ANSWER",
      chatAnswer: "These were the 3 main points:\n1. Diminishing marginal utility\n2. What shifts a demand curve\n3. The midterm will include graph explanations",
      chatSource: "Source: Microeconomics 5/1 10:40",
      memoryLabel: "LECTURES",
      memoryItems: [
        { date: "Today", title: "Intro to Economics", excerpt: "Marginal cost and..." },
        { date: "3d ago", title: "English Discussion", excerpt: "Presentation topic revised" },
        { date: "Last week", title: "Seminar / Consumer Behavior", excerpt: "Add supporting paper" },
        { date: "2w ago", title: "Statistics", excerpt: "ANOVA explanation" },
        { date: "6mo ago", title: "Spring Orientation", excerpt: "Assessment breakdown" }
      ],
    },
    WorksWith: {
      eyebrow: "Works Where You Learn",
      title: "Fits the class setup you already use.",
      desc: "Mic capture in classrooms, online lecture detection on your computer, and one place to keep every class note you want to revisit later.",
      apps: [
        { name: "Zoom", slug: "zoom" },
        { name: "Google Meet", slug: "googlemeet" },
        { name: "Teams", icon: "users" },
        { name: "Discord", slug: "discord" },
        { name: "YouTube Live", slug: "youtube" },
        { name: "LMS Streams", fallback: "LMS" },
        { name: "Any Mac App", slug: "apple" },
        { name: "In-person Lectures", icon: "messages" },
        { name: "Other Class Tools", fallback: "…" }
      ],
    },
    Compare: {
      eyebrow: "Compare",
      title1: "How is it different",
      title2: "from plain transcription?",
      desc: "Reki is designed around the student review loop, not just raw recordings.",
      colFeature: "Features",
      footnote: "* Conceptual comparison for student workflows",
      rows: [
        ["Saved by", "Class schedule", "Audio file", "Notebook page"],
        ["In-person lectures", "Supported via mic capture", "Manual import or setup", "Write everything yourself"],
        ["Online classes", "Detected and recorded", "Needs manual control", "Lives somewhere else"],
        ["Review flow", "Search + AI questions", "Replay audio", "Flip through pages"],
        ["Lecture summaries", "Auto-organized", "Mostly raw transcript", "Manual rewrite"],
        ["Exam prep across classes", "Search across the semester", "Limited / impossible", "Manual digging"]
      ],
    },
    Privacy: {
      eyebrow: "Privacy by Design",
      title1: "Keep your study record",
      title2: "close to you.",
      facts: [
        "Audio files stay on your Mac",
        "Transcriptions go directly to the AI provider you choose",
        "Lecture summaries run on your own AI key"
      ],
      providersLabel: "PROVIDERS",
      providersDesc: "Use the AI subscriptions you already have",
      providers: ["OpenAI", "Gemini", "Groq Cloud", "OpenRouter", "NVIDIA", "+ More coming soon"],
    },
    HowItWorks: {
      eyebrow: "How it Works",
      title1: "Simple,",
      title2: "but built for classes.",
      input01Label: "Input 01",
      input01Title: "Lecture Audio",
      transcript: [
        { time: "00:03", speaker: "Professor", color: "#a78bfa", text: "Today we are splitting demand-curve shifts into three different conditions." },
        { time: "00:18", speaker: "Professor", color: "#a78bfa", text: "Keep price changes separate from changes in demand itself." },
        { time: "00:34", speaker: "Student", color: "#7c9cf0", text: "Will the midterm require us to explain this with graphs as well?" }
      ],
      input02Label: "Input 02",
      input02Title: "Schedule Info",
      calendarMeeting: "Microeconomics",
      calendarDate: "Date",
      calendarDateValue: "2026/05/08 10:40",
      calendarParticipants: "Format",
      calendarParticipantsValue: "In-person / 120 students",
      calendarTool: "Tool",
      calendarNote: "Class name, time, and format are linked automatically, so later review stays organized.",
      outputLabel: "Output",
      outputTitle: "Lecture Knowledge Base",
      outputCards: [
        { title: "Full-text search", body: "Search definitions, terms, and professor clarifications across classes" },
        { title: "AI Q&A", body: "Ask things like 'what were the homework conditions last week?'" },
        { title: "Exam-season asset", body: "Your semester turns into a study archive instead of a pile of fragments" }
      ],
    },
    FinalCTA: {
      title: "Still planning to keep\nwriting every lecture yourself?",
      desc: "Start by recording class and keeping the transcript plus summary. After a while, you stop giving up understanding time just to maintain notes.",
      macSub: "Early Access",
      winSub: "Coming soon",
      placeholder: "Enter your email",
      btnLoading: "Sending...",
      btnDefault: "Join the Waitlist",
      successTitle: "Thanks for joining!",
      successDesc: "We will email you as soon as access is ready.",
      errorDuplicate: "This email is already registered.",
      errorGeneral: "Something went wrong. Please try again later.",
      preview: {
        ariaLabel: "Reki note student home preview",
        recordTitle: "Start Recording",
        recordSubtitle: "Capture the next lecture",
        importAudio: "Import recording",
        todaySchedule: "Today's classes",
        schedule: [
          { time: "09:00", title: "English Discussion", status: "Starting soon" },
          { time: "10:40", title: "Microeconomics", status: "In-person class" },
          { time: "16:00", title: "Marketing Basics", status: "Google Meet" }
        ],
        home: "Home",
        heading: "Home",
        subheading: "Every lecture record, in one place.",
        searchPlaceholder: "Search lecture notes",
        filters: ["Today", "Newest", "90 min class"],
        sessions: [
          {
            title: "Microeconomics / Week 5",
            time: "Today 10:40–12:10",
            app: "In-person",
            attendees: "120",
            preview: "Three demand-curve shift factors covered. Midterm includes graph explanations. Reading points to Chapter 3."
          },
          {
            title: "English Discussion / Week 4",
            time: "5/6 09:00–10:20",
            app: "Zoom",
            attendees: "18",
            preview: "Presentation topic updated. Submit intro section next time. Pronunciation corrections were recorded."
          },
          {
            title: "Seminar / Consumer Behavior",
            time: "5/2 14:00–15:30",
            app: "In-person",
            attendees: "12",
            preview: "Need a cleaner comparison of prior research. Next session will strengthen the numbers behind the hypothesis."
          }
        ],
        attendeesUnit: " students",
        aiLink: "Enter class",
        aiQuestion: "What did the professor emphasize in microeconomics last week?"
      },
    },
    Footer: {
      tagline: "Reki note ・ Turn lecture records into better understanding.",
      company: "Company",
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
  return {
    metadataBase: new URL("https://rekinote.app"),
    alternates: {
      canonical: `/${params.lang}/lp/student/`,
      languages: {
        ja: "/ja/lp/student/",
        en: "/en/lp/student/",
      },
    },
    title: isJa
      ? "Reki note for Students — 講義ノート取るの、やめた。"
      : "Reki note for Students — I stopped taking lecture notes.",
    description: isJa
      ? "講義ノートはRekiに任せよう。マイク録音で文字起こし、講義まとめ、時間割保存、オンライン授業の自動検知まで。"
      : "Let Reki handle lecture notes. Mic capture, transcripts, lecture summaries, schedule-based storage, and online class detection.",
  };
}

export default function StudentLpPage({
  params,
}: {
  params: { lang: Lang };
}) {
  const dict = studentDictionaries[params.lang];

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
