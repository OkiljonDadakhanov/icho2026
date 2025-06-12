import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PressReleasesPage() {
  return (
    <>
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Press Releases</h1>
        <p className="text-lg text-gray-700 text-center">
          Official press releases and announcements from the IChO 2026 organizing committee.
        </p>
      </main>
      <Footer />
    </>
  )
}
