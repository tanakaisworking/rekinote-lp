import type { ReactNode } from "react";

// Lucide icons (ISC License — lucide.dev)
const UsersIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20" height="20" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round"
    className="opacity-90"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const MessagesSquareIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20" height="20" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2"
    strokeLinecap="round" strokeLinejoin="round"
    className="opacity-90"
  >
    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z" />
    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
  </svg>
);

function getIcon(app: { slug?: string | null; icon?: string | null; fallback?: string | null }): ReactNode {
  if (app.slug) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={`https://cdn.simpleicons.org/${app.slug}/ececef`}
        alt=""
        width={20}
        height={20}
        className="opacity-90"
      />
    );
  }
  if (app.icon === "users") return UsersIcon;
  if (app.icon === "messages") return MessagesSquareIcon;
  return app.fallback ?? null;
}

import type { DictWorksWith } from "@/dictionaries/types";

export function WorksWith({ dict }: { dict: DictWorksWith }) {
  return (
    <section className="section" id="works-with">
      <div className="container-x">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="eyebrow">{dict.eyebrow}</span>
            <h2 className="mt-4 text-3xl md:text-[40px] font-bold tracking-tight leading-[1.3]">
              {dict.title}
            </h2>
            <p className="mt-6 muted leading-[1.95] max-w-[440px]">
              {dict.desc}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {dict.apps.map((a) => (
              <div key={a.name} className="card p-4 flex flex-col items-center gap-2.5 hover:border-line-strong transition-colors duration-180">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/[0.06] border border-white/10 text-[#ececef] text-sm font-semibold">
                  {getIcon(a)}
                </div>
                <div className="text-[12px] muted text-center leading-tight">{a.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
