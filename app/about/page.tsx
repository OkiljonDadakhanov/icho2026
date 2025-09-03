"use client";

import React from "react";
import Image from "next/image";
import {
  BookOpen,
  Target,
  FlaskConical,
  Users2,
  Award,
  Globe2,
  Languages,
} from "lucide-react";

export default function AboutIcho() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(1100px_600px_at_10%_0%,rgba(16,185,129,0.08),transparent_50%),radial-gradient(1000px_500px_at_90%_10%,rgba(56,189,248,0.08),transparent_55%)]">
      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:44px_44px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-14">
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
              About the International Chemistry Olympiad (IChO)
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              The World’s Premier Chemistry Competition for Students
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-slate-700">
              IChO is an annual academic competition that gathers the brightest
              secondary-school chemists from 80+ countries to tackle advanced
              theoretical and experimental problems in chemistry.
            </p>
          </div>
        </header>

        {/* Key Summary */}
        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FactChip title="Founded" value="1968 • Prague, Czechoslovakia" />
          <FactChip
            title="Participants"
            value="80+ countries • 300+ students / year"
          />
          <FactChip
            title="Format"
            value="Two 5-hour exams: Practical + Theoretical"
          />
          <FactChip
            title="Team"
            value="Up to 4 students + 2 mentors per country"
          />
        </section>

        {/* Purpose & Mission */}
        <section className="grid gap-6 rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur">
          <HeaderRow
            icon={<Target className="h-5 w-5 text-emerald-600" />}
            title="Purpose & Mission"
          />
          <ul className="grid gap-2 text-slate-700 sm:grid-cols-2">
            <li className="leading-relaxed">
              Inspire a deep interest in chemistry among young students.
            </li>
            <li className="leading-relaxed">
              Develop problem-solving through challenging theoretical and
              experimental tasks.
            </li>
            <li className="leading-relaxed">
              Promote international collaboration and cultural exchange.
            </li>
            <li className="leading-relaxed">
              Build lifelong friendships and strengthen global cooperation in
              science and education.
            </li>
          </ul>
        </section>

        {/* Competition Structure */}
        <section className="grid gap-6 rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur">
          <HeaderRow
            icon={<Users2 className="h-5 w-5 text-sky-600" />}
            title="Competition Structure"
          />
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <h3 className="font-semibold text-slate-900">Delegations</h3>
              <p className="text-slate-700">
                Each country sends up to <b>4 students</b> and <b>2 mentors</b>{" "}
                (one as Head Mentor). Scientific observers and guests may also
                attend.
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="font-semibold text-slate-900">Examinations</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <FlaskConical className="mt-0.5 h-4 w-4 text-amber-600" />
                  <span>
                    <b>Practical (Experimental)</b> — laboratory techniques,
                    data analysis, and experimental problem-solving.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <BookOpen className="mt-0.5 h-4 w-4 text-indigo-600" />
                  <span>
                    <b>Theoretical</b> — advanced topics across all areas of
                    chemistry.
                  </span>
                </li>
              </ul>
              <p className="text-slate-700">
                Each exam lasts <b>five hours</b> and emphasizes knowledge,
                creativity, and critical thinking.
              </p>
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="grid gap-6 rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur">
          <HeaderRow
            icon={<Award className="h-5 w-5 text-rose-600" />}
            title="Awards & Recognition"
          />
          <p className="text-slate-700">
            IChO recognizes <b>individual</b> excellence. Students are ranked by
            overall score and may receive:
          </p>
          <ul className="grid gap-2 text-slate-700 sm:grid-cols-2">
            <li>Gold, Silver, and Bronze Medals</li>
            <li>Honourable Mentions</li>
            <li>
              Special Awards — Highest Overall Score, Best Theoretical, Best
              Practical
            </li>
          </ul>
        </section>

        {/* Global Reach & Language */}
        <section className="grid gap-6 rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur">
          <HeaderRow
            icon={<Globe2 className="h-5 w-5 text-teal-600" />}
            title="Global Reach"
          />
          <p className="text-slate-700">
            From a 3-country start in 1968, IChO now brings together hundreds of
            students from <b>80+ nations</b> annually. Hosting rotates each
            year, giving participants the chance to discover new cultures, build
            international friendships, and experience world-class scientific
            collaboration.
          </p>
          <div className="flex items-center gap-2 text-slate-700">
            <Languages className="h-4 w-4 text-slate-600" />
            <span>
              <b>Official language:</b> English (mentors translate exams into
              local languages).
            </span>
          </div>
        </section>

        {/* Key Facts table */}
        <section className="rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur">
          <h3 className="mb-4 text-xl font-semibold text-slate-900">
            Key Facts
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-slate-700">
              <tbody className="[&>tr:not(:last-child)]:border-b [&>tr:not(:last-child)]:border-slate-200">
                <FactRow k="Founded" v="1968 (Prague, Czechoslovakia)" />
                <FactRow
                  k="Participating Countries"
                  v="80+ nations from all continents"
                />
                <FactRow k="Annual Participants" v="300+ students" />
                <FactRow
                  k="Competition Format"
                  v="Two exams: 5-hour Practical + 5-hour Theoretical"
                />
                <FactRow
                  k="Medal Distribution"
                  v="Gold ≈ top 12%, Silver ≈ next 22%, Bronze ≈ next 32%"
                />
                <FactRow
                  k="Special Awards"
                  v="Highest Overall • Best Theoretical • Best Practical"
                />
                <FactRow
                  k="Hosting System"
                  v="Organized by a different country every year"
                />
                <FactRow
                  k="Team Structure"
                  v="Up to 4 students + 2 mentors per country"
                />
                <FactRow
                  k="IChO Flag Symbolism"
                  v="Five flames: Thallium (green), Calcium (orange), Sodium (yellow), Copper (blue-green), Strontium (red)"
                />
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </section>
  );
}

/* ---------- helpers ---------- */

function FactChip({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur">
      <p className="text-xs uppercase tracking-wide text-slate-500">{title}</p>
      <p className="mt-1 text-slate-900">{value}</p>
    </div>
  );
}

function HeaderRow({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100">
        {icon}
      </span>
      <h2 className="text-lg font-semibold text-slate-900 sm:text-xl">
        {title}
      </h2>
    </div>
  );
}

function FactRow({ k, v }: { k: string; v: string }) {
  return (
    <tr className="align-top">
      <th className="w-52 px-0 py-3 pr-4 text-slate-500">{k}</th>
      <td className="py-3">{v}</td>
    </tr>
  );
}
