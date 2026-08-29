"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="site">
      <header className="topbar">
        <Link className="brand" href="/" aria-label="Luminai home">
          <span className="brand-mark">L</span><span>Luminai</span>
        </Link>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <nav id="primary-navigation" className={`nav ${open ? "nav-open" : ""}`} aria-label="Primary navigation">
          {nav.map(([label, href]) => <Link key={href} className={pathname.startsWith(href) ? "active" : ""} href={href}>{label}</Link>)}
        </nav>
        <div className="top-actions">
          <Link className="icon-button" href="/search" aria-label="Search Luminai"><Search size={19} /></Link>
          <button className="menu-button" onClick={() => setOpen((value) => !value)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="primary-navigation">{open ? <X size={21} /> : <Menu size={21} />}</button>
        </div>
      </header>
      <main id="main-content">{children}</main>
      <footer className="footer"><span>© {new Date().getFullYear()} Luminai</span><span>Useful things, thoughtfully gathered.</span></footer>
    </div>
  );
}
