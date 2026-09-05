import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { GithubSection } from "@/components/sections/GithubSection";
import { LeetCodeSection } from "@/components/sections/LeetCodeSection";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <GithubSection />
        <LeetCodeSection />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
