"use client"

import { useState } from "react"
import { X } from "lucide-react"

const images = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  src: `/placeholder.svg?height=640&width=960&query=training+gallery+photo+${i + 1}`,
  alt: `Training gallery photo ${i + 1}`,
}))

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<(typeof images)[number] | null>(null)

  return (
    <main>
      <div className="container mx-auto px-4">
        <header className="py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A look into our recent corporate trainings, team workshops, and live events.
          </p>
        </header>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 py-12">
          {images.map((img) => (
            <button
              key={img.id}
              onClick={() => setSelectedImage(img)}
              className="aspect-square overflow-hidden rounded-lg border hover:border-primary transition-colors cursor-pointer group"
              aria-label={`View ${img.alt}`}
            >
              <img
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>
            <img
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </main>
  )
}
