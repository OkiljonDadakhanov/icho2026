"use client";

import {
  CalendarDays,
  ClipboardCheck,
  CreditCard,
  FileText,
  Plane,
} from "lucide-react";

type KeyDate = {
  title: string;
  dateRange: string;
  description: string;
  icon: React.ReactNode;
  color: "teal" | "emerald" | "sky" | "indigo";
};

const KEY_DATES: KeyDate[] = [
  {
    title: "Pre-registration",
    dateRange: "25 January – 1 March 2026",
    description:
      "Initial confirmation of a country's intention to participate, including basic delegation information.",
    icon: <ClipboardCheck className="w-6 h-6" />,
    color: "teal",
  },
  {
    title: "Payment Deadline",
    dateRange: "1 March – 1 May 2026",
    description:
      "Final date by which the participation fee must be paid to confirm the delegation's attendance.",
    icon: <CreditCard className="w-6 h-6" />,
    color: "emerald",
  },
  {
    title: "Detailed Registration",
    dateRange: "1 May – 1 June 2026",
    description:
      "Submission of complete and finalized information about all delegation members and required documents.",
    icon: <FileText className="w-6 h-6" />,
    color: "sky",
  },
  {
    title: "Travel Information",
    dateRange: "1 May – 20 June 2026",
    description:
      "Provision of arrival and departure details to arrange accommodation, transportation, and logistics.",
    icon: <Plane className="w-6 h-6" />,
    color: "indigo",
  },
];

const colorClasses = {
  teal: {
    bg: "bg-teal-500",
    bgLight: "bg-teal-50",
    text: "text-teal-600",
    border: "border-teal-200",
    ring: "ring-teal-100",
    gradient: "from-teal-500 to-teal-600",
  },
  emerald: {
    bg: "bg-emerald-500",
    bgLight: "bg-emerald-50",
    text: "text-emerald-600",
    border: "border-emerald-200",
    ring: "ring-emerald-100",
    gradient: "from-emerald-500 to-emerald-600",
  },
  sky: {
    bg: "bg-sky-500",
    bgLight: "bg-sky-50",
    text: "text-sky-600",
    border: "border-sky-200",
    ring: "ring-sky-100",
    gradient: "from-sky-500 to-sky-600",
  },
  indigo: {
    bg: "bg-indigo-500",
    bgLight: "bg-indigo-50",
    text: "text-indigo-600",
    border: "border-indigo-200",
    ring: "ring-indigo-100",
    gradient: "from-indigo-500 to-indigo-600",
  },
};

export default function KeyDatesPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/5 via-emerald-500/5 to-sky-500/5"></div>
        <div className="absolute top-24 left-10 w-32 h-32 bg-gradient-to-br from-teal-400/20 to-teal-600/20 rounded-2xl rotate-12 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-sky-400/20 to-sky-600/20 rounded-3xl -rotate-6 animate-float-slow"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium text-slate-600">
            <CalendarDays className="w-4 h-4 text-teal-500" />
            <span>IChO 2026 Timeline</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-slate-900">
            Important Dates
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Key deadlines for participating and observer countries
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line - Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-300 via-emerald-300 via-sky-300 to-indigo-300 rounded-full transform -translate-x-1/2" />

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-0">
            {KEY_DATES.map((item, index) => {
              const colors = colorClasses[item.color];
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative md:flex md:items-center ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content Card */}
                  <div
                    className={`md:w-[calc(50%-2rem)] ${
                      isEven ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                    }`}
                  >
                    <div
                      className={`bg-white rounded-2xl p-6 shadow-lg border ${colors.border} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                    >
                      {/* Mobile Icon */}
                      <div
                        className={`md:hidden inline-flex items-center justify-center w-12 h-12 rounded-xl ${colors.bgLight} ${colors.text} mb-4`}
                      >
                        {item.icon}
                      </div>

                      {/* Title */}
                      <h3 className={`text-xl font-bold ${colors.text} mb-2`}>
                        {item.title}
                      </h3>

                      {/* Date Badge */}
                      <div
                        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${colors.bgLight} ${colors.text} text-sm font-semibold mb-3`}
                      >
                        <CalendarDays className="w-4 h-4" />
                        {item.dateRange}
                      </div>

                      {/* Description */}
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node - Desktop */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                    <div
                      className={`w-14 h-14 rounded-full bg-gradient-to-br ${colors.gradient} shadow-lg flex items-center justify-center text-white ring-4 ${colors.ring}`}
                    >
                      {item.icon}
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block md:w-[calc(50%-2rem)]" />

                  {/* Mobile Timeline Connector */}
                  {index < KEY_DATES.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <div className="w-1 h-8 bg-gradient-to-b from-slate-200 to-slate-300 rounded-full" />
                    </div>
                  )}

                  {/* Desktop Spacing */}
                  <div className="hidden md:block h-32" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Event Dates Banner */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-6 bg-gradient-to-r from-teal-500 via-emerald-500 to-sky-500 rounded-3xl shadow-xl text-white">
            <div className="p-3 bg-white/20 rounded-xl">
              <CalendarDays className="w-8 h-8" />
            </div>
            <div className="text-center sm:text-left">
              <div className="text-sm font-medium text-white/80 uppercase tracking-wide">
                58th IChO Event Dates
              </div>
              <div className="text-2xl sm:text-3xl font-bold">
                10 – 19 July 2026
              </div>
              <div className="text-white/90">Tashkent, Uzbekistan</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
