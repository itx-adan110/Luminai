"use client";
import { Search } from "lucide-react";
import { useState } from "react";
export default function SearchPage() { const [query,setQuery]=useState(""); return <main className="search-page section-pad"><span className="kicker">Universal search</span><h1>Find something in Luminai.</h1><p>Search across the platform once your content sources are connected.</p><label className="search-box"><Search size={20}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search education, movies, music, projects…" autoFocus /></label><div className="search-note">{query ? <>Searching for <strong>“{query}”</strong> — connect your content index to return results.</> : "Start with a title, subject, artist, project or keyword."}</div></main>; }
