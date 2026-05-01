'use client';

import { ReactNode, useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Row({
  num, phase, title, body, mock, reverse,
}: {
  num: string; phase: string; title: string; body: string; mock: ReactNode; reverse?: boolean;
}) {
  return (
    <div className={`grid md:grid-cols-2 gap-12 md:gap-16 items-center ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
      <div>
        <div className="font-mono-num text-xs tracking-widest text-[#a78bfa]">{num} — {phase}</div>
        <h3 className="mt-4 text-2xl md:text-[28px] font-bold tracking-tight leading-[1.4]">{title}</h3>
        <p className="mt-5 muted leading-[1.95]">{body}</p>
      </div>
      <div>{mock}</div>
    </div>
  );
}

const NotificationMock = () => (
  <div className="card-strong p-6 max-w-[420px] notification-pop">
    <div className="flex items-center gap-2 text-xs muted">
      <span className="w-2 h-2 rounded-full bg-[#a78bfa]" />
      <span>NOTIFICATION</span>
    </div>
    <div className="mt-4 flex items-start gap-3">
      <span className="w-2 h-2 mt-2 rounded-full bg-[#a78bfa] animate-pulse" />
      <div className="text-[15px] font-medium">Meeting detected</div>
    </div>
    <div className="mt-4 space-y-2 text-sm">
      <div className="flex justify-between"><span className="muted">App</span><span>Zoom Meeting</span></div>
      <div className="flex justify-between"><span className="muted">Calendar</span><span>Weekly Sync</span></div>
    </div>
    <button className="mt-5 w-full btn-primary !py-2.5 text-sm">Start Recording</button>
  </div>
);

const ChatMock = () => (
  <div className="card p-6 max-w-[460px] space-y-4">
    <div className="flex justify-end">
      <div className="bg-[#1f1f29] rounded-2xl rounded-tr-sm px-4 py-3 text-sm max-w-[78%]">
        What were the action items with Tanaka-san last week?
      </div>
    </div>
    <div className="flex">
      <div className="rotating-border max-w-[88%] rounded-2xl rounded-tl-sm">
        <div className="bg-surface-2 rounded-[16px] rounded-tl-[2px] px-4 py-3.5 text-[13.5px] leading-relaxed">
          <div className="mb-2 text-[#a78bfa] text-xs font-mono-num">ANSWER</div>
          Here are the 3 action items:<br/>
          1. Deliver the prototype by April 15th<br/>
          2. Review async via Slack<br/>
          3. Budget is approved internally
          <div className="mt-3 pt-3 border-t border-line text-xs dim font-mono-num">
            Source: Weekly Sync 4/8 18:02
          </div>
        </div>
      </div>
    </div>
  </div>
);

const baseRecords = [
  { date: "Today",    title: "Weekly Sync",             excerpt: "For next time..." },
  { date: "3d ago",   title: "Client MTG / HIBACHI",    excerpt: "Budget is roughly OK" },
  { date: "1w ago",   title: "1on1 / Tanaka-san",       excerpt: "Career discussion" },
  { date: "2w ago",   title: "Product Review",          excerpt: "Design direction finalized" },
  { date: "6mo ago",  title: "Q3 Kickoff",              excerpt: "Reasons for the goals" },
];

const opacities = [1, 0.85, 0.65, 0.45, 0.28];

const MemoryMock = () => {
  const uidRef     = useRef(baseRecords.length);
  const nextIdxRef = useRef(baseRecords.length - 1);

  const [items, setItems] = useState(() =>
    baseRecords.map((r, i) => ({ ...r, uid: i }))
  );

  useEffect(() => {
    const timer = setInterval(() => {
      const idx = nextIdxRef.current;
      nextIdxRef.current = (idx - 1 + baseRecords.length) % baseRecords.length;
      const newItem = { ...baseRecords[idx], uid: uidRef.current++ };
      setItems(prev => [newItem, ...prev.slice(0, 4)]);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="card p-6 max-w-[460px] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: "radial-gradient(circle at 100% 0%, rgba(139,92,246,0.10), transparent 60%)" }} />
      <div className="relative">
        <div className="flex items-center justify-between mb-5">
          <div className="text-xs muted font-mono-num tracking-widest">MEMORY</div>
        </div>
        <ul className="space-y-2 overflow-hidden">
          <AnimatePresence initial={false} mode="popLayout">
            {items.map((r, i) => (
              <motion.li
                key={r.uid}
                layout
                initial={{ opacity: 0, y: -28 }}
                animate={{ opacity: opacities[i], y: 0 }}
                exit={{ opacity: 0, y: 28 }}
                transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-3 px-3.5 py-2.5 rounded-lg border border-line bg-surface-2"
              >
                <div className="font-mono-num text-[10px] dim w-12 shrink-0">{r.date}</div>
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] truncate">{r.title}</div>
                  <div className="text-[11px] muted truncate">{r.excerpt}</div>
                </div>
                <span className="w-1.5 h-1.5 rounded-full bg-[#a78bfa] shrink-0" />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
};

export function Features() {
  return (
    <section className="section" id="features">
      <div className="container-x">
        <div className="max-w-[760px] mb-20">
          <span className="eyebrow">Benefits</span>
          <h2 className="mt-4 text-3xl md:text-[42px] font-bold tracking-tight leading-tight">
            What changes <span className="gradient-text">with Reki?</span>
          </h2>
        </div>

        <div className="space-y-28 md:space-y-36">
          <Row
            num="01" phase="Now ・ Soon"
            title="Consolidate notes, slim down costs."
            body="Zoom, Meet, Teams, Slack, or in-person—Reki detects and records all conversations on your Mac. From transcription to generating minutes, it's all handled in one app. Say goodbye to paying $70/month across multiple services and having your data scattered."
            mock={<NotificationMock />}
          />
          <Row
            num="02" phase="Weeks later ・ Mid-term" reverse
            title="Let Reki handle all your notes."
            body="Every call on your device transcribed. With all your conversation notes integrated into one place, Reki AI can answer any question you have about them."
            mock={<ChatMock />}
          />
          <Row
            num="03" phase="Long-term use"
            title="Your personalized 'Second Brain'."
            body="Why did we make that decision 6 months ago? What were the details of that meeting 3 years ago? Just ask the AI and get an instant answer. Your decision-making speed and accuracy will change fundamentally."
            mock={<MemoryMock />}
          />
        </div>
      </div>
    </section>
  );
}
