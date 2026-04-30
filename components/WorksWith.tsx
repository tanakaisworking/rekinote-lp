const apps = [
  { name: "Zoom", color: "#2D8CFF", initial: "Z" },
  { name: "Google Meet", color: "#00897B", initial: "M" },
  { name: "Teams", color: "#5059C9", initial: "T" },
  { name: "Slack", color: "#E01E5A", initial: "S" },
  { name: "Discord", color: "#5865F2", initial: "D" },
  { name: "FaceTime", color: "#34C759", initial: "F" },
  { name: "Macアプリ全般", color: "#8c8c97", initial: "•" },
  { name: "対面の会話", color: "#a78bfa", initial: "◎" },
];

export function WorksWith() {
  return (
    <section className="section">
      <div className="container-x">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow">Works Where You Work</span>
            <h2 className="mt-4 text-3xl md:text-[40px] font-bold tracking-tight leading-[1.3]">
              いつものMacの、<br className="hidden md:block" />すべての通話に。
            </h2>
            <p className="mt-6 muted leading-[1.95] max-w-[440px]">
              OS直取りだから、特定アプリのAPI連携もbot招待も不要。インストールして起動するだけで、すべての会話を捕まえます。
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {apps.map((a) => (
              <div key={a.name} className="card p-4 flex flex-col items-center gap-2.5 hover:border-line-strong transition-colors duration-180">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-sm font-semibold"
                  style={{ background: a.color }}
                >
                  {a.initial}
                </div>
                <div className="text-[12px] muted text-center leading-tight">{a.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
