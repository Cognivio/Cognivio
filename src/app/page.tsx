import Hero from "./hero";
import Navbar from "./navbar";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen relative">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
      </main>
    </div>
  );
}
