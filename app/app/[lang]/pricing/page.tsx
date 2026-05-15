import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export function generateStaticParams() {
  return [{ lang: "ja" }, { lang: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    title:
      lang === "en"
        ? "Pricing — Reki note"
        : "料金プラン — Reki note",
    robots: { index: true, follow: true },
  };
}

type Plan = {
  name: string;
  price: string;
  period: string;
  desc: string;
  features: string[];
  cta: string;
  highlight?: boolean;
};

const ja = {
  eyebrow: "PRICING",
  title: "シンプルな料金体系",
  subtitle: "まずは無料で始めて、必要に応じてアップグレード。",
  plans: [
    {
      name: "Free",
      price: "¥0",
      period: "",
      desc: "登録するだけで、すぐに使い始められます。",
      features: [
        "登録時に20時間分の文字起こし付与",
        "毎月3時間分が自動で復活",
        "AIチャット（無料枠内）",
        "全ての会議ツールに対応",
        "ローカル保存・プライバシー重視",
        "Markdown / Obsidian エクスポート",
      ],
      cta: "無料で始める",
    },
    {
      name: "Pro",
      price: "¥1,480",
      period: "/月",
      desc: "毎日会議があるビジネスユーザー向け。",
      features: [
        "文字起こし 30時間/月",
        "AIチャット 50時間/月",
        "全ての会議ツールに対応",
        "ローカル保存・プライバシー重視",
        "Markdown / Obsidian エクスポート",
        "優先サポート",
      ],
      cta: "Pro にアップグレード",
      highlight: true,
    },
  ] as Plan[],
  faq: [
    {
      q: "無料プランの時間を使い切ったらどうなりますか？",
      a: "文字起こしが一時停止されます。翌月に3時間分が自動で復活するので、そのまま待つか、Proにアップグレードできます。",
    },
    {
      q: "支払い方法は何がありますか？",
      a: "クレジットカード（Visa / Mastercard / JCB / American Express）に対応しています。",
    },
    {
      q: "いつでも解約できますか？",
      a: "はい。アプリ内の設定からいつでも解約できます。解約後も契約期間の終了日までご利用いただけます。",
    },
    {
      q: "年額プランはありますか？",
      a: "現在は月額プランのみです。年額プランは今後追加予定です。",
    },
  ],
};

const en = {
  eyebrow: "PRICING",
  title: "Simple pricing",
  subtitle: "Start free. Upgrade when you need more.",
  plans: [
    {
      name: "Free",
      price: "$0",
      period: "",
      desc: "Sign up and start using it right away.",
      features: [
        "20 hours of transcription on signup",
        "3 hours restored every month",
        "AI chat (within free quota)",
        "Works with all meeting tools",
        "Local storage, privacy-first",
        "Markdown / Obsidian export",
      ],
      cta: "Get started free",
    },
    {
      name: "Pro",
      price: "$9.99",
      period: "/mo",
      desc: "For professionals with daily meetings.",
      features: [
        "30 hours transcription / month",
        "50 hours AI chat / month",
        "Works with all meeting tools",
        "Local storage, privacy-first",
        "Markdown / Obsidian export",
        "Priority support",
      ],
      cta: "Upgrade to Pro",
      highlight: true,
    },
  ] as Plan[],
  faq: [
    {
      q: "What happens when I run out of free hours?",
      a: "Transcription pauses until next month, when 3 hours are automatically restored. Or you can upgrade to Pro anytime.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept Visa, Mastercard, JCB, and American Express.",
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes. Cancel from the app settings at any time. You'll keep access until the end of your billing period.",
    },
    {
      q: "Is there an annual plan?",
      a: "Not yet — monthly only for now. An annual plan is coming soon.",
    },
  ],
};

function CheckIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 shrink-0 text-emerald-400 mt-0.5">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
    </svg>
  );
}

export default async function PricingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isJa = lang === "ja";
  const t = isJa ? ja : en;

  return (
    <div className="min-h-screen bg-[#0c0c10] text-[#ececef]">
      <header className="border-b border-line">
        <div className="container-x px-6 py-5 flex items-center gap-2.5">
          <Link
            href={`/${lang}/lp/business/`}
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
          >
            <Image src="/logo.png" alt="" width={24} height={24} className="rounded-md" />
            <span className="font-semibold tracking-tight">Reki note</span>
          </Link>
        </div>
      </header>

      <main className="container-x px-6 py-20 max-w-4xl">
        <div className="text-center">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {t.title}
          </h1>
          <p className="mt-4 text-base text-[#b6b6c2]">{t.subtitle}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {t.plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 ${
                plan.highlight
                  ? "bg-gradient-to-b from-[#2a1f5e]/60 to-[#1a1a22] border-2 border-[#7c3aed]/40 shadow-[0_0_40px_-12px_rgba(139,92,246,0.3)]"
                  : "bg-[#16161e] border border-line"
              }`}
            >
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-semibold">{plan.name}</h2>
                {plan.highlight && (
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-[#7c3aed]/20 text-[#a78bfa] border border-[#7c3aed]/30">
                    Popular
                  </span>
                )}
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tight">{plan.price}</span>
                {plan.period && (
                  <span className="text-base text-[#8e8e98]">{plan.period}</span>
                )}
              </div>
              <p className="mt-3 text-sm text-[#b6b6c2]">{plan.desc}</p>

              <ul className="mt-8 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <CheckIcon />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={plan.highlight ? `/${lang}/lp/business/#final` : `/${lang}/lp/business/`}
                className={`mt-8 block text-center rounded-lg py-3 text-sm font-medium transition-colors ${
                  plan.highlight
                    ? "btn-primary"
                    : "bg-white/5 hover:bg-white/10 border border-line"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        <section className="mt-24 max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold tracking-tight text-center">
            {isJa ? "よくある質問" : "FAQ"}
          </h2>
          <dl className="mt-10 divide-y divide-line">
            {t.faq.map((item) => (
              <div key={item.q} className="py-5">
                <dt className="text-sm font-medium">{item.q}</dt>
                <dd className="mt-2 text-sm text-[#b6b6c2] leading-relaxed">
                  {item.a}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </main>

      <footer className="border-t border-line">
        <div className="container-x px-6 py-6 dim text-xs flex flex-wrap gap-x-6 gap-y-2 items-center justify-between">
          <span>© 2026 HIBACHI inc.</span>
          <Link
            href={`/${lang}/legal/tokushoho/`}
            className="hover:text-[#ececef] transition-colors"
          >
            {isJa ? "特定商取引法に基づく表記" : "Legal"}
          </Link>
        </div>
      </footer>
    </div>
  );
}
