import CompetitionCard from "../ui/CompetitionCard";
import Image from "next/image";

export default function Competition() {
  const competitions = [
    {
      id: 1,
      title: "Competition A",
      category: "Data Mining",
      rank: "10",
      totalParticipants: 72,
    },
    {
      id: 2,
      title: "Competition B",
      category: "Datathon",
      rank: "3",
      totalParticipants: 45,
    },
    {
      id: 3,
      title: "Competition C",
      category: "Artificial Intelligence",
      rank: "5",
      totalParticipants: 128,
    },
  ];

  return (
    <div className="bg-honey-light min-h-screen h-screen w-screen px-12 py-10">
      <h2 className="font-bold text-3xl text-center text-gray-900">
        Competition
      </h2>

      <div>
        <span className="mr-2">Year </span>
        <select name="year-competition" id="year-competition">
          {["2020", "2021", "2022", "2023", "2024", "2025"].map(
            (year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            )
          )}
        </select>
      </div>

      {/* Competition Preview Image */}
      <div className="mb-8 flex justify-center">
        <div
          className="rounded-2xl bg-gray-300 overflow-hidden"
          style={{
            width: "379px",
            height: "253px",
            aspectRatio: "379/253",
            boxShadow: "2px 3px 10px 0 rgba(0, 0, 0, 0.59)",
          }}
        >
          <Image
            src="/competition-preview.png"
            alt="Competition preview"
            width={379}
            height={253}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex flex-col gap-6 max-w-2xl mx-auto">
        {competitions.map((competition) => (
          <CompetitionCard
            key={competition.id}
            title={competition.title}
            category={competition.category}
            rank={competition.rank}
            totalParticipants={competition.totalParticipants}
          />
        ))}
      </div>
    </div>
  );
}
