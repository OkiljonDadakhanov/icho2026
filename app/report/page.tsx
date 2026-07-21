"use client";

import { BookOpen, Download } from "lucide-react";

export default function ReportBookPage() {
  const yearBookUrl =
    "https://drive.google.com/file/d/1pJdG5h7uneqyDUCIo7Xfkpa2NiPjEvXA/view?usp=sharing";

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden py-12">
      {/* Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-sky-500/5 to-amber-500/5"></div>
        <div className="absolute top-12 left-10 w-48 h-48 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-2xl rotate-12 animate-float"></div>
        <div className="absolute top-20 right-20 w-36 h-36 bg-gradient-to-br from-sky-400/20 to-sky-600/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-20 left-20 w-56 h-56 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-3xl -rotate-6 animate-float-slow"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 space-y-5">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-white/80 backdrop-blur-md rounded-full border border-slate-200/60 shadow-sm text-base font-medium text-slate-700">
            <BookOpen className="w-5 h-5 text-emerald-500" />
            <span>Publications</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            IChO 2026 Year Book
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            Browse the official IChO 2026 Year Book featuring highlights,
            participants, activities, and memorable moments from the Olympiad.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-3xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-8 border-b border-slate-200">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                IChO 2026 Year Book
              </h2>
              <p className="text-lg text-slate-600">
                Official digital publication of the International Chemistry
                Olympiad 2026.
              </p>
            </div>

            <a
              href={yearBookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-emerald-600 px-6 py-4 text-lg font-semibold text-white shadow-md hover:bg-emerald-700 transition-all"
            >
              <Download className="w-6 h-6" />
              Open Year Book
            </a>
          </div>

          {/* Embedded Viewer */}
          <div className="p-4 md:p-6">
            <iframe
              src="https://drive.google.com/file/d/1pJdG5h7uneqyDUCIo7Xfkpa2NiPjEvXA/preview"
              title="IChO 2026 Year Book"
              className="w-full h-[900px] rounded-2xl border border-slate-200"
              allow="autoplay"
            />
          </div>
        </div>
      </div>
    </section>
  );
}