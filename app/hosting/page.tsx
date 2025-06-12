import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HostingInfoPage() {
  return (
    <>
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Hosting Info for IChO 2026</h1>
        <p className="text-lg text-gray-700 text-center">
          Comprehensive information for participants and delegations attending IChO 2026 in Tashkent.
        </p>
      </main>
      <Footer />
    </>
  )
}
