import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface CategoryCardProps {
  id: number
  name: string
  description: string
  image: string
}

export default function CategoryCard({ name, description, image }: CategoryCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <img src={image || "/placeholder.svg"} alt={name} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle className="text-lg">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  )
}
