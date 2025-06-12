import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Icho2024ArchivePage() {
  return (
    <>
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">IChO 2024 - Archive</h1>
        <p className="text-lg text-gray-700 text-center">Archived materials from IChO 2024.</p>
      </main>
      <Footer />
    </>
  )
}
