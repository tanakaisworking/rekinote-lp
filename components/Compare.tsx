import type { DictCompare } from "@/dictionaries/types";

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
                <tr key={r[0]}>
                  <td className="muted">{r[0]}</td>
                  <td className={index === dict.rows.length - 1 ? "highlight highlight-bottom" : "highlight"}>
                    {r[1]}
                  </td>
                  <td>{r[2]}</td>
                  <td>{r[3]}</td>
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
