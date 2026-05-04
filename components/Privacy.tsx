import type { DictPrivacy } from "@/dictionaries/types";

export function Privacy({ dict }: { dict: DictPrivacy }) {
  return (
    <section className="section relative" id="privacy">
      <div className="container-x">
        <div className="grid md:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* テキスト */}
          <div className="md:col-span-5">
            <span className="eyebrow">{dict.eyebrow}</span>
            <h2 className="mt-4 text-3xl md:text-[42px] font-bold tracking-tight leading-tight">
              {dict.title1}<br className="hidden md:block" /><span className="gradient-text">{dict.title2}</span>
            </h2>
            <ul className="mt-8 space-y-3.5">
              {dict.facts.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[14.5px]">
                  <span className="mt-[7px] w-4 h-4 rounded-full flex items-center justify-center shrink-0"
                        style={{ background: "rgba(139,92,246,0.15)", border: "1px solid rgba(139,92,246,0.5)" }}>
                    <span className="text-[10px] text-[#a78bfa]">✓</span>
                  </span>
                  <span className="leading-[1.85]">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* シールド・ビジュアル */}
          <div className="md:col-span-3 relative h-[320px] flex items-center justify-center">
            <div className="absolute inset-0 pointer-events-none"
                 style={{ background: "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.18), transparent 60%)" }} />
            <div className="relative">
              {[1, 2, 3].map((i) => (
                <div key={i}
                     className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[rgba(139,92,246,0.18)]"
                     style={{ width: 100 + i * 60, height: 100 + i * 60 }} />
              ))}
              <div className="relative w-28 h-28 rounded-2xl flex items-center justify-center"
                   style={{
                     background: "linear-gradient(180deg, rgba(139,92,246,0.18), rgba(139,92,246,0.04))",
                     border: "1px solid rgba(139,92,246,0.5)",
                     boxShadow: "0 0 60px -10px rgba(139,92,246,0.6)",
                   }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="1.5" className="w-11 h-11">
                  <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3z" strokeLinejoin="round"/>
                  <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* プロバイダ一覧 */}
          <div className="md:col-span-4">
            <div className="card p-6 relative overflow-hidden">
              <div className="absolute inset-0 pointer-events-none opacity-50"
                   style={{ background: "radial-gradient(circle at 100% 0%, rgba(99,102,241,0.10), transparent 60%)" }} />
              <div className="relative">
                <div className="text-xs muted font-mono-num tracking-widest mb-1">{dict.providersLabel}</div>
                <div className="text-[13px] muted mb-5 leading-relaxed">
                  {dict.providersDesc}
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {dict.providers.map((p, i) => (
                    <div key={p}
                         className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg border text-[13px] ${
                           i === 5 ? "border-dashed border-line text-[#5e5e6a]" : "panel-inset"
                         }`}>
                      <span>{p}</span>
                      {i !== 5 && <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
