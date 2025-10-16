export default function Hero() {
  return (
    <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-primary/10 to-transparent">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Welcome to Our Platform
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
              Build amazing experiences with our cutting-edge solutions
            </p>
          </div>
          <div className="space-x-4">
            <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground hover:bg-primary/90">
              Get Started
            </button>
            <button className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium hover:bg-accent">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
