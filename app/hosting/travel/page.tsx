import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function VisaTravelPage() {
  return (
    <>
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Visa & Travel Information</h1>
        <p className="text-lg text-gray-700 text-center">
          Essential information regarding visa requirements and travel arrangements for attending IChO 2026 in
          Uzbekistan.
        </p>
      </main>
      <Footer />
    </>
  )
}
