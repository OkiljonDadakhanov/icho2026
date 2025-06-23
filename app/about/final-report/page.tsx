"use client"

import React from "react"
import { FileText, Award } from "lucide-react"

export default function FinalReport() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-sky-500/5 to-amber-500/5"></div>
        <div className="absolute top-24 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-2xl rotate-12 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-sky-400/20 to-sky-600/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-3xl -rotate-6 animate-float-slow"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium text-slate-600">
            <FileText className="w-4 h-4 text-emerald-500" />
            <span>Final Report</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-slate-900">Summary of Results & Insights</h1>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto font-light">
            Discover the key outcomes, award distributions, and overall statistics from the 58th International Chemistry Olympiad.
          </p>
        </div>

        {/* Report Summary */}
        <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl shadow-xl p-8 space-y-6">
          <h2 className="text-3xl font-semibold text-slate-800">Event Overview</h2>
          <p className="text-slate-700 text-lg font-light">
            The IChO 2026 hosted 320 talented students from 84 countries. Participants undertook challenging theoretical and practical exams, showcasing their deep understanding and creativity in chemistry.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            <div className="p-6 bg-white rounded-2xl border border-white/20 shadow hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Participants</h3>
              <p className="text-slate-700 text-base font-light">320 students, 168 mentors, 84 teams.</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-white/20 shadow hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-semibold text-slate-800 mb-2">Award Distribution</h3>
              <ul className="list-disc list-inside text-slate-700 text-base font-light space-y-1">
                <li>Gold: 33 students</li>
                <li>Silver: 65 students</li>
                <li>Bronze: 97 students</li>
                <li>Honorable Mentions: 45</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Special Recognition */}
        <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl shadow-xl p-8 space-y-4">
          <h2 className="text-3xl font-semibold text-slate-800 flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-500" />
            Special Recognitions
          </h2>
          <ul className="list-disc list-inside text-slate-700 text-lg font-light space-y-2">
            <li>Highest Theoretical Score: Lin Zhang (China)</li>
            <li>Best Practical Score: Aisha Karimova (Uzbekistan)</li>
            <li>Most Promising Young Chemist: Daniel Rojas (Mexico)</li>
          </ul>
        </div>

        {/* Download Link (Optional) */}
        <div className="text-center pt-8">
          <a
            href="/files/IChO2026_Final_Report.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 text-lg font-semibold rounded-2xl bg-gradient-to-r from-emerald-600 to-sky-600 text-white hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Download Full Report (PDF)
          </a>
        </div>
      </div>
    </section>
  )
}
