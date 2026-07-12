import type { NewsItem } from "./news";

export type NewsGalleryItem = {
  id: string;
  url: string;
  caption: string;
  postTitle: string;
  postHref: string;
};

type ArticleImage = {
  url: string;
  caption: string;
};

function readAttribute(tag: string, attribute: string): string {
  const pattern = new RegExp(`${attribute}\\s*=\\s*(?:"([^"]*)"|'([^']*)')`, "i");
  const match = pattern.exec(tag);
  return match?.[1] ?? match?.[2] ?? "";
}

function extractArticleImages(contentHtml: string): ArticleImage[] {
  return [...contentHtml.matchAll(/<img\b[^>]*>/gi)]
    .map(([tag]) => ({
      url: readAttribute(tag, "src").trim(),
      caption: readAttribute(tag, "alt").trim(),
    }))
    .filter((image) => image.url.length > 0);
}

export function buildNewsGallery(posts: NewsItem[]): NewsGalleryItem[] {
  const seenUrls = new Set<string>();
  const gallery: NewsGalleryItem[] = [];

  const addImage = (item: NewsGalleryItem) => {
    if (seenUrls.has(item.url)) return;
    seenUrls.add(item.url);
    gallery.push(item);
  };

  for (const post of posts) {
    const shared = {
      postTitle: post.title,
      postHref: `/press/news/${post.slug}`,
    };

    if (post.cover) {
      addImage({
        ...shared,
        id: `${post.id}:cover`,
        url: post.cover,
        caption: post.title,
      });
    }

    for (const image of [...post.images].sort(
      (left, right) => left.sortOrder - right.sortOrder || left.id - right.id,
    )) {
      addImage({
        ...shared,
        id: `${post.id}:managed:${image.id}`,
        url: image.url,
        caption: image.caption || post.title,
      });
    }

    extractArticleImages(post.contentHtml).forEach((image, index) => {
      addImage({
        ...shared,
        id: `${post.id}:legacy:${index}`,
        url: image.url,
        caption: image.caption || post.title,
      });
    });
  }

  return gallery;
}
