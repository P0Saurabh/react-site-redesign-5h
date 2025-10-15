export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Corporate Training Bangkok",
    url: "https://www.example.com",
    logo: "https://www.example.com/logo.png",
    sameAs: ["https://www.facebook.com/", "https://www.linkedin.com/"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        email: "training@corporatetrainingbangkok.com",
        telephone: "+66635050506",
        contactType: "customer support",
        areaServed: "TH",
        availableLanguage: ["en", "th"],
      },
    ],
  }
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Corporate Training Bangkok",
    url: "https://www.example.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.example.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }
}
