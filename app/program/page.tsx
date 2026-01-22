"use client";

import Link from "next/link";
import {
  Download,
  Calendar,
  ScrollText,
  Users,
  GraduationCap,
  FlaskConical,
  PartyPopper,
  Plane,
  MapPin,
  BookOpen,
  Award,
  Scale,
} from "lucide-react";

type ProgramDay = {
  day: number;
  date: string;
  students: string;
  teamLeaders: string;
  highlight?: "exam" | "ceremony" | "arrival" | "departure";
};

const programData: ProgramDay[] = [
  {
    day: 1,
    date: "1 July 2026",
    students: "Arrival, Check in, Registration",
    teamLeaders: "Arrival, Check in, Registration",
    highlight: "arrival",
  },
  {
    day: 2,
    date: "2 July 2026",
    students: "Opening Ceremony, Laboratory Introduction",
    teamLeaders: "Opening Ceremony, Laboratory Introduction, 1st Meeting",
    highlight: "ceremony",
  },
  {
    day: 3,
    date: "3 July 2026",
    students: "Excursion",
    teamLeaders: "Practical work translation",
  },
  {
    day: 4,
    date: "4 July 2026",
    students: "Olympiad: Practical Exam",
    teamLeaders: "2nd Meeting",
    highlight: "exam",
  },
  {
    day: 5,
    date: "5 July 2026",
    students: "Excursion",
    teamLeaders: "Theoretical Exam translation",
  },
  {
    day: 6,
    date: "6 July 2026",
    students: "Olympiad: Theoretical Exam",
    teamLeaders: "Excursion",
    highlight: "exam",
  },
  {
    day: 7,
    date: "7 July 2026",
    students: "Excursion",
    teamLeaders: "Evaluation of works, Excursion, 3rd Meeting",
  },
  {
    day: 8,
    date: "8 July 2026",
    students: "Excursion",
    teamLeaders: "Arbitration, 4th Meeting",
  },
  {
    day: 9,
    date: "9 July 2026",
    students: "Closing Ceremony",
    teamLeaders: "Closing Ceremony",
    highlight: "ceremony",
  },
  {
    day: 10,
    date: "10 July 2026",
    students: "Departure",
    teamLeaders: "Departure",
    highlight: "departure",
  },
];

function getIcon(activity: string, highlight?: string) {
  if (highlight === "exam") return <FlaskConical className="w-5 h-5" />;
  if (highlight === "ceremony") return <PartyPopper className="w-5 h-5" />;
  if (highlight === "arrival" || highlight === "departure")
    return <Plane className="w-5 h-5" />;
  if (activity.toLowerCase().includes("excursion"))
    return <MapPin className="w-5 h-5" />;
  if (activity.toLowerCase().includes("translation"))
    return <BookOpen className="w-5 h-5" />;
  if (activity.toLowerCase().includes("meeting"))
    return <Users className="w-5 h-5" />;
  if (activity.toLowerCase().includes("arbitration"))
    return <Scale className="w-5 h-5" />;
  if (activity.toLowerCase().includes("evaluation"))
    return <Award className="w-5 h-5" />;
  return <Calendar className="w-5 h-5" />;
}

function getHighlightStyles(highlight?: string) {
  switch (highlight) {
    case "exam":
      return "bg-gradient-to-r from-rose-500 to-orange-500 text-white";
    case "ceremony":
      return "bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-900";
    case "arrival":
      return "bg-gradient-to-r from-emerald-500 to-teal-500 text-white";
    case "departure":
      return "bg-gradient-to-r from-sky-500 to-blue-500 text-white";
    default:
      return "bg-white/80 text-slate-700";
  }
}

function getDayBadgeStyles(highlight?: string) {
  switch (highlight) {
    case "exam":
      return "bg-rose-100 text-rose-700 border-rose-200";
    case "ceremony":
      return "bg-amber-100 text-amber-700 border-amber-200";
    case "arrival":
      return "bg-emerald-100 text-emerald-700 border-emerald-200";
    case "departure":
      return "bg-sky-100 text-sky-700 border-sky-200";
    default:
      return "bg-slate-100 text-slate-600 border-slate-200";
  }
}

export default function ProgramPage() {
  return (
    <section
      id="program"
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden"
    >
      {/* Background effects */}
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
            Program of Events
          </h1>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto font-light">
            Explore the 10-day schedule of the 58th International Chemistry
            Olympiad in Tashkent, Uzbekistan.
          </p>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-rose-100 rounded-full text-sm text-rose-700">
            <FlaskConical className="w-4 h-4" />
            <span>Exam</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-100 rounded-full text-sm text-amber-700">
            <PartyPopper className="w-4 h-4" />
            <span>Ceremony</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-100 rounded-full text-sm text-emerald-700">
            <Plane className="w-4 h-4" />
            <span>Arrival</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-sky-100 rounded-full text-sm text-sky-700">
            <Plane className="w-4 h-4" />
            <span>Departure</span>
          </div>
        </div>

        {/* Column Headers */}
        <div className="hidden md:grid md:grid-cols-[100px_1fr_1fr] gap-4 px-4">
          <div></div>
          <div className="flex items-center justify-center gap-2 text-slate-600 font-semibold">
            <GraduationCap className="w-5 h-5 text-emerald-600" />
            <span>Students</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-slate-600 font-semibold">
            <Users className="w-5 h-5 text-sky-600" />
            <span>Team Leaders</span>
          </div>
        </div>

        {/* Program Timeline */}
        <div className="space-y-4">
          {programData.map((day) => (
            <div
              key={day.day}
              className="group relative bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Highlight bar */}
              {day.highlight && (
                <div
                  className={`absolute left-0 top-0 bottom-0 w-1.5 ${
                    day.highlight === "exam"
                      ? "bg-rose-500"
                      : day.highlight === "ceremony"
                      ? "bg-amber-500"
                      : day.highlight === "arrival"
                      ? "bg-emerald-500"
                      : "bg-sky-500"
                  }`}
                />
              )}

              <div className="grid md:grid-cols-[100px_1fr_1fr] gap-4 p-4 md:p-6">
                {/* Day & Date */}
                <div className="flex md:flex-col items-center md:items-start gap-2 md:gap-1">
                  <span
                    className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-sm font-bold border ${getDayBadgeStyles(
                      day.highlight
                    )}`}
                  >
                    Day {day.day}
                  </span>
                  <span className="text-sm text-slate-500 font-medium">
                    {day.date}
                  </span>
                </div>

                {/* Students Activity */}
                <div className="space-y-2">
                  <div className="md:hidden flex items-center gap-2 text-xs text-slate-500 font-medium uppercase tracking-wide">
                    <GraduationCap className="w-4 h-4 text-emerald-600" />
                    Students
                  </div>
                  <div
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl ${getHighlightStyles(
                      day.highlight
                    )} ${!day.highlight && "border border-slate-200"}`}
                  >
                    {getIcon(day.students, day.highlight)}
                    <span className="font-medium">{day.students}</span>
                  </div>
                </div>

                {/* Team Leaders Activity */}
                <div className="space-y-2">
                  <div className="md:hidden flex items-center gap-2 text-xs text-slate-500 font-medium uppercase tracking-wide">
                    <Users className="w-4 h-4 text-sky-600" />
                    Team Leaders
                  </div>
                  <div
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl ${getHighlightStyles(
                      day.highlight
                    )} ${!day.highlight && "border border-slate-200"}`}
                  >
                    {getIcon(day.teamLeaders, day.highlight)}
                    <span className="font-medium">{day.teamLeaders}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download Button */}
        <div className="flex items-center justify-center pt-6">
          <Link
            href="/program.pdf"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-base font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Download className="w-5 h-5" />
            Download Program (PDF)
          </Link>
        </div>
      </div>
    </section>
  );
}
