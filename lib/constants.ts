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
  facebook: "https://www.facebook.com/InternationalChemistryOlympiad",
  telegram: "https://t.me/icho_uzbekistan",
  linkedin: "https://www.linkedin.com/company/international-chemistry-olympiad-2026/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_companies%3B0c5cL%2F8CQT6wetpDyd9KYA%3D%3D",
  instagram: "https://www.instagram.com/icho.official/",
  youtube: "https://www.youtube.com/@icho2026uz",
} as const;

// Contact Information
export const CONTACT = {
  email: "icho2026@olympcenter.uz",
  emailInfo: "info.icho2026@gmail.com",
  website: "https://icho2026.uz",
} as const;

// Analytics
export const ANALYTICS = {
  yandexMetrikaId: process.env.NEXT_PUBLIC_YANDEX_METRIKA_ID || "106225653",
} as const;

// API Endpoints
export const API = {
  newsUrl: process.env.NEWS_API_URL || "https://api.icho2026.uz/api/press/news",
} as const;

// Statistics displayed on the site
export const STATS = {
  countries: "90+",
  yearsOfHistory: "55+",
  participants: "350+",
} as const;
