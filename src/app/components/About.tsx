import { motion } from "motion/react";
import { Code2, Brain, Rocket } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Full-Stack Development",
      description:
        "Experienced in building end-to-end applications with React, Firebase, and modern web technologies.",
    },
    {
      icon: Brain,
      title: "AI Integration",
      description:
        "Skilled in integrating AI capabilities using Gemini AI, Vertex AI, and various machine learning tools.",
    },
    {
      icon: Rocket,
      title: "Problem Solver",
      description:
        "Passionate about creating innovative solutions that address real-world problems and improve user experiences.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12">
            About Me
          </h2>

          <div className="max-w-3xl mx-auto mb-16">
            <p className="text-lg text-center text-muted-foreground leading-relaxed">
              I'm a dedicated Full-Stack Developer and BSIT student with a
              passion for creating innovative, user-centric applications. With
              experience across web, mobile, and desktop platforms, I specialize
              in building robust solutions that leverage cutting-edge
              technologies including AI, cloud services, and modern frameworks.
              My work has been recognized in multiple competitions, and I'm
              committed to continuous learning and pushing the boundaries of
              what's possible.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary text-primary-foreground rounded-full">
                    <item.icon size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-center">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
