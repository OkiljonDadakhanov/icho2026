"use client";

import React from "react";
import { Download, BookOpenCheck } from "lucide-react";

export default function Problems() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-sky-500/5 to-amber-500/5"></div>
        <div className="absolute top-24 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-2xl rotate-12 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-sky-400/20 to-sky-600/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-3xl -rotate-6 animate-float-slow"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium text-slate-600">
            <BookOpenCheck className="w-4 h-4 text-sky-500" />
            <span>Olympiad Problems</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-slate-900">
            Types of Problems
          </h1>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto font-light">
            IChO problems challenge students' analytical thinking, creativity,
            and deep understanding of chemistry across various disciplines.
          </p>
        </div>

        {/* IChO 2026 Notes */}
        <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl shadow-xl p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-800">
            IChO 2026 Exam Problems
          </h2>
          <p className="text-slate-700 text-lg font-light">
            The IChO 2026 exam problems, solutions, and translations will be
            available for download on this page after the competition concludes
            in 10–19 July 2026.
          </p>
          <ul className="list-disc list-inside text-slate-700 text-lg font-light space-y-1">
            <li>
              Official English versions of the theoretical and practical
              problems and solutions (PDFs)
            </li>
            <li>
              Translations of the theoretical and practical exams by
              participating delegations (zip files, organized alphabetically by
              country code ISO-3)
            </li>
          </ul>
        </div>

        {/* Preparatory Problems */}
        <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl shadow-xl p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-800">
            Preparatory Problems
          </h2>
          <p className="text-slate-700 text-lg font-light">
            Access the preparatory problems to help students prepare for IChO 2026.
          </p>
          <a
            href="https://drive.google.com/drive/folders/13hL1jmTz-puehFlNMrUkBQRme0GLP_12?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl shadow hover:bg-emerald-700 transition"
          >
            <Download className="w-5 h-5" />
            Preparatory Problems
          </a>
        </div>

        {/* Downloads for Past Problems */}
        <div className="space-y-6 pt-12">
          <h2 className="text-2xl font-semibold text-slate-800 text-center">
            Download Past IChO Problems (2020–2025)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            {[2025, 2024, 2023, 2022, 2021, 2020].map((year) => (
              <a
                key={year}
                href={`/problems/exam${year}.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-white/70 backdrop-blur-sm border border-white/20 rounded-xl shadow hover:bg-white/90 transition"
              >
                <Download className="w-5 h-5 text-emerald-600" />
                IChO {year} Problems
              </a>
            ))}
          </div>
        </div>

       
      </div>
    </section>
  );
}
