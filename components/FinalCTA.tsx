import Image from "next/image";

export function FinalCTA() {
  return (
    <section className="section relative overflow-hidden" id="download">
      <div className="container-x relative">
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #3b1a8a 0%, #5a2fc2 50%, #7c3aed 100%)",
          }}
        >
          {/* テクスチャ */}
          <div className="absolute inset-0 pointer-events-none opacity-30"
               style={{ background: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.25), transparent 50%)" }} />

          <div className="relative grid md:grid-cols-2 items-center">
            {/* 左: テキスト + ボタン */}
            <div className="px-8 md:px-16 pt-16 md:pt-20 pb-10 md:pb-16 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-3xl md:text-[40px] font-bold tracking-tight leading-[1.3] text-white">
                  もう、これなしでは<br />いられないはず。
                </h2>
                <p className="mt-5 text-white/85 leading-[1.95] text-[15px] max-w-[420px]">
                  まずは分散課金をやめて、1本に集約するところから。慣れてきた頃には、メモも検索もAIに任せて、毎日が驚くほどラクになります。
                </p>
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 items-center text-[13px]">
                  <span className="flex items-center gap-2 text-white/95">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M17.05 12.04c-.03-2.95 2.41-4.37 2.52-4.44-1.37-2.01-3.51-2.28-4.27-2.31-1.81-.18-3.55 1.07-4.48 1.07-.94 0-2.36-1.05-3.88-1.02-2 .03-3.84 1.16-4.87 2.95-2.08 3.61-.53 8.95 1.49 11.88.99 1.43 2.16 3.04 3.69 2.98 1.49-.06 2.05-.96 3.85-.96 1.79 0 2.3.96 3.87.93 1.6-.03 2.61-1.46 3.59-2.9 1.13-1.66 1.6-3.27 1.62-3.36-.04-.01-3.1-1.19-3.13-4.72zM14.13 4.5c.82-.99 1.37-2.37 1.22-3.74-1.18.05-2.62.79-3.46 1.78-.76.88-1.42 2.28-1.24 3.63 1.32.1 2.66-.67 3.48-1.67z"/>
                    </svg>
                    <span>Mac <span className="text-white/70">先行配信中</span></span>
                  </span>
                  <span className="flex items-center gap-2 text-white/70">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M3 5.5 11 4v7.5H3V5.5zM12 3.85 21 3v8.5h-9V3.85zM3 12.5h8V20l-8-1.4v-6.1zM12 12.5h9V21l-9-1.3v-7.2z"/>
                    </svg>
                    <span>Win <span className="text-white/55">リリース準備中</span></span>
                  </span>
                </div>
              </div>
              {/* ボタン: 左下 */}
              <div className="mt-10 flex flex-row gap-3 flex-wrap">
                <a href="#" className="bg-white text-[#3b1a8a] hover:bg-white/95 font-semibold px-6 py-3.5 rounded-lg text-center transition-all duration-180 shadow-lg shadow-black/10 hover:-translate-y-px">
                  無料でダウンロード
                </a>
                <a href="#compare" className="border border-white/40 text-white hover:bg-white/10 font-medium px-6 py-3.5 rounded-lg text-center transition-all duration-180 hover:-translate-y-px">
                  比較表を見る
                </a>
              </div>
            </div>

            {/* 右: UI画像 */}
            <div className="flex items-center justify-center px-8 pb-10 md:py-8">
              <div className="rounded-lg overflow-hidden shadow-[0_-20px_60px_-10px_rgba(0,0,0,0.5)] w-full max-w-[520px]">
                <Image
                  src="/dashboard-hero.png"
                  alt="Reki note dashboard"
                  width={2000}
                  height={1250}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
