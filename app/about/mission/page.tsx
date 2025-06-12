import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function MissionPage() {
  return (
    <>
      <Navigation />
      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center">IChO Mission & Vision</h1>
          <div className="prose lg:prose-xl mx-auto text-gray-700 mb-12">
            <p>
              The International Chemistry Olympiad (IChO) is founded on the principle of fostering global talent,
              promoting scientific exchange, and building bridges between young people from diverse cultures. Our core
              mission is to stimulate the interest of students in chemistry through independent and creative solving of
              chemical problems.
            </p>
            <p>
              We aim to promote international contacts in chemistry, friendship among young scientific workers,
              cooperation between pupils, and exchange of pedagogical and scientific experience in chemistry.
            </p>
          </div>

          <h2 className="text-3xl font-bold mb-6 text-center">Our Mission in Motion</h2>
          <div className="bg-white p-2 rounded-lg shadow-xl overflow-hidden">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/ixr_fL53m_8"
                title="IChO 2026 Introduction Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
