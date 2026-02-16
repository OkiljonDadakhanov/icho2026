"use client";

import { useState } from "react";
import {
  Plane,
  FileText,
  Globe,
  Clock,
  Shield,
  ChevronDown,
  ChevronRight,
  AlertCircle,
  CheckCircle2,
  ExternalLink,
  Download,
  Search,
} from "lucide-react";

export default function TravelDetailsPage() {
  const [openSection, setOpenSection] = useState<string | null>("visa-free");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  const visaFreeUnlimited = [
    "Republic of Azerbaijan",
    "Georgia",
    "Republic of Armenia",
    "Republic of Belarus",
    "Republic of Kazakhstan",
    "Republic of Moldova",
    "Russian Federation",
    "Ukraine",
  ];

  const visaFree60Days = ["Kyrgyz Republic"];

  const visaFree30Days = [
    "Republic of Tajikistan",
    "Australian Union",
    "Republic of Austria",
    "Argentine Republic",
    "Bosnia and Herzegovina",
    "Vatican",
    "Grand Duchy of Luxembourg",
    "Hungary",
    "Brunei-Darussalam",
    "State of Israel",
    "Hellenic Republic",
    "Ireland",
    "Iceland",
    "Italian Republic",
    "Canada",
    "Principality of Andorra",
    "Principality of Liechtenstein",
    "Principality of Monaco",
    "Kingdom of Belgium",
    "Kingdom of Denmark",
    "Kingdom of Spain",
    "Kingdom of the Netherlands",
    "Kingdom of Norway",
    "Kingdom of Sweden",
    "Republic of Latvia",
    "Republic of Lithuania",
    "Malaysia",
    "Mongolia",
    "New Zealand",
    "United Arab Emirates",
    "Portuguese Republic",
    "Republic of Bulgaria",
    "Republic of Indonesia",
    "Republic of Cyprus",
    "Republic of Korea",
    "Republic of Malta",
    "Republic of Poland",
    "Republic of San Marino",
    "Republic of Serbia",
    "Republic of Slovenia",
    "Republic of Croatia",
    "Republic of Chile",
    "Romania",
    "Singapore",
    "Slovak Republic",
    "United Kingdom of Great Britain and Northern Ireland",
    "Republic of Turkey",
    "Federative Republic of Brazil",
    "Federal Republic of Germany",
    "Republic of Finland",
    "French Republic",
    "Montenegro",
    "Czech Republic",
    "Swiss Confederation",
    "Republic of Estonia",
    "Japan",
    "Antigua and Barbuda",
    "Barbados",
    "Belize",
    "Grenada",
    "Dominican Republic",
    "United Mexican States",
    "Republic of Guatemala",
    "Republic of Honduras",
    "Republic of Costa Rica",
    "Republic of Cuba",
    "Republic of Nicaragua",
    "Republic of Panama",
    "Republic of Trinidad and Tobago",
    "Republic of El Salvador",
    "Saint Vincent and the Grenadines",
    "Saint Lucia",
    "Commonwealth of the Bahamas",
    "Commonwealth of Dominica",
    "Federation of Saint Kitts and Nevis",
    "Jamaica",
    "State of Qatar",
  ];

  const visaFree10Days = [
    "Kingdom of Bahrain",
    "State of Kuwait",
    "Sultanate of Oman",
    "People\u2019s Republic of China (including Hong Kong and Macao)",
  ];

  const eVisaCountries = [
    "People\u2019s Democratic Republic of Algeria",
    "Arab Republic of Egypt",
    "Republic of Venezuela",
    "Republic of Uruguay",
    "Republic of Gabon",
    "State of Qatar",
    "State of Kuwait",
    "Democratic Socialist Republic of Sri Lanka",
    "Hashemite Kingdom of Jordan",
    "Islamic Republic of Iran",
    "People\u2019s Republic of China (including Hong Kong)",
    "Cooperative Republic of Guyana",
    "Democratic People\u2019s Republic of Korea",
    "Kingdom of Bahrain",
    "Kingdom of Bhutan",
    "Kingdom of Cambodia",
    "Kingdom of Morocco",
    "Kingdom of Saudi Arabia",
    "Kingdom of Thailand",
    "Kingdom of Tonga",
    "Lao People\u2019s Democratic Republic",
    "Republic of Lebanon",
    "Maldives",
    "Plurinational State of Bolivia",
    "People\u2019s Republic of Bangladesh",
    "Independent State of Samoa",
    "Republic of Albania",
    "Republic of Angola",
    "Republic of Vanuatu",
    "Republic of Ghana",
    "Republic of India",
    "Republic of Cape Verde",
    "Republic of Cameroon",
    "Republic of Kiribati",
    "Republic of Colombia",
    "Republic of C\u00f4te d\u2019Ivoire",
    "Republic of Mauritius",
    "Republic of Macedonia",
    "Republic of the Marshall Islands",
    "Republic of Nauru",
    "Republic of Palau",
    "Republic of Paraguay",
    "Republic of Peru",
    "Republic of Seychelles",
    "Republic of Senegal",
    "Republic of Suriname",
    "Republic of Fiji",
    "Republic of the Philippines",
    "Republic of Ecuador",
    "United States of America",
    "Solomon Islands",
    "Socialist Republic of Vietnam",
    "Sultanate of Oman",
    "Republic of Tunisia",
    "Federal Democratic Republic of Nepal",
    "Federated States of Micronesia",
  ];

  const transitVisaFree5Days = [
    "Republic of Albania",
    "Algeria",
    "Antigua and Barbuda",
    "Bahamas",
    "Barbados",
    "Belize",
    "Kingdom of Bhutan",
    "Republic of Venezuela",
    "Socialist Republic of Vietnam",
    "Republic of Gabon",
    "Cooperative Republic of Guyana",
    "Republic of Guatemala",
    "Republic of Honduras",
    "Grenada",
    "Dominica",
    "Dominican Republic",
    "Republic of India",
    "Republic of Colombia",
    "Republic of Costa Rica",
    "Republic of Lebanon",
    "Republic of Mauritius",
    "Republic of Macedonia",
    "Republic of Maldives",
    "Kingdom of Morocco",
    "Mexico",
    "Republic of Nauru",
    "Republic of Palau",
    "Republic of Panama",
    "Republic of Peru",
    "Kingdom of Saudi Arabia",
    "Seychelles",
    "Saint Vincent and the Grenadines",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "United States of America",
    "Republic of Suriname",
    "Kingdom of Thailand",
    "Republic of Trinidad and Tobago",
    "Republic of Tunisia",
    "Turkmenistan",
    "Uruguay",
    "Republic of Fiji",
    "Republic of the Philippines",
    "Sri Lanka",
    "Republic of Ecuador",
    "Republic of Equatorial Guinea",
    "Republic of South Africa",
    "Jamaica",
  ];

  const allCountries = [
    ...visaFreeUnlimited.map((c) => ({ country: c, category: "Visa-free (Unlimited)" })),
    ...visaFree60Days.map((c) => ({ country: c, category: "Visa-free (Up to 60 days)" })),
    ...visaFree30Days.map((c) => ({ country: c, category: "Visa-free (Up to 30 days)" })),
    ...visaFree10Days.map((c) => ({ country: c, category: "Visa-free (Up to 10 days)" })),
    ...eVisaCountries.map((c) => ({ country: c, category: "E-Visa available" })),
    ...transitVisaFree5Days.map((c) => ({ country: c, category: "Transit visa-free (5 days)" })),
  ];

  const filteredCountries = searchQuery.trim()
    ? allCountries.filter((c) =>
        c.country.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-sky-500/5 to-amber-500/5"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-2xl rotate-12 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-sky-400/20 to-sky-600/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-3xl -rotate-6 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium text-slate-600 mb-6">
            <Plane className="w-4 h-4 text-emerald-500" />
            <span>Travel Information</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6">
            <span className="block text-slate-900 mb-2">Travel</span>
            <span className="block bg-gradient-to-r from-emerald-600 via-sky-600 to-amber-600 bg-clip-text text-transparent">
              Details
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Everything you need to know about visas and travel to
            <span className="font-semibold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
              {" "}Uzbekistan
            </span>{" "}
            for IChO 2026
          </p>
        </div>
      </section>

      {/* Country Search */}
      <section className="py-12 bg-gradient-to-br from-white via-slate-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-3">
              <Search className="w-6 h-6 text-emerald-600" />
              Check Your Country&apos;s Visa Status
            </h2>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Type your country name..."
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl text-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
              />
              {searchQuery.trim() && (
                <div className="mt-4 space-y-2">
                  {filteredCountries.length > 0 ? (
                    filteredCountries.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-4 bg-emerald-50 border border-emerald-100 rounded-xl"
                      >
                        <span className="font-medium text-slate-900">
                          {item.country}
                        </span>
                        <span className="px-3 py-1 bg-emerald-600 text-white text-sm font-medium rounded-full">
                          {item.category}
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="p-4 bg-amber-50 border border-amber-100 rounded-xl text-amber-800">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-5 h-5" />
                        <span className="font-medium">
                          Country not found in visa-free or e-visa lists. You may need to apply for a standard visa.
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Visa Procedure */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
            Visa Procedure
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Information on obtaining a visa for entry into the Republic of Uzbekistan
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Individual Application */}
            <div className="bg-white border border-slate-100 shadow-md rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Individual Application
                </h3>
              </div>
              <p className="text-slate-600 text-sm mb-4">
                Individuals must submit the following documents:
              </p>
              <ul className="space-y-3">
                {[
                  "Visa application form of the established sample",
                  "Electronic application form from evisa.mfa.uz",
                  "Copies of passports of the proposed and proposing persons",
                  "Original invitation letter from the internal affairs bodies",
                  "Copies of the air ticket or reservation (for airport visa)",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Embassy Application */}
            <div className="bg-white border border-slate-100 shadow-md rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Embassy Application
                </h3>
              </div>
              <p className="text-slate-600 text-sm mb-4">
                Documents required at diplomatic missions abroad:
              </p>
              <ul className="space-y-3">
                {[
                  "Passport with at least 3 months validity beyond the visa period",
                  "2 copies of a fully completed visa application form",
                  "2 color passport-size photos (35\u00d745mm)",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-500 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-3 bg-sky-50 rounded-xl">
                <p className="text-sky-800 text-sm">
                  <strong>Processing time:</strong> Written applications submitted via{" "}
                  <a
                    href="https://visa.mfa.uz/site/index?language=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-600 underline hover:text-sky-800"
                  >
                    visa.mfa.uz
                  </a>{" "}
                  are considered within 4 working days.
                </p>
              </div>
            </div>

            {/* Transit Visa */}
            <div className="bg-white border border-slate-100 shadow-md rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                  <Plane className="w-5 h-5 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Transit Visa
                </h3>
              </div>
              <p className="text-slate-700 text-sm">
                In addition to the standard documents, transit visa applicants
                must have a visa of the destination country and travel documents
                confirming the date of departure from Uzbekistan.
              </p>
              <div className="mt-4 p-3 bg-amber-50 rounded-xl">
                <p className="text-amber-800 text-sm">
                  <strong>Processing time:</strong> 3 working days
                </p>
              </div>
            </div>

            {/* Airport Visa */}
            <div className="bg-white border border-slate-100 shadow-md rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-violet-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Visa on Arrival (Tashkent Airport)
                </h3>
              </div>
              <p className="text-slate-700 text-sm">
                Citizens of countries without an Uzbek diplomatic mission can
                obtain a visa at Tashkent International Airport. The inviting
                party in Uzbekistan must apply in advance to the Ministry of
                Foreign Affairs and send the confirmation to the invited person.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visa-Free Countries */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
            Visa-Free Countries
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Countries whose citizens can enter Uzbekistan without a visa
          </p>

          <div className="space-y-4">
            {/* Unlimited */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <button
                onClick={() => toggleSection("visa-free")}
                className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-slate-900">
                      Unlimited Duration
                    </h3>
                    <p className="text-sm text-slate-500">
                      {visaFreeUnlimited.length} countries
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform ${
                    openSection === "visa-free" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openSection === "visa-free" && (
                <div className="px-6 pb-6">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {visaFreeUnlimited.map((country, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-3 bg-emerald-50 rounded-xl"
                      >
                        <ChevronRight className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">
                          {country}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 60 Days */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <button
                onClick={() => toggleSection("60days")}
                className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-sky-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-slate-900">
                      Up to 60 Days
                    </h3>
                    <p className="text-sm text-slate-500">
                      {visaFree60Days.length} country
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform ${
                    openSection === "60days" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openSection === "60days" && (
                <div className="px-6 pb-6">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {visaFree60Days.map((country, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-3 bg-sky-50 rounded-xl"
                      >
                        <ChevronRight className="w-4 h-4 text-sky-500 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">
                          {country}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 30 Days */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <button
                onClick={() => toggleSection("30days")}
                className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-slate-900">
                      Up to 30 Days
                    </h3>
                    <p className="text-sm text-slate-500">
                      {visaFree30Days.length} countries
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform ${
                    openSection === "30days" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openSection === "30days" && (
                <div className="px-6 pb-6">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {visaFree30Days.map((country, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-3 bg-amber-50 rounded-xl"
                      >
                        <ChevronRight className="w-4 h-4 text-amber-500 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">
                          {country}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 10 Days */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <button
                onClick={() => toggleSection("10days")}
                className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-violet-600" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-slate-900">
                      Up to 10 Days
                    </h3>
                    <p className="text-sm text-slate-500">
                      {visaFree10Days.length} countries &mdash; must have return flight ticket
                    </p>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 transition-transform ${
                    openSection === "10days" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openSection === "10days" && (
                <div className="px-6 pb-6">
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {visaFree10Days.map((country, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-3 bg-violet-50 rounded-xl"
                      >
                        <ChevronRight className="w-4 h-4 text-violet-500 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">
                          {country}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* E-Visa Countries */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
            E-Visa Countries
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Countries whose citizens can obtain an electronic entry visa via{" "}
            <a
              href="https://e-visa.gov.uz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-600 underline hover:text-emerald-800"
            >
              e-visa.gov.uz
            </a>
          </p>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <button
              onClick={() => toggleSection("evisa")}
              className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-slate-900">
                    E-Visa Eligible Countries
                  </h3>
                  <p className="text-sm text-slate-500">
                    {eVisaCountries.length} countries
                  </p>
                </div>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 transition-transform ${
                  openSection === "evisa" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openSection === "evisa" && (
              <div className="px-6 pb-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {eVisaCountries.map((country, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-3 bg-emerald-50 rounded-xl"
                    >
                      <ChevronRight className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{country}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Transit Visa-Free */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
            Transit Visa-Free (5 Days)
          </h2>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Citizens who can transit through Uzbekistan for up to 5 days with a
            flight ticket to a third country issued by Uzbekistan Airways
          </p>

          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <button
              onClick={() => toggleSection("transit")}
              className="w-full flex items-center justify-between p-6 hover:bg-slate-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-sky-100 rounded-lg flex items-center justify-center">
                  <Plane className="w-5 h-5 text-sky-600" />
                </div>
                <div className="text-left">
                  <h3 className="text-lg font-bold text-slate-900">
                    Transit Countries
                  </h3>
                  <p className="text-sm text-slate-500">
                    {transitVisaFree5Days.length} countries
                  </p>
                </div>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-slate-400 transition-transform ${
                  openSection === "transit" ? "rotate-180" : ""
                }`}
              />
            </button>
            {openSection === "transit" && (
              <div className="px-6 pb-6">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {transitVisaFree5Days.map((country, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-3 bg-sky-50 rounded-xl"
                    >
                      <ChevronRight className="w-4 h-4 text-sky-500 flex-shrink-0" />
                      <span className="text-slate-700 text-sm">{country}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            Important Notes
          </h2>

          <div className="space-y-4">
            {[
              "The visa-free regime applies to holders of all categories of passports (diplomatic, service, and ordinary). A valid national passport with at least 6 months validity from the date of visa issuance is required.",
              "The visa-free regime does not apply to stateless persons permanently residing in the territories of visa-free countries.",
              "The 30-day and 60-day visa-free regime is valid from the moment of crossing the state border. Upon expiration, the foreign citizen must leave the republic.",
              "If it is necessary to stay for more than 30 or 60 days, a foreign citizen must provide documents for issuing an entry visa.",
              "Visa-free entry for foreign citizens under 16, accompanied by legal representatives with a biometric travel document, is valid for the duration of the accompanying person\u2019s visa (max 90 days).",
              "Citizens of Bahrain, Qatar, Kuwait, Oman, and China are granted visa-free entry for 10 days with a return flight ticket.",
              "A visa-free regime for tourism (up to 30 days) is established for citizens of China (tourist groups), the USA, and Vietnam aged 55+.",
              "Uzbekistan and Japan issue visas without charging consular fees by mutual agreement.",
              "To obtain and extend a visa in Uzbekistan, you can use the services of the Bureau of Diplomatic Missions Services of the Ministry of Foreign Affairs.",
            ].map((note, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-100 rounded-xl"
              >
                <AlertCircle className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                <p className="text-slate-700 text-sm">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Useful Links */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            Useful Links
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <a
              href="https://e-visa.gov.uz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white border border-slate-100 shadow-md rounded-2xl hover:shadow-lg hover:border-emerald-200 transition-all group"
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center group-hover:bg-emerald-200 transition-colors">
                <Globe className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">E-Visa Portal</h3>
                <p className="text-sm text-slate-500">e-visa.gov.uz</p>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 ml-auto" />
            </a>

            <a
              href="https://visa.mfa.uz/site/index?language=en"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white border border-slate-100 shadow-md rounded-2xl hover:shadow-lg hover:border-sky-200 transition-all group"
            >
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center group-hover:bg-sky-200 transition-colors">
                <FileText className="w-6 h-6 text-sky-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Visa Application</h3>
                <p className="text-sm text-slate-500">visa.mfa.uz</p>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 ml-auto" />
            </a>

            <a
              href="https://evisa.mfa.uz"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-6 bg-white border border-slate-100 shadow-md rounded-2xl hover:shadow-lg hover:border-amber-200 transition-all group"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center group-hover:bg-amber-200 transition-colors">
                <FileText className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Electronic Application</h3>
                <p className="text-sm text-slate-500">evisa.mfa.uz</p>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 ml-auto" />
            </a>

            <a
              href="/visa-info.docx"
              download
              className="flex items-center gap-4 p-6 bg-white border border-slate-100 shadow-md rounded-2xl hover:shadow-lg hover:border-violet-200 transition-all group"
            >
              <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center group-hover:bg-violet-200 transition-colors">
                <Download className="w-6 h-6 text-violet-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900">Download Full Document</h3>
                <p className="text-sm text-slate-500">visa-info.docx</p>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 ml-auto" />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
