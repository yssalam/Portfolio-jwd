import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Project from "@/components/sections/Project";
import Process from "@/components/sections/Process";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Portfolio() {
  return (
    <main className="min-h-screen overflow-x-hidden profile text-[var(--text-primary)]">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Skills />
      <Project />
      <Process />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
