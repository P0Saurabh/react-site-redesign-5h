import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.example.com"
  const paths = ["/", "/about-us", "/events", "/gallery", "/contact", "/signup", "/training-courses"]
  const now = new Date().toISOString()
  return paths.map((p) => ({
    url: `${base}${p}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: p === "/" ? 1 : 0.7,
  }))
}
