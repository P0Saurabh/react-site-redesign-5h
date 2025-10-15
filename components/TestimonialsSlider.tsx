"use client"

import Box from "@mui/material/Box"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import { testimonials } from "@/data/testimonials"

export function TestimonialsSlider() {
  const items = testimonials.map((t) => ({
    quote: t.quote,
    name: t.name,
    designation: [t.role, t.company].filter(Boolean).join(" at "),
    src: t.avatar || "/testimonial-photo.jpg",
  }))

  return (
    <Box role="region" aria-label="Client testimonials">
      <AnimatedTestimonials testimonials={items} autoplay />
    </Box>
  )
}
