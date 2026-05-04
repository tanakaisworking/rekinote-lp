import Image from "next/image";
import type { DictProblem } from "@/dictionaries/types";

export function Problem({ dict }: { dict: DictProblem }) {
  const divider = dict.titleDivider ?? "、";

  return (
    <section className="section" id="problem">
      <div className="container-x">
        <div className="max-w-[760px]">
          <span className="eyebrow">{dict.eyebrow}</span>
          <h2 className="mt-4 text-3xl md:text-[42px] font-bold tracking-tight leading-tight">
            {dict.title1}
            <span className="md:hidden">{divider}<br /></span>
            <span className="hidden md:inline">{divider}</span>
            <span className="gradient-text">{dict.title2}</span>
            {dict.title3}
          </h2>
          <p className="mt-6 muted leading-[1.95]">
            {dict.desc}
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {/* Before */}
          <div className="card p-8 md:p-10 flex flex-col">
            <div className="text-xs font-mono-num tracking-widest uppercase text-[#5e5e6a]">{dict.before}</div>
            <h3 className="mt-3 text-xl font-semibold">{dict.beforeTitle}</h3>

            <ul className="mt-7 space-y-0 flex-1">
              {dict.beforeItems.map((it) => (
                <li key={it.name} className="flex items-center justify-between text-[14.5px] py-3 border-b border-line">
                  <span className="text-[#ececef]/90">{it.name}</span>
                  <span className="font-mono-num muted">{it.price}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-line-strong flex items-baseline justify-between gap-3">
              <span className="font-semibold">{dict.total}</span>
              <div className="text-right">
                <span className="font-mono-num text-2xl text-[#ececef]">{dict.beforeTotal}</span>
                <div className="mt-1 text-[12px] dim">{dict.beforeTotalDesc}</div>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="card-strong p-8 md:p-10 relative overflow-hidden flex flex-col">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_85%_0%,rgba(139,92,246,0.08),transparent_55%)]" />
            <div className="relative flex-1">
              <div className="text-xs font-mono-num tracking-widest uppercase text-[#a78bfa]">{dict.after}</div>
              <h3 className="mt-3 text-xl font-semibold">{dict.afterTitle}</h3>

              <div className="mt-7 flex items-center gap-3">
                <Image src="/logo.png" alt="" width={32} height={32} className="rounded-md" />
                <span className="font-semibold text-lg">Reki note</span>
              </div>
              <p className="mt-3 text-[14.5px] muted">
                {dict.afterDesc}
              </p>

              <ul className="mt-8 space-y-3 text-[14.5px]">
                {dict.afterItems.map((item) => (
                  <li key={item} className="flex gap-3"><span className="text-[#a78bfa]">✓</span><span>{item}</span></li>
                ))}
              </ul>
            </div>
            <div className="relative mt-8 pt-6 border-t border-line-strong flex items-baseline justify-between gap-3">
              <span className="font-semibold">{dict.total}</span>
              <div className="text-right">
                <span className="font-mono-num text-2xl gradient-text font-bold">{dict.afterTotal}</span>
                <div className="mt-1 text-[12px] dim">{dict.afterTotalDesc}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
