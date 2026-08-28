"use client";

import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";

type Props = { kicker: string; title: string; description: string; items: string[] };

export function SectionPage({ kicker, title, description, items }: Props) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");
  const filters = ["All", ...items];
  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return items.filter((item) => (active === "All" || item === active) && (!normalized || item.toLowerCase().includes(normalized)));
  }, [active, items, query]);

  return (
    <main className="section-pad tool-page">
      <div className="tool-title"><span className="kicker">{kicker}</span><h1>{title}</h1><p>{description}</p></div>
      <div className="content-toolbar" aria-label={`${kicker} controls`}>
        <label className="search-box"><Search size={18} aria-hidden="true" /><span className="sr-only">Search {kicker}</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={`Search ${kicker.toLowerCase()}…`} /></label>
        <div className="filter-label"><SlidersHorizontal size={16} aria-hidden="true" /> Filter</div>
        <div className="filter-row" role="group" aria-label={`${kicker} filters`}>
          {filters.map((filter) => <button key={filter} className={`filter-chip ${active === filter ? "selected" : ""}`} onClick={() => setActive(filter)} aria-pressed={active === filter}>{filter}</button>)}
        </div>
      </div>
      <div className="results-meta" aria-live="polite">{query || active !== "All" ? `${results.length} matching area${results.length === 1 ? "" : "s"}` : `${items.length} areas ready to connect`}</div>
      {results.length ? <div className="placeholder-grid">{results.map((item) => <article className="placeholder" key={item}><span className="placeholder-index">{String(items.indexOf(item) + 1).padStart(2, "0")}</span><h3>{item}</h3><p>Ready for your connected catalogue, API or database. This interface does not invent media or educational content.</p><span className="status-badge">Awaiting source</span></article>)}</div> : <div className="empty-state"><h2>No matching areas</h2><p>Try another search or choose a different filter.</p><button className="button button-light" onClick={() => { setQuery(""); setActive("All"); }}>Reset filters</button></div>}
    </main>
  );
}
