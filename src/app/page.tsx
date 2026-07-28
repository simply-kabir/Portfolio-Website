import Hero from "@/components/sections/hero/hero";
import Projects from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import FoundationSection from "@/components/sections/foundation/FoundationSection";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Skills />
      <FoundationSection />
      <Contact />
      <Footer />
    </main>
  );
}