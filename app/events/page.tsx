import Link from "next/link"
import { events } from "@/data/events"
import type { Metadata } from "next"
import Script from "next/script"
import { createPageMetadata, site } from "@/lib/seo"

export const metadata: Metadata = createPageMetadata({
  title: "Events | CTB Thailand",
  description: "Upcoming workshops, public trainings, and special events hosted by CTB Thailand.",
  pathname: "/events",
})

export default function EventsPage() {
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Events", item: `${site.url}/events` },
    ],
  }
  const typedSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Events | CTB Thailand",
    description: "Upcoming workshops, public trainings, and special events hosted by CTB Thailand.",
    url: `${site.url}/events`,
  }

  return (
    <main>
      <div className="max-w-4xl mx-auto px-4">
        <header className="py-12 md:py-20">
          <h1 className="text-4xl font-bold mb-4">Events</h1>
          <p className="text-lg text-gray-600 max-w-md">
            Join our upcoming public workshops and special events. Seats are limited—reserve your spot early.
          </p>
        </header>

        <section aria-label="Upcoming events" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events?.map((ev) => (
            <div
              key={ev.id}
              className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <p className="text-xs uppercase text-gray-500 mb-2">
                  {ev.date} • {ev.location}
                </p>
                <h3 className="text-lg font-bold mb-3">{ev.title}</h3>
                <p className="text-sm text-gray-600">{ev.excerpt}</p>
              </div>
              <div className="px-6 pb-6 pt-0">
                {ev.href ? (
                  <Link
                    href={ev.href}
                    className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    View details →
                  </Link>
                ) : (
                  <span className="text-sm text-gray-400">Details soon</span>
                )}
              </div>
            </div>
          ))}
        </section>
      </div>
      <Script id="ld-breadcrumbs-events" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbList)}
      </Script>
      <Script id="ld-page-events" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(typedSchema)}
      </Script>
    </main>
  )
}
