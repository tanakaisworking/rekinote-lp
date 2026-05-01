'use client';

import { ReactNode, useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { DictFeatures, DictMemoryItem } from "@/dictionaries/types";

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

const opacities = [1, 0.85, 0.65, 0.45, 0.28];

export function Features({ dict }: { dict: DictFeatures }) {
  const NotificationMock = () => (
    <div className="card-strong p-6 max-w-[420px] notification-pop">
      <div className="flex items-center gap-2 text-xs muted">
        <span className="w-2 h-2 rounded-full bg-[#a78bfa]" />
        <span>NOTIFICATION</span>
      </div>
      <div className="mt-4 flex items-start gap-3">
        <span className="w-2 h-2 mt-2 rounded-full bg-[#a78bfa] animate-pulse" />
        <div className="text-[15px] font-medium">{dict.notificationTitle}</div>
      </div>
      <div className="mt-4 space-y-2 text-sm">
        <div className="flex justify-between"><span className="muted">{dict.notificationApp}</span><span>Zoom Meeting</span></div>
        <div className="flex justify-between"><span className="muted">{dict.notificationCalendar}</span><span>{dict.notificationCalendarValue}</span></div>
      </div>
      <button className="mt-5 w-full btn-primary !py-2.5 text-sm">{dict.notificationBtn}</button>
    </div>
  );

  const ChatMock = () => (
    <div className="card p-6 max-w-[460px] space-y-4">
      <div className="flex justify-end">
        <div className="bg-[#1f1f29] rounded-2xl rounded-tr-sm px-4 py-3 text-sm max-w-[78%]">
          {dict.chatQuestion}
        </div>
      </div>
      <div className="flex">
        <div className="rotating-border max-w-[88%] rounded-2xl rounded-tl-sm">
          <div className="bg-surface-2 rounded-[16px] rounded-tl-[2px] px-4 py-3.5 text-[13.5px] leading-relaxed">
            <div className="mb-2 text-[#a78bfa] text-xs font-mono-num">{dict.chatAnswerLabel}</div>
            {dict.chatAnswer.split('\n').map((line: string, i: number) => (
              <span key={i}>{line}{i < dict.chatAnswer.split('\n').length - 1 && <br />}</span>
            ))}
            <div className="mt-3 pt-3 border-t border-line text-xs dim font-mono-num">
              {dict.chatSource}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const MemoryMock = () => {
    const baseRecords = dict.memoryItems;
    const uidRef = useRef(baseRecords.length);
    const nextIdxRef = useRef(baseRecords.length - 1);
    const [items, setItems] = useState(() =>
      baseRecords.map((r: DictMemoryItem, i: number) => ({ ...r, uid: i }))
    );
    useEffect(() => {
      const timer = setInterval(() => {
        const idx = nextIdxRef.current;
        nextIdxRef.current = (idx - 1 + baseRecords.length) % baseRecords.length;
        const newItem = { ...baseRecords[idx], uid: uidRef.current++ };
        setItems((prev) => [newItem, ...prev.slice(0, 4)]);
      }, 2000);
      return () => clearInterval(timer);
    }, [baseRecords]);

    return (
      <div className="card p-6 max-w-[460px] relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none"
             style={{ background: "radial-gradient(circle at 100% 0%, rgba(139,92,246,0.10), transparent 60%)" }} />
        <div className="relative">
          <div className="flex items-center justify-between mb-5">
            <div className="text-xs muted font-mono-num tracking-widest">{dict.memoryLabel}</div>
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

  return (
    <section className="section" id="features">
      <div className="container-x">
        <div className="max-w-[760px] mb-20">
          <span className="eyebrow">{dict.eyebrow}</span>
          <h2 className="mt-4 text-3xl md:text-[42px] font-bold tracking-tight leading-tight">
            {dict.title1}<span className="gradient-text">{dict.title2}</span>
          </h2>
        </div>

        <div className="space-y-28 md:space-y-36">
          <Row num={dict.rows[0].num} phase={dict.rows[0].phase} title={dict.rows[0].title} body={dict.rows[0].body} mock={<NotificationMock />} />
          <Row num={dict.rows[1].num} phase={dict.rows[1].phase} title={dict.rows[1].title} body={dict.rows[1].body} mock={<ChatMock />} reverse />
          <Row num={dict.rows[2].num} phase={dict.rows[2].phase} title={dict.rows[2].title} body={dict.rows[2].body} mock={<MemoryMock />} />
        </div>
      </div>
    </section>
  );
}
