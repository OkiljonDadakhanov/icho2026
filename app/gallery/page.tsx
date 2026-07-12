import { Images } from "lucide-react";

import GalleryGrid from "@/components/gallery-grid";
import { getNewsList } from "@/lib/news";
import { buildNewsGallery } from "@/lib/news-gallery";

export const metadata = {
  title: "Gallery",
  description: "Photos and highlights from IChO news, events, labs, and ceremonies.",
};

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
  const posts = await getNewsList({ live: true });
  const pictures = buildNewsGallery(posts);

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(1100px_600px_at_10%_0%,rgba(16,185,129,0.08),transparent_50%),radial-gradient(1000px_500px_at_90%_10%,rgba(56,189,248,0.08),transparent_55%)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:44px_44px]" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-12 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <header className="flex flex-col items-center gap-5 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-white/70 px-4 py-1.5 text-sm text-emerald-700 backdrop-blur">
            <Images className="h-4 w-4" />
            Media Gallery
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Gallery
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-slate-700">
              Photos and highlights collected from our latest news, events,
              labs, and ceremonies.
            </p>
          </div>
        </header>

        {pictures.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white/90 p-8 text-center text-slate-700 shadow-sm">
            No pictures have been published yet.
          </div>
        ) : (
          <GalleryGrid pictures={pictures} />
        )}
      </div>
    </section>
  );
}
