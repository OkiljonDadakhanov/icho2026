import { Award, Globe, Users, Beaker } from "lucide-react"

export function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            About the International Chemistry Olympiad
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The International Chemistry Olympiad (IChO) is the world's most prestigious annual competition for
              secondary school chemistry students. Since its inception in 1968 in Czechoslovakia, the IChO has grown to
              include over 80 countries, bringing together the brightest young minds in chemistry from around the globe.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Each year, exceptional students compete in both theoretical and practical examinations, demonstrating
              their mastery of chemistry through rigorous 5-hour sessions that test their knowledge, problem-solving
              abilities, and laboratory skills.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The competition celebrates individual achievement rather than team scores, with medals and honors awarded
              to recognize outstanding performance and foster international scientific collaboration.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">80+</h3>
              <p className="text-gray-600">Countries Participating</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">300+</h3>
              <p className="text-gray-600">Young Scientists</p>
            </div>
            <div className="text-center p-6 bg-orange-50 rounded-lg">
              <Beaker className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">10</h3>
              <p className="text-gray-600">Hours of Competition</p>
            </div>
            <div className="text-center p-6 bg-red-50 rounded-lg">
              <Award className="h-12 w-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">55+</h3>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
