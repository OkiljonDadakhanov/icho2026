import { TrendingUp, Award, Globe2, BookOpen } from "lucide-react"

export function Stats() {
  const stats = [
    {
      icon: Globe2,
      number: "90+",
      label: "Participating Countries",
      description: "From every continent",
    },
    {
      icon: Award,
      number: "55+",
      label: "Years of Excellence",
      description: "Since 1968",
    },
    {
      icon: BookOpen,
      number: "10",
      label: "Hours of Competition",
      description: "5h theoretical + 5h practical",
    },
    {
      icon: TrendingUp,
      number: "350+",
      label: "Young Scientists",
      description: "Competing annually",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">IChO by the Numbers</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-full mb-6 group-hover:scale-110 transition-transform">
                <stat.icon className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
              <div className="text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
