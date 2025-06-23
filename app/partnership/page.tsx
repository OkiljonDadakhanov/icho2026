import { Button } from "@/components/ui/button"
import { 
  Sparkles, 
  ChevronRight, 
  CheckCircle, 
  Building, 
  Zap,
  Target
} from "lucide-react"

export default function PartnershipPage() {
  const currentPartners = [
    {
      name: "ChemTech Solutions",
      logo: "/api/placeholder/150/80",
      tier: "Platinum",
      description: "Leading chemical analysis equipment manufacturer"
    },
    {
      name: "Global Education Foundation",
      logo: "/api/placeholder/150/80",
      tier: "Gold",
      description: "Promoting STEM education worldwide"
    },
    {
      name: "Innovate Labs",
      logo: "/api/placeholder/150/80",
      tier: "Gold",
      description: "Cutting-edge laboratory solutions"
    },
    {
      name: "Future Scientists Initiative",
      logo: "/api/placeholder/150/80",
      tier: "Silver",
      description: "Supporting young scientists globally"
    },
    {
      name: "EduTech International",
      logo: "/api/placeholder/150/80",
      tier: "Silver",
      description: "Educational technology solutions"
    },
    {
      name: "Science Forward",
      logo: "/api/placeholder/150/80",
      tier: "Bronze",
      description: "Advancing scientific research"
    }
  ]

  const partnershipOpportunities = [
    {
      icon: Building,
      title: "Corporate Sponsorship",
      description: "Align your brand with scientific excellence and reach a global audience of talented students and educators.",
      features: ["Brand visibility", "Networking opportunities", "CSR alignment"]
    },
    {
      icon: Zap,
      title: "Equipment Partnership",
      description: "Provide cutting-edge laboratory equipment and technology to support the competition.",
      features: ["Product showcase", "Educational impact", "Technical expertise"]
    },
    {
      icon: Target,
      title: "Educational Collaboration",
      description: "Partner with us to develop educational content and resources for the global chemistry community.",
      features: ["Content development", "Global reach", "Educational legacy"]
    }
  ]

  const impactStats = [
    { number: "80+", label: "Countries Participating" },
    { number: "300+", label: "Student Participants" },
    { number: "500+", label: "Educators & Officials" },
    { number: "10M+", label: "Global Media Reach" }
  ]

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
                Multiple ways to get involved and make a meaningful impact on global chemistry education
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {partnershipOpportunities.map((opportunity, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-emerald-100 rounded-xl">
                      <opportunity.icon className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900">{opportunity.title}</h3>
                  </div>
                  <p className="text-slate-600 mb-6">{opportunity.description}</p>
                  <div className="space-y-2">
                    {opportunity.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-emerald-500" />
                        <span className="text-sm text-slate-600">{feature}</span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Partners</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Join these leading organizations in supporting chemistry education
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentPartners.map((partner, index) => (
                <div key={index} className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-xl flex items-center justify-center">
                      <Building className="h-8 w-8 text-gray-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{partner.name}</h3>
                      <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        partner.tier === "Platinum" ? "bg-purple-100 text-purple-800" :
                        partner.tier === "Gold" ? "bg-amber-100 text-amber-800" :
                        partner.tier === "Silver" ? "bg-slate-100 text-slate-800" :
                        "bg-orange-100 text-orange-800"
                      }`}>
                        {partner.tier}
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-600 text-sm">{partner.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-r from-emerald-600 to-sky-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Make an Impact?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join us in creating an unforgettable experience for the world's brightest chemistry students
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group">
                Become a Partner
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 px-8 py-4 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                Download Partnership Brochure
              </Button>
            </div>
            <p className="text-white/80 text-sm mt-6">
              Contact us at partnerships@icho2026.uz or call +998 71 123 4567
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
