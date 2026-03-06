import type { Metadata } from "next";
import { Mail, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy notice for the IChO 2026 website and organizing committee contact channels.",
};

const contactItems = [
  "icho2026@olympcenter.uz",
  "info.icho2026@gmail.com",
];

export default function PrivacyPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-24 left-10 h-32 w-32 rotate-12 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-emerald-600/20" />
        <div className="absolute top-40 right-20 h-24 w-24 rounded-full bg-gradient-to-br from-sky-400/20 to-sky-600/20" />
        <div className="absolute bottom-32 left-20 h-40 w-40 -rotate-6 rounded-3xl bg-gradient-to-br from-amber-400/20 to-amber-600/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-10 rounded-[2rem] border border-white/50 bg-white/80 p-8 shadow-xl backdrop-blur-sm sm:p-12">
          <header className="space-y-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/70 px-4 py-2 text-sm font-medium text-slate-600">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              <span>IChO 2026 Website Policy</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              This website is operated for the 58th International Chemistry
              Olympiad in Tashkent, Uzbekistan.
            </p>
          </header>

          <div className="space-y-8 text-slate-700">
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-slate-900">
                Information We Receive
              </h2>
              <p>
                We may receive the information you share with the organizing
                committee through contact forms, email, accreditation,
                partnership outreach, or other official registration channels.
              </p>
              <p>
                This may include names, institutional details, contact
                information, delegation information, and files you voluntarily
                provide.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-slate-900">
                How We Use It
              </h2>
              <p>
                Information is used to organize the Olympiad, respond to
                inquiries, coordinate logistics, publish official event updates,
                and maintain website operations and security.
              </p>
              <p>
                We do not sell participant or visitor information through this
                website.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-slate-900">
                Analytics and Technical Data
              </h2>
              <p>
                The site uses analytics tools to understand traffic and improve
                website performance. These services may collect technical
                metadata such as page visits, browser information, and general
                interaction data.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-slate-900">
                Contact
              </h2>
              <p>
                For privacy-related questions or correction requests, contact
                the organizing committee:
              </p>
              <div className="space-y-2 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                {contactItems.map((email) => (
                  <div key={email} className="flex items-center gap-3">
                    <Mail className="h-4 w-4 text-emerald-600" />
                    <span>{email}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
