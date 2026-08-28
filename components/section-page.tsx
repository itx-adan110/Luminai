type Props = { kicker: string; title: string; description: string; items: string[] };

export function SectionPage({ kicker, title, description, items }: Props) {
  return <main className="section-pad tool-page">
    <div className="tool-title"><span className="kicker">{kicker}</span><h1>{title}</h1><p>{description}</p></div>
    <div className="placeholder-grid">{items.map((item, index) => <article className="placeholder" key={item}><span className="placeholder-index">0{index + 1}</span><h3>{item}</h3><p>Ready for your own connected content and data source.</p></article>)}</div>
  </main>;
}
