import { useState, useEffect } from 'react';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Projects } from '@/app/components/Projects';
import { Achievements } from '@/app/components/Achievements';
import { Skills } from '@/app/components/Skills';
import { AllProjects } from '@/app/components/AllProjects';
import { Contact } from '@/app/components/Contact';
import { Navigation } from '@/app/components/Navigation';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'achievements', 'skills', 'all-projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} />
      <Hero />
      <About />
      <Projects />
      <Achievements />
      <Skills />
      <AllProjects />
      <Contact />
    </div>
  );
}