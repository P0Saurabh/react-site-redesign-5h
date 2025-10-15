import type { Metadata } from "next"
import Script from "next/script"
import { createPageMetadata, site } from "@/lib/seo"
import ContactForm from "@/components/ContactForm"

export const metadata: Metadata = createPageMetadata({
  title: "Contact Us | CTB Thailand",
  description: "Get in touch with CTB Thailand—request a quote, ask about courses, or schedule a workshop.",
  pathname: "/contact",
})

export default function ContactPage() {
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Contact", item: `${site.url}/contact` },
    ],
  }
  const typedSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Us | CTB Thailand",
    description: "Get in touch with CTB Thailand—request a quote, ask about courses, or schedule a workshop.",
    url: `${site.url}/contact`,
  }

  return (
    <main>
      <div className="container mx-auto px-4">
        <header className="py-6 md:py-10">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Contact Us</h1>
          <p className="mt-3 max-w-prose text-muted-foreground">
            Tell us about your team and goals. We’ll recommend the right training plan and follow up within 1–2 business
            days.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <section aria-label="Contact form" className="rounded-lg border bg-card text-card-foreground shadow">
            <div className="p-6">
              <h2 className="mb-3 text-lg font-semibold">Send a message</h2>
              <ContactForm />
            </div>
          </section>

          <aside aria-label="Contact details" className="rounded-lg border bg-card text-card-foreground shadow">
            <div className="p-6 space-y-2">
              <h2 className="mb-3 text-lg font-semibold">Reach us</h2>
              <p className="text-sm text-muted-foreground">
                Email:{" "}
                <a
                  href="mailto:hello@ctb.th"
                  aria-label="Email hello at c t b dot t h"
                  className="underline underline-offset-2"
                >
                  hello@ctb.th
                </a>
              </p>
              <p className="text-sm text-muted-foreground">
                Phone:{" "}
                <a
                  href="tel:+6620000000"
                  aria-label="Call plus six six two and seven zeros"
                  className="underline underline-offset-2"
                >
                  +66 2 000 0000
                </a>
              </p>
              <p className="text-sm text-muted-foreground">Bangkok, Thailand</p>
            </div>
          </aside>
        </div>
      </div>

      <Script id="ld-breadcrumbs-contact" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbList)}
      </Script>
      <Script id="ld-page-contact" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(typedSchema)}
      </Script>
    </main>
  )
}
