export const MAC_DOWNLOAD_URL =
  "https://github.com/hibachi-inc/reki-note-releases/releases/latest/download/reki-note.dmg";

export const WIN_DOWNLOAD_URL =
  "https://github.com/hibachi-inc/reki-note-releases/releases/latest/download/reki-note-setup.exe";

type DownloadPlatform = "mac" | "windows";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackDownload(platform: DownloadPlatform, lang: string, source: string) {
  window.gtag?.("event", "download_reki_note", {
    download_platform: platform,
    content_language: lang,
    link_url: platform === "mac" ? MAC_DOWNLOAD_URL : WIN_DOWNLOAD_URL,
    download_source: source,
    transport_type: "beacon",
  });
}

export function redirectToThanks(lang: string) {
  setTimeout(() => {
    window.location.href = `/${lang}/thanks/`;
  }, 5000);
}
