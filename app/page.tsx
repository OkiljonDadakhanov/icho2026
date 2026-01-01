import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Stats } from "@/components/stats"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import CountdownTimer from "@/components/countdown-timer"

export default function HomePage() {
  return (
    <>
      {/* <Navigation /> */}
      <Hero />
      <CountdownTimer />
      <About />
      <Stats />
      {/* <Footer /> */}
    </>
  )
}
