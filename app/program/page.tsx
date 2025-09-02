"use client";

import Link from "next/link";
import { Download, Calendar, ScrollText } from "lucide-react";

type ProgramProps = {
  pdfUrl?: string; // e.g., "/program.pdf"
  notice?: string; // optional custom notice text
  title?: string; // section/page title
};

export default function ProgramSection({
  pdfUrl = "/program.pdf",
  notice = "After the Olympiad dates are confirmed, the final program will be posted on the website.",
  title = "IChO 2026 Program",
}: ProgramProps) {
  return (
    <section
      id="program"
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden"
    >
      {/* Background effects (same style as the committees page) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-sky-500/5 to-amber-500/5"></div>
        <div className="absolute top-24 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-2xl rotate-12 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-sky-400/20 to-sky-600/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-3xl -rotate-6 animate-float-slow"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-10">
        {/* Title */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium text-slate-600">
            <ScrollText className="w-4 h-4 text-emerald-500" />
            <span>Official Program</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-slate-900">
            {title}
          </h1>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto font-light">
            Explore the schedule and key events of the International Chemistry
            Olympiad.
          </p>
        </div>

        {/* Notice */}
        <div className="mx-auto max-w-4xl">
          <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 text-amber-900 p-4">
            <Calendar className="w-5 h-5 mt-0.5 shrink-0" />
            <p className="text-sm md:text-base">{notice}</p>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="mx-auto max-w-5xl w-full space-y-4">
          <div className="bg-white/70 backdrop-blur-sm border border-white/30 rounded-2xl shadow-lg p-3">
            {/* Responsive wrapper: keeps a good aspect ratio on small screens, uses tall view on large */}
            <div className="relative w-full overflow-hidden rounded-xl">
              {/* Small/medium: fixed ratio */}
              <div className="block lg:hidden aspect-[4/3]">
                <iframe
                  src={`${pdfUrl}#view=FitH`}
                  title="IChO Program PDF"
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
              {/* Large and up: tall viewport */}
              <div className="hidden lg:block" style={{ height: "80vh" }}>
                <iframe
                  src={`${pdfUrl}#view=FitH`}
                  title="IChO Program PDF"
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>

              {/* Fallback (if iframe blocked) */}
              <noscript>
                <object
                  data={pdfUrl}
                  type="application/pdf"
                  width="100%"
                  height="800"
                >
                  <p>
                    Your browser can’t display PDFs. Please{" "}
                    <a href={pdfUrl}>download the program</a>.
                  </p>
                </object>
              </noscript>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-center gap-3">
            <Link
              href={pdfUrl}
              target="_blank"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-sm font-medium shadow-md transition-all"
            >
              <Download className="w-4 h-4" />
              Open / Download PDF
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
