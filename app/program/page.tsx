"use client";

import { useState } from "react";
import { ScrollText, MapPin, Building2, Users, FlaskConical, Globe, Map, GraduationCap, Star } from "lucide-react";

type ScheduleItem = {
  time: string;
  activity: string;
  highlight?: boolean;
};

type DaySchedule = {
  date: string;
  day: number;
  title: string;
  events: ScheduleItem[];
};

const VENUE_INFO = {
  location: "National University of Uzbekistan & Central Asian Expo Center",
  studentResidence: "New Uzbekistan Hotels",
  mentorResidence: "Wyndham Hotel & Hyatt Regency Hotel",
  juryResidence: "Wyndham Hotel & Hyatt Regency Hotel",
  organizer: "Science Olympiad Center",
  website: "https://www.icho2026.uz/",
  excursions: ["Samarkand", "Botanical Garden", "Islamic Civilisation Center", "Tashkent City"],
};

const STUDENTS_SCHEDULE: DaySchedule[] = [
  {
    date: "10.07.2026",
    day: 1,
    title: "Arrival & Registration Day",
    events: [
      { time: "Whole day", activity: "Arrivals and registration (Registration point – Wyndham hotel)" },
      { time: "Whole day", activity: "Room settlement → New Uzbekistan hotels" },
      { time: "07:00 – 09:00", activity: "Breakfast (New Uzbekistan hotels)" },
      { time: "12:00 – 14:00", activity: "Lunch (New Uzbekistan hotels)" },
      { time: "19:00 – 21:00", activity: "Dinner (New Uzbekistan hotels)" },
    ],
  },
  {
    date: "11.07.2026",
    day: 2,
    title: "Opening Ceremony & Lab Instructions",
    events: [
      { time: "06:30 – 08:00", activity: "Breakfast (New Uzbekistan hotels)" },
      { time: "08:30 – 09:15", activity: "Transfer: New Uzbekistan hotels → Palace of International Forums" },
      { time: "10:30 – 12:00", activity: "OPENING CEREMONY (Palace of International Forums)", highlight: true },
      { time: "12:30 – 13:15", activity: "Transfer: Palace of International Forums → New Uzbekistan hotels" },
      { time: "13:15 – 14:30", activity: "Delivery of all electronic devices" },
      { time: "13:30 – 15:00", activity: "Lunch (New Uzbekistan hotels)" },
      { time: "15:15 – 19:00", activity: "Free time / Interactive games (New Uzbekistan hotels)" },
      { time: "19:00 – 20:30", activity: "Dinner (New Uzbekistan hotels)" },
      { time: "20:30 – 23:00", activity: "Free time" },
    ],
  },
  {
    date: "12.07.2026",
    day: 3,
    title: "Excursion — Botanical Garden & Zoo",
    events: [
      { time: "06:30 – 08:30", activity: "Breakfast (New Uzbekistan hotels)" },
      { time: "09:00 – 09:40", activity: "Transfer: New Uzbekistan hotels → Botanical Garden and Zoo" },
      { time: "09:40 – 12:00", activity: "Excursion: Botanical Garden and Zoo", highlight: true },
      { time: "12:20 – 13:00", activity: "Transfer: Botanical Garden and Zoo → New Uzbekistan hotels" },
      { time: "13:00 – 14:00", activity: "Lunch (New Uzbekistan hotels)" },
      { time: "14:00 – 18:00", activity: "Lab instructions" },
      { time: "18:00 – 19:00", activity: "Free time" },
      { time: "19:00 – 20:30", activity: "Dinner (New Uzbekistan hotels)" },
      { time: "20:30 – 23:00", activity: "Free time" },
    ],
  },
  {
    date: "13.07.2026",
    day: 4,
    title: "Practical Examination",
    events: [
      { time: "06:00 – 07:00", activity: "Breakfast (New Uzbekistan hotels)" },
      { time: "07:30 – 08:30", activity: "Transfer: New Uzbekistan hotels → NUUz Faculty of Chemistry" },
      { time: "08:30 – 09:00", activity: "Entering the labs" },
      { time: "09:00 – 14:00", activity: "PRACTICAL EXAMINATION — 5 hours (NUUz Faculty of Chemistry)", highlight: true },
      { time: "14:00 – 15:30", activity: "Lunch (NUUz campus)" },
      { time: "16:00 – 17:00", activity: "Transfer: NUUz Faculty of Chemistry → New Uzbekistan hotels" },
      { time: "17:00 – 19:00", activity: "Free time" },
      { time: "19:00 – 20:30", activity: "Dinner (New Uzbekistan hotels)" },
      { time: "20:30 – 23:00", activity: "Free time" },
    ],
  },
  {
    date: "14.07.2026",
    day: 5,
    title: "Excursion — Islamic Civilisation & Museums",
    events: [
      { time: "06:30 – 08:30", activity: "Breakfast (New Uzbekistan hotels)" },
      { time: "09:00 – 09:40", activity: "Transfer: New Uzbekistan hotels → Centre of Islamic Civilisation, Tashkent Polytechnic Museum, Museum of Timurids History" },
      { time: "09:40 – 12:00", activity: "Excursion: Centre of Islamic Civilisation, Tashkent Polytechnic Museum and Museum of Timurids History", highlight: true },
      { time: "12:30 – 13:10", activity: "Transfer back to New Uzbekistan hotels" },
      { time: "13:10 – 14:30", activity: "Lunch (New Uzbekistan hotels)" },
      { time: "14:30 – 15:30", activity: "Free time" },
      { time: "16:00 – 16:40", activity: "Transfer: New Uzbekistan hotels → Centre of Islamic Civilisation, Tashkent Polytechnic Museum, Museum of Timurids History" },
      { time: "16:40 – 19:00", activity: "Excursion: Centre of Islamic Civilisation, Tashkent Polytechnic Museum and Museum of Timurids History", highlight: true },
      { time: "19:20 – 20:00", activity: "Transfer back to New Uzbekistan hotels" },
      { time: "20:00 – 21:30", activity: "Dinner (New Uzbekistan hotels)" },
      { time: "21:30 – 23:00", activity: "Free time" },
    ],
  },
  {
    date: "15.07.2026",
    day: 6,
    title: "Theoretical Examination & Reunion Party",
    events: [
      { time: "06:00 – 07:30", activity: "Breakfast (New Uzbekistan hotels)" },
      { time: "08:00 – 08:15", activity: "Transfer: New Uzbekistan hotels → CAEx" },
      { time: "08:15 – 09:00", activity: "Entering the Hall" },
      { time: "09:00 – 14:00", activity: "THEORETICAL EXAMINATION — 5 hours (CAEx)", highlight: true },
      { time: "14:00 – 18:00", activity: "REUNION PARTY (CAEx)", highlight: true },
      { time: "18:30 – 18:45", activity: "Transfer: CAEx → New Uzbekistan hotels" },
      { time: "19:00 – 20:30", activity: "Dinner (New Uzbekistan hotels)" },
      { time: "20:30 – 23:00", activity: "Free time" },
    ],
  },
  {
    date: "16.07.2026",
    day: 7,
    title: "Excursion — Tashkent City Mall & Anhor Park",
    events: [
      { time: "06:30 – 09:00", activity: "Breakfast (New Uzbekistan hotels)" },
      { time: "09:30 – 10:10", activity: "Transfer: New Uzbekistan hotels → Tashkent City Mall" },
      { time: "10:10 – 12:00", activity: "Excursion: Tashkent City Mall / Shopping", highlight: true },
      { time: "12:30 – 13:10", activity: "Transfer: Tashkent City Mall → New Uzbekistan hotels" },
      { time: "13:10 – 14:30", activity: "Lunch (New Uzbekistan hotels)" },
      { time: "14:30 – 18:00", activity: "Information on PTU - New State University established by the initiative of the President of Uzbekistan (Tashkent Hall - New Uzbekistan hotels)" },
      { time: "18:00 – 19:00", activity: "Dinner (New Uzbekistan hotels)" },
      { time: "19:20 – 20:00", activity: "Transfer: New Uzbekistan hotels → Anhor Lokomativ Park" },
      { time: "20:00 – 22:00", activity: "Excursion: Anhor Lokomativ Park", highlight: true },
      { time: "22:30 – 23:10", activity: "Transfer: Anhor Lokomativ Park → New Uzbekistan hotels" },
    ],
  },
  {
    date: "17.07.2026",
    day: 8,
    title: "Excursion — Chinorkent & Magic City Aquarium",
    events: [
      { time: "06:30 – 08:30", activity: "Breakfast (New Uzbekistan hotels)" },
      { time: "09:00 – 10:00", activity: "Transfer: New Uzbekistan hotels → Chinorkent, Magic City Aquarium" },
      { time: "10:00 – 12:00", activity: "Excursion: Chinorkent, Magic City Aquarium", highlight: true },
      { time: "12:30 – 13:30", activity: "Transfer: Chinorkent, Magic City Aquarium → New Uzbekistan hotels" },
      { time: "13:30 – 15:00", activity: "Lunch (New Uzbekistan hotels)" },
      { time: "15:30 – 16:30", activity: "Transfer: New Uzbekistan hotels → Chinorkent, Magic City Aquarium" },
      { time: "16:30 – 18:30", activity: "Excursion: Chinorkent, Magic City Aquarium", highlight: true },
      { time: "19:00 – 20:00", activity: "Transfer: Chinorkent, Magic City Aquarium → New Uzbekistan hotels" },
      { time: "20:00 – 21:30", activity: "Dinner (New Uzbekistan hotels)" },
      { time: "21:30 – 23:00", activity: "Free time" },
    ],
  },
  {
    date: "18.07.2026",
    day: 9,
    title: "Closing & Awarding Ceremony",
    events: [
      { time: "06:30 – 08:30", activity: "Breakfast (New Uzbekistan hotels)" },
      { time: "08:30 – 13:00", activity: "Free time / Final games of sport competitions" },
      { time: "13:00 – 14:30", activity: "Lunch (New Uzbekistan hotels)" },
      { time: "14:30 – 17:30", activity: "Preparation for the Closing Ceremony" },
      { time: "18:00 – 18:10", activity: "Transfer: New Uzbekistan hotels → Closing Ceremony venue" },
      { time: "18:10 – 18:45", activity: "Coffee-break" },
      { time: "18:45 – 19:00", activity: "Taking seats" },
      { time: "19:00 – 21:00", activity: "CLOSING AND AWARDING CEREMONY (Medals, cultural programme, handover of the IChO flag)", highlight: true },
      { time: "21:00 – 23:00", activity: "FAREWELL PARTY — Gala Dinner (New Uzbekistan Park)", highlight: true },
      { time: "23:30 – 23:40", activity: "Transfer: New Uzbekistan Park → New Uzbekistan hotels" },
    ],
  },
  {
    date: "19.07.2026",
    day: 10,
    title: "Departures",
    events: [
      { time: "Whole day", activity: "Departures" },
      { time: "07:00 – 09:00", activity: "Breakfast (New Uzbekistan hotels)" },
      { time: "12:00 – 14:00", activity: "Lunch (New Uzbekistan hotels)" },
      { time: "19:00 – 21:00", activity: "Dinner (New Uzbekistan hotels)" },
      { time: "Depending on departure time", activity: "Transfer: New Uzbekistan hotels → Tashkent International Airport" },
    ],
  },
];

const MENTORS_SCHEDULE: DaySchedule[] = [
  {
    date: "10.07.2026",
    day: 1,
    title: "Arrival & Registration Day",
    events: [
      { time: "Whole day", activity: "Arrivals and registration (Wyndham)" },
      { time: "Whole day", activity: "Transfer: Tashkent International Airport → Hotels" },
      { time: "07:00 – 09:00", activity: "Breakfast (Hyatt Regency and Wyndham)" },
      { time: "12:00 – 14:00", activity: "Lunch (Wyndham Hotel)" },
      { time: "19:00 – 20:30", activity: "Dinner (Wyndham Hotel)" },
    ],
  },
  {
    date: "11.07.2026",
    day: 2,
    title: "Opening Ceremony & Practical Exam Distribution",
    events: [
      { time: "07:00 – 08:30", activity: "Breakfast (Hyatt Regency and Wyndham)" },
      { time: "09:00 – 09:15", activity: "Transfer: Hyatt Regency and Wyndham → Palace of International Forums" },
      { time: "10:30 – 12:00", activity: "OPENING CEREMONY (Palace of International Forums)", highlight: true },
      { time: "12:30 – 12:45", activity: "Transfer: Palace of International Forums → Wyndham and Hyatt Regency" },
      { time: "12:45 – 14:00", activity: "Lunch (Wyndham Hotel)" },
      { time: "14:15 – 15:00", activity: "Transfer: Wyndham → NUUz Faculty of Chemistry (Practical exam venue)" },
      { time: "15:00 – 16:30", activity: "Laboratory inspection (NUUz Faculty of Chemistry)" },
      { time: "16:30 – 16:45", activity: "Distribution of the Proposed Practical Examination Sets (tasks, answer sheets, solutions and grading scheme, Oly-Exam passwords and login)" },
      { time: "16:45 – 17:30", activity: "Transfer: NUUz Faculty of Chemistry → Wyndham" },
      { time: "17:30 – 19:30", activity: "Consultation with the Problem Authors (Wyndham Hotel)" },
      { time: "19:00 – 20:30", activity: "Dinner (Wyndham Hotel)" },
      { time: "20:30 – 00:00", activity: "1ST JURY MEETING (Wyndham Hotel)", highlight: true },
    ],
  },
  {
    date: "12.07.2026",
    day: 3,
    title: "Practical Exam Translation",
    events: [
      { time: "07:00 – 08:30", activity: "Breakfast (Hyatt Regency and Wyndham)" },
      { time: "09:00 – 13:00", activity: "Translation of the Practical Examination (Wyndham Hotel)", highlight: true },
      { time: "13:00 – 14:30", activity: "Lunch (Wyndham Hotel)" },
      { time: "14:30 – 19:00", activity: "Continuation of Translation / Submission of Translations (Wyndham Hotel)" },
      { time: "19:00 – 20:30", activity: "Dinner (Wyndham Hotel)" },
      { time: "20:00", activity: "DEADLINE: Submission of the Practical Examination translation", highlight: true },
      { time: "21:00 – 21:20", activity: "Transfer: Wyndham → Tashkent City" },
      { time: "21:30 – 23:00", activity: "Excursion: Tashkent City" },
      { time: "23:15 – 23:35", activity: "Transfer: Tashkent City → Wyndham and Hyatt Regency" },
    ],
  },
  {
    date: "13.07.2026",
    day: 4,
    title: "Theoretical Exam Distribution",
    events: [
      { time: "06:30 – 08:00", activity: "Breakfast (Hyatt Regency and Wyndham)" },
      { time: "08:00 – 10:00", activity: "Distribution of the Proposed Theoretical Examination Sets (tasks, answer sheets, solutions and grading scheme) (Wyndham Hotel)" },
      { time: "10:00 – 12:30", activity: "Free time" },
      { time: "12:30 – 14:30", activity: "Lunch (Wyndham Hotel)" },
      { time: "16:00 – 18:00", activity: "Mentor and Author Consultation (Wyndham Hotel)" },
      { time: "19:00 – 20:30", activity: "Dinner (Wyndham Hotel)" },
      { time: "20:40 – 00:00", activity: "2ND JURY MEETING — split sessions (Wyndham Hotel)", highlight: true },
    ],
  },
  {
    date: "14.07.2026",
    day: 5,
    title: "Theoretical Exam Translation",
    events: [
      { time: "07:00 – 08:30", activity: "Breakfast (Hyatt Regency and Wyndham)" },
      { time: "09:00 – 12:30", activity: "Translation of the Theoretical Examination (Wyndham Hotel)", highlight: true },
      { time: "12:30 – 14:30", activity: "Lunch (Wyndham Hotel)" },
      { time: "14:30 – 19:00", activity: "Continuation of Translation / Submission of Translations (Wyndham Hotel)" },
      { time: "19:00 – 20:30", activity: "Dinner (Wyndham Hotel)" },
      { time: "20:00", activity: "DEADLINE: Submission of the Theoretical Examination Translation", highlight: true },
      { time: "20:45 – 21:00", activity: "Transfer: Wyndham → Anhor Lokomotiv Park" },
      { time: "21:00 – 23:00", activity: "Excursion: Anhor Lokomotiv Park" },
      { time: "23:15 – 23:35", activity: "Transfer: Anhor Lokomotiv Park → Wyndham and Hyatt Regency" },
    ],
  },
  {
    date: "15.07.2026",
    day: 6,
    title: "Jury Meetings & Reunion Party",
    events: [
      { time: "07:00 – 09:00", activity: "Breakfast (Hyatt Regency and Wyndham)" },
      { time: "09:30 – 13:00", activity: "3RD AND 4TH JURY MEETINGS (Wyndham Hotel)", highlight: true },
      { time: "13:30 – 14:15", activity: "Transfer: Hyatt Regency and Wyndham → CAEx" },
      { time: "14:30 – 18:00", activity: "REUNION PARTY (CAEx)", highlight: true },
      { time: "18:15 – 19:00", activity: "Transfer: CAEx → Hyatt Regency and Wyndham" },
      { time: "19:00 – 20:30", activity: "Dinner (Wyndham Hotel)" },
      { time: "21:00 – 21:30", activity: "Distribution of Copies of Practical Exam Papers and Final Grading Scheme (Wyndham Hotel)" },
      { time: "21:30 – 23:00", activity: "Free time" },
    ],
  },
  {
    date: "16.07.2026",
    day: 7,
    title: "Trip to Samarkand",
    events: [
      { time: "05:30 – 06:30", activity: "Distribution of Copies of Theoretical Exam Papers and Final Grading Scheme" },
      { time: "06:45 – 07:00", activity: "Transfer: Hyatt Regency and Wyndham → Railway station" },
      { time: "07:30 – 17:00", activity: "TRIP TO SAMARKAND", highlight: true },
      { time: "12:00 – 13:00", activity: "Lunch (Samarkand)" },
      { time: "17:40 – 20:10", activity: "Return trip to Tashkent" },
      { time: "20:10 – 20:30", activity: "Transfer: Railway station → Wyndham" },
      { time: "20:00 – 22:00", activity: "Dinner (Wyndham Hotel)" },
      { time: "22:00 – 23:00", activity: "Free time" },
    ],
  },
  {
    date: "17.07.2026",
    day: 8,
    title: "Arbitration",
    events: [
      { time: "07:00 – 08:30", activity: "Breakfast (Hyatt Regency and Wyndham)" },
      { time: "09:00 – 13:00", activity: "ARBITRATION IN GROUPS (Wyndham Hotel)", highlight: true },
      { time: "13:00 – 14:30", activity: "Lunch (Wyndham Hotel)" },
      { time: "14:30 – 19:00", activity: "ARBITRATION IN GROUPS (Wyndham Hotel)", highlight: true },
      { time: "19:00 – 20:30", activity: "Dinner (Wyndham Hotel)" },
      { time: "20:30 – 23:00", activity: "5TH JURY MEETING (Wyndham Hotel)", highlight: true },
    ],
  },
  {
    date: "18.07.2026",
    day: 9,
    title: "Closing & Awarding Ceremony",
    events: [
      { time: "07:00 – 08:30", activity: "Breakfast (Hyatt Regency and Wyndham)" },
      { time: "09:15 – 09:35", activity: "Transfer: Hyatt Regency and Wyndham → Centre of Islamic Civilisation" },
      { time: "10:00 – 12:00", activity: "Excursion: Centre of Islamic Civilisation" },
      { time: "12:30 – 12:50", activity: "Transfer: Centre of Islamic Civilisation → Hyatt Regency and Wyndham" },
      { time: "13:00 – 14:30", activity: "Lunch (Wyndham Hotel)" },
      { time: "14:30 – 16:45", activity: "Preparation for the Closing Ceremony" },
      { time: "17:00 – 17:45", activity: "Transfer: Hyatt Regency and Wyndham → New Uzbekistan Park" },
      { time: "18:00 – 18:45", activity: "Coffee-break" },
      { time: "18:45 – 19:00", activity: "Taking seats" },
      { time: "19:00 – 21:00", activity: "CLOSING AND AWARDING CEREMONY", highlight: true },
      { time: "21:00 – 23:00", activity: "FAREWELL PARTY — Gala Dinner (New Uzbekistan Park)", highlight: true },
      { time: "23:30 – 00:00", activity: "Transfer: New Uzbekistan Park → Hyatt Regency and Wyndham" },
    ],
  },
  {
    date: "19.07.2026",
    day: 10,
    title: "Departures",
    events: [
      { time: "Whole day", activity: "Departures" },
      { time: "07:00 – 09:00", activity: "Breakfast (Hyatt Regency and Wyndham)" },
      { time: "12:00 – 14:00", activity: "Lunch (Wyndham Hotel)" },
      { time: "19:00 – 21:00", activity: "Dinner (Wyndham Hotel)" },
      { time: "Depending on departure time", activity: "Transfer: Hyatt Regency and Wyndham → Tashkent International Airport" },
    ],
  },
];

const GUESTS_SCHEDULE: DaySchedule[] = [
  {
    date: "10.07.2026",
    day: 1,
    title: "Arrival & Registration Day",
    events: [
      { time: "Whole day", activity: "Arrivals and registration (Wyndham)" },
      { time: "Whole day", activity: "Room settlement → Hyatt Regency and Wyndham hotel" },
      { time: "07:00 – 09:00", activity: "Breakfast (Hyatt Regency and Wyndham)" },
      { time: "12:00 – 14:00", activity: "Lunch (Wyndham Hotel)" },
      { time: "19:00 – 20:30", activity: "Dinner (Wyndham Hotel)" },
    ],
  },
  {
    date: "11.07.2026",
    day: 2,
    title: "Opening Ceremony & Magic City Excursion",
    events: [
      { time: "07:00 – 08:30", activity: "Breakfast (Hyatt Regency and Wyndham)" },
      { time: "09:00 – 09:15", activity: "Transfer: Hyatt Regency and Wyndham → Palace of International Forums" },
      { time: "10:30 – 12:00", activity: "OPENING CEREMONY (Palace of International Forums)", highlight: true },
      { time: "12:30 – 12:45", activity: "Transfer: Palace of International Forums → Wyndham and Hyatt Regency" },
      { time: "12:45 – 14:00", activity: "Lunch (Wyndham Hotel)" },
      { time: "14:00 – 19:00", activity: "Free time" },
      { time: "19:00 – 20:30", activity: "Dinner (Wyndham Hotel)" },
      { time: "20:40 – 21:00", activity: "Transfer: Wyndham → Magic City" },
      { time: "21:00 – 22:30", activity: "Excursion: Magic City", highlight: true },
      { time: "22:40 – 23:00", activity: "Transfer: Magic City → Wyndham and Hyatt Regency" },
    ],
  },
  {
    date: "12.07.2026",
    day: 3,
    title: "Museum Excursions & Tashkent City",
    events: [
      { time: "07:00 – 09:00", activity: "Breakfast (Hyatt Regency and Wyndham)" },
      { time: "09:15 – 09:30", activity: "Transfer: Hyatt Regency and Wyndham → Museum of Timurids History" },
      { time: "09:30 – 11:00", activity: "Excursion 1: Museum of Timurids History", highlight: true },
      { time: "11:00 – 11:20", activity: "Walking to the Tashkent Polytechnic Museum (~800 metres)" },
      { time: "11:20 – 12:30", activity: "Excursion 2: Tashkent Polytechnic Museum", highlight: true },
      { time: "12:45 – 13:00", activity: "Transfer: Tashkent Polytechnic Museum → Wyndham" },
      { time: "13:00 – 14:30", activity: "Lunch (Wyndham Hotel)" },
      { time: "14:30 – 19:00", activity: "Free time" },
      { time: "19:00 – 20:30", activity: "Dinner (Wyndham Hotel)" },
      { time: "20:40 – 21:00", activity: "Transfer: Wyndham → Tashkent City" },
      { time: "21:00 – 22:30", activity: "Excursion: Tashkent City", highlight: true },
      { time: "22:40 – 23:00", activity: "Transfer: Tashkent City → Wyndham and Hyatt Regency" },
    ],
  },
  {
    date: "13.07.2026",
    day: 4,
    title: "Chinorkent Excursion & City Walk",
    events: [
      { time: "06:30 – 08:00", activity: "Breakfast (Hyatt Regency and Wyndham)" },
      { time: "08:10 – 09:40", activity: "Transfer: Wyndham and Hyatt Regency → Chinorkent" },
      { time: "09:40 – 12:00", activity: "Excursion: Chinorkent", highlight: true },
      { time: "12:10 – 13:30", activity: "Transfer: Chinorkent → Wyndham" },
      { time: "13:30 – 14:30", activity: "Lunch (Wyndham)" },
      { time: "14:30 – 19:00", activity: "Free time" },
      { time: "19:00 – 20:00", activity: "Dinner (Wyndham Hotel)" },
      { time: "20:00 – 20:10", activity: "Gathering at the lobby (Wyndham Hotel)" },
      { time: "20:10 – 20:30", activity: "Walking to Amir Temur Square and Broadway Str." },
      { time: "20:30 – 22:30", activity: "Excursion: Amir Temur Square and Broadway Str.", highlight: true },
      { time: "22:30 – 23:00", activity: "Walking to hotels" },
    ],
  },
  {
    date: "14.07.2026",
    day: 5,
    title: "Television Tower & Anhor Park",
    events: [
      { time: "07:00 – 09:00", activity: "Breakfast (Hyatt Regency and Wyndham)" },
      { time: "09:10 – 09:40", activity: "Transfer: Wyndham and Hyatt Regency → Tashkent Television Tower" },
      { time: "09:40 – 12:00", activity: "Excursion: Tashkent Television Tower", highlight: true },
      { time: "12:10 – 12:40", activity: "Transfer: Tashkent Television Tower → Wyndham" },
      { time: "12:40 – 14:30", activity: "Lunch (Wyndham Hotel)" },
      { time: "14:30 – 19:00", activity: "Free time" },
      { time: "19:00 – 20:30", activity: "Dinner (Wyndham Hotel)" },
      { time: "20:45 – 21:00", activity: "Transfer: Wyndham → Anhor Lokomotiv Park" },
      { time: "21:00 – 23:00", activity: "Excursion: Anhor Lokomotiv Park", highlight: true },
      { time: "23:15 – 23:35", activity: "Transfer: Anhor Lokomotiv Park → Wyndham and Hyatt Regency" },
    ],
  },
  {
    date: "15.07.2026",
    day: 6,
    title: "Chorsu Bazaar & Reunion Party",
    events: [
      { time: "07:00 – 09:00", activity: "Breakfast (Hyatt Regency and Wyndham)" },
      { time: "09:10 – 09:30", activity: "Transfer: Wyndham and Hyatt Regency → Chorsu Bazaar" },
      { time: "09:30 – 12:00", activity: "Excursion: Chorsu Bazaar", highlight: true },
      { time: "12:10 – 12:30", activity: "Transfer: Chorsu Bazaar → Wyndham and Hyatt Regency" },
      { time: "12:30 – 13:15", activity: "Free time" },
      { time: "13:30 – 14:15", activity: "Transfer: Wyndham and Hyatt Regency → CAEx" },
      { time: "14:30 – 18:00", activity: "REUNION PARTY (CAEx)", highlight: true },
      { time: "18:15 – 19:00", activity: "Transfer: CAEx → Hyatt Regency and Wyndham" },
      { time: "19:00 – 20:30", activity: "Dinner (Wyndham Hotel)" },
      { time: "20:30 – 23:00", activity: "Free time" },
    ],
  },
  {
    date: "16.07.2026",
    day: 7,
    title: "Trip to Samarkand",
    events: [
      { time: "05:15 – 05:30", activity: "Boarding the buses (pick up meal box)" },
      { time: "05:30", activity: "Bus departure time" },
      { time: "05:30 – 05:50", activity: "Transfer: Hyatt Regency and Wyndham → Railway station" },
      { time: "05:50 – 06:20", activity: "Boarding the train" },
      { time: "06:30 – 19:30", activity: "TRIP TO SAMARKAND", highlight: true },
      { time: "12:00 – 13:00", activity: "Lunch (Samarkand)" },
      { time: "18:00 – 19:00", activity: "Dinner (Samarkand)" },
      { time: "19:00 – 19:30", activity: "Boarding the train" },
      { time: "19:30 – 23:00", activity: "Return trip to Tashkent" },
      { time: "23:00 – 23:30", activity: "Transfer: Railway station → Hyatt Regency and Wyndham" },
    ],
  },
  {
    date: "17.07.2026",
    day: 8,
    title: "Free Time & Suzani Walk",
    events: [
      { time: "07:00 – 09:00", activity: "Breakfast (Hyatt Regency and Wyndham)" },
      { time: "09:00 – 13:00", activity: "Free time" },
      { time: "13:00 – 14:30", activity: "Lunch (Wyndham Hotel)" },
      { time: "14:30 – 17:00", activity: "Free time" },
      { time: "17:15 – 17:30", activity: "Transfer: Hyatt Regency and Wyndham → Suzani" },
      { time: "17:30 – 19:00", activity: "Excursion: Walking around Suzani", highlight: true },
      { time: "19:15 – 19:30", activity: "Transfer: Suzani → Hyatt Regency and Wyndham" },
      { time: "19:00 – 20:30", activity: "Dinner (Wyndham Hotel)" },
      { time: "20:30 – 23:00", activity: "Free time" },
    ],
  },
  {
    date: "18.07.2026",
    day: 9,
    title: "Closing & Awarding Ceremony",
    events: [
      { time: "07:00 – 09:00", activity: "Breakfast (Hyatt Regency and Wyndham)" },
      { time: "09:15 – 09:35", activity: "Transfer: Hyatt Regency and Wyndham → Centre of Islamic Civilisation" },
      { time: "10:00 – 12:00", activity: "Excursion: Centre of Islamic Civilisation", highlight: true },
      { time: "12:30 – 12:50", activity: "Transfer: Centre of Islamic Civilisation → Hyatt Regency and Wyndham" },
      { time: "13:00 – 14:30", activity: "Lunch (Wyndham Hotel)" },
      { time: "14:30 – 16:45", activity: "Preparation for the Closing Ceremony" },
      { time: "17:00 – 17:45", activity: "Transfer: Hyatt Regency and Wyndham → New Uzbekistan Park" },
      { time: "18:00 – 18:45", activity: "Coffee-break" },
      { time: "18:45 – 19:00", activity: "Taking seats" },
      { time: "19:00 – 21:00", activity: "CLOSING AND AWARDING CEREMONY", highlight: true },
      { time: "21:00 – 23:00", activity: "FAREWELL PARTY — Gala Dinner (New Uzbekistan Park)", highlight: true },
      { time: "23:30 – 24:00", activity: "Transfer: New Uzbekistan Park → Hyatt Regency and Wyndham" },
    ],
  },
  {
    date: "19.07.2026",
    day: 10,
    title: "Departures",
    events: [
      { time: "Whole day", activity: "Departure" },
      { time: "07:00 – 09:00", activity: "Breakfast (Hyatt Regency and Wyndham)" },
      { time: "12:00 – 14:00", activity: "Lunch (Wyndham Hotel)" },
      { time: "19:00 – 21:00", activity: "Dinner (Wyndham Hotel)" },
      { time: "Depending on departure time", activity: "Transfer: Hyatt Regency and Wyndham → Tashkent International Airport" },
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

type TabKey = "students" | "mentors" | "guests";

const TABS: { key: TabKey; label: string; icon: React.ReactNode; schedule: DaySchedule[] }[] = [
  {
    key: "students",
    label: "Students",
    icon: <GraduationCap className="w-4 h-4" />,
    schedule: STUDENTS_SCHEDULE,
  },
  {
    key: "mentors",
    label: "Mentors & Observers",
    icon: <Users className="w-4 h-4" />,
    schedule: MENTORS_SCHEDULE,
  },
  {
    key: "guests",
    label: "Guests",
    icon: <Star className="w-4 h-4" />,
    schedule: GUESTS_SCHEDULE,
  },
];

export default function ProgramPage() {
  const [activeTab, setActiveTab] = useState<TabKey>("students");

  const currentTab = TABS.find((t) => t.key === activeTab)!;

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
            Olympiad in Tashkent, Uzbekistan.{" "}
            <strong>Event dates: 10–19 July 2026.</strong>
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
                <h3 className="font-semibold text-slate-900">Guest Residence</h3>
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
                <p className="text-sm text-slate-600">
                  {VENUE_INFO.excursions.slice(0, 3).join(", ")}...
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 bg-white/60 backdrop-blur-sm rounded-2xl p-2 border border-white/20 shadow-md w-fit mx-auto">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.key
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                  : "text-slate-600 hover:bg-slate-100"
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Note */}
        <p className="text-xs text-slate-500 text-center -mt-8">
          * All buses depart at the <strong>start</strong> of the indicated transfer time. For example, if transfer is 09:30–10:00, buses depart at 09:30.
        </p>

        {/* Schedule */}
        <div className="space-y-8">
          {currentTab.schedule.map((day, dayIndex) => (
            <div
              key={dayIndex}
              className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl overflow-hidden"
            >
              {/* Day Header */}
              <div className={`bg-gradient-to-r ${dayColors[dayIndex]} p-4 sm:p-6`}>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl text-white font-bold text-xl shrink-0">
                    {day.day}
                  </div>
                  <div className="text-white">
                    <div className="text-sm font-medium text-white/80">{day.date}</div>
                    <h2 className="text-xl sm:text-2xl font-bold">
                      Day {day.day} — {day.title}
                    </h2>
                  </div>
                </div>
              </div>

              {/* Events list */}
              <div className="divide-y divide-slate-100">
                {day.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className={`flex gap-4 px-5 py-3 transition-colors ${
                      event.highlight
                        ? "bg-emerald-50/70 hover:bg-emerald-50"
                        : eventIndex % 2 === 0
                        ? "bg-white hover:bg-slate-50/80"
                        : "bg-slate-50/40 hover:bg-slate-50/80"
                    }`}
                  >
                    <span
                      className={`shrink-0 text-sm font-semibold w-40 pt-0.5 ${
                        event.highlight ? "text-emerald-700" : "text-slate-500"
                      }`}
                    >
                      {event.time}
                    </span>
                    <span
                      className={`text-sm leading-relaxed ${
                        event.highlight
                          ? "font-semibold text-emerald-800"
                          : "text-slate-700"
                      }`}
                    >
                      {event.activity}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
