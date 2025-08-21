import SpeakerTile from "./SpeakerTile";
import { useTheme } from "/src/components/ThemeContext";


const committee = [
  {
    name: "Prof. Suman Chakraborty",
    role: "Patron",
    title: "Director, IIT Kharagpur",
    photo: "https://www.iitkgp.ac.in/assets/images/director_SC.jpg",
  },
  {
    name: "Prof. Somnath Bharadwaj",
    role: "Co-Patron",
    title: "Head, Department of Physics, IIT Kharagpur",
    photo: "data:image/png;base64, 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",
  },
  {
    name: "Prof. Amal Kumar Das",
    role: "General Chairs",
    title: "Professor, IIT Kharagpur",
    photo: "/images/amal-das.png",
  },
  {
    name: "Prof. Rajat Mahapatra",
    role: "General Chairs",
    title: "Professor, IIT Kharagpur",
    photo: "/images/rajat.png",
  },
  {
    name: "Prof. Partha Roy Chaudhuri",
    role: "Secretaries",
    title: "Professor, IIT Kharagpur",
    photo: "/images/partha.png",
  },
  {
    name: "Prof. Shivakiran B. N. Bhaktha",
    role: "Secretaries",
    title: "Professor, IIT Kharagpur",
    photo: "/images/shivakiran.png",
  },
  {
    name: "Dr. Koustuv Das",
    role: "Secretaries",
    title: "Assistant Professor, IIT Kharagpur",
    photo: "/images/koustuv.png",
  },
  {
    name: "Prof. Dipak Kumar Goswami",
    role: "Sponsorship",
    title: "Professor, IIT Kharagpur",
    photo: "/images/dipak.png",
  },
  {
    name: "Prof. Samaresh Das",
    role: "Sponsorship",
    title: "Professor, IIT Kharagpur",
    photo: "/images/samaresh.png",
  },
  {
    name: "Prof. Sanjeev Kumar Srivastava",
    role: "Hospitality",
    title: "Professor, IIT Kharagpur",
    photo: "/images/sanjeev.png",
  },
  {
    name: "Dr. Achintya Sinha",
    role: "Hospitality",
    title: "Assistant Professor, IIT Kharagpur",
    photo: "/images/achintya.png",
  },
  {
    name: "Dr. Debashis Panda",
    role: "Hospitality",
    title: "Assistant Professor, IIT Kharagpur",
    photo: "/images/debashis.png",
  },
  {
    name: "Prof. Sonjoy Majumder",
    role: "Webpage/Registration",
    title: "Professor, IIT Kharagpur",
    photo: "/images/sonjoy.png",
  },
  {
    name: "Dr. Subhrajit Mukherjee",
    role: "Webpage/Registration",
    title: "Assistant Professor, IIT Kharagpur",
    photo: "/images/subhrajit.png",
  },
  {
    name: "Prof. Achintya Dhar",
    role: "Technical Program Chairs",
    title: "Professor, IIT Kharagpur",
    photo: "/images/dhar.png",
  },
  {
    name: "Dr. Debraj Choudhury",
    role: "Technical Program Chairs",
    title: "Assistant Professor, IIT Kharagpur",
    photo: "/images/debraj.png",
  },
  {
    name: "Prof. Siddheswar Maikap",
    role: "Technical Program Chairs",
    title: "Professor, IIT Kharagpur",
    photo: "/images/siddheswar.png",
  },
];




export default function OrganizingCommittee() {
  const roles = [
    "Patron",
    "Co-Patron",
    "General Chairs",
    "Secretaries",
    "Sponsorship",
    "Hospitality",
    "Webpage/Registration",
    "Technical Program Chairs",
  ];
  const { theme } = useTheme();

  return (
    <section id="committee" className="py-12 px-6 space-y-16">
      {/* Patron + Co-Patron side by side */}
      <div className={`backdrop-blur-xs rounded-3xl p-10`} >
      <div className="text-center mb-12">
        <h2 className={`text-3xl sm:text-4xl font-bold ${theme==="light"?"text-zinc-900":"text-zinc-100"} `}>
          <span className={`${theme==="light"?"bg-red-600":"bg-blue-600"} bg-clip-text text-transparent`}>
                  Patron & Co-Patron
                </span>{" "}
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-items-center">
        
        {["Patron", "Co-Patron"].map((role) =>
          committee
            .filter((p) => p.role === role)
            .map((person, idx) => (
              <SpeakerTile
                key={idx}
                name={person.name}
                role={person.role}
                title={person.title}
                photo={person.photo}
                large
              />
            ))
        )}
      </div>
      </div>

      {/* Other roles */}
      <div className="text-center mb-12">
        <h2 className={`text-3xl sm:text-4xl font-bold ${theme==="light"?"text-zinc-900":"text-zinc-100"} `}>
          Organizing <span className={`${theme==="light"?"bg-red-600":"bg-blue-600"} bg-clip-text text-transparent`}>
                  Committee
                </span>{" "}
        </h2>
      </div>
      {roles
        .filter((r) => r !== "Patron" && r !== "Co-Patron")
        .map((role) => {
          const members = committee.filter((p) => p.role === role);
          if (members.length === 0) return null;

          return (
            <div key={role}>
              <h2 className="text-3xl font-bold text-center mb-8 text-red-600">
                {role}
              </h2>
              <div className="flex flex-wrap justify-center gap-10">
                {members.map((person, idx) => (
                  <SpeakerTile
                    key={idx}
                    name={person.name}
                    role={person.role}
                    title={person.title}
                    photo={person.photo}
                  />
                ))}
              </div>
            </div>
          );
        })}
    </section>
  );
}
