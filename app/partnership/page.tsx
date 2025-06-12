import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PartnershipPage() {
  return (
    <>
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Partnership Opportunities</h1>
        <p className="text-lg text-gray-700 text-center">
          Discover how to partner with IChO 2026 and support this prestigious global event.
        </p>
        {/* Add more content here: sponsorship tiers, benefits, current partners */}
      </main>
      <Footer />
    </>
  )
}
