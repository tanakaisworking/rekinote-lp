import type { DictCompare } from "@/dictionaries/types";

function FaceIcon({ tone }: { tone: "good" | "soso" | "bad" }) {
  const palette = {
    good: {
      face: "bg-emerald-100 text-emerald-700 border-emerald-200",
      stroke: "#047857",
      mouth: "M8 12c.9 1.1 2 1.6 4 1.6s3.1-.5 4-1.6"
    },
    soso: {
      face: "bg-amber-100 text-amber-700 border-amber-200",
      stroke: "#b45309",
      mouth: "M8 12h8"
    },
    bad: {
      face: "bg-rose-100 text-rose-700 border-rose-200",
      stroke: "#be123c",
      mouth: "M8 13.4c.8-1.1 2-1.6 4-1.6s3.2.5 4 1.6"
    }
  } as const;

  const current = palette[tone];

  return (
    <span className={`compare-tone ${current.face}`} aria-hidden="true">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="8.5" stroke={current.stroke} strokeWidth="1.7" />
        <circle cx="9" cy="10" r="1" fill={current.stroke} />
        <circle cx="15" cy="10" r="1" fill={current.stroke} />
        <path d={current.mouth} stroke={current.stroke} strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    </span>
  );
}

function CompareCell({
  tone,
  text,
  emphasized = false,
}: {
  tone: "good" | "soso" | "bad";
  text: string;
  emphasized?: boolean;
}) {
  return (
    <div className="compare-cell">
      <FaceIcon tone={tone} />
      <span className={emphasized ? "compare-copy compare-copy--emphasized" : "compare-copy"}>{text}</span>
    </div>
  );
}

export function Compare({ dict }: { dict: DictCompare }) {
  return (
    <section className="section" id="compare">
      <div className="container-x">
        <div className="mb-10">
          <span className="eyebrow">{dict.eyebrow}</span>
          <h2 className="mt-4 text-3xl md:text-[42px] font-bold tracking-tight leading-tight">
            {dict.title1}<span className="gradient-text">{dict.title2}</span>
          </h2>
          <p className="mt-4 muted leading-[1.95]">
            {dict.desc}
          </p>
        </div>

        <div className="compare-card relative overflow-x-auto">
          <table className="compare relative min-w-[760px]">
            <colgroup>
              <col style={{ width: "26%" }} />
              <col style={{ width: "24.6667%" }} />
              <col style={{ width: "24.6667%" }} />
              <col style={{ width: "24.6667%" }} />
            </colgroup>
            <thead>
              <tr>
                <th className="w-[26%]">{dict.colFeature}</th>
                <th className="highlight highlight-top">
                  <span className="inline-flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa]" />
                    Reki note
                  </span>
                </th>
                <th>{dict.col2}</th>
                <th>{dict.col3}</th>
              </tr>
            </thead>
            <tbody>
              {dict.rows.map((r, index) => (
                <tr key={r.feature}>
                  <td className="muted">{r.feature}</td>
                  <td className={index === dict.rows.length - 1 ? "highlight highlight-bottom" : "highlight"}>
                    <CompareCell tone={r.reki.tone} text={r.reki.text} emphasized />
                  </td>
                  <td>
                    <CompareCell tone={r.otherAi.tone} text={r.otherAi.text} />
                  </td>
                  <td>
                    <CompareCell tone={r.notes.tone} text={r.notes.text} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 dim text-xs">{dict.footnote}</p>
      </div>
    </section>
  );
}
