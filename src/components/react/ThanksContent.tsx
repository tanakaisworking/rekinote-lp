import * as React from "react";

const GAS_URL =
  "https://script.google.com/macros/s/AKfycby0wvCXbGvQfawC8mHKmWDq6f0q0L1V973XTwyaSZOzeJFUGS97PvRlGIyRk60Rcm71IA/exec";

type FeedbackType = "impression" | "bug";

const dict = {
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
};

export function ThanksContent({ lang }: { lang: "ja" | "en" }) {
  const t = dict[lang];

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
