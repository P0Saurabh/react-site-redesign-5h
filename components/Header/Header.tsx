"use client"

import type React from "react"

import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Container from "@mui/material/Container"
import Link from "next/link"
import Typography from "@mui/material/Typography"
import IconButton from "@mui/material/IconButton"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import EmailIcon from "@mui/icons-material/Email"
import PhoneIcon from "@mui/icons-material/Phone"
import MenuIcon from "@mui/icons-material/Menu"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { useState } from "react"
import { categories } from "@/data/categories"

export function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => setAnchorEl(null)

  return (
    <Box component="header" sx={{ position: "sticky", top: 0, zIndex: "appBar" }}>
      {/* Top toolbar */}
      <Box sx={{ bgcolor: "secondary.main", color: "common.white" }}>
        <Container maxWidth="lg">
          <Stack direction="row" gap={3} alignItems="center" py={1} justifyContent="flex-end">
            <Stack direction="row" gap={1} alignItems="center" aria-label="Email">
              <EmailIcon fontSize="small" aria-hidden />
              <Typography variant="body2" component="span">
                training@corporatetrainingbangkok.com
              </Typography>
            </Stack>
            <Stack direction="row" gap={1} alignItems="center" aria-label="Phone">
              <PhoneIcon fontSize="small" aria-hidden />
              <Typography variant="body2" component="span">
                +66 63 505 0506
              </Typography>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Main nav */}
      <AppBar position="static" color="inherit" elevation={0} sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ gap: 2 }}>
            <Link href="/" aria-label="Corporate Training Bangkok home" className="no-underline">
              <Typography variant="h6" sx={{ color: "secondary.main", fontWeight: 800 }}>
                CTB Thailand
              </Typography>
            </Link>

            <Box sx={{ flexGrow: 1 }} />

            <Stack direction="row" gap={1} alignItems="center" sx={{ display: { xs: "none", md: "flex" } }}>
              <Button component={Link} href="/" color="secondary" aria-label="Home">
                Home
              </Button>
              <Button component={Link} href="/about" color="secondary" aria-label="About Us">
                About Us
              </Button>
              <Button component={Link} href="/events" color="secondary" aria-label="Events">
                Events
              </Button>
              <Button component={Link} href="/gallery" color="secondary" aria-label="Gallery">
                Gallery
              </Button>
              <Button
                id="categories-button"
                aria-haspopup="menu"
                aria-controls={open ? "categories-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                onClick={handleOpen}
                endIcon={<KeyboardArrowDownIcon />}
                color="secondary"
              >
                Categories
              </Button>
              <Menu
                id="categories-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{ "aria-labelledby": "categories-button", role: "menu" }}
              >
                {categories.map((c) => (
                  <MenuItem
                    key={c.id}
                    component={Link}
                    href={`/course-category/${c.slug}`}
                    onClick={handleClose}
                    role="menuitem"
                  >
                    {c.title}
                  </MenuItem>
                ))}
              </Menu>
              <Button component={Link} href="/contact" color="secondary" aria-label="Contact">
                Contact
              </Button>
              <Button component={Link} href="/signup" sx={{ bgcolor: "primary.main", color: "common.black" }}>
                Sign Up
              </Button>
            </Stack>

            {/* Mobile trigger (placeholder) */}
            <IconButton sx={{ display: { xs: "inline-flex", md: "none" }, ml: 1 }} aria-label="Open menu">
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}
