export type Category = {
  id: string
  slug: string
  title: string
  summary: string
  icon?: string
}

export const categories: Category[] = [
  {
    id: "acct-fin",
    slug: "accounting-finance",
    title: "Accounting & Finance",
    summary: "Financial reporting, budgeting, analysis, and accounting standards.",
    icon: "AccountBalance",
  },
  {
    id: "bank-ins",
    slug: "banking-insurance",
    title: "Banking & Insurance",
    summary: "Risk, compliance, and operations for financial services.",
    icon: "AssuredWorkload",
  },
  {
    id: "lead-biz",
    slug: "business-leadership",
    title: "Business & Leadership",
    summary: "Leadership, communication, strategy, and team management.",
    icon: "Leaderboard",
  },
  {
    id: "grc",
    slug: "governance-risk-compliance",
    title: "GRC",
    summary: "Governance, risk management, and regulatory compliance.",
    icon: "Gavel",
  },
  {
    id: "it-cyber",
    slug: "it-cyber-security",
    title: "IT & Cyber Security",
    summary: "Cybersecurity, cloud, devops, and modern IT practices.",
    icon: "Security",
  },
]
