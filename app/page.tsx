import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Stats } from "@/components/stats"
import CountdownTimer from "@/components/countdown-timer"
import { WelcomeMessages } from "@/components/welcoming";


export default function HomePage() {
  return (
    <>
      {/* <Navigation /> */}
      <Hero />
      <WelcomeMessages />
      <CountdownTimer />
      <About />
      <Stats />
      {/* <Footer /> */}
    </>
  )
}
