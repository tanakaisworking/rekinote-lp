import * as React from "react";

const GAS_URL =
  "https://script.google.com/macros/s/AKfycbxoT6-2ZlVUtvhG9Nee-FdH8LYVy0nc80Ya_n2rTkN2xw_HAaP3N8mOhe_XrwMhyub4ew/exec";

type FeedbackType = "impression" | "bug";

const dict: Record<string, {
  title: string; desc: string; feedbackLabel: string; feedbackPlaceholder: string;
  bugLabel: string; bugPlaceholder: string; emailLabel: string; emailPlaceholder: string;
  submit: string; sending: string; thanks: string; backToTop: string; error: string;
}> = {
  ja: {
    title: "ダウンロードありがとうございます！",
    desc: "Reki noteについてのご感想・ご要望をお聞かせください。今後の開発の参考にさせていただきます。",
    feedbackLabel: "感想・ご意見",
    feedbackPlaceholder: "使ってみた感想、こんな機能がほしい、など自由にどうぞ",
    bugLabel: "バグ・要望",
    bugPlaceholder: "不具合の内容や再現手順、改善してほしい点など",
    emailLabel: "返信が必要な場合のみ。任意です。",
    emailPlaceholder: "メールアドレス（任意）",
    submit: "送信する",
    sending: "送信中...",
    thanks: "フィードバックを送信しました。ありがとうございます！",
    backToTop: "トップに戻る",
    error: "送信に失敗しました。時間をおいて再度お試しください。",
  },
  en: {
    title: "Thanks for downloading!",
    desc: "We'd love to hear your thoughts on Reki note. Your feedback helps us build a better product.",
    feedbackLabel: "Feedback",
    feedbackPlaceholder: "How's your experience? Any features you'd like to see?",
    bugLabel: "Bug / Request",
    bugPlaceholder: "Describe the issue or what you'd like improved",
    emailLabel: "Only if you'd like a reply. Optional.",
    emailPlaceholder: "Email (optional)",
    submit: "Send",
    sending: "Sending...",
    thanks: "Feedback sent. Thank you!",
    backToTop: "Back to top",
    error: "Failed to send. Please try again later.",
  },
  ko: {
    title: "다운로드해 주셔서 감사합니다!",
    desc: "Reki note에 대한 의견이나 요청 사항을 알려주세요. 향후 개발에 참고하겠습니다.",
    feedbackLabel: "의견·감상",
    feedbackPlaceholder: "사용 후기, 원하는 기능 등 자유롭게 작성해 주세요",
    bugLabel: "버그·요청",
    bugPlaceholder: "문제 내용이나 재현 방법, 개선 사항 등을 알려주세요",
    emailLabel: "답변이 필요한 경우에만 입력해 주세요. 선택 사항입니다.",
    emailPlaceholder: "이메일 (선택)",
    submit: "보내기",
    sending: "전송 중...",
    thanks: "피드백을 보내주셔서 감사합니다!",
    backToTop: "메인으로 돌아가기",
    error: "전송에 실패했습니다. 잠시 후 다시 시도해 주세요.",
  },
  "zh-tw": {
    title: "感謝你的下載！",
    desc: "歡迎告訴我們你對 Reki note 的想法和建議，我們會作為未來開發的參考。",
    feedbackLabel: "意見·感想",
    feedbackPlaceholder: "使用心得、希望新增的功能等，請自由填寫",
    bugLabel: "錯誤·建議",
    bugPlaceholder: "請描述問題內容、重現步驟或希望改善的地方",
    emailLabel: "僅在需要回覆時填寫，非必填。",
    emailPlaceholder: "電子郵件（選填）",
    submit: "送出",
    sending: "傳送中...",
    thanks: "已收到你的回饋，非常感謝！",
    backToTop: "返回首頁",
    error: "傳送失敗，請稍後再試。",
  },
};

export function ThanksContent({ lang }: { lang: string }) {
  const t = dict[lang] ?? dict.en;

  const [type, setType] = React.useState<FeedbackType>("impression");
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

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-lg">
          <div className="text-center mb-10">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-purple-600">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" className="w-8 h-8">
                <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white">{t.title}</h1>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">{t.desc}</p>
          </div>

          {sent ? (
            <div className="text-center space-y-6">
              <div className="rounded-2xl border border-white/10 bg-[#1a1a2e] p-8">
                <p className="text-white/80 text-sm">{t.thanks}</p>
              </div>
              <a
                href={`/${lang}/lp/`}
                className="inline-block rounded-lg bg-white/10 px-6 py-2.5 text-sm font-medium text-white hover:bg-white/15 transition-colors"
              >
                {t.backToTop}
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-white/10 bg-[#1a1a2e] p-8">
              <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }} aria-hidden="true">
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setType("impression")}
                  className={`flex-1 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                    type === "impression"
                      ? "bg-violet-600 text-white"
                      : "bg-white/5 text-white/60 hover:bg-white/10"
                  }`}
                >
                  {t.feedbackLabel}
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
                  {t.bugLabel}
                </button>
              </div>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={type === "impression" ? t.feedbackPlaceholder : t.bugPlaceholder}
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
        </div>
      </main>
    </div>
  );
}
