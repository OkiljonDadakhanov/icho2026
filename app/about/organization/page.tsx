import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function OrganizationPage() {
  return (
    <>
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">IChO Organization</h1>
        <p className="text-lg text-gray-700 text-center">
          Learn about the organizational structure of the IChO, including the steering committee and host country
          responsibilities.
        </p>
      </main>
      <Footer />
    </>
  )
}
