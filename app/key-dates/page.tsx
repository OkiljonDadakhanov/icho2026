"use client";

import Image from "next/image";
import { CalendarDays, Download } from "lucide-react";

export default function KeyDatesPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-emerald-500/5 to-sky-500/5"></div>
        <div className="absolute top-24 left-10 w-32 h-32 bg-gradient-to-br from-teal-400/20 to-teal-600/20 rounded-2xl rotate-12 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-sky-400/20 to-sky-600/20 rounded-3xl -rotate-6 animate-float-slow"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium text-slate-600">
            <CalendarDays className="w-4 h-4 text-teal-500" />
            <span>IChO 2026 Timeline</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-slate-900">
            Important Dates
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Key deadlines and schedule for participating and observer countries. <strong>Event dates: 10–19 July 2026.</strong>
          </p>
        </div>

        {/* Program image */}
        <div className="relative w-full max-w-4xl mx-auto rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-white">
          <div className="relative w-full aspect-[4/3] sm:aspect-[3/2]">
            <Image
              src="/programm.jpg"
              alt="IChO 2026 Program — Important Dates"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 1024px) 100vw, 896px"
            />
          </div>
        </div>

        {/* Download button */}
        <div className="flex justify-center">
          <a
            href="/programm.jpg"
            download="IChO-2026-Key-Dates.jpg"
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-full text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Download Key Dates (Image)
          </a>
        </div>

        {/* Event Dates Banner */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 bg-gradient-to-r from-teal-500 via-emerald-500 to-sky-500 rounded-3xl shadow-xl text-white">
            <div className="p-3 bg-white/20 rounded-xl">
              <CalendarDays className="w-8 h-8" />
            </div>
            <div className="text-center sm:text-left">
              <div className="text-sm font-medium text-white/80 uppercase tracking-wide">
                58th IChO Event Dates
              </div>
              <div className="text-2xl sm:text-3xl font-bold">
                10 – 19 July 2026
              </div>
              <div className="text-white/90">Tashkent, Uzbekistan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
