import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HistoryPage() {
  return (
    <>
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">History of IChO</h1>
        <p className="text-lg text-gray-700 text-center">
          Explore the rich history of the International Chemistry Olympiad, from its inception to the present day.
        </p>
      </main>
      <Footer />
    </>
  )
}
