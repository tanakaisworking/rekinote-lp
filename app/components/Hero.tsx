import Image from "next/image";
import { HeroStreamCanvas } from "./HeroStreamCanvas";
import { HeroDownloadDropdown } from "@/components/HeroDownloadDropdown";
import type { DictHero } from "@/dictionaries/types";

export function Hero({
  dict,
  lang,
  audience = "business",
}: {
  dict: DictHero;
  lang?: 'ja' | 'en';
  audience?: 'business' | 'student' | 'developer';
}) {
  return (
    <section className="relative overflow-x-clip">
      {/* テキストストリーム — セクション全幅で左右から流れ込む */}
      <HeroStreamCanvas lang={lang} audience={audience} />
      <div className="hero-orb" />
      <div className="absolute left-1/2 -translate-x-1/2 top-[480px] w-[1200px] h-[420px] pointer-events-none opacity-60"
           style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(139,92,246,0.10), transparent 70%)" }} />
      <div className="container-x relative z-10 px-6 pt-20 pb-12 md:pt-28 md:pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="max-w-[640px]">
          <h1 className="text-4xl md:text-[60px] font-bold tracking-tight leading-[1.15]">
            {dict.title1}<br />
            <span className="gradient-text">{dict.title2}</span>
          </h1>
          <p className="mt-7 text-lg md:text-[20px] text-[#ececef]/95 leading-[1.7] max-w-[560px]">
            {dict.subtitle}
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
            {dict.desc}
          </p>
          <div className="mt-9">
            <HeroDownloadDropdown lang={lang} label={lang === "en" ? "Free Download" : "無料ダウンロード"} />
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
