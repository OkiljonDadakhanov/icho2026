"use client";

import Image from "next/image";
import { ScrollText } from "lucide-react";

type CommitteeMember = {
  name: string;
  role: string;
  institute: string;
  country: string;
  title: string;
  image?: string;
};

type CommitteeSection = {
  title: string;
  members: CommitteeMember[];
};

const Card = ({ member }: { member: CommitteeMember }) => (
  <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg p-5 flex gap-4 items-start hover:shadow-xl transition-all duration-300">
    <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-slate-200 shadow-md flex-shrink-0">
      <Image
        src={member.image || "/images/icho.png"}
        alt={member.name}
        width={80}
        height={80}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="text-slate-800">
      <h3 className="text-lg font-bold">{member.name}</h3>
      {member.title && <p className="text-sm text-slate-600">{member.title}</p>}
      {member.role && !member.title && <p className="text-sm text-slate-600">{member.role}</p>}
      {member.institute && <p className="text-sm mt-1">{member.institute}</p>}
      <p className="text-sm text-slate-500">{member.country}</p>
    </div>
  </div>
);

export default function Icho2026Page() {
  const supervisoryCommittee: CommitteeMember[] = [
    {
      name: "Karimova Ezozkhon",
      role: "",
      institute: "Minister of Preschool and School Education",
      country: "Uzbekistan",
      title: "Chairman of the Supervisory Committee",
      image: "/team/ezoza.jpg",
    },
    {
      name: "Shavkat Umurzoqov",
      role: "Co-Chairman",
      institute: "Mayor of Tashkent",
      country: "Uzbekistan",
      title: "",
      image: "/team/shavkat.png",
    },
    {
      name: "Kongratbay Sharipov",
      role: "Committee member",
      institute: "Ministry of Higher Education, Science and Innovation",
      country: "Uzbekistan",
      title: "Minister of Higher Education",
      image: "/team/kongratbay.png",
    },
    {
      name: "Bahromjon Aloev",
      role: "Committee member",
      institute: "Ministry of Foreign Affairs",
      country: "Uzbekistan",
      title: "Deputy Minister",
      image: "/team/bahrom.png",
    },
    {
      name: "Sevara Shakirova",
      role: "Committee member",
      institute: "Agency of Specialized Educational Institutions",
      country: "Uzbekistan",
      title: "Director",
      image: "/team/sevara.png",
    },
    
    {
      name: "Asilbek Khudayarov",
      role: "Committee member",
      institute: "Ministry of Health",
      country: "Uzbekistan",
      title: "Minister of Health",
      image: "/team/asilbek.png",
    },
    {
      name: "Aziz Tashpulatov",
      role: "Committee member",
      institute: "Ministry of the Interior",
      country: "Uzbekistan",
      title: "Minister of the Interior",
      image: "/team/aziz.png",
    },
    {
      name: "Ozodbek Nazarbekov",
      role: "Committee member",
      institute: "Ministry of Culture",
      country: "Uzbekistan",
      title: "Minister of Culture",
      image: "/team/ozod.png",
    },
    {
      name: "Ilkhom Makhkamov",
      role: "Committee member",
      institute: "Ministry of Transport",
      country: "Uzbekistan",
      title: "Minister of Transport",
      image: "/team/ilkhom.png",
    },
  ];

  const organizingCommittee: CommitteeMember[] = [
    {
      name: "T.Y. Shermatov",
      role: "Chair of the Organizing Committee",
      institute: "Science Olympiad Center",
      country: "Uzbekistan",
      title: "Director of the Science Olympiad Center",
      image: "/team/shermatov.jpg",
    },
    {
      name: "Kh.R. Shakirov",
      role: "Co-Chair of the Organizing Committee",
      institute: "Agency for Specialized Educational Institutions",
      country: "Uzbekistan",
      title: "Deputy Director",
      image: "/team/Shakirov.png",
    },
    {
      name: "S.A. Ashirov",
      role: "Member of the Organizing Committee",
      institute:
        "Department for Creative and Sports Schools, Agency for Specialized Educational Institutions",
      country: "Uzbekistan",
      title: "Head of Department",
      image: "/team/Ashirov.png",
    },
    {
      name: "A.N. Abdulkhaev",
      role: "Member of the Organizing Committee",
      institute:
        "Department of International Relations, Ministry of Preschool and School Education",
      country: "Uzbekistan",
      title: "Head of Department",
      image: "/team/Abdulkhaev.png",
    },
    {
      name: "M.N. Musurmonov",
      role: "Member of the Organizing Committee",
      institute:
        "Department for ICT Implementation and Digitalization, Ministry of Preschool and School Education",
      country: "Uzbekistan",
      title: "Head of Department",
      image: "/team/Musurmonov.png",
    },
    {
      name: "D.A. Sobirova",
      role: "Member of the Organizing Committee",
      institute: "Information Service, Ministry of Preschool and School Education",
      country: "Uzbekistan",
      title: "Head of Information Service",
      image: "/team/Sobirova.png",
    },
    {
      name: "D.D. Tukhtaev",
      role: "Member of the Organizing Committee",
      institute: "Science Olympiad Center",
      country: "Uzbekistan",
      title: "Deputy Director",
      image: "/team/Tukhtaev.png",
    },
    {
      name: "F.F. Tuychiev",
      role: "Member of the Organizing Committee",
      institute:
        "Department for Selection and Training of Students for International Science Olympiads, Science Olympiad Center",
      country: "Uzbekistan",
      title:
        "Head of the Department for Selection and Training of Students for International Science Olympiads",
      image: "/team/Tuychiev.JPG",
    },
    {
      name: "T.O. Turaeva",
      role: "Member of the Organizing Committee",
      institute:
        "Department for Digital Media Resources and Communications, Science Olympiad Center",
      country: "Uzbekistan",
      title:
        "Head of the Department for Digital Media Resources and Communications",
      image: "/team/Turaeva.JPG",
    },
    {
      name: "R.X. Toirova",
      role: "Member of the Organizing Committee",
      institute: "Science Olympiad Center",
      country: "Uzbekistan",
      title: "Coordinator of the Olympiad",
      image: "/team/Toirova.jpg",
    },
  ];

  const scientificCommitteeCoChairs: CommitteeMember[] = [
    {
      name: "Prof. Shamansur Sagdullaev",
      role: "Co-Chair",
      institute: "Yunusov Institute of the Chemistry of Plant Substances",
      country: "Uzbekistan",
      title: "Co-Chair of Scientific Committee",
      image: "/international/Shomansur.jpg",
    },
    {
      name: "Prof. Alexander Gladilin",
      role: "Co-Chair",
      institute: "Moscow State University",
      country: "Russia",
      title: "Co-Chair of Scientific Committee",
      image: "/international/Alexander.jpg",
    },
  ];

  const scientificCommitteeMembers: CommitteeMember[] = [
    {
      name: "Hudoynazarov Ilyos Abdurasulovich",
      role: "Scientific Committee Member",
      institute: "National University of Uzbekistan named after Mirzo Ulugbek",
      country: "Uzbekistan",
      title: "Ph.D, Associate professor",
      image: "/team/Hudoynazarov.jpg",
    },
    {
      name: "Parmanov Askar",
      role: "Scientific Committee Member",
      institute: "National University of Uzbekistan named after Mirzo Ulugbek",
      country: "Uzbekistan",
      title: "Dr.",
      image: "/team/Parmanov.jpg",
    },
    {
      name: "Kholiqov Tursunali Suyunovich",
      role: "Scientific Committee Member",
      institute: "National University of Uzbekistan named after Mirzo Ulugbek",
      country: "Uzbekistan",
      title: "Professor",
      image: "/team/Kholiqov.jpg",
    },
    {
      name: "Tadjimuxamedov Xabibulla Sayfullayevich",
      role: "Scientific Committee Member",
      institute: "National University of Uzbekistan named after Mirzo Ulugbek",
      country: "Uzbekistan",
      title: "Ph.D, Associate professor",
      image: "/team/Xabibulla.jpg",
    },
    {
      name: "Prof. Vadim Eremin",
      role: "Author & Reviewer",
      institute: "Moscow State University",
      country: "Russia",
      title: "",
      image: "/international/Eremin.jpg",
    },
    {
      name: "Dr. Khamidulla Tukhtaev",
      role: "Author & Reviewer",
      institute: "King Abdullah University of Science and Technology",
      country: "Saudi Arabia",
      title: "",
      image: "/team/xamid.png",
    },
    {
      name: "Bekhzodbek Boltaev",
      role: "Author & Reviewer",
      institute: "National Medical Center",
      country: "Uzbekistan",
      title: "",
      image: "/team/bekzod.png",
    },
    {
      name: "Prof. Ben Pilgrim",
      role: "Author & Reviewer",
      institute: "University of Nottingham",
      country: "UK",
      title: "",
      image: "/international/Samuel.jpg",
    },
    {
      name: "Prof. Yunus Turkmen",
      role: "Author & Reviewer",
      institute: "Middle East Technical University",
      country: "Turkey",
      title: "",
      image: "/international/yunus.jpg",
    },
    {
      name: "Prof. Burkhon Elmuradov",
      role: "Author & Reviewer",
      institute: "Yunusov Institute of the Chemistry of Plant Substances",
      country: "Uzbekistan",
      title: "",
      image: "/team/elmurod.png",
    },
    {
      name: "Prof. Petra Menova",
      role: "Author & Reviewer",
      institute: "University of Chemistry and Technology",
      country: "Czech Republic",
      title: "",
      image: "/international/Petra.jpg",
    },
    {
      name: "Prof. Khamid Khodjaniyozov",
      role: "Author & Reviewer",
      institute: "Sadikov Institute of Bioorganic Chemistry",
      country: "Uzbekistan",
      title: "",
      image: "/team/khamid.png",
    },
    {
      name: "Dr. Andrei Shved",
      role: "Author & Reviewer",
      institute: "Lucerne International School",
      country: "Switzerland",
      title: "",
      image: "/international/Andrei.jpg",
    },
    {
      name: "Dr. Askar Abdurazakov",
      role: "Author & Reviewer",
      institute: "Yunusov Institute of the Chemistry of Plant Substances",
      country: "Uzbekistan",
      title: "",
    },
    {
      name: "Dr. Bulat Garifullin",
      role: "Author & Reviewer",
      institute: "Hospital No. 13 in Ufa",
      country: "Russia",
      title: "",
      image: "/international/Bulat.jpg",
    },
    {
      name: "Dr. Abdurakhim Nabiev",
      role: "Author & Reviewer",
      institute: "Tashkent Institute of Chemical Technology",
      country: "Uzbekistan",
      title: "",
    },
    {
      name: "Aleksandr Koronatov",
      role: "Author & Reviewer",
      institute: "University of Groningen, Stratingh Institute for Chemistry & Technion, Schulich Faculty of Chemistry",
      country: "the Netherlands",
      title: "",
      image: "/international/aleksandr.jpg",
    },
    {
      name: "Azimjon Jamolov",
      role: "Author & Reviewer",
      institute: "Nanyang Technological University",
      country: "Singapore",
      title: "",
      image: "/team/azim.png",
    },
    {
      name: "Mirumid Mirakbarov",
      role: "Author & Reviewer",
      institute: "Higher School of Economics",
      country: "Russia",
      title: "",
      image: "/team/mirumid.jpg",
    },
    {
      name: "Boburbek Boltaev",
      role: "Author & Reviewer",
      institute: "Cardiovascular Surgery Center \"American Hospital\"",
      country: "Uzbekistan",
      title: "",
    },
    {
      name: "Islomjon Karimov",
      role: "Author & Reviewer",
      institute: "Center for Advanced Technologies",
      country: "Uzbekistan",
      title: "",
      image: "/team/islom.png",
    },
    {
      name: "Filip Ilievski",
      role: "Reviewer",
      institute: "Uppsala University",
      country: "Sweden",
      title: "",
      image: "/international/Ilievski.jpg",
    },
    {
      name: "Zhihan Nan",
      role: "Author & Reviewer",
      institute: "Harvard University",
      country: "USA",
      title: "",
      image: "/international/Zhihan.jpg",
    },
    {
      name: "Maftuna Badalova",
      role: "Author & Reviewer",
      institute: "Nanyang Technological University",
      country: "Singapore",
      title: "",
      image: "/team/maftuna.jpg",
    },
    {
      name: "Azizbek Nazarov",
      role: "Reviewer",
      institute: "Tashkent State Medical University",
      country: "Uzbekistan",
      title: "",
    },
    {
      name: "Elyorbek Adkhamov",
      role: "Author & Reviewer",
      institute: "Pirogov University",
      country: "Russia",
      title: "",
    },
    {
      name: "Biloliddin Zukhriddinov",
      role: "Author & Reviewer",
      institute: "Central Asia University",
      country: "Uzbekistan",
      title: "",
    },
    {
      name: "Mirjahon Muhammadov",
      role: "Author & Reviewer",
      institute: "Science Olympiad Center",
      country: "Uzbekistan",
      title: "",
    },
    {
      name: "Ibrohim Temurov",
      role: "Author & Reviewer",
      institute: "Science Olympiad Center",
      country: "Uzbekistan",
      title: "",
    },
    {
      name: "Saida Abdullaeva",
      role: "Author & Reviewer",
      institute: "Tashkent State Medical University",
      country: "Uzbekistan",
      title: "",
    },
    {
      name: "Sherzod Shaymatov",
      role: "Author & Reviewer",
      institute: "Tashkent State Medical University",
      country: "Uzbekistan",
      title: "",
    },
    {
      name: "Daler Rahimov",
      role: "Author & Reviewer",
      institute: "Science Olympiad Center",
      country: "Uzbekistan",
      title: "",
    },
    {
      name: "Abdulloh Mahmudov",
      role: "Author & Reviewer",
      institute: "Massachusetts Institute of Technology",
      country: "USA",
      title: "",
    },
    {
      name: "Akhror Bahodirov",
      role: "Author & Reviewer",
      institute: "Moscow Institute of Physics and Technology",
      country: "Russia",
      title: "",
    },
    {
      name: "Durdona Mukhtorkhodjaeva",
      role: "Author & Reviewer",
      institute: "D. Mendeleev University of Chemical Technology of Russia in Tashkent",
      country: "Uzbekistan",
      title: "",
    },
    {
      name: "Firdavs Sobirov",
      role: "Author & Reviewer",
      institute: "Science Olympiad Center",
      country: "Uzbekistan",
      title: "",
    },
    {
      name: "Ikromiddin Boymahammadov",
      role: "Author & Reviewer",
      institute: "New Uzbekistan University",
      country: "Uzbekistan",
      title: "",
    },
    {
      name: "Kirill Kozlov",
      role: "Author & Reviewer",
      institute: "N. D. Zelinsky Institute of Organic Chemistry",
      country: "Russia",
      title: "",
    },
  ];

  const steeringCommittee: CommitteeMember[] = [
    {
      name: "JL Kiappes",
      role: "Chair",
      institute: "",
      country: "UK/USA",
      title: "Chair (2023)",
      image: "/steering/JL.jpg",
    },
    {
      name: "Gábor Magyarfalvi",
      role: "Committee Member",
      institute: "",
      country: "Hungary",
      title: "Member (2025)",
      image: "/steering/Gábor.jpg",
    },
    {
      name: "Clément Guibert",
      role: "Committee Member",
      institute: "",
      country: "France",
      title: "Member (2022, 2024)",
      image: "/steering/Clément.jpg",
    },
    {
      name: "I-Jy Chang",
      role: "Committee Member",
      institute: "",
      country: "Chinese Taipei",
      title: "Member (2023)",
      image: "/steering/Chang.jpg",
    },
    {
      name: "Yunus Emre Türkmen",
      role: "Committee Member",
      institute: "",
      country: "Turkey",
      title: "Member (2022, 2024)",
      image: "/steering/yunus.jpg",
    },
    {
      name: "Andrei Shved",
      role: "Committee Member",
      institute: "",
      country: "Switzerland",
      title: "Member (2025)",
      image: "/steering/Andrei.jpg",
    },
    {
      name: "Abdallah El Marhoune",
      role: "Committee Member",
      institute: "",
      country: "UAE",
      title: "Member (2025)",
      image: "/steering/Abdallah.png",
    },
    {
      name: "Turaboy Shermatov",
      role: "Committee Member",
      institute: "",
      country: "Uzbekistan",
      title: "Member (2026)",
      image: "/steering/toraboy.jpg",
    },
    {
      name: "Elise Li",
      role: "Committee Member",
      institute: "",
      country: "Chinese Taipei",
      title: "Member (2027)",
      image: "/steering/Elise.jpg",
    },
  ];

  const committeeSections: CommitteeSection[] = [
    { title: "Supervisory Committee", members: supervisoryCommittee },
    { title: "International Steering Committee", members: steeringCommittee },
    { title: "Organizing Committee", members: organizingCommittee },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-sky-500/5 to-amber-500/5"></div>
        <div className="absolute top-24 left-10 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-emerald-600/20 rounded-2xl rotate-12 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-sky-400/20 to-sky-600/20 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-32 left-20 w-40 h-40 bg-gradient-to-br from-amber-400/20 to-amber-600/20 rounded-3xl -rotate-6 animate-float-slow"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16">
        {/* Title */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 text-sm font-medium text-slate-600">
            <ScrollText className="w-4 h-4 text-emerald-500" />
            <span>Committee & Program Overview</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-slate-900">
            IChO 2026
          </h1>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto font-light">
            Discover the brilliant minds behind the Olympiad and download the
            official program.
          </p>
        </div>

        {/* Section Renderer — Supervisory, Organizing */}
        {committeeSections.map((section, index) => (
          <div
            key={index}
            className="space-y-4"
            id={section.title.toLowerCase().replace(/\s+/g, "-")}
          >
            <h2 className="text-3xl font-bold text-slate-800">
              {section.title}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.members.map((member, idx) => (
                <Card key={idx} member={member} />
              ))}
            </div>
          </div>
        ))}


        {/* Scientific Committee */}
        <div className="space-y-8" id="scientific-committee">
          <h2 className="text-3xl font-bold text-slate-800">
            Scientific Committee
          </h2>

          <h3 className="text-xl font-semibold text-slate-700">
            Co-Chairs of Scientific Committee
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {scientificCommitteeCoChairs.map((member, idx) => (
              <Card key={idx} member={member} />
            ))}
          </div>

          <h3 className="text-xl font-semibold text-slate-700">
            Authors and Reviewers
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {scientificCommitteeMembers.map((member, idx) => (
              <Card key={idx} member={member} />
            ))}
          </div>
        </div>

        {/* Program PDF Download */}
        <div className="text-center pt-8" id="program">
          {/* <Link
            href="/program.pdf"
            target="_blank"
            download
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full text-base font-medium shadow-md transition-all"
          >
            <Download className="w-5 h-5" />
            Download Program (PDF)
          </Link> */}
        </div>
      </div>
    </section>
  );
}
