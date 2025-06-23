"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin, Users, ChevronRight, PlayCircle, Sparkles } from "lucide-react"
import Link from "next/link"
import { VideoPlayer } from "@/components/video-player"

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const introVideoUrl = "https://www.youtube.com/embed/MsnCtB7kCUU?autoplay=1"

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-sky-500/5 to-amber-500/5"></div>

        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-2xl rotate-12 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-sky-400/20 to-sky-600/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-3xl -rotate-6 animate-float-slow"></div>

        {/* Modern grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          {/* Logo with modern styling */}
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-full blur-xl opacity-20 animate-pulse-gentle"></div>
            <img
              src="/images/images.jpg"
              alt="IChO 2026 Logo"
              className="relative w-44 h-44 md:w-32 md:h-32 mx-auto rounded-2xl shadow-2xl bg-white/80 backdrop-blur-sm p-3 border border-white/20"
            />
          </div>

          {/* Modern typography hierarchy */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium text-slate-600">
              <Sparkles className="w-4 h-4 text-emerald-500" />
              <span>58th International Chemistry Olympiad</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
              <span className="block text-slate-900 mb-2">Chemistry</span>
              <span className="block bg-gradient-to-r from-emerald-600 via-sky-600 to-amber-600 bg-clip-text text-transparent">
                Olympiad 2026
              </span>
            </h1>
          </div>

          {/* Event details with modern cards */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="p-2 bg-emerald-100 rounded-xl">
                <CalendarDays className="h-5 w-5 text-emerald-600" />
              </div>
              <span className="font-semibold text-slate-700">July 2026</span>
            </div>

            <div className="flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="p-2 bg-sky-100 rounded-xl">
                <MapPin className="h-5 w-5 text-sky-600" />
              </div>
              <span className="font-semibold text-slate-700">Tashkent, Uzbekistan</span>
            </div>

            <div className="flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="p-2 bg-amber-100 rounded-xl">
                <Users className="h-5 w-5 text-amber-600" />
              </div>
              <span className="font-semibold text-slate-700">80+ Countries</span>
            </div>
          </div>

          {/* Modern tagline */}
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Where brilliant minds converge to push the boundaries of
            <span className="font-semibold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
              {" "}
              chemical innovation
            </span>
          </p>

          {/* Modern CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
   

            <Button
              size="lg"
              variant="outline"
              className="bg-white/60 backdrop-blur-sm border-white/20 text-slate-700 hover:bg-white/80 px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              onClick={() => setIsVideoOpen(true)}
            >
              <PlayCircle className="mr-2 h-5 w-5 text-emerald-600 group-hover:scale-110 transition-transform" />
              Watch Intro
            </Button>
          </div>

          {/* Modern footer text */}
          <p className="text-sm text-slate-500 font-light pt-8 max-w-2xl mx-auto">
            Join us in Tashkent for an extraordinary celebration of scientific excellence, cultural exchange, and the
            future of chemistry education.
          </p>
        </div>
      </div>

      <VideoPlayer isOpen={isVideoOpen} setIsOpen={setIsVideoOpen} videoUrl={introVideoUrl} />
    </section>
  )
}
