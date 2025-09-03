"use client";

import React from "react";
import { History, Calendar, MapPin } from "lucide-react";

type Edition = {
  year: number;
  ordinal: string;
  host: string;
  country: string;
  dates: string;
  note?: string; // e.g., "(remote)"
};

const PAST_EDITIONS: Edition[] = [
  {
    year: 2025,
    ordinal: "57th IChO",
    host: "United Arab Emirates",
    country: "United Arab Emirates",
    dates: "July 5 – July 14",
  },
  {
    year: 2024,
    ordinal: "56th IChO",
    host: "Saudi Arabia",
    country: "Saudi Arabia",
    dates: "July 21 – July 30",
  },
  {
    year: 2023,
    ordinal: "55th IChO",
    host: "Switzerland",
    country: "Switzerland",
    dates: "July 16 – July 25",
  },
  {
    year: 2022,
    ordinal: "54th IChO",
    host: "China",
    country: "China",
    dates: "July 8 – July 18",
    note: "(remote)",
  },
  {
    year: 2021,
    ordinal: "53rd IChO",
    host: "Japan",
    country: "Japan",
    dates: "July 25 – August 2",
    note: "(remote)",
  },
  {
    year: 2020,
    ordinal: "52nd IChO",
    host: "Turkiye",
    country: "Turkiye",
    dates: "July 6 – July 15",
    note: "(remote)",
  },
  {
    year: 2019,
    ordinal: "51st IChO",
    host: "France",
    country: "France",
    dates: "July 21 – July 30",
  },
  {
    year: 2018,
    ordinal: "50th IChO",
    host: "Slovakia & Czech Republic",
    country: "Slovakia & Czech Republic",
    dates: "July 19 – July 29",
  },
];

export default function PastIcho() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background Decorations (same vibe as the Regulations component) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-24 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-2xl rotate-12 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-sky-400/20 to-sky-600/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-3xl -rotate-6 animate-float-slow"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium text-slate-600">
            <History className="w-4 h-4 text-emerald-500" />
            <span>Past IChO Editions</span>
          </div>
          <h2 className="text-5xl font-bold tracking-tight text-slate-900">
            IChO History (2018–2025)
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto font-light">
            Explore the recent editions of the International Chemistry Olympiad.
          </p>
        </div>

        {/* List */}
        <div className="bg-white/70 backdrop-blur-sm border border-white/20 rounded-3xl shadow-xl p-4 sm:p-6 lg:p-8">
          <ol className="relative border-l border-slate-200 pl-6 space-y-8">
            {PAST_EDITIONS.map((e) => (
              <li key={e.year} className="ml-2">
                {/* Timeline dot */}
                <span className="absolute -left-[9px] mt-1.5 flex h-4 w-4 items-center justify-center">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500 shadow ring-4 ring-emerald-100/70" />
                </span>

                <div className="rounded-2xl border border-slate-100 bg-white/70 shadow-sm hover:shadow-md transition-shadow">
                  <div className="p-4 sm:p-5 lg:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="space-y-1">
                        <h3 className="text-xl sm:text-2xl font-semibold text-slate-900">
                          {e.year} • {e.ordinal}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:text-base text-slate-600">
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="h-4 w-4 text-emerald-600" />
                            <span className="font-medium">{e.host}</span>
                          </span>
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="h-4 w-4 text-emerald-600" />
                            <span>
                              {e.dates}{" "}
                              {e.note ? (
                                <em className="text-slate-500">{e.note}</em>
                              ) : null}
                            </span>
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-block text-xs uppercase tracking-wide text-slate-500 bg-slate-100 rounded-full px-3 py-1">
                          {e.country}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
