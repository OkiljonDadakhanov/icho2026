"use client";

import { Calendar, FileText } from "lucide-react";

export default function ResultsPage() {
  const results = [
    {
      year: 2026,
      host: "Uzbekistan",
      file: "/results/rankings.pdf", // Place rankings.pdf inside public/results/
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden py-12">
      {/* Background Decorations */}
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
            <FileText className="w-5 h-5 text-emerald-500" />
            <span>Results Archive</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
            IChO 2026 Olympiad&apos;s Results
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            Official rankings and results from the International Chemistry
            Olympiad 2026 hosted in Uzbekistan.
          </p>
        </div>

        {results.map((item) => (
          <div
            key={item.year}
            className="bg-white/80 backdrop-blur-md border border-slate-200/60 rounded-3xl shadow-xl overflow-hidden"
          >
            {/* Card Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 p-8 border-b border-slate-200">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-8 h-8 text-emerald-600" />
                  <h2 className="text-3xl font-bold text-slate-900">
                    IChO {item.year}
                  </h2>
                </div>

                <p className="text-lg text-slate-600">
                  Host Country:{" "}
                  <span className="font-semibold text-slate-900">
                    {item.host}
                  </span>
                </p>
              </div>

              <a
                href={item.file}
                download
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-emerald-600 px-6 py-4 text-lg font-semibold text-white shadow-md hover:bg-emerald-700 transition-all"
              >
                <FileText className="w-6 h-6" />
                Download PDF
              </a>
            </div>

            {/* PDF Viewer */}
            <div className="p-4 md:p-6">
              <iframe
                src={item.file}
                title={`IChO ${item.year} Rankings`}
                className="w-full h-[900px] rounded-2xl border border-slate-200"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}