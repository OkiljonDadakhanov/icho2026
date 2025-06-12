import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TashkentOverviewPage() {
  return (
    <>
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Tashkent Overview</h1>
        <p className="text-lg text-gray-700 text-center">
          Discover Tashkent, the vibrant host city of IChO 2026. Learn about its attractions, culture, and amenities.
        </p>
      </main>
      <Footer />
    </>
  )
}
