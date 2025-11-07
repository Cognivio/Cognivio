import Competition from "@components/root/Competition";
import Footer from "@components/ui/Footer";
import Hero from "@components/root/Hero";
import Mission from "@components/root/Mission";
import Navbar from "@components/ui/Navbar";

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
