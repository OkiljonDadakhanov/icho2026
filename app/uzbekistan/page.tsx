"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Clock,
  Thermometer,
  Utensils,
  Camera,
  Landmark,
  Users,
  Star,
  ChevronRight,
  Globe,
  DollarSign,
  BookOpen,
  Flag,
} from "lucide-react";

export default function UzbekistanPage() {
  const [activeTab, setActiveTab] = useState("culture");

  const attractions = [
    {
      name: "Registan Square",
      image: "/images/registan.jpg",
      description:
        "The heart of ancient Samarkand, featuring stunning Islamic architecture",
      category: "Historical",
    },
    {
      name: "Bukhara Old City",
      image: "/images/bukhara.jpg",
      description: "UNESCO World Heritage site with 1000+ years of history",
      category: "Cultural",
    },
    {
      name: "Khiva Ichan-Kala",
      image: "/images/khiva.jpg",
      description: "Living museum of Central Asian architecture",
      category: "Historical",
    },
    {
      name: "Tashkent Modern City",
      image: "/images/tashkent.jpeg",
      description: "Dynamic capital blending tradition with innovation",
      category: "Modern",
    },
  ];

  const culturalHighlights = [
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Culinary Delights",
      description:
        "Experience authentic plov, samsa, and traditional Uzbek hospitality",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Warm Hospitality",
      description:
        "Discover the legendary warmth and friendliness of Uzbek people",
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Artistic Heritage",
      description:
        "Explore centuries-old crafts, silk weaving, and ceramic artistry",
    },
    {
      icon: <Landmark className="w-6 h-6" />,
      title: "Architectural Wonders",
      description: "Marvel at Islamic architecture along the ancient Silk Road",
    },
  ];

  const aboutFacts = [
    {
      label: "Location",
      value:
        "Central Asia (bordered by Kazakhstan, Kyrgyzstan, Tajikistan, Afghanistan, Turkmenistan)",
      icon: <Globe className="w-5 h-5 text-emerald-600" />,
    },
    {
      label: "Population",
      value: "Approx. 37 million (2025)",
      icon: <Users className="w-5 h-5 text-emerald-600" />,
    },
    {
      label: "Capital",
      value: "Tashkent",
      icon: <MapPin className="w-5 h-5 text-emerald-600" />,
    },
    {
      label: "Regions",
      value: "14 administrative regions",
      icon: <Landmark className="w-5 h-5 text-emerald-600" />,
    },
    {
      label: "Independence Day",
      value: "September 1 (Since 1991)",
      icon: <Flag className="w-5 h-5 text-emerald-600" />,
    },
    {
      label: "GDP Ranking",
      value: "2nd in Central Asia by nominal GDP",
      icon: <DollarSign className="w-5 h-5 text-emerald-600" />,
    },
    {
      label: "Youth Literacy",
      value: "100%",
      icon: <BookOpen className="w-5 h-5 text-emerald-600" />,
    },
    {
      label: "Currency",
      value: "Uzbek sum",
      icon: <DollarSign className="w-5 h-5 text-emerald-600" />,
    },
  ];

  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-sky-500/5 to-amber-500/5"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-2xl rotate-12 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-sky-400/20 to-sky-600/20 rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-3xl -rotate-6 animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium text-slate-600 mb-6">
            <MapPin className="w-4 h-4 text-emerald-500" />
            <span>Your Host Country</span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight mb-6">
            <span className="block text-slate-900 mb-2">Discover</span>
            <span className="block bg-gradient-to-r from-emerald-600 via-sky-600 to-amber-600 bg-clip-text text-transparent">
              Uzbekistan
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Experience the crossroads of civilization where ancient Silk Road
            traditions meet
            <span className="font-semibold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
              {" "}
              modern innovation
            </span>
          </p>
        </div>
      </section>

      {/* About Uzbekistan Facts Section */}
      <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-slate-900 mb-12">
            About Uzbekistan
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {aboutFacts.map((fact, index) => (
              <div
                key={index}
                className="bg-white border border-slate-100 shadow-md rounded-2xl p-6 flex gap-4 items-start"
              >
                <div className="w-10 h-10 flex-shrink-0 bg-emerald-100 rounded-lg flex items-center justify-center">
                  {fact.icon}
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900">{fact.label}</h4>
                  <p className="text-slate-600 text-sm mt-1">{fact.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Highlights & Attractions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveTab("culture")}
              className={`px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeTab === "culture"
                  ? "bg-emerald-600 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              }`}
            >
              Culture & Heritage
            </button>
          </div>

          {activeTab === "culture" && (
            <div className="space-y-16">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {culturalHighlights.map((highlight, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-sky-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      {highlight.icon}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {highlight.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>

              <div>
                <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
                  Must-Visit Destinations
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {attractions.map((attraction, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="relative w-full h-48 rounded-2xl overflow-hidden mb-4">
                        <Image
                          src={attraction.image}
                          alt={attraction.name}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700">
                            {attraction.category}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                        {attraction.name}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {attraction.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
