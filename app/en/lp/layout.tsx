import type { Metadata } from "next";
import "../../globals.css";

const BASE_URL = "https://rekinote.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  alternates: {
    canonical: "/en/lp/",
    languages: {
      ja: "/ja/lp/",
      en: "/en/lp/",
      "x-default": "/en/lp/",
    },
  },
  title: "Reki note — One meeting app is all you need.",
  description:
    "All your device conversations in one place. An AI transcription app supporting Zoom, Meet, Teams, and Slack.",
  keywords: ["transcription", "AI", "meeting notes", "speech-to-text", "Mac", "Zoom", "Meet", "Teams", "automation"],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Reki note — One meeting app is all you need.",
    description:
      "All your device conversations in one place. An AI transcription app supporting Zoom, Meet, Teams, and Slack.",
    images: [
      {
        url: "/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "Reki note",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reki note — One meeting app is all you need.",
    description:
      "All your device conversations in one place. An AI transcription app supporting Zoom, Meet, Teams, and Slack.",
    images: ["/ogp.jpg"],
  },
};

export default function EnLpLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Reki note",
    operatingSystem: "macOS",
    applicationCategory: "BusinessApplication",
    description: "An AI transcription app that centralizes all online and offline conversations on your Mac.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  };

  return (
    <html lang="en">
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
