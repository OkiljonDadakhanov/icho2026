"use client"

import { useState, useEffect } from "react"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    // Set target date to July 1, 2026
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
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {timeUnits.map((unit, index) => (
            <div key={unit.label} className="group">
              <div className="relative">
                {/* Molecular Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${unit.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
                
                {/* Main Card - Test Tube Style */}
                <div className="relative bg-white/90 backdrop-blur-xl border-2 border-gray-200 hover:border-gray-300 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
                  {/* Chemical Formula */}
                  <div className="absolute top-3 right-3 text-xs text-gray-400 font-mono">
                    {unit.element}
                  </div>
                  
                  <div className={`text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r ${unit.color} mb-4 tabular-nums drop-shadow-sm`}>
                    {unit.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-gray-600 text-sm md:text-base uppercase tracking-widest font-bold">
                    {unit.label}
                  </div>
                  
                  {/* Reaction Progress Bar */}
                  <div className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${unit.color} transition-all duration-1000 ease-out rounded-full`}
                      style={{
                        width: unit.label === 'Seconds' ? `${(unit.value / 60) * 100}%` :
                               unit.label === 'Minutes' ? `${(unit.value / 60) * 100}%` :
                               unit.label === 'Hours' ? `${(unit.value / 24) * 100}%` : '100%'
                      }}
                    ></div>
                  </div>
                  
                  {/* Bubbling Effect */}
                  <div className={`absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r ${unit.color} rounded-full animate-ping opacity-75`}></div>
                </div>
              </div>
            </div>
          ))}
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