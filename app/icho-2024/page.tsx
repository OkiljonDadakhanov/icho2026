import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function Icho2024Page() {
  return (
    <>
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">IChO 2024</h1>
        <p className="text-lg text-gray-700 text-center">
          Information about the International Chemistry Olympiad 2024 will be available here.
        </p>
      </main>
      <Footer />
    </>
  )
}
