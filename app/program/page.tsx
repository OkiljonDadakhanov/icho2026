"use client";

import { ScrollText, MapPin, Building2, Users, FlaskConical, Globe, Map } from "lucide-react";

type ScheduleEvent = {
  time: string;
  students: string;
  mentors: string;
  scientific: string;
};

type DaySchedule = {
  date: string;
  day: number;
  title: string;
  events: ScheduleEvent[];
};

const VENUE_INFO = {
  location: "National University of Uzbekistan & Central Asian Expo Center",
  studentResidence: "New Uzbekistan Hotels",
  mentorResidence: "Wyndham Hotel & Hyatt Regency Hotel",
  juryResidence: "Wyndham Hotel & Hyatt Regency Hotel",
  organizer: "Science Olympiad Center",
  website: "https://www.icho2026.uz/",
  excursions: [
    "Samarkand",
    "Sun Institute",
    "Islamic Civilisation Center",
    "Sport Complex",
  ],
};

const SCHEDULE: DaySchedule[] = [
  {
    date: "10.07.2026",
    day: 1,
    title: "Arrival & Registration Day",
    events: [
      { time: "All day", students: "Arrivals, badges, accommodation check-in", mentors: "Arrivals, badges, accommodation check-in", scientific: "Arrivals, badges, accommodation check-in" },
      { time: "07:00 – 09:00", students: "Breakfast (New Uzbekistan Hotels)", mentors: "Breakfast (Wyndham Hotel)", scientific: "Breakfast (Hyatt Regency)" },
      { time: "12:00 – 14:00", students: "Lunch (New Uzbekistan Hotels)", mentors: "Lunch (Wyndham Hotel)", scientific: "Lunch (Hyatt Regency)" },
      { time: "19:00 – 21:00", students: "Dinner (New Uzbekistan Hotels)", mentors: "Dinner (Wyndham Hotel)", scientific: "Dinner (Hyatt Regency)" },
    ],
  },
  {
    date: "11.07.2026",
    day: 2,
    title: "Opening Ceremony & Separation",
    events: [
      { time: "07:00 – 08:30", students: "Breakfast (New Uzbekistan Hotels)", mentors: "Breakfast (Wyndham Hotel)", scientific: "Breakfast (Hyatt Regency)" },
      { time: "09:30 – 12:30", students: "Opening Ceremony (International Forum Palace)", mentors: "Opening Ceremony (International Forum Palace)", scientific: "Opening Ceremony (International Forum Palace)" },
      { time: "12:30 – 13:00", students: "Giving all gadgets and electronic devices", mentors: "—", scientific: "—" },
      { time: "13:00 – 14:00", students: "Lunch (New Uzbekistan Hotels)", mentors: "Lunch (University)", scientific: "Lunch (Hyatt Regency)" },
      { time: "14:30 – 18:00", students: "Lab instruction (CAEx)", mentors: "Lab visit, equipment checks, receive practical exam copies", scientific: "—" },
      { time: "19:00 – 20:00", students: "Dinner (New Uzbekistan Hotels)", mentors: "Dinner (Wyndham Hotel)", scientific: "Dinner (Hyatt Regency)" },
      { time: "20:00 – 23:00", students: "—", mentors: "1st Jury Session — practical exam discussion - session 1 (Hyatt Regency)", scientific: "1st Jury Session — practical exam discussion - session 1 (Hyatt Regency)" },
      { time: "23:00 – 24:00", students: "—", mentors: "Practical exam discussion - session 2 (Hyatt Regency)", scientific: "Practical exam discussion - session 2 (Hyatt Regency)" },
    ],
  },
  {
    date: "12.07.2026",
    day: 3,
    title: "Excursion & Practical Exam Translation",
    events: [
      { time: "07:00 – 08:30", students: "Breakfast (New Uzbekistan Hotels)", mentors: "Breakfast (Wyndham Hotel)", scientific: "Breakfast (Hyatt Regency)" },
      { time: "09:00 – 13:00", students: "Excursion to New Uzbekistan Park", mentors: "Translation of practical exam (Hyatt Regency)", scientific: "Oversee translations (Hyatt Regency)" },
      { time: "13:00 – 14:00", students: "Lunch", mentors: "Lunch (Wyndham Hotel)", scientific: "Lunch (Hyatt Regency)" },
      { time: "14:00 – 19:00", students: "Master classes in New Uzbekistan Park (pottery, painting, board games, ice-breaking, etc.)", mentors: "Translation continues/printing (Wyndham Hotel)", scientific: "Oversee translations (Hyatt Regency)" },
      { time: "19:00 – 20:00", students: "Dinner (New Uzbekistan Hotels)", mentors: "Dinner (Wyndham Hotel)", scientific: "Dinner (Hyatt Regency)" },
      { time: "Until 21:00", students: "—", mentors: "Deadline for practical exam translation submission", scientific: "Deadline for practical exam translation submission" },
    ],
  },
  {
    date: "13.07.2026",
    day: 4,
    title: "Practical Exam",
    events: [
      { time: "06:00 – 08:00", students: "Breakfast (New Uzbekistan Hotels)", mentors: "Breakfast (Wyndham Hotel)", scientific: "Breakfast (Hyatt Regency)" },
      { time: "09:00 – 14:00", students: "Practical Exam (5 hrs)", mentors: "Distribution of theoretical exam copies (Hyatt Regency)", scientific: "Distribution of theoretical exam copies (Hyatt Regency)" },
      { time: "14:00 – 15:00", students: "Lunch (Campus)", mentors: "Lunch (Hyatt Regency)", scientific: "Lunch (Campus)" },
      { time: "15:00 – 19:00", students: "Excursion to Victory Park", mentors: "Preparation for discussing theoretical exam (Hyatt Regency)", scientific: "Preparation for discussing theoretical exam (Hyatt Regency)" },
      { time: "18:00 – 19:00", students: "Dinner (New Uzbekistan Hotels)", mentors: "Dinner (Wyndham Hotel)", scientific: "Dinner (Hyatt Regency)" },
      { time: "19:00 – 21:00", students: "—", mentors: "2nd Jury Session — theoretical exam discussion - session 1 (Hyatt Regency)", scientific: "2nd Jury Session — theoretical exam discussion - session 1 (Hyatt Regency)" },
      { time: "21:00 – 23:00", students: "—", mentors: "Theoretical exam discussion - session 2 (Hyatt Regency)", scientific: "Theoretical exam discussion - session 2 (Hyatt Regency)" },
    ],
  },
  {
    date: "14.07.2026",
    day: 5,
    title: "Excursion & Theoretical Exam Translation",
    events: [
      { time: "07:00 – 08:30", students: "Breakfast (New Uzbekistan Hotels)", mentors: "Breakfast (Wyndham Hotel)", scientific: "Breakfast (Hyatt Regency)" },
      { time: "09:00 – 13:00", students: "Excursion to Sun Institute", mentors: "Translation of theoretical exam", scientific: "Marking practical exam" },
      { time: "13:00 – 14:00", students: "Lunch (New Uzbekistan Hotels)", mentors: "Lunch (Wyndham Hotel)", scientific: "Lunch (Hyatt Regency)" },
      { time: "14:00 – 19:00", students: "Board games in New Uzbekistan Park/Hotels", mentors: "Translation continues/printing (Wyndham Hotel)", scientific: "Marking practical exam (Hyatt Regency)" },
      { time: "19:00 – 20:00", students: "Dinner (New Uzbekistan Hotels)", mentors: "Dinner (Wyndham Hotel)", scientific: "Dinner (Hyatt Regency)" },
      { time: "Until 21:00", students: "—", mentors: "Deadline for theoretical exam translation submission", scientific: "Deadline for theoretical exam translation submission" },
    ],
  },
  {
    date: "15.07.2026",
    day: 6,
    title: "Theoretical Exam & Reunion Party",
    events: [
      { time: "06:00 – 08:00", students: "Breakfast (New Uzbekistan Hotels)", mentors: "Breakfast (Wyndham Hotel)", scientific: "Breakfast (Hyatt Regency)" },
      { time: "09:00 – 14:00", students: "Theoretical Exam (5 hrs)", mentors: "3rd + 4th Jury Session (Hyatt Regency)", scientific: "3rd + 4th Jury Session (Hyatt Regency)" },
      { time: "14:00 – 16:00", students: "Reunion Party (CAEx)", mentors: "Reunion Party (CAEx)", scientific: "Reunion Party (CAEx)" },
      { time: "16:00 – 18:00", students: "Excursion to Tashkent City (Shopping time)", mentors: "Marking", scientific: "Marking" },
    ],
  },
  {
    date: "16.07.2026",
    day: 7,
    title: "Trip to Samarkand",
    events: [
      { time: "05:00 – 06:00", students: "Breakfast (New Uzbekistan Hotels)", mentors: "Breakfast (Wyndham Hotel)", scientific: "Breakfast (Hyatt Regency)" },
      { time: "06:00 – 18:00", students: "Trip to Samarkand", mentors: "Marking", scientific: "Marking" },
      { time: "13:00 – 14:00", students: "Lunch (Samarkand)", mentors: "Lunch (Hyatt Regency)", scientific: "Lunch (Hyatt Regency)" },
      { time: "18:00 – 19:00", students: "Dinner (Samarkand)", mentors: "Dinner (Hyatt Regency)", scientific: "Dinner (Hyatt Regency)" },
      { time: "19:00 – 21:00", students: "Coming back to Tashkent", mentors: "Marking", scientific: "Marking" },
    ],
  },
  {
    date: "17.07.2026",
    day: 8,
    title: "Arbitration & Results Finalization",
    events: [
      { time: "07:00 – 08:30", students: "Breakfast (New Uzbekistan Hotels)", mentors: "Breakfast (Wyndham Hotel)", scientific: "Breakfast (Hyatt Regency)" },
      { time: "09:00 – 13:00", students: "Sport games in New Uzbekistan Sport Complex", mentors: "Arbitration session 1 — verify marks, resolve grading issues (Hyatt Regency)", scientific: "Arbitration session 1 supervised by SC (Hyatt Regency)" },
      { time: "13:00 – 14:00", students: "Lunch (New Uzbekistan Hotels)", mentors: "Lunch (Wyndham Hotel)", scientific: "Lunch (Hyatt Regency)" },
      { time: "14:00 – 19:00", students: "Sport games in New Uzbekistan Sport Complex", mentors: "Arbitration session 2 — verify marks, resolve grading issues (Hyatt Regency)", scientific: "Arbitration session 2 supervised by SC (Hyatt Regency)" },
      { time: "19:00 – 20:00", students: "Dinner (New Uzbekistan Hotels)", mentors: "Dinner (Wyndham Hotel)", scientific: "Dinner (Hyatt Regency)" },
      { time: "20:00 – 23:00", students: "—", mentors: "5th Jury Session — finalize results, allocate medals (Hyatt Regency)", scientific: "5th Jury Session — finalize results, allocate medals (Hyatt Regency)" },
    ],
  },
  {
    date: "18.07.2026",
    day: 9,
    title: "Closing Ceremony & Farewell",
    events: [
      { time: "07:00 – 08:30", students: "Breakfast (New Uzbekistan Hotels)", mentors: "Breakfast (Wyndham Hotel)", scientific: "Breakfast (Hyatt Regency)" },
      { time: "09:00 – 13:00", students: "Excursion to Center of Islamic Civilization", mentors: "Excursion to Center of Islamic Civilization", scientific: "Excursion to Center of Islamic Civilization" },
      { time: "13:00 – 14:00", students: "Lunch (New Uzbekistan Hotels)", mentors: "Lunch (Wyndham Hotel)", scientific: "Lunch (Hyatt Regency)" },
      { time: "16:00 – 18:00", students: "Closing Ceremony — medals, cultural program, IChO flag handover", mentors: "Closing Ceremony — medals, cultural program, IChO flag handover", scientific: "Closing Ceremony — medals, cultural program, IChO flag handover" },
      { time: "19:00 – 22:00", students: "Farewell Party (Renaissance Hall)", mentors: "Farewell Party (Renaissance Hall)", scientific: "Farewell Party (Renaissance Hall)" },
    ],
  },
  {
    date: "19.07.2026",
    day: 10,
    title: "Departures",
    events: [
      { time: "All day", students: "Departures assisted by OC", mentors: "Departures assisted by OC", scientific: "Departures assisted by OC" },
      { time: "07:00 – 09:00", students: "Breakfast (New Uzbekistan Hotels)", mentors: "Breakfast (Wyndham Hotel)", scientific: "Breakfast (Hyatt Regency)" },
      { time: "12:00 – 14:00", students: "Lunch (New Uzbekistan Hotels)", mentors: "Lunch (Wyndham Hotel)", scientific: "Lunch (Hyatt Regency)" },
      { time: "19:00 – 21:00", students: "Dinner (New Uzbekistan Hotels)", mentors: "Dinner (Wyndham Hotel)", scientific: "Dinner (Hyatt Regency)" },
    ],
  },
];

const dayColors = [
  "from-teal-500 to-teal-600",
  "from-emerald-500 to-emerald-600",
  "from-sky-500 to-sky-600",
  "from-indigo-500 to-indigo-600",
  "from-violet-500 to-violet-600",
  "from-purple-500 to-purple-600",
  "from-pink-500 to-pink-600",
  "from-rose-500 to-rose-600",
  "from-amber-500 to-amber-600",
  "from-orange-500 to-orange-600",
];

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
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12">
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
            Olympiad in Tashkent, Uzbekistan. <strong>Event dates: 10–19 July 2026.</strong>
          </p>
        </div>

        {/* Venue Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-emerald-100 rounded-xl text-emerald-600">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Main Venue</h3>
                <p className="text-sm text-slate-600">{VENUE_INFO.location}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-sky-100 rounded-xl text-sky-600">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Student Residence</h3>
                <p className="text-sm text-slate-600">{VENUE_INFO.studentResidence}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-indigo-100 rounded-xl text-indigo-600">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Mentor Residence</h3>
                <p className="text-sm text-slate-600">{VENUE_INFO.mentorResidence}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-violet-100 rounded-xl text-violet-600">
                <FlaskConical className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Jury Residence</h3>
                <p className="text-sm text-slate-600">{VENUE_INFO.juryResidence}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-amber-100 rounded-xl text-amber-600">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Organizer</h3>
                <p className="text-sm text-slate-600">{VENUE_INFO.organizer}</p>
              </div>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-rose-100 rounded-xl text-rose-600">
                <Map className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">Excursion Options</h3>
                <p className="text-sm text-slate-600">{VENUE_INFO.excursions.slice(0, 3).join(", ")}...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Schedule */}
        <div className="space-y-8">
          {SCHEDULE.map((day, dayIndex) => (
            <div key={dayIndex} className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl overflow-hidden">
              {/* Day Header */}
              <div className={`bg-gradient-to-r ${dayColors[dayIndex]} p-4 sm:p-6`}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl text-white font-bold text-xl">
                    {day.day}
                  </div>
                  <div className="text-white">
                    <div className="text-sm font-medium text-white/80">{day.date}</div>
                    <h2 className="text-xl sm:text-2xl font-bold">Day {day.day} — {day.title}</h2>
                  </div>
                </div>
              </div>

              {/* Schedule Table */}
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px]">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-200">
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700 w-32">Time</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Students</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Mentors & Observers</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">Scientific Committee</th>
                    </tr>
                  </thead>
                  <tbody>
                    {day.events.map((event, eventIndex) => (
                      <tr
                        key={eventIndex}
                        className={`border-b border-slate-100 ${eventIndex % 2 === 0 ? "bg-white" : "bg-slate-50/50"} hover:bg-slate-100/50 transition-colors`}
                      >
                        <td className="px-4 py-3 text-sm font-medium text-slate-900 whitespace-nowrap">{event.time}</td>
                        <td className="px-4 py-3 text-sm text-slate-600">{event.students}</td>
                        <td className="px-4 py-3 text-sm text-slate-600">{event.mentors}</td>
                        <td className="px-4 py-3 text-sm text-slate-600">{event.scientific}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
