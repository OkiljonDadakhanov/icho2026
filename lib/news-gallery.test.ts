import assert from "node:assert/strict";
import test from "node:test";

import { buildNewsGallery } from "./news-gallery.ts";
import type { NewsItem } from "./news.ts";

const post: NewsItem = {
  id: 1,
  slug: "opening-ceremony",
  title: "Opening ceremony",
  excerpt: "Highlights",
  contentHtml: `
    <p><img src="/news/legacy.jpg" alt="Legacy moment" /></p>
    <img alt="Duplicate cover" src="https://content-api.icho2026.uz/media/cover.jpg" />
  `,
  cover: "https://content-api.icho2026.uz/media/cover.jpg",
  images: [
    {
      id: 10,
      url: "https://content-api.icho2026.uz/media/news/gallery/extra.jpg",
      caption: "Team photo",
      sortOrder: 0,
    },
  ],
  published_at: "2026-07-12T12:00:00+05:00",
};

test("collects cover, managed, and legacy article pictures without duplicates", () => {
  const gallery = buildNewsGallery([post]);

  assert.deepEqual(
    gallery.map(({ url, caption }) => ({ url, caption })),
    [
      {
        url: "https://content-api.icho2026.uz/media/cover.jpg",
        caption: "Opening ceremony",
      },
      {
        url: "https://content-api.icho2026.uz/media/news/gallery/extra.jpg",
        caption: "Team photo",
      },
      { url: "/news/legacy.jpg", caption: "Legacy moment" },
    ],
  );
});

test("uses the post title when an additional picture has no caption", () => {
  const gallery = buildNewsGallery([
    {
      ...post,
      cover: "",
      contentHtml: "",
      images: [{ id: 11, url: "/media/uncaptioned.jpg", caption: "", sortOrder: 0 }],
    },
  ]);

  assert.equal(gallery[0].caption, "Opening ceremony");
  assert.equal(gallery[0].postHref, "/press/news/opening-ceremony");
});
