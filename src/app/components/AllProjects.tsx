import { motion } from 'motion/react';
import { Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  platform: string;
  githubLink?: string;
}

export function AllProjects() {
  const allProjects: Project[] = [
    {
      title: 'ElderEase',
      description: 'A dual-portal system for elderly care services, featuring a Client App for seniors/families and an Admin Dashboard for caregivers. Includes real-time data syncing via Firebase, face recognition (face-api) for identity verification, OCR document scanning (Tesseract.js), user profile management, and care service tracking.',
      tech: ['React', 'Vite', 'Tailwind', 'Firebase', 'Face-API', 'Tesseract.js'],
      platform: 'Web',
      githubLink: 'https://github.com/Rivaly-Kun/ElderEase-Admin',
    },
    {
      title: 'Accounte',
      description: 'A React + Vite + Tailwind + Firebase app for a campus-style book marketplace. Students browse, buy, sell, chat, and manage profiles; admins run an inventory-backed store. Data is stored in Firebase Realtime Database, files in Firebase Storage, and auth via Firebase Auth.',
      tech: ['React', 'Vite', 'Firebase'],
      platform: 'Web',
      githubLink: 'https://github.com/Rivaly-Kun/Accounte-Admin',
    },
    {
      title: 'AI Manga Translator',
      description: 'A frame that auto translates text into English because most apps like this for manga are a paid service. An open source Gemini AI powered manga translation app.',
      tech: ['Android Java', 'Gemini AI', 'OCR'],
      platform: 'Android',
      githubLink: 'https://github.com/Rivaly-Kun?tab=repositories',
    },
    {
      title: 'AI Gemini Assisted Financial Manager',
      description: 'A React + Vite + Tailwind + Firebase app for personal finance management enhanced with an AI assistant. Users sign in, view a Dashboard, track Transactions, manage Budgets, pay Bills, set Goals, monitor Investments, and get personalized guidance from SpendingCoach and AIChat.',
      tech: ['React', 'Vite', 'Tailwind', 'Firebase', 'Gemini AI'],
      platform: 'Web + Mobile',
      githubLink: 'https://github.com/Rivaly-Kun?tab=repositories',
    },
    {
      title: 'AI Powered Study Buddy',
      description: 'An AI study buddy that lets you load PDFs, have quiz modes, focus mode where it\'s a 15 mins chill time then 30 mins lock in study and AI text to speech, and then there\'s a cram mode where it gets all the topics, sub topics and contents and gives it all a short description.',
      tech: ['C# .NET WinForms', 'SQLite', 'Vertex AI'],
      platform: 'Windows',
      githubLink: 'https://github.com/Rivaly-Kun/AI-Study-Buddy',
    },
    {
      title: 'AI Powered Financial Manager/Consultant',
      description: 'An AI powered app that lets you set goals to save money, buy something, and consults you if you\'re over spending, or not gonna reach your goals what you have to cut down on.',
      tech: ['C# .NET WinForms', 'SQLite', 'Vertex AI'],
      platform: 'Windows',
      githubLink: 'https://github.com/Rivaly-Kun?tab=repositories',
    },
    {
      title: 'PayrollSystem',
      description: 'A payroll manager to compute salaries with deductions, overtime, and leave rules.',
      tech: ['C# .NET WinForms', 'SQLite'],
      platform: 'Windows',
      githubLink: 'https://github.com/Rivaly-Kun/PayrollSystem',
    },
    {
      title: 'Keitech School Student Admission System',
      description: 'A student enrollment and record management system.',
      tech: ['JavaScript', 'Electron', 'SQLite', 'OCR Tesseract'],
      platform: 'Desktop',
      githubLink: 'https://github.com/Rivaly-Kun?tab=repositories',
    },
    {
      title: 'ALL-IN-ONE STI',
      description: 'A Facebook app but for the school you can like, message and comment on posts and see the announcements of the admins.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Firebase'],
      platform: 'Web',
      githubLink: 'https://github.com/Rivaly-Kun?tab=repositories',
    },
    {
      title: 'CourtReserveScheduling',
      description: 'Court reservation system for booking sports courts via mobile and browser.',
      tech: ['Java (Android)', 'HTML', 'CSS', 'JavaScript', 'Firebase'],
      platform: 'Android + Web',
      githubLink: 'https://github.com/Rivaly-Kun?tab=repositories',
    },
    {
      title: 'GovComplaintSystem',
      description: 'A web platform for submitting and tracking public service complaints.',
      tech: ['SCSS', 'CSS', 'JavaScript', 'HTML', 'Firebase'],
      platform: 'Web',
      githubLink: 'https://github.com/Rivaly-Kun?tab=repositories',
    },
    {
      title: 'TaskManager-Android',
      description: 'A to-do list and task tracker with priority and due date features.',
      tech: ['Java (Android)', 'SQLite'],
      platform: 'Android',
      githubLink: 'https://github.com/Rivaly-Kun?tab=repositories',
    },
    {
      title: 'CarRentalSystem',
      description: 'Manages car rentals with booking, return tracking, and listings.',
      tech: ['Java (Android)', 'JavaScript', 'HTML', 'CSS', 'Firebase'],
      platform: 'Android + Web',
      githubLink: 'https://github.com/Rivaly-Kun?tab=repositories',
    },
    {
      title: 'Primeroast Bean',
      description: 'An online food ordering and delivery system where users can browse menus, place orders, and have food delivered to their location. Includes a menu display, order cart, and real-time order tracking.',
      tech: ['Java (Android)', 'CSS', 'JavaScript', 'HTML', 'Python', 'Firebase'],
      platform: 'Android + Web',
      githubLink: 'https://github.com/Rivaly-Kun?tab=repositories',
    },
    {
      title: 'StudentSide_eams',
      description: 'Front-end for a student management system.',
      tech: ['React', 'JavaScript', 'CSS', 'HTML', 'Firebase'],
      platform: 'Web',
      githubLink: 'https://github.com/Rivaly-Kun?tab=repositories',
    },
    {
      title: 'Supabase-QRApk-Cordova',
      description: 'QR-based scanner app using Supabase backend.',
      tech: ['Java', 'Cordova', 'Objective-C', 'JavaScript', 'CSS', 'Supabase'],
      platform: 'Hybrid Android',
      githubLink: 'https://github.com/Rivaly-Kun?tab=repositories',
    },
    {
      title: 'Teacher_Scanner',
      description: 'Scanner app tailored for teachers to capture attendance or IDs.',
      tech: ['JavaScript', 'CSS', 'HTML', 'Cordova', 'Supabase'],
      platform: 'Cordova Android',
      githubLink: 'https://github.com/Rivaly-Kun?tab=repositories',
    },
    {
      title: 'TradinGo-webpage',
      description: 'A trading-based e-commerce website where users can offer goods for trade instead of traditional purchases.',
      tech: ['HTML', 'JavaScript', 'CSS', 'SCSS', 'Firebase'],
      platform: 'Web',
      githubLink: 'https://github.com/Rivaly-Kun?tab=repositories',
    },
    {
      title: 'Cellphone Shop Tracker',
      description: 'Inventory tracker for cellphone sales or repairs.',
      tech: ['CSS', 'HTML', 'JavaScript', 'SQLite'],
      platform: 'Web',
      githubLink: 'https://github.com/Rivaly-Kun?tab=repositories',
    },
    {
      title: 'GeminiChatbot-JavaScript',
      description: 'Simple chatbot interface powered by Gemini API.',
      tech: ['JavaScript', 'HTML'],
      platform: 'Web',
      githubLink: 'https://github.com/Rivaly-Kun?tab=repositories',
    },
    {
      title: 'GeminiAIChatbot Vaadin Framework',
      description: 'Gemini-powered chatbot built with the Vaadin framework.',
      tech: ['TypeScript', 'Java', 'JavaScript', 'HTML', 'CSS'],
      platform: 'Web',
      githubLink: 'https://github.com/Rivaly-Kun?tab=repositories',
    },
    {
      title: 'ChatGpt3.5-Vaadin Framework',
      description: 'ChatGPT 3.5-based chatbot using Java (Vaadin) and frontend tech.',
      tech: ['Java', 'JavaScript', 'HTML', 'CSS'],
      platform: 'Web',
      githubLink: 'https://github.com/Rivaly-Kun?tab=repositories',
    },
    {
      title: 'NardDB',
      description: 'Basic CRUD database system for managing entries.',
      tech: ['Python', 'JavaScript', 'CSS', 'HTML', 'SQL'],
      platform: 'Web + Python',
      githubLink: 'https://github.com/Rivaly-Kun?tab=repositories',
    },
    {
      title: 'ChatBot-GoogleSearchEngineAPI',
      description: 'Chatbot that integrates Google Search Engine API for results.',
      tech: ['Java', 'HTML', 'CSS'],
      platform: 'Web',
      githubLink: 'https://github.com/Rivaly-Kun?tab=repositories',
    },
    {
      title: 'PAKYAW',
      description: 'Ride-hailing app to aid Ormoc City\'s congested terminal. Top 2 for Local Government Unit of Ormoc business plan prototype.',
      tech: ['Mobile Development', 'Geolocation', 'Real-time Matching'],
      platform: 'Mobile',
      githubLink: 'https://github.com/Rivaly-Kun/PakYaw_Mobile',
    },
  ];

  return (
    <section id="all-projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-accent/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            All Projects
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Complete portfolio of full-stack applications across multiple platforms
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-card border border-border rounded-lg p-5 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                    <span className="text-xs text-muted-foreground px-2 py-1 bg-accent rounded">
                      {project.platform}
                    </span>
                  </div>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-accent rounded-full transition-colors flex-shrink-0"
                    aria-label="View code"
                  >
                    <Github size={18} />
                  </a>
                </div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded"
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