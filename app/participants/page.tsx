"use client";

import Image from "next/image";

const countries = [
  { name: "Afghanistan", code: "af" },
  { name: "Argentina", code: "ar" },
  { name: "Armenia", code: "am" },
  { name: "Australia", code: "au" },
  { name: "Austria", code: "at" },
  { name: "Azerbaijan", code: "az" },
  { name: "Bangladesh", code: "bd" },
  { name: "Belgium", code: "be" },
  { name: "Brazil", code: "br" },
  { name: "Bulgaria", code: "bg" },
  { name: "Canada", code: "ca" },
  { name: "China", code: "cn" },
  { name: "Chinese Taipei", code: "tw" },
  { name: "Costa Rica", code: "cr" },
  { name: "Croatia", code: "hr" },
  { name: "Cuba", code: "cu" },
  { name: "Cyprus", code: "cy" },
  { name: "Czech Republic", code: "cz" },
  { name: "Denmark", code: "dk" },
  { name: "Ecuador", code: "ec" },
  { name: "El Salvador", code: "sv" },
  { name: "Estonia", code: "ee" },
  { name: "Egypt", code: "eg" },
  { name: "Finland", code: "fi" },
  { name: "France", code: "fr" },
  { name: "Georgia", code: "ge" },
  { name: "Germany", code: "de" },
  { name: "Greece", code: "gr" },
  { name: "Hungary", code: "hu" },
  { name: "Iceland", code: "is" },
  { name: "India", code: "in" },
  { name: "Indonesia", code: "id" },
  { name: "Iran", code: "ir" },
  { name: "Iraq", code: "iq" },
  { name: "Ireland", code: "ie" },
  { name: "Israel", code: "il" },
  { name: "Italy", code: "it" },
  { name: "Japan", code: "jp" },
  { name: "Jordan", code: "jo" },
  { name: "Kazakhstan", code: "kz" },
  { name: "Korea (Republic of Korea)", code: "kr" },
  { name: "Kuwait", code: "kw" },
  { name: "Kyrgyzstan", code: "kg" },
  { name: "Latvia", code: "lv" },
  { name: "Liechtenstein", code: "li" },
  { name: "Luxembourg", code: "lu" },
  { name: "Lithuania", code: "lt" },
  { name: "Malaysia", code: "my" },
  { name: "Mexico", code: "mx" },
  { name: "Moldova", code: "md" },
  { name: "Mongolia", code: "mn" },
  { name: "Montenegro", code: "me" },
  { name: "Morocco", code: "ma" },
  { name: "Nepal", code: "np" },
  { name: "Netherlands", code: "nl" },
  { name: "New Zealand", code: "nz" },
  { name: "Nigeria", code: "ng" },
  { name: "North Macedonia", code: "mk" },
  { name: "Norway", code: "no" },
  { name: "Oman", code: "om" },
  { name: "Pakistan", code: "pk" },
  { name: "Paraguay", code: "py" },
  { name: "Peru", code: "pe" },
  { name: "Philippines", code: "ph" },
  { name: "Poland", code: "pl" },
  { name: "Portugal", code: "pt" },
  { name: "Qatar", code: "qa" },
  { name: "Romania", code: "ro" },
  { name: "Saudi Arabia", code: "sa" },
  { name: "Serbia", code: "rs" },
  { name: "Singapore", code: "sg" },
  { name: "Slovakia", code: "sk" },
  { name: "Slovenia", code: "si" },
  { name: "Sri Lanka", code: "lk" },
  { name: "South Africa", code: "za" },
  { name: "Spain", code: "es" },
  { name: "Sweden", code: "se" },
  { name: "Switzerland", code: "ch" },
  { name: "Syria", code: "sy" },
  { name: "Tajikistan", code: "tj" },
  { name: "Thailand", code: "th" },
  { name: "Trinidad and Tobago", code: "tt" },
  { name: "Türkiye", code: "tr" },
  { name: "Turkmenistan", code: "tm" },
  { name: "Ukraine", code: "ua" },
  { name: "United Arab Emirates", code: "ae" },
  { name: "United Kingdom", code: "gb" },
  { name: "United States of America", code: "us" },
  { name: "Uruguay", code: "uy" },
  { name: "Uzbekistan", code: "uz" },
  { name: "Venezuela", code: "ve" },
  { name: "Vietnam", code: "vn" },
];

const observers = [
  { name: "Ghana", code: "gh" },
  { name: "Guinea", code: "gn" },
  { name: "Honduras", code: "hn" },
];

export default function ParticipantsPage() {
  return (
    <section className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-tr from-slate-50 to-white">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
            Participating Countries
          </h1>
          <p className="text-slate-600 text-lg">
           Over 90 countries represented in the International Chemistry Olympiad 2026. 
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {countries.map(({ name, code }) => (
            <div
              key={name}
              className="flex flex-col items-center justify-center space-y-2 border rounded-lg p-4 shadow hover:shadow-md transition"
            >
              <Image
                src={`https://flagcdn.com/48x36/${code}.png`}
                width={48}
                height={36}
                alt={name}
                className="rounded shadow"
              />
              <span className="text-sm font-medium text-slate-800 text-center">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
