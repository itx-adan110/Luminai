# Luminai

A premium, modular universal platform for AI, education, media discovery, universal search, and professional portfolio presentation.

## What is included

- **Luminai AI** — production-structured chat UI with an OpenAI server route.
- **Education** — searchable, filterable architecture for future past papers and learning resources.
- **Movies and Music** — reusable catalogue interfaces designed to connect to legal data sources later.
- **Universal Search** — platform-level discovery UI ready to expand with connected indexes.
- **Portfolio** — professional profile structure for projects, skills, experience and contact.
- Responsive navigation, keyboard support, loading, error and not-found states.
- Metadata, robots and sitemap routes for public deployment.
- CI checks for TypeScript and production builds.

## Stack

- Next.js App Router
- React
- TypeScript
- OpenAI API
- Lucide icons

## Local development

```bash
npm install
npm run dev
```

Open the local address printed by Next.js.

## Environment variables

Copy the example configuration:

```bash
cp .env.example .env.local
```

Then configure:

- `OPENAI_API_KEY` — server-only key used by `/api/chat`.
- `OPENAI_MODEL` — optional model override.
- `NEXT_PUBLIC_SITE_URL` — the canonical public site URL, used for metadata, robots and sitemap output.

Never commit real credentials or expose `OPENAI_API_KEY` with a `NEXT_PUBLIC_` prefix.

## Deploying

The project is ready to deploy as a Next.js application.

1. Import the repository into your deployment provider.
2. Keep the framework preset as **Next.js**.
3. Add `NEXT_PUBLIC_SITE_URL` with your real public domain.
4. Add `OPENAI_API_KEY` only if you want Luminai AI enabled.
5. Optionally set `OPENAI_MODEL`.
6. Deploy.

Without an OpenAI key, the rest of the platform remains available and the AI route returns a clear configuration message instead of pretending to be connected.

## Quality checks

```bash
npm run lint
npm run build
```

The GitHub Actions workflow runs the same typecheck and production build checks on pushes and pull requests to `main`.

## Future integration points

The UI is intentionally separated from external content providers. Future additions can include:

- Databases and authentication
- Education resource indexes
- Movie and music metadata APIs
- Media detail pages
- User libraries and saved collections
- Additional AI tools
- New platform sections

No copyrighted or pirated media is bundled into the project.
