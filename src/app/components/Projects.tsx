import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  features: string[];
  platform: string;
  githubLink?: string;
  highlight?: boolean;
}

export function Projects() {
  const featuredProjects: Project[] = [
    {
      title: "ElderEase",
      description:
        "Elder Care Management System - Capstone project for 4th year CompSci students in Pasig City",
      tech: [
        "React",
        "Vite",
        "Tailwind",
        "Firebase",
        "Face-API",
        "Tesseract.js",
      ],
      features: [
        "Dual-portal system for seniors/families and caregivers",
        "Real-time data syncing via Firebase",
        "Face recognition for identity verification",
        "OCR document scanning",
        "Care service tracking",
      ],
      platform: "Web",
      githubLink: "https://github.com/Rivaly-Kun/ElderEase-Admin",
      highlight: true,
    },
    {
      title: "PAKYAW",
      description:
        "Ride-hailing app to address Ormoc City's congested terminal issues",
      tech: ["Mobile Development", "Geolocation", "Real-time Matching"],
      features: [
        "Top 2 in LGU Ormoc Business Plan Prototype",
        "Designed to reduce terminal congestion",
        "Real-time ride matching",
        "Location-based services",
      ],
      platform: "Mobile",
      githubLink: "https://github.com/Rivaly-Kun/PakYaw_Mobile",
      highlight: true,
    },
    {
      title: "Keitech Kananga School Student Admission System",
      description: "A student enrollment and record management system.",
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "Electron",
        "SQLite",
        "Tesseract OCR",
      ],
      features: [
        "Student enrollment workflow",
        "Student record management",
        "OCR document capture with Tesseract",
      ],
      platform: "Desktop",
      githubLink: "https://github.com/Rivaly-Kun/KeitechAd-Electron",
    },
    {
      title: "AI Gemini Financial Manager",
      description:
        "Personal finance management enhanced with AI assistant and mobile support",
      tech: ["React", "Vite", "Tailwind", "Firebase", "Gemini AI"],
      features: [
        "Dashboard with transaction tracking",
        "Budget and bill management",
        "Goals and investment monitoring",
        "AI-powered spending coach",
        "Cross-platform (Web + Mobile)",
      ],
      platform: "Web + Mobile",
    },
    {
      title: "PayrollSystem",
      description:
        "A payroll manager to compute salaries with deductions, overtime, and leave rules",
      tech: ["C# .NET WinForms", "SQLite"],
      features: [
        "Salary computation with deductions",
        "Overtime calculation",
        "Leave management",
        "Employee record tracking",
      ],
      platform: "Windows",
      githubLink: "https://github.com/Rivaly-Kun/PayrollSystem",
    },
    {
      title: "AI Study Buddy",
      description:
        "Comprehensive study application with AI assistance and multiple learning modes",
      tech: ["C# WinForms", "SQLite", "Vertex AI"],
      features: [
        "PDF loading and parsing",
        "Quiz mode with AI-generated questions",
        "Focus mode (15 min break + 30 min study)",
        "Cram mode with topic summaries",
        "AI text-to-speech",
      ],
      platform: "Windows",
      githubLink: "https://github.com/Rivaly-Kun/AI-Study-Buddy",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Featured Projects
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            A selection of my best full-stack applications
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-card border rounded-lg p-6 hover:shadow-xl transition-shadow ${
                  project.highlight
                    ? "border-primary shadow-lg ring-2 ring-primary/20"
                    : "border-border"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <span className="text-sm text-muted-foreground px-2 py-1 bg-accent rounded">
                      {project.platform}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 hover:bg-accent rounded-full transition-colors"
                        aria-label="View code"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-muted-foreground flex items-start"
                      >
                        <span className="mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
