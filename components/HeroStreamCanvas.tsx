'use client'

import * as React from 'react'

const TEXT_JA_BUSINESS =
  '次回MTGまでにプロト初版を共有 / 担当: 田中 期日: 4/22 / 予算は経営会議で承認済 上限300万 / Q3 OKR は MAU 3万・ARR 1.2億 で合意 / 顧客ヒアリング結果: 検索精度への要望が最多 / リリースは段階展開 まず社内ドッグフード / 競合A は録音単機能 弊社は横断検索で差別化 / 田中さん 1on1 メモ: キャリア面談継続 / 議事録は Reki に集約 Zoom Meet Teams Slack 対面 すべて / '

const TEXT_JA_STUDENT =
  '次回の講義までに第3章を見直す / ミクロ経済学 5限 試験範囲は需要曲線まで / 先週の補足説明を検索して確認 / レポート締切は金曜23:59 LMS提出 / 休みがちな授業もあとから追いつける / 大学の独自配信でもそのまま記録 / Bot招待なし 権限なしでも使いやすい / 講義ノートは Reki に集約 Zoom 独自配信 対面 すべて / '

const TEXT_EN_BUSINESS =
  'Share prototype by next MTG / Owner: Tanaka Due: 4/22 / Budget approved at board meeting up to $20K / Q3 OKR agreed MAU 30K ARR $1.2M / Customer research: search accuracy is top request / Staged rollout starting with internal dogfood / Competitor A is record-only we differentiate with cross-search / Tanaka 1on1 notes: continue career discussions / All notes in Reki Zoom Meet Teams Slack in-person / '

const TEXT_EN_STUDENT =
  'Review chapter 3 before the next lecture / Microeconomics exam scope goes through demand curves / Search last week’s explanation before class / Report due Friday 11:59 PM via LMS / Catch up on missed lectures later / Works with campus streaming tools as-is / No bot invite no permission setup / Keep every lecture note in Reki Zoom campus tools in-person / '

const FONT_SIZE = 12
const COLOR     = 'rgba(196, 181, 253, 1)'

// アイコンの周りを回るオービタル（楕円軌道）
const ORBITS = [
  { rx: 210, ry: 100, tilt: -0.18, speed: 0.16, phase: 0,           dir:  1, density: 0.55, reverseText: false },
  { rx: 280, ry: 140, tilt:  0.14, speed: 0.11, phase: Math.PI,     dir: -1, density: 0.50, reverseText: true  },
  { rx: 170, ry:  78, tilt:  0.32, speed: 0.22, phase: Math.PI / 2, dir:  1, density: 0.60, reverseText: false },
]

export function HeroStreamCanvas({
  lang = 'ja',
  audience = 'business',
}: {
  lang?: 'ja' | 'en'
  audience?: 'business' | 'student'
}) {
  const ref = React.useRef<HTMLCanvasElement>(null)

  React.useEffect(() => {
    const TEXT = lang === 'en'
      ? (audience === 'student' ? TEXT_EN_STUDENT : TEXT_EN_BUSINESS)
      : (audience === 'student' ? TEXT_JA_STUDENT : TEXT_JA_BUSINESS)
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let raf: number
    const t0 = performance.now()
    const dpr = Math.min(window.devicePixelRatio || 1, 2)

    const resize = () => {
      const p = canvas.parentElement
      if (!p) return
      const w = p.offsetWidth
      const h = p.offsetHeight
      canvas.width  = w * dpr
      canvas.height = h * dpr
      canvas.style.width  = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    const ro = new ResizeObserver(resize)
    ro.observe(canvas.parentElement!)

    ctx.font = lang === 'en'
      ? `400 ${FONT_SIZE}px "Inter","Helvetica Neue",sans-serif`
      : `400 ${FONT_SIZE}px "Noto Sans JP","Hiragino Sans",sans-serif`
    const widths = new Array(TEXT.length)
    let totalWidth = 0
    for (let i = 0; i < TEXT.length; i++) {
      widths[i] = ctx.measureText(TEXT[i]).width
      totalWidth += widths[i]
    }

    const FADE_IN = 1.6 // 秒

    const frame = () => {
      const t  = (performance.now() - t0) / 1000
      const W  = canvas.width  / dpr
      const H  = canvas.height / dpr
      ctx.clearRect(0, 0, W, H)

      // 全体フェードイン (ease-out)
      const fadeT = Math.min(1, t / FADE_IN)
      const globalFade = 1 - Math.pow(1 - fadeT, 3)

      ctx.font         = lang === 'en'
        ? `400 ${FONT_SIZE}px "Inter","Helvetica Neue",sans-serif`
        : `400 ${FONT_SIZE}px "Noto Sans JP","Hiragino Sans",sans-serif`
      ctx.fillStyle    = COLOR
      ctx.textBaseline = 'middle'

      let iconX = W * 0.74
      let iconY = H * 0.52

      const logoEls = document.querySelectorAll('.hero-logo-target')
      const logoEl = Array.from(logoEls).find(el => {
        const rect = el.getBoundingClientRect()
        return rect.width > 0 && rect.height > 0
      })

      if (logoEl) {
        const canvasRect = canvas.getBoundingClientRect()
        const logoRect = logoEl.getBoundingClientRect()
        iconX = logoRect.left - canvasRect.left + logoRect.width / 2
        iconY = logoRect.top - canvasRect.top + logoRect.height / 2
      }

      // ===================== 軌道（アイコン周りに纏わり付く） =====================
      for (const o of ORBITS) {
        const circumference = 2 * Math.PI * Math.sqrt((o.rx * o.rx + o.ry * o.ry) / 2)
        // 文字をリング全周に並べる。density で間引いて軽やかに
        let charsPerLap = Math.floor(circumference / (totalWidth / TEXT.length) * o.density)
        if (charsPerLap < 16) charsPerLap = 16
        const angleStep = (2 * Math.PI) / charsPerLap

        for (let k = 0; k < charsPerLap; k++) {
          const seq = o.reverseText ? -k : k
          const idx = ((seq % TEXT.length) + TEXT.length) % TEXT.length
          const ch = TEXT[idx]
          if (ch === ' ' || ch === '　') continue

          const theta = o.phase + o.dir * t * o.speed + k * angleStep

          // 楕円位置
          const ex = o.rx * Math.cos(theta)
          const ey = o.ry * Math.sin(theta)
          const cos = Math.cos(o.tilt)
          const sin = Math.sin(o.tilt)
          const px = iconX + ex * cos - ey * sin
          const py = iconY + ex * sin + ey * cos

          // tangent
          const dx_dt = -o.rx * Math.sin(theta) * o.dir
          const dy_dt =  o.ry * Math.cos(theta) * o.dir
          const tx = dx_dt * cos - dy_dt * sin
          const ty = dx_dt * sin + dy_dt * cos
          const angle = Math.atan2(ty, tx)

          // 手前/奥の濃淡（楕円のy座標で擬似的に。下半身=手前と仮定）
          const front = (Math.sin(theta + o.tilt) + 1) / 2 // 0..1
          const depthAlpha = 0.35 + 0.65 * front

          // アイコン本体に被らないよう内側を空ける
          const distFromIcon = Math.sqrt((px - iconX) ** 2 + (py - iconY) ** 2)
          if (distFromIcon < 105) continue

          ctx.save()
          ctx.globalAlpha = 0.72 * depthAlpha * globalFade
          ctx.translate(px, py)
          ctx.rotate(angle)
          ctx.fillText(ch, -widths[idx] / 2, 0)
          ctx.restore()
        }
      }

      ctx.globalAlpha = 1
      raf = requestAnimationFrame(frame)
    }

    raf = requestAnimationFrame(frame)
    return () => { cancelAnimationFrame(raf); ro.disconnect() }
  }, [lang, audience])

  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none" />
}
