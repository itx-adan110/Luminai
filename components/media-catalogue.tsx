"use client";

import { Filter, Search } from "lucide-react";
import { useMemo, useState } from "react";

type MediaCatalogueProps = {
  kicker: string;
  title: string;
  description: string;
  filters: string[];
  capabilities: { title: string; description: string }[];
};

export function MediaCatalogue({ kicker, title, description, filters, capabilities }: MediaCatalogueProps) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");
  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return capabilities.filter((item) => {
      const matchesQuery = !q || `${item.title} ${item.description}`.toLowerCase().includes(q);
      const matchesFilter = active === "All" || item.title === active;
      return matchesQuery && matchesFilter;
    });
  }, [active, capabilities, query]);

  return <main className="section-pad tool-page">
    <div className="tool-title"><span className="kicker">{kicker}</span><h1>{title}</h1><p>{description}</p></div>
    <section className="catalogue-shell" aria-label={`${kicker} catalogue`}>
      <div className="content-toolbar">
        <label className="search-box"><Search size={18} aria-hidden="true" /><span className="sr-only">Search {kicker}</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={`Search ${kicker.toLowerCase()} catalogue…`} /></label>
        <span className="filter-label"><Filter size={15} aria-hidden="true" /> Browse</span>
        <div className="filter-row" role="group" aria-label={`${kicker} filters`}>
          {["All", ...filters].map((filter) => <button key={filter} className={`filter-chip ${active === filter ? "selected" : ""}`} onClick={() => setActive(filter)} aria-pressed={active === filter}>{filter}</button>)}
        </div>
      </div>
      <div className="catalogue-meta" aria-live="polite">{visible.length} catalogue {visible.length === 1 ? "area" : "areas"} ready for your data source</div>
      {visible.length ? <div className="media-grid">{visible.map((item, index) => <article className="media-card" key={item.title}>
        <div className="media-art" aria-hidden="true"><span>{String(index + 1).padStart(2, "0")}</span></div>
        <div className="media-copy"><h2>{item.title}</h2><p>{item.description}</p><span className="status-badge">Ready for connection</span></div>
      </article>)}</div> : <div className="empty-state"><h2>No matching catalogue areas</h2><p>Try another search term or reset your filter.</p><button className="button button-light" onClick={() => { setQuery(""); setActive("All"); }}>Reset catalogue</button></div>}
    </section>
  </main>;
}
