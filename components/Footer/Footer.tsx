import Box from "@mui/material/Box"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Link from "@mui/material/Link"
import Image from "next/image"
import NextLink from "next/link"
import Stack from "@mui/material/Stack"
import { categories } from "@/data/categories"

export function Footer() {
  return (
    <Box component="footer" sx={{ mt: 8, borderTop: 1, borderColor: "divider", py: 6, bgcolor: "background.paper" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* About/Brand */}
          <Grid item xs={12} md={3}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Image src="/placeholder-logo.png" width={36} height={36} alt="Corporate Training Bangkok logo" />
              <Typography variant="h6" sx={{ color: "secondary.main", fontWeight: 800 }}>
                CTB Thailand
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ mt: 1 }}>
              Professional corporate training in Bangkok. Upskill your teams with expert-led courses.
            </Typography>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography id="footer-quick-links" variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
              Quick Links
            </Typography>
            <Box component="nav" aria-labelledby="footer-quick-links">
              <List sx={{ p: 0 }}>
                <ListItem sx={{ p: 0, mb: 0.5 }}>
                  <Link component={NextLink} href="/" underline="hover">
                    Home
                  </Link>
                </ListItem>
                <ListItem sx={{ p: 0, mb: 0.5 }}>
                  <Link component={NextLink} href="/about-us" underline="hover">
                    About
                  </Link>
                </ListItem>
                <ListItem sx={{ p: 0, mb: 0.5 }}>
                  <Link component={NextLink} href="/training-courses" underline="hover">
                    Training Courses
                  </Link>
                </ListItem>
                <ListItem sx={{ p: 0, mb: 0.5 }}>
                  <Link component={NextLink} href="/contact" underline="hover">
                    Contact
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Grid>

          {/* Categories */}
          <Grid item xs={12} md={3}>
            <Typography id="footer-categories" variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
              Categories
            </Typography>
            <Box component="nav" aria-labelledby="footer-categories">
              <List sx={{ p: 0 }}>
                {categories.slice(0, 6).map((cat) => (
                  <ListItem key={cat.id} sx={{ p: 0, mb: 0.5 }}>
                    <Link component={NextLink} href={`/training-courses?category=${cat.slug}`} underline="hover">
                      {cat.title}
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>

          {/* Contact */}
          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
              Contact
            </Typography>
            <Stack spacing={0.5}>
              <Link href="mailto:training@corporatetrainingbangkok.com" underline="hover">
                training@corporatetrainingbangkok.com
              </Link>
              <Link href="tel:+66635050506" underline="hover">
                +66 63 505 0506
              </Link>
            </Stack>
          </Grid>

          {/* Legal */}
          <Grid item xs={6} md={2}>
            <Typography id="footer-legal" variant="subtitle1" sx={{ fontWeight: 700, mb: 1 }}>
              Legal
            </Typography>
            <Box component="nav" aria-labelledby="footer-legal">
              <List sx={{ p: 0 }}>
                <ListItem sx={{ p: 0, mb: 0.5 }}>
                  <Link component={NextLink} href="/privacy" underline="hover">
                    Privacy
                  </Link>
                </ListItem>
                <ListItem sx={{ p: 0, mb: 0.5 }}>
                  <Link component={NextLink} href="/terms" underline="hover">
                    Terms
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Grid>
        </Grid>
        <Typography variant="caption" sx={{ display: "block", mt: 3, color: "text.secondary" }}>
          © {new Date().getFullYear()} Corporate Training Bangkok. All rights reserved.
        </Typography>
      </Container>
    </Box>
  )
}
