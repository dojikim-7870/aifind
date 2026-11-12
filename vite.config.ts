// @lovable.dev/vite-tanstack-config already includes the Vite plugins and Nitro setup.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: {
      entry: "server",
    },
    // Prerender only the main page and known top-level routes.
    // Crawling every search/filter link caused an unbounded build and memory exhaustion.
    prerender: {
      enabled: true,
      crawlLinks: false,
      routes: [
        "/",
        "/tools",
        "/categories",
        "/popular",
        "/new",
        "/free-ai",
        "/compare",
        "/guides",
        "/about",
        "/contact",
        "/favorites",
        "/privacy",
        "/terms",
      ],
    },
  },
});
