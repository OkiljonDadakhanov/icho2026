import Image from "next/image";
import Link from "next/link";
import { getNewsList } from "@/lib/news";
import { BookOpen } from "lucide-react";

export const metadata = {
  title: "News",
  description: "Latest announcements and press updates.",
};

export default async function NewsPage() {
  const items = await getNewsList();

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(1100px_600px_at_10%_0%,rgba(16,185,129,0.08),transparent_50%),radial-gradient(1000px_500px_at_90%_10%,rgba(56,189,248,0.08),transparent_55%)]">
      {/* subtle grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:44px_44px]" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-14">
        {/* Header */}
        <header className="flex flex-col items-center text-center gap-6">
          <div className="relative h-16 w-16 sm:h-20 sm:w-20">
            <Image
              src="/images/icho.png"
              alt="Logo"
              fill
              sizes="80px"
              className="object-contain"
              priority
            />
          </div>
          <div className="space-y-3">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-emerald-200/60 bg-white/70 px-4 py-1.5 text-sm text-emerald-700 backdrop-blur">
              <BookOpen className="h-4 w-4" />
              Press & News
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Latest News & Announcements
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-slate-700">
              Updates, milestones, and highlights.
            </p>
          </div>
        </header>

        {/* News grid */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.length === 0 && (
            <div className="sm:col-span-2 lg:col-span-3 rounded-2xl border border-slate-200 bg-white/90 p-6 text-center text-slate-700 shadow-sm backdrop-blur">
              No news yet. Check back soon.
            </div>
          )}

          {items.map((n) => (
            <article
              key={n.id}
              className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur transition hover:shadow-md"
            >
              {n.cover && (
                <div className="relative mb-3 h-40 w-full overflow-hidden rounded-xl">
                  <Image
                    src={n.cover}
                    alt={n.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <time className="text-xs uppercase tracking-wide text-slate-500">
                {new Date(n.published_at).toLocaleDateString()}
              </time>
              <h2 className="mt-1 line-clamp-2 text-lg font-semibold text-slate-900">
                {n.title}
              </h2>
              <p className="mt-2 line-clamp-3 text-slate-700">{n.excerpt}</p>

              <Link
                href={`/press/news/${n.slug}`}
                className="mt-4 inline-block text-sm font-medium text-emerald-700 hover:text-emerald-600"
              >
                Read more →
              </Link>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
}
