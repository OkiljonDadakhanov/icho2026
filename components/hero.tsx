"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  MapPin,
  Users,
  PlayCircle,
  Sparkles,
} from "lucide-react";
import { VideoPlayer } from "@/components/video-player";

export function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  // const introVideoUrl = "https://www.youtube.com/embed/MsnCtB7kCUU?autoplay=1";
  const backgroundVideoUrl = "/main.MOV";

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-black w-full max-w-full m-0 z-10">
      {/* 🔁 Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[1] opacity-70 max-w-full"
      >
        <source src={backgroundVideoUrl} type="video/mp4" />
      </video>

      {/* 🔳 Overlay & Visuals */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-br from-emerald-500/10 via-white/10 to-amber-500/10 mix-blend-lighten pointer-events-none" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-2xl rotate-12 animate-float z-[2]"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-sky-400/20 to-sky-600/20 rounded-full animate-float-delayed z-[2]"></div>
      <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-3xl -rotate-6 animate-float-slow z-[2]"></div>
      <div className="absolute inset-0 z-[2] bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px] pointer-events-none" />

      {/* 🌟 Hero Content */}
      <div className="relative z-[3] max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium text-slate-600">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span>
              58th International Chemistry Olympiad – A Global Celebration of
              Science
            </span>
          </div>

          {/* Title */}
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight">
              <span className="block bg-gradient-to-r from-emerald-600 via-sky-600 to-amber-600 bg-clip-text text-transparent mb-2">
                58th International
              </span>
              <span className="block bg-gradient-to-r from-emerald-600 via-sky-600 to-amber-600 bg-clip-text text-transparent">
                Chemistry Olympiad
              </span>
            </h1>
          </div>

          {/* Event Info Cards */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="p-2 bg-emerald-100 rounded-xl">
                <CalendarDays className="h-5 w-5 text-emerald-600" />
              </div>
              <span className="font-semibold text-slate-700">
                 mid-July
              </span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="p-2 bg-sky-100 rounded-xl">
                <MapPin className="h-5 w-5 text-sky-600" />
              </div>
              <span className="font-semibold text-slate-700">
                Hosted in vibrant Tashkent, Uzbekistan
              </span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="p-2 bg-amber-100 rounded-xl">
                <Users className="h-5 w-5 text-amber-600" />
              </div>
              <span className="font-semibold text-slate-700">
                Delegations from over 90 countries
              </span>
            </div>
          </div>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-white max-w-3xl mx-auto font-light leading-relaxed">
            Transforming Elements, Connecting the World.
          </p>

          {/* CTA */}
          {/* <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/60 backdrop-blur-sm border-white/20 text-slate-700 hover:bg-white/80 px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              onClick={() => setIsVideoOpen(true)}
            >
              <PlayCircle className="mr-2 h-5 w-5 text-emerald-600 group-hover:scale-110 transition-transform" />
              Watch Intro Video
            </Button>
          </div> */}

          {/* Footer */}
          <p className="text-sm text-white font-light pt-8 max-w-2xl mx-auto">
            Be part of an unforgettable event in Tashkent—celebrating scientific
            excellence, global friendship, and the next generation of chemistry
            leaders.
          </p>
        </div>
      </div>

      {/* <VideoPlayer
        isOpen={isVideoOpen}
        setIsOpen={setIsVideoOpen}
        videoUrl={introVideoUrl}
      /> */}
    </section>
  );
}
