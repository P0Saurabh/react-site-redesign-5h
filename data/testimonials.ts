export type Testimonial = {
  id: string
  name: string
  role: string
  company: string
  avatar?: string
  quote: string
  rating?: number
}

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Somsak Chai",
    role: "HR Director",
    company: "ThaiFoods Co.",
    avatar: "/placeholder-user.jpg",
    quote: "CTB transformed our leadership culture. The facilitation was engaging and deeply practical.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Nicha W.",
    role: "CISO",
    company: "FinTech Asia",
    avatar: "/placeholder-user.jpg",
    quote: "Their cybersecurity workshops helped our execs grasp risk in plain language and act decisively.",
    rating: 5,
  },
  {
    id: "t3",
    name: "John Miller",
    role: "Operations Lead",
    company: "Global Logistics",
    avatar: "/placeholder-user.jpg",
    quote: "Clear frameworks, great energy, and tools we still use months later. Highly recommend.",
    rating: 5,
  },
]
