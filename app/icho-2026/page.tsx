"use client";

import Image from "next/image";
import Link from "next/link";
import { ScrollText, Calendar, Download } from "lucide-react";

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
    <div className="w-16 h-16 rounded-full overflow-hidden border border-slate-300">
      <Image
        src={member.image || "/images/default-avatar.jpg"}
        alt={member.name}
        width={64}
        height={64}
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
      name: "Odil Temirov",
      role: "Committee member",
      institute: "JSC 'Uzkimyosanoat'",
      country: "Uzbekistan",
      title: "Chairman",
      image: "/team/odil.png",
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
      name: "Turaboy Shermatov",
      role: "Chairman of the Organising Committee",
      institute: "Science Olympiad Center",
      country: "Uzbekistan",
      title: "Director",
      image: "/team/torabek.png",
    },
    {
      name: "Davron Tukhtaev",
      role: "Committee member",
      institute: "Science Olympiad Center",
      country: "Uzbekistan",
      title: "Vice Director",
      image: "/team/davron.png",
    },
    {
      name: "Ilkhom Siradjev",
      role: "Committee member",
      institute: "—",
      country: "Uzbekistan",
      title: "—",
      image: "/team/ilhom.png",
    },
    {
      name: "Faridun Kushnazarov",
      role: "Committee member",
      institute: "—",
      country: "Uzbekistan",
      title: "—",
      image: "/team/faridun.png",
    },
    {
      name: "Azimjon Abdulkhaev",
      role: "Committee member",
      institute: "—",
      country: "Uzbekistan",
      title: "—",
      image: "/team/azimjon.png",
    },
    {
      name: "Musurmonov Rabbim",
      role: "Committee member",
      institute: "—",
      country: "Uzbekistan",
      title: "—",
      image: "/team/rabbim.png",
    },
   
    {
      name: "Umarkhodjaev Akromkhuja",
      role: "Committee member",
      institute: "—",
      country: "Uzbekistan",
      title: "—",
      image: "/team/akromxoja.png",
    },
    {
      name: "Fayyoz Tuychiev",
      role: "Committee member",
      institute: "Science Olympiad Center",
      country: "Uzbekistan",
      title: "—",
      image: "/team/fayyoz.jpg",
    },
    {
      name: "Okiljon Dadakhonov",
      role: "Committee member",
      institute: "Science Olympiad Center",
      country: "Uzbekistan",
      title: "Software Engineer",
      image: "/team/akilhan.jpg",
    },
  ];

  const scientificCommittee: CommitteeMember[] = [
    {
      name: "Shavkat Ayupov",
      role: "Committee member",
      institute: "Uzbekistan Academy of Sciences",
      country: "Uzbekistan",
      title: "President",
      image: "/team/shavkat.jpg",
    },
    {
      name: "Shamansur Sagdullaev",
      role: "Committee member",
      institute: "Institute of Plant Chemistry",
      country: "Uzbekistan",
      title: "Director",
      image: "/team/shamansur.jpg",
    },
    {
      name: "Khamid Khodjaniyazov",
      role: "Committee member",
      institute: "A.S. Sadykov Bioorganic Chemistry Institute",
      country: "Uzbekistan",
      title: "Leading Researcher of Complex Compounds Lab",
      image: "/team/khamid.png",
    },
    {
      name: "Abdujalil Sidiqov",
      role: "Committee member",
      institute: "Tashkent Institute of Chemical Technology",
      country: "Uzbekistan",
      title: "Professor",
      image: "/team/abdujalil.png",
    },
    {
      name: "Burkhon Elmurodov",
      role: "Committee member",
      institute: "Institute of Chemistry of Plant Substances",
      country: "Uzbekistan",
      title: "Deputy Director",
      image: "/team/elmurod.png",
    },
    {
      name: "Khamidulla Tukhtaev",
      role: "Committee member",
      institute: "—",
      country: "Uzbekistan",
      title: "IChO Gold Medalist – 2012",
      image: "/team/xamid.png",
    },
    {
      name: "Bekhzod Boltaev",
      role: "Committee member",
      institute: "—",
      country: "Uzbekistan",
      title: "IChO Gold Medalist – 2013, 2014",
      image: "/team/bekzod.png",
    },
    {
      name: "Muzaffar Maksumov",
      role: "Committee member",
      institute: "University of Siegen",
      country: "Uzbekistan",
      title: "Graduate",
      image: "/team/muzaffar.png",
    },
    {
      name: "Azimjon Jamolov",
      role: "Committee member",
      institute: "Nanyang Technological University",
      country: "Uzbekistan",
      title: "Student in Singapore",
      image: "/team/azim.png",
    },
    {
      name: "Islomjon Karimov",
      role: "Committee member",
      institute: "Bilkent University in Ankara",
      country: "Uzbekistan",
      title: "Student",
      image: "/team/islom.png",
    },
    {
      name: "Maftuna Badalova",
      role: "Committee member",
      institute: "Nanyang Technological University",
      country: "Uzbekistan",
      title: "Student in Singapore",
      image: "/team/maftuna.jpg",
    },
    {
      name: "Mirumid Mirakbarov",
      role: "Committee member",
      institute: "Higher School of Economics (HSE), Moscow",
      country: "Uzbekistan",
      title: "Master's student",
      image: "/team/mirumid.jpg",
    },
  ];

  const steeringCommittee: CommitteeMember[] = [
    {
      name: "I-Jy Chang",
      role: "Committee Member",
      institute: "",
      country: "Chinese Taipei",
      title: "Member (2023)",
      image: "/steering/Chang.jpg",
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
      name: "Andrei Shved",
      role: "Committee Member",
      institute: "",
      country: "Switzerland",
      title: "Member (2025)",
      image: "/steering/Andrei.jpg",
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
      name: "United Arab Emirates",
      role: "Committee Member",
      institute: "",
      country: "UAE",
      title: "Member (2025)",
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
    {
      title: "Supervisory Committee",
      members: supervisoryCommittee,
    },
    {
      title: "Organizing Committee",
      members: organizingCommittee,
    },
    {
      title: "International Steering Committee",
      members: steeringCommittee,
    },
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
        <div className="space-y-4" id="scientific-committee">
          <h2 className="text-3xl font-bold text-slate-800">
            Scientific Committee
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {scientificCommittee.map((member, idx) => (
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
