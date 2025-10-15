"use client"

import dynamic from "next/dynamic"

// The actual content component currently lives in ./client
const AboutClient = dynamic(() => import("./client"), { ssr: false })

export default function AboutClientWrapper() {
  return <AboutClient />
}
