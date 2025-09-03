"use client";

import React from "react";
import Image from "next/image";
import { BookOpen, Flag, Globe2, Beaker, Flame } from "lucide-react";

export default function IchoHistory() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(1100px_600px_at_10%_0%,rgba(16,185,129,0.08),transparent_50%),radial-gradient(1000px_500px_at_90%_10%,rgba(56,189,248,0.08),transparent_55%)]">
      {/* Subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:44px_44px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Header */}
        <header className="flex flex-col items-center gap-6 text-center">
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
              IChO History
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Journey of the International Chemistry Olympiad
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-700">
              From a regional initiative in 1968 to a truly global competition
              uniting 80+ countries through demanding theoretical and
              experimental exams.
            </p>
          </div>
        </header>

        {/* Key facts — light chips */}
        <section className="mt-10">
          <ul className="flex w-full flex-wrap items-center justify-center gap-3">
            <li className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-700">
              1968 • Prague, Czechoslovakia — first IChO (theory only)
            </li>
            <li className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-700">
              1969 • Poland — experimental exam added
            </li>
            <li className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-700">
              1970 • Team cap set to 4 students (still current)
            </li>
            <li className="rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-700">
              Today: 80+ countries, 2×5-hour exams, up to 4 students + 2 mentors
            </li>
          </ul>
        </section>

        {/* Timeline */}
        <section className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-[1fr_auto_1fr]">
          {/* Left column item */}
          <div className="md:col-start-1 md:row-start-1">
            <TimelineCard
              icon={<Flag className="h-5 w-5 text-emerald-600" />}
              title="The Beginning (1968–1970)"
              text={
                <>
                  The first IChO ran in <b>Prague (18–21 June 1968)</b> with
                  three countries — Czechoslovakia, Poland, and Hungary — and
                  was theoretical only. In <b>1969 (Poland)</b>, the{" "}
                  <b>experimental exam</b> was introduced and Bulgaria joined,
                  with the USSR and GDR observing. In <b>1970 (Hungary)</b>,
                  Romania, the USSR, and the GDR officially took part, and teams
                  were <b>capped at four students</b> — a limit that continues
                  today.
                </>
              }
            />
          </div>

          {/* Center rail */}
          <div className="relative hidden md:col-start-2 md:row-span-3 md:block">
            <div className="absolute left-1/2 h-full w-px -translate-x-1/2 bg-gradient-to-b from-emerald-300 via-slate-200 to-sky-300" />
          </div>

          {/* Right column item */}
          <div className="md:col-start-3 md:row-start-1">
            <TimelineCard
              icon={<Globe2 className="h-5 w-5 text-sky-600" />}
              title="Growth & International Expansion (1971–1990)"
              text={
                <>
                  There was <b>no IChO in 1971</b>, but the event resumed in{" "}
                  <b>1972 (Soviet Union)</b>, followed by <b>1973 (Bulgaria)</b>{" "}
                  and <b>1974 (Romania)</b>, setting the practice of choosing
                  hosts years ahead. A milestone came in <b>1980</b>: the{" "}
                  <b>12th IChO in Linz, Austria</b> — the first outside the
                  Eastern Bloc — bringing broader participation. By
                  <b>1984 (Frankfurt, Germany)</b>, <b>21 countries</b> were
                  competing.
                </>
              }
              align="right"
            />
          </div>

          {/* Left column item */}
          <div className="md:col-start-1 md:row-start-2">
            <TimelineCard
              icon={<Beaker className="h-5 w-5 text-amber-600" />}
              title="Global Recognition (1990–Present)"
              text={
                <>
                  After the fall of the Iron Curtain, participation expanded
                  rapidly across Asia, the Middle East, and the Americas. Today
                  the IChO welcomes <b>80+ countries</b>. Delegations bring up
                  to <b>four students</b> and <b>two mentors</b>. Contestants
                  face two rigorous
                  <b> five-hour</b> examinations — one theoretical and one
                  experimental.
                </>
              }
            />
          </div>

          {/* Right column item */}
          <div className="md:col-start-3 md:row-start-2">
            <TimelineCard
              icon={<Flame className="h-5 w-5 text-rose-600" />}
              title="Traditions & Symbolism"
              text={
                <>
                  The IChO flag was introduced in <b>1985</b> at the{" "}
                  <b>17th IChO (Bratislava)</b>. It bears five colored flames
                  symbolizing the burning colors of ionic compounds and the
                  unity of the IChO community.
                </>
              }
              extra={
                <ul className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5">
                  {[
                    ["Green", "Thallium"],
                    ["Orange", "Calcium"],
                    ["Yellow", "Sodium"],
                    ["Blue-green", "Copper"],
                    ["Red", "Strontium"],
                  ].map(([c, e]) => (
                    <li
                      key={c}
                      className="rounded-lg border border-slate-200 bg-white/80 px-3 py-2 text-sm text-slate-700"
                    >
                      <span className="font-medium">{c}</span> — {e}
                    </li>
                  ))}
                </ul>
              }
              align="right"
            />
          </div>
        </section>
      </div>
    </section>
  );
}

/** Small presentational helper — minimalist, no bulky card chrome */
function TimelineCard({
  icon,
  title,
  text,
  extra,
  align = "left",
}: {
  icon: React.ReactNode;
  title: string;
  text: React.ReactNode;
  extra?: React.ReactNode;
  align?: "left" | "right";
}) {
  return (
    <article
      className={[
        "group relative rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur transition-shadow hover:shadow-md",
        "before:absolute before:top-6 before:h-3 before:w-3 before:rounded-full before:border before:border-white before:shadow",
        align === "left"
          ? "md:mr-8 before:-right-[29px] before:bg-emerald-500"
          : "md:ml-8 before:-left-[29px] before:bg-sky-500",
      ].join(" ")}
    >
      <header className="mb-3 flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100">
          {icon}
        </span>
        <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
          {title}
        </h3>
      </header>
      <p className="text-slate-700 leading-relaxed">{text}</p>
      {extra}
    </article>
  );
}
