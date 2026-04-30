const rows = [
  ["対応する会議ツール", "そのPFのみ", "主要会議アプリのみ", "Mac全アプリ＋対面"],
  ["課金モデル", "PFごと", "独自サブスク", "自分のAIキーで動く"],
  ["データ保存場所", "各社サーバー", "各社サーバー", "あなたのMac"],
  ["過去議事録の横断質問", "不可 / 限定的", "単発要約のみ", "全議事録を横断"],
  ["出力形式", "PF内閲覧", "一部エクスポート", "Markdown / Obsidian"],
  ["対面会話の録音", "不可", "一部のみ", "対応"],
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
          <div className="hidden md:block absolute top-0 bottom-0 right-0 w-[26%] pointer-events-none rounded-r-2xl"
               style={{
                 background: "linear-gradient(180deg, rgba(139,92,246,0.10) 0%, rgba(139,92,246,0.04) 100%)",
                 boxShadow: "inset 0 0 0 1px rgba(139,92,246,0.35)",
               }} />
          <table className="compare relative min-w-[760px]">
            <thead>
              <tr>
                <th className="w-[26%]">比較軸</th>
                <th>Zoom AI / Teams Copilot</th>
                <th>Otter / tl;dv / Notta</th>
                <th className="highlight">
                  <span className="inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" />
                    Reki note
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r[0]}>
                  <td className="muted">{r[0]}</td>
                  <td>{r[1]}</td>
                  <td>{r[2]}</td>
                  <td className="highlight">{r[3]}</td>
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
