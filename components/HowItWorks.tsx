const items = [
  {
    title: "Capture Everything",
    body: "あらゆるアプリと対面の会話を録音。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M3 12h2M19 12h2M7 8v8M11 5v14M15 7v10" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Auto Context",
    body: "カレンダー・参加者と自動で紐付け。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <rect x="3.5" y="5" width="17" height="15" rx="2" />
        <path d="M3.5 9.5h17M8 3v4M16 3v4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Unified Knowledge",
    body: "全議事録が1つのナレッジベースに。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <ellipse cx="12" cy="6" rx="7.5" ry="2.5" />
        <path d="M4.5 6v12c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5V6M4.5 12c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5" />
      </svg>
    ),
  },
  {
    title: "Ask Anything",
    body: "自然な言葉で過去の全会話に質問。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <circle cx="11" cy="11" r="6.5" />
        <path d="m20 20-3.5-3.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Second Brain",
    body: "使うほど積み上がる、自分だけの資産。",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M9 4.5C7 4.5 5.5 6 5.5 8c-1.5.5-2.5 2-2.5 3.5s1 3 2.5 3.5C5.5 17 7 18.5 9 18.5c1 .5 2 .5 3 0M15 4.5c2 0 3.5 1.5 3.5 3.5 1.5.5 2.5 2 2.5 3.5s-1 3-2.5 3.5c0 2-1.5 3.5-3.5 3.5-1 .5-2 .5-3 0M12 4v16" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section className="section relative" id="how">
      <div className="absolute inset-0 pointer-events-none opacity-50"
           style={{ background: "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(139,92,246,0.07), transparent 70%)" }} />
      <div className="container-x relative">
        <div className="text-center mb-16">
          <span className="eyebrow">How it Works</span>
          <h2 className="mt-4 text-3xl md:text-[42px] font-bold tracking-tight leading-tight">
            Simple. <span className="gradient-text">Private.</span> Powerful.
          </h2>
          <p className="mt-5 muted">録音から第二の脳まで、5つの機能で完結します。</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {items.map((it) => (
            <div key={it.title} className="card p-6 text-center hover:border-line-strong transition-colors duration-180">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-line-strong text-[#a78bfa] mb-4 bg-[rgba(139,92,246,0.06)]">
                {it.icon}
              </div>
              <div className="text-[14px] font-semibold tracking-tight">{it.title}</div>
              <p className="mt-2 text-[12.5px] muted leading-[1.7]">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
