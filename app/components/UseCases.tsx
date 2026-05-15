const cases = [
  { tag: "営業", title: "次の一手の判断材料を逃さない。", body: "商談の細部を聞き直さずに、過去の決定事項とトーンをそのまま参照。" },
  { tag: "プロダクト", title: "顧客の声をチームに残す。", body: "全インタビューが横断検索可能に。誰が何を言ったかを出典付きで。" },
  { tag: "採用", title: "候補者の文脈を忘れない。", body: "面接の発言を即座に再確認。評価会議の準備が圧倒的に速くなります。" },
  { tag: "コンサル", title: "プロジェクトの全文脈を手元に。", body: "週次のディスカッションが積み上がり、過去の決定根拠も一発検索。" },
  { tag: "経営", title: "意思決定の連続性を保つ。", body: "経営会議・1on1・取締役会、全ての議論を一つのナレッジに。" },
];

export function UseCases() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="mb-12">
          <span className="eyebrow">Use Cases</span>
          <h2 className="mt-4 text-3xl md:text-[42px] font-bold tracking-tight leading-tight">
            仕事の仕方に、<span className="gradient-text">合わせて効く。</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {cases.map((c) => (
            <div key={c.tag} className="card p-6 flex flex-col hover:border-line-strong transition-colors duration-180 min-h-[200px]">
              <div className="font-mono-num text-[11px] tracking-widest text-[#a78bfa] uppercase">{c.tag}</div>
              <h3 className="mt-3 text-[15px] font-semibold leading-snug">{c.title}</h3>
              <p className="mt-3 muted text-[13px] leading-[1.85]">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
