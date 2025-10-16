import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"
import { Header } from "@/components/Header/Header"
import { Footer } from "@/components/Footer/Footer"
import Script from "next/script"
import { organizationJsonLd, websiteJsonLd } from "@/lib/schema"
import { MuiProviders } from "@/components/MuiProviders"

export const metadata: Metadata = {
  title: "Corporate Training Bangkok (CTB Thailand)",
  description:
    "Professional corporate training in Bangkok: leadership, finance, IT & cybersecurity, and more. Upskill your teams with CTB Thailand.",
  generator: "v0.app",
  metadataBase: new URL("https://www.example.com"),
  openGraph: {
    title: "Corporate Training Bangkok (CTB Thailand)",
    description: "Professional corporate training in Bangkok: leadership, finance, IT & cybersecurity, and more.",
    url: "https://www.example.com",
    siteName: "Corporate Training Bangkok",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Training Bangkok (CTB Thailand)",
    description: "Professional corporate training in Bangkok: leadership, finance, IT & cybersecurity, and more.",
  },
  alternates: { canonical: "/" },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable} antialiased`}>
      <body className="font-sans">
        <MuiProviders>
          <Suspense fallback={null}>
            <Header />
            {children}
            <Footer />
            <Analytics />
            <Script id="ld-org" type="application/ld+json" strategy="afterInteractive">
              {JSON.stringify(organizationJsonLd())}
            </Script>
            <Script id="ld-website" type="application/ld+json" strategy="afterInteractive">
              {JSON.stringify(websiteJsonLd())}
            </Script>
          </Suspense>
        </MuiProviders>
      </body>
    </html>
  )
}
