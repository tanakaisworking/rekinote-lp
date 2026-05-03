"use client";

import * as React from "react";
import type { ReactNode } from "react";

const BASE_WIDTH = 1040;
const BASE_HEIGHT = 588;

const sessions = [
  {
    title: "週次定例 / HIBACHI inc.",
    time: "今日 18:02〜18:47",
    app: "Zoom",
    attendees: "4",
    preview: "プロトタイプの納期は4/15。レビューはSlackで非同期進行。予算は社内承認済み。"
  },
  {
    title: "顧客MTG / ACME",
    time: "4/28 13:00〜13:38",
    app: "Google Meet",
    attendees: "3",
    preview: "導入初月は営業チームから開始。管理者向けの権限設計は次回詰める。"
  },
  {
    title: "1on1 / 田中さん",
    time: "4/25 11:00〜11:31",
    app: "対面",
    attendees: "2",
    preview: "採用広報よりも、まずはオンボーディング改善を優先する方針で合意。"
  }
];

const schedule = [
  { time: "09:30", title: "デイリー", status: "まもなく" },
  { time: "13:00", title: "顧客MTG", status: "Google Meet" },
  { time: "18:00", title: "週次定例", status: "Zoom" }
];

function SidebarIcon({
  children,
  active = false,
}: {
  children: ReactNode;
  active?: boolean;
}) {
  return <span className={`mc-side-icon${active ? " is-active" : ""}`}>{children}</span>;
}

export function MeetingHomePreview() {
  const shellRef = React.useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = React.useState(0.5);

  React.useEffect(() => {
    const element = shellRef.current;

    if (!element) {
      return;
    }

    const updateScale = (width: number) => {
      const nextScale = Math.min(width / BASE_WIDTH, 1);
      setScale(nextScale > 0 ? nextScale : 0.01);
    };

    updateScale(element.getBoundingClientRect().width);

    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];

      if (!entry) {
        return;
      }

      updateScale(entry.contentRect.width);
    });

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={shellRef}
      className="mc-shell"
      aria-label="Reki note home preview"
      style={{ height: `${BASE_HEIGHT * scale}px` }}
    >
      <div className="mc-scale-frame" style={{ transform: `scale(${scale})` }}>
        <div className="mc-window">
          <aside className="mc-sidebar">
            <div className="mc-drag" />

            <button className="mc-record">
              <span className="mc-record-mic">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 4a3 3 0 0 1 3 3v4a3 3 0 1 1-6 0V7a3 3 0 0 1 3-3Z" />
                  <path d="M6.5 10.5a5.5 5.5 0 0 0 11 0" />
                  <path d="M12 16v4" />
                </svg>
              </span>
              <span>
                <strong>録音を開始</strong>
                <small>今この瞬間から記録</small>
              </span>
            </button>

            <button className="mc-import">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 4v10" />
                <path d="m8 10 4 4 4-4" />
                <path d="M5 20h14" />
              </svg>
              音声をインポート
            </button>

            <div className="mc-panel">
              <div className="mc-panel-title">今日の予定</div>
              <div className="mc-schedule">
                {schedule.map((item) => (
                  <div key={item.time + item.title} className="mc-schedule-row">
                    <span className="mc-time">{item.time}</span>
                    <div>
                      <strong>{item.title}</strong>
                      <small>{item.status}</small>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="mc-home">
              <SidebarIcon active>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 11.5 12 5l8 6.5" />
                  <path d="M7 10.5V19h10v-8.5" />
                </svg>
              </SidebarIcon>
              ホーム
            </button>
          </aside>

          <main className="mc-main">
            <div className="mc-drag" />

            <div className="mc-main-inner">
              <div className="mc-header">
                <div>
                  <div className="mc-heading">ホーム</div>
                  <div className="mc-subheading">Mac上の会話を、全部ここに。</div>
                </div>
                <div className="mc-header-actions">
                  <button className="mc-icon-button" aria-label="account">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Z" />
                      <path d="M5 20a7 7 0 0 1 14 0" />
                    </svg>
                  </button>
                  <button className="mc-icon-button" aria-label="settings">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 8.8a3.2 3.2 0 1 0 3.2 3.2A3.2 3.2 0 0 0 12 8.8Z" />
                      <path d="M19.4 15a1 1 0 0 0 .2 1.1l.1.1a1.2 1.2 0 0 1 0 1.7l-1.2 1.2a1.2 1.2 0 0 1-1.7 0l-.1-.1a1 1 0 0 0-1.1-.2 1 1 0 0 0-.6.9V20a1.2 1.2 0 0 1-1.2 1.2h-1.7A1.2 1.2 0 0 1 10 20v-.2a1 1 0 0 0-.6-.9 1 1 0 0 0-1.1.2l-.1.1a1.2 1.2 0 0 1-1.7 0l-1.2-1.2a1.2 1.2 0 0 1 0-1.7l.1-.1A1 1 0 0 0 5 15a1 1 0 0 0-.9-.6H4a1.2 1.2 0 0 1-1.2-1.2v-1.7A1.2 1.2 0 0 1 4 10h.2A1 1 0 0 0 5 9.4a1 1 0 0 0-.2-1.1l-.1-.1a1.2 1.2 0 0 1 0-1.7l1.2-1.2a1.2 1.2 0 0 1 1.7 0l.1.1A1 1 0 0 0 8.8 5a1 1 0 0 0 .6-.9V4A1.2 1.2 0 0 1 10.6 2.8h1.7A1.2 1.2 0 0 1 13.5 4v.2a1 1 0 0 0 .6.9 1 1 0 0 0 1.1-.2l.1-.1a1.2 1.2 0 0 1 1.7 0l1.2 1.2a1.2 1.2 0 0 1 0 1.7l-.1.1A1 1 0 0 0 18.9 9a1 1 0 0 0 .9.6h.2a1.2 1.2 0 0 1 1.2 1.2v1.7a1.2 1.2 0 0 1-1.2 1.2h-.2a1 1 0 0 0-.9.6Z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="mc-searchbar">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="11" cy="11" r="6.5" />
                  <path d="m16 16 4 4" />
                </svg>
                <span className="mc-search-placeholder">議事録を検索</span>
                <span className="mc-filter-pill">今日</span>
                <span className="mc-filter-pill">新しい順</span>
                <span className="mc-filter-pill">30分以内</span>
              </div>

              <div className="mc-session-list">
                {sessions.map((session, index) => (
                  <article key={session.title} className={`mc-session-card${index === 0 ? " is-featured" : ""}`}>
                    <div className="mc-session-head">
                      <div className="mc-session-title">{session.title}</div>
                      <div className="mc-statuses">
                        <span className="mc-status mc-status-transcript" aria-label="transcript">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <path d="M7 4h8l4 4v12H7z" />
                            <path d="M15 4v4h4" />
                            <path d="M10 12h6M10 16h6" />
                          </svg>
                        </span>
                        <span className="mc-status mc-status-minutes" aria-label="minutes">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <path d="M8 4h8l4 4v12H8z" />
                            <path d="M16 4v4h4" />
                            <path d="m10 15 2 2 4-4" />
                          </svg>
                        </span>
                      </div>
                    </div>
                    <div className="mc-meta">
                      <span>{session.time}</span>
                      <span>· {session.app}</span>
                      <span>· {session.attendees}人</span>
                    </div>
                    <p>{session.preview}</p>
                  </article>
                ))}
              </div>

              <div className="mc-ai-card">
                <div className="mc-ai-top">
                  <span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M12 3 9.5 9.5 3 12l6.5 2.5L12 21l2.5-6.5L21 12l-6.5-2.5Z" />
                    </svg>
                    Ask Reki
                  </span>
                  <span className="mc-ai-link">ルームに入る</span>
                </div>
                <div className="mc-ai-input">
                  <span>先週の田中さんとの決定事項は？</span>
                  <button aria-label="send">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M4 12h12" />
                      <path d="m12 6 6 6-6 6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className="mc-interaction-shield" aria-hidden="true" />
    </div>
  );
}
