import { useState, useEffect } from "react";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Projects } from "@/app/components/Projects";
import { Achievements } from "@/app/components/Achievements";
import { Skills } from "@/app/components/Skills";
import { AllProjects } from "@/app/components/AllProjects";
import { Contact } from "@/app/components/Contact";
import { Navigation } from "@/app/components/Navigation";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "achievements",
        "projects",
        "skills",
        "all-projects",
        "contact",
      ];

      const navHeight = 64;
      const activationLine = navHeight + 32;
      const viewportBottom = window.scrollY + window.innerHeight;
      const isNearPageBottom =
        viewportBottom >= document.documentElement.scrollHeight - 8;
      let matchedSection = sections[0];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top } = element.getBoundingClientRect();
          if (top <= activationLine) {
            matchedSection = section;
          } else {
            break;
          }
        }
      }

      if (isNearPageBottom) {
        matchedSection = "contact";
      }

      setActiveSection((current) =>
        current === matchedSection ? current : matchedSection,
      );
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} />
      <Hero />
      <About />
      <Achievements />
      <Projects />
      <Skills />
      <AllProjects />
      <Contact />
    </div>
  );
}
