import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Typography from "@mui/material/Typography"
import Stack from "@mui/material/Stack"
import Button from "@mui/material/Button"
import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <Box
      component="section"
      aria-labelledby="home-hero-heading"
      sx={{ py: { xs: 6, md: 10 }, bgcolor: "background.default" }}
    >
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", md: "row" }} gap={6} alignItems="center" justifyContent="space-between">
          <Box sx={{ maxWidth: 640 }}>
            <Typography id="home-hero-heading" variant="h1" sx={{ fontSize: { xs: 28, md: 40 }, mb: 2 }}>
              Upskill Your Team with Expert Corporate Training in Bangkok
            </Typography>
            <Typography variant="body1" sx={{ mb: 3 }}>
              Leadership, finance, IT & cybersecurity, and more — tailored to your organization’s goals.
            </Typography>
            <Stack direction="row" gap={2}>
              <Button component={Link} href="/training-courses" sx={{ bgcolor: "primary.main", color: "common.black" }}>
                View Courses
              </Button>
              <Button component={Link} href="/contact" color="secondary" variant="outlined">
                Contact Us
              </Button>
            </Stack>
          </Box>
          <Box sx={{ width: { xs: "100%", md: 420 }, flexShrink: 0 }}>
            <Image
              src="/corporate-training-illustration.jpg"
              alt="Illustration representing corporate training"
              width={420}
              height={320}
              priority
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
