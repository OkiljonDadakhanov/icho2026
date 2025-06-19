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

const organizingCommitteeMembers: CommitteeMember[] = [
  {
    id: "1",
    name: "Alisher Ubbiyev",
    role: "Chief of Organising Committee",
    affiliation:
      "Director of the Agency of Specialized Educational Institutions",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "2",
    name: "To'raboy Shermatov",
    role: "Vice Chairman of the Organising Committee member",
    affiliation: "Director of Science Olympiad Center",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "3",
    name: "Sevara Shakirova",
    role: "Committee member",
    affiliation:
      "Vice Director of the Agency of Specialized Educational Institutions",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "4",
    name: "Akromxo'ja Umarxodjayev",
    role: "Committee member",
    affiliation: "Head of the event organization department",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "5",
    name: "Jo'rabek Jangirov",
    role: "Content Department",
    affiliation: "Head of Web & Social Networks",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "6",
    name: "Inom Xujamov",
    role: "Head of IT technical department",
    affiliation: "Head of IT technical department",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "7",
    name: "Oybek Usmonov",
    role: "Head of the transport and logistics department",
    affiliation: "Head of the transport and logistics department",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "8",
    name: "Davron Tuxtayev",
    role: "Exam preparation and supporting track",
    affiliation: "Exam preparation and supporting track",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "9",
    name: "Shovqiddin Ishmurodov",
    role: "Head of the department for working with volunteers",
    affiliation: "Head of the department for working with volunteers",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "10",
    name: "Tamanno To'rayeva",
    role: "Committee member",
    affiliation: "Committee member",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "11",
    name: "Ibrogimov Mirzoxid",
    role: "Committee member",
    affiliation: "Committee member",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "12",
    name: "Fozilov Jamoliddin",
    role: "Committee member",
    affiliation: "Committee member",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "13",
    name: "Fayyoz Tuychiyev",
    role: "Committee member",
    affiliation: "Committee member",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "14",
    name: "Janar Djumabayeva",
    role: "Committee member",
    affiliation: "Committee member",
    image: "/placeholder.svg?height=120&width=120",
  },
  {
    id: "15",
    name: "Abumuslim Uloshev",
    role: "Head of finance, accounting and procurement department",
    affiliation: "Head of finance, accounting and procurement department",
    image: "/placeholder.svg?height=120&width=120",
  },
];

export function OrganizingCommittee() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Organizing Committee of IChO 2026
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated team working to make ICHO 2026 in Uzbekistan an
            unforgettable experience for all participants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {organizingCommitteeMembers.map((member) => (
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
