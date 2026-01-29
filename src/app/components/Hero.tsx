import { motion } from "motion/react";
import { Github, Facebook, Mail, ChevronDown } from "lucide-react";

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center mb-4">
            <img
              src="/profile.jpg"
              alt="Ernst Livin Gabriel B. Cahiyang"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover border-2 border-primary/30 shadow-lg"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            Ernst Livin Gabriel B. Cahiyang
          </h1>
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm sm:text-base shadow-sm">
              Full-stack Web/Mobile Developer at Cenixys • Backend Web Developer
              at Orynx
            </span>
          </div>
          <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6">
            Full-Stack Developer & AI Enthusiast
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            BSIT 3201 | Building innovative solutions with modern technologies
          </p>

          <div className="flex items-center justify-center gap-4 mb-12">
            <a
              href="https://github.com/Rivaly-Kun"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-accent hover:bg-accent/80 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.facebook.com/Rival.d.orig"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-accent hover:bg-accent/80 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="mailto:gabzcah@gmail.com"
              className="p-3 rounded-full bg-accent hover:bg-accent/80 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={scrollToAbout}
            className="animate-bounce text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown size={32} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
