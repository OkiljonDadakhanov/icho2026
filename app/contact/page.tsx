import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactUsPage() {
  return (
    <>
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-12 text-center">Contact Us</h1>
        <div className="max-w-3xl mx-auto space-y-10">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">Organizing Committee</h2>
            <div className="space-y-6 text-gray-700">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 mt-1 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Address:</h3>
                  <p>IChO 2026 Organizing Committee</p>
                  <p>Tashkent State Technical University (or relevant institution)</p>
                  <p>123 University Avenue, Tashkent, Uzbekistan</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-3 mt-1 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Email:</h3>
                  <p>info@icho2026.uz</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-3 mt-1 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Phone:</h3>
                  <p>+998 71 XXX XX XX (Local)</p>
                  <p>+998 71 YYY YY YY (International)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Office Hours</h3>
            <p className="text-gray-700">Monday – Friday: 9:00 AM – 5:00 PM (Tashkent Time, UZT)</p>
          </div>
        </div>
      </main>
    </>
  )
}
