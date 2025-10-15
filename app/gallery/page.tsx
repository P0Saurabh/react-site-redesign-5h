import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"
import GalleryClientPage from "./client"
import Script from "next/script"
import { site } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Gallery | Corporate Training Bangkok",
  description: "Explore our training sessions, workshops, and corporate events in Bangkok.",
  pathname: "/gallery",
})

export default function GalleryPage() {
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Gallery", item: `${site.url}/gallery` },
    ],
  }
  const typedSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Gallery | Corporate Training Bangkok",
    description: "Explore our training sessions, workshops, and corporate events in Bangkok.",
    url: `${site.url}/gallery`,
  }

  return (
    <>
      <GalleryClientPage />
      <Script id="ld-breadcrumbs-gallery" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbList)}
      </Script>
      <Script id="ld-page-gallery" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(typedSchema)}
      </Script>
    </>
  )
}
