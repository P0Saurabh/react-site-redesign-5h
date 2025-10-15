"use client"

import Link from "next/link"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActionArea from "@mui/material/CardActionArea"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Typography from "@mui/material/Typography"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { InfiniteMarquee } from "@/components/ui/infinite-marquee"
import { events } from "@/data/events"

export type EventsSliderProps = {
  variant?: "marquee" | "carousel"
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
  pauseOnHover?: boolean
  gap?: number
}

export function EventsSlider({
  variant = "marquee",
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  gap = 16,
}: EventsSliderProps) {
  if (variant === "marquee") {
    return (
      <Box role="region" aria-label="Upcoming events marquee" sx={{ px: { xs: 2, sm: 3 } }}>
        <InfiniteMarquee
          direction={direction}
          speed={speed}
          pauseOnHover={pauseOnHover}
          gap={gap}
          aria-label="Upcoming events"
        >
          {events.map((ev) => (
            <Box
              key={ev.id}
              sx={{
                flex: "0 0 auto",
                width: { xs: 280, sm: 320, md: 360 },
              }}
            >
              <Card variant="outlined" sx={{ height: "100%" }}>
                <CardActionArea component={Link} href={ev.href} sx={{ height: "100%" }}>
                  <CardMedia component="img" height="160" image={ev.image} alt={ev.title} />
                  <CardContent>
                    <Typography variant="overline" component="p" sx={{ display: "block", mb: 0.5 }}>
                      {new Date(ev.date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}{" "}
                      • {ev.location}
                    </Typography>
                    <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                      {ev.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1.5 }}>
                      {ev.excerpt}
                    </Typography>
                    <Typography variant="button" color="primary">
                      {"Learn more →"}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          ))}
        </InfiniteMarquee>
      </Box>
    )
  }

  return (
    <Box role="region" aria-label="Upcoming events carousel">
      <Carousel className="px-12">
        <CarouselContent className="py-2">
          {events.map((ev) => (
            <CarouselItem key={ev.id} className="basis-full sm:basis-1/2 md:basis-1/3">
              <Card variant="outlined" sx={{ height: "100%" }}>
                <CardActionArea component={Link} href={ev.href} sx={{ height: "100%" }}>
                  <CardMedia component="img" height="160" image={ev.image} alt={ev.title} />
                  <CardContent>
                    <Typography variant="overline" component="p" sx={{ display: "block", mb: 0.5 }}>
                      {new Date(ev.date).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}{" "}
                      • {ev.location}
                    </Typography>
                    <Typography variant="h6" component="h3" sx={{ mb: 1 }}>
                      {ev.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 1.5 }}>
                      {ev.excerpt}
                    </Typography>
                    <Typography variant="button" color="primary">
                      {"Learn more →"}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious aria-label="Previous events" />
        <CarouselNext aria-label="Next events" />
      </Carousel>
    </Box>
  )
}
