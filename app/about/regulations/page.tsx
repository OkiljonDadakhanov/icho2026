"use client";

import React from "react";
import { ShieldCheck, Download } from "lucide-react";
import Link from "next/link";

export default function Regulations() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-24 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-2xl rotate-12 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-sky-400/20 to-sky-600/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-3xl -rotate-6 animate-float-slow"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium text-slate-600">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>IChO Regulations</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-slate-900">
            Regulations
          </h1>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto font-light">
            Ensure fair and transparent participation at the International
            Chemistry Olympiad by following these core regulations.
          </p>
        </div>

        {/* Regulation Items */}
        <div className="grid gap-8">
          {/* 1 */}
          <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl shadow-xl p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-slate-800">
              1. Eligibility
            </h2>
            <p className="text-slate-700 text-lg font-light">
              Participants must be secondary school students under the age of
              20, who have not commenced university studies and are selected
              through their national competition.
            </p>
          </div>

          {/* 2 */}
          <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl shadow-xl p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-slate-800">
              2. Team Composition
            </h2>
            <p className="text-slate-700 text-lg font-light">
              Each participating country may send up to four student competitors
              and two accompanying adults (mentors).
            </p>
          </div>

          {/* 3 */}
          <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl shadow-xl p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-slate-800">
              3. Exam Structure
            </h2>
            <p className="text-slate-700 text-lg font-light">
              The Olympiad includes one theoretical and one practical exam. Each
              exam is designed to assess a broad understanding of chemistry,
              creativity, and problem-solving skills.
            </p>
          </div>

          {/* 4 */}
          <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl shadow-xl p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-slate-800">
              4. Conduct & Fairness
            </h2>
            <p className="text-slate-700 text-lg font-light">
              Any form of cheating, communication during exams, or violation of
              ethical conduct may result in disqualification of individuals or
              entire teams.
            </p>
          </div>

          {/* 5 */}
          <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl shadow-xl p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-slate-800">
              5. Language
            </h2>
            <p className="text-slate-700 text-lg font-light">
              English is the official language of IChO. All tasks, discussions,
              and materials are translated by each country's mentors into their
              students' native language.
            </p>
          </div>
        </div>

        {/* Download Button */}
        <div className="mt-12 text-center space-y-6">
          <p className="text-slate-700 text-lg font-light max-w-2xl mx-auto">
            For complete details and special participation procedures, we
            encourage you to download the full IChO 2026 Regulations document.
          </p>

          <Link
            href="/regulations.pdf"
            target="_blank"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-base font-medium shadow-md transition-all"
          >
            <Download className="w-5 h-5" />
            Download Regulations (PDF)
          </Link>
        </div>
      </div>
    </section>
  );
}
