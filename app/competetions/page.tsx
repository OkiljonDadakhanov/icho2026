"use client"

import React from "react"
import { FlaskConical, BookOpen, Trophy } from "lucide-react"

export default function Competetions() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background Visuals */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-sky-500/5 to-amber-500/5"></div>
        <div className="absolute top-24 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-2xl rotate-12 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-sky-400/20 to-sky-600/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-3xl -rotate-6 animate-float-slow"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium text-slate-600">
            <Trophy className="w-4 h-4 text-amber-500" />
            <span>IChO 2026 Competitions</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-slate-900">Challenge Yourself in Chemistry</h1>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto font-light">
            The Olympiad features rigorous theoretical and practical exams designed to push the limits of your knowledge, accuracy, and creativity in chemistry.
          </p>
        </div>

        {/* Competition Sections */}
        <div className="grid sm:grid-cols-2 gap-8">
          {/* Practical Exam */}
          <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl shadow-xl p-8 space-y-4">
            <div className="flex items-center gap-3">
              <FlaskConical className="text-emerald-600 w-6 h-6" />
              <h2 className="text-2xl font-semibold text-slate-800">Practical Exam</h2>
            </div>
            <p className="text-slate-700 text-lg font-light">
              A hands-on laboratory examination where students carry out complex experiments, analyze data, and draw conclusions under time pressure.
            </p>
          </div>

          {/* Theoretical Exam */}
          <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl shadow-xl p-8 space-y-4">
            <div className="flex items-center gap-3">
              <BookOpen className="text-sky-600 w-6 h-6" />
              <h2 className="text-2xl font-semibold text-slate-800">Theoretical Exam</h2>
            </div>
            <p className="text-slate-700 text-lg font-light">
              A comprehensive written exam covering physical, organic, inorganic, and analytical chemistry problems that challenge logical reasoning and deep understanding.
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl shadow-xl p-8 mt-12 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-800">Assessment & Scoring</h2>
          <p className="text-slate-700 text-lg font-light">
            Students are awarded scores out of 100 for each exam. The final ranking is based on the total combined score, with medals distributed to the top-performing students globally.
          </p>
        </div>
      </div>
    </section>
  )
}
