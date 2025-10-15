"use client"

import { Container, Box, Typography, Grid, Card, CardContent, NoSsr } from "@mui/material"
import Script from "next/script"
import { site } from "@/lib/seo"

export default function AboutClient() {
  const breadcrumbList = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "About", item: `${site.url}/about` },
    ],
  }
  const typedSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Us | CTB Thailand",
    description:
      "Learn about CTB Thailand’s mission, approach, and impact delivering corporate training in Bangkok and across Thailand.",
    url: `${site.url}/about`,
  }

  return (
    <main>
      <NoSsr>
        <Container maxWidth="lg">
          <Box component="header" py={{ xs: 6, md: 10 }}>
            <Typography component="h1" variant="h3" fontWeight={700} gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" color="text.secondary" maxWidth="md">
              We help teams in Thailand level up with practical, outcomes‑driven corporate training. Our instructors
              blend local context with global best practices to create lasting impact.
            </Typography>
          </Box>

          <Grid container spacing={3} component="section" aria-label="Our values">
            <Grid item xs={12} md={4}>
              <Card elevation={1}>
                <CardContent>
                  <Typography variant="h6" fontWeight={700}>
                    Practical First
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Hands-on workshops and simulations ensure skills transfer to real work scenarios.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card elevation={1}>
                <CardContent>
                  <Typography variant="h6" fontWeight={700}>
                    Localized Context
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Training content tuned to Thai business culture and communication norms.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card elevation={1}>
                <CardContent>
                  <Typography variant="h6" fontWeight={700}>
                    Measurable Outcomes
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Clear objectives and follow‑ups so teams—and leaders—see progress that sticks.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Box component="section" py={{ xs: 6, md: 10 }}>
            <Typography variant="h5" fontWeight={700} gutterBottom>
              Our Approach
            </Typography>
            <Typography variant="body1" color="text.secondary" maxWidth="md">
              We design programs around your goals, schedule, and team composition. From leadership and communication to
              sales and customer service, our courses are modular, interactive, and tailored.
            </Typography>
          </Box>
        </Container>
      </NoSsr>

      {/* Keep JSON-LD on the client; Script is a client component */}
      <Script id="ld-breadcrumbs-about" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(breadcrumbList)}
      </Script>
      <Script id="ld-page-about" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(typedSchema)}
      </Script>
    </main>
  )
}
