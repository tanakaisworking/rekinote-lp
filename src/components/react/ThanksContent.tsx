import * as React from "react";

const GAS_URL =
  "https://script.google.com/macros/s/AKfycbxFpi8Pue0SdA_gjp7BBbr5RZvXONAT90LEYQsQhZ74jPsyjvFHVJ6FsqxHJqsgeXfo3A/exec";

type FeedbackType = "request" | "bug";

type Dict = {
  title: string;
  desc: string;
  nextStepsTitle: string;
  steps: { title: string; desc: string }[];
  setupCta: string;
  tipsTitle: string;
  tips: string[];
  feedbackTitle: string;
  feedbackDesc: string;
  typeRequest: string;
  typeBug: string;
  requestPlaceholder: string;
  bugPlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  submit: string;
  sending: string;
  thanks: string;
  sendAnother: string;
  backToTop: string;
  error: string;
};

const dict: Record<string, Dict> = {
  ja: {
    title: "ダウンロードありがとうございます！",
    desc: "さっそく Reki note を使い始めましょう。下の3ステップで準備完了です。",
    nextStepsTitle: "次にやること",
    steps: [
      {
        title: "アプリをインストール",
        desc: "ダウンロードしたファイルを開き、画面の指示に沿って Reki note を起動します。",
      },
      {
        title: "マイクとスピーカーを確認",
        desc: "セットアップデモで、音声が聞こえるか・マイクが反応するかをチェック。1分で終わります。",
      },
      {
        title: "最初の会議を録音",
        desc: "Zoom・Meet・対面など会議が始まると自動で検出。ワンクリックで録音し、文字起こしから Reki AI への質問まで完結します。",
      },
    ],
    setupCta: "セットアップを確認する",
    tipsTitle: "使い方のヒント",
    tips: [
      "会議を検出すると通知が表示されます。「録音を開始」を押すだけ。",
      "Zoom / Meet / Teams / Slack / 対面 — すべて1つのアプリに集約。",
      "文字起こしは無制限で無料。過去の議事録を横断して AI に質問できます。",
    ],
    feedbackTitle: "お気づきの点・ご要望はありますか？",
    feedbackDesc: "不具合の報告や「こんな機能がほしい」など、お気づきの点があればお寄せください（任意）。",
    typeRequest: "ご要望",
    typeBug: "不具合の報告",
    requestPlaceholder: "「こんな機能がほしい」「ここが使いにくい」など自由にどうぞ",
    bugPlaceholder: "不具合の内容や再現手順を教えてください",
    emailLabel: "返信が必要な場合のみ。任意です。",
    emailPlaceholder: "メールアドレス（任意）",
    submit: "送信する",
    sending: "送信中...",
    thanks: "送信しました。ありがとうございます！",
    sendAnother: "続けて送る",
    backToTop: "トップに戻る",
    error: "送信に失敗しました。時間をおいて再度お試しください。",
  },
  en: {
    title: "Thanks for downloading!",
    desc: "Let's get you started with Reki note. Three quick steps and you're ready.",
    nextStepsTitle: "Next steps",
    steps: [
      {
        title: "Install the app",
        desc: "Open the file you downloaded and follow the on-screen steps to launch Reki note.",
      },
      {
        title: "Check your mic & speakers",
        desc: "Use the setup demo to confirm you can hear audio and your mic responds. Takes about a minute.",
      },
      {
        title: "Record your first meeting",
        desc: "Reki note auto-detects meetings on Zoom, Meet, in-person and more. One click to record, transcribe, and ask Reki AI anything.",
      },
    ],
    setupCta: "Run the setup check",
    tipsTitle: "Tips",
    tips: [
      "When a meeting is detected, a notification appears — just hit \"Start recording.\"",
      "Zoom / Meet / Teams / Slack / in-person — all in one app.",
      "Transcription is free and unlimited. Ask AI across all your past notes.",
    ],
    feedbackTitle: "Anything you noticed or want?",
    feedbackDesc: "Report a bug or request a feature — let us know if anything comes to mind (optional).",
    typeRequest: "Request",
    typeBug: "Bug report",
    requestPlaceholder: "Features you'd like, things that feel hard to use, anything goes",
    bugPlaceholder: "Describe the issue or how to reproduce it",
    emailLabel: "Only if you'd like a reply. Optional.",
    emailPlaceholder: "Email (optional)",
    submit: "Send",
    sending: "Sending...",
    thanks: "Sent. Thank you!",
    sendAnother: "Send another",
    backToTop: "Back to top",
    error: "Failed to send. Please try again later.",
  },
  ko: {
    title: "다운로드해 주셔서 감사합니다!",
    desc: "이제 Reki note를 시작해 볼까요. 아래 3단계면 준비 완료입니다.",
    nextStepsTitle: "다음 단계",
    steps: [
      {
        title: "앱 설치하기",
        desc: "다운로드한 파일을 열고 화면 안내에 따라 Reki note를 실행하세요.",
      },
      {
        title: "마이크와 스피커 확인",
        desc: "설정 데모에서 소리가 들리는지, 마이크가 반응하는지 확인하세요. 1분이면 끝납니다.",
      },
      {
        title: "첫 회의 녹음하기",
        desc: "Zoom·Meet·대면 등 회의가 시작되면 자동으로 감지합니다. 클릭 한 번으로 녹음하고, 전사부터 Reki AI 질문까지 완료됩니다.",
      },
    ],
    setupCta: "설정 확인하기",
    tipsTitle: "사용 팁",
    tips: [
      "회의가 감지되면 알림이 표시됩니다. \"녹음 시작\"을 누르기만 하면 됩니다.",
      "Zoom / Meet / Teams / Slack / 대면 — 모두 하나의 앱에 통합.",
      "전사는 무제한 무료. 과거 회의록을 넘나들며 AI에게 질문할 수 있습니다.",
    ],
    feedbackTitle: "느낀 점이나 바라는 점이 있나요?",
    feedbackDesc: "버그 신고나 \"이런 기능이 있으면\" 등 떠오른 점이 있으면 알려주세요 (선택).",
    typeRequest: "요청",
    typeBug: "버그 신고",
    requestPlaceholder: "원하는 기능, 불편한 점 등 자유롭게 작성해 주세요",
    bugPlaceholder: "문제 내용이나 재현 방법을 알려주세요",
    emailLabel: "답변이 필요한 경우에만 입력해 주세요. 선택 사항입니다.",
    emailPlaceholder: "이메일 (선택)",
    submit: "보내기",
    sending: "전송 중...",
    thanks: "전송되었습니다. 감사합니다!",
    sendAnother: "계속 보내기",
    backToTop: "메인으로 돌아가기",
    error: "전송에 실패했습니다. 잠시 후 다시 시도해 주세요.",
  },
  "zh-tw": {
    title: "感謝你的下載！",
    desc: "馬上開始使用 Reki note 吧。完成下方三個步驟就準備就緒。",
    nextStepsTitle: "接下來",
    steps: [
      {
        title: "安裝應用程式",
        desc: "開啟下載的檔案，依照畫面指示啟動 Reki note。",
      },
      {
        title: "確認麥克風與喇叭",
        desc: "透過設定示範，確認是否聽得到聲音、麥克風是否有反應。約一分鐘即可完成。",
      },
      {
        title: "錄製第一場會議",
        desc: "Zoom、Meet、面對面等會議開始時會自動偵測。一鍵錄音，從轉錄到向 Reki AI 提問一次完成。",
      },
    ],
    setupCta: "進行設定檢查",
    tipsTitle: "使用提示",
    tips: [
      "偵測到會議時會顯示通知，只要按下「開始錄音」即可。",
      "Zoom / Meet / Teams / Slack / 面對面 — 全部整合在一個應用程式。",
      "轉錄無限免費。可橫跨過去的會議記錄向 AI 提問。",
    ],
    feedbackTitle: "有任何想法或建議嗎？",
    feedbackDesc: "回報錯誤或「希望有這個功能」等，想到什麼都歡迎告訴我們（選填）。",
    typeRequest: "建議",
    typeBug: "錯誤回報",
    requestPlaceholder: "希望新增的功能、覺得不好用的地方等，請自由填寫",
    bugPlaceholder: "請描述問題內容或重現步驟",
    emailLabel: "僅在需要回覆時填寫，非必填。",
    emailPlaceholder: "電子郵件（選填）",
    submit: "送出",
    sending: "傳送中...",
    thanks: "已送出，非常感謝！",
    sendAnother: "繼續傳送",
    backToTop: "返回首頁",
    error: "傳送失敗，請稍後再試。",
  },
};

export function ThanksContent({ lang }: { lang: string }) {
  const t = dict[lang] ?? dict.en;

  const [type, setType] = React.useState<FeedbackType>("request");
  const [message, setMessage] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [sending, setSending] = React.useState(false);
  const [sent, setSent] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setSending(true);
    setError(null);
    try {
      const res = await fetch(GAS_URL, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          form_name: "reki_thanks_feedback",
          source_url: location.href,
          referrer: document.referrer || "",
          user_agent: navigator.userAgent,
          website: "",
          name: "",
          email: email.trim(),
          phone: "",
          company: "",
          message: message.trim(),
          category: type,
        }),
      });
      const json = await res.json();
      if (json.ok) {
        setSent(true);
        setMessage("");
        setEmail("");
      } else {
        throw new Error(json.error || "Unknown error");
      }
    } catch {
      setError(t.error);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a14] flex flex-col">
      <header className="border-b border-white/5">
        <div className="container-x px-6 py-4">
          <a href={`/${lang}/lp/`} className="flex items-center gap-2.5">
            <img src="/logo.png" alt="" width={24} height={24} className="rounded-md" />
            <span className="font-semibold tracking-tight text-white">Reki note</span>
          </a>
        </div>
      </header>

      <main className="flex-1 flex items-start justify-center px-4 py-16">
        <div className="w-full max-w-lg space-y-12">
          {/* ヒーロー */}
          <div className="text-center">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-600">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-8 h-8">
                <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white">{t.title}</h1>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">{t.desc}</p>
          </div>

          {/* 次のステップ（3ステップ） */}
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/40 mb-4">
              {t.nextStepsTitle}
            </h2>
            <ol className="space-y-3">
              {t.steps.map((step, i) => {
                const isSetupStep = i === 1;
                return (
                  <li
                    key={i}
                    className="flex gap-4 rounded-2xl border border-white/10 bg-[#1a1a2e] p-5"
                  >
                    <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-600 text-sm font-bold text-white">
                      {i + 1}
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                      <p className="mt-1 text-sm text-white/60 leading-relaxed">{step.desc}</p>
                      {isSetupStep && (
                        <a
                          href={`/${lang}/setup/`}
                          className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1.5 text-xs font-medium text-white hover:bg-white/15 transition-colors"
                        >
                          {t.setupCta}
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                            <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          </section>

          {/* 使い方のヒント */}
          <section>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-white/40 mb-4">
              {t.tipsTitle}
            </h2>
            <ul className="space-y-2.5 rounded-2xl border border-white/10 bg-[#1a1a2e] p-6">
              {t.tips.map((tip, i) => (
                <li key={i} className="flex gap-3 text-sm text-white/70 leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-violet-400" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* フィードバック（任意・下部） */}
          <section className="border-t border-white/5 pt-10">
            <h2 className="text-base font-semibold text-white">{t.feedbackTitle}</h2>
            <p className="mt-2 text-sm text-white/50 leading-relaxed">{t.feedbackDesc}</p>

            {sent ? (
              <div className="mt-5 space-y-4 rounded-2xl border border-white/10 bg-[#1a1a2e] p-6 text-center">
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-violet-600/20">
                  <svg viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2" className="w-5 h-5">
                    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-sm text-white/80">{t.thanks}</p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="text-xs font-medium text-violet-300 hover:text-violet-200 transition-colors"
                >
                  {t.sendAnother}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-5 space-y-5 rounded-2xl border border-white/10 bg-[#1a1a2e] p-6">
                <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }} aria-hidden="true">
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" />
                </div>

                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setType("request")}
                    className={`flex-1 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      type === "request"
                        ? "bg-violet-600 text-white"
                        : "bg-white/5 text-white/60 hover:bg-white/10"
                    }`}
                  >
                    {t.typeRequest}
                  </button>
                  <button
                    type="button"
                    onClick={() => setType("bug")}
                    className={`flex-1 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      type === "bug"
                        ? "bg-violet-600 text-white"
                        : "bg-white/5 text-white/60 hover:bg-white/10"
                    }`}
                  >
                    {t.typeBug}
                  </button>
                </div>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={type === "request" ? t.requestPlaceholder : t.bugPlaceholder}
                  rows={5}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500 resize-none"
                />

                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.emailPlaceholder}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/30 focus:border-violet-500 focus:outline-none focus:ring-1 focus:ring-violet-500"
                  />
                  <p className="text-[11px] text-white/30 mt-1.5">{t.emailLabel}</p>
                </div>

                {error && <p className="text-[11px] text-red-400">{error}</p>}

                <button
                  type="submit"
                  disabled={!message.trim() || sending}
                  className="w-full rounded-lg bg-gradient-to-r from-violet-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white hover:from-violet-500 hover:to-purple-500 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {sending ? t.sending : t.submit}
                </button>
              </form>
            )}
          </section>

          {/* トップに戻る */}
          <div className="text-center">
            <a
              href={`/${lang}/lp/`}
              className="inline-block rounded-lg bg-white/10 px-6 py-2.5 text-sm font-medium text-white hover:bg-white/15 transition-colors"
            >
              {t.backToTop}
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
