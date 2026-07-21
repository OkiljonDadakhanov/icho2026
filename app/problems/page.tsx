"use client";

import React from "react";
import {
  Download,
  BookOpenCheck,
  FileQuestion,
  CheckCircle2,
} from "lucide-react";

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
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
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
            IChO problems challenge students&apos; analytical thinking,
            creativity, and deep understanding of chemistry across various
            disciplines.
          </p>
        </div>

        {/* IChO 2026 Notes */}
        <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl shadow-xl p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-800">
            IChO 2026 Exam Problems
          </h2>

          <p className="text-slate-700 text-lg font-light">
            The official theoretical and practical examination materials are
            available below.
          </p>
        </div>

        {/* Official Exam Materials */}
        <div className="space-y-8">
          <h2 className="text-4xl font-bold text-center text-slate-900">
            IChO 2026 Official Exam Materials
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Practical Questions */}
            <a
              href="https://drive.google.com/drive/folders/1Q5SEQTGFrQe3XsyvuL019XlZ1ZASE1g4"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/70 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-5 mb-6">
                <div className="p-4 rounded-2xl bg-emerald-100">
                  <FileQuestion className="w-10 h-10 text-emerald-600" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    Practical Exam
                  </h3>
                  <p className="text-slate-500 text-lg">
                    Questions
                  </p>
                </div>
              </div>

              <p className="text-slate-700 text-lg mb-8">
                Download the official practical examination questions.
              </p>

              <div className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-white font-semibold group-hover:bg-emerald-700 transition">
                <Download className="w-5 h-5" />
                Open Folder
              </div>
            </a>

            {/* Practical Solutions */}
            <a
              href="https://drive.google.com/drive/folders/13qJHx3SBcV04092xUTTLmjvh2k0qAFKY"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/70 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-5 mb-6">
                <div className="p-4 rounded-2xl bg-sky-100">
                  <CheckCircle2 className="w-10 h-10 text-sky-600" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    Practical Exam
                  </h3>
                  <p className="text-slate-500 text-lg">
                    Solutions
                  </p>
                </div>
              </div>

              <p className="text-slate-700 text-lg mb-8">
                Download the official practical examination solutions.
              </p>

              <div className="inline-flex items-center gap-2 rounded-xl bg-sky-600 px-5 py-3 text-white font-semibold group-hover:bg-sky-700 transition">
                <Download className="w-5 h-5" />
                Open Folder
              </div>
            </a>

            {/* Theoretical Questions */}
            <a
              href="https://drive.google.com/drive/folders/1ionbhkaTQsdDJnifbjW9cmpl1AEZaJyK"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/70 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-5 mb-6">
                <div className="p-4 rounded-2xl bg-amber-100">
                  <FileQuestion className="w-10 h-10 text-amber-600" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    Theoretical Exam
                  </h3>
                  <p className="text-slate-500 text-lg">
                    Questions
                  </p>
                </div>
              </div>

              <p className="text-slate-700 text-lg mb-8">
                Download the official theoretical examination questions.
              </p>

              <div className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-5 py-3 text-white font-semibold group-hover:bg-amber-700 transition">
                <Download className="w-5 h-5" />
                Open Folder
              </div>
            </a>

            {/* Theoretical Solutions */}
            <a
              href="https://drive.google.com/drive/folders/146Tz2a2ECc1khlwREzve4AbjebVDL0FO"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/70 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl p-8 hover:shadow-2xl hover:-translate-y-1 transition-all"
            >
              <div className="flex items-center gap-5 mb-6">
                <div className="p-4 rounded-2xl bg-purple-100">
                  <CheckCircle2 className="w-10 h-10 text-purple-600" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold">
                    Theoretical Exam
                  </h3>
                  <p className="text-slate-500 text-lg">
                    Solutions
                  </p>
                </div>
              </div>

              <p className="text-slate-700 text-lg mb-8">
                Download the official theoretical examination solutions.
              </p>

              <div className="inline-flex items-center gap-2 rounded-xl bg-purple-600 px-5 py-3 text-white font-semibold group-hover:bg-purple-700 transition">
                <Download className="w-5 h-5" />
                Open Folder
              </div>
            </a>
          </div>
        </div>

        {/* Preparatory Problems */}
        <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl shadow-xl p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-800">
            Preparatory Problems
          </h2>

          <p className="text-slate-700 text-lg font-light">
            Access the preparatory problems to help students prepare for IChO
            2026.
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

        {/* Preparatory Solutions */}
        <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl shadow-xl p-8 space-y-4">
          <h2 className="text-2xl font-semibold text-slate-800">
            Solutions to Preparatory Problems
          </h2>

          <p className="text-slate-700 text-lg font-light">
            Access the official solutions to the preparatory problems.
          </p>

          <a
            href="https://drive.google.com/drive/folders/1QHUryF4E1flXfVphCw5i2s5pfDeq_IyY?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl shadow hover:bg-emerald-700 transition"
          >
            <Download className="w-5 h-5" />
            Solutions to Preparatory Problems
          </a>
        </div>

        {/* Past Problems */}
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