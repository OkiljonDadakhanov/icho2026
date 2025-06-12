import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function AboutIchoPage() {
  return (
    <>
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">About IChO</h1>
        <p className="text-lg text-gray-700 text-center">
          General information about the International Chemistry Olympiad.
        </p>
      </main>
      <Footer />
    </>
  )
}
