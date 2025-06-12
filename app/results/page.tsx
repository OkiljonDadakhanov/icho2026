import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function ResultsPage() {
  return (
    <>
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Results & Problems</h1>
        <p className="text-lg text-gray-700 text-center">
          Access past results, exam problems, and statistics from previous International Chemistry Olympiads.
        </p>
      </main>
      <Footer />
    </>
  )
}
