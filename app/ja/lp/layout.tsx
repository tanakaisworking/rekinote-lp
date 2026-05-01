import type { Metadata } from "next";
import "../../globals.css";

const BASE_URL = "https://rekinote.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: "/ja/lp/",
    languages: {
      ja: "/ja/lp/",
      en: "/en/lp/",
      "x-default": "/en/lp/",
    },
  },
  title: "Reki note — 議事録ツール、1つで足りる。",
  description:
    "Macで起きる全ての通話と対面の会話を、1つのアプリに。Zoom / Meet / Teams / Slack 対応のAI議事録アプリ。",
  keywords: ["議事録", "AI", "音声認識", "文字起こし", "Mac", "Zoom", "Meet", "Teams", "自動化"],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Reki note — 議事録ツール、1つで足りる。",
    description:
      "Macで起きる全ての通話と対面の会話を、1つのアプリに。Zoom / Meet / Teams / Slack 対応のAI議事録アプリ。",
    images: [
      {
        url: "/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "Reki note",
      },
    ],
    type: "website",
    locale: "ja_JP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reki note — 議事録ツール、1つで足りる。",
    description:
      "Macで起きる全ての通話と対面の会話を、1つのアプリに。Zoom / Meet / Teams / Slack 対応のAI議事録アプリ。",
    images: ["/ogp.jpg"],
  },
};

export default function JaLpLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Reki note",
    operatingSystem: "macOS",
    applicationCategory: "BusinessApplication",
    description: "Macで起きる全ての通話と対面の会話を、1つのアプリに集約するAI議事録アプリ。",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "JPY",
    },
  };

  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#0c0c10] text-[#ececef]">{children}</body>
    </html>
  );
}
