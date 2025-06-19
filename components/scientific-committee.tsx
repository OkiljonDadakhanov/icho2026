import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

interface ScientificMember {
  name: string;
  role: string;
  institution: string;
  country: string;
  bio: string;
  email?: string;
  linkedin?: string;
  image: string;
}

const scientificCommitteeMembers: ScientificMember[] = [
  {
    name: "Prof. Khamid Khodjaniyazov",
    role: "Chairman of the Scientific Committee",
    institution: "A.S. Sadykov Bioorganic Chemistry Institute",
    country: "Uzbekistan",
    bio: "Leading Researcher of Complex Compounds Lab., A.S. Sadykov Bioorganic Chemistry Institute.",
    image: "/images/scientific/khamid.png",
  },
  {
    name: "Alexander Kirilovich Gladilin",
    role: "Vice Chairman of the Scientific Committee",
    institution: "Moscow State University named after M. V. Lomonosov",
    country: "Russia",
    bio: "Professor of Moscow State University named after M. V. Lomonosov, Doctor of Chemical Sciences.",
    image: "/images/scientific/alex.jpg",
  },
  {
    name: "Acad. Shamansur Sagdullaev",
    role: "Committee member",
    institution: "Institute of Plant Chemistry",
    country: "Uzbekistan",
    bio: "Director of Institute of Plant Chemistry.",
    image: "/images/scientific/acad.jpg",
  },

  {
    name: "Yunus Türkmen",
    role: "Member of the Scientific Committee",
    institution: "Bilkent University",
    country: "Ankara, Turkey",
    bio: "Professor Bilkent University Department of Chemistry",
    image: "/images/scientific/yunus.jpg",
  },
  {
    name: "Xamidulla To'xtayev",
    role: "Committee member",
    institution: "King Abdullah University of Science and Technology",
    country: "Tashkent, Uzbekistan",
    bio: "Researcher of King Abdullah University of Science and Technology.",
    image: "/images/scientific/xamid.jpg",
  },
  {
    name: "Bekzod Boltayev",
    role: "Committee member",
    institution: "Shifo-Nur multidisciplinary medical center",
    country: "Tashkent, Uzbekistan",
    bio: "Surgeon at Shifo-Nur multidisciplinary medical center.",

    image: "/images/scientific/bek.jpg",
  },
  {
    name: "Muzaffar Maksumov",
    role: "Committee member",
    institution: "The University of Siegen",
    country: "Tashkent, Uzbekistan",
    bio: "Graduate of the University of Siegen.",
    image: "/images/scientific/muzaffar.jpg",
  },

  
  {
    name: "Alex Koronatov",
    role: "Member of the Scientific Committee",
    institution: "Technion",
    country: "Croatia",
    bio: "Alex is organic chemist who loves teaching. He enjoys preparing and solving chemistry Olympiad tasks.",
    image: "/images/scientific/Koronatov.jpg",
  },
  {
    name: "Andrei Shved",
    role: "Member of Science Committee",
    institution: "ETH Zurich",
    country: "Switzerland",
    bio: "Andrei is a dedicated teacher with rigorous scientific training and many years of experience in international Chemistry Olympiads",
    image: "/images/scientific/Andrei.jpg",
  },
  {
    name: "Prof. Vadim Eremin",
    role: "Member of the Science Committee",
    institution: "Moscow State University, Chemistry Department",
    country: "Russia",
    bio: "Professor Eremin is a professor of physical chemistry with a great experience in All-Russian and international chemistry olympiads.",
    linkedin: "",
    image: "/images/scientific/Vadim.jpg",
  },
];

export function ScientificCommittee() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-green-50 to-emerald-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Scientific Committee
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Distinguished international experts ensuring the highest scientific
            standards for ICHO 2026 competition problems and evaluation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {scientificCommitteeMembers.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <Avatar className="w-20 h-20 mx-auto mb-3 ring-4 ring-green-100 group-hover:ring-green-200 transition-all">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="text-base font-semibold bg-gradient-to-br from-green-500 to-emerald-600 text-white">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>

                  <h3 className="text-lg font-bold text-gray-900 mb-1 leading-tight">
                    {member.name}
                  </h3>

                  <div className="mb-2">
                    <Badge
                      variant="secondary"
                      className="bg-green-100 text-green-800 text-xs"
                    >
                      {member.role}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <p className="text-gray-700 font-medium">
                    {member.institution}
                  </p>

                  <p className="text-gray-600 flex items-center justify-center">
                    <span className="inline-block w-4 h-3 bg-gray-300 rounded-sm mr-2"></span>
                    {member.country}
                  </p>

                  <div className="pt-2">
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 space-y-1">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-green-600 hover:text-green-800 text-xs font-medium transition-colors block truncate"
                      title={member.email}
                    >
                      {member.email}
                    </a>

                    {member.linkedin && member.linkedin !== "" && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-800 text-xs font-medium transition-colors block"
                      >
                        LinkedIn Profile
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
