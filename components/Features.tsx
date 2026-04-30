import { ReactNode } from "react";

function Row({
  num, phase, title, body, mock, reverse,
}: {
  num: string; phase: string; title: string; body: string; mock: ReactNode; reverse?: boolean;
}) {
  return (
    <div className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
      <div>
        <div className="font-mono-num text-xs tracking-widest text-[#a78bfa]">{num} — {phase}</div>
        <h3 className="mt-4 text-2xl md:text-[28px] font-bold tracking-tight leading-[1.4]">{title}</h3>
        <p className="mt-5 muted leading-[1.95]">{body}</p>
      </div>
      <div>{mock}</div>
    </div>
  );
}

const NotificationMock = () => (
  <div className="card-strong p-6 max-w-[420px]">
    <div className="flex items-center gap-2 text-xs muted">
      <span className="w-2 h-2 rounded-full bg-[#a78bfa]" />
      <span>NOTIFICATION</span>
    </div>
    <div className="mt-4 flex items-start gap-3">
      <span className="w-2 h-2 mt-2 rounded-full bg-[#a78bfa] animate-pulse" />
      <div className="text-[15px] font-medium">会議を検出しました</div>
    </div>
    <div className="mt-4 space-y-2 text-sm">
      <div className="flex justify-between"><span className="muted">アプリ</span><span>Zoom Meeting</span></div>
      <div className="flex justify-between"><span className="muted">カレンダー</span><span>週次定例</span></div>
    </div>
    <button className="mt-5 w-full btn-primary !py-2.5 text-sm">録音を開始</button>
  </div>
);

const ChatMock = () => (
  <div className="card p-6 max-w-[460px] space-y-4">
    <div className="flex justify-end">
      <div className="bg-[#1f1f29] rounded-2xl rounded-tr-sm px-4 py-3 text-sm max-w-[78%]">
        先週の田中さんとの決定事項は？
      </div>
    </div>
    <div className="flex">
      <div className="rotating-border max-w-[88%] rounded-2xl rounded-tl-sm">
        <div className="bg-surface-2 rounded-[16px] rounded-tl-[2px] px-4 py-3.5 text-[13.5px] leading-relaxed">
          <div className="mb-2 text-[#a78bfa] text-xs font-mono-num">ANSWER</div>
          次の3点が決定事項です。<br/>
          ① プロトタイプを4/15までに納品<br/>
          ② レビューはSlack上で非同期で<br/>
          ③ 予算は社内承認済み
          <div className="mt-3 pt-3 border-t border-line text-xs dim font-mono-num">
            出典: 週次定例 4/8 18:02
          </div>
        </div>
      </div>
    </div>
  </div>
);

const MemoryMock = () => {
  const records = [
    { date: "今日", title: "週次定例", excerpt: "次回までにプロト...", op: 1 },
    { date: "3日前", title: "顧客MTG / HIBACHI inc.", excerpt: "予算は概ねOK", op: 0.85 },
    { date: "先週", title: "1on1 / 田中さん", excerpt: "キャリア面談の続き", op: 0.65 },
    { date: "2週前", title: "プロダクトレビュー", excerpt: "デザイン方針の決定", op: 0.45 },
    { date: "半年前", title: "Q3キックオフ", excerpt: "目標設定の根拠", op: 0.28 },
  ];
  return (
    <div className="card p-6 max-w-[460px] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: "radial-gradient(circle at 100% 0%, rgba(139,92,246,0.10), transparent 60%)" }} />
      <div className="relative">
        <div className="flex items-center justify-between mb-5">
          <div className="text-xs muted font-mono-num tracking-widest">MEMORY</div>
        </div>
        <ul className="space-y-2">
          {records.map((r, i) => (
            <li key={i}
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg border border-line bg-surface-2"
                style={{ opacity: r.op }}>
              <div className="font-mono-num text-[10px] dim w-12 shrink-0">{r.date}</div>
              <div className="flex-1 min-w-0">
                <div className="text-[13px] truncate">{r.title}</div>
                <div className="text-[11px] muted truncate">{r.excerpt}</div>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] shrink-0" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export function Features() {
  return (
    <section className="section" id="features">
      <div className="container-x">
        <div className="max-w-[760px] mb-20">
          <span className="eyebrow">Benefits</span>
          <h2 className="mt-4 text-3xl md:text-[42px] font-bold tracking-tight leading-tight">
            Rekiを使うと<span className="gradient-text">何が変わるか</span>
          </h2>
        </div>

        <div className="space-y-28 md:space-y-36">
          <Row
            num="01" phase="今すぐ ・ Soon"
            title="議事録を一本化し、課金をスリムに。"
            body="Zoom / Meet / Teams / Slack / 対面、Macで起きる会話はすべて検知して録音。文字起こしから議事録生成まで、1本で完結します。複数のサービスに月1万円払う必要も、データが各社サーバーに散らばる悩みも、ここで終わります。"
            mock={<NotificationMock />}
          />
          <Row
            num="02" phase="数週間後 ・ 中期" reverse
            title="全てのメモはRekiにお任せ"
            body="デバイス上の全ての通話を文字起こし。一箇所に統合された会話メモから、Reki AIがあなたの質問に答えます。"
            mock={<ChatMock />}
          />
          <Row
            num="03" phase="使い続けた先に ・ 長期"
            title="あなただけの第二の&quot;脳&quot;が誕生する"
            body="半年前の決定理由も、3年前の打ち合わせの細部も、AIに聞けば即座に出てくる。会議を重ねるほど、あなたの仕事の文脈すべてを覚えている『第二の脳』が手元で育っていく。記憶に頼って疲れる毎日から、いつでも引き出せる毎日へ。仕事の判断スピードと精度が、根本から変わります。"
            mock={<MemoryMock />}
          />
        </div>
      </div>
    </section>
  );
}
