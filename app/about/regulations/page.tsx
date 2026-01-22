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

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-10">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium text-slate-600">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>IChO Regulations</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-slate-900">
            Regulations
          </h1>
          <p className="text-slate-600">
            View the full IChO 2026 Regulations PDF below.
          </p>
        </div>

        {/* PDF Viewer */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          <div className="aspect-[3/4] md:aspect-[16/10]">
            <iframe
              src="/regulations.pdf#toolbar=0&navpanes=0&scrollbar=1&view=FitH"
              title="IChO 2026 Regulations"
              className="w-full h-full border-0"
              style={{ backgroundColor: "white" }}
            />
          </div>
        </div>

        {/* Download Button */}
        <div className="text-center">
          <Link
            href="/regulations.pdf"
            target="_blank"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-base font-medium shadow-md transition-all"
          >
            <Download className="w-5 h-5" />
            Download Regulations (PDF)
          </Link>
          <p className="mt-3 text-sm text-slate-500">
            If the PDF doesn’t load, use the download button.
          </p>
        </div>
      </div>
    </section>
  );
}
