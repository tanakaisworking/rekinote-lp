const rows = [
  ["Supported Meeting Apps", "All Mac apps + In-person", "That platform only", "Major meeting apps only"],
  ["Pricing Model", "Bring your own API key", "Per platform", "Custom subscription"],
  ["Data Storage", "Your Mac", "Their servers", "Their servers"],
  ["Cross-meeting AI queries", "Query across all notes", "Not possible / Limited", "Single meeting summary only"],
  ["Export Format", "Markdown / Obsidian", "View in platform", "Limited export"],
  ["In-person recording", "Supported", "Not possible", "Limited"],
];

export function Compare() {
  return (
    <section className="section" id="compare">
      <div className="container-x">
        <div className="mb-10">
          <span className="eyebrow">Compare</span>
          <h2 className="mt-4 text-3xl md:text-[42px] font-bold tracking-tight leading-tight">
            What makes it different<br className="md:hidden" /> <span className="gradient-text">from other tools?</span>
          </h2>
          <p className="mt-4 muted leading-[1.95]">
            Reki note is open and local-first.
          </p>
        </div>

        <div className="card relative overflow-x-auto">
          {/* Reki列のハイライト枠 */}
          <div className="hidden md:block absolute top-0 bottom-0 left-[26%] w-[24.66%] pointer-events-none rounded-md"
               style={{
                 background: "linear-gradient(180deg, rgba(139,92,246,0.10) 0%, rgba(139,92,246,0.04) 100%)",
                 boxShadow: "inset 0 0 0 1px rgba(139,92,246,0.35)",
               }} />
          <table className="compare relative min-w-[760px]">
            <thead>
              <tr>
                <th className="w-[26%]">Features</th>
                <th className="highlight">
                  <span className="inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" />
                    Reki note
                  </span>
                </th>
                <th>Zoom AI / Teams Copilot</th>
                <th>Otter / tl;dv / Notta</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r[0]}>
                  <td className="muted">{r[0]}</td>
                  <td className="highlight">{r[1]}</td>
                  <td>{r[2]}</td>
                  <td>{r[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 dim text-xs">* Based on public information as of April 2026</p>
      </div>
    </section>
  );
}
