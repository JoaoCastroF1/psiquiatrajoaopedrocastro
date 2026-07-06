import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import type { searchSite, SearchResult } from "@/lib/searchIndex";

type SearchFn = typeof searchSite;

interface SiteSearchProps {
  variant?: "icon" | "inline";
  onNavigate?: () => void;
}

const SiteSearch = ({ variant = "icon", onNavigate }: SiteSearchProps) => {
  const [open, setOpen] = useState(variant === "inline");
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  // O indice de busca inclui o texto integral do blog; carrega sob demanda
  // para nao entrar no bundle inicial de todas as paginas.
  const [searchFn, setSearchFn] = useState<SearchFn | null>(null);

  useEffect(() => {
    if (!open || searchFn) return;
    let cancelled = false;
    import("@/lib/searchIndex").then((mod) => {
      if (!cancelled) setSearchFn(() => mod.searchSite);
    });
    return () => {
      cancelled = true;
    };
  }, [open, searchFn]);

  const results: SearchResult[] = useMemo(
    () => (searchFn ? searchFn(query) : []),
    [searchFn, query],
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (variant !== "icon") return;
    if (!open) return;
    inputRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, variant]);

  useEffect(() => {
    const onShortcut = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen(true);
      }
    };
    document.addEventListener("keydown", onShortcut);
    return () => document.removeEventListener("keydown", onShortcut);
  }, []);

  const handleSelect = (item: SearchResult) => {
    setOpen(variant === "inline");
    setQuery("");
    onNavigate?.();
    navigate(item.url);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (results.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % results.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + results.length) % results.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const target = results[activeIndex];
      if (target) handleSelect(target);
    }
  };

  const showSuggestions = open && query.trim().length >= 2;

  const SearchPanel = (
    <div
      className={
        variant === "icon"
          ? "fixed inset-0 z-[60] bg-foreground/40 backdrop-blur-sm flex items-start justify-center px-4 pt-24 md:pt-32"
          : "w-full"
      }
      onClick={variant === "icon" ? () => setOpen(false) : undefined}
      role={variant === "icon" ? "dialog" : undefined}
      aria-modal={variant === "icon" ? true : undefined}
      aria-label={variant === "icon" ? "Buscar no site" : undefined}
    >
      <div
        className={
          variant === "icon"
            ? "w-full max-w-2xl bg-background border border-border shadow-xl rounded-md overflow-hidden"
            : "w-full"
        }
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative flex items-center border-b border-border">
          <Search
            className="absolute left-4 w-4 h-4 text-muted-foreground pointer-events-none"
            aria-hidden="true"
          />
          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Buscar artigos, condições e páginas…"
            className="w-full bg-transparent pl-11 pr-11 py-4 font-body text-sm md:text-base text-foreground placeholder:text-muted-foreground focus:outline-none"
            aria-label="Buscar no site"
            aria-autocomplete="list"
            aria-controls="site-search-suggestions"
          />
          {variant === "icon" && (
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="absolute right-3 p-1 text-muted-foreground hover:text-foreground"
              aria-label="Fechar busca"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {showSuggestions && (
          <ul
            id="site-search-suggestions"
            role="listbox"
            className="max-h-[60vh] overflow-y-auto"
          >
            {results.length === 0 ? (
              <li className="px-4 py-6 font-body text-sm text-muted-foreground text-center">
                Nenhum resultado para “{query}”.
              </li>
            ) : (
              results.map((item, i) => (
                <li key={item.url} role="option" aria-selected={i === activeIndex}>
                  <button
                    type="button"
                    onMouseEnter={() => setActiveIndex(i)}
                    onClick={() => handleSelect(item)}
                    className={`w-full text-left px-4 py-3 border-b border-border/40 last:border-b-0 transition-colors ${
                      i === activeIndex ? "bg-secondary" : "hover:bg-secondary/60"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3 mb-1">
                      <span className="font-body text-[10px] uppercase tracking-[0.18em] text-deep-green">
                        {item.kindLabel}
                      </span>
                    </div>
                    <p className="font-display text-sm md:text-base text-foreground leading-snug">
                      {item.title}
                    </p>
                    {item.description && (
                      <p className="font-body text-xs text-muted-foreground mt-1 line-clamp-2">
                        {item.description}
                      </p>
                    )}
                  </button>
                </li>
              ))
            )}
          </ul>
        )}

        {open && query.trim().length > 0 && query.trim().length < 2 && (
          <p className="px-4 py-3 font-body text-xs text-muted-foreground">
            Digite pelo menos 2 caracteres.
          </p>
        )}
      </div>
    </div>
  );

  if (variant === "inline") {
    return SearchPanel;
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="p-2 -mr-2 text-muted-foreground hover:text-foreground transition-colors"
        aria-label="Buscar no site"
      >
        <Search className="w-4 h-4" />
      </button>
      {open && SearchPanel}
    </>
  );
};

export default SiteSearch;
