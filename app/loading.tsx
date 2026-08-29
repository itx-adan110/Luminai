export default function Loading() {
  return <main className="section-pad status-page loading-page" aria-live="polite" aria-busy="true">
    <span className="kicker">Loading</span>
    <h1>Preparing Luminai…</h1>
    <div className="loading-lines" aria-hidden="true"><i/><i/><i/></div>
  </main>;
}
