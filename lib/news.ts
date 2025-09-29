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
          "Preparations for IChO 2026 are actively underway. The Scientific Committee meeting has launched with international and local experts.",
        contentHtml: `
          <p><b>#IChO_2026<br/>#Preparation</b></p>

          <h2>IChO 2026: Meeting of the Scientific Committee Launched with International and Local Experts</h2>

          <p>🇺🇿 Preparations for the International Chemistry Olympiad (IChO 2026), scheduled to be held in Uzbekistan in 2026, are actively underway.</p>

          <p>✅ The meeting is attended by Vice President of the Academy of Science, Academician Sh. Sagdullaev; Deputy Minister of Preschool and School Education A. Turdiyev; Director of the Science Olympiad Center and member of the IChO Steering Committee T. Shermatov; as well as 12 international experts from the United Kingdom, USA, Switzerland, Sweden, Uruguay, Czech Republic, Turkey, Russia, Saudi Arabia, and 30 local experts.</p>

          <p>⚡️ For reference: professors, leading specialists, and scientists have been engaged in both the international and national Scientific Committees to support the organization of the Olympiad.</p>

          <h3>In particular:</h3>
          <p>➡️ International Scientific Committee includes:</p>
          <ul>
            <li>➖ Scholars from Harvard University, Bilkent University, and the Swiss Federal Institute of Technology (ETH Zurich)</li>
            <li>➖ Professors in the field from Lomonosov Moscow State University and the University of Chemistry and Technology in Prague</li>
          </ul>

          <p>➡️ National Scientific Committee includes:</p>
          <ul>
            <li>➖ Distinguished professors in the field of chemistry, young scientists conducting research at prestigious foreign universities, as well as former Olympiad winners</li>
          </ul>

          <p>ℹ️ As a reminder, the Science Olympiad Center is carrying out large-scale and systematic preparations to host this prestigious international Olympiad at the highest level.</p>

          <p>❗️ The meeting will continue until September 28.</p>

          <div class="my-6 space-y-4">
            <img src="/news/opening1.jpg" alt="Opening ceremony 1" class="rounded-xl shadow-md" />
            <img src="/news/opening2.jpg" alt="Opening ceremony 2" class="rounded-xl shadow-md" />
            <img src="/news/opening3.jpg" alt="Opening ceremony 3" class="rounded-xl shadow-md" />
          </div>
        `,
        cover: "/news/frame.jpg",
        // Hard-coded to 26 September 2025, 14:18 (UTC+5: Tashkent)
        published_at: "2025-09-26T14:18:40+05:00",
      },
      {
        id: 2,
        slug: "icho-2026-venues-inspection-day-2",
        title: "IChO 2026: Venues for the Olympiad Inspected",
        excerpt:
          "On September 27, Scientific Committee members inspected potential exam venues and participant hotels, and reviewed practical tasks under real lab conditions.",
        contentHtml: `
          <p><b>#Preparation<br/>#Day_2</b></p>

          <h2>IChO 2026: Venues for the Olympiad Inspected</h2>

          <p>🇺🇿 Preparations for the International Chemistry Olympiad (IChO 2026), scheduled to be held in Uzbekistan in 2026, are progressing intensively.</p>

          <p>On September 27, members of the Scientific Committee responsible for ensuring the high-level organization of the Olympiad visited the possible venues.</p>

          <p>📍 In the first half of the day, the Scientific Committee members were introduced to potential locations for the Olympiad examinations as well as the hotels being prepared for participants. Afterwards, the experts reviewed the practical tasks of the Olympiad under real laboratory conditions.</p>

          <p>⚡️ For information: both international and national professors, highly qualified specialists, and scholars have been involved in the Scientific Committee for the organization of the Olympiad.</p>

          <p>ℹ️ As a reminder, the Science Olympiad Center of Uzbekistan is carrying out large-scale and systematic preparations to host this prestigious international competition at the highest level.</p>

          <p>❗️The program will continue until September 28.</p>

          <div class="my-6 space-y-4">
            <img src="/news/day22.jpg" alt="Venue inspection 1" class="rounded-xl shadow-md" />
            <img src="/news/day2.jpg" alt="Venue inspection 2" class="rounded-xl shadow-md" />
            <img src="/news/day21.jpg" alt="Venue inspection 3" class="rounded-xl shadow-md" />
          </div>
        `,
        cover: "/news/day2main.jpg",
        // 27 September 2025, late afternoon Tashkent time (UTC+5)
        published_at: "2025-09-27T17:56:43+05:00",
      },
      {
  id: 3,
  slug: "icho-2026-preparations-full-swing",
  title: "IChO 2026: Preparations Are in Full Swing!",
  excerpt:
    "Practical and theoretical tasks were analyzed for compliance with international standards, difficulty balance, safety, and equal participation.",
  contentHtml: `
    <p><b>#IChO_2026<br/>#Preparation</b></p>

    <h2>IChO 2026: Preparations Are in Full Swing!</h2>

    <p>📢 During today’s session, the practical and theoretical tasks designed for the Olympiad were thoroughly analyzed, with particular attention given to their compliance with international standards.</p>

    <p>Experts focused on the content and level of difficulty of each task, as well as on their potential to improve independent thinking and experimental skills among students.</p>

    <p>In addition, the tasks were reviewed from the perspective of safety regulations, laboratory conditions, and ensuring equal participation opportunities for contestants from all countries.</p>

    <p>⚡️ For information:<br/>
    The final versions of the theoretical and practical tasks will be approved by the international and national Scientific Committees and subsequently included in the official regulations of IChO 2026.</p>

    <div class="my-6 space-y-4">
      <img src="/news/prep1.jpg" alt="Task review session 1" class="rounded-xl shadow-md" />
      <img src="/news/prep2.jpg" alt="Task review session 2" class="rounded-xl shadow-md" />
      <img src="/news/prep3.jpg" alt="Task review session 2" class="rounded-xl shadow-md" />
    </div>
  `,
  cover: "/news/prepmain.jpg",
  // 28 September 2025, 16:10 (UTC+5: Tashkent)
  published_at: "2025-09-28T16:13:07+05:00",
}

    ];
  }

  const res = await fetch(`${BASE}`, { next: { revalidate: 1800 } });
  if (!res.ok) throw new Error("Failed to fetch news");
  return res.json();
}

export async function getNewsBySlug(slug: string): Promise<NewsItem | null> {
  if (!BASE) {
    const list = await getNewsList();
    return list.find((n) => n.slug === slug) ?? null;
  }

  const res = await fetch(`${BASE}/${slug}`, { next: { revalidate: 1800 } });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Failed to fetch news item");
  return res.json();
}
