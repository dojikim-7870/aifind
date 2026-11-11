// @lovable.dev/vite-tanstack-config already includes the Vite plugins and Nitro setup.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: {
      entry: "server",
    },
    // Generate static HTML so GitHub Pages can serve the homepage without a server.
    prerender: {
      enabled: true,
      crawlLinks: true,
    },
  },
});
