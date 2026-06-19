import * as React from "react";

const GAS_URL =
  "https://script.google.com/macros/s/AKfycbxFpi8Pue0SdA_gjp7BBbr5RZvXONAT90LEYQsQhZ74jPsyjvFHVJ6FsqxHJqsgeXfo3A/exec";

type FormState = {
  company: string;
  name: string;
  email: string;
  seats: string;
  plan: "Team" | "Enterprise" | "未定";
  nda: "希望する" | "相談したい" | "不要";
  message: string;
  website: string;
};

const initialState: FormState = {
  company: "",
  name: "",
  email: "",
  seats: "",
  plan: "Team",
  nda: "希望する",
  message: "",
  website: "",
};

export function TeamPlanApplicationForm() {
  const [form, setForm] = React.useState<FormState>(initialState);
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = React.useState("");

  const update = (field: keyof FormState) => (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setError("");

    try {
      const res = await fetch(GAS_URL, {
        method: "POST",
        mode: "cors",
        headers: { "Content-Type": "text/plain" },
        body: JSON.stringify({
          form_name: "reki_team_plan_application",
          source_url: location.href,
          referrer: document.referrer || "",
          user_agent: navigator.userAgent,
          website: form.website,
          name: form.name.trim(),
          email: form.email.trim(),
          phone: "",
          company: form.company.trim(),
          category: form.plan,
          message: [
            `想定利用人数: ${form.seats.trim() || "未入力"}`,
            `希望プラン: ${form.plan}`,
            `NDA: ${form.nda}`,
            "",
            form.message.trim(),
          ].join("\n"),
        }),
      });

      const json = await res.json();
      if (!json.ok) throw new Error(json.error || "送信に失敗しました");

      setStatus("sent");
      setForm(initialState);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "送信に失敗しました。時間をおいて再度お試しください。");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="team-form" id="apply">
      <div className="team-form-grid">
        <label>
          <span>会社名</span>
          <input required value={form.company} onChange={update("company")} placeholder="ヒバチ株式会社" />
        </label>
        <label>
          <span>お名前</span>
          <input required value={form.name} onChange={update("name")} placeholder="田中 貴士" />
        </label>
        <label>
          <span>メールアドレス</span>
          <input required type="email" value={form.email} onChange={update("email")} placeholder="name@example.com" />
        </label>
        <label>
          <span>想定利用人数</span>
          <input required inputMode="numeric" value={form.seats} onChange={update("seats")} placeholder="30名" />
        </label>
        <label>
          <span>希望プラン</span>
          <select value={form.plan} onChange={update("plan")}>
            <option value="Team">Team</option>
            <option value="Enterprise">Enterprise</option>
            <option value="未定">未定</option>
          </select>
        </label>
        <label>
          <span>NDA締結</span>
          <select value={form.nda} onChange={update("nda")}>
            <option value="希望する">希望する</option>
            <option value="相談したい">相談したい</option>
            <option value="不要">不要</option>
          </select>
        </label>
      </div>

      <label className="team-form-message">
        <span>導入目的・補足</span>
        <textarea
          required
          value={form.message}
          onChange={update("message")}
          rows={5}
          placeholder="導入したい部署、現在の議事録運用、セキュリティ要件などをご記入ください。"
        />
      </label>

      <input
        className="team-form-honeypot"
        tabIndex={-1}
        autoComplete="off"
        value={form.website}
        onChange={update("website")}
        aria-hidden="true"
      />

      <div className="team-form-actions">
        <p>送信後、通常2営業日以内に導入方法と契約条件についてご連絡します。</p>
        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "送信中..." : "チームプランを申し込む"}
        </button>
      </div>

      {status === "sent" && (
        <div className="team-form-success" role="status">
          送信しました。ありがとうございます。担当よりご連絡します。
        </div>
      )}
      {status === "error" && (
        <div className="team-form-error" role="alert">
          {error || "送信に失敗しました。時間をおいて再度お試しください。"}
        </div>
      )}
    </form>
  );
}
