"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Quote } from "lucide-react";

const welcomeMessages = [
  {
    id: 1,
    name: "Turaboy Shermatov",
    title: "Director of the Science Olympiad Center",
    subtitle: "Republic of Uzbekistan",
    image: "/welcoming/torabek.jpg",
    gradient: "from-emerald-500 to-teal-600",
    accentColor: "emerald",
    short:
      "It is my great pleasure to warmly welcome you to Uzbekistan on the occasion of the 58th International Chemistry Olympiad (IChO 2026).",
    full: `Dear students, mentors, observers and distinguished guests,

It is my great pleasure to warmly welcome you to Uzbekistan on the occasion of the 58th International Chemistry Olympiad (IChO 2026).

The International Chemistry Olympiad is one of the world's most prestigious competitions for talented young chemists. It brings together outstanding students from across the globe to demonstrate their scientific knowledge, creativity, critical thinking, and passion for chemistry. For more than half a century, the Olympiad has inspired generations of young people to pursue excellence in science and has become a remarkable tradition within the international scientific community.

For the Science Olympiad Center, hosting IChO 2026 is both a great honor and a significant responsibility. We see this Olympiad not only as a competition, but also as a global platform that unites young talents, promotes scientific exchange, and strengthens international friendship and cooperation.

I am confident that among you are the future scientists, innovators, and leaders whose discoveries and ideas will help shape a better world.

We believe that IChO 2026 will bring you not only academic achievements, but also unforgettable memories, meaningful friendships, valuable experiences, and lasting inspiration.

We are delighted to welcome you to Uzbekistan and are confident that this Olympiad will open new opportunities and create memorable experiences for every participant.

I wish all of you success, confidence, and the very best of luck.`,
  },
  {
    id: 2,
    name: "Ezozkhon Karimova",
    title: "Minister of Preschool and School Education",
    subtitle: "Republic of Uzbekistan",
    image: "/welcoming/ezoza.jpg",
    gradient: "from-sky-500 to-blue-600",
    accentColor: "sky",
    short:
      "On the occasion of the 58th International Chemistry Olympiad (IChO 2026), held in Uzbekistan for the first time, I am delighted to extend a warm welcome to all delegations, scientists, mentors, and talented students.",
    full: `On the occasion of the 58th International Chemistry Olympiad (IChO 2026), held in Uzbekistan for the first time, I am delighted to extend a warm welcome to all delegations, scientists, mentors, and talented students who have arrived from around the world.

Hosting this prestigious international event is both a great honor and a significant responsibility for Uzbekistan. It reflects the international recognition of our country's ongoing efforts to advance education, science, and the development of young talent.

This Olympiad once again demonstrates that science knows no borders. Chemistry transforms matter, while science transforms lives. It brings together people from different nations, cultures, and backgrounds in pursuit of a shared goal — knowledge, innovation, and progress.

Uzbekistan is a country where ancient heritage and modern development come together. During your stay, you will not only participate in challenging Olympiad activities but also have the opportunity to experience the hospitality of our people, explore our rich cultural heritage, and discover the values that have shaped our nation for centuries.

Dear students, we are eagerly looking forward to welcoming you to Uzbekistan. We believe that IChO 2026, where scientific discovery meets the spirit of international cooperation, will become an unforgettable and inspiring experience for every participant.

Dear guests, it is our great pleasure to welcome you to Uzbekistan. We wish that IChO 2026 will be filled with outstanding achievements, meaningful exchanges, new friendships, inspiration, and unforgettable memories for all of you.

We look forward to seeing you in Uzbekistan.`,
  },
];

function MessageCard({ person, index }: { person: (typeof welcomeMessages)[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  const accentClasses: Record<string, { ring: string; bg: string; text: string; badge: string; btn: string }> = {
    emerald: {
      ring: "ring-emerald-200",
      bg: "bg-emerald-50",
      text: "text-emerald-700",
      badge: "bg-emerald-100 text-emerald-700",
      btn: "text-emerald-600 hover:text-emerald-800 hover:bg-emerald-50",
    },
    sky: {
      ring: "ring-sky-200",
      bg: "bg-sky-50",
      text: "text-sky-700",
      badge: "bg-sky-100 text-sky-700",
      btn: "text-sky-600 hover:text-sky-800 hover:bg-sky-50",
    },
    amber: {
      ring: "ring-amber-200",
      bg: "bg-amber-50",
      text: "text-amber-700",
      badge: "bg-amber-100 text-amber-700",
      btn: "text-amber-600 hover:text-amber-800 hover:bg-amber-50",
    },
  };

  const acc = accentClasses[person.accentColor] ?? accentClasses.emerald;
  const isEven = index % 2 === 0;

  return (
    <div
      className={`group relative flex flex-col lg:flex-row ${
        isEven ? "" : "lg:flex-row-reverse"
      } gap-0 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 bg-white border border-slate-100`}
    >
      {/* Colored sidebar / top bar */}
      <div
        className={`bg-gradient-to-br ${person.gradient} lg:w-72 w-full lg:min-h-full min-h-0 flex flex-col items-center justify-center p-8 lg:p-10 gap-6 relative overflow-hidden`}
      >
        {/* Decorative circles */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full" />
        <div className="absolute -bottom-12 -left-8 w-48 h-48 bg-white/10 rounded-full" />

        {/* Photo */}
        <div className="relative z-10">
          <div className="w-36 h-36 lg:w-44 lg:h-44 rounded-full ring-4 ring-white/50 overflow-hidden shadow-2xl">
            <img
              src={person.image}
              alt={person.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                const t = e.currentTarget;
                t.style.display = "none";
                const parent = t.parentElement!;
                parent.innerHTML = `<div class="w-full h-full bg-white/20 flex items-center justify-center text-white/80 text-5xl font-bold">${person.name.charAt(0)}</div>`;
              }}
            />
          </div>
        </div>

        {/* Name & Title */}
        <div className="relative z-10 text-center">
          <p className="text-white font-bold text-lg leading-snug">{person.name}</p>
          <p className="text-white/80 text-sm mt-1 leading-snug">{person.title}</p>
          <p className="text-white/60 text-xs mt-1">{person.subtitle}</p>
        </div>

        {/* Quote icon */}
        <Quote className="absolute bottom-6 right-6 w-8 h-8 text-white/20" />
      </div>

      {/* Text content */}
      <div className="flex-1 p-8 lg:p-10 flex flex-col justify-between">
        <div>
          <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold mb-5 ${acc.badge}`}>
            Welcome Message
          </div>

          <div className="space-y-4">
            {expanded ? (
              person.full.split("\n\n").map((para, i) =>
                para.trim() ? (
                  <p key={i} className="text-slate-600 leading-relaxed text-[15px]">
                    {para.trim()}
                  </p>
                ) : null
              )
            ) : (
              <p className="text-slate-600 leading-relaxed text-[15px]">
                <span className="text-slate-400 text-xl font-serif mr-1">"</span>
                {person.short}
                <span className="text-slate-400 text-xl font-serif ml-1">"</span>
              </p>
            )}
          </div>
        </div>

        <button
          onClick={() => setExpanded(!expanded)}
          className={`mt-6 self-start flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-200 ${acc.btn}`}
        >
          {expanded ? (
            <>
              Show less <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Read full message <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export function WelcomeMessages() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl translate-x-1/2" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        {/* Subtle grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] bg-[size:48px_48px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-slate-200 shadow-sm text-sm font-medium text-slate-500 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            IChO 2026 · Tashkent, Uzbekistan
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-800 tracking-tight mb-4">
            Welcome{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-sky-600 to-amber-500 bg-clip-text text-transparent">
              Messages
            </span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-lg leading-relaxed">
            Greetings from the distinguished officials and leaders who are proud to host the world's brightest chemistry
            minds in Uzbekistan.
          </p>
        </div>

        {/* Cards */}
        <div className="space-y-8">
          {welcomeMessages.map((person, i) => (
            <MessageCard key={person.id} person={person} index={i} />
          ))}

          {/* Placeholder cards for the 3 remaining people */}
          {[3, 4, 5].map((n, i) => (
            <div
              key={n}
              className="relative flex flex-col lg:flex-row gap-0 rounded-3xl overflow-hidden border-2 border-dashed border-slate-200 bg-slate-50/50"
              style={{ minHeight: 180 }}
            >
              <div className="lg:w-72 w-full bg-slate-100 flex items-center justify-center p-10">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-slate-200 mx-auto mb-3 flex items-center justify-center text-slate-400 text-2xl font-bold">
                    ?
                  </div>
                  <p className="text-slate-400 text-sm font-medium">Coming soon</p>
                </div>
              </div>
              <div className="flex-1 p-8 flex items-center">
                <p className="text-slate-300 italic text-sm">Welcome message #{n} will be added soon.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}