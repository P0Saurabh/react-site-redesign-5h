import { events } from "@/data/events"
import { formatDate } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function EventsSlider() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {events.map((event) => (
        <Card key={event.id}>
          <CardHeader>
            <CardTitle className="text-lg">{event.title}</CardTitle>
            <CardDescription>{formatDate(event.date)}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-2">{event.location}</p>
            <p className="text-sm">{event.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
