// "use client" is required because we use CSS animations that may derive from props.
"use client"

import * as React from "react"
import Box from "@mui/material/Box"

type Direction = "left" | "right"
type Speed = "fast" | "normal" | "slow"

export interface InfiniteMarqueeProps {
  children: React.ReactNode // pass your existing cards as children to keep them unchanged
  direction?: Direction
  speed?: Speed
  pauseOnHover?: boolean
  gap?: number // px gap between items; default 16
  "aria-label"?: string
  className?: string
}

/**
 * InfiniteMarquee
 * - Duplicates children once to create a seamless marquee effect.
 * - Uses CSS keyframes defined via sx for portability in MUI.
 * - Keeps your existing card design intact—just wrap your mapped cards.
 */
export function InfiniteMarquee({
  children,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  gap = 16,
  className,
  ...rest
}: InfiniteMarqueeProps) {
  // Map speed -> duration
  const duration = React.useMemo(() => {
    switch (speed) {
      case "fast":
        return "20s"
      case "slow":
        return "80s"
      default:
        return "40s"
    }
  }, [speed])

  // We render children twice for seamless looping.
  // Wrap items in a flex row with nowrap so width is intrinsic.
  return (
    <Box
      role="region"
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        // Create a subtle edge mask like the demo:
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
      className={className}
      {...rest}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          width: "max-content",
          gap: `${gap}px`,
          py: 1,
          animationName: "v0-marquee-scroll",
          animationDuration: duration,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDirection: direction === "left" ? "normal" : "reverse",
          "&:hover": pauseOnHover ? { animationPlayState: "paused" } : undefined,
          // Keyframes for smooth continuous scroll (translate by 50% because content is duplicated)
          "@keyframes v0-marquee-scroll": {
            "0%": { transform: "translateX(0)" },
            "100%": { transform: "translateX(-50%)" },
          },
        }}
      >
        {/* First copy */}
        <Box component="div" sx={{ display: "flex", flexWrap: "nowrap", gap: `${gap}px` }}>
          {children}
        </Box>
        {/* Duplicate copy */}
        <Box component="div" sx={{ display: "flex", flexWrap: "nowrap", gap: `${gap}px` }} aria-hidden="true">
          {children}
        </Box>
      </Box>
    </Box>
  )
}
