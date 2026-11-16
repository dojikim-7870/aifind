import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, ExternalLink, Sparkles, ArrowRight } from "lucide-react";
import { tools } from "@/data/tools";
import { sortTools } from "@/lib/search";

const descriptions: Record<string, string> = {
  chatgpt: "An AI assistant for writing, brainstorming, research, and everyday tasks.",
  claude: "An AI assistant known for thoughtful writing, document analysis, and coding help.",
  gemini: "Google's AI assistant for research, writing, planning, and multimodal tasks.",
  perplexity: "An AI answer engine that searches the web and provides source links.",
  canva: "An online design platform with AI tools for presentations, images, and marketing content.",
  midjourney: "An AI image generator for creative visuals, illustrations, and concept art.",
  cursor: "An AI-powered code editor that helps developers understand and write code.",
  notebooklm: "An AI research assistant that answers questions using your uploaded sources.",
  elevenlabs: "AI voice generation and text-to-speech tools for natural-sounding audio.",
  capcut: "A video editor with AI features for short-form and social media content.",
  vrew: "An AI-assisted video editor for subtitles, narration, and quick video production.",
  wrtn: "A Korean AI platform offering conversational assistance and content creation tools.",
  "clova-x": "Naver's AI assistant for writing, summarization, and everyday questions.",
  deepl: "AI-powered translation and writing assistance for natural, accurate language.",
  papago: "A translation service supporting text, images, voice, and conversations.",
  gamma: "An AI tool for creating presentations, documents, and web pages from prompts.",
  suno: "An AI music generator that turns text prompts into original songs.",
  runway: "A creative AI platform for generating and editing video.",
  "github-copilot": "An AI coding assistant that suggests code and helps with development tasks.",
  leonardo: "An AI image generation platform for artwork, product visuals, and design concepts.",
  "notion-ai": "AI writing, summarization, and knowledge tools built into Notion.",
  zapier: "A workflow automation platform that connects apps and automates repetitive tasks.",
  speechify: "A text-to-speech tool that turns documents and web pages into audio.",
  julius: "An AI data analyst for exploring spreadsheets, charts, and datasets with natural language.",
};

const categoryLabels: Record<string, string> = {
  writing: "Writing", image: "Image Generation", video: "Video", coding: "Coding",
  research: "Research", presentation: "Presentations", music: "Music", voice: "Voice",
  translate: "Translation", automation: "Automation", productivity: "Productivity",
  design: "Design", marketing: "Marketing", education: "Education", pdf: "PDF & Documents",
  excel: "Data & Spreadsheets", youtube: "YouTube", shorts: "Short Videos",
};

const categories = [
  ["writing", "Writing & Content"], ["image", "Image Generation"], ["video", "Video Creation"],
  ["coding", "Coding & Development"], ["research", "Research & Search"], ["presentation", "Presentations"],
  ["music", "AI Music"], ["voice", "Voice & Audio"], ["translate", "Translation"],
  ["automation", "Workflow Automation"], ["productivity", "Productivity"], ["design", "Design"],
];

export const Route = createFileRoute("/en/")({
  head: () => ({
    meta: [
      { title: "AIAtlas - Discover and Compare the Best AI Tools" },
      { name: "description", content: "Discover, compare, and choose AI tools for writing, image generation, video, coding, research, and productivity. Explore free and paid AI tools." },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: "AIAtlas - Discover and Compare the Best AI Tools" },
      { property: "og:description", content: "Find the right AI tool for your work, creativity, and everyday life." },
      { property: "og:locale", content: "en_US" },
    ],
    links: [{ rel: "canonical", href: "https://aifind.kr/en/" }, { rel: "alternate", hrefLang: "ko", href: "https://aifind.kr/" }, { rel: "alternate", hrefLang: "en", href: "https://aifind.kr/en/" }],
  }),
  component: EnglishHome,
});

function EnglishHome() {
  const [query, setQuery] = useState("");
  const [price, setPrice] = useState("all");
  const listedTools = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sortTools(tools.filter((tool) => {
      const text = [tool.name, tool.slug, descriptions[tool.slug] ?? "", ...(tool.tags ?? [])].join(" ").toLowerCase();
      const matchesQuery = !q || text.includes(q);
      const matchesPrice = price === "all" || (price === "free" ? tool.pricing === "무료" || tool.freePlan : price === "paid" ? tool.pricing === "유료" : tool.freeTrial);
      return matchesQuery && matchesPrice;
    }), "popularity");
  }, [query, price]);

  const renderCards = (items: typeof tools) => (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((tool) => (
        <article key={tool.slug} className="flex h-full flex-col rounded-2xl border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-base font-bold">{tool.name}</h3>
            <span className="shrink-0 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium">{tool.pricing === "무료" || tool.freePlan ? "Free plan" : tool.freeTrial ? "Free trial" : "Paid"}</span>
          </div>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{descriptions[tool.slug] ?? "Explore this AI tool and visit its official website for details."}</p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {tool.categories.slice(0, 2).map((slug) => <span key={slug} className="rounded-full bg-brand-soft px-2.5 py-1 text-xs text-brand">{categoryLabels[slug] ?? slug}</span>)}
          </div>
          <a href={tool.website} target="_blank" rel="noreferrer noopener" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:underline">
            Visit official website <ExternalLink className="size-4" />
          </a>
        </article>
      ))}
    </div>
  );

  const featured = sortTools(tools.filter((tool) => tool.featured || tool.popularity >= 75), "popularity").slice(0, 6);
  const newest = sortTools(tools.filter((tool) => tool.isNew), "new").slice(0, 6);
  const freeTools = sortTools(tools.filter((tool) => tool.pricing === "무료" || tool.freePlan), "popularity").slice(0, 6);

  return (
    <main id="top">
      <section className="border-b bg-gradient-to-br from-background via-background to-brand-soft">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border bg-card px-4 py-2 text-xs font-semibold text-brand"><Sparkles className="size-4" /> Global AI Tools Directory</span>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl">Discover. Compare.<br className="sm:hidden" /> Choose the Right AI Tool.</h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">Explore AI tools for writing, image generation, video, coding, research, and productivity. Compare free and paid options in one place.</p>
          <div id="tools" className="mx-auto mt-8 flex max-w-3xl flex-col gap-3 rounded-2xl border bg-card p-3 text-left shadow-sm sm:flex-row">
            <div className="flex min-w-0 flex-1 items-center gap-3 px-2"><Search className="size-5 shrink-0 text-muted-foreground" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search AI tools (e.g. writing, image, ChatGPT)..." className="min-w-0 flex-1 bg-transparent py-2 text-sm outline-none" /></div>
            <select value={price} onChange={(event) => setPrice(event.target.value)} className="rounded-xl border bg-background px-3 py-2 text-sm"><option value="all">All pricing</option><option value="free">Free plans</option><option value="trial">Free trials</option><option value="paid">Paid tools</option></select>
          </div>
          {query || price !== "all" ? <p className="mt-3 text-sm text-muted-foreground">{listedTools.length} tools found</p> : null}
        </div>
      </section>

      {(query || price !== "all") && <section className="mx-auto max-w-6xl px-4 py-10"><div className="mb-5 flex items-center justify-between"><h2 className="text-xl font-extrabold">Search Results</h2><button onClick={() => { setQuery(""); setPrice("all"); }} className="text-sm text-brand hover:underline">Clear filters</button></div>{listedTools.length ? renderCards(listedTools) : <p className="rounded-xl border p-8 text-center text-muted-foreground">No matching tools found. Try another search.</p>}</section>}

      <section id="categories" className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-6"><p className="text-xs font-bold uppercase tracking-wider text-brand">Explore by category</p><h2 className="mt-2 text-2xl font-extrabold">Find tools for what you want to do</h2><p className="mt-2 text-sm text-muted-foreground">Browse AI tools by task and use case.</p></div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">{categories.map(([slug, label]) => <button key={slug} onClick={() => { setQuery(label); setPrice("all"); document.getElementById("tools")?.scrollIntoView({ behavior: "smooth" }); }} className="rounded-xl border bg-card p-4 text-left text-sm font-semibold transition hover:border-brand hover:bg-brand-soft">{label}<span className="mt-1 block text-xs font-normal text-muted-foreground">{tools.filter((tool) => tool.categories.includes(slug)).length} listed tools</span></button>)}</div>
      </section>

      <section id="popular" className="mx-auto max-w-6xl px-4 py-10"><div className="mb-6"><p className="text-xs font-bold uppercase tracking-wider text-brand">Popular AI</p><h2 className="mt-2 text-2xl font-extrabold">Popular AI Tools</h2><p className="mt-2 text-sm text-muted-foreground">A curated selection of notable AI tools.</p></div>{renderCards(featured)}</section>

      <section id="new" className="mx-auto max-w-6xl px-4 py-10"><div className="mb-6"><p className="text-xs font-bold uppercase tracking-wider text-brand">Recently added</p><h2 className="mt-2 text-2xl font-extrabold">New AI Tools</h2></div>{renderCards(newest)}</section>

      <section id="free" className="mx-auto max-w-6xl px-4 py-10"><div className="mb-6"><p className="text-xs font-bold uppercase tracking-wider text-brand">Start for free</p><h2 className="mt-2 text-2xl font-extrabold">Free AI Tools</h2><p className="mt-2 text-sm text-muted-foreground">Explore tools with free plans or free access. Check each provider's current terms.</p></div>{renderCards(freeTools)}</section>

      <section id="submit" className="mx-auto max-w-6xl px-4 py-12"><div className="rounded-3xl border bg-card p-8 text-center sm:p-12"><p className="text-xs font-bold uppercase tracking-wider text-brand">For AI creators and companies</p><h2 className="mt-3 text-2xl font-extrabold">Have an AI tool to share?</h2><p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">AI companies and developers are welcome to introduce their products to AIAtlas. Our dedicated submission form is being prepared. For now, please use the contact page and include your product name and official website.</p><a href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground">Contact AIAtlas <ArrowRight className="size-4" /></a></div></section>
    </main>
  );
}
