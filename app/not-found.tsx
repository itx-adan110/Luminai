import Link from "next/link";

export default function NotFound() {
  return <main className="section-pad status-page">
    <span className="kicker">404</span>
    <h1>That page is not here.</h1>
    <p>The address may have changed, or the page may not exist yet.</p>
    <div className="status-actions"><Link className="button button-dark" href="/">Go home</Link><Link className="button button-light" href="/search">Search Luminai</Link></div>
  </main>;
}
