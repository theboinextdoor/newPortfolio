import Aboutme from "@/components/Aboutme";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import { Project } from "@/components/Project";
import MovingCard from "@/components/ui/MovingCard";
import Navbar from "@/components/ui/Navbar";
import { SparklesPreview } from "@/components/ui/SparklesPreview";


export default function Home() {
  return (
    <main className="relative flex flex-col overflow-hidden  justify-center items-center">
      <div className="min-w-screen w-full">
        <Navbar />
        <Hero />
        <Aboutme />
        <MovingCard />
        <SparklesPreview />
        <Project />
        <Contact />
      </div>
    </main>
  );
}
