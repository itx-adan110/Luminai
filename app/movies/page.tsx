import { MediaCatalogue } from "@/components/media-catalogue";

export default function MoviesPage() {
  return <MediaCatalogue
    kicker="Movies"
    title="A catalogue built around your collection."
    description="Browse, search and organise legal movie metadata from your own sources. The interface is intentionally separated from the future content provider."
    filters={["Browse", "Genres", "Search", "Details"]}
    capabilities={[
      { title: "Browse", description: "A responsive entry point for featured collections and future catalogue rows." },
      { title: "Genres", description: "Organise connected titles by flexible genres without coupling the UI to one provider." },
      { title: "Search", description: "Prepare fast discovery across titles, people, collections and future metadata." },
      { title: "Details", description: "Reserve a clean path for detail views, credits, descriptions and source-specific actions." },
    ]}
  />;
}
