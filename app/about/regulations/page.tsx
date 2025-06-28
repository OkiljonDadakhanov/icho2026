"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactUsPage() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-sky-500/5 to-amber-500/5"></div>
        <div className="absolute top-24 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-2xl rotate-12 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-sky-400/20 to-sky-600/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-3xl -rotate-6 animate-float-slow"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      <main className="relative z-10 flex-grow container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-12 text-center text-slate-900">
          Contact Us
        </h1>
        <div className="max-w-3xl mx-auto space-y-12 text-slate-800">
          <div>
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Organizing Committee
            </h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 mr-3 mt-1 text-emerald-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Address:</h3>
                  <p>Science Olympiad Center </p>
                  <p>100099, Otchopar-1, Darvozakent Street, House 60</p>
                  <p>Yunusobod District, Tashkent, Uzbekistan</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-6 w-6 mr-3 mt-1 text-emerald-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Email:</h3>
                  <p>info@olympcenter.uz</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 mr-3 mt-1 text-emerald-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold">Phone:</h3>
                  <p>+998 77 550 33 66</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-semibold mb-3">Office Hours</h3>
            <p className="text-slate-700">
              Monday – Friday: 9:00 AM – 6:00 PM (GMT+5, Tashkent Time)
            </p>
           
          </div>
        </div>
      </main>
    </section>
  );
}
