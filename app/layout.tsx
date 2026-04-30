import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Reki note — 議事録ツール、1つで足りる。",
  description:
    "Macで起きる全ての通話と対面の会話を、1つのアプリに。Zoom / Meet / Teams / Slack 対応のAI議事録アプリ。",
  openGraph: {
    title: "Reki note — 議事録ツール、1つで足りる。",
    description:
      "Macで起きる全ての通話と対面の会話を、1つのアプリに。Zoom / Meet / Teams / Slack 対応のAI議事録アプリ。",
    images: [{ url: "/ogp.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reki note — 議事録ツール、1つで足りる。",
    description:
      "Macで起きる全ての通話と対面の会話を、1つのアプリに。Zoom / Meet / Teams / Slack 対応のAI議事録アプリ。",
    images: ["/ogp.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body className="bg-[#0c0c10] text-[#ececef]">{children}</body>
    </html>
  );
}
