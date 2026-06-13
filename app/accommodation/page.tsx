"use client";

import {
  Hotel,
  Building2,
  Utensils,
  Scale,
  CheckCircle2,
  BookOpen,
  Sparkles,
  ExternalLink,
  Play,
} from "lucide-react";

const YOUTUBE_EMBED_ID = "ElJxz_P-CVk";

const venues = [
  {
    title: "New Uzbekistan",
    subtitle: "Student Residence",
    description:
      "Young chemists will be accommodated in a modern hotel complex in New Uzbekistan, offering comfortable living spaces, sports facilities, wellness areas, and an inspiring atmosphere designed to help participants focus, prepare, and perform at their best.",
    icon: Hotel,
    color: "emerald",
    href: null,
  },
  {
    title: "Wyndham Tashkent",
    subtitle: "Operational Center & Dining",
    description:
      "Wyndham Tashkent will serve as one of the Olympiad's main operational centers — hosting mentors, observers, guests, and scientific experts, while also serving as the central Dining Area for all delegates staying at both Wyndham Tashkent and Hyatt Regency Tashkent.",
    icon: Utensils,
    color: "sky",
    href: "https://wyndhamtashkent.com/",
  },
  {
    title: "Hyatt Regency Tashkent",
    subtitle: "Intellectual Headquarters",
    description:
      "Hyatt Regency Tashkent will become the intellectual headquarters of IChO 2026 — the place where jury meetings, scientific discussions, translations, and arbitration sessions will shape every key decision of the Olympiad.",
    icon: Scale,
    color: "amber",
    href: "https://www.hyatt.com/hyatt-regency/en-US/tasuw-hyatt-regency-tashkent",
  },
];

const colorMap = {
  emerald: {
    iconBg: "bg-emerald-100",
    iconText: "text-emerald-600",
    border: "border-emerald-100 hover:border-emerald-200",
    badge: "bg-emerald-50 text-emerald-700",
    link: "text-emerald-600 hover:text-emerald-800",
  },
  sky: {
    iconBg: "bg-sky-100",
    iconText: "text-sky-600",
    border: "border-sky-100 hover:border-sky-200",
    badge: "bg-sky-50 text-sky-700",
    link: "text-sky-600 hover:text-sky-800",
  },
  amber: {
    iconBg: "bg-amber-100",
    iconText: "text-amber-600",
    border: "border-amber-100 hover:border-amber-200",
    badge: "bg-amber-50 text-amber-700",
    link: "text-amber-600 hover:text-amber-800",
  },
};

export default function AccommodationPage() {
  return (
    <main className="flex-grow">
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-sky-500/5 to-amber-500/5" />
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-2xl rotate-12 animate-pulse" />
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-sky-400/20 to-sky-600/20 rounded-full animate-pulse" />
          <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-3xl -rotate-6 animate-pulse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium text-slate-600 mb-6">
            <Building2 className="w-4 h-4 text-emerald-500" />
            <span>IChO 2026 Venues</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6">
            <span className="block text-slate-900 mb-2">Accommodation</span>
            <span className="block bg-gradient-to-r from-emerald-600 via-sky-600 to-amber-600 bg-clip-text text-transparent">
              & Venues
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            World-class hotels and facilities designed for
            <span className="font-semibold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
              {" "}
              scientific excellence
            </span>
          </p>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-red-50 text-red-600 rounded-full text-sm font-medium mb-4">
              <Play className="w-4 h-4 fill-current" />
              <span>Video Tour</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Explore Our Accommodation Facilities
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Take a virtual tour of the venues where IChO 2026 participants,
              mentors, and scientific experts will stay and work.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-400 rounded-3xl blur-sm opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
            <div className="relative bg-white rounded-2xl p-2 shadow-xl border border-slate-100">
              <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-900">
                <iframe
                  src={`https://www.youtube.com/embed/${YOUTUBE_EMBED_ID}`}
                  title="IChO 2026 Accommodation Facilities Tour"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 md:p-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">
                  Built for Excellence
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  The success of an International Chemistry Olympiad is built not
                  only on scientific excellence, but also on flawless
                  organization, comfort, and carefully designed working
                  environments for every participant.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-emerald-50 border border-emerald-100 rounded-xl">
              <Sparkles className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
              <p className="text-emerald-800 font-medium leading-relaxed">
                For IChO 2026, every stage of the Olympiad process has been
                planned to meet the highest international standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Venue Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
            Official Venues
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Three premier locations across Tashkent, each serving a distinct role
            in delivering an unforgettable Olympiad experience.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {venues.map((venue) => {
              const colors = colorMap[venue.color as keyof typeof colorMap];
              const Icon = venue.icon;

              return (
                <div
                  key={venue.title}
                  className={`bg-white border shadow-md rounded-2xl p-6 transition-all hover:shadow-lg ${colors.border}`}
                >
                  <div
                    className={`w-14 h-14 ${colors.iconBg} rounded-xl flex items-center justify-center mb-5`}
                  >
                    <Icon className={`w-7 h-7 ${colors.iconText}`} />
                  </div>

                  <span
                    className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${colors.badge}`}
                  >
                    {venue.subtitle}
                  </span>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {venue.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed mb-4">
                    {venue.description}
                  </p>

                  {venue.href && (
                    <a
                      href={venue.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-sm font-medium ${colors.link} transition-colors`}
                    >
                      Visit website
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Standards & Closing */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-md p-8">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
              <CheckCircle2 className="w-7 h-7 text-emerald-600" />
              Every Detail Matters
            </h2>
            <p className="text-slate-600 leading-relaxed">
              From accommodation to arbitration, from preparation rooms to
              decision-making halls, every process is being built to meet the
              prestigious standards of the International Chemistry Olympiad.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 via-sky-600 to-amber-600 p-8 md:p-10 text-white shadow-xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative">
              <p className="text-lg md:text-xl font-light leading-relaxed mb-4">
                Because IChO 2026 is not only about bringing the world together
                through chemistry —
              </p>
              <p className="text-xl md:text-2xl font-bold leading-relaxed">
                it is about creating the perfect environment for excellence to
                happen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
