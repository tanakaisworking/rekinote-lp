const rows = [
  ["対応する会議ツール", "Mac全アプリ＋対面", "そのPFのみ", "主要会議アプリのみ"],
  ["課金モデル", "自分のAIキーで動く", "PFごと", "独自サブスク"],
  ["データ保存場所", "あなたのMac", "各社サーバー", "各社サーバー"],
  ["過去議事録の横断質問", "全議事録を横断", "不可 / 限定的", "単発要約のみ"],
  ["出力形式", "Markdown / Obsidian", "PF内閲覧", "一部エクスポート"],
  ["対面会話の録音", "対応", "不可", "一部のみ"],
];

export function Compare() {
  return (
    <section className="section" id="compare">
      <div className="container-x">
        <div className="mb-10">
          <span className="eyebrow">Compare</span>
          <h2 className="mt-4 text-3xl md:text-[42px] font-bold tracking-tight leading-tight">
            他のAI議事録ツールと、<span className="gradient-text">何が違うのか。</span>
          </h2>
          <p className="mt-4 muted leading-[1.95]">
            Reki noteは、オープンにします。
          </p>
        </div>

        <div className="card relative overflow-x-auto">
          {/* Reki列のハイライト枠 */}
          <div className="hidden md:block absolute top-0 bottom-0 left-[26%] w-[24.66%] pointer-events-none rounded-md"
               style={{
                 background: "linear-gradient(180deg, rgba(139,92,246,0.10) 0%, rgba(139,92,246,0.04) 100%)",
                 boxShadow: "inset 0 0 0 1px rgba(139,92,246,0.35)",
               }} />
          <table className="compare relative min-w-[760px]">
            <thead>
              <tr>
                <th className="w-[26%]">比較軸</th>
                <th className="highlight">
                  <span className="inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" />
                    Reki note
                  </span>
                </th>
                <th>Zoom AI / Teams Copilot</th>
                <th>Otter / tl;dv / Notta</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r[0]}>
                  <td className="muted">{r[0]}</td>
                  <td className="highlight">{r[1]}</td>
                  <td>{r[2]}</td>
                  <td>{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 dim text-xs">※各サービスの仕様は2026年4月時点の公開情報に基づきます</p>
      </div>
    </section>
  );
}
