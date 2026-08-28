"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Search, X } from "lucide-react";

const nav = [
  ["AI", "/ai"],
  ["Education", "/education"],
  ["Movies", "/movies"],
  ["Music", "/music"],
  ["Portfolio", "/portfolio"],
] as const;

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <div className="site">
      <header className="topbar">
        <Link className="brand" href="/" onClick={() => setOpen(false)} aria-label="Luminai home">
          <span className="brand-mark">L</span>
          <span>Luminai</span>
        </Link>
        <nav className={`nav ${open ? "nav-open" : ""}`} aria-label="Primary navigation">
          {nav.map(([label, href]) => (
            <Link key={href} className={pathname.startsWith(href) ? "active" : ""} href={href} onClick={() => setOpen(false)}>{label}</Link>
          ))}
        </nav>
        <div className="top-actions">
          <Link className="icon-button" href="/search" aria-label="Search"><Search size={19} /></Link>
          <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>{open ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </header>
      <main>{children}</main>
      <footer className="footer">
        <span>© {new Date().getFullYear()} Luminai</span>
        <span>Useful things, thoughtfully gathered.</span>
      </footer>
    </div>
  );
}
