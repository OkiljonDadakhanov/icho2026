import type { MetadataRoute } from "next";

import { getNewsList } from "@/lib/news";

const BASE_URL = "https://www.icho2026.uz";

export const dynamic = "force-static";

const staticRoutes: Array<{
  path: string;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
  priority: number;
}> = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/icho-2026", changeFrequency: "monthly", priority: 0.9 },
  { path: "/program", changeFrequency: "monthly", priority: 0.9 },
  { path: "/partnership", changeFrequency: "monthly", priority: 0.8 },
  { path: "/uzbekistan", changeFrequency: "monthly", priority: 0.8 },
  { path: "/travel-details", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about/regulations", changeFrequency: "yearly", priority: 0.7 },
  { path: "/about/final-report", changeFrequency: "yearly", priority: 0.6 },
  { path: "/history", changeFrequency: "yearly", priority: 0.6 },
  { path: "/previous-icho", changeFrequency: "monthly", priority: 0.6 },
  { path: "/future-icho", changeFrequency: "monthly", priority: 0.6 },
  { path: "/key-dates", changeFrequency: "monthly", priority: 0.7 },
  { path: "/competitions", changeFrequency: "monthly", priority: 0.8 },
  { path: "/participants", changeFrequency: "monthly", priority: 0.7 },
  { path: "/exam-info", changeFrequency: "monthly", priority: 0.7 },
  { path: "/problems", changeFrequency: "monthly", priority: 0.7 },
  { path: "/results", changeFrequency: "monthly", priority: 0.7 },
  { path: "/press", changeFrequency: "weekly", priority: 0.8 },
  { path: "/press/news", changeFrequency: "weekly", priority: 0.8 },
  { path: "/catalyzer", changeFrequency: "monthly", priority: 0.7 },
  { path: "/gallery", changeFrequency: "monthly", priority: 0.7 },
  { path: "/report", changeFrequency: "monthly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const newsItems = await getNewsList();

  return [
    ...staticRoutes.map(({ path, changeFrequency, priority }) => ({
      url: `${BASE_URL}${path}`,
      changeFrequency,
      priority,
    })),
    ...newsItems.map((item) => ({
      url: `${BASE_URL}/press/news/${item.slug}`,
      lastModified: item.published_at,
      changeFrequency: "weekly" as const,
      priority: 0.6,
    })),
  ];
}
