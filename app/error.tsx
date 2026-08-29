"use client";

import { useEffect } from "react";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error("Luminai page error", error); }, [error]);

  return <main className="section-pad status-page">
    <span className="kicker">Something went wrong</span>
    <h1>This page could not load.</h1>
    <p>Try again. If the problem continues, return to the main Luminai page.</p>
    <div className="status-actions"><button className="button button-dark" onClick={reset}>Try again</button><a className="button button-light" href="/">Go home</a></div>
  </main>;
}
