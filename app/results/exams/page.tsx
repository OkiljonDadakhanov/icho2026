import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function PastExamsPage() {
  return (
    <>
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Past Exams</h1>
        <p className="text-lg text-gray-700 text-center">
          A repository of past theoretical and practical exam problems from previous IChOs.
        </p>
      </main>
      <Footer />
    </>
  )
}
