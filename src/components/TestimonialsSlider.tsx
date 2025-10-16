export default function TestimonialsSlider() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      role: "CEO, Tech Company",
      content: "Amazing service and support. Highly recommended!",
      image: "/diverse-group.png",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "Designer, Creative Studio",
      content: "The best solution we've found for our needs.",
      image: "/diverse-group.png",
    },
    {
      id: 3,
      name: "Mike Johnson",
      role: "Developer, Startup",
      content: "Excellent documentation and community support.",
      image: "/diverse-group.png",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="p-6 rounded-lg border bg-card">
          <p className="text-sm text-gray-600 mb-4">"{testimonial.content}"</p>
          <div className="flex items-center gap-3">
            <img
              src={testimonial.image || "/placeholder.svg"}
              alt={testimonial.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold text-sm">{testimonial.name}</p>
              <p className="text-xs text-gray-500">{testimonial.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
