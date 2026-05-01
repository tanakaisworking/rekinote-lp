import Image from "next/image";
import { HeroStreamCanvas } from "../HeroStreamCanvas";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* テキストストリーム — セクション全幅で左右から流れ込む */}
      <HeroStreamCanvas />
      <div className="hero-orb" />
      <div className="absolute left-1/2 -translate-x-1/2 top-[480px] w-[1200px] h-[420px] pointer-events-none opacity-60"
           style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(139,92,246,0.10), transparent 70%)" }} />
      <div className="container-x relative z-10 px-6 pt-20 pb-12 md:pt-28 md:pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-[640px]">
          <h1 className="text-4xl md:text-[60px] font-bold tracking-tight leading-[1.15]">
            Unify all your meetings<br />
            <span className="gradient-text">with Reki.</span>
          </h1>
          <p className="mt-7 text-lg md:text-[20px] text-[#ececef]/95 leading-[1.7] max-w-[560px]">
            Transcribe every conversation on your device. Search across everything with AI.
          </p>

          {/* スマホ表示用ロゴ: テキスト間に配置 */}
          <div className="relative mt-12 mb-10 md:hidden flex justify-center">
            <div className="absolute -inset-12 pointer-events-none"
                 style={{ background: "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25), transparent 70%)" }} />
            <div className="flex items-center justify-center p-4 relative">
              <Image
                src="/logo-transparent.png"
                alt="Reki note"
                width={600}
                height={600}
                priority
                className="hero-logo-target w-full h-auto max-w-[280px] drop-shadow-[0_0_60px_rgba(139,92,246,0.5)] select-none pointer-events-none"
                draggable={false}
              />
              {/* 画像保存防止用 透明オーバーレイ */}
              <div className="absolute inset-0 z-10 bg-transparent" />
            </div>
          </div>

          <p className="mt-5 muted text-[15px] max-w-[560px] leading-[1.85]">
            Zoom / Meet / Teams / Slack / In-person. All calls on your Mac gathered in one single app.
          </p>
          <div className="mt-9">
            <div className="flex flex-wrap items-center gap-3">
              <a href="#download" className="btn-primary">Join the Waitlist</a>
            </div>
            <div className="mt-6 flex flex-wrap gap-x-7 gap-y-3 items-center text-[13px]">
              <span className="flex items-center gap-2 text-[#ececef]/90">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M17.05 12.04c-.03-2.95 2.41-4.37 2.52-4.44-1.37-2.01-3.51-2.28-4.27-2.31-1.81-.18-3.55 1.07-4.48 1.07-.94 0-2.36-1.05-3.88-1.02-2 .03-3.84 1.16-4.87 2.95-2.08 3.61-.53 8.95 1.49 11.88.99 1.43 2.16 3.04 3.69 2.98 1.49-.06 2.05-.96 3.85-.96 1.79 0 2.3.96 3.87.93 1.6-.03 2.61-1.46 3.59-2.9 1.13-1.66 1.6-3.27 1.62-3.36-.04-.01-3.1-1.19-3.13-4.72zM14.13 4.5c.82-.99 1.37-2.37 1.22-3.74-1.18.05-2.62.79-3.46 1.78-.76.88-1.42 2.28-1.24 3.63 1.32.1 2.66-.67 3.48-1.67z"/>
                </svg>
                <span>Mac <span className="muted">Early Access</span></span>
              </span>
              <span className="flex items-center gap-2 dim">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M3 5.5 11 4v7.5H3V5.5zM12 3.85 21 3v8.5h-9V3.85zM3 12.5h8V20l-8-1.4v-6.1zM12 12.5h9V21l-9-1.3v-7.2z"/>
                </svg>
                <span>Win <span className="dim">Coming soon</span></span>
              </span>
            </div>
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="absolute -inset-12 pointer-events-none"
               style={{ background: "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.25), transparent 70%)" }} />
          <div className="flex items-center justify-center p-8 relative">
            <Image
              src="/logo-transparent.png"
              alt="Reki note"
              width={600}
              height={600}
              priority
              className="hero-logo-target w-full h-auto max-w-[320px] drop-shadow-[0_0_60px_rgba(139,92,246,0.5)] select-none pointer-events-none"
              draggable={false}
            />
            {/* 画像保存防止用 透明オーバーレイ */}
            <div className="absolute inset-0 z-10 bg-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
