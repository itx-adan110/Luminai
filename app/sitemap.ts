import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://luminai.example";
  const paths = ["/", "/ai", "/education", "/movies", "/music", "/portfolio", "/search"];
  return paths.map((path) => ({ url: `${baseUrl}${path}`, changeFrequency: "weekly", priority: path === "/" ? 1 : 0.7 }));
}
