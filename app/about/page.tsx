import type { Metadata } from "next"
import { createPageMetadata } from "@/lib/seo"
import AboutClientWrapper from "./client-wrapper"

export const metadata: Metadata = createPageMetadata({
  title: "About Us | CTB Thailand",
  description:
    "Learn about CTB Thailand’s mission, approach, and impact delivering corporate training in Bangkok and across Thailand.",
  pathname: "/about",
})

export default function AboutPage() {
  return <AboutClientWrapper />
}
