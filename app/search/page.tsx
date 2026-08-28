"use client";

import Link from "next/link";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";

type Result = { title: string; type: string; href: string; description: string };

const results: Result[] = [
  { title: "Luminai AI", type: "AI", href: "/ai", description: "A conversational workspace for questions, ideas and learning." },
  { title: "Education", type: "Education", href: "/education", description: "Past papers and learning resources organised by your future catalogue." },
  { title: "Movies", type: "Movies", href: "/movies", description: "Browse your own legal movie catalogue and metadata." },
  { title: "Music", type: "Music", href: "/music", description: "Discover artists, albums and collections from your own sources." },
  { title: "Portfolio", type: "Portfolio", href: "/portfolio", description: "A focused professional profile for projects, skills and experience." },
];

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return results;
    return results.filter((item) => `${item.title} ${item.type} ${item.description}`.toLowerCase().includes(q));
  }, [query]);

  return (
    <main className="section-pad tool-page">
      <div className="tool-title"><span className="kicker">Universal search</span><h1>Find something in Luminai.</h1><p>Search across the platform. Connected education, media and resource indexes can be added without changing this interface.</p></div>
      <label className="search-box search-page-box"><Search size={20} aria-hidden="true" /><span className="sr-only">Search Luminai</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search education, movies, music, projects…" autoFocus /></label>
      <div className="results-meta" aria-live="polite">{filtered.length} platform {filtered.length === 1 ? "area" : "areas"} {query ? `matching “${query}”` : "available"}</div>
      {filtered.length ? <div className="search-results">{filtered.map((item) => <Link className="search-result" href={item.href} key={item.href}><div><span className="kicker">{item.type}</span><h2>{item.title}</h2><p>{item.description}</p></div><span className="arrow" aria-hidden="true">↗</span></Link>)}</div> : <div className="empty-state"><h2>No results</h2><p>Try a different keyword.</p><button className="button button-light" onClick={() => setQuery("")}>Clear search</button></div>}
    </main>
  );
}
