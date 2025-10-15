export type EventItem = {
  id: string
  title: string
  date: string // ISO date
  location: string
  image: string
  href: string
  excerpt: string
}

export const events: EventItem[] = [
  {
    id: "e1",
    title: "Leadership Masterclass",
    date: "2025-11-05",
    location: "Bangkok",
    image: "/finance-training-classroom.jpg",
    href: "/events/leadership-masterclass",
    excerpt: "Advance your leadership skills with practical frameworks and coaching.",
  },
  {
    id: "e2",
    title: "Cybersecurity for Executives",
    date: "2025-12-02",
    location: "Bangkok",
    image: "/cybersecurity-workshop.png",
    href: "/events/cybersecurity-for-executives",
    excerpt: "Understand today’s threats and build resilient security culture.",
  },
  {
    id: "e3",
    title: "Finance for Non‑Finance",
    date: "2026-01-15",
    location: "Bangkok",
    image: "/corporate-training-illustration.jpg",
    href: "/events/finance-for-non-finance",
    excerpt: "Decode financial statements and make data‑driven decisions.",
  },
]
