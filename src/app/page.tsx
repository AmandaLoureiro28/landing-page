
import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/skills";
import Sobre from "./components/Sobre"






export default function Home() {
  return (
    <main>
      <Hero />
      <Sobre />
      <Skills />
      <Projects />
      <Contacts />
    </main>
  );
}