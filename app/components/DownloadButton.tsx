"use client";

import * as React from "react";
import { useParams } from "next/navigation";

const MAC_DOWNLOAD_URL =
  "https://github.com/hibachi-inc/reki-note-releases/releases/latest/download/reki-note.dmg";

const WIN_DOWNLOAD_URL =
  "https://github.com/hibachi-inc/reki-note-releases/releases/latest/download/reki-note-setup.exe";

const AppleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.05 12.04c-.03-2.95 2.41-4.37 2.52-4.44-1.37-2.01-3.51-2.28-4.27-2.31-1.81-.18-3.55 1.07-4.48 1.07-.94 0-2.36-1.05-3.88-1.02-2 .03-3.84 1.16-4.87 2.95-2.08 3.61-.53 8.95 1.49 11.88.99 1.43 2.16 3.04 3.69 2.98 1.49-.06 2.05-.96 3.85-.96 1.79 0 2.3.96 3.87.93 1.6-.03 2.61-1.46 3.59-2.9 1.13-1.66 1.6-3.27 1.62-3.36-.04-.01-3.1-1.19-3.13-4.72zM14.13 4.5c.82-.99 1.37-2.37 1.22-3.74-1.18.05-2.62.79-3.46 1.78-.76.88-1.42 2.28-1.24 3.63 1.32.1 2.66-.67 3.48-1.67z" />
  </svg>
);

const WindowsIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M3 5.5 11 4v7.5H3V5.5zM12 3.85 21 3v8.5h-9V3.85zM3 12.5h8V20l-8-1.4v-6.1zM12 12.5h9V21l-9-1.3v-7.2z" />
  </svg>
);

export function DownloadButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  lang?: "ja" | "en";
}) {
  const params = useParams();
  const lang = (params?.lang as "ja" | "en") || "ja";

  const handleClick = () => {
    setTimeout(() => {
      window.location.href = `/${lang}/thanks/`;
    }, 5000);
  };

  return (
    <a
      href={MAC_DOWNLOAD_URL}
      onClick={handleClick}
      className={className}
    >
      <AppleIcon className="w-5 h-5" />
      {children}
    </a>
  );
}

const BetaBadge = ({ className }: { className?: string }) => (
  <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold tracking-wide uppercase leading-none ${className ?? "bg-amber-400/15 text-amber-300 border border-amber-400/25"}`}>
    Beta
  </span>
);

export function WindowsDownloadButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  lang?: "ja" | "en";
}) {
  const params = useParams();
  const lang = (params?.lang as "ja" | "en") || "ja";

  const handleClick = () => {
    setTimeout(() => {
      window.location.href = `/${lang}/thanks/`;
    }, 5000);
  };

  return (
    <a
      href={WIN_DOWNLOAD_URL}
      onClick={handleClick}
      className={className}
    >
      <WindowsIcon className="w-5 h-5" />
      {children}
      <BetaBadge />
    </a>
  );
}

export function WindowsDownloadButtonSmall({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  lang?: "ja" | "en";
}) {
  const params = useParams();
  const lang = (params?.lang as "ja" | "en") || "ja";

  const handleClick = () => {
    setTimeout(() => {
      window.location.href = `/${lang}/thanks/`;
    }, 5000);
  };

  return (
    <a
      href={WIN_DOWNLOAD_URL}
      onClick={handleClick}
      className={className}
    >
      <WindowsIcon className="w-4 h-4" />
      {children}
      <BetaBadge />
    </a>
  );
}

export function DownloadButtonSmall({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  lang?: "ja" | "en";
}) {
  const params = useParams();
  const lang = (params?.lang as "ja" | "en") || "ja";

  const handleClick = () => {
    setTimeout(() => {
      window.location.href = `/${lang}/thanks/`;
    }, 5000);
  };

  return (
    <a
      href={MAC_DOWNLOAD_URL}
      onClick={handleClick}
      className={className}
    >
      <AppleIcon className="w-4 h-4" />
      {children}
    </a>
  );
}
