"use client";

import { BookOpen, Filter, Search } from "lucide-react";
import { useMemo, useState } from "react";

const facets = ["All", "Subjects", "Grades", "Boards", "Years"];
const resources = [
  { title: "Past papers", text: "Your future paper catalogue, searchable by subject, grade, board and year.", facet: "Years" },
  { title: "Subjects", text: "Create a consistent subject index without tying Luminai to one education system.", facet: "Subjects" },
  { title: "Grades", text: "Support classes and grades from different curricula through one flexible taxonomy.", facet: "Grades" },
  { title: "Boards", text: "Connect multiple boards or examination systems to your own data source.", facet: "Boards" },
];

export default function EducationPage() {
  const [query, setQuery] = useState("");
  const [facet, setFacet] = useState("All");
  const filtered = useMemo(() => resources.filter((item) => (facet === "All" || item.facet === facet) && `${item.title} ${item.text}`.toLowerCase().includes(query.toLowerCase().trim())), [facet, query]);
  return <main className="section-pad tool-page">
    <div className="tool-title"><span className="kicker">Education</span><h1>Study resources, organised.</h1><p>A flexible home for past papers and learning resources. Your own catalogue can be connected by subject, grade, board, year and category.</p></div>
    <div className="content-toolbar"><label className="search-box"><Search size={18} aria-hidden="true" /><span className="sr-only">Search education</span><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search resources…" /></label><span className="filter-label"><Filter size={15} /> Filter</span><div className="filter-row" aria-label="Education filters">{facets.map((item) => <button key={item} className={`filter-chip ${facet === item ? "selected" : ""}`} onClick={() => setFacet(item)} aria-pressed={facet === item}>{item}</button>)}</div></div>
    <div className="results-meta" aria-live="polite">{filtered.length} {filtered.length === 1 ? "area" : "areas"} available</div>
    {filtered.length ? <div className="placeholder-grid">{filtered.map((item) => <article className="placeholder" key={item.title}><div className="service-icon"><BookOpen size={19} /></div><h3>{item.title}</h3><p>{item.text}</p><span className="status-badge">Ready for your data source</span></article>)}</div> : <div className="empty-state"><h2>No matching resources</h2><p>Try another keyword or filter.</p><button className="button button-light" onClick={() => { setQuery(""); setFacet("All"); }}>Reset filters</button></div>}
  </main>;
}
