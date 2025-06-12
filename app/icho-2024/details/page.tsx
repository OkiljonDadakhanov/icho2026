import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Icho2024DetailsPage() {
  return (
    <>
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">IChO 2024 - Event Details</h1>
        <p className="text-lg text-gray-700 text-center">Detailed information about the IChO 2024 event.</p>
      </main>
      <Footer />
    </>
  )
}
