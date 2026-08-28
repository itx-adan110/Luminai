import Link from "next/link";

type Item = { title: string; text: string };

export function SectionPage({ eyebrow, title, intro, items, action }: { eyebrow: string; title: string; intro: string; items: Item[]; action?: string }) {
  return <div className="page tool-page">
    <div className="tool-title"><div className="eyebrow">{eyebrow}</div><h1>{title}</h1><p>{intro}</p></div>
    <div className="placeholder-grid">
      {items.map((item) => <article className="placeholder" key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}
    </div>
    {action && <p style={{marginTop:28,color:"var(--muted)"}}><Link href="/search">{action} →</Link></p>}
  </div>;
}
