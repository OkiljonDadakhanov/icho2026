import type { Metadata } from "next";
import { FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing use of the IChO 2026 website and official public materials.",
};

export default function TermsPage() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-24 left-12 h-32 w-32 rotate-12 rounded-2xl bg-gradient-to-br from-emerald-400/20 to-emerald-600/20" />
        <div className="absolute top-44 right-20 h-24 w-24 rounded-full bg-gradient-to-br from-sky-400/20 to-sky-600/20" />
        <div className="absolute bottom-28 left-24 h-40 w-40 -rotate-6 rounded-3xl bg-gradient-to-br from-amber-400/20 to-amber-600/20" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="space-y-10 rounded-[2rem] border border-white/50 bg-white/80 p-8 shadow-xl backdrop-blur-sm sm:p-12">
          <header className="space-y-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/70 px-4 py-2 text-sm font-medium text-slate-600">
              <FileText className="h-4 w-4 text-emerald-500" />
              <span>IChO 2026 Website Terms</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-slate-600">
              These terms apply to use of the official IChO 2026 website and
              its publicly available materials.
            </p>
          </header>

          <div className="space-y-8 text-slate-700">
            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-slate-900">
                Website Use
              </h2>
              <p>
                You may use this website to access event information, official
                documents, schedules, news, and contact details related to the
                58th International Chemistry Olympiad.
              </p>
              <p>
                You agree not to misuse the site, attempt unauthorized access,
                interfere with service availability, or upload malicious
                material through any official channel connected to the site.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-slate-900">
                Accuracy of Information
              </h2>
              <p>
                The organizing committee aims to keep public information
                accurate and current. Event details may still change as planning
                progresses, including schedules, travel guidance, and published
                materials.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-slate-900">
                Intellectual Property
              </h2>
              <p>
                Website content, branding, official documents, and media remain
                subject to the rights of the IChO 2026 organizing committee or
                their respective owners unless stated otherwise.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-slate-900">
                External Services
              </h2>
              <p>
                The website may link to third-party platforms such as social
                media, document hosting, or partner websites. Those services
                operate under their own terms and privacy policies.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-2xl font-semibold text-slate-900">
                Contact
              </h2>
              <p>
                Questions about website usage or official materials can be sent
                to <span className="font-medium">icho2026@olympcenter.uz</span>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
