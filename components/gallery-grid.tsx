/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Link from "next/link";

import {
  GALLERY_BATCH_SIZE,
  getNextGalleryCount,
} from "@/lib/gallery-batching";
import type { NewsGalleryItem } from "@/lib/news-gallery";

type GalleryGridProps = {
  pictures: NewsGalleryItem[];
};

export default function GalleryGrid({ pictures }: GalleryGridProps) {
  const [visibleCount, setVisibleCount] = useState(
    Math.min(GALLERY_BATCH_SIZE, pictures.length),
  );
  const visiblePictures = pictures.slice(0, visibleCount);
  const remainingCount = pictures.length - visibleCount;

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visiblePictures.map((picture, index) => (
          <Link
            key={picture.id}
            href={picture.postHref}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg [content-visibility:auto]"
          >
            <div className="aspect-[4/3] overflow-hidden bg-slate-100">
              <img
                src={picture.url}
                alt={picture.caption}
                width={640}
                height={480}
                loading={index < 6 ? "eager" : "lazy"}
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="min-h-24 space-y-1 border-t border-slate-100 p-4">
              <p className="line-clamp-2 text-sm font-medium text-slate-900">
                {picture.caption}
              </p>
              <p className="line-clamp-1 text-xs text-slate-500">
                {picture.postTitle}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="flex flex-col items-center gap-3">
        <p className="text-sm text-slate-500">
          Showing {visibleCount} of {pictures.length} pictures
        </p>
        {remainingCount > 0 && (
          <button
            type="button"
            onClick={() =>
              setVisibleCount((currentCount) =>
                getNextGalleryCount(currentCount, pictures.length),
              )
            }
            className="rounded-xl bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
          >
            Load {Math.min(GALLERY_BATCH_SIZE, remainingCount)} more
          </button>
        )}
      </div>
    </div>
  );
}
