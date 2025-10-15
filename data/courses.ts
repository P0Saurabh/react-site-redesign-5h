export type Course = {
  id: string
  slug: string
  title: string
  summary: string
  categoryId: string
  duration: string
  level: "Beginner" | "Intermediate" | "Advanced"
  image: string
  syllabus: string[]
  outcomes: string[]
}

export const courses: Course[] = [
  {
    id: "c-fin-001",
    slug: "financial-reporting-essentials",
    title: "Financial Reporting Essentials",
    summary: "Master core reporting concepts and best practices.",
    categoryId: "acct-fin",
    duration: "2 days",
    level: "Beginner",
    image: "/finance-training-classroom.jpg",
    syllabus: ["Accounting principles overview", "IFRS vs GAAP", "Financial statements deep dive"],
    outcomes: [
      "Produce accurate financial statements",
      "Understand key financial ratios",
      "Communicate results to stakeholders",
    ],
  },
  {
    id: "c-sec-001",
    slug: "foundations-of-cybersecurity",
    title: "Foundations of Cybersecurity",
    summary: "Threats, controls, and response fundamentals.",
    categoryId: "it-cyber",
    duration: "3 days",
    level: "Intermediate",
    image: "/cybersecurity-workshop.png",
    syllabus: ["Threat landscape", "Network security basics", "Incident response intro"],
    outcomes: ["Identify common threats", "Harden basic environments", "Respond to incidents"],
  },
]
