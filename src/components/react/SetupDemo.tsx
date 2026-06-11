import * as React from "react";

type Lang = "ja" | "en" | "ko" | "zh-tw";

const SCRIPT: Record<Lang, string[]> = {
  ja: [
    "この音声は、Reki noteのセットアップデモです。",
    "この音声が聞こえていれば、スピーカーは正常に動作しています。",
    "次に、下のボタンからマイクをオンにしてください。",
    "マイクに向かって何か話すと、音声レベルが反応します。",
    "両方が確認できれば、セットアップは完了です。",
  ],
  en: [
    "This is a Reki note setup demo.",
    "If you can hear this, your speakers are working.",
    "Next, turn on your microphone with the button below.",
    "Speak into your mic and watch the audio level respond.",
    "If both work, your setup is complete.",
  ],
  ko: [
    "이 음성은 Reki note 설정 데모입니다.",
    "이 음성이 들리면 스피커가 정상적으로 작동하고 있습니다.",
    "다음으로 아래 버튼을 눌러 마이크를 켜주세요.",
    "마이크에 대고 말하면 오디오 레벨이 반응합니다.",
    "둘 다 확인되면 설정이 완료됩니다.",
  ],
  "zh-tw": [
    "這是 Reki note 的設定示範。",
    "如果你聽得到這段語音，表示喇叭運作正常。",
    "接下來，請點擊下方按鈕開啟麥克風。",
    "對著麥克風說話，觀察音量指示的反應。",
    "兩項都確認完成後，設定就完成了。",
  ],
};

const UI: Record<
  Lang,
  {
    backToLP: string;
    setupDemo: string;
    setupDesc: string;
    rekiSetup: string;
    ttsUnsupported: string;
    play: string;
    playing: string;
    replay: string;
    scriptLabel: string;
    micTest: string;
    listening: string;
    turnOnMic: string;
    micDenied: string;
    inputLevel: string;
    transcriptionPreview: string;
    speakIntoMic: string;
    speakersOK: string;
    micOK: string;
    setupComplete: string;
    readyToStart: string;
    privacyNote: string;
  }
> = {
  ja: {
    backToLP: "LPに戻る",
    setupDemo: "セットアップデモ",
    setupDesc:
      "スピーカーとマイクの動作を確認して、Reki noteを使い始める準備をしましょう。",
    rekiSetup: "Reki note セットアップ",
    ttsUnsupported: "このブラウザは音声合成に対応していません",
    play: "▶  再生する",
    playing: "再生中…",
    replay: "↻  もう一度",
    scriptLabel: "読み上げテキスト",
    micTest: "マイクテスト",
    listening: "検出中",
    turnOnMic: "マイクをオンにする",
    micDenied:
      "マイクの権限が拒否されました。ブラウザ設定から許可してください。",
    inputLevel: "入力レベル",
    transcriptionPreview: "文字起こしプレビュー",
    speakIntoMic:
      "マイクに向かって話すと、ここに文字起こしが表示されます",
    speakersOK: "スピーカー OK",
    micOK: "マイク OK",
    setupComplete: "セットアップ完了",
    readyToStart: "Reki noteを使い始める準備が整いました。",
    privacyNote:
      "このページは音声データを保存しません。文字起こしプレビューにはブラウザの音声認識APIを使用しています。",
  },
  en: {
    backToLP: "Back to LP",
    setupDemo: "Setup Demo",
    setupDesc: "Verify your speakers and microphone before using Reki note.",
    rekiSetup: "Reki note Setup",
    ttsUnsupported: "Speech synthesis not supported",
    play: "▶  Play",
    playing: "Playing…",
    replay: "↻  Replay",
    scriptLabel: "Script",
    micTest: "Microphone Test",
    listening: "Listening",
    turnOnMic: "Turn on microphone",
    micDenied:
      "Microphone permission denied. Please allow it in browser settings.",
    inputLevel: "Input Level",
    transcriptionPreview: "Transcription Preview",
    speakIntoMic:
      "Speak into your mic and the transcript will appear here",
    speakersOK: "Speakers OK",
    micOK: "Mic OK",
    setupComplete: "Setup Complete",
    readyToStart: "You're ready to start using Reki note.",
    privacyNote:
      "This page does not store audio data. Transcription preview uses your browser's speech recognition API.",
  },
  ko: {
    backToLP: "LP로 돌아가기",
    setupDemo: "설정 데모",
    setupDesc:
      "스피커와 마이크가 정상적으로 작동하는지 확인하고, Reki note를 사용할 준비를 해요.",
    rekiSetup: "Reki note 설정",
    ttsUnsupported: "이 브라우저는 음성 합성을 지원하지 않아요",
    play: "▶  재생하기",
    playing: "재생 중…",
    replay: "↻  다시 재생",
    scriptLabel: "읽어주는 텍스트",
    micTest: "마이크 테스트",
    listening: "감지 중",
    turnOnMic: "마이크 켜기",
    micDenied:
      "마이크 권한이 거부되었어요. 브라우저 설정에서 허용해 주세요.",
    inputLevel: "입력 레벨",
    transcriptionPreview: "받아쓰기 미리보기",
    speakIntoMic:
      "마이크에 대고 말하면 여기에 받아쓰기가 표시돼요",
    speakersOK: "스피커 OK",
    micOK: "마이크 OK",
    setupComplete: "설정 완료",
    readyToStart: "Reki note를 사용할 준비가 되었어요.",
    privacyNote:
      "이 페이지는 음성 데이터를 저장하지 않아요. 받아쓰기 미리보기에는 브라우저의 음성 인식 API를 사용해요.",
  },
  "zh-tw": {
    backToLP: "返回 LP",
    setupDemo: "設定示範",
    setupDesc:
      "確認喇叭和麥克風是否正常運作，準備好開始使用 Reki note。",
    rekiSetup: "Reki note 設定",
    ttsUnsupported: "此瀏覽器不支援語音合成",
    play: "▶  播放",
    playing: "播放中…",
    replay: "↻  重新播放",
    scriptLabel: "朗讀文字",
    micTest: "麥克風測試",
    listening: "偵測中",
    turnOnMic: "開啟麥克風",
    micDenied:
      "麥克風權限被拒絕了。請在瀏覽器設定中允許使用。",
    inputLevel: "輸入音量",
    transcriptionPreview: "語音轉文字預覽",
    speakIntoMic:
      "對著麥克風說話，轉錄文字會顯示在這裡",
    speakersOK: "喇叭 OK",
    micOK: "麥克風 OK",
    setupComplete: "設定完成",
    readyToStart: "你已經準備好開始使用 Reki note 了。",
    privacyNote:
      "本頁面不會儲存音訊資料。語音轉文字預覽使用瀏覽器的語音辨識 API。",
  },
};

function EqBars({ active }: { active: boolean }) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const rafRef = React.useRef(0);

  React.useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const bars = Array.from(el.children) as HTMLDivElement[];

    if (!active) {
      bars.forEach((b) => {
        b.style.height = "6%";
        b.style.opacity = "0.12";
      });
      cancelAnimationFrame(rafRef.current);
      return;
    }

    const animate = () => {
      const t = Date.now() / 1000;
      bars.forEach((b, i) => {
        const h =
          15 +
          Math.sin(t * 4 + i * 0.5) * 25 +
          Math.sin(t * 7 + i * 0.8) * 15 +
          Math.random() * 8;
        b.style.height = `${Math.max(6, Math.min(85, h))}%`;
        b.style.opacity = `${0.35 + Math.sin(t * 3 + i * 0.4) * 0.2 + 0.15}`;
      });
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [active]);

  return (
    <div
      ref={containerRef}
      className="flex items-end justify-center gap-[3px]"
      style={{ height: 80 }}
    >
      {Array.from({ length: 28 }, (_, i) => (
        <div
          key={i}
          className="rounded-full"
          style={{
            width: 3,
            height: "6%",
            opacity: 0.12,
            background: "linear-gradient(to top, #6366f1, #a78bfa)",
            transition: "height 80ms ease, opacity 80ms ease",
          }}
        />
      ))}
    </div>
  );
}

const ttsLangMap: Record<Lang, string> = {
  ja: "ja-JP",
  en: "en-US",
  ko: "ko-KR",
  "zh-tw": "zh-TW",
};

export function SetupDemo({ lang }: { lang: Lang }) {
  const script = SCRIPT[lang];
  const ui = UI[lang];

  const [ttsState, setTtsState] = React.useState<
    "idle" | "playing" | "done"
  >("idle");
  const [sentenceIdx, setSentenceIdx] = React.useState(-1);
  const [ttsSupported, setTtsSupported] = React.useState(true);

  const [micState, setMicState] = React.useState<
    "idle" | "active" | "denied"
  >("idle");
  const [micLevel, setMicLevel] = React.useState(0);
  const streamRef = React.useRef<MediaStream | null>(null);
  const audioCtxRef = React.useRef<AudioContext | null>(null);
  const micRafRef = React.useRef(0);

  const [transcript, setTranscript] = React.useState("");
  const [interim, setInterim] = React.useState("");
  const [recognitionSupported, setRecognitionSupported] = React.useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const recognitionRef = React.useRef<any>(null);

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    setTtsSupported("speechSynthesis" in window);
    const SR =
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).SpeechRecognition ||
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).webkitSpeechRecognition;
    setRecognitionSupported(!!SR);
  }, []);

  React.useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
    const load = () => speechSynthesis.getVoices();
    load();
    speechSynthesis.addEventListener("voiceschanged", load);
    return () => speechSynthesis.removeEventListener("voiceschanged", load);
  }, []);

  const playTTS = React.useCallback(() => {
    if (!ttsSupported) return;
    speechSynthesis.cancel();

    const voices = speechSynthesis.getVoices();
    const prefix = lang.startsWith("zh") ? "zh" : lang.substring(0, 2);
    const voice =
      voices.find((v) => v.lang.startsWith(prefix)) ?? null;

    setTtsState("playing");

    let idx = 0;
    const speakNext = () => {
      if (idx >= script.length) {
        setTtsState("done");
        setSentenceIdx(script.length);
        return;
      }
      const u = new SpeechSynthesisUtterance(script[idx]);
      if (voice) u.voice = voice;
      u.lang = ttsLangMap[lang];
      u.rate = lang === "ja" ? 0.9 : 1.0;
      const ci = idx;
      u.onstart = () => setSentenceIdx(ci);
      u.onend = () => {
        idx++;
        speakNext();
      };
      u.onerror = () => {
        idx++;
        speakNext();
      };
      speechSynthesis.speak(u);
    };
    speakNext();
  }, [ttsSupported, lang, script]);

  const enableMic = React.useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });
      streamRef.current = stream;

      const ctx = new AudioContext();
      audioCtxRef.current = ctx;
      const source = ctx.createMediaStreamSource(stream);
      const analyser = ctx.createAnalyser();
      analyser.fftSize = 256;
      source.connect(analyser);

      setMicState("active");

      const data = new Uint8Array(analyser.frequencyBinCount);
      const tick = () => {
        analyser.getByteFrequencyData(data);
        let sum = 0;
        for (let i = 0; i < data.length; i++) sum += data[i];
        setMicLevel(sum / data.length / 255);
        micRafRef.current = requestAnimationFrame(tick);
      };
      tick();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const SR = (window as any).SpeechRecognition ||
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (window as any).webkitSpeechRecognition;
      if (SR) {
        const recognition = new SR();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = ttsLangMap[lang];

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        recognition.onresult = (event: any) => {
          let f = "";
          let im = "";
          for (let i = 0; i < event.results.length; i++) {
            const r = event.results[i];
            if (r.isFinal) {
              f += r[0].transcript;
            } else {
              im += r[0].transcript;
            }
          }
          setTranscript(f);
          setInterim(im);
        };
        recognition.onend = () => {
          if (streamRef.current?.active) {
            try {
              recognition.start();
            } catch {}
          }
        };
        recognition.start();
        recognitionRef.current = recognition;
      }
    } catch {
      setMicState("denied");
    }
  }, [lang]);

  React.useEffect(() => {
    return () => {
      if (
        typeof window !== "undefined" &&
        "speechSynthesis" in window
      ) {
        speechSynthesis.cancel();
      }
      cancelAnimationFrame(micRafRef.current);
      recognitionRef.current?.stop();
      streamRef.current?.getTracks().forEach((t) => t.stop());
      audioCtxRef.current?.close();
    };
  }, []);

  const speakerDone = ttsState === "done";
  const micActive = micState === "active";
  const setupComplete = speakerDone && micActive;

  return (
    <div className="min-h-screen bg-[#0c0c10] text-[#ececef]">
      <header className="sticky top-0 z-50 border-b border-[rgba(255,255,255,0.06)] bg-[rgba(12,12,16,0.85)] backdrop-blur-xl">
        <div className="container-x flex h-14 items-center justify-between px-6">
          <a
            href={`/${lang}/lp/`}
            className="flex items-center gap-2 text-sm text-[#8c8c97] transition-colors hover:text-[#ececef]"
          >
            <span>←</span>
            <span>{ui.backToLP}</span>
          </a>
          <span className="text-sm font-semibold tracking-tight">
            Reki note
          </span>
        </div>
      </header>

      <main className="container-x px-6 py-12 md:py-16">
        <div className="mx-auto max-w-2xl">
          <div className="mb-10 text-center">
            <p className="eyebrow">Setup</p>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {ui.setupDemo}
            </h1>
            <p className="mt-3 text-sm text-[#8c8c97] sm:text-base">
              {ui.setupDesc}
            </p>
          </div>

          <div className="card-strong overflow-hidden rounded-2xl">
            <div className="relative bg-[#08080c] px-6 py-10">
              <div
                className="pointer-events-none absolute inset-0 opacity-40"
                style={{
                  background:
                    "radial-gradient(circle at 50% 60%, rgba(99,102,241,0.15), transparent 70%)",
                }}
              />

              <div className="absolute left-5 top-4 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#a78bfa]" />
                <span className="text-xs font-medium text-[rgba(236,236,239,0.5)]">
                  {ui.rekiSetup}
                </span>
              </div>

              <div className="relative">
                {ttsState === "done" ? (
                  <div
                    className="flex items-center justify-center"
                    style={{ height: 80 }}
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[rgba(52,211,153,0.15)]">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#34d399"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                  </div>
                ) : (
                  <EqBars active={ttsState === "playing"} />
                )}
              </div>

              {ttsState === "playing" &&
                sentenceIdx >= 0 &&
                sentenceIdx < script.length && (
                  <p className="mt-6 text-center text-sm text-[rgba(236,236,239,0.8)]">
                    {script[sentenceIdx]}
                  </p>
                )}

              <div className="mt-6 flex justify-center">
                {!ttsSupported ? (
                  <p className="text-sm text-red-400">
                    {ui.ttsUnsupported}
                  </p>
                ) : (
                  <button
                    onClick={playTTS}
                    disabled={ttsState === "playing"}
                    className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
                      ttsState === "playing"
                        ? "cursor-default bg-[rgba(255,255,255,0.08)] text-[#ececef]"
                        : "bg-[#8b5cf6] text-white hover:bg-[#7c3aed]"
                    }`}
                  >
                    {ttsState === "idle" && ui.play}
                    {ttsState === "playing" && ui.playing}
                    {ttsState === "done" && ui.replay}
                  </button>
                )}
              </div>

              <div className="mt-4 flex gap-1">
                {script.map((_, i) => (
                  <div
                    key={i}
                    className="h-1 flex-1 rounded-full transition-colors duration-300"
                    style={{
                      background:
                        sentenceIdx > i
                          ? "#a78bfa"
                          : sentenceIdx === i
                            ? "rgba(167,139,250,0.5)"
                            : "rgba(255,255,255,0.08)",
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="border-t border-[rgba(255,255,255,0.06)] p-5">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[#8c8c97]">
                {ui.scriptLabel}
              </p>
              <div className="space-y-2">
                {script.map((s, i) => (
                  <div
                    key={i}
                    className={`flex items-start gap-2.5 text-sm transition-colors duration-300 ${
                      sentenceIdx > i
                        ? "text-[#ececef]"
                        : sentenceIdx === i
                          ? "text-[#c4b5fd]"
                          : "text-[#4a4a57]"
                    }`}
                  >
                    <span className="mt-0.5 flex-shrink-0 text-xs">
                      {sentenceIdx > i ? (
                        <span className="text-[#34d399]">✓</span>
                      ) : sentenceIdx === i ? (
                        <span className="text-[#a78bfa]">▸</span>
                      ) : (
                        <span className="text-[#3a3a44]">○</span>
                      )}
                    </span>
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 card-strong rounded-2xl p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[rgba(139,92,246,0.12)]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#a78bfa"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="22" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold">
                {ui.micTest}
              </h3>
              {micState === "active" && (
                <span className="ml-auto flex items-center gap-1.5 text-xs font-medium text-[#34d399]">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#34d399]" />
                  {ui.listening}
                </span>
              )}
            </div>

            {micState === "idle" && (
              <button onClick={enableMic} className="btn-primary w-full gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="22" />
                </svg>
                {ui.turnOnMic}
              </button>
            )}

            {micState === "denied" && (
              <div className="rounded-xl border border-[rgba(239,68,68,0.2)] bg-[rgba(239,68,68,0.08)] p-4">
                <p className="text-sm text-red-400">
                  {ui.micDenied}
                </p>
              </div>
            )}

            {micState === "active" && (
              <>
                <div className="mb-5">
                  <p className="mb-2 text-xs text-[#8c8c97]">
                    {ui.inputLevel}
                  </p>
                  <div className="h-3 overflow-hidden rounded-full bg-[rgba(255,255,255,0.06)]">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${Math.min(100, micLevel * 300)}%`,
                        background:
                          micLevel > 0.03
                            ? "linear-gradient(90deg, #34d399, #6ee7b7)"
                            : "rgba(255,255,255,0.12)",
                        transition: "width 60ms ease-out",
                      }}
                    />
                  </div>
                </div>

                {recognitionSupported && (
                  <div className="panel-inset rounded-xl p-4">
                    <p className="mb-2 text-xs text-[#8c8c97]">
                      {ui.transcriptionPreview}
                    </p>
                    {transcript || interim ? (
                      <p className="text-sm leading-relaxed">
                        {transcript}
                        {interim && (
                          <span className="text-[#8c8c97]">{interim}</span>
                        )}
                      </p>
                    ) : (
                      <p className="text-sm text-[#4a4a57]">
                        {ui.speakIntoMic}
                      </p>
                    )}
                  </div>
                )}
              </>
            )}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            {speakerDone && (
              <span className="flex items-center gap-2 text-sm text-[#34d399]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {ui.speakersOK}
              </span>
            )}
            {micActive && (
              <span className="flex items-center gap-2 text-sm text-[#34d399]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {ui.micOK}
              </span>
            )}
          </div>

          {setupComplete && (
            <div className="mt-4 text-center">
              <p className="text-lg font-semibold text-[#34d399]">
                {ui.setupComplete}
              </p>
              <p className="mt-1 text-sm text-[#8c8c97]">
                {ui.readyToStart}
              </p>
            </div>
          )}

          <p className="mt-8 text-center text-xs text-[#5e5e6a]">
            {ui.privacyNote}
          </p>
        </div>
      </main>
    </div>
  );
}
