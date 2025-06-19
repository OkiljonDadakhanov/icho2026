import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface CommitteeMember {
  id: string;
  name: string;
  role: string;
  affiliation: string;
  email?: string;
  image?: string;
}

const supervisoryCommitteeMembers: CommitteeMember[] = [
  {
    id: "1",
    name: "Xilola Umarova",
    role: "Chairman of the National Supervisory Committee",
    affiliation: "Minister of Pre-school and School Education",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "2",
    name: "Shavkat Umurzaqov",
    role: "Committee member",
    affiliation: "Mayor of Tashkent",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "3",
    name: "Kongratbay Sharipov",
    role: "Committee member",
    affiliation: "Minister of Higher Education, Science and Innovation",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "4",
    name: "Po'lat Bobojonov",
    role: "Committee member",
    affiliation: "Minister of the Interior",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "5",
    name: "Ozodbek Nazarbekov",
    role: "Committee member",
    affiliation: "Minister of Culture",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "6",
    name: "Ilxom Maxkamov",
    role: "Committee member",
    affiliation: "Minister of Transport",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "7",
    name: "Bahromjon Aloyev",
    role: "Committee member",
    affiliation: "Deputy Minister of Foreign Affairs",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "8",
    name: "Asilbek Xudayarov",
    role: "Committee member",
    affiliation: "Minister of Health",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "9",
    name: "Alisher Ubbiyev",
    role: "Committee member",
    affiliation:
      "Director of the Agency of Specialized Educational Institutions",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "10",
    name: "Odil Temirov",
    role: "Committee member",
    affiliation: 'Chairman of the JSC "Uzkimyosanoat"',
    image: "/placeholder.svg?height=120&width=120",
  },
];

export function SupervisoryCommittee() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            National Supervisory Committee of IChO 2026
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the distinguished members of the National Supervisory Committee
            overseeing the International Chemistry Olympiad 2026 in Uzbekistan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {supervisoryCommitteeMembers.map((member) => (
            <Card
              key={member.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-white/80 backdrop-blur-sm"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <Avatar className="w-28 h-28 mx-auto mb-4 ring-4 ring-blue-100 group-hover:ring-blue-200 transition-all duration-300">
                    <AvatarImage
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="text-lg font-semibold bg-gradient-to-br from-blue-500 to-indigo-600 text-white">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                  {member.name}
                </h3>

                <p className="text-gray-700 text-sm mb-3 font-medium leading-relaxed">
                  {member.affiliation}
                </p>

                <div className="mb-2">
                  <span className="inline-block bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 text-xs font-medium px-3 py-1 rounded-full border border-blue-200">
                    {member.role}
                  </span>
                </div>

                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors duration-200"
                  >
                    {member.email}
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
