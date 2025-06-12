import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function VideosPage() {
  return (
    <>
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Videos</h1>
        <p className="text-lg text-gray-700 text-center">
          Watch videos related to IChO, including highlights, interviews, and promotional content.
        </p>
      </main>
      <Footer />
    </>
  )
}
