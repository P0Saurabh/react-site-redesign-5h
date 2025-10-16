import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"

export default function AboutPage() {
  return (
    <main>
      <div className="container mx-auto px-4">
        <header className="py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">About Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We help teams in Thailand level up with practical, outcomes‑driven corporate training. Our instructors blend
            local context with global best practices to create lasting impact.
          </p>
        </header>

        {/* Our Values Section */}
        <section className="py-12 md:py-16" aria-label="Our values">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>Practical First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Hands-on workshops and simulations ensure skills transfer to real work scenarios.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Localized Context</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Training content tuned to Thai business culture and communication norms.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Measurable Outcomes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Clear objectives and follow‑ups so teams—and leaders—see progress that sticks.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-12 md:py-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Approach</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We design programs around your goals, schedule, and team composition. From leadership and communication to
            sales and customer service, our courses are modular, interactive, and tailored.
          </p>
        </section>
      </div>
    </main>
  )
}
