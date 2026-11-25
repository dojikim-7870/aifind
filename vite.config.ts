// @lovable.dev/vite-tanstack-config already includes the Vite plugins and Nitro setup.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
    // Keep prerendering bounded; the English landing page is included explicitly.
    prerender: {
      enabled: false,
      crawlLinks: false,
      routes: [
        "/", "/en/", "/tools", "/categories", "/popular", "/new", "/free-ai",
        "/compare", "/guides", "/about", "/contact", "/favorites", "/privacy", "/terms", "/en/tools", "/en/categories", "/en/popular", "/en/new", "/en/free-ai", "/en/compare", "/en/guides", "/en/contact", "/en/about", "/en/privacy", "/en/terms", "/en/tools/chatgpt", "/en/tools/claude", "/en/tools/gemini", "/en/tools/perplexity", "/en/tools/canva", "/en/tools/midjourney", "/en/tools/cursor", "/en/tools/notebooklm", "/en/tools/elevenlabs", "/en/tools/capcut", "/en/tools/vrew", "/en/tools/wrtn", "/en/tools/clova-x", "/en/tools/deepl", "/en/tools/papago", "/en/tools/gamma", "/en/tools/suno", "/en/tools/runway", "/en/tools/github-copilot", "/en/tools/leonardo", "/en/tools/notion-ai", "/en/tools/zapier", "/en/tools/speechify", "/en/tools/julius", "/en/guides/chatgpt-start", "/en/guides/ai-naver-blog", "/en/guides/ai-youtube-shorts", "/en/guides/free-ai-image", "/en/guides/ai-product-description", "/en/guides/ai-pdf-summary", "/en/guides/ai-work-automation", "/en/guides/ai-blog-content", "/en/guides/ai-solo-business", "/en/guides/ai-for-office-workers", "/en/category/blog", "/en/category/youtube", "/en/category/shorts", "/en/category/sns", "/en/category/writing", "/en/category/image", "/en/category/video", "/en/category/music", "/en/category/voice", "/en/category/document", "/en/category/pdf", "/en/category/excel", "/en/category/presentation", "/en/category/meeting", "/en/category/email", "/en/category/translate", "/en/category/automation", "/en/category/marketing", "/en/category/ads", "/en/category/crm", "/en/category/research", "/en/category/product-description", "/en/category/ecommerce", "/en/category/smartstore", "/en/category/online-business", "/en/category/coding", "/en/category/website", "/en/category/app", "/en/category/code-review", "/en/category/data", "/en/category/english", "/en/category/language", "/en/category/exam", "/en/category/assignment", "/en/category/study", "/en/category/travel", "/en/category/cooking", "/en/category/photo", "/en/category/schedule", "/en/category/personal", "/en/category/work", "/en/category/education", "/en/category/dev", "/en/category/daily", "/en/category/search", "/en/category/productivity",
      ],
    },
  },
});
