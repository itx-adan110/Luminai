import Link from "next/link";
import { ArrowUpRight, Bot, BookOpen, Film, Music2, Search, UserRound } from "lucide-react";

const services = [
  { href: "/ai", label: "Luminai AI", text: "A focused space to think, learn and create with AI.", icon: Bot },
  { href: "/education", label: "Education", text: "Organise past papers and study resources by system, subject and year.", icon: BookOpen },
  { href: "/movies", label: "Movies", text: "A clean home for your own legal media catalogue and discovery tools.", icon: Film },
  { href: "/music", label: "Music", text: "Browse your future music library with search and structured collections.", icon: Music2 },
  { href: "/portfolio", label: "Portfolio", text: "Present projects, skills and professional work with clarity.", icon: UserRound },
];

export default function Home() {
  return (
    <main>
      <section className="hero section-pad">
        <div className="eyebrow">A universal platform · built to grow</div>
        <h1>Useful things, <em>thoughtfully</em> together.</h1>
        <p className="hero-copy">Luminai brings AI, learning resources, media discovery and professional work into one calm, dependable place.</p>
        <div className="hero-actions">
          <Link className="button button-dark" href="/ai">Open Luminai AI <ArrowUpRight size={17} /></Link>
          <Link className="button button-light" href="/search"><Search size={17} /> Search Luminai</Link>
        </div>
      </section>

      <section className="section-pad services-section" aria-labelledby="services-title">
        <div className="section-heading">
          <div><span className="kicker">Explore</span><h2 id="services-title">One platform. Different purposes.</h2></div>
          <p>Each area has its own experience, while sharing the same foundation underneath.</p>
        </div>
        <div className="service-grid">
          {services.map(({ href, label, text, icon: Icon }) => (
            <Link className="service-item" href={href} key={href}>
              <div className="service-icon"><Icon size={20} strokeWidth={1.7} /></div>
              <div className="service-content"><h3>{label}</h3><p>{text}</p></div>
              <ArrowUpRight className="service-arrow" size={18} />
            </Link>
          ))}
        </div>
      </section>

      <section className="statement section-pad">
        <div className="statement-rule" />
        <p>Designed for people who want <strong>less friction</strong>, not more features for the sake of features.</p>
      </section>
    </main>
  );
}
