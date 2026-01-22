"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle,
  Building,
  Zap,
  Target,
  Mail,
  Award,
  Users,
  GraduationCap,
} from "lucide-react";

type Partner = {
  name: string;
  logo: string;
  tier: "Main Sponsor" | "Organizer" | "Academic Partner";
  description: string;
};

export default function PartnershipPage() {
  const mainSponsors: Partner[] = [
    {
      name: "Ministry of Preschool and School Education of the Republic of Uzbekistan",
      logo: "/logos/maktabgacha.png",
      tier: "Main Sponsor",
      description: "Main sponsor and governmental support for IChO 2026",
    },
  ];

  const organizers: Partner[] = [
    {
      name: "Science Olympiad Center",
      logo: "/logos/fom.png",
      tier: "Organizer",
      description: "Lead organizer of national and international science olympiads",
    },
    {
      name: "Agency for Specialized Educational Institutions",
      logo: "/logos/agentlik.png",
      tier: "Organizer",
      description: "Supporting gifted education across Uzbekistan",
    },
  ];

  const academicPartners: Partner[] = [
    {
      name: "National University of Uzbekistan named after Mirzo Ulugbek",
      logo: "/logos/milliy.png",
      tier: "Academic Partner",
      description: "Leading research university and education partner",
    },
    {
      name: "Tashkent State Pedagogical University (TSPU)",
      logo: "/logos/tdpu.webp",
      tier: "Academic Partner",
      description: "Academic partner in chemistry education",
    },
    {
      name: "National Institute of Pedagogical Mastery named after A. Avloniy",
      logo: "/logos/avloniy.jpg",
      tier: "Academic Partner",
      description: "Supporting excellence in teaching methodology",
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
    { number: "90+", label: "Countries Participating" },
    { number: "350+", label: "Student Participants" },
    { number: "500+", label: "Educators & Officials" },
    { number: "10M+", label: "Global Media Reach" },
  ];

  const PartnerCard = ({ partner, size = "normal" }: { partner: Partner; size?: "large" | "normal" }) => (
    <div
      className={`group bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden ${
        size === "large" ? "p-8" : "p-6"
      }`}
    >
      <div className={`flex ${size === "large" ? "flex-col items-center text-center" : "items-start gap-4"}`}>
        <div
          className={`bg-gradient-to-br from-slate-50 to-white border border-slate-100 rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0 ${
            size === "large" ? "w-32 h-32 mb-5" : "w-20 h-20"
          }`}
        >
          <Image
            src={partner.logo}
            alt={`${partner.name} logo`}
            width={size === "large" ? 100 : 64}
            height={size === "large" ? 100 : 64}
            className="object-contain p-2"
          />
        </div>
        <div className={size === "large" ? "" : "flex-1"}>
          <h3 className={`font-bold text-slate-900 leading-tight ${size === "large" ? "text-xl mb-3" : "text-base mb-2"}`}>
            {partner.name}
          </h3>
          <p className={`text-slate-500 ${size === "large" ? "text-base" : "text-sm"}`}>
            {partner.description}
          </p>
        </div>
      </div>
    </div>
  );

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
                  <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-emerald-600 to-sky-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partners Section - Redesigned */}
        <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Our Partners & Sponsors
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Organizations making IChO 2026 possible
              </p>
            </div>

            {/* Main Sponsor */}
            <div className="mb-16">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-300"></div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-full">
                  <Award className="w-5 h-5 text-amber-600" />
                  <span className="text-amber-800 font-semibold">Main Sponsor</span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-300"></div>
              </div>
              <div className="max-w-2xl mx-auto">
                {mainSponsors.map((partner, index) => (
                  <PartnerCard key={index} partner={partner} size="large" />
                ))}
              </div>
            </div>

            {/* Organizers */}
            <div className="mb-16">
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-emerald-300"></div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-100 to-teal-100 rounded-full">
                  <Users className="w-5 h-5 text-emerald-600" />
                  <span className="text-emerald-800 font-semibold">Organizers</span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-emerald-300"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {organizers.map((partner, index) => (
                  <PartnerCard key={index} partner={partner} />
                ))}
              </div>
            </div>

            {/* Academic Partners */}
            <div>
              <div className="flex items-center justify-center gap-3 mb-8">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-sky-300"></div>
                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-sky-100 to-blue-100 rounded-full">
                  <GraduationCap className="w-5 h-5 text-sky-600" />
                  <span className="text-sky-800 font-semibold">Academic Partners</span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-sky-300"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {academicPartners.map((partner, index) => (
                  <PartnerCard key={index} partner={partner} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Opportunities */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Become a Partner
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
                  className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl shadow-lg">
                      <opportunity.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {opportunity.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {opportunity.description}
                  </p>
                  <div className="space-y-3">
                    {opportunity.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className="flex items-center gap-3"
                      >
                        <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                        <span className="text-slate-700 font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 bg-gradient-to-r from-emerald-50 via-sky-50 to-amber-50 rounded-3xl border border-slate-100">
                <div className="text-left">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">
                    Interested in partnering with us?
                  </h3>
                  <p className="text-slate-600">
                    Get in touch to discuss partnership opportunities
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
