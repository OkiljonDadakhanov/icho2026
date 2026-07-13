"use client"

import { useEffect, useState } from "react"
import { EVENT } from "@/lib/constants"

const TARGET_DATE = EVENT.targetDate.getTime()

function getTimeLeft() {
  const now = new Date().getTime()
  const difference = TARGET_DATE - now

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
  }
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null
    const updateTimeLeft = () => {
      setTimeLeft(getTimeLeft())
    }

    const startTimer = () => {
      if (!timer) {
        timer = setInterval(updateTimeLeft, 1000)
      }
    }

    const stopTimer = () => {
      if (timer) {
        clearInterval(timer)
        timer = null
      }
    }

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopTimer()
      } else {
        updateTimeLeft()
        startTimer()
      }
    }

    startTimer()
    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      stopTimer()
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [])

  const timeUnits = [
    { value: timeLeft.days, label: "Days", color: "from-blue-500 to-indigo-600", element: "H₂O" },
    { value: timeLeft.hours, label: "Hours", color: "from-green-500 to-emerald-600", element: "CO₂" },
    { value: timeLeft.minutes, label: "Minutes", color: "from-orange-500 to-red-600", element: "NaCl" },
    { value: timeLeft.seconds, label: "Seconds", color: "from-purple-500 to-pink-600", element: "C₆H₁₂O₆" },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 relative overflow-hidden flex items-center justify-center">
      {/* Animated Molecular Background */}
      <div className="absolute inset-0">
        {/* Large molecular structures */}
        <div className="absolute top-20 left-20 w-32 h-32 border-4 border-blue-300/30 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute top-40 left-40 w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute top-32 left-56 w-6 h-6 bg-green-400 rounded-full animate-pulse"></div>
        
        <div className="absolute bottom-32 right-32 w-40 h-40 border-4 border-green-300/30 rounded-full animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
        <div className="absolute bottom-48 right-48 w-5 h-5 bg-orange-400 rounded-full animate-bounce delay-500"></div>
        <div className="absolute bottom-40 right-64 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000"></div>

        {/* Connecting lines - bonds */}
        <div className="absolute top-1/4 left-1/3 w-24 h-0.5 bg-blue-300/50 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-0.5 bg-green-300/50 -rotate-12 animate-pulse delay-500"></div>
        <div className="absolute top-1/2 left-1/2 w-20 h-0.5 bg-orange-300/50 rotate-90 animate-pulse delay-1000"></div>
      </div>

      {/* Hexagonal Pattern Overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Title */}
        <div className="mb-16">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-600 to-orange-600 mb-4 tracking-tight drop-shadow-sm">
            IChO 2026
          </h1>
          <div className="flex items-center justify-center mb-8">
            <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500"></div>
            <div className="w-8 h-8 bg-green-500 rounded-full"></div>
            <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-orange-500"></div>
            <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 font-medium">
            International Chemistry Olympiad in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 font-bold">Tashkent</span>
          </p>
        </div>

        {/* Countdown Grid */}
    {/* Olympiad Welcome Message */}
<div className="max-w-5xl mx-auto">
  <div className="relative">
    {/* Glow */}
    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-green-500/20 to-orange-500/20 blur-3xl rounded-[3rem]" />

    <div className="relative bg-white/85 backdrop-blur-xl border border-white/60 rounded-[2rem] shadow-2xl p-8 md:p-14">
      <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold mb-8 shadow-lg">
        <span className="w-3 h-3 rounded-full bg-white animate-pulse" />
        The Olympiad Has Officially Begun
      </div>

      <h2 className="text-4xl md:text-6xl font-black leading-tight bg-gradient-to-r from-blue-600 via-green-600 to-orange-500 bg-clip-text text-transparent mb-8">
        Welcome to the 58th International Chemistry Olympiad
      </h2>

      <div className="space-y-6 text-lg md:text-xl leading-9 text-gray-700">
        <p>
          Today, Tashkent proudly welcomes the world's most talented young
          chemists, distinguished mentors, observers, and guests for a week of
          scientific excellence, cultural exchange, and international friendship.
        </p>

        <p>
          Beyond the examinations, this Olympiad celebrates curiosity,
          collaboration, and the shared belief that science has the power to
          shape a better future for humanity.
        </p>

        <p>
          May every experiment inspire discovery, every conversation spark new
          ideas, and every friendship created here endure long after the medals
          have been awarded.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <div className="px-6 py-3 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-semibold">
          🇺🇿 Tashkent, Uzbekistan
        </div>

        <div className="px-6 py-3 rounded-full bg-green-50 border border-green-200 text-green-700 font-semibold">
          🔬 Inspiring Excellence in Chemistry
        </div>

        <div className="px-6 py-3 rounded-full bg-orange-50 border border-orange-200 text-orange-700 font-semibold">
          🌍 One World • One Science • One Future
        </div>
      </div>
    </div>
  </div>
</div>
        {/* Bottom Message with Chemical Equation Style */}
        <div className="relative">
         
        </div>
      </div>

      {/* Floating Atoms and Molecules */}
      <div className="absolute top-16 left-16 flex items-center space-x-1">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-1000"></div>
        <div className="w-1 h-1 bg-gray-400"></div>
        <div className="w-3 h-3 bg-red-500 rounded-full animate-bounce delay-1200"></div>
      </div>
      
      <div className="absolute bottom-16 right-16 flex items-center space-x-1">
        <div className="w-5 h-5 bg-green-500 rounded-full animate-bounce delay-2000"></div>
        <div className="w-1 h-1 bg-gray-400"></div>
        <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce delay-2200"></div>
        <div className="w-1 h-1 bg-gray-400"></div>
        <div className="w-4 h-4 bg-orange-500 rounded-full animate-bounce delay-2400"></div>
      </div>
      
      <div className="absolute top-1/3 right-12 transform rotate-45">
        <div className="flex flex-col items-center space-y-1">
          <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse delay-1500"></div>
          <div className="w-0.5 h-4 bg-gray-400"></div>
          <div className="w-4 h-4 bg-pink-500 rounded-full animate-pulse delay-1700"></div>
        </div>
      </div>
    </section>
  )
}
