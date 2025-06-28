"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  ChevronRight,
  CheckCircle,
  Building,
  Zap,
  Target,
} from "lucide-react";

export default function PartnershipPage() {
  const currentPartners = [
    {
      name: "Ministry of Preschool and School Education of the Republic of Uzbekistan",
      logo: "/logos/maktabgacha.png",
      tier: "Main Sponsor",
      description: "Main sponsor of IChO 2026",
    },
    {
      name: "Agency for Specialized Educational Institutions",
      logo: "/logos/agentlik.png",
      tier: "Partner",
      description: "Supporting gifted education across Uzbekistan",
    },
    {
      name: "Science Olympiad Center",
      logo: "/logos/fom.png",
      tier: "Organizer",
      description: "Organizing national and international science competitions",
    },
    {
      name: "UzChemIndustry",
      logo: "/logos/uzchem.png",
      tier: "Partner",
      description: "Industrial partner for chemical innovation",
    },
    {
      name: "Tashkent State Pedagogical University (TSPU)",
      logo: "/logos/tdpu.webp",
      tier: "Partner",
      description: "Academic partner in chemistry education",
    },
    {
      name: "New Uzbekistan University",
      logo: "/logos/newuu.png",
      tier: "Partner",
      description: "Education and innovation partner",
    },
    {
      name: "National Institute of Pedagogical Mastery named after A. Avloniy",
      logo: "/logos/avloniy.jpg",
      tier: "Partner",
      description: "Supporting excellence in teaching",
    },
  ];

  const partnershipOpportunities = [
    {
      icon: Building,
      title: "Corporate Sponsorship",
      description:
        "Align your brand with scientific excellence and reach a global audience of talented students and educators.",
      features: [
        "Brand visibility",
        "Networking opportunities",
        "CSR alignment",
      ],
    },
    {
      icon: Zap,
      title: "Equipment Partnership",
      description:
        "Provide cutting-edge laboratory equipment and technology to support the competition.",
      features: [
        "Product showcase",
        "Educational impact",
        "Technical expertise",
      ],
    },
    {
      icon: Target,
      title: "Educational Collaboration",
      description:
        "Partner with us to develop educational content and resources for the global chemistry community.",
      features: ["Content development", "Global reach", "Educational legacy"],
    },
  ];

  const impactStats = [
    { number: "80+", label: "Countries Participating" },
    { number: "300+", label: "Student Participants" },
    { number: "500+", label: "Educators & Officials" },
    { number: "10M+", label: "Global Media Reach" },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-sky-500/5 to-amber-500/5"></div>
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-2xl rotate-12 animate-float"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-sky-400/20 to-sky-600/20 rounded-full animate-float-delayed"></div>
          <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-3xl -rotate-6 animate-float-slow"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium text-slate-600">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span>Partnership Opportunities</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight">
            <span className="block text-slate-900 mb-2">Partner with</span>
            <span className="block bg-gradient-to-r from-emerald-600 via-sky-600 to-amber-600 bg-clip-text text-transparent">
              IChO 2026
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
            Join us in supporting the next generation of{" "}
            <span className="font-semibold bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent">
              chemistry innovators
            </span>
          </p>
        </div>
      </section>

      <main className="flex-grow">
        {/* Impact Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {impactStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-black text-slate-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Opportunities */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Partnership Opportunities
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Multiple ways to get involved and make a meaningful impact on
                global chemistry education
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {partnershipOpportunities.map((opportunity, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-emerald-100 rounded-xl">
                      <opportunity.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {opportunity.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 mb-6">
                    {opportunity.description}
                  </p>
                  <div className="space-y-2">
                    {opportunity.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-2"
                      >
                        <CheckCircle className="h-4 w-4 text-emerald-500" />
                        <span className="text-sm text-slate-600">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners List */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Partners
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Join these leading organizations in supporting chemistry
                education
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPartners.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-24 h-24 bg-white border border-gray-200 rounded-xl flex items-center justify-center overflow-hidden">
                      <Image
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        width={80}
                        height={80}
                        className="object-contain"
                      />
                    </div>

                    <div>
                      <h3 className="font-bold text-slate-900">
                        {partner.name}
                      </h3>
                      <div
                        className={`inline-block mt-1 px-2 py-1 rounded-full text-xs font-medium ${
                          partner.tier === "Platinum"
                            ? "bg-purple-100 text-purple-800"
                            : partner.tier === "Gold"
                            ? "bg-amber-100 text-amber-800"
                            : partner.tier === "Silver"
                            ? "bg-slate-100 text-slate-800"
                            : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        {partner.tier}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm">
                    {partner.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
