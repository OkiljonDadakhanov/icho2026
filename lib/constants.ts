// Event Information
export const EVENT = {
  name: "58th International Chemistry Olympiad",
  shortName: "IChO 2026",
  year: 2026,
  edition: 58,
  startDate: "2026-07-10",
  endDate: "2026-07-19",
  targetDate: new Date("2026-07-10T00:00:00Z"),
  location: {
    city: "Tashkent",
    country: "Uzbekistan",
  },
  tagline: "Transforming Elements, Connecting the World.",
} as const;

// Social Media Links
export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/share/1AZF86Kgxk/",
  telegram: "https://t.me/icho2026",
  linkedin: "https://www.linkedin.com/company/icho2026/",
  instagram: "https://www.instagram.com/icho_2026/",
  youtube: "https://www.youtube.com/@IChO2026",
} as const;

// Contact Information
export const CONTACT = {
  email: "info@icho2026.uz",
  website: "https://icho2026.uz",
} as const;

// Analytics
export const ANALYTICS = {
  yandexMetrikaId: process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID || "106225653",
} as const;

// API Endpoints
export const API = {
  newsUrl: process.env.NEWS_API_URL || "",
} as const;

// Statistics displayed on the site
export const STATS = {
  countries: "90+",
  yearsOfHistory: "55+",
  participants: "350+",
} as const;
