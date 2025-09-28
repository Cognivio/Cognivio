import WorkCard from "./components/work-card";

export default function Hero() {
  return (
    <div className="flex flex-col justify-evenly bg-honey-light min-h-screen h-screen w-screen px-12 py-24">
      <p className="font-bold text-center">
        Lorem ipsum scelerisque sed semper phasellus tristique quis in vel
        suspendisse
      </p>
      <p className="text-center">Velit dictum nunc ornare ut augue turpis.</p>

      <div className="flex flex-col gap-3">
        <button className="w-full bg-gold text-white block rounded-lg drop-shadow-[0_2px_4px_rgba(116,39,3,0.25)]">
          Contact Us
        </button>
        <button className="w-full bg-white text-gold block rounded-lg drop-shadow-[0_2px_4px_rgba(116,39,3,0.25)]">
          About Us
        </button>
      </div>

      <div className="w-full">
        <h2 className="font-semibold text-center my-4">Our Works</h2>
        <div className="w-full overflow-x-auto">
          <div className="flex gap-4 pb-4 min-w-max">
            {Array.from({ length: 20 }, (_, index) => (
              <WorkCard
                key={index}
                title={`Project ${index + 1}`}
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt."
                className="flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
