import Image from "next/image";

const beforeItems = [
  { name: "Zoom AI Companion", price: "+ ¥2,200/月" },
  { name: "Microsoft Teams Copilot", price: "+ ¥4,497/月" },
  { name: "Google Meet AI", price: "+ ¥1,650/月" },
  { name: "Notta / Plaud 等", price: "+ ¥1,980/月" },
];

export function Problem() {
  return (
    <section className="section" id="problem">
      <div className="container-x">
        <div className="max-w-[760px]">
          <span className="eyebrow">The Problem</span>
          <h2 className="mt-4 text-3xl md:text-[42px] font-bold tracking-tight leading-tight">
            議事録のために、<br className="hidden md:block" />
            <span className="gradient-text">いくつのAI</span>に払っていますか？
          </h2>
          <p className="mt-6 muted leading-[1.95]">
            会議ツールごとにAI議事録の課金。同じ「議事録」のために、気づけば月1万円近くを複数のサービスに分散させていませんか。データはバラバラのサーバーに閉じ込められ、横断検索すらできない。
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {/* Before */}
          <div className="card p-8 md:p-10 flex flex-col">
            <div className="text-xs font-mono-num tracking-widest uppercase text-[#5e5e6a]">Before</div>
            <h3 className="mt-3 text-xl font-semibold">バラバラの課金とデータ</h3>

            <ul className="mt-7 space-y-0 flex-1">
              {beforeItems.map((it) => (
                <li key={it.name} className="flex items-center justify-between text-[14.5px] py-3 border-b border-line">
                  <span className="text-[#ececef]/90">{it.name}</span>
                  <span className="font-mono-num muted">{it.price}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-line-strong flex items-baseline justify-between gap-3">
              <span className="font-semibold">合計</span>
              <div className="text-right">
                <span className="font-mono-num text-2xl text-[#ececef]">¥10,327/月</span>
                <div className="mt-1 text-[12px] dim">複数サービス分散課金</div>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="card-strong p-8 md:p-10 relative overflow-hidden flex flex-col">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_85%_0%,rgba(139,92,246,0.08),transparent_55%)]" />
            <div className="relative flex-1">
              <div className="text-xs font-mono-num tracking-widest uppercase text-[#a78bfa]">After</div>
              <h3 className="mt-3 text-xl font-semibold">Reki note 1本に集約</h3>

              <div className="mt-7 flex items-center gap-3">
                <Image src="/logo.png" alt="" width={32} height={32} className="rounded-md" />
                <span className="font-semibold text-lg">Reki note</span>
              </div>
              <p className="mt-3 text-[14.5px] muted">
                Zoom / Meet / Teams / 対面 すべて対応
              </p>

              <ul className="mt-8 space-y-3 text-[14.5px]">
                <li className="flex gap-3"><span className="text-[#a78bfa]">✓</span><span>1つのアプリで全通話・対面を録音</span></li>
                <li className="flex gap-3"><span className="text-[#a78bfa]">✓</span><span>データはあなたのMacに</span></li>
                <li className="flex gap-3"><span className="text-[#a78bfa]">✓</span><span>全議事録を横断してAIに質問</span></li>
                <li className="flex gap-3"><span className="text-[#a78bfa]">✓</span><span>自分のAIキーで動く。追加課金なし</span></li>
              </ul>
            </div>
            <div className="relative mt-8 pt-6 border-t border-line-strong flex items-baseline justify-between gap-3">
              <span className="font-semibold">合計</span>
              <div className="text-right">
                <span className="font-mono-num text-2xl gradient-text">¥0/月〜</span>
                <div className="mt-1 text-[12px] dim">APIキーを自由に設定可能</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
