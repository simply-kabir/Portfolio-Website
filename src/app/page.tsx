import Hero from "@/components/sections/hero/hero";
import Philosophy from "@/components/sections/philosophy";
import Projects from "@/components/sections/projects";
import Experience from "@/components/sections/experience";
import Skills from "@/components/sections/skills";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Philosophy />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </main>
  );
}