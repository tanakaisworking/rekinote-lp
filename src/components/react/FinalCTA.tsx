import * as React from "react";
import type { DictFinalCTA } from "../../i18n/types";
import { MeetingHomePreview } from "./MeetingHomePreview";

const MAC_DOWNLOAD_URL =
  "https://github.com/hibachi-inc/reki-note-releases/releases/latest/download/reki-note.dmg";
const WIN_DOWNLOAD_URL =
  "https://github.com/hibachi-inc/reki-note-releases/releases/latest/download/reki-note-setup.exe";

function FinalCTADownload({ lang }: { lang: string }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDownload = (url: string) => {
    setOpen(false);
    window.location.href = url;
    setTimeout(() => {
      window.location.href = `/${lang}/thanks/`;
    }, 5000);
  };

  return (
    <div ref={ref} className="relative mt-10 inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-3 bg-white text-[#3b1a8a] hover:bg-white/95 font-semibold px-8 py-4 rounded-lg transition-all duration-180 shadow-lg shadow-black/10 hover:-translate-y-px"
      >
        <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
          <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
          <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
        </svg>
        {lang === "en" ? "Free Download" : "無料ダウンロード"}
        <svg viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 transition-transform duration-150 ${open ? "rotate-180" : ""}`}>
          <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
        </svg>
      </button>

      {open && (
        <div className="absolute left-0 bottom-full mb-2 w-64 rounded-xl border border-white/20 bg-[#2a1560]/95 shadow-xl shadow-black/30 backdrop-blur-xl overflow-hidden z-50">
          <button
            onClick={() => handleDownload(MAC_DOWNLOAD_URL)}
            className="w-full flex items-center gap-3 px-5 py-3.5 text-sm text-left text-white transition-colors hover:bg-white/10"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
              <path d="M17.05 12.04c-.03-2.95 2.41-4.37 2.52-4.44-1.37-2.01-3.51-2.28-4.27-2.31-1.81-.18-3.55 1.07-4.48 1.07-.94 0-2.36-1.05-3.88-1.02-2 .03-3.84 1.16-4.87 2.95-2.08 3.61-.53 8.95 1.49 11.88.99 1.43 2.16 3.04 3.69 2.98 1.49-.06 2.05-.96 3.85-.96 1.79 0 2.3.96 3.87.93 1.6-.03 2.61-1.46 3.59-2.9 1.13-1.66 1.6-3.27 1.62-3.36-.04-.01-3.1-1.19-3.13-4.72zM14.13 4.5c.82-.99 1.37-2.37 1.22-3.74-1.18.05-2.62.79-3.46 1.78-.76.88-1.42 2.28-1.24 3.63 1.32.1 2.66-.67 3.48-1.67z"/>
            </svg>
            <div>
              <div className="font-medium">macOS</div>
              <div className="text-xs text-white/50">Apple Silicon (M1+)</div>
            </div>
          </button>
          <div className="mx-4 border-t border-white/10" />
          <button
            onClick={() => handleDownload(WIN_DOWNLOAD_URL)}
            className="w-full flex items-center gap-3 px-5 py-3.5 text-sm text-left text-white transition-colors hover:bg-white/10"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
              <path d="M3 5.5 11 4v7.5H3V5.5zM12 3.85 21 3v8.5h-9V3.85zM3 12.5h8V20l-8-1.4v-6.1zM12 12.5h9V21l-9-1.3v-7.2z"/>
            </svg>
            <div className="flex items-center gap-2">
              <div>
                <div className="font-medium">Windows</div>
                <div className="text-xs text-white/50">Windows 10+</div>
              </div>
            </div>
          </button>
        </div>
      )}
    </div>
  );
}

export function FinalCTA({ dict, lang = "ja", showPreview = true }: { dict: DictFinalCTA; lang?: "ja" | "en"; showPreview?: boolean }) {
  const titleLines = dict.title.split('\n');

  return (
    <section className="section relative overflow-hidden" id="download">
      <div className="container-x relative">
        <div
          className="relative rounded-2xl overflow-hidden shadow-[0_36px_90px_-44px_rgba(76,29,149,0.55)]"
          style={{
            background: "linear-gradient(135deg, #3b1a8a 0%, #5a2fc2 50%, #7c3aed 100%)",
          }}
        >
          <div className="absolute inset-0 pointer-events-none opacity-30"
               style={{ background: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.25), transparent 50%)" }} />

          <div className={`relative ${showPreview ? "grid md:grid-cols-[0.9fr_1.1fr]" : ""} items-center`}>
            <div className="px-8 md:px-16 pt-16 md:pt-20 pb-10 md:pb-16 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-3xl md:text-[40px] font-bold tracking-tight leading-[1.3] text-white">
                  {titleLines[0]}<br />{titleLines[1]}
                </h2>
                <p className="mt-5 text-white/85 leading-[1.95] text-[15px] max-w-[420px]">
                  {dict.desc}
                </p>
              </div>

              {showPreview && dict.preview && (
                <div className="md:hidden mt-8 flex justify-center overflow-hidden px-2">
                  <div className="w-full max-w-[360px]">
                    <MeetingHomePreview dict={dict.preview} />
                  </div>
                </div>
              )}

              <div className="flex justify-center md:justify-start">
                <FinalCTADownload lang={lang} />
              </div>
            </div>

            {showPreview && dict.preview && (
              <div className="hidden md:flex items-center justify-center overflow-hidden px-6 pb-10 md:self-stretch md:px-8 md:py-8">
                <div className="w-full max-w-[520px] md:w-full md:max-w-[520px] lg:translate-x-4 lg:translate-y-6">
                  <MeetingHomePreview dict={dict.preview} />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
