import { motion } from "motion/react";
import { Trophy, Award, Target, Shield } from "lucide-react";

interface Achievement {
  title: string;
  description: string;
  year: string;
  icon: typeof Trophy;
  highlight: boolean;
}

export function Achievements() {
  const achievements: Achievement[] = [
    {
      title: "Byte Forward Competition",
      description:
        "STI College Ormoc representative - Placed among top 10 from 60+ schools",
      year: "2025",
      icon: Trophy,
      highlight: true,
    },
    {
      title: "Philippine Military Cyber Defense",
      description:
        "Top 10 placement among 21+ schools in cyber defense exercise",
      year: "2025",
      icon: Shield,
      highlight: true,
    },
    {
      title: "LGU Ormoc Business Plan",
      description:
        "Top 2 for PAKYAW ride-hailing app prototype - STI Ormoc representative",
      year: "2025",
      icon: Target,
      highlight: true,
    },
    {
      title: "STI College CodeFest 2024",
      description: "2nd Place",
      year: "2024",
      icon: Award,
      highlight: false,
    },
    {
      title: "STI College CodeFest 2025",
      description: "3rd Place",
      year: "2025",
      icon: Award,
      highlight: false,
    },
    {
      title: "STI College CodeFest 2023",
      description: "3rd Place",
      year: "2023",
      icon: Award,
      highlight: false,
    },
    {
      title: "EVCO Competition",
      description: "STI College Ormoc representative - Participated",
      year: "2024",
      icon: Trophy,
      highlight: false,
    },
  ];

  return (
    <section
      id="achievements"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Achievements & Awards
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Recognition and competition placements
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`bg-card border rounded-lg p-6 hover:shadow-lg transition-all ${
                    achievement.highlight
                      ? "border-primary shadow-md"
                      : "border-border"
                  }`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={`p-3 rounded-full ${
                        achievement.highlight
                          ? "bg-primary text-primary-foreground"
                          : "bg-accent"
                      }`}
                    >
                      <Icon size={24} />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {achievement.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {achievement.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
