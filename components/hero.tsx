"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CalendarDays, MapPin, Users, ChevronRight, PlayCircle } from "lucide-react"
import Link from "next/link"
import { VideoPlayer } from "@/components/video-player"

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const introVideoUrl = "https://www.youtube.com/embed/MsnCtB7kCUU?autoplay=1"

  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Subtle animated gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/10 to-orange-500/10 animate-gradient-xy"></div>
        {/* Placeholder for Uzbek pattern - subtle */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: "url('/placeholder.svg?width=100&height=100')",
            backgroundRepeat: "repeat",
            backgroundSize: "150px",
          }}
        ></div>
        {/* Science-inspired abstract shapes */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-green-400/20 rounded-full filter blur-2xl opacity-70 animate-pulse-slow"></div>
        <div className="absolute -bottom-20 -right-10 w-80 h-80 bg-orange-400/20 rounded-full filter blur-2xl opacity-70 animate-pulse-slow animation-delay-2000"></div>
        <div className="absolute top-1/4 -right-20 w-60 h-60 bg-blue-400/20 rounded-full filter blur-2xl opacity-70 animate-pulse-slow animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
        <div className="mb-6">
          <img
            src="/images/images.jpg"
            alt="IChO 2026 Logo"
            className="w-28 h-28 md:w-36 md:h-36 mx-auto mb-4 rounded-full shadow-lg bg-white p-2"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
          <span className="block text-gray-800">International Chemistry</span>
          <span className="block bg-gradient-to-r from-green-600 via-blue-600 to-orange-600 bg-clip-text text-transparent">
            Olympiad 2026
          </span>
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 mb-8 text-lg text-gray-700">
          <div className="flex items-center">
            <CalendarDays className="h-5 w-5 mr-2 text-green-600" />
            <span>July 2026</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-5 w-5 mr-2 text-blue-600" />
            <span>Tashkent, Uzbekistan</span>
          </div>
          <div className="flex items-center">
            <Users className="h-5 w-5 mr-2 text-orange-600" />
            <span>80+ Countries Expected</span>
          </div>
        </div>

        <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto italic">
          "Fostering global talent and unity through chemistry."
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
        
          <Button
            size="lg"
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 px-8 py-3 text-lg group"
            onClick={() => setIsVideoOpen(true)}
          >
            <PlayCircle className="mr-2 h-5 w-5 text-green-600 group-hover:scale-110 transition-transform" />
            Watch Intro Video
          </Button>
        </div>
        <p className="mt-8 text-sm text-gray-500">
          Join us for an unforgettable celebration of chemistry in the heart of Central Asia.
        </p>
      </div>
      <VideoPlayer isOpen={isVideoOpen} setIsOpen={setIsVideoOpen} videoUrl={introVideoUrl} />
    </section>
  )
}

// Add this to your globals.css or a style tag in layout.tsx for the animation
/*
@keyframes gradient-xy {
  0%, 100% {
    background-size: 400% 400%;
    background-position: left center;
  }
  50% {
    background-size: 200% 200%;
    background-position: right center;
  }
}

.animate-gradient-xy {
  animation: gradient-xy 15s ease infinite;
}

@keyframes pulse-slow {
  0%, 100% {
    opacity: 0.7;
    transform: scale(1);
  }
  50% {
    opacity: 0.4;
    transform: scale(1.05);
  }
}
.animate-pulse-slow {
  animation: pulse-slow 8s infinite ease-in-out;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
*/
