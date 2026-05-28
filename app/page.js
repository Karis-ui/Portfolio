import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Lab from "@/components/Lab";

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Hero />
      <About />
      <Contact />
      <Skills />
      <Projects />
      <Achievements />
      <Lab />
    </main>
  );
}
