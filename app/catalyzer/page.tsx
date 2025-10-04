"use client";

import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

type Issue = {
  number: number;
  cover: string;       // image path
  pdf: string;         // pdf path
};

const ISSUES: Issue[] = [
  // {
  //   number: 3,
  //   title: "Beginning of Autumn",
  //   date: "2022/07/11",
  //   cover: "/images/catalyzer1.png", // replace with your real image if needed
  //   pdf: "/catalyzer.pdf",
  // },
  // {
  //   number: 2,
  //   title: "Lesser Heat",
  //   date: "2022/07/08",
  //   cover: "/images/catalyzer1.png", // replace when you have cover #2
  //   pdf: "/catalyzer.pdf",
  // },
  {
    number: 1,
    cover: "/images/catalyzer1.png", // replace when you have cover #1
    pdf: "/catalyzer.pdf",
  },
];

export default function CatalyzerPage() {
  return (
    <section className="relative bg-white">
      {/* soft background accents */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_450px_at_15%_0%,rgba(99,102,241,0.06),transparent_55%),radial-gradient(700px_350px_at_85%_10%,rgba(16,185,129,0.06),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        {/* Header (simple, like the ref) */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            CATALYZER
          </h1>
          <p className="mt-2 text-slate-600">IChO publications</p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {ISSUES.map((issue) => (
            <article key={issue.number} className="group">
              {/* Poster cover */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
                <Image
                  src={issue.cover}
                  alt={`Catalyzer No.${issue.number} cover`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  priority={issue.number === 3}
                />
              </div>

              {/* Caption like in the picture */}
              <div className="mt-4">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <Link
                    href={issue.pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold tracking-wide text-[18px] sm:text-[20px] uppercase text-violet-700 hover:text-violet-800"
                  >
                    Catalyzer No.{issue.number}
                  </Link>

                  <a
                    href={issue.pdf}
                    download
                    className="inline-flex items-center gap-1 text-[13px] text-slate-500 hover:text-slate-700"
                  >
                    (Download PDF)
                    <Download className="h-3.5 w-3.5" />
                  </a>
                </div>

                {/* Optional small meta under the caption (subtle like the ref) */}
               
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
