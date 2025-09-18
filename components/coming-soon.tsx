"use client";

import Image from "next/image";
import { BookOpen, Hourglass, Sparkles } from "lucide-react";

export default function ComingSoon({
  title,
  subtitle = "We’re crafting this page. Please check back shortly.",
  badge = "Section Preview",
}: {
  title: string;
  subtitle?: string;
  badge?: string;
}) {
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
              {badge}
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {title}
            </h1>

            <p className="mx-auto max-w-3xl text-lg text-slate-700">
              {subtitle}
            </p>
          </div>
        </header>

        {/* Card */}
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200/80 bg-white/90 p-8 shadow-sm backdrop-blur">
          <div className="flex flex-col items-center text-center gap-4">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100">
              <Hourglass className="h-6 w-6 text-emerald-600" />
            </span>
            <h2 className="text-xl font-semibold text-slate-900">
              Coming Soon
            </h2>
            <p className="text-slate-700">
              We’re putting the finishing touches on this page to make it
              delightful and useful. It will be available very soon.
            </p>

            <div className="mt-2 inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700">
              <Sparkles className="h-4 w-4 text-amber-500" />
              Thanks for your patience!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
