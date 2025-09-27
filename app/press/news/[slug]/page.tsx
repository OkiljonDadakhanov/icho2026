import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsBySlug } from "@/lib/news";

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props) {
  const item = await getNewsBySlug(params.slug);
  if (!item) return { title: "News" };
  return {
    title: `${item.title} – News`,
    description: item.excerpt,
    openGraph: {
      title: item.title,
      description: item.excerpt,
      images: item.cover ? [item.cover] : [],
    },
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const item = await getNewsBySlug(params.slug);
  if (!item) return notFound();

  return (
    <section className="relative overflow-hidden bg-[radial-gradient(1100px_600px_at_10%_0%,rgba(16,185,129,0.08),transparent_50%),radial-gradient(1000px_500px_at_90%_10%,rgba(56,189,248,0.08),transparent_55%)]">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.04)_1px,transparent_1px)] bg-[size:44px_44px]" />

      <article className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <nav className="mb-6 text-sm text-slate-600">
          <Link href="/press/news" className="hover:text-slate-900">
            News
          </Link>{" "}
          / <span className="text-slate-800">{item.title}</span>
        </nav>

        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {item.title}
        </h1>
        <time className="mt-2 block text-sm text-slate-600">
          {new Date(item.published_at).toLocaleString()}
        </time>

        {item.cover && (
          <div className="relative my-6 h-72 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white/90 shadow-sm">
            <Image src={item.cover} alt={item.title} fill className="object-cover" />
          </div>
        )}

        <div
          className="prose prose-slate max-w-none"
          dangerouslySetInnerHTML={{ __html: item.contentHtml }}
        />
      </article>
    </section>
  );
}
