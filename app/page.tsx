import type { Metadata } from "next"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Script from "next/script"
import { categories } from "@/data/categories"
import { CategoryCard } from "@/components/CategoryCard/CategoryCard"
import { Hero } from "@/components/Hero/Hero"
import { createPageMetadata, site } from "@/lib/seo"
import { EventsSlider } from "@/components/EventsSlider"
import { TestimonialsSlider } from "@/components/TestimonialsSlider"

export const metadata: Metadata = createPageMetadata({
  title: "Corporate Training Bangkok | Upskill Your Team",
  description:
    "Leadership, finance, and cybersecurity training in Bangkok. Explore categories and courses from CTB Thailand.",
  pathname: "/",
})

export default function HomePage() {
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` }],
  }
  const typedSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Corporate Training Bangkok | Upskill Your Team",
    description:
      "Leadership, finance, and cybersecurity training in Bangkok. Explore categories and courses from CTB Thailand.",
    url: `${site.url}/`,
  }

  return (
    <>
      <main>
        <Hero />

        <Container component="section" maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: 22, md: 28 }, mb: 3 }}>
            Featured Categories
          </Typography>
          <Grid container spacing={3}>
            {categories.slice(0, 6).map((c) => (
              <Grid key={c.id} item xs={12} sm={6} md={4}>
                <CategoryCard
                  title={c.title}
                  summary={c.summary}
                  href={`/course-category/${c.slug}`}
                  iconName={c.icon}
                />
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* Upcoming Events Section */}
        <Container component="section" maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: 22, md: 28 }, mb: 3 }}>
            Upcoming Events
          </Typography>
          <EventsSlider />
        </Container>

        {/* Testimonials Section */}
        <Container component="section" maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
          <Typography variant="h2" sx={{ fontSize: { xs: 22, md: 28 }, mb: 3 }}>
            What Clients Say
          </Typography>
          <TestimonialsSlider />
        </Container>
      </main>

      <Script id="ld-breadcrumbs-home" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbList)}
      </Script>
      <Script id="ld-page-home" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(typedSchema)}
      </Script>
    </>
  )
}
