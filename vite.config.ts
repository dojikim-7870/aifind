// @lovable.dev/vite-tanstack-config already includes the Vite plugins and Nitro setup.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: {
      entry: "server",
    },
    // Prerender only the main public routes. Do not crawl query-string links:
    // search/filter combinations can otherwise create thousands of pages and exhaust memory.
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
        "/privacy",
        "/terms",
        "/favorites",
      ],
    },
  },
});
