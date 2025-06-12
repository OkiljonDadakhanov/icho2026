import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Privacy Policy</h1>
        <div className="prose lg:prose-xl max-w-4xl mx-auto text-gray-700">
          <p>Last updated: June 12, 2025</p>
          <p>
            The IChO 2026 Organizing Committee ("us", "we", or "our") operates the icho2026.uz website (the "Service").
            This page informs you of our policies regarding the collection, use, and disclosure of personal data when
            you use our Service and the choices you have associated with that data.
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-3">Information Collection and Use</h2>
          <p>
            We collect several different types of information for various purposes to provide and improve our Service to
            you. Types of Data Collected: Personal Data (e.g., email address, name, usage data).
          </p>
          <h2 className="text-2xl font-semibold mt-6 mb-3">Use of Data</h2>
          <p>
            IChO 2026 uses the collected data for various purposes: to provide and maintain the Service, to notify you
            about changes to our Service, etc.
          </p>
          {/* Add more detailed sections as required for a full privacy policy */}
          <h2 className="text-2xl font-semibold mt-6 mb-3">Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us at privacy@icho2026.uz.</p>
        </div>
      </main>
      <Footer />
    </>
  )
}
