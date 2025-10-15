"use client"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Card from "@mui/material/Card"
import CardActionArea from "@mui/material/CardActionArea"
import CardMedia from "@mui/material/CardMedia"
import Dialog from "@mui/material/Dialog"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import { useState } from "react"
import { Header } from "@/components/Header/Header"
import { Footer } from "@/components/Footer/Footer"

const images = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  src: `/placeholder.svg?height=640&width=960&query=training+gallery+photo+${i + 1}`,
  alt: `Training gallery photo ${i + 1}`,
}))

export default function GalleryClientPage() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<(typeof images)[number] | null>(null)

  const handleOpen = (img: (typeof images)[number]) => {
    setActive(img)
    setOpen(true)
  }
  const handleClose = () => setOpen(false)

  return (
    <>
      <Header />
      <main>
        <Container component="section" maxWidth="lg" sx={{ py: { xs: 6, md: 8 } }}>
          <Typography variant="h1" sx={{ fontSize: { xs: 24, md: 32 }, mb: 3 }}>
            Gallery
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
            A look into our recent corporate trainings, team workshops, and live events.
          </Typography>

          <Grid container spacing={2}>
            {images.map((img) => (
              <Grid key={img.id} item xs={6} sm={4} md={3}>
                <Card variant="outlined">
                  <CardActionArea onClick={() => handleOpen(img)} aria-label={`View ${img.alt}`}>
                    <CardMedia component="img" image={img.src} alt={img.alt} sx={{ aspectRatio: "4 / 3" }} />
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <Footer />

      <Dialog open={open} onClose={handleClose} aria-labelledby="lightbox-title" maxWidth="lg">
        <Box sx={{ p: 1 }}>
          {active && (
            <>
              {/* Use a plain h2 with sr-only class for screen readers */}
              <h2 id="lightbox-title" className="sr-only">
                Image preview
              </h2>
              <Box sx={{ width: { xs: "90vw", md: "80vw" }, maxWidth: 1200 }}>
                <img
                  src={active.src || "/placeholder.svg"}
                  alt={active.alt}
                  style={{ width: "100%", height: "auto", display: "block" }}
                />
              </Box>
            </>
          )}
        </Box>
      </Dialog>
    </>
  )
}
