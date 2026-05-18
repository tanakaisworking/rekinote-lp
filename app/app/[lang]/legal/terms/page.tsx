import Link from "next/link";
import Image from "next/image";
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
    title: isJa ? "利用規約 — Reki note" : "Terms of Service — Reki note",
    robots: { index: true, follow: true },
  };
}

type Section = {
  heading: string;
  paragraphs: string[];
};

const sectionsJa: Section[] = [
  {
    heading: "1. はじめに",
    paragraphs: [
      "本利用規約（以下「本規約」）は、ヒバチ株式会社（以下「当社」）が提供するアプリケーション「Reki note」（以下「本サービス」）の利用条件を定めるものです。本サービスをご利用いただくことで、お客様は本規約に同意したものとみなされます。",
    ],
  },
  {
    heading: "2. サービスの内容",
    paragraphs: [
      "本サービスは、会議等の音声を録音し、AIを用いて文字起こしおよび議事録を自動生成するデスクトップアプリケーションです。macOSおよびWindows上で動作します。",
      "当社は、本サービスの機能改善・追加・廃止を予告なく行う場合があります。",
    ],
  },
  {
    heading: "3. アカウント",
    paragraphs: [
      "本サービスの一部機能を利用するには、メールアドレスによるアカウント登録が必要です。",
      "お客様は、自己の責任においてアカウント情報を管理するものとし、第三者への貸与・共有を行ってはなりません。",
      "アカウントの不正利用が発覚した場合、当社は事前通知なくアカウントを停止または削除できるものとします。",
    ],
  },
  {
    heading: "4. 録音に関するお客様の責任",
    paragraphs: [
      "お客様は、本サービスによる録音を自己の責任において行うものとします。",
      "録音を行う際は、会議の参加者全員に対して録音を行う旨を事前に通知し、同意を得たうえで使用してください。",
      "参加者の同意なく行われた録音に起因するトラブル・法的問題について、当社は一切の責任を負いません。",
      "お客様の所在する国・地域の法令により、録音に関して追加の要件が課される場合があります。適用される法令を遵守することはお客様の責任です。",
    ],
  },
  {
    heading: "5. データの学習利用の禁止",
    paragraphs: [
      "当社は、お客様の音声データ・文字起こしデータ・議事録データを、AIモデルの訓練・改善・開発の目的で利用しません。お客様のデータは、本サービスの機能提供のためにのみ処理されます。",
    ],
  },
  {
    heading: "6. 知的財産権",
    paragraphs: [
      "本サービスのソフトウェア、UI、デザイン、ロゴ等に関する知的財産権は当社に帰属します。",
      "本サービスが生成した文字起こしおよび議事録（以下「生成コンテンツ」）に関する権利は、著作権の帰属にかかわらず、当社に帰属するものとします。当社は、お客様に対し、生成コンテンツを個人的または社内業務の目的で複製・編集・共有する非独占的かつ無期限のライセンスを付与します。",
      "お客様が本サービスに入力した音声データの権利は、お客様に帰属します。",
    ],
  },
  {
    heading: "7. 料金と支払い",
    paragraphs: [
      "本サービスには無料プランおよび有料プランがあります。有料プランの料金・支払い条件は、アプリ内の設定画面および販売ページに表示される内容に従います。",
      "有料プランはサブスクリプション方式であり、解約手続きを行わない限り自動更新されます。",
      "詳細は特定商取引法に基づく表記をご確認ください。",
    ],
  },
  {
    heading: "8. 禁止事項",
    paragraphs: [
      "お客様は、本サービスの利用にあたり、以下の行為を行ってはなりません。",
      "・法令または公序良俗に違反する行為",
      "・他者のプライバシーを侵害する録音・利用",
      "・本サービスのリバースエンジニアリング、逆コンパイル、逆アセンブル",
      "・本サービスのセキュリティ機能の回避または妨害",
      "・当社のサーバーやネットワークに過度の負荷をかける行為",
      "・本サービスの再販売・再ライセンス",
      "・その他、当社が不適切と合理的に判断する行為",
    ],
  },
  {
    heading: "9. サービスの停止・終了",
    paragraphs: [
      "当社は、以下の場合に本サービスの全部または一部を一時停止または終了できるものとします。",
      "・システムの保守・更新を行う場合",
      "・天災・事故等の不可抗力により提供が困難な場合",
      "・その他、当社が必要と判断した場合",
      "本サービスを終了する場合、当社は合理的な期間をもって事前に通知するよう努めます。",
    ],
  },
  {
    heading: "10. 免責事項",
    paragraphs: [
      "本サービスは現状有姿（AS-IS）で提供されます。当社は、以下について保証しません。",
      "・文字起こしおよび議事録の正確性・完全性",
      "・本サービスが中断なく、エラーなく動作すること",
      "・本サービスがお客様の特定の目的に適合すること",
      "本サービスの利用または利用不能により生じた損害について、当社の故意または重大な過失がある場合を除き、当社は責任を負いません。当社が責任を負う場合であっても、お客様が過去12ヶ月間に当社に支払った金額を上限とします。",
    ],
  },
  {
    heading: "11. 事業譲渡",
    paragraphs: [
      "当社が本サービスに関する事業を第三者に譲渡する場合、当社はお客様のデータの取り扱いについて譲渡先と協議のうえ決定します。事業譲渡に伴いデータの取り扱いに重要な変更が生じる場合は、事前にお客様に通知します。",
    ],
  },
  {
    heading: "12. 規約の変更",
    paragraphs: [
      "当社は、本規約を変更する場合があります。重要な変更を行う場合は、本アプリ内またはウェブサイト上で事前に通知します。変更後も本サービスの利用を継続された場合、変更後の規約に同意したものとみなされます。",
    ],
  },
  {
    heading: "13. 準拠法と管轄裁判所",
    paragraphs: [
      "日本国に居住するお客様については、本規約は日本法に準拠し、東京地方裁判所を第一審の専属的合意管轄裁判所とします。",
      "日本国外に居住するお客様については、本規約は米国カリフォルニア州法に準拠し、カリフォルニア州サンタクララ郡の裁判所を専属的合意管轄裁判所とします。",
    ],
  },
  {
    heading: "14. お問い合わせ",
    paragraphs: [
      "本規約に関するお問い合わせは、以下までご連絡ください。",
      "ヒバチ株式会社",
      "メール：contact@hibachi-inc.jp",
    ],
  },
];

const sectionsEn: Section[] = [
  {
    heading: "1. Introduction",
    paragraphs: [
      "These Terms of Service (\"Terms\") govern your use of the application \"Reki note\" (the \"Service\") provided by HIBACHI inc. (\"we\", \"us\", or \"our\"). By using the Service, you agree to be bound by these Terms.",
    ],
  },
  {
    heading: "2. Description of the Service",
    paragraphs: [
      "The Service is a desktop application that records meeting audio and uses AI to automatically generate transcriptions and meeting notes. It runs on macOS and Windows.",
      "We may add, modify, or discontinue features of the Service without prior notice.",
    ],
  },
  {
    heading: "3. Accounts",
    paragraphs: [
      "Certain features of the Service require account registration using an email address.",
      "You are responsible for maintaining the security of your account information and may not lend or share your account with third parties.",
      "If unauthorized use of an account is detected, we may suspend or delete the account without prior notice.",
    ],
  },
  {
    heading: "4. Your Responsibility Regarding Recordings",
    paragraphs: [
      "You are solely responsible for any recordings made using the Service.",
      "Before recording, you must inform all meeting participants that a recording is being made and obtain their consent.",
      "We accept no liability for any disputes or legal issues arising from recordings made without the consent of participants.",
      "Additional legal requirements regarding recording may apply depending on your country or region. It is your responsibility to comply with all applicable laws.",
    ],
  },
  {
    heading: "5. No Use of Data for AI Training",
    paragraphs: [
      "We do not use your audio data, transcription data, or meeting notes for the purpose of training, improving, or developing AI models. Your data is processed solely to provide the Service's features.",
    ],
  },
  {
    heading: "6. Intellectual Property",
    paragraphs: [
      "All intellectual property rights in the Service's software, UI, design, and logos belong to us.",
      "Rights in transcriptions and meeting notes generated by the Service (\"Generated Content\") belong to us regardless of copyright attribution. We grant you a non-exclusive, perpetual license to reproduce, edit, and share Generated Content for personal or internal business purposes.",
      "Rights in audio data that you input into the Service remain yours.",
    ],
  },
  {
    heading: "7. Fees and Payment",
    paragraphs: [
      "The Service offers both free and paid plans. Pricing and payment terms for paid plans are as displayed in the App's settings and on the sales page.",
      "Paid plans are subscription-based and automatically renew unless you cancel.",
    ],
  },
  {
    heading: "8. Prohibited Activities",
    paragraphs: [
      "You may not engage in the following activities when using the Service:",
      "- Violating any applicable law or public order",
      "- Recording or using recordings in a manner that infringes on the privacy of others",
      "- Reverse engineering, decompiling, or disassembling the Service",
      "- Circumventing or interfering with the Service's security features",
      "- Placing excessive load on our servers or network",
      "- Reselling or sublicensing the Service",
      "- Any other activity we reasonably determine to be inappropriate",
    ],
  },
  {
    heading: "9. Service Suspension and Termination",
    paragraphs: [
      "We may suspend or terminate all or part of the Service in the following cases:",
      "- System maintenance or updates",
      "- Force majeure events such as natural disasters or accidents",
      "- Other cases where we deem it necessary",
      "If we terminate the Service, we will endeavor to provide reasonable advance notice.",
    ],
  },
  {
    heading: "10. Disclaimer of Warranties",
    paragraphs: [
      "The Service is provided on an \"AS-IS\" basis. We do not warrant:",
      "- The accuracy or completeness of transcriptions and meeting notes",
      "- That the Service will operate without interruption or error",
      "- That the Service will be fit for your particular purpose",
      "We are not liable for any damages arising from the use or inability to use the Service, except in cases of our willful misconduct or gross negligence. Even where we are liable, our total liability shall not exceed the amount you paid to us in the preceding 12 months.",
    ],
  },
  {
    heading: "11. Business Transfer",
    paragraphs: [
      "If we transfer the business related to the Service to a third party, we will consult with the transferee regarding the handling of your data. If significant changes to data handling arise from a business transfer, we will notify you in advance.",
    ],
  },
  {
    heading: "12. Changes to These Terms",
    paragraphs: [
      "We may modify these Terms from time to time. If we make significant changes, we will notify you through the App or on our website. Your continued use of the Service after changes are made constitutes acceptance of the revised Terms.",
    ],
  },
  {
    heading: "13. Governing Law and Jurisdiction",
    paragraphs: [
      "For users residing in Japan, these Terms are governed by the laws of Japan, and the Tokyo District Court shall have exclusive jurisdiction as the court of first instance.",
      "For users residing outside Japan, these Terms are governed by the laws of the State of California, USA, and the courts in Santa Clara County, California shall have exclusive jurisdiction.",
    ],
  },
  {
    heading: "14. Contact Us",
    paragraphs: [
      "For inquiries about these Terms, please contact:",
      "HIBACHI inc.",
      "Email: contact@hibachi-inc.jp",
    ],
  },
];

const content = {
  ja: { title: "利用規約", lastUpdated: "最終更新日：2026年5月11日", sections: sectionsJa },
  en: { title: "Terms of Service", lastUpdated: "Last updated: May 11, 2026", sections: sectionsEn },
};

export default function TermsPage({
  params,
}: {
  params: { lang: "ja" | "en" };
}) {
  const lang = params.lang === "en" ? "en" : "ja";
  const { title, lastUpdated, sections } = content[lang];
  const lpHref = lang === "ja" ? "/ja/lp/business/" : "/en/lp/business/";

  return (
    <div className="min-h-screen bg-[#0c0c10] text-[#ececef]">
      <header className="border-b border-line">
        <div className="container-x px-6 py-5 flex items-center gap-2.5">
          <Link href={lpHref} className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <Image src="/logo.png" alt="" width={24} height={24} className="rounded-md" />
            <span className="font-semibold tracking-tight">Reki note</span>
          </Link>
        </div>
      </header>

      <main className="container-x px-6 py-14 max-w-2xl">
        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
        <p className="mt-3 text-sm text-[#a0a0ad]">{lastUpdated}</p>

        <div className="mt-10 space-y-10">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-base font-semibold tracking-tight">{section.heading}</h2>
              <div className="mt-3 space-y-2 text-sm leading-relaxed text-[#d0d0d8]">
                {section.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <footer className="border-t border-line">
        <div className="container-x px-6 py-6 dim text-xs">
          <span>© 2026 HIBACHI inc.</span>
        </div>
      </footer>
    </div>
  );
}
