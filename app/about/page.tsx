"use client"

import { Sparkles } from "lucide-react"

export default function AboutIchoPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background Elements */}
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
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span>About the Olympiad</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-slate-900">
            International Chemistry Olympiad
          </h1>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto font-light">
            The IChO is a prestigious annual competition where the brightest high school chemistry students from around the world showcase their skills and passion for science.
          </p>
        </div>

        {/* Section 1: History */}
        <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl shadow-xl p-8 space-y-4">
          <h2 className="text-3xl font-semibold text-slate-800">History & Background</h2>
          <p className="text-slate-700 text-lg font-light">
            The first IChO was held in 1968 in Czechoslovakia, bringing together students from several Eastern European countries. Since then, it has grown into a global event, with over 80 countries participating annually.
          </p>
        </div>

        {/* Section 2: Objectives */}
        <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl shadow-xl p-8 space-y-4">
          <h2 className="text-3xl font-semibold text-slate-800">Mission & Goals</h2>
          <ul className="list-disc list-inside text-slate-700 text-lg font-light space-y-2">
            <li>Promote international contacts in chemistry education.</li>
            <li>Motivate gifted students to pursue scientific careers.</li>
            <li>Encourage excellence and innovation in teaching chemistry.</li>
            <li>Foster friendship and collaboration among young chemists worldwide.</li>
          </ul>
        </div>

        {/* Section 3: Format */}
        <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl shadow-xl p-8 space-y-4">
          <h2 className="text-3xl font-semibold text-slate-800">Competition Format</h2>
          <p className="text-slate-700 text-lg font-light">
            The Olympiad consists of two challenging parts: a theoretical exam and a practical laboratory exam. These test students' knowledge, creativity, and problem-solving skills in various branches of chemistry.
          </p>
        </div>

        {/* Section 4: Uzbekistan Host */}
        <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl shadow-xl p-8 space-y-4">
          <h2 className="text-3xl font-semibold text-slate-800">IChO 2026 in Tashkent</h2>
          <p className="text-slate-700 text-lg font-light">
            Uzbekistan is proud to host the 58th International Chemistry Olympiad in its vibrant capital, Tashkent. Participants will enjoy a rich program that combines academic excellence with cultural exploration.
          </p>
        </div>
      </div>
    </section>
  )
}
