import { Container, Box, Typography, Grid, Card, CardContent, CardActions, Button } from "@mui/material"
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
      <Container maxWidth="lg">
        <Box component="header" py={{ xs: 6, md: 10 }}>
          <Typography component="h1" variant="h3" fontWeight={700} gutterBottom>
            Events
          </Typography>
          <Typography variant="body1" color="text.secondary" maxWidth="md">
            Join our upcoming public workshops and special events. Seats are limited—reserve your spot early.
          </Typography>
        </Box>

        <Grid container spacing={3} component="section" aria-label="Upcoming events">
          {events?.map((ev) => (
            <Grid key={ev.id} item xs={12} sm={6} md={4}>
              <Card variant="outlined">
                <CardContent>
                  <Typography variant="overline" color="text.secondary">
                    {ev.date} • {ev.location}
                  </Typography>
                  <Typography variant="h6" fontWeight={700} gutterBottom>
                    {ev.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {ev.excerpt}
                  </Typography>
                </CardContent>
                <CardActions>
                  {ev.href ? (
                    <Button component={Link} href={ev.href} size="small" color="primary">
                      View details
                    </Button>
                  ) : (
                    <Button disabled size="small">
                      Details soon
                    </Button>
                  )}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Script id="ld-breadcrumbs-events" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbList)}
      </Script>
      <Script id="ld-page-events" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(typedSchema)}
      </Script>
    </main>
  )
}
