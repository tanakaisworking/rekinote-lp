// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://rekinote.app",
  output: "static",
  trailingSlash: "always",
  i18n: {
    defaultLocale: "ja",
    locales: ["ja", "en"],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  integrations: [
    react(),
    sitemap({
      filter: (page) =>
        page !== "https://rekinote.app/" &&
        !page.includes("/setup/") &&
        !page.includes("/thanks/"),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
