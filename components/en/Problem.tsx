import Image from "next/image";

const beforeItems = [
  { name: "Zoom AI Companion", price: "+ $15/mo" },
  { name: "Microsoft Teams Copilot", price: "+ $30/mo" },
  { name: "Google Meet AI", price: "+ $10/mo" },
  { name: "Notta / Plaud etc.", price: "+ $15/mo" },
];

export function Problem() {
  return (
    <section className="section" id="problem">
      <div className="container-x">
        <div className="max-w-[760px]">
          <span className="eyebrow">The Problem</span>
          <h2 className="mt-4 text-3xl md:text-[42px] font-bold tracking-tight leading-tight">
            How many AI subscriptions<br className="md:hidden" /> <span className="gradient-text">are you paying for</span> just to get notes?
          </h2>
          <p className="mt-6 muted leading-[1.95]">
            Paying for an AI add-on for every single meeting tool you use? You might be spending nearly $70 a month spread across multiple services just for transcription. And worse, your data is siloed on different servers, making it impossible to search across everything.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-5">
          {/* Before */}
          <div className="card p-8 md:p-10 flex flex-col">
            <div className="text-xs font-mono-num tracking-widest uppercase text-[#5e5e6a]">Before</div>
            <h3 className="mt-3 text-xl font-semibold">Scattered costs and data</h3>

            <ul className="mt-7 space-y-0 flex-1">
              {beforeItems.map((it) => (
                <li key={it.name} className="flex items-center justify-between text-[14.5px] py-3 border-b border-line">
                  <span className="text-[#ececef]/90">{it.name}</span>
                  <span className="font-mono-num muted">{it.price}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 pt-6 border-t border-line-strong flex items-baseline justify-between gap-3">
              <span className="font-semibold">Total</span>
              <div className="text-right">
                <span className="font-mono-num text-2xl text-[#ececef]">$70/mo</span>
                <div className="mt-1 text-[12px] dim">Spread across multiple services</div>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="card-strong p-8 md:p-10 relative overflow-hidden flex flex-col">
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_85%_0%,rgba(139,92,246,0.08),transparent_55%)]" />
            <div className="relative flex-1">
              <div className="text-xs font-mono-num tracking-widest uppercase text-[#a78bfa]">After</div>
              <h3 className="mt-3 text-xl font-semibold">Consolidated into Reki</h3>

              <div className="mt-7 flex items-center gap-3">
                <Image src="/logo.png" alt="" width={32} height={32} className="rounded-md" />
                <span className="font-semibold text-lg">Reki note</span>
              </div>
              <p className="mt-3 text-[14.5px] muted">
                Zoom / Meet / Teams / In-person all supported
              </p>

              <ul className="mt-8 space-y-3 text-[14.5px]">
                <li className="flex gap-3"><span className="text-[#a78bfa]">✓</span><span>Record everything with one app</span></li>
                <li className="flex gap-3"><span className="text-[#a78bfa]">✓</span><span>Data stays securely on your Mac</span></li>
                <li className="flex gap-3"><span className="text-[#a78bfa]">✓</span><span>Ask AI questions across all notes</span></li>
                <li className="flex gap-3"><span className="text-[#a78bfa]">✓</span><span>Bring your own API key. No extra fees.</span></li>
              </ul>
            </div>
            <div className="relative mt-8 pt-6 border-t border-line-strong flex items-baseline justify-between gap-3">
              <span className="font-semibold">Total</span>
              <div className="text-right">
                <span className="font-mono-num text-2xl gradient-text font-bold">$0/mo~</span>
                <div className="mt-1 text-[12px] dim">Set your own API key</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
