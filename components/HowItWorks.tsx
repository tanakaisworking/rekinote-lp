import type { DictHowItWorks } from "@/dictionaries/types";

export function HowItWorks({ dict }: { dict: DictHowItWorks }) {
  const TranscriptCard = () => (
    <div className="card p-6 flex flex-col gap-4 flex-1">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl border border-line-strong bg-[rgba(139,92,246,0.06)] flex items-center justify-center text-[#a78bfa] shrink-0">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
            <rect x="9" y="2" width="6" height="12" rx="3" />
            <path d="M5 10c0 3.87 3.13 7 7 7s7-3.13 7-7M12 19v3M8 22h8" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <div className="text-[10px] font-mono-num tracking-widest text-[#a78bfa] uppercase">{dict.input01Label}</div>
          <div className="text-[14px] font-semibold mt-0.5">{dict.input01Title}</div>
        </div>
      </div>
      <div className="bg-[#0c0c10] rounded-xl p-4 space-y-3 text-[12.5px] leading-[1.75] border border-line">
        {dict.transcript.map((line) => (
          <div key={line.time} className="flex gap-2.5">
            <span className="font-mono-num text-[#5e5e6a] shrink-0 mt-px">{line.time}</span>
            <p className="text-[#ececef]/80">
              <span className="font-medium" style={{ color: line.color }}>{line.speaker}：</span>
              {line.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );

  const CalendarCard = () => (
    <div className="card p-6 flex flex-col gap-4 flex-1">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-xl border border-line-strong bg-[rgba(139,92,246,0.06)] flex items-center justify-center text-[#a78bfa] shrink-0">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4">
            <rect x="3.5" y="5" width="17" height="15" rx="2" />
            <path d="M3.5 9.5h17M8 3v4M16 3v4" strokeLinecap="round" />
          </svg>
        </div>
        <div>
          <div className="text-[10px] font-mono-num tracking-widest text-[#a78bfa] uppercase">{dict.input02Label}</div>
          <div className="text-[14px] font-semibold mt-0.5">{dict.input02Title}</div>
        </div>
      </div>
      <div className="bg-[#0c0c10] rounded-xl p-4 border border-line flex flex-col gap-3">
        <div className="flex items-center gap-2 pb-3 border-b border-line">
          <div className="w-2.5 h-2.5 rounded-full bg-[#a78bfa]" />
          <span className="text-[13px] font-semibold">{dict.calendarMeeting}</span>
        </div>
        <div className="space-y-2.5 text-[12.5px]">
          <div className="flex justify-between">
            <span className="muted">{dict.calendarDate}</span>
            <span className="text-[#ececef]/90 font-mono-num">{dict.calendarDateValue}</span>
          </div>
          <div className="flex justify-between">
            <span className="muted">{dict.calendarParticipants}</span>
            <span className="text-[#ececef]/90">{dict.calendarParticipantsValue}</span>
          </div>
          <div className="flex justify-between">
            <span className="muted">{dict.calendarTool}</span>
            <span className="text-[#ececef]/90">Google Meet</span>
          </div>
        </div>
        <p className="text-[11.5px] muted leading-[1.7] pt-1 border-t border-line">
          {dict.calendarNote}
        </p>
      </div>
    </div>
  );

  const OutputCard = () => (
    <div className="card-strong p-8 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(139,92,246,0.12), transparent 70%)" }} />
      <div className="relative">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl border border-[rgba(139,92,246,0.5)] bg-[rgba(139,92,246,0.1)] flex items-center justify-center text-[#a78bfa] shrink-0">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
              <ellipse cx="12" cy="6" rx="7.5" ry="2.5" />
              <path d="M4.5 6v12c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5V6M4.5 12c0 1.4 3.4 2.5 7.5 2.5s7.5-1.1 7.5-2.5" />
            </svg>
          </div>
          <div>
            <div className="text-[11px] font-mono-num tracking-widest text-[#a78bfa] uppercase">{dict.outputLabel}</div>
            <div className="text-[18px] font-bold mt-0.5">{dict.outputTitle}</div>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {dict.outputCards.map((f) => (
            <div key={f.title} className="bg-surface rounded-xl p-5 border border-line">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" />
                <span className="text-[13px] font-semibold">{f.title}</span>
              </div>
              <p className="text-[12.5px] muted leading-[1.7]">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section className="section relative" id="how">
      <div className="absolute inset-0 pointer-events-none opacity-50"
           style={{ background: "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(139,92,246,0.07), transparent 70%)" }} />
      <div className="container-x relative">
        <div className="text-center mb-16">
          <span className="eyebrow">{dict.eyebrow}</span>
          <h2 className="mt-4 text-3xl md:text-[42px] font-bold tracking-tight leading-tight">
            {dict.title1}<span className="gradient-text">{dict.title2}</span>
          </h2>
        </div>

        <div className="max-w-[860px] mx-auto">

          {/* ── デスクトップ: 横並び + L字矢印 ── */}
          <div className="hidden md:block">
            {/* 上段: card → arrow → card */}
            <div className="flex items-center gap-0">
              <TranscriptCard />
              {/* 横矢印 */}
              <div className="shrink-0 px-4 flex items-center">
                <svg viewBox="0 0 44 16" fill="none" className="w-11 h-4">
                  <path d="M0 8 H38" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6"/>
                  <path d="M0 8 H38" stroke="#fff" strokeWidth="2" strokeLinecap="round" pathLength="100" strokeDasharray="10 160" opacity="0.9">
                    <animate attributeName="stroke-dashoffset" values="10; -160" dur="1.5s" repeatCount="indefinite" />
                  </path>
                  <path d="M32 3 L42 8 L32 13" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <CalendarCard />
            </div>

            {/* L字矢印: 右カード中央 → 下 → 中央 */}
            <div className="relative h-16">
              <svg viewBox="0 0 100 64" fill="none" preserveAspectRatio="none" className="w-full h-full">
                <defs>
                  <linearGradient id="lg" x1="75" y1="0" x2="50" y2="64" gradientUnits="userSpaceOnUse">
                    <stop stopColor="rgba(139,92,246,0.4)" />
                    <stop offset="1" stopColor="#a78bfa" />
                  </linearGradient>
                </defs>
                <path d="M75 0 L75 32 L50 32 L50 60" stroke="url(#lg)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"/>
                <path d="M75 0 L75 32 L50 32 L50 60" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" pathLength="100" strokeDasharray="10 160" opacity="0.9">
                  <animate attributeName="stroke-dashoffset" values="10; -160" dur="2.5s" repeatCount="indefinite" />
                </path>
                <path d="M47.5 54 L50 62 L52.5 54" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke"/>
              </svg>
            </div>

            <OutputCard />
          </div>

          {/* ── モバイル: 縦スタック + 下矢印 ── */}
          <div className="md:hidden flex flex-col gap-0">
            <TranscriptCard />
            <div className="flex justify-center py-3">
              <svg viewBox="0 0 16 32" fill="none" className="w-4 h-8">
                <path d="M8 0 V26" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6"/>
                <path d="M8 0 V26" stroke="#fff" strokeWidth="2" strokeLinecap="round" pathLength="100" strokeDasharray="10 160" opacity="0.9">
                  <animate attributeName="stroke-dashoffset" values="10; -160" dur="1.5s" repeatCount="indefinite" />
                </path>
                <path d="M3 20 L8 28 L13 20" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <CalendarCard />
            <div className="flex justify-center py-3">
              <svg viewBox="0 0 16 32" fill="none" className="w-4 h-8">
                <path d="M8 0 V26" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.6"/>
                <path d="M8 0 V26" stroke="#fff" strokeWidth="2" strokeLinecap="round" pathLength="100" strokeDasharray="10 160" opacity="0.9">
                  <animate attributeName="stroke-dashoffset" values="10; -160" dur="1.5s" repeatCount="indefinite" />
                </path>
                <path d="M3 20 L8 28 L13 20" stroke="#a78bfa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <OutputCard />
          </div>

        </div>
      </div>
    </section>
  );
}
