"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { CalendarDays } from "lucide-react";

type DateItem = {
  date: string;
  title: string;
  note?: string;
};

const DATES: DateItem[] = [
  { date: "15 March 2025", title: "Intent to Participate" },
  { date: "30 April 2025", title: "Number of Participants" },
  { date: "30 April 2025", title: "Number of Participants" },
  { date: "30 April 2025", title: "Number of Participants" },
  { date: "30 April 2025", title: "Number of Participants" },
  { date: "31 October 2025", title: "Nominating Team Leaders" },
  { date: "10–19 July 2026", title: "Olympiad Dates", note: "IChO 2026 – Tashkent" },
];

export default function KeyDatesTimeline() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const railRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  // Refs for each card (detect which is in view)
  const cardRefs = useMemo(
    () => Array.from({ length: DATES.length }, () => ({ current: null as HTMLDivElement | null })),
    []
  );

  // Which card is most in view
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top + a.boundingClientRect.height / 2) -
              Math.abs(b.boundingClientRect.top + b.boundingClientRect.height / 2)
          );
        if (visible[0]) {
          const idx = Number((visible[0].target as HTMLElement).dataset.idx);
          setActiveIdx(idx);
        }
      },
      { root: null, threshold: [0.35, 0.6] }
    );

    cardRefs.forEach((r) => r.current && io.observe(r.current));
    return () => io.disconnect();
  }, [cardRefs]);

  // Fill the rail strictly within its bounds (no overflow into footer)
  useEffect(() => {
    const onScroll = () => {
      const sec = sectionRef.current;
      const rail = railRef.current;
      const prog = progressRef.current;
      if (!sec || !rail || !prog) return;

      const secRect = sec.getBoundingClientRect();
      const railRect = rail.getBoundingClientRect();
      const viewport = window.innerHeight;

      // Anchor ~45% of viewport height
      const anchor = viewport * 0.45;

      // Progress over the SECTION (start when section top reaches anchor, finish when section bottom reaches anchor)
      const start = secRect.top;
      const end = secRect.bottom;
      const pct = (anchor - start) / (end - start);
      const clampedPct = Math.max(0, Math.min(1, pct));

      const railHeight = railRect.height; // actual visible rail height
      prog.style.height = `${clampedPct * railHeight}px`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 bg-gradient-to-br from-white to-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-10">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900">
            Important Dates & Deadlines
          </h2>
          <p className="mt-2 text-slate-600">For Participating and Observer Countries</p>
        </header>

        <div className="grid grid-cols-[28px_1fr] sm:grid-cols-[56px_1fr] gap-6">
          {/* Sticky rail (overflow hidden ensures no visual spill) */}
          <div className="relative">
            <div
              ref={railRef}
              className="sticky top-28 h-[60vh] overflow-hidden"
            >
              {/* rail */}
              <div className="absolute left-1/2 -translate-x-1/2 w-[3px] sm:w-1 bg-slate-200/90 rounded-full h-full" />
              {/* progress (clamped to rail height) */}
              <div
                ref={progressRef}
                className="absolute left-1/2 -translate-x-1/2 w-[3px] sm:w-1 bg-indigo-600 rounded-full transition-[height] duration-200 ease-out"
                style={{ height: 0 }}
              />
              {/* active node (positioned proportionally; visually stays inside rail) */}
              <div
                className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-indigo-600 rounded-full ring-4 ring-indigo-100 transition-transform duration-300 ease-out"
                style={{
                  transform: `translate(-50%, calc(${(activeIdx / (DATES.length - 1 || 1)) * 100}% - 8px))`,
                  top: 0,
                }}
                aria-hidden
              />
            </div>
          </div>

          {/* Cards */}
          <div ref={containerRef} className="space-y-8">
            {DATES.map((item, i) => {
              const isActive = i === activeIdx;

              return (
                <div
                  key={i}
                  data-idx={i}
                  ref={(el) => ((cardRefs[i].current as any) = el)}
                  className={[
                    "group relative overflow-hidden rounded-2xl p-6 md:p-8 border",
                    "shadow-sm transition-all duration-300",
                    "bg-white/70 backdrop-blur supports-[backdrop-filter]:backdrop-blur",
                    "border-slate-200/60 hover:shadow-lg",
                    isActive ? "ring-1 ring-indigo-200/70" : "",
                  ].join(" ")}
                >
                  {/* subtle pattern */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 opacity-[0.35]"
                    style={{
                      backgroundImage:
                        "radial-gradient(rgba(2,6,23,0.04) 1px, transparent 1px)",
                      backgroundSize: "14px 14px",
                      maskImage:
                        "radial-gradient(1200px 300px at 20% 0%, black 30%, transparent 75%)",
                    }}
                  />

                  <div className="relative flex items-start gap-4">
                    <div className="shrink-0 p-3 rounded-xl bg-indigo-50 ring-1 ring-indigo-100">
                      <CalendarDays className="w-6 h-6 text-indigo-600" />
                    </div>

                    <div className="min-w-0">
                      <div className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900">
                        {item.date}
                      </div>
                      <div className="mt-1 text-lg text-slate-700">{item.title}</div>
                      {item.note && (
                        <div className="mt-2 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-slate-700 border-slate-200 bg-white/60">
                          {item.note}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* bottom accent line */}
                  <span
                    aria-hidden
                    className={[
                      "absolute left-0 bottom-0 h-[3px] w-0 bg-gradient-to-r from-indigo-600 via-sky-500 to-emerald-500",
                      "transition-all duration-500",
                      isActive ? "w-full" : "group-hover:w-full",
                    ].join(" ")}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
