import { categories } from "../data/categories"
import Hero from "../components/Hero"
import EventsSlider from "../components/EventsSlider"
import TestimonialsSlider from "../components/TestimonialsSlider"
import CategoryCard from "../components/CategoryCard"

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Featured Categories Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Featured Categories</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(0, 6).map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Upcoming Events</h2>
          </div>
          <EventsSlider />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">What Clients Say</h2>
          </div>
          <TestimonialsSlider />
        </div>
      </section>
    </>
  )
}
