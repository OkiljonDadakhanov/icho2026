import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Stats } from "@/components/stats"
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
