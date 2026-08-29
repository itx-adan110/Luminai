import { MediaCatalogue } from "@/components/media-catalogue";

export default function MusicPage() {
  return <MediaCatalogue
    kicker="Music"
    title="Music discovery, without the clutter."
    description="A focused browsing layer for your own legal music catalogue, designed to grow from simple collections into richer artist and album views."
    filters={["Discover", "Artists", "Albums", "Collections"]}
    capabilities={[
      { title: "Discover", description: "Create a flexible landing area for featured releases and curated discovery." },
      { title: "Artists", description: "Connect artist profiles and metadata from your chosen legal source later." },
      { title: "Albums", description: "Support album-first browsing with room for artwork, metadata and track views." },
      { title: "Collections", description: "Organise saved or editorial collections without redesigning the browsing system." },
    ]}
  />;
}
