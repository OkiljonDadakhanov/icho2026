import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">IChO</span>
              </div>
              <div>
                <span className="text-xl font-bold">IChO 2026</span>
                <span className="text-sm text-gray-400 block">Tashkent, Uzbekistan</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6">Fostering global talent and unity through chemistry since 1968.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About IChO
                </Link>
              </li>
              <li>
                <Link href="/partnership" className="text-gray-400 hover:text-white transition-colors">
                  Partnership
                </Link>
              </li>
              <li>
                <Link href="/uzbekistan" className="text-gray-400 hover:text-white transition-colors">
                  Uzbekistan
                </Link>
              </li>
              <li>
                <Link href="/hosting" className="text-gray-400 hover:text-white transition-colors">
                  Hosting Info
                </Link>
              </li>
              <li>
                <Link href="/results" className="text-gray-400 hover:text-white transition-colors">
                  Results
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/news" className="text-gray-400 hover:text-white transition-colors">
                  News & Media
                </Link>
              </li>
              <li>
                <Link href="/results/exams" className="text-gray-400 hover:text-white transition-colors">
                  Past Exams
                </Link>
              </li>
              <li>
                <Link href="/results/medalists" className="text-gray-400 hover:text-white transition-colors">
                  Medalists
                </Link>
              </li>
              <li>
                <Link href="/hosting/travel" className="text-gray-400 hover:text-white transition-colors">
                  Travel Info
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-500" />
                <span className="text-gray-400">info@icho2026.uz</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-500" />
                <span className="text-gray-400">+998 71 XXX XX XX</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-500" />
                <span className="text-gray-400">Tashkent, Uzbekistan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 IChO 2026 Organizing Committee. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
