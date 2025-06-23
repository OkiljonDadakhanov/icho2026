import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Stats } from "@/components/stats"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import CountdownTimer from "@/components/countdown-timer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* <Navigation /> */}
      <Hero />
      <CountdownTimer />
      <About />
      
      <Stats />
      {/* <Footer /> */}
    </div>
  )
}
