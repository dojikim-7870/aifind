import { Link, useLocation } from "@tanstack/react-router";
import { Heart, Menu, Search } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const koreanNav = [
  { href: "/tools", label: "AI 도구 찾기" },
  { href: "/categories", label: "카테고리" },
  { href: "/popular", label: "인기 AI" },
  { href: "/new", label: "신규 AI" },
  { href: "/free-ai", label: "무료 AI" },
  { href: "/compare", label: "AI 비교" },
  { href: "/guides", label: "활용 가이드" },
];

const englishNav = [
  { href: "/en/tools", label: "Find AI Tools" },
  { href: "/en/categories", label: "Categories" },
  { href: "/en/popular", label: "Popular AI" },
  { href: "/en/new", label: "New AI" },
  { href: "/en/free-ai", label: "Free AI" },
  { href: "/en/compare", label: "Compare" },
  { href: "/en/guides", label: "Guides" },
  { href: "/en/contact", label: "Submit AI" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useLocation({ select: (location) => location.pathname });
  const isEnglish = pathname.startsWith("/en");
  const items = isEnglish ? englishNav : koreanNav;

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/90 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 lg:flex lg:justify-between">
        <Link to={isEnglish ? "/en/" : "/"} className="flex min-w-0 items-center gap-2">
          <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-brand text-sm font-bold text-brand-foreground">A</span>
          <span className="truncate text-lg font-extrabold tracking-tight">AIAtlas<span className="text-brand">.kr</span></span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-1">
          <Button asChild variant="ghost" size="sm">
            <a href={isEnglish ? "/" : "/en/"}>{isEnglish ? "한국어" : "English"}</a>
          </Button>
          {!isEnglish && (
            <>
              <Button asChild variant="ghost" size="icon" aria-label="AI 도구 검색">
                <Link to="/tools"><Search className="size-5" /></Link>
              </Button>
              <Button asChild variant="ghost" size="icon" aria-label="찜한 AI">
                <Link to="/favorites"><Heart className="size-5" /></Link>
              </Button>
            </>
          )}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden" aria-label="Open menu"><Menu className="size-5" /></Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-0">
              <SheetTitle className="border-b px-5 py-4 text-base font-bold">{isEnglish ? "Menu" : "전체 메뉴"}</SheetTitle>
              <nav className="flex flex-col p-3">
                {items.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent">{item.label}</a>
                ))}
                {isEnglish ? (
                  <a href="/" onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium text-muted-foreground">한국어 홈페이지</a>
                ) : (
                  <>
                    <Link to="/favorites" onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium text-foreground">찜한 AI</Link>
                    <Link to="/about" onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-base font-medium text-muted-foreground">서비스 소개</Link>
                  </>
                )}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
