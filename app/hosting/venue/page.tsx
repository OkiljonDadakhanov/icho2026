import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function VenueLabsPage() {
  return (
    <>
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Venue & Labs</h1>
        <p className="text-lg text-gray-700 text-center">
          Information about the competition venue, laboratory facilities, and event locations for IChO 2026.
        </p>
      </main>
      <Footer />
    </>
  )
}
