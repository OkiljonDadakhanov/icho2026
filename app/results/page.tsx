"use client";

import { FileText, Calendar, Download } from "lucide-react";

export default function ResultsPage() {
  const mockYears = [
    { year: 2025, host: "Switzerland", file: "/files/icho2025_results.pdf" },
    { year: 2024, host: "Saudi Arabia", file: "/files/icho2024_results.pdf" },
    { year: 2023, host: "Switzerland", file: "/files/icho2023_results.pdf" },
    { year: 2022, host: "China", file: "/files/icho2022_results.pdf" },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-sky-500/5 to-amber-500/5"></div>
        <div className="absolute top-24 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-2xl rotate-12 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-sky-400/20 to-sky-600/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-3xl -rotate-6 animate-float-slow"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium text-slate-600">
            <FileText className="w-4 h-4 text-emerald-500" />
            <span>Results & Problems Archive</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-slate-900">
            Previous Olympiads
          </h1>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto font-light">
            Access past results, exam problems, and statistics from previous
            International Chemistry Olympiads.
          </p>
        </div>

        {/* Archive Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {mockYears.map((item) => (
            <div
              key={item.year}
              className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg p-6 space-y-3 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-3 text-slate-800">
                <Calendar className="text-emerald-500 w-5 h-5" />
                <h3 className="text-xl font-semibold">IChO {item.year}</h3>
              </div>
              <p className="text-slate-700 text-sm">
                Host Country: <strong>{item.host}</strong>
              </p>
              <p className="text-sm text-slate-500 italic mt-2">Coming soon</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
