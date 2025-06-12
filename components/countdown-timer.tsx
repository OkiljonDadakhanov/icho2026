"use client"

import { useState, useEffect } from "react"

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set target date to July 1, 2026 (approximate)
    const targetDate = new Date("2026-07-01T00:00:00Z").getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-r from-green-600 via-blue-600 to-orange-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Countdown to IChO 2026</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">{timeLeft.days}</div>
            <div className="text-white/80 text-sm uppercase tracking-wide">Days</div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">{timeLeft.hours}</div>
            <div className="text-white/80 text-sm uppercase tracking-wide">Hours</div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">{timeLeft.minutes}</div>
            <div className="text-white/80 text-sm uppercase tracking-wide">Minutes</div>
          </div>

          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">{timeLeft.seconds}</div>
            <div className="text-white/80 text-sm uppercase tracking-wide">Seconds</div>
          </div>
        </div>

        <p className="text-white/90 text-lg mt-8">Until the world's brightest chemistry minds gather in Tashkent</p>
      </div>
    </section>
  )
}
