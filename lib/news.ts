// lib/news.ts
export type NewsItem = {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  contentHtml: string; // pre-rendered HTML
  cover?: string;
  published_at: string; // ISO
};

const BASE = process.env.NEWS_API_URL || ""; // e.g. https://api.yourdomain.com/press/news

export async function getNewsList(): Promise<NewsItem[]> {
  if (!BASE) {
    // Demo data when no API is configured
    return [
      {
        id: 1,
        slug: "icho-2026-scientific-committee",
        title: "IChO 2026: Meeting of the Scientific Committee",
        excerpt:
          "Preparations for the International Chemistry Olympiad (IChO 2026), scheduled to be held in Uzbekistan in 2026, are actively underway. Today, the meeting of the Scientific Committee responsible for organizing the Olympiad at the highest level has begun.",
        contentHtml: `
        
          <h2>IChO 2026: Meeting of the Scientific Committee Launched with International and Local Experts</h2>
          <p>🇺🇿 Preparations for the International Chemistry Olympiad (IChO 2026), scheduled to be held in Uzbekistan in 2026, are actively underway. Today, the meeting of the Scientific Committee responsible for organizing the Olympiad at the highest level has begun.</p>
          <p>✅ The meeting is attended by Vice President of the Academy of Sciences, Academician Sh. Sagdullaev; Deputy Minister of Preschool and School Education A. Turdiyev; Director of the Center for Academic Olympiads and member of the IChO Steering Committee T. Shermatov; as well as 12 international experts from the United Kingdom, USA, Switzerland, Sweden, Uruguay, Czech Republic, Turkey, Russia, Saudi Arabia, and 30 local experts.</p>
          <p>⚡️ For reference: professors, leading specialists, and scientists have been engaged in both the international and local Scientific Committees to support the organization of the Olympiad.</p>
          <h3>In particular:</h3>
          <p>➡️ International Scientific Committee includes:</p>
          <ul>
            <li>➖ Scholars from Harvard University, Bilkent University, and the Swiss Federal Institute of Technology (ETH Zurich)</li>
            <li>➖ Professors in the field from Lomonosov Moscow State University and the University of Chemistry and Technology in Prague</li>
          </ul>
          <p>➡️ Local Scientific Committee includes:</p>
          <ul>
            <li>➖ Distinguished professors in the field of chemistry, young scientists conducting research at prestigious foreign universities, as well as former Olympiad winners</li>
          </ul>
          <p>ℹ️ As a reminder, the Center for Academic Olympiads is carrying out large-scale and systematic preparations to host this prestigious international competition at the highest level.</p>
          <p>❗️ The activities will continue until September 28.</p>

          <div class="my-6 space-y-4">
  <img src="/news/opening1.jpg" alt="Opening ceremony 1" class="rounded-xl shadow-md" />
  <img src="/news/opening2.jpg" alt="Opening ceremony 2" class="rounded-xl shadow-md" />
  <img src="/news/opening3.jpg" alt="Opening ceremony 3" class="rounded-xl shadow-md" />
</div>


        `,
        cover: "/news/frame.jpg",
        published_at: new Date().toISOString(),
      },
    ];
  }

  const res = await fetch(`${BASE}`, { next: { revalidate: 1800 } });
  if (!res.ok) throw new Error("Failed to fetch news");
  return res.json();
}

export async function getNewsBySlug(slug: string): Promise<NewsItem | null> {
  if (!BASE) {
    // Demo single item when no API is configured
    if (slug !== "icho-2026-scientific-committee") return null;
    const [first] = await getNewsList();
    return first;
  }

  const res = await fetch(`${BASE}/${slug}`, { next: { revalidate: 1800 } });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Failed to fetch news item");
  return res.json();
}
