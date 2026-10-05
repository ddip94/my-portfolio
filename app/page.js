import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { data } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-stone-200 py-8 text-center text-sm text-stone-500 dark:border-stone-800">
        © {new Date().getFullYear()} {data.name}
      </footer>
    </>
  );
}
