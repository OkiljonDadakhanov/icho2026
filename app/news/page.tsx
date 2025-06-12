import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function NewsMediaPage() {
  return (
    <>
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">News & Media</h1>
        <p className="text-lg text-gray-700 text-center">
          Stay updated with the latest news, press releases, and media coverage related to IChO 2026.
        </p>
      </main>
      <Footer />
    </>
  )
}
