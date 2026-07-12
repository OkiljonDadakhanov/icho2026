export const GALLERY_BATCH_SIZE = 24;

export function getNextGalleryCount(
  currentCount: number,
  totalCount: number,
): number {
  return Math.min(currentCount + GALLERY_BATCH_SIZE, totalCount);
}
