import type { Metadata } from "next"

export const site = {
  name: "Corporate Training Bangkok",
  url: "https://www.example.com",
  description: "Professional corporate training in Bangkok: leadership, finance, IT & cybersecurity, and more.",
  twitter: "@ctb_thailand",
  logoUrl: "/logo.png",
  locale: "en_US",
}

export function createPageMetadata(opts: {
  title: string
  description: string
  pathname?: string
  images?: string[]
}): Metadata {
  const url = opts.pathname ? `${site.url}${opts.pathname}` : site.url
  const ogImages =
    (opts.images ?? [`${site.url}/og-default.jpg`]).map((u) => ({
      url: u,
      width: 1200,
      height: 630,
      alt: opts.title,
    })) || []

  return {
    title: opts.title,
    description: opts.description,
    // absolute canonical per SEO requirements
    alternates: { canonical: url },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: site.name,
      images: ogImages,
      type: "website",
      locale: site.locale,
    },
    twitter: {
      card: "summary_large_image",
      title: opts.title,
      description: opts.description,
      images: opts.images ?? [`${site.url}/og-default.jpg`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  }
}
