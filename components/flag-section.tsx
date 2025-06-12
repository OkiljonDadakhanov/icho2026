export function FlagSection() {
  const flagColors = [
    {
      color: "Thallium Green",
      element: "Tl",
      description: "Represents growth and harmony in scientific discovery",
      bgColor: "bg-green-500",
      textColor: "text-green-700",
    },
    {
      color: "Calcium Orange",
      element: "Ca",
      description: "Symbolizes energy and enthusiasm for chemistry",
      bgColor: "bg-orange-500",
      textColor: "text-orange-700",
    },
    {
      color: "Sulfur Yellow",
      element: "S",
      description: "Represents brightness and intellectual illumination",
      bgColor: "bg-yellow-500",
      textColor: "text-yellow-700",
    },
    {
      color: "Copper Blue-Green",
      element: "Cu",
      description: "Symbolizes stability and scientific precision",
      bgColor: "bg-teal-500",
      textColor: "text-teal-700",
    },
    {
      color: "Iron Red",
      element: "Fe",
      description: "Represents strength and determination in learning",
      bgColor: "bg-red-500",
      textColor: "text-red-700",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The IChO Flag</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Introduced in 1985 and redesigned for the 40th and 50th anniversaries, the IChO flag represents the unity of
            chemistry through elemental colors, each symbolizing different aspects of scientific pursuit.
          </p>
        </div>

        {/* Flag Visual */}
        <div className="mb-16">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid grid-cols-5 h-32 rounded-lg overflow-hidden">
                {flagColors.map((color, index) => (
                  <div key={index} className={`${color.bgColor} flex items-center justify-center`}>
                    <span className="text-white font-bold text-xl">{color.element}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Color Meanings */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {flagColors.map((color, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 ${color.bgColor} rounded-full flex items-center justify-center mr-4`}>
                  <span className="text-white font-bold">{color.element}</span>
                </div>
                <h3 className={`text-xl font-semibold ${color.textColor}`}>{color.color}</h3>
              </div>
              <p className="text-gray-600">{color.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
