import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export function generateStaticParams() {
  return [{ lang: "ja" }];
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "プライバシーポリシー — Reki note",
    robots: { index: true, follow: true },
  };
}

type Section = {
  heading: string;
  paragraphs: string[];
};

const sections: Section[] = [
  {
    heading: "1. はじめに",
    paragraphs: [
      "ヒバチ株式会社（以下「当社」）は、Reki note（以下「本アプリ」）をご利用いただくお客様の個人情報およびプライバシーの保護に努めています。本プライバシーポリシーでは、本アプリが取得・利用・保管するデータについて説明します。",
      "本サービスは13歳以上の方を対象としています。13歳未満の方は本サービスをご利用いただけません。",
    ],
  },
  {
    heading: "2. 事業者情報",
    paragraphs: [
      "事業者名：ヒバチ株式会社（HIBACHI inc.）",
      "代表者：田中貴士",
      "所在地：〒150-0041 東京都渋谷区神南1-11-4 FPGリンクス神南 5F",
      "お問い合わせ：contact@hibachi-inc.jp",
    ],
  },
  {
    heading: "3. 取得するデータ",
    paragraphs: [
      "本アプリは、以下のデータを取得します。",
      "■ アカウント情報：ログインに使用するメールアドレス。",
      "■ 音声データ：会議録音時にデバイス上で一時的に生成される音声ファイル。文字起こし処理のため、当社サーバーを経由してAIサービスプロバイダーに送信されます。当社サーバーでは音声データを保存せず、処理完了後に破棄されます。",
      "■ 文字起こし・議事録データ：音声から生成された文字起こしテキストおよび議事録。クラウド同期を有効にした場合、暗号化のうえ当社サーバーに保存されます。",
      "■ カレンダー情報：カレンダー連携を有効にした場合、Google Calendar API（calendar.readonlyスコープ）またはmacOS EventKitを通じて、会議の日時・タイトル・参加者名を取得します。取得したカレンダー情報はお客様のデバイス上にのみ保存され、当社サーバーには送信・保存されません。カレンダー情報は録音セッションへの会議情報の紐付けおよび文字起こし精度の向上（参加者名の辞書登録）にのみ使用し、広告・マーケティング・AIモデルの訓練には一切使用しません。",
      "■ 利用状況データ：アプリの改善を目的として、機能の使用状況（録音回数・議事録生成回数など）を匿名で収集します。文字起こし本文・議事録本文・会議タイトル・参加者名・ファイルパスなどの個人を特定しうる情報は収集しません。",
    ],
  },
  {
    heading: "4. データの利用目的",
    paragraphs: [
      "取得したデータは、以下の目的にのみ利用します。",
      "・本アプリの機能提供（文字起こし・議事録生成・クラウド同期）",
      "・アカウントの認証および管理",
      "・本アプリの品質改善およびバグ修正",
      "・お客様からのお問い合わせへの対応",
    ],
  },
  {
    heading: "5. AIモデルの訓練への不使用",
    paragraphs: [
      "当社は、お客様の音声データ・文字起こしデータ・議事録データを、AIモデルの訓練・改善・開発の目的で使用しません。お客様のデータは本アプリの機能提供のためにのみ処理されます。",
    ],
  },
  {
    heading: "6. クラウド同期",
    paragraphs: [
      "クラウド同期を有効にした場合、文字起こしおよび議事録データが当社のサーバーに暗号化のうえ保存されます。クラウド同期はお客様の任意で有効・無効を切り替えることができます。無効の場合、データはお客様のデバイス上にのみ保存されます。",
      "クラウドに保存されたデータは、お客様がアカウントを削除した場合、またはデータの削除を依頼した場合に完全に削除されます。",
    ],
  },
  {
    heading: "7. 第三者への提供",
    paragraphs: [
      "当社は、以下の場合を除き、お客様のデータを第三者に提供しません。",
      "・お客様の同意がある場合",
      "・法令に基づく開示請求があった場合",
      "・本アプリの機能提供に必要な業務委託先（クラウドインフラ事業者、決済事業者等）に対して、必要最小限の範囲で共有する場合。この場合、委託先に対して適切な管理を求めます。",
    ],
  },
  {
    heading: "8. 外部サービスの利用と外国への送信",
    paragraphs: [
      "本アプリでは、文字起こしおよび議事録生成のために、外部のAIサービスプロバイダーのAPIを利用します。音声データおよびテキストデータは当社サーバーを経由してプロバイダーに送信されます。",
      "これらのプロバイダーのサーバーは主に米国に所在しており、お客様のデータは個人情報保護法第28条に基づき外国の第三者に提供されます。米国には日本の個人情報保護法と同等の包括的なデータ保護法制はありませんが、各プロバイダーは自社のプライバシーポリシーに基づきデータを保護しています。",
      "■ 文字起こし処理：米国所在の音声認識サービス — 音声データを送信",
      "■ 議事録生成・チャット：米国所在のAIサービス — テキストデータを送信",
      "■ クラウド同期：米国所在のクラウドデータベースサービス — 文字起こし・議事録データを保存",
      "■ 決済：米国所在の決済サービス — メールアドレス・決済情報を処理",
      "■ 利用状況分析：米国所在の分析サービス — 匿名の利用データを送信",
      "送信されるデータの取り扱いについては、各プロバイダーのプライバシーポリシーもあわせてご確認ください。",
    ],
  },
  {
    heading: "9. データの保持期間",
    paragraphs: [
      "■ 音声データ：文字起こし処理の完了後、当社サーバーからは即時破棄されます。お客様のデバイス上の録音ファイルは、お客様が手動で削除するまで保持されます。",
      "■ 文字起こし・議事録データ：お客様のデバイス上にはアプリをアンインストールするまで保持されます。クラウド同期を有効にしている場合、アカウント削除またはデータ削除の依頼から30日以内にサーバーから完全に削除されます。",
      "■ アカウント情報：アカウント削除の依頼から30日以内に完全に削除されます。",
      "■ 利用状況データ：匿名化された状態で最大24ヶ月間保持されます。",
    ],
  },
  {
    heading: "10. データの安全管理",
    paragraphs: [
      "当社は、お客様のデータを適切に管理するため、以下の安全管理措置を講じています。",
      "■ 通信の暗号化：すべてのデータ送受信はTLS 1.2以上で暗号化されます。",
      "■ 保存データの暗号化：クラウドに保存されるデータはAES-256で暗号化されます。",
      "■ アクセス制御：データへのアクセスは認証済みユーザーのみに制限し、管理者アクセスは最小権限の原則に基づき管理されます。",
      "■ ローカルデータ：お客様のデバイス上に保存されるデータのセキュリティは、OSのセキュリティ機能に依存します。",
      "万が一データの漏洩・不正アクセス等のセキュリティインシデントが発生した場合、当社は速やかに影響範囲を調査し、影響を受けるお客様への通知および関係当局への報告を行います。",
    ],
  },
  {
    heading: "11. お客様の権利",
    paragraphs: [
      "お客様は、ご自身のデータについて以下の権利を有します。",
      "・保有個人データの開示請求",
      "・アカウント情報の確認・訂正",
      "・クラウドに保存されたデータの削除依頼",
      "・アカウントの削除",
      "・利用状況データの収集停止（アプリ内の設定から無効化できます）",
      "これらのご請求は、下記のお問い合わせ先までご連絡ください。原則として2週間以内に対応いたします。",
    ],
  },
  {
    heading: "12. ポリシーの変更",
    paragraphs: [
      "本ポリシーの内容は、法令の改正やサービスの変更に応じて改定することがあります。重要な変更がある場合は、本アプリ内またはウェブサイト上でお知らせします。",
    ],
  },
  {
    heading: "13. Googleカレンダー連携の解除",
    paragraphs: [
      "Googleカレンダー連携を有効にしたお客様は、以下の方法でいつでもアクセスを取り消すことができます。",
      "・本アプリの設定画面から「Googleカレンダー連携を解除」を選択する",
      "・Googleアカウントの設定（https://myaccount.google.com/permissions）から Reki note のアクセス権を削除する",
      "連携を解除すると、デバイス上にキャッシュされたカレンダー情報は即座に削除されます。",
    ],
  },
  {
    heading: "14. Google APIサービスのユーザーデータに関するポリシー",
    paragraphs: [
      "Reki note が Google API を通じて受け取った情報の利用および他のアプリへの転送は、Google API Services User Data Policy（Limited Use（限定的使用）の要件を含む）に準拠します。",
      "詳細は https://developers.google.com/terms/api-services-user-data-policy をご確認ください。",
    ],
  },
  {
    heading: "15. お問い合わせ",
    paragraphs: [
      "本ポリシーおよび個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。",
      "ヒバチ株式会社 個人情報お問い合わせ窓口",
      "メール：contact@hibachi-inc.jp",
    ],
  },
];

export default function PrivacyPolicyPage() {
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
        <h1 className="text-2xl font-bold tracking-tight">プライバシーポリシー</h1>
        <p className="mt-3 text-sm text-[#a0a0ad]">最終更新日：2026年5月11日</p>

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
