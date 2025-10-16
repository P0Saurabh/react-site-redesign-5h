import { events } from "../data/events"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card"
import { formatDate } from "../lib/utils"

export default function EventsPage() {
  return (
    <main>
      <div className="container mx-auto px-4">
        <header className="py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Upcoming Events</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Join us for workshops, masterclasses, and training sessions designed to upskill your team.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader>
                <CardTitle className="line-clamp-2">{event.title}</CardTitle>
                <CardDescription>
                  {formatDate(event.date)} • {event.location}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-3">{event.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}
