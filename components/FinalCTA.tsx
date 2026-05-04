"use client";

import * as React from "react";
import { supabase } from "@/lib/supabase";
import type { DictFinalCTA } from "@/dictionaries/types";
import { MeetingHomePreview } from "@/components/MeetingHomePreview";

export function FinalCTA({ dict }: { dict: DictFinalCTA }) {
  const [email, setEmail] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [submitted, setSubmitted] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setError("");

    try {
      const { error: submitError } = await supabase
        .from("waitlist")
        .insert([{ email }]);

      if (submitError) {
        if (submitError.code === "23505") {
          setError(dict.errorDuplicate);
        } else {
          throw submitError;
        }
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
      setError(dict.errorGeneral);
    } finally {
      setLoading(false);
    }
  };

  const titleLines = dict.title.split('\n');

  return (
    <section className="section relative overflow-hidden" id="download">
      <div className="container-x relative">
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #3b1a8a 0%, #5a2fc2 50%, #7c3aed 100%)",
          }}
        >
          {/* テクスチャ */}
          <div className="absolute inset-0 pointer-events-none opacity-30"
               style={{ background: "radial-gradient(circle at 80% 20%, rgba(255,255,255,0.25), transparent 50%)" }} />

          <div className="relative grid md:grid-cols-[0.9fr_1.1fr] items-center">
            {/* 左: テキスト + フォーム */}
            <div className="px-8 md:px-16 pt-16 md:pt-20 pb-10 md:pb-16 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-3xl md:text-[40px] font-bold tracking-tight leading-[1.3] text-white">
                  {titleLines[0]}<br />{titleLines[1]}
                </h2>
                <p className="mt-5 text-white/85 leading-[1.95] text-[15px] max-w-[420px]">
                  {dict.desc}
                </p>
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 items-center text-[13px]">
                  <span className="flex items-center gap-2 text-white/95">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M17.05 12.04c-.03-2.95 2.41-4.37 2.52-4.44-1.37-2.01-3.51-2.28-4.27-2.31-1.81-.18-3.55 1.07-4.48 1.07-.94 0-2.36-1.05-3.88-1.02-2 .03-3.84 1.16-4.87 2.95-2.08 3.61-.53 8.95 1.49 11.88.99 1.43 2.16 3.04 3.69 2.98 1.49-.06 2.05-.96 3.85-.96 1.79 0 2.3.96 3.87.93 1.6-.03 2.61-1.46 3.59-2.9 1.13-1.66 1.6-3.27 1.62-3.36-.04-.01-3.1-1.19-3.13-4.72zM14.13 4.5c.82-.99 1.37-2.37 1.22-3.74-1.18.05-2.62.79-3.46 1.78-.76.88-1.42 2.28-1.24 3.63 1.32.1 2.66-.67 3.48-1.67z"/>
                    </svg>
                    <span>Mac <span className="text-white/70">{dict.macSub}</span></span>
                  </span>
                  <span className="flex items-center gap-2 text-white/70">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M3 5.5 11 4v7.5H3V5.5zM12 3.85 21 3v8.5h-9V3.85zM3 12.5h8V20l-8-1.4v-6.1zM12 12.5h9V21l-9-1.3v-7.2z"/>
                    </svg>
                    <span>Windows <span className="text-white/55">{dict.winSub}</span></span>
                  </span>
                </div>
              </div>
              
              {/* フォーム: 左下 */}
              <div className="mt-10 max-w-[560px]">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <div className="relative w-full sm:w-auto flex-1">
                      <svg
                        aria-hidden="true"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-white/45"
                      >
                        <path
                          d="M4 7h16v10H4z"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="m4 8 8 6 8-6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <input
                        type="email"
                        required
                        placeholder={dict.placeholder}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={loading}
                        className="w-full rounded-lg border border-white/20 bg-white/10 py-3.5 pl-12 pr-5 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 sm:w-auto"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-white text-[#3b1a8a] hover:bg-white/95 font-semibold px-6 py-3.5 rounded-lg text-center transition-all duration-180 shadow-lg shadow-black/10 hover:-translate-y-px disabled:opacity-70 disabled:hover:translate-y-0 flex-shrink-0"
                    >
                      {loading ? dict.btnLoading : dict.btnDefault}
                    </button>
                  </form>
                ) : (
                  <div className="bg-white/10 border border-white/20 rounded-lg p-5">
                    <p className="text-white font-medium flex items-center gap-2">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-green-400">
                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {dict.successTitle}
                    </p>
                    <p className="text-white/70 text-sm mt-1">
                      {dict.successDesc}
                    </p>
                  </div>
                )}
                {error && <p className="text-[#ffb3b3] text-sm mt-2">{error}</p>}
              </div>
            </div>

            {/* 右: 実装したホーム画面プレビュー */}
            <div className="flex items-center justify-center overflow-hidden px-6 pb-10 md:self-stretch md:px-8 md:py-8">
              <div className="w-full max-w-[520px] md:w-full md:max-w-[520px] lg:translate-x-4 lg:translate-y-6">
                <MeetingHomePreview dict={dict.preview} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
