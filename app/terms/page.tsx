import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function TermsOfServicePage() {
  return (
    <>
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Terms of Service</h1>
        <div className="prose lg:prose-xl max-w-4xl mx-auto text-gray-700">
          <p>Last updated: June 12, 2025</p>
          <p>
            Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the icho2026.uz
            website (the "Service") operated by The IChO 2026 Organizing Committee ("us", "we", or "our").
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-3">Agreement to Terms</h2>
          <p>
            By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the
            terms then you may not access the Service.
          </p>
          {/* Add more detailed sections as required for full terms of service */}
          <h2 className="text-2xl font-semibold mt-6 mb-3">Contact Us</h2>
          <p>If you have any questions about these Terms, please contact us at terms@icho2026.uz.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
