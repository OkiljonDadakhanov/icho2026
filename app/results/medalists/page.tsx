import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function MedalistsPage() {
  return (
    <>
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">IChO Medalists</h1>
        <p className="text-lg text-gray-700 text-center">
          Celebrate the achievements of past IChO medalists from around the world.
        </p>
      </main>
      <Footer />
    </>
  )
}
