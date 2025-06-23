"use client"

import { useState } from "react"
import { MapPin, Clock, Thermometer, Utensils, Camera, Landmark, Users, Star, ChevronRight, Play } from "lucide-react"



export default function UzbekistanPage() {
  const [activeTab, setActiveTab] = useState("culture")

  const attractions = [
    {
      name: "Registan Square",
      image: "/api/placeholder/400/300",
      description: "The heart of ancient Samarkand, featuring stunning Islamic architecture",
      category: "Historical"
    },
    {
      name: "Bukhara Old City",
      image: "/api/placeholder/400/300", 
      description: "UNESCO World Heritage site with 1000+ years of history",
      category: "Cultural"
    },
    {
      name: "Khiva Ichan-Kala",
      image: "/api/placeholder/400/300",
      description: "Living museum of Central Asian architecture",
      category: "Historical"
    },
    {
      name: "Tashkent Modern City",
      image: "/api/placeholder/400/300",
      description: "Dynamic capital blending tradition with innovation",
      category: "Modern"
    }
  ]

  const culturalHighlights = [
    {
      icon: <Utensils className="w-6 h-6" />,
      title: "Culinary Delights",
      description: "Experience authentic plov, samsa, and traditional Uzbek hospitality"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Warm Hospitality",
      description: "Discover the legendary warmth and friendliness of Uzbek people"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Artistic Heritage",
      description: "Explore centuries-old crafts, silk weaving, and ceramic artistry"
    },
    {
      icon: <Landmark className="w-6 h-6" />,
      title: "Architectural Wonders",
      description: "Marvel at Islamic architecture along the ancient Silk Road"
    }
  ]

  const tashkentFacts = [
    { label: "Population", value: "2.5M+", icon: <Users className="w-5 h-5" /> },
    { label: "Founded", value: "2000+ years ago", icon: <Clock className="w-5 h-5" /> },
    { label: "Climate", value: "Continental", icon: <Thermometer className="w-5 h-5" /> },
    { label: "Language", value: "Uzbek, Russian", icon: <MapPin className="w-5 h-5" /> }
  ]

  return (
    <>
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
          {/* Background Elements */}
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
              Experience the crossroads of civilization where ancient Silk Road traditions meet
              <span className="font-semibold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
                {" "}modern innovation
              </span>
            </p>
          </div>
        </section>

        {/* Interactive Tabs Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              {[
                { id: "culture", label: "Culture & Heritage", icon: <Landmark className="w-5 h-5" /> },
                { id: "tashkent", label: "Tashkent City", icon: <MapPin className="w-5 h-5" /> },
                { id: "travel", label: "Travel Tips", icon: <Camera className="w-5 h-5" /> }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-emerald-600 to-sky-600 text-white shadow-lg scale-105"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:scale-105"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="transition-all duration-500">
              {activeTab === "culture" && (
                <div className="space-y-16">
                  {/* Cultural Highlights */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {culturalHighlights.map((highlight, index) => (
                      <div key={index} className="text-center group">
                        <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-sky-500 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          {highlight.icon}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{highlight.title}</h3>
                        <p className="text-slate-600 leading-relaxed">{highlight.description}</p>
                      </div>
                    ))}
                  </div>

                  {/* Attractions Grid */}
                  <div>
                    <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">Must-Visit Destinations</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                      {attractions.map((attraction, index) => (
                        <div key={index} className="group cursor-pointer">
                          <div className="relative overflow-hidden rounded-2xl mb-4">
                            <div className="w-full h-48 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-500">
                              <Camera className="w-12 h-12" />
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute top-4 right-4">
                              <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-slate-700">
                                {attraction.category}
                              </span>
                            </div>
                          </div>
                          <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                            {attraction.name}
                          </h3>
                          <p className="text-slate-600 text-sm leading-relaxed">{attraction.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "tashkent" && (
                <div className="space-y-16">
                  {/* Tashkent Overview */}
                  <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Welcome to Tashkent</h2>
                    <p className="text-xl text-slate-600 leading-relaxed mb-12">
                      Uzbekistan's vibrant capital city, where ancient history meets cutting-edge science. 
                      Tashkent offers world-class venues, excellent connectivity, and rich cultural experiences 
                      for all IChO 2026 participants.
                    </p>
                  </div>

                  {/* City Facts */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tashkentFacts.map((fact, index) => (
                      <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 hover:scale-105">
                        <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-sky-500 rounded-xl flex items-center justify-center text-white mx-auto mb-4">
                          {fact.icon}
                        </div>
                        <div className="text-2xl font-bold text-slate-900 mb-2">{fact.value}</div>
                        <div className="text-slate-600 font-medium">{fact.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Venue Information */}
                  <div className="bg-gradient-to-r from-emerald-50 to-sky-50 rounded-3xl p-8 md:p-12">
                    <div className="max-w-4xl mx-auto text-center">
                      <h3 className="text-3xl font-bold text-slate-900 mb-6">World-Class Venues</h3>
                      <p className="text-lg text-slate-600 leading-relaxed mb-8">
                        IChO 2026 will be hosted at state-of-the-art facilities in Tashkent, featuring modern laboratories, 
                        auditoriums, and accommodation designed to provide the perfect environment for scientific excellence.
                      </p>
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                          <h4 className="text-xl font-bold text-slate-900 mb-3">Modern Labs</h4>
                          <p className="text-slate-600">Fully equipped chemistry laboratories with cutting-edge equipment</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                          <h4 className="text-xl font-bold text-slate-900 mb-3">Conference Halls</h4>
                          <p className="text-slate-600">Spacious venues for ceremonies and academic presentations</p>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-lg">
                          <h4 className="text-xl font-bold text-slate-900 mb-3">Accommodation</h4>
                          <p className="text-slate-600">Comfortable lodging with international standards</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "travel" && (
                <div className="space-y-16">
                  {/* Travel Essentials */}
                  <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Travel Information</h2>
                    <p className="text-xl text-slate-600 leading-relaxed">
                      Everything you need to know for a smooth and enjoyable journey to Uzbekistan
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-2 gap-12">
                    {/* Before You Travel */}
                    <div className="space-y-8">
                      <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                        <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                          <Clock className="w-5 h-5 text-white" />
                        </div>
                        Before You Travel
                      </h3>
                      
                      <div className="space-y-6">
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                          <h4 className="text-lg font-bold text-slate-900 mb-3">Visa Requirements</h4>
                          <p className="text-slate-600 mb-4">Tourist visas available online or on arrival for most countries. Special arrangements for IChO participants.</p>
                          <button className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-semibold">
                            Check Visa Info <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                          <h4 className="text-lg font-bold text-slate-900 mb-3">Best Time to Visit</h4>
                          <p className="text-slate-600">July offers warm, pleasant weather perfect for exploration. Average temperature: 25-30°C (77-86°F).</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                          <h4 className="text-lg font-bold text-slate-900 mb-3">Currency & Payments</h4>
                          <p className="text-slate-600">Uzbek Som (UZS). Credit cards widely accepted. Currency exchange available at airports and banks.</p>
                        </div>
                      </div>
                    </div>

                    {/* During Your Stay */}
                    <div className="space-y-8">
                      <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                        <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-white" />
                        </div>
                        During Your Stay
                      </h3>
                      
                      <div className="space-y-6">
                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                          <h4 className="text-lg font-bold text-slate-900 mb-3">Transportation</h4>
                          <p className="text-slate-600 mb-4">Modern metro system, taxis, and organized transport for IChO participants. Airport transfers provided.</p>
                          <div className="flex gap-2">
                            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">Metro</span>
                            <span className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium">Taxi</span>
                            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium">Bus</span>
                          </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                          <h4 className="text-lg font-bold text-slate-900 mb-3">Communication</h4>
                          <p className="text-slate-600">Free WiFi at venues. International roaming available. English widely spoken in tourist areas.</p>
                        </div>

                        <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                          <h4 className="text-lg font-bold text-slate-900 mb-3">Safety & Health</h4>
                          <p className="text-slate-600">Uzbekistan is very safe for tourists. Standard vaccinations recommended. Medical facilities available.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cultural Etiquette */}
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-8 md:p-12">
                    <div className="max-w-4xl mx-auto">
                      <h3 className="text-3xl font-bold text-slate-900 mb-8 text-center">Cultural Etiquette</h3>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Star className="w-5 h-5 text-amber-500" />
                            Do's
                          </h4>
                          <ul className="space-y-3 text-slate-600">
                            <li>• Dress modestly when visiting religious sites</li>
                            <li>• Accept hospitality graciously - it's a cultural tradition</li>
                            <li>• Learn basic Uzbek greetings - locals appreciate the effort</li>
                            <li>• Try local cuisine - it's an important part of the culture</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Star className="w-5 h-5 text-slate-400" />
                            Cultural Notes
                          </h4>
                          <ul className="space-y-3 text-slate-600">
                            <li>• Friday is the holy day (similar to Sunday in Christianity)</li>
                            <li>• Shoes are removed when entering homes</li>
                            <li>• Handshakes are common, but wait for women to extend their hand first</li>
                            <li>• Photography may be restricted at some historical sites</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-sky-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience Uzbekistan?</h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Join us in Tashkent for an unforgettable journey of scientific discovery and cultural exploration
            </p>
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-emerald-50 transition-all duration-300 hover:scale-105 shadow-lg">
              Register for IChO 2026
            </button>
          </div>
        </section>
      </main>

    </>
  )
}