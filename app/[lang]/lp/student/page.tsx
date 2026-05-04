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
      subtitle: "毎回ちゃんと書かなくても、あとから追いつける。",
      desc: "Zoomでも、大学の独自配信でも、対面でも。デバイスの音とマイクをそのまま記録し、見返しやすい講義ノートにまとめる。",
      waitlist: "先行ユーザー登録",
      mac: "Mac",
      macSub: "先行配信中",
      win: "Win",
      winSub: "リリース準備中",
    },
    Problem: {
      eyebrow: "The Problem",
      title1: "毎回ちゃんとは",
      title2: "やりきれない。",
      title3: "でも後で困りたくない。",
      desc: "授業ごとに丁寧にノートを取るのは大変。何も残っていないと、試験前やレポート前に一気につらくなる。しかも配信も対面も記録の残り方がバラバラで、あとで追いつくほど負担が増える。",
      before: "Before",
      beforeTitle: "授業ごとに残り方が違う",
      beforeItems: [
        { name: "授業中ずっとメモを取る", price: "負担が大きい" },
        { name: "配信ごとに録音方法が変わる", price: "地味に面倒" },
        { name: "聞き逃した回を後回しにする", price: "あとで重くなる" },
        { name: "試験前に過去回を探し直す", price: "時間がかかる" }
      ],
      total: "結果",
      beforeTotal: "あとで追いつくほどしんどい",
      beforeTotalDesc: "後半になるほど取り返しづらい",
      after: "After",
      afterTitle: "Rekiに授業記録を集約",
      afterDesc: "配信も対面も、あとで追いつきやすい形にまとまる",
      afterItems: [
        "OSレベルで音を取るから、大学の配信環境に縛られない",
        "Bot招待なしで、そのまま記録を残せる",
        "講義ごとに自動で文字起こしと要点整理が残る",
        "試験前に過去回をまとめて検索できる"
      ],
      afterTotal: "無理せず、崩れにくい",
      afterTotalDesc: "毎回完璧でなくても、必要な時に戻りやすい",
    },
    Features: {
      eyebrow: "Benefits",
      title1: "Rekiで",
      title2: "授業との付き合い方が軽くなる",
      rows: [
        {
          num: "01",
          phase: "今すぐ",
          title: "講義開始時に通知、録音ポップアップ",
          body: "時間割に合わせて通知。あとは録音を始めるだけで、講義の記録が残る。"
        },
        {
          num: "02",
          phase: "数日後",
          title: "大学の配信環境に振り回されにくい。",
          body: "Zoomでも、大学独自の配信ページでも、生放送でも、対面でも。OSレベルで音を取るから、授業ごとにやり方を変えなくていい。"
        },
        {
          num: "03",
          phase: "試験前",
          title: "後からでも、追いつきやすい。",
          body: "聞き逃した回や欠席気味の授業も、あとから検索して要点を拾える。日々の記録が、そのまま試験前の見返しやすさになる。"
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
      title: "大学ごとの授業環境、そのままで。",
      desc: "Zoom、Google Meet、大学の独自配信、生放送、対面講義まで。Bot招待や権限設定なしで、そのまま残せる。",
      apps: [
        { name: "Zoom", slug: "zoom" },
        { name: "Google Meet", slug: "googlemeet" },
        { name: "Teams", icon: "users" },
        { name: "Discord", slug: "discord" },
        { name: "YouTube Live", slug: "youtube" },
        { name: "Google Classroom", fallback: "GC" },
        { name: "デバイス上の他アプリ", slug: "apple" },
        { name: "対面講義", icon: "messages" },
        { name: "その他の授業環境", fallback: "…" }
      ],
    },
    Compare: {
      eyebrow: "Compare",
      title1: "学生にとって大事なのは、",
      title2: "無理なく続けられること。",
      desc: "大学ごとの授業環境に左右されず、あとで見返せる記録を残せる。",
      colFeature: "比較軸",
      footnote: "※想定機能の比較",
      rows: [
        ["大学ごとの配信環境", "OSレベル録音でそのまま対応", "対応可否が環境依存", "自分で書くしかない"],
        ["Bot招待 / 権限", "不要", "必要なことが多い", "不要"],
        ["対面講義の扱い", "マイク録音でそのまま残せる", "録音の持ち込みが必要", "手書きノート頼み"],
        ["あとで見返しやすいか", "全文検索 + AI質問", "聞き返し中心", "ページを探す"],
        ["講義ごとの整理", "時間割ごとにまとまる", "ファイルが散りやすい", "ノートが散りやすい"],
        ["試験前の確認", "複数授業をまとめて確認", "不可 / 限定的", "手作業で見返す"]
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
      title1: "ただ録音するだけ。",
      title2: "カレンダーで講義に紐付け",
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
      title: "ノートを“録る”時代へ。",
      desc: "毎回完璧にノートを取らなくても、あとで見返せる記録を残しておく。大学ごとに違う授業環境でも使いやすいRekiを、先行ユーザーとして試してください。",
      macSub: "先行配信中",
      winSub: "リリース準備中",
      placeholder: "メールアドレスを入力",
      btnLoading: "送信中...",
      btnDefault: "先行ユーザー登録する",
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
      switchHeading: "ユースケース",
      businessLabel: "ビジネス向け",
      businessDesc: "会議、商談、1on1、対面MTGの記録を1つに。",
      studentLabel: "学生向け",
      studentDesc: "講義、文字起こし、試験前の見返しをラクに。",
      currentLabel: "表示中",
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
      title1: "Take fewer notes.",
      title2: "Make later easier.",
      subtitle: "You do not have to capture everything live to stay recoverable later.",
      desc: "Zoom, campus streaming tools, custom university platforms, or in-person lectures. Reki captures device audio and mic input, then turns it into class notes that are easier to revisit before exams.",
      waitlist: "Join the Waitlist",
      mac: "Mac",
      macSub: "Early Access",
      win: "Windows",
      winSub: "Coming soon",
    },
    Problem: {
      eyebrow: "The Problem",
      title1: "You cannot do every class",
      title2: "the careful way.",
      title3: " You just do not want later to hurt.",
      titleDivider: " ",
      desc: "Keeping polished notes for every lecture takes energy. But when nothing is left behind, exam week and paper deadlines get much harder. Records scatter across Zoom, campus tools, livestream pages, and paper notes.",
      before: "Before",
      beforeTitle: "Every class leaves a different kind of mess",
      beforeItems: [
        { name: "Write notes the whole time", price: "Draining" },
        { name: "Change setup for every class tool", price: "Friction" },
        { name: "Delay catching up on missed lectures", price: "Backlog grows" },
        { name: "Search old lectures before exams", price: "Time disappears" }
      ],
      total: "Result",
      beforeTotal: "Harder to catch up",
      beforeTotalDesc: "What you skip now is harder later",
      after: "After",
      afterTitle: "Put your class record in one place",
      afterDesc: "Streaming, online classes, and in-person lectures in one flow",
      afterItems: [
        "Capture audio at the OS level across class environments",
        "No bot invite or platform permission needed",
        "Keep transcripts and summaries automatically",
        "Search across past lectures before exams"
      ],
      afterTotal: "Easier to catch up",
      afterTotalDesc: "You do not need perfect notes to recover",
    },
    Features: {
      eyebrow: "Benefits",
      title1: "With Reki, class can feel ",
      title2: "lighter to manage",
      rows: [
        {
          num: "01",
          phase: "Right away",
          title: "You do not have to build perfect notes every time.",
          body: "Audio, transcript, and class summaries are already there. That makes each lecture easier to leave in a usable state, even when you are not fully on top of it."
        },
        {
          num: "02",
          phase: "A few days later",
          title: "You do not have to adapt to every campus tool.",
          body: "Zoom, custom streaming portals, random live pages, or in-person lectures. Reki captures system audio and mic input at the OS level, so your workflow can stay consistent."
        },
        {
          num: "03",
          phase: "By exam season",
          title: "Recovery still feels possible later.",
          body: "Skipped classes and half-listened lectures are still searchable later. The record you leave behind becomes a calmer way back in before exams."
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
      title: "Works with the campus setup you already have.",
      desc: "Zoom, Google Meet, custom university platforms, livestreams, and in-person lectures. No bot invite. No special permission flow. Just capture the class audio as it is.",
      apps: [
        { name: "Zoom", slug: "zoom" },
        { name: "Google Meet", slug: "googlemeet" },
        { name: "Teams", icon: "users" },
        { name: "Discord", slug: "discord" },
        { name: "YouTube Live", slug: "youtube" },
        { name: "LMS Streams", fallback: "LMS" },
        { name: "Other apps on your device", slug: "apple" },
        { name: "In-person Lectures", icon: "messages" },
        { name: "Other Class Tools", fallback: "…" }
      ],
    },
    Compare: {
      eyebrow: "Compare",
      title1: "For students, what matters is ",
      title2: "keeping class records usable without extra effort.",
      desc: "Reki is built for campus environments where students usually do not control the platform, permissions, or recording setup.",
      colFeature: "Features",
      footnote: "* Conceptual comparison for student workflows",
      rows: [
        ["Campus platforms", "Works through OS-level capture", "Support depends on the platform", "Manual only"],
        ["Bot invite / permissions", "Not needed", "Often needed", "Not needed"],
        ["In-person lectures", "Captured with mic input", "Needs separate recording setup", "Write it yourself"],
        ["Catch-up flow", "Search + AI questions", "Mostly replay-based", "Manual page search"],
        ["Class organization", "Grouped by class schedule", "Files can scatter", "Notes can scatter"],
        ["Exam recovery", "Review across multiple classes", "Limited or unavailable", "Manual review"]
      ],
    },
    Privacy: {
      eyebrow: "Privacy by Design",
      title1: "Keep your study record",
      title2: " close to you.",
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
      title1: "Simple, ",
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
      title: "Put less pressure on each lecture.\nKeep a clearer way back later.",
      desc: "Leave yourself a searchable class record without changing your campus workflow. Try Reki early and build a lighter backup before exam week hits.",
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
      switchHeading: "Use Cases",
      businessLabel: "Business",
      businessDesc: "Meetings, customer calls, 1:1s, and team memory.",
      studentLabel: "Student",
      studentDesc: "Lectures, transcripts, and easier exam-season catch-up.",
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
        <Hero dict={dict.Hero} lang={params.lang} audience="student" />
        <Problem dict={dict.Problem} />
        <Features dict={dict.Features} />
        <WorksWith dict={dict.WorksWith} />
        <Compare dict={dict.Compare} />
        <HowItWorks dict={dict.HowItWorks} />
        <FinalCTA dict={dict.FinalCTA} />
      </main>
      <Footer dict={dict.Footer} lang={params.lang} audience="student" />
    </>
  );
}
