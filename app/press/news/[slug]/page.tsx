import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getNewsBySlug, getNewsList } from "@/lib/news";

type Params = { slug: string };

export async function generateStaticParams() {
  const news = await getNewsList();
  return news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = await getNewsBySlug(slug);
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

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const item = await getNewsBySlug(slug);
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
            <Image
              src={item.cover}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>
        )}

        <div
          className="prose prose-slate prose-lg max-w-none 
            prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-slate-800
            prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
            prose-strong:text-slate-900 prose-strong:font-semibold
            prose-ul:my-6 prose-ul:space-y-3
            prose-li:text-slate-700 prose-li:leading-relaxed
            prose-a:text-emerald-700 prose-a:no-underline hover:prose-a:text-emerald-600 hover:prose-a:underline
            prose-img:rounded-xl prose-img:shadow-lg prose-img:my-8 prose-img:w-full
            [&_.hashtags]:inline-flex [&_.hashtags]:gap-2 [&_.hashtags]:mb-8 [&_.hashtags]:flex-wrap
            [&_.hashtag]:px-3 [&_.hashtag]:py-1.5 [&_.hashtag]:rounded-full [&_.hashtag]:bg-emerald-100 [&_.hashtag]:text-emerald-700 [&_.hashtag]:text-sm [&_.hashtag]:font-medium
            [&_.emoji-text]:text-2xl [&_.emoji-text]:mb-6 [&_.emoji-text]:text-center [&_.emoji-text]:leading-none
            [&_.info-box]:bg-slate-50 [&_.info-box]:border-l-4 [&_.info-box]:border-emerald-500 [&_.info-box]:p-6 [&_.info-box]:rounded-r-lg [&_.info-box]:my-6 [&_.info-box]:shadow-sm
            [&_.highlight-box]:bg-gradient-to-r [&_.highlight-box]:from-emerald-50 [&_.highlight-box]:to-teal-50 [&_.highlight-box]:p-6 [&_.highlight-box]:rounded-xl [&_.highlight-box]:border [&_.highlight-box]:border-emerald-200 [&_.highlight-box]:my-6 [&_.highlight-box]:shadow-sm
            [&_.social-links]:flex [&_.social-links]:flex-wrap [&_.social-links]:gap-3 [&_.social-links]:mt-8 [&_.social-links]:pt-6 [&_.social-links]:border-t [&_.social-links]:border-slate-200
            [&_.image-gallery]:grid [&_.image-gallery]:grid-cols-1 [&_.image-gallery]:md:grid-cols-2 [&_.image-gallery]:gap-6 [&_.image-gallery]:my-8
            [&_.image-gallery_img]:w-full [&_.image-gallery_img]:h-auto [&_.image-gallery_img]:rounded-xl [&_.image-gallery_img]:shadow-lg
            [&_.image-gallery>img]:w-full [&_.image-gallery>img]:h-auto [&_.image-gallery>img]:rounded-xl [&_.image-gallery>img]:shadow-lg"
          dangerouslySetInnerHTML={{ __html: item.contentHtml }}
        />
      </article>
    </section>
  );
}
