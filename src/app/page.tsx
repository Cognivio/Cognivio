import Competition from "./competition";
import Footer from "./footer";
import Hero from "./hero";
import Mission from "./mission";
import Navbar from "./navbar";

export default function Home() {
  return (
    <div className="font-sans items-center justify-items-center min-h-screen relative">
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <Mission />
        <Competition />
      </main>

      <Footer />
    </div>
  );
}
