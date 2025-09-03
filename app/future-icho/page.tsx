"use client";

import React from "react";
import { Calendar, Globe2 } from "lucide-react";

type FutureEdition = {
  year: number;
  ordinal: string;
  country: string;
  date?: string; // "July 2025" etc. If missing, we’ll render "YEAR (TBD)"
};

const FUTURE_EDITIONS: FutureEdition[] = [
  { year: 2025, ordinal: "57th IChO", country: "United Arab Emirates", date: "July 2025" },
  { year: 2026, ordinal: "58th IChO", country: "Uzbekistan" },            // month TBD
  { year: 2027, ordinal: "59th IChO", country: "Chinese Taipei" },        // month TBD
];

function renderDate(e: FutureEdition) {
  // Show an explicit, non-empty string in every case
  if (e.date && e.date.trim().length > 0) return e.date.trim();
  return `${e.year} (TBD)`;
}

export default function FutureIcho() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-24 left-10 w-32 h-32 bg-gradient-to-br from-sky-400/20 to-sky-600/20 rounded-2xl rotate-12 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-3xl -rotate-6 animate-float-slow"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <h2 className="text-5xl font-bold tracking-tight text-slate-900">
            Upcoming Olympiads
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto font-light">
            The next International Chemistry Olympiad hosts and their dates.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block overflow-x-auto rounded-2xl border border-slate-200 shadow-md bg-white/70 backdrop-blur-sm">
          <table className="w-full text-left text-slate-700">
            <thead className="bg-slate-100/80 text-slate-800 text-sm uppercase tracking-wide">
              <tr>
                <th className="px-6 py-3">IChO</th>
                <th className="px-6 py-3">Country</th>
                <th className="px-6 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {FUTURE_EDITIONS.map((e, idx) => (
                <tr
                  key={idx}
                  className="border-t border-slate-200 hover:bg-slate-50/70 transition-colors"
                >
                  <td className="px-6 py-4 font-medium">{e.ordinal}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-2">
                      <Globe2 className="h-4 w-4 text-sky-600 shrink-0" />
                      <span className="whitespace-pre-wrap">{e.country}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-emerald-600 shrink-0" />
                      <span className="whitespace-pre-wrap">{renderDate(e)}</span>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden grid gap-4">
          {FUTURE_EDITIONS.map((e, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-200 bg-white/80 shadow-sm p-4 space-y-3"
            >
              <div className="text-slate-900 font-semibold text-lg">{e.ordinal}</div>
              <div className="flex items-center gap-2 text-slate-700">
                <Globe2 className="h-4 w-4 text-sky-600" />
                <span>{e.country}</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700">
                <Calendar className="h-4 w-4 text-emerald-600" />
                <span>{renderDate(e)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
