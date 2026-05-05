import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://rekinote.app"),
  alternates: {
    canonical: "/",
  },
  title: "Reki note — 議事録ツール、1つで足りる。",
  description:
    "システム音声に統合されたAI議事録アプリ。デバイス上の全ての音声を記録しよう。",
  keywords: ["議事録", "AI", "音声認識", "文字起こし", "Windows", "Mac", "Zoom", "Meet", "Teams", "自動化"],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Reki note — 議事録ツール、1つで足りる。",
    description:
      "システム音声に統合されたAI議事録アプリ。デバイス上の全ての音声を記録しよう。",
    images: [
      {
        url: "/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "Reki note",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reki note — 議事録ツール、1つで足りる。",
    description:
      "システム音声に統合されたAI議事録アプリ。デバイス上の全ての音声を記録しよう。",
    images: ["/ogp.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Reki note",
    operatingSystem: "macOS, Windows",
    applicationCategory: "BusinessApplication",
    description: "システム音声に統合されたAI議事録アプリ。デバイス上の全ての音声を記録しよう。",
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
