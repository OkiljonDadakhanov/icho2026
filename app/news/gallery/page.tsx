import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function GalleryPage() {
  return (
    <>
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Photo & Video Gallery</h1>
        <p className="text-lg text-gray-700 text-center">
          Explore photos and videos from IChO events, showcasing the competition and cultural experiences.
        </p>
      </main>
      <Footer />
    </>
  )
}
