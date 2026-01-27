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
        id: 12,
        slug: "icho-2026-accommodation-new-uzbekistan-park-visit",
        title: "IChO 2026: Site Visit to Accommodation Facilities and \"New Uzbekistan\" Park",
        excerpt:
          "The Steering, Scientific, and Organizing Committee members conducted a site visit to the accommodation facilities for Olympiad participants and the \"New Uzbekistan\" Park.",
        contentHtml: `
          <p>The Steering, Scientific, and Organizing Committee members conducted a site visit to the accommodation facilities for Olympiad participants and the "New Uzbekistan" Park.</p>

          <div class="my-8">
            <div class="relative w-full" style="padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 1rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);">
              <iframe
                src="https://www.youtube.com/embed/xGQ9E-qYxWg"
                title="IChO 2026: Site Visit to Accommodation and New Uzbekistan Park"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                class="absolute top-0 left-0 w-full h-full"
                style="border-radius: 1rem;"
              ></iframe>
            </div>
          </div>

          <div class="info-box">
            <p class="font-semibold text-slate-900">📹 Key highlights demonstrated in the video.</p>
          </div>
        `,
        cover: "https://i.ytimg.com/vi/xGQ9E-qYxWg/hqdefault.jpg",
        published_at: "2026-01-18T12:00:00+05:00",
      },
      {
        id: 11,
        slug: "icho-2026-podcast",
        title: "IChO 2026: Podcast",
        excerpt:
          "Watch the IChO 2026 podcast discussing the preparations and insights into the upcoming 58th International Chemistry Olympiad.",
        contentHtml: `
          <p>Watch the IChO 2026 podcast discussing the preparations and insights into the upcoming 58th International Chemistry Olympiad.</p>

          <div class="my-8">
            <div class="relative w-full" style="padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 1rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);">
              <iframe
                src="https://www.youtube.com/embed/TDpkzVpsz6s"
                title="IChO 2026: Podcast"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                class="absolute top-0 left-0 w-full h-full"
                style="border-radius: 1rem;"
              ></iframe>
            </div>
          </div>
        `,
        cover: "https://i.ytimg.com/vi/TDpkzVpsz6s/hqdefault.jpg",
        published_at: "2026-01-17T12:00:00+05:00",
      },
      {
        id: 10,
        slug: "icho-2026-caex-center-visit",
        title: "IChO 2026: Committee Members Visit CaEX Center",
        excerpt:
          "Members of the Steering, Scientific, and Organizing Committees visited the CaEX center where academic exams will be held.",
        contentHtml: `
          <p>Members of the Steering, Scientific, and Organizing Committees visited the CaEX center where academic exams will be held.</p>

          <div class="my-8">
            <div class="relative w-full" style="padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 1rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);">
              <iframe
                src="https://www.youtube.com/embed/Gx0ktfjYJqs"
                title="IChO 2026: Committee Members Visit CaEX Center"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                class="absolute top-0 left-0 w-full h-full"
                style="border-radius: 1rem;"
              ></iframe>
            </div>
          </div>

          <div class="highlight-box">
            <p class="font-semibold text-slate-900">❗️ Committee meeting will last until January 18.</p>
          </div>
        `,
        cover: "https://i.ytimg.com/vi/Gx0ktfjYJqs/hqdefault.jpg",
        published_at: "2026-01-14T12:00:00+05:00",
      },
      {
        id: 9,
        slug: "icho-2026-opening-ceremony-scientific-steering-joint-meeting",
        title: "IChO 2026: OPENING CEREMONY of the Scientific and Steering Committee Joint Meeting",
        excerpt:
          "See the highlights from the Opening Ceremony of the Scientific and Steering Committee Joint Meeting for IChO 2026.",
        contentHtml: `
          <p>You can see the highlights from the Opening Ceremony of the Scientific and Steering Committee Joint Meeting.</p>

          <div class="my-8">
            <div class="relative w-full" style="padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 1rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);">
              <iframe
                src="https://www.youtube.com/embed/CAAY2y91_HQ"
                title="IChO 2026: OPENING CEREMONY of the Scientific and Steering Committee Joint Meeting"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                class="absolute top-0 left-0 w-full h-full"
                style="border-radius: 1rem;"
              ></iframe>
            </div>
          </div>

          <div class="highlight-box">
            <p class="font-semibold text-slate-900">❗️ Committee meeting will last until January 18.</p>
          </div>
        `,
        cover: "https://i.ytimg.com/vi/CAAY2y91_HQ/hqdefault.jpg",
        published_at: "2026-01-12T12:00:00+05:00",
      },
      {
        id: 8,
        slug: "icho-2026-another-key-preparation-stage",
        title: "IChO 2026: Another Key Preparation Stage is going!",
        excerpt:
          "A joint meeting of the Steering and Scientific Committees started on January 10–18, 2026, representing a key strategic stage in the preparation process for IChO 2026.",
        contentHtml: `
          <p>📍 January 10–18, 2026</p>

          <div class="my-8">
            <div class="relative w-full" style="padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 1rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);">
              <iframe
                src="https://www.youtube.com/embed/TG74k0OLdIc"
                title="IChO 2026: Another Key Preparation Stage is going!"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                class="absolute top-0 left-0 w-full h-full"
                style="border-radius: 1rem;"
              ></iframe>
            </div>
          </div>

          <div class="highlight-box">
            <p class="font-semibold text-slate-900 mb-2">⚡️ Joint Meeting of the Steering and Scientific Committees</p>
            <p>In order to organize the 58th International Chemistry Olympiad at a high international level, a joint meeting of the Steering and Scientific Committees started.</p>
          </div>

          <p>This international joint meeting represents a key strategic stage in the preparation process for IChO 2026, during which the following topics will be discussed:</p>

          <ul>
            <li>➖ academic preparation for the Olympiad</li>
            <li>➖ the practical examination and laboratory equipment</li>
            <li>➖ the Olympiad program and venues</li>
            <li>➖ cultural and social programs of the Olympiad</li>
          </ul>

          <div class="info-box">
            <p class="font-semibold text-slate-900">📹 For more information watch the video!</p>
          </div>
        `,
        cover: "https://i.ytimg.com/vi/TG74k0OLdIc/hqdefault.jpg",
        published_at: "2026-01-10T12:00:00+05:00",
      },
      {
        id: 7,
        slug: "icho-2026-hotel-inspection-opening-ceremony-venue",
        title: "IChO 2026: Preparations are progressing",
        excerpt:
          "Members of the Steering, Scientific, and Organizing Committees, along with national team leaders, conducted detailed inspections of designated hotels and the International Forum Palace for the Opening Ceremony.",
        contentHtml: `
          <p>As part of the preparations for the International Chemistry Olympiad (IChO) 2026, members of the Steering, Scientific, and Organizing Committees, along with national team leaders conducted detailed inspections of the hotels designated for official accommodation.</p>

          <div class="my-8">
            <div class="relative w-full" style="padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 1rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);">
              <iframe
                src="https://www.youtube.com/embed/AcNbuVoiPk8"
                title="IChO 2026: Preparations are progressing"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                class="absolute top-0 left-0 w-full h-full"
                style="border-radius: 1rem;"
              ></iframe>
            </div>
          </div>

          <div class="highlight-box">
            <p class="font-semibold text-slate-900 mb-3">🏛 Opening Ceremony Venue Review</p>
            <p>In addition, the International Forum Palace planned to host the Opening Ceremony of IChO 2026 was thoroughly reviewed, with particular attention given to its facilities, capacity, and overall readiness.</p>
          </div>

          <div class="info-box">
            <p class="font-semibold text-slate-900 mb-2">📹 Video Report</p>
            <p>More details are presented in the video report above.</p>
          </div>
        `,
        cover: "https://i.ytimg.com/vi/AcNbuVoiPk8/hqdefault.jpg",
        published_at: "2026-01-16T12:00:00+05:00",
      },
      {
        id: 6,
        slug: "icho-2026-national-university-laboratory-visit",
        title: "IChO 2026: On-site preparation for laboratory procedures",
        excerpt:
          "Members of the Steering, Scientific, and Organizing Committees visited the National University of Uzbekistan to review laboratory facilities and ensure compliance with international standards.",
        contentHtml: `
          <p>Members of the Steering, Scientific, and Organizing Committees made a visit to the National University of Uzbekistan, where the laboratory sessions of the Olympiad are planned to be held.</p>

          <div class="my-8">
            <div class="relative w-full" style="padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 1rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);">
              <iframe
                src="https://www.youtube.com/embed/Vd7Fq9Yn3Zo"
                title="IChO 2026: On-site preparation for laboratory procedures"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                class="absolute top-0 left-0 w-full h-full"
                style="border-radius: 1rem;"
              ></iframe>
            </div>
          </div>

          <div class="highlight-box">
            <p class="font-semibold text-slate-900 mb-3">💠 During the visit, the following aspects were thoroughly reviewed:</p>
            <ul class="space-y-2">
              <li>➖ the condition of laboratory facilities</li>
              <li>➖ technical equipment and safety requirements</li>
              <li>➖ compliance with international standards</li>
            </ul>
          </div>

          <div class="info-box">
            <p class="font-semibold text-slate-900 mb-2">❗️ Important Note</p>
            <p>These processes represent an important stage in ensuring that the Olympiad is organized at a high level and that comfortable and safe conditions are provided for participants.</p>
          </div>

          <div class="highlight-box">
            <p class="font-semibold text-slate-900">⚡️ Preparatory activities within the framework of IChO 2026 are continuing consistently.</p>
          </div>
        `,
        cover: "https://i.ytimg.com/vi/Vd7Fq9Yn3Zo/hqdefault.jpg",
        published_at: "2026-01-15T12:00:00+05:00",
      },
      {
        id: 5,
        slug: "icho-2026-opening-ceremony-committees-meeting",
        title: "IChO 2026: Opening Ceremony of the Steering, Scientific and Organizing Committees Joint Meeting was held",
        excerpt:
          "A joint meeting of the Steering, Scientific, and Organizing Committees was held with 16 international experts and 42 national experts from 10 countries.",
        contentHtml: `
          <div class="hashtags">
            <span class="hashtag">#IChO_2026</span>
            <span class="hashtag">#Preparation</span>
          </div>

          <p class="emoji-text">🇺🇿🇺🇿🇺🇿🇺🇿🇺🇿🇺🇿</p>

          <p>Preparations for the International Chemistry Olympiad (IChO 2026), which is scheduled to be hosted in Uzbekistan this year, are progressing at full speed.</p>

          <div class="highlight-box">
            <p class="font-semibold text-slate-900 mb-2">⚡️ Today, a joint meeting of the Steering, Scientific, and Organizing Committees, responsible for organizing the Olympiad at the highest level, was held.</p>
          </div>

          <p><strong>✅ The event was attended by:</strong></p>
          <ul>
            <li>E.Karimova — Minister of Preschool and School Education</li>
            <li>J.L.Kiappes — Chairman of the IChO Steering Committee</li>
            <li>Sh.Sagdullayev — Chairman of Scientific Committee</li>
            <li>A.Gladilin — Co-Chairman of the Scientific Committee</li>
            <li>T.Shermatov — Director of the Science Olympiad Center</li>
          </ul>

          <div class="info-box">
            <p class="font-semibold text-slate-900 mb-2">📌 Expert Participation</p>
            <p>A total of <strong>16 international experts</strong> and <strong>42 national experts</strong> are involved in the joint meeting processes. The international experts have arrived from the United Kingdom, the United States, Switzerland, China, Sweden, Uruguay, the Czech Republic, Turkey, Russia, and Saudi Arabia.</p>
          </div>

          <p>🔴 For reference: Both international and national Scientific Committees involved in organizing the Olympiad include professors, leading specialists in their fields, and prominent scientists.</p>

          <h3>In particular:</h3>

          <div class="bg-slate-50 p-6 rounded-xl my-6">
            <p class="font-semibold text-slate-900 mb-3">➡️ International Scientific Committee includes:</p>
            <ul class="space-y-2">
              <li>➖ Scholars from Harvard University, Bilkent University, and the Swiss Federal Institute of Technology (ETH Zurich)</li>
              <li>➖ Professors in the field from Lomonosov Moscow State University and the University of Chemistry and Technology in Prague</li>
            </ul>
          </div>

          <div class="bg-slate-50 p-6 rounded-xl my-6">
            <p class="font-semibold text-slate-900 mb-3">➡️ National Scientific Committee includes:</p>
            <ul class="space-y-2">
              <li>➖ Distinguished professors in the field of chemistry, young scientists conducting research at prestigious foreign universities, as well as former Olympiad winners</li>
            </ul>
          </div>

          <p>ℹ️ As a reminder, the Science Olympiad Center is carrying out large-scale and systematic preparations to host this prestigious international Olympiad at the highest level.</p>

          <div class="highlight-box">
            <p class="font-semibold text-slate-900">❗️ The preparatory processes will continue until January 18.</p>
          </div>

          <div class="image-gallery">
            <img src="/news/new1.jpg" alt="Opening ceremony 1" />
            <img src="/news/new2.jpg" alt="Opening ceremony 2" />
            <img src="/news/new3.jpg" alt="Opening ceremony 3" />
            <img src="/news/new4.jpg" alt="Opening ceremony 4" />
            <img src="/news/new5.jpg" alt="Opening ceremony 5" class="md:col-span-2" />
          </div>

          <div class="social-links">
            <a href="https://www.icho2026.uz/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors">
              <span>✅</span> Website
            </a>
            <a href="https://t.me/icho_uzbekistan" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
              <span>🌐</span> Telegram
            </a>
            <a href="https://www.facebook.com/InternationalChemistryOlympiad" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
              <span>🌐</span> Facebook
            </a>
            <a href="https://www.instagram.com/icho.official/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 text-pink-700 rounded-lg hover:bg-pink-100 transition-colors">
              <span>🌐</span> Instagram
            </a>
            <a href="https://www.youtube.com/@icho2026uz" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors">
              <span>🌐</span> YouTube
            </a>
            <a href="https://www.linkedin.com/company/international-chemistry-olympiad-2026/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors">
              <span>🌐</span> LinkedIn
            </a>
          </div>
        `,
        cover: "/news/new1.jpg",
        // Recent date for the opening ceremony
        published_at: "2026-01-15T10:00:00+05:00",
      },
      {
        id: 4,
        slug: "icho-2026-committee-members-samarkand",
        title: "IChO 2026: Committee Members in SAMARKAND!",
        excerpt:
          "As part of the preparation process for IChO 2026, members of the Steering, Scientific, and Organizing Committees visited Samarkand, exploring its rich cultural and scientific heritage.",
        contentHtml: `
          <p>As part of the preparation process for the International Chemistry Olympiad, members of the Steering, Scientific, and Organizing Committees visited Samarkand city, the Pearl of Central Asia.</p>

          <div class="my-8">
            <div class="relative w-full" style="padding-bottom: 56.25%; height: 0; overflow: hidden; border-radius: 1rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);">
              <iframe
                src="https://www.youtube.com/embed/nKWvpePEVkI"
                title="IChO 2026: Committee Members in SAMARKAND!"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                class="absolute top-0 left-0 w-full h-full"
                style="border-radius: 1rem;"
              ></iframe>
            </div>
          </div>

          <div class="highlight-box">
            <p class="font-semibold text-slate-900 mb-3">🏛 Cultural Tour Program</p>
            <p>The visit program began with a tour of the <a href="https://meros.uz/object/gori-amir-maqbarasi" target="_blank" rel="noopener noreferrer">Amir Temur Mausoleum</a>. Afterwards, the guests had the opportunity to explore the historic <a href="https://uzbekistan.travel/uz/o/registon-ma" target="_blank" rel="noopener noreferrer">Registan Square</a>.</p>
          </div>

          <div class="info-box">
            <p class="font-semibold text-slate-900 mb-3">🌐 Educational Tour</p>
            <p>During the cultural and educational tour, committee members visited the <a href="https://uzbekistan.travel/uz/o/qiyinchilik" target="_blank" rel="noopener noreferrer">Observatory</a> of Mirzo Ulugbek and a traditional carpet-weaving factory, where they observed the handcrafting of carpets rich in national patterns. This allowed them to gain deep insight into the country's rich scientific and cultural heritage.</p>
          </div>

          <p>🌐 This visit serves to strengthen international cooperation and expand cultural ties within the framework of the Olympiad.</p>
        `,
        cover: "https://i.ytimg.com/vi/nKWvpePEVkI/hqdefault.jpg",
        published_at: "2025-09-29T12:00:00+05:00",
      },
      {
  id: 3,
  slug: "icho-2026-preparations-full-swing",
  title: "IChO 2026: Preparations Are in Full Swing!",
  excerpt:
    "Practical and theoretical tasks were analyzed for compliance with international standards, difficulty balance, safety, and equal participation.",
  contentHtml: `
    <div class="hashtags">
      <span class="hashtag">#IChO_2026</span>
      <span class="hashtag">#Preparation</span>
    </div>

    <div class="highlight-box">
      <p class="font-semibold text-slate-900 mb-2">📢 Task Analysis Session</p>
      <p>During today's session, the practical and theoretical tasks designed for the Olympiad were thoroughly analyzed, with particular attention given to their compliance with international standards.</p>
    </div>

    <p>Experts focused on the content and level of difficulty of each task, as well as on their potential to improve independent thinking and experimental skills among students.</p>

    <p>In addition, the tasks were reviewed from the perspective of safety regulations, laboratory conditions, and ensuring equal participation opportunities for contestants from all countries.</p>

    <div class="info-box">
      <p class="font-semibold text-slate-900 mb-2">⚡️ For information</p>
      <p>The final versions of the theoretical and practical tasks will be approved by the international and national Scientific Committees and subsequently included in the official regulations of IChO 2026.</p>
    </div>

    <div class="image-gallery">
      <img src="/news/prep1.jpg" alt="Task review session 1" />
      <img src="/news/prep2.jpg" alt="Task review session 2" />
      <img src="/news/prep3.jpg" alt="Task review session 3" />
    </div>
  `,
  cover: "/news/prepmain.jpg",
  // 28 September 2025, 16:10 (UTC+5: Tashkent)
  published_at: "2025-09-28T16:13:07+05:00",
},
      {
        id: 2,
        slug: "icho-2026-venues-inspection-day-2",
        title: "IChO 2026: Venues for the Olympiad Inspected",
        excerpt:
          "On September 27, Scientific Committee members inspected potential exam venues and participant hotels, and reviewed practical tasks under real lab conditions.",
        contentHtml: `
          <div class="hashtags">
            <span class="hashtag">#Preparation</span>
            <span class="hashtag">#Day_2</span>
          </div>

          <p>🇺🇿 Preparations for the International Chemistry Olympiad (IChO 2026), scheduled to be held in Uzbekistan in 2026, are progressing intensively.</p>

          <div class="highlight-box">
            <p class="font-semibold text-slate-900 mb-2">📍 Venue Inspection</p>
            <p>On September 27, members of the Scientific Committee responsible for ensuring the high-level organization of the Olympiad visited the possible venues.</p>
            <p class="mt-3">In the first half of the day, the Scientific Committee members were introduced to potential locations for the Olympiad examinations as well as the hotels being prepared for participants. Afterwards, the experts reviewed the practical tasks of the Olympiad under real laboratory conditions.</p>
          </div>

          <div class="info-box">
            <p class="font-semibold text-slate-900 mb-2">⚡️ For information</p>
            <p>Both international and national professors, highly qualified specialists, and scholars have been involved in the Scientific Committee for the organization of the Olympiad.</p>
          </div>

          <p>ℹ️ As a reminder, the Science Olympiad Center of Uzbekistan is carrying out large-scale and systematic preparations to host this prestigious international competition at the highest level.</p>

          <div class="highlight-box">
            <p class="font-semibold text-slate-900">❗️ The program will continue until September 28.</p>
          </div>

          <div class="image-gallery">
            <img src="/news/day22.jpg" alt="Venue inspection 1" />
            <img src="/news/day2.jpg" alt="Venue inspection 2" />
            <img src="/news/day21.jpg" alt="Venue inspection 3" />
          </div>
        `,
        cover: "/news/day2main.jpg",
        // 27 September 2025, late afternoon Tashkent time (UTC+5)
        published_at: "2025-09-27T17:56:43+05:00",
      },
      {
        id: 1,
        slug: "icho-2026-scientific-committee",
        title: "IChO 2026: Meeting of the Scientific Committee",
        excerpt:
          "Preparations for IChO 2026 are actively underway. The Scientific Committee meeting has launched with international and local experts.",
        contentHtml: `
          <div class="hashtags">
            <span class="hashtag">#IChO_2026</span>
            <span class="hashtag">#Preparation</span>
          </div>

          <p>🇺🇿 Preparations for the International Chemistry Olympiad (IChO 2026), scheduled to be held in Uzbekistan in 2026, are actively underway.</p>

          <div class="highlight-box">
            <p class="font-semibold text-slate-900 mb-2">✅ The meeting is attended by:</p>
            <ul class="space-y-2">
              <li>Vice President of the Academy of Science, Academician Sh. Sagdullaev</li>
              <li>Deputy Minister of Preschool and School Education A. Turdiyev</li>
              <li>Director of the Science Olympiad Center and member of the IChO Steering Committee T. Shermatov</li>
              <li>12 international experts from the United Kingdom, USA, Switzerland, Sweden, Uruguay, Czech Republic, Turkey, Russia, Saudi Arabia</li>
              <li>30 local experts</li>
            </ul>
          </div>

          <div class="info-box">
            <p class="font-semibold text-slate-900 mb-2">⚡️ For reference</p>
            <p>Professors, leading specialists, and scientists have been engaged in both the international and national Scientific Committees to support the organization of the Olympiad.</p>
          </div>

          <h3>In particular:</h3>

          <div class="bg-slate-50 p-6 rounded-xl my-6">
            <p class="font-semibold text-slate-900 mb-3">➡️ International Scientific Committee includes:</p>
            <ul class="space-y-2">
              <li>➖ Scholars from Harvard University, Bilkent University, and the Swiss Federal Institute of Technology (ETH Zurich)</li>
              <li>➖ Professors in the field from Lomonosov Moscow State University and the University of Chemistry and Technology in Prague</li>
            </ul>
          </div>

          <div class="bg-slate-50 p-6 rounded-xl my-6">
            <p class="font-semibold text-slate-900 mb-3">➡️ National Scientific Committee includes:</p>
            <ul class="space-y-2">
              <li>➖ Distinguished professors in the field of chemistry, young scientists conducting research at prestigious foreign universities, as well as former Olympiad winners</li>
            </ul>
          </div>

          <p>ℹ️ As a reminder, the Science Olympiad Center is carrying out large-scale and systematic preparations to host this prestigious international Olympiad at the highest level.</p>

          <div class="highlight-box">
            <p class="font-semibold text-slate-900">❗️ The meeting will continue until September 28.</p>
          </div>

          <div class="image-gallery">
            <img src="/news/opening1.jpg" alt="Opening ceremony 1" />
            <img src="/news/opening2.jpg" alt="Opening ceremony 2" />
            <img src="/news/opening3.jpg" alt="Opening ceremony 3" />
          </div>
        `,
        cover: "/news/frame.jpg",
        // Hard-coded to 26 September 2025, 14:18 (UTC+5: Tashkent)
        published_at: "2025-09-26T14:18:40+05:00",
      },

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
