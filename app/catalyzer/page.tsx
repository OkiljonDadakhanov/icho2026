"use client";

import Image from "next/image";
import Link from "next/link";
import { BookOpen, Download, ExternalLink } from "lucide-react";

const PDF_PATH = "/catalyzer.pdf"; // ← place your file here

export default function CatalyzerPage() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(1100px_600px_at_10%_0%,rgba(16,185,129,0.08),transparent_50%),radial-gradient(1000px_500px_at_90%_10%,rgba(56,189,248,0.08),transparent_55%)]">
      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:44px_44px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-10">
        {/* Header */}
        <header className="flex flex-col items-center text-center gap-6">
          <div className="relative h-16 w-16 sm:h-20 sm:w-20">
            <Image
              src="/images/icho.png"
              alt="IChO Logo"
              fill
              sizes="80px"
              className="object-contain"
              priority
            />
          </div>
          <div className="space-y-3">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-white/70 px-4 py-1.5 text-sm text-emerald-700 backdrop-blur">
              <BookOpen className="h-4 w-4" />
              Catalyzer • PDF Viewer
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Catalyzer Document
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-slate-700">
              View the Catalyzer PDF directly in your browser. You can also
              download it or open it in a new tab for a full-screen experience.
            </p>
          </div>
        </header>

        {/* Toolbar */}
        <div className="mx-auto w-full rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-sm backdrop-blur">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-slate-700">
              <span className="font-medium text-slate-900">File:</span>{" "}
              <span className="text-slate-600 break-all">{PDF_PATH}</span>
            </p>
            <div className="flex items-center gap-2">
              <Link
                href={PDF_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50"
              >
                <ExternalLink className="h-4 w-4" />
                Open in new tab
              </Link>
              <a
                href={PDF_PATH}
                download
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-3 py-2 text-sm font-medium text-white hover:bg-emerald-700"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
            </div>
          </div>
        </div>

        {/* PDF Iframe */}
        <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-2 shadow-sm backdrop-blur">
          <div className="relative h-[75vh] w-full overflow-hidden rounded-xl">
            {/* Using #view=FitH for a nice initial fit; browsers ignore if unsupported */}
            <iframe
              src={`${PDF_PATH}#view=FitH`}
              title="Catalyzer PDF"
              className="h-full w-full"
              loading="eager"
            />
          </div>
          {/* Fallback note */}
          <p className="mt-3 px-2 text-center text-sm text-slate-500">
            If the PDF does not display,{" "}
            <a
              className="text-emerald-700 underline underline-offset-2"
              href={PDF_PATH}
              target="_blank"
              rel="noopener noreferrer"
            >
              click here to open it in a new tab
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
