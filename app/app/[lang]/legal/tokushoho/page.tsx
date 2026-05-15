import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export function generateStaticParams() {
  return [{ lang: "ja" }];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "特定商取引法に基づく表記 — Reki note",
    robots: { index: true, follow: true },
  };
}

type Row = { term: string; desc: string | string[] };

const rows: Row[] = [
  { term: "販売事業者", desc: "ヒバチ株式会社（HIBACHI inc.）" },
  { term: "代表者", desc: "田中貴士（たなか たかし）" },
  { term: "所在地", desc: "〒150-0041 東京都渋谷区神南1-11-4 FPGリンクス神南 5F" },
  {
    term: "電話番号",
    desc: "請求があった場合には遅滞なく開示いたします。お問い合わせは下記メールアドレスまでご連絡ください。",
  },
  { term: "メールアドレス", desc: "contact@hibachi-inc.jp" },
  { term: "販売URL", desc: "https://rekinote.app" },
  {
    term: "販売価格",
    desc: "各料金プランの価格（税込）は、アプリ内の設定画面および販売ページに表示しています。",
  },
  {
    term: "商品代金以外の必要料金",
    desc: "インターネット接続料金、通信料金等はお客様のご負担となります。",
  },
  { term: "支払方法", desc: "クレジットカード（Visa / Mastercard / JCB / American Express）" },
  {
    term: "支払時期",
    desc: "月額プラン：利用開始時に初回決済、以降毎月同日に自動決済\n年額プラン：利用開始時に初回決済、以降毎年同日に自動決済",
  },
  {
    term: "役務の提供時期",
    desc: "決済完了後、直ちにオンラインにてサービスをご利用いただけます。",
  },
  {
    term: "契約期間・自動更新について",
    desc: [
      "本サービスは自動更新型のサブスクリプションサービスです。",
      "月額プラン：契約期間1ヶ月、期間満了時に自動更新",
      "年額プラン：契約期間1年、期間満了時に自動更新",
      "解約手続きを行わない限り、同一条件で自動的に契約が更新されます。",
    ],
  },
  {
    term: "解約方法",
    desc: [
      "アプリ内の設定画面からいつでも解約手続きが可能です。",
      "解約手続き完了後、次回更新日以降の課金は発生しません。",
      "解約手続き後も、現在の契約期間の満了日まではサービスをご利用いただけます。",
    ],
  },
  {
    term: "返品・解約に関する特約",
    desc: [
      "当サービスはオンラインで即時提供されるデジタルサービスのため、サービス提供開始後の返金はお受けしておりません。",
      "契約期間途中での解約の場合も、既にお支払い済みの料金の日割り返金・月割り返金は行いません。",
      "ただし、当社の責に帰すべき事由によりサービスが正常に提供されない場合は、個別にご相談を承ります。",
      "サービス開始前（決済完了前）のお申し込みのキャンセルは可能です。",
    ],
  },
  {
    term: "不良品の取扱条件",
    desc: "本サービスは現状有姿（as-is）にて提供いたします。サービスの動作に重大な不具合がある場合は、上記メールアドレスまでご連絡ください。",
  },
  {
    term: "動作環境",
    desc: [
      "macOS 13（Ventura）以降 / Windows 10 以降",
      "インターネット接続が必要です。",
    ],
  },
];

export default function TokushohoPage() {
  return (
    <div className="min-h-screen bg-[#0c0c10] text-[#ececef]">
      <header className="border-b border-line">
        <div className="container-x px-6 py-5 flex items-center gap-2.5">
          <Link href="/ja/lp/business/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
            <Image src="/logo.png" alt="" width={24} height={24} className="rounded-md" />
            <span className="font-semibold tracking-tight">Reki note</span>
          </Link>
        </div>
      </header>

      <main className="container-x px-6 py-14 max-w-2xl">
        <h1 className="text-2xl font-bold tracking-tight">特定商取引法に基づく表記</h1>

        <dl className="mt-10 divide-y divide-line">
          {rows.map((row) => (
            <div key={row.term} className="py-4 sm:grid sm:grid-cols-[180px_1fr] sm:gap-4">
              <dt className="text-sm font-medium text-[#a0a0ad]">{row.term}</dt>
              <dd className="mt-1 sm:mt-0 text-sm leading-relaxed">
                {Array.isArray(row.desc) ? (
                  <ul className="list-none space-y-1.5">
                    {row.desc.map((line, i) => (
                      <li key={i}>{line}</li>
                    ))}
                  </ul>
                ) : (
                  row.desc.split("\n").map((line, i) => (
                    <span key={i}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))
                )}
              </dd>
            </div>
          ))}
        </dl>
      </main>

      <footer className="border-t border-line">
        <div className="container-x px-6 py-6 dim text-xs">
          <span>© 2026 HIBACHI inc.</span>
        </div>
      </footer>
    </div>
  );
}
