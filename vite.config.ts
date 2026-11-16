// @lovable.dev/vite-tanstack-config already includes the Vite plugins and Nitro setup.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    // Keep prerendering bounded; the English landing page is included explicitly.
    prerender: {
      enabled: true,
      crawlLinks: false,
      routes: [
        "/", "/en/", "/tools", "/categories", "/popular", "/new", "/free-ai",
        "/compare", "/guides", "/about", "/contact", "/favorites", "/privacy", "/terms",
      ],
    },
  },
});
