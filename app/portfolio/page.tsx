const sections = [
  ["Projects", "Case studies and selected work can live here with links, outcomes and concise context."],
  ["Skills", "Present technical and professional capabilities in a readable, credible format."],
  ["Experience", "Add roles, freelance work, education and milestones without forcing a rigid timeline."],
  ["Contact", "Connect a professional email, social profiles or future contact workflow when ready."],
];

export default function PortfolioPage() {
  return <main className="section-pad tool-page">
    <div className="tool-title portfolio-intro">
      <span className="kicker">Professional profile</span>
      <h1>Work worth showing.</h1>
      <p>A focused professional space for projects, skills and experience. The content is deliberately data-ready so your real profile can replace these structural placeholders without redesigning the page.</p>
    </div>

    <section className="portfolio-overview" aria-label="Portfolio overview">
      <article className="profile-card panel">
        <span className="kicker">Profile</span>
        <h2>Clear, credible, adaptable.</h2>
        <p>Luminai can serve as a professional portfolio and resume alongside the wider platform. Keep the presentation focused on evidence, useful context and real work rather than decorative noise.</p>
        <div className="tags"><span className="tag">Projects</span><span className="tag">Skills</span><span className="tag">Experience</span><span className="tag">Contact</span></div>
      </article>
      <div className="portfolio-note">
        <span className="kicker">Content status</span>
        <h2>Ready for your real information.</h2>
        <p>No personal details have been invented here. Connect your own profile data when you are ready.</p>
      </div>
    </section>

    <section className="portfolio-grid" aria-label="Portfolio sections">
      {sections.map(([title, description], index) => <article className="portfolio-item" key={title}>
        <span className="portfolio-index">{String(index + 1).padStart(2, "0")}</span>
        <h2>{title}</h2>
        <p>{description}</p>
        <span className="status-badge">Content-ready</span>
      </article>)}
    </section>
  </main>;
}
