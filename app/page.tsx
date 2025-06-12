import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { FlagSection } from "@/components/flag-section"
import { CountdownTimer } from "@/components/countdown-timer"
import { Stats } from "@/components/stats"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Navigation />
      <Hero />
      <About />
      <FlagSection />
      <CountdownTimer />
      <Stats />
      <Footer />
    </div>
  )
}
