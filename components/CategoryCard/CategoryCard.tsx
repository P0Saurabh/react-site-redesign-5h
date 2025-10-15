import type React from "react"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Link from "next/link"
import CardActionArea from "@mui/material/CardActionArea"
import { AccountBalance, AssuredWorkload, Leaderboard, Gavel, Security } from "@mui/icons-material"

export function CategoryCard(props: { title: string; summary: string; href: string; iconName?: string }) {
  const { title, summary, href, iconName } = props

  const ICONS: Record<string, React.ElementType | undefined> = {
    AccountBalance,
    AssuredWorkload,
    Leaderboard,
    Gavel,
    Security,
  }
  const IconComp = iconName ? ICONS[iconName] : undefined

  return (
    <Card
      sx={{
        textDecoration: "none",
        height: "100%",
        transition: "transform .2s ease, box-shadow .2s ease",
        "&:hover": { transform: "translateY(-2px)", boxShadow: 4 },
        "&:focus-within": { boxShadow: 5 },
      }}
    >
      <CardActionArea component={Link as any} href={href} aria-label={title}>
        <CardContent>
          {IconComp ? <IconComp color="primary" sx={{ fontSize: 32, mb: 1 }} /> : null}
          <Typography variant="h6" sx={{ mb: 1, color: "secondary.main", fontWeight: 700 }}>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {summary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
