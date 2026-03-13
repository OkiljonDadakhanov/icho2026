import { Download } from "lucide-react";

export const metadata = {
  title: "Press Release",
  description:
    "Official press release for the 58th International Chemistry Olympiad (IChO 2026) in Tashkent, Uzbekistan.",
};

export default function PressPage() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(1100px_600px_at_10%_0%,rgba(16,185,129,0.08),transparent_50%),radial-gradient(1000px_500px_at_90%_10%,rgba(56,189,248,0.08),transparent_55%)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:44px_44px]" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-10">
        <header className="text-center space-y-4">
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-white/70 px-4 py-1.5 text-sm text-emerald-700 backdrop-blur">
            <span className="font-medium">Press Center</span>
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Official Press Release
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-slate-700">
            Download the official press release for the 58th International
            Chemistry Olympiad (IChO 2026), hosted in Tashkent, Uzbekistan.
          </p>
        </header>

        <div className="flex justify-center">
          <a
            href="/press-release.docx"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white text-base font-medium shadow-lg hover:bg-emerald-700 hover:shadow-xl hover:scale-105 transition-all"
          >
            <Download className="h-5 w-5" />
            Download Press Release (DOCX)
          </a>
        </div>

     
      </div>
    </section>
  );
}

