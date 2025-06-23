"use client"

import Image from "next/image"
import { ScrollText, Calendar, Download } from "lucide-react"

type CommitteeMember = {
  name: string
  role: string
  institute: string
  country: string
  title: string
  image?: string
}

type CommitteeSection = {
  title: string
  members: CommitteeMember[]
}

const Card = ({ member }: { member: CommitteeMember }) => (
  <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg p-5 flex gap-4 items-start hover:shadow-xl transition-all duration-300">
    <div className="w-16 h-16 rounded-full overflow-hidden border border-slate-300">
      <Image
        src={member.image || "/images/default-avatar.jpg"}
        alt={member.name}
        width={64}
        height={64}
        className="object-cover"
      />
    </div>
    <div className="text-slate-800">
      <h3 className="text-lg font-bold">{member.name}</h3>
      <p className="text-sm text-slate-600">{member.role}</p>
      <p className="text-sm mt-1">{member.institute}</p>
      <p className="text-sm text-slate-500">{member.country}</p>
      <p className="text-sm italic mt-1">{member.title}</p>
    </div>
  </div>
)

export default function Icho2026Page() {
  const supervisoryCommittee: CommitteeMember[] = [
    {
      name: "Acad. Shamansur Sagdullaev",
      role: "Committee member",
      institute: "Institute of Plant Chemistry",
      country: "Uzbekistan",
      title: "Director of Institute of Plant Chemistry",
      image: "/images/shamansur.jpg",
    },
     {
      name: "Acad. Shamansur Sagdullaev",
      role: "Committee member",
      institute: "Institute of Plant Chemistry",
      country: "Uzbekistan",
      title: "Director of Institute of Plant Chemistry",
      image: "/images/shamansur.jpg",
    },
     {
      name: "Acad. Shamansur Sagdullaev",
      role: "Committee member",
      institute: "Institute of Plant Chemistry",
      country: "Uzbekistan",
      title: "Director of Institute of Plant Chemistry",
      image: "/images/shamansur.jpg",
    },
     {
      name: "Acad. Shamansur Sagdullaev",
      role: "Committee member",
      institute: "Institute of Plant Chemistry",
      country: "Uzbekistan",
      title: "Director of Institute of Plant Chemistry",
      image: "/images/shamansur.jpg",
    },
     {
      name: "Acad. Shamansur Sagdullaev",
      role: "Committee member",
      institute: "Institute of Plant Chemistry",
      country: "Uzbekistan",
      title: "Director of Institute of Plant Chemistry",
      image: "/images/shamansur.jpg",
    },
    {
      name: "Dr. Sirojiddin Khudayberdiyev",
      role: "Chair",
      institute: "Ministry of Higher Education, Science and Innovation",
      country: "Uzbekistan",
      title: "Minister of Higher Education",
    },
  ]

  const scientificCommittee: CommitteeMember[] = [
    {
      name: "Prof. Malika Tursunova",
      role: "Chair",
      institute: "National University of Uzbekistan",
      country: "Uzbekistan",
      title: "Professor of Chemistry",
    },
    {
      name: "Prof. Alexander Ivanov",
      role: "Task Developer",
      institute: "Mendeleev University",
      country: "Russia",
      title: "Chemistry Expert",
    },
       {
      name: "Prof. Alexander Ivanov",
      role: "Task Developer",
      institute: "Mendeleev University",
      country: "Russia",
      title: "Chemistry Expert",
    },
    
  ]

  const organizingCommittee: CommitteeMember[] = [
    {
      name: "Dr. Azizbek Khamidov",
      role: "Head Organizer",
      institute: "National Chemistry Olympiad Center",
      country: "Uzbekistan",
      title: "Director",
    },
    {
      name: "Jasur Sharipov",
      role: "Technical Lead",
      institute: "Olympiad Web Department",
      country: "Uzbekistan",
      title: "Web & IT Manager",
    },
     {
      name: "Jasur Sharipov",
      role: "Technical Lead",
      institute: "Olympiad Web Department",
      country: "Uzbekistan",
      title: "Web & IT Manager",
    },
     {
      name: "Jasur Sharipov",
      role: "Technical Lead",
      institute: "Olympiad Web Department",
      country: "Uzbekistan",
      title: "Web & IT Manager",
    },
  ]

  const steeringCommittee: CommitteeMember[] = [
    {
      name: "Prof. Wolfgang Schneider",
      role: "International Member",
      institute: "IChO Board",
      country: "Germany",
      title: "Steering Committee Member",
    },
    {
      name: "Dr. Jane Kim",
      role: "International Member",
      institute: "Korea Institute of Chemistry",
      country: "South Korea",
      title: "Senior Researcher",
    },
      {
      name: "Dr. Jane Kim",
      role: "International Member",
      institute: "Korea Institute of Chemistry",
      country: "South Korea",
      title: "Senior Researcher",
    },
      {
      name: "Dr. Jane Kim",
      role: "International Member",
      institute: "Korea Institute of Chemistry",
      country: "South Korea",
      title: "Senior Researcher",
    },
      {
      name: "Dr. Jane Kim",
      role: "International Member",
      institute: "Korea Institute of Chemistry",
      country: "South Korea",
      title: "Senior Researcher",
    },
      {
      name: "Dr. Jane Kim",
      role: "International Member",
      institute: "Korea Institute of Chemistry",
      country: "South Korea",
      title: "Senior Researcher",
    },
  ]

  const committeeSections: CommitteeSection[] = [
    {
      title: "Supervisory Committee",
      members: supervisoryCommittee,
    },
    {
      title: "Scientific Committee",
      members: scientificCommittee,
    },
    {
      title: "Organizing Committee",
      members: organizingCommittee,
    },
    {
      title: "International Steering Committee",
      members: steeringCommittee,
    },
  ]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0" id="">
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
          <h1 className="text-5xl font-bold tracking-tight text-slate-900">IChO 2026</h1>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto font-light">
            Discover the brilliant minds behind the Olympiad and download the official program.
          </p>
        </div>

        {/* Section Renderer */}
      {committeeSections.map((section, index) => (
  <div key={index} className="space-y-4" id={section.title.toLowerCase().replace(/\s+/g, "-")}>
    <h2 className="text-3xl font-bold text-slate-800">{section.title}</h2>
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {section.members.map((member, idx) => (
        <Card key={idx} member={member} />
      ))}
    </div>
  </div>
))}


        {/* Program PDF Download */}
        <div className="text-center pt-8" id="program">
          <a
            href="/files/icho2026-program.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold rounded-2xl bg-gradient-to-r from-emerald-600 to-sky-600 text-white hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            Download IChO 2026 Program (PDF)
          </a>
        </div>
      </div>
    </section>
  )
}