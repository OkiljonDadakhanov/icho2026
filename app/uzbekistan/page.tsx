import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function UzbekistanPage() {
  return (
    <>
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Discover Uzbekistan</h1>
        <p className="text-lg text-gray-700 text-center">
          Learn about the rich culture, history, and hospitality of Uzbekistan, the host country for IChO 2026.
        </p>
        {/* Add more content here: sections on culture, Tashkent, travel tips */}
      </main>
      <Footer />
    </>
  )
}
