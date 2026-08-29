export type PlatformSection = {
  label: string;
  type: string;
  href: string;
  description: string;
};

export const platformSections: PlatformSection[] = [
  { label: "Luminai AI", type: "AI", href: "/ai", description: "A conversational workspace for questions, ideas and learning." },
  { label: "Education", type: "Education", href: "/education", description: "Past papers and learning resources organised by your future catalogue." },
  { label: "Movies", type: "Movies", href: "/movies", description: "Browse your own legal movie catalogue and metadata." },
  { label: "Music", type: "Music", href: "/music", description: "Discover artists, albums and collections from your own sources." },
  { label: "Portfolio", type: "Portfolio", href: "/portfolio", description: "A focused professional profile for projects, skills and experience." },
];
