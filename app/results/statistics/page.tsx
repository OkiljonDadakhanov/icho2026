import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function StatisticsPage() {
  return (
    <>
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">IChO Statistics</h1>
        <p className="text-lg text-gray-700 text-center">
          Explore various statistics related to participation, performance, and trends in the IChO.
        </p>
      </main>
      <Footer />
    </>
  )
}
