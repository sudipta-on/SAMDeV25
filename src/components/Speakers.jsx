import SpeakerTile from "./SpeakerTile";
import { useTheme } from "/src/components/ThemeContext";
import Speaker1 from "/src/assets/images/male.png";
import Speaker2 from "/src/assets/images/male.png";
// ... import other speaker photos

export default function SpeakersSection() {
  const { theme } = useTheme();

  const speakers = [
    {
      photo: Speaker1,
      name: "Prof. V. K. Saraswat*",
      title: "Member NITI Aayog, & Former Director General",
      company: "Defence Research and Development Organisation (DRDO)",
    },
    {
      photo: Speaker2,
      name: "Prof. Ajay Sood",
      title: "Principal Scientific Adviser",
      company: "Government of India",
    },
    {
      photo: Speaker2,
      name: "Prof. Ajay Sood",
      title: "Principal Scientific Adviser",
      company: "Government of India",
    },
    {
      photo: Speaker2,
      name: "Prof. Ajay Sood",
      title: "Principal Scientific Adviser",
      company: "Government of India",
    },
    // ... add all other speakers
  ];

  return (
    <section id="speakers" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className={`text-3xl sm:text-4xl font-bold ${theme==="light"?"text-zinc-900":"text-zinc-100"} `}>
          Meet Our <span className={`${theme==="light"?"bg-red-600":"bg-blue-600"} bg-clip-text text-transparent`}>
                  Eminent Speakers
                </span>{" "}
        </h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
          Learn from industry pioneers and thought leaders who are shaping the future of technology across various domains.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {speakers.map((sp, i) => (
          <SpeakerTile
            key={i}
            photo={sp.photo}
            name={sp.name}
            title={sp.title}
            company={sp.company}
          />
        ))}
      </div>
    </section>
  );
}
