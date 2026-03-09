import React from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  Twitter, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code2, 
  Palette, 
  Cpu, 
  Globe,
  ChevronRight
} from 'lucide-react';

// --- Types ---
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

// --- Components ---

const BubbleBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bubble-gradient opacity-30 blur-[100px] animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bubble-gradient-pink opacity-20 blur-[120px]" />
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] rounded-full bg-indigo-500/10 blur-[80px]" />
      
      {/* Animated Floating Bubbles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full glass opacity-20"
          style={{
            width: Math.random() * 300 + 100,
            height: Math.random() * 300 + 100,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="glass px-6 py-3 rounded-full flex items-center gap-8">
        <a href="#home" className="text-sm font-medium hover:text-brand-pink transition-colors">Home</a>
        <a href="#about" className="text-sm font-medium hover:text-brand-pink transition-colors">About</a>
        <a href="#projects" className="text-sm font-medium hover:text-brand-pink transition-colors">Projects</a>
        <a href="#contact" className="text-sm font-medium hover:text-brand-pink transition-colors">Contact</a>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-20 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6 max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-semibold tracking-wider uppercase text-brand-pink">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500"></span>
          </span>
          Available for new opportunities
        </div>
        
        <h1 className="text-6xl md:text-8xl font-display font-extrabold tracking-tight leading-none">
          Creative <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-pink">Developer</span>
          <br />& Designer
        </h1>
        
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
          Building immersive digital experiences where aesthetics meet functionality. 
          Specialized in React, Motion, and modern UI/UX.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 pt-8">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-purple to-brand-pink text-white font-bold shadow-lg shadow-brand-purple/25 hover:scale-105 transition-transform">
            View My Work
          </button>
          <button className="px-8 py-4 rounded-full glass hover:bg-white/10 transition-colors font-bold">
            Let's Talk
          </button>
        </div>
      </motion.div>
    </section>
  );
};

const About = () => {
  const skills = [
    { name: 'React', icon: <Code2 size={18} /> },
    { name: 'TypeScript', icon: <Cpu size={18} /> },
    { name: 'Tailwind CSS', icon: <Palette size={18} /> },
    { name: 'Framer Motion', icon: <Globe size={18} /> },
    { name: 'UI Design', icon: <Palette size={18} /> },
    { name: 'Node.js', icon: <Cpu size={18} /> },
  ];

  return (
    <section id="about" className="py-24 px-4 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-3xl overflow-hidden glass p-2">
            <img 
              src="https://picsum.photos/seed/portfolio-me/800/800" 
              alt="Profile" 
              className="w-full h-full object-cover rounded-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl hidden md:block">
            <p className="text-3xl font-bold text-brand-pink">5+</p>
            <p className="text-xs text-white/50 uppercase tracking-widest">Years Experience</p>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-4xl font-display font-bold">About Me</h2>
            <p className="text-white/70 leading-relaxed">
              I'm a passionate developer who loves creating beautiful and functional user interfaces. 
              My journey started with a curiosity for how things work on the web, which evolved into 
              a career dedicated to crafting exceptional digital products.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill) => (
              <div key={skill.name} className="glass p-4 rounded-2xl flex items-center gap-3 hover:bg-white/10 transition-colors group cursor-default">
                <div className="text-brand-purple group-hover:text-brand-pink transition-colors">
                  {skill.icon}
                </div>
                <span className="font-medium text-sm">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

interface ProjectCardProps {
  project: Project;
  key?: React.Key;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative glass rounded-3xl overflow-hidden"
    >
      <div className="aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-6 space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full bg-white/5 text-white/50">
              {tag}
            </span>
          ))}
        </div>
        <h3 className="text-xl font-bold group-hover:text-brand-pink transition-colors">{project.title}</h3>
        <p className="text-sm text-white/60 line-clamp-2">{project.description}</p>
        <div className="flex items-center justify-between pt-4">
          <a href={project.link} className="flex items-center gap-2 text-sm font-bold text-brand-purple hover:text-brand-pink transition-colors">
            View Project <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Nebula Dashboard",
      description: "A comprehensive analytics platform for space exploration data with real-time visualizations.",
      tags: ["React", "D3.js", "Tailwind"],
      image: "https://picsum.photos/seed/nebula/800/450",
      link: "#"
    },
    {
      id: 2,
      title: "Lumina AI",
      description: "An AI-powered creative assistant that helps designers generate color palettes and typography systems.",
      tags: ["Next.js", "OpenAI", "Framer"],
      image: "https://picsum.photos/seed/lumina/800/450",
      link: "#"
    },
    {
      id: 3,
      title: "Ether Wallet",
      description: "A secure and minimalist cryptocurrency wallet with a focus on user experience and accessibility.",
      tags: ["TypeScript", "Web3", "Motion"],
      image: "https://picsum.photos/seed/ether/800/450",
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-display font-bold">Selected Projects</h2>
        <p className="text-white/50 max-w-xl mx-auto">A collection of my recent work focusing on design and technology.</p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      <div className="text-center pt-8">
        <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass hover:bg-white/10 transition-colors font-bold group">
          View All Projects <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 max-w-4xl mx-auto text-center space-y-12">
      <div className="glass p-12 rounded-[3rem] space-y-8 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-purple via-brand-pink to-brand-purple" />
        
        <div className="space-y-4">
          <h2 className="text-4xl font-display font-bold">Start a Conversation</h2>
          <p className="text-white/60">Have a project in mind or just want to say hi? My inbox is always open.</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          <a href="mailto:hello@example.com" className="flex items-center gap-3 px-6 py-3 rounded-2xl glass hover:bg-white/10 transition-colors group">
            <Mail className="text-brand-pink" />
            <span className="font-bold">Email Me</span>
          </a>
          <div className="flex gap-4">
            {[Github, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="p-4 rounded-2xl glass hover:bg-white/10 transition-colors text-white/70 hover:text-white">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-4 border-t border-white/5 text-center text-white/30 text-sm">
      <p>© {new Date().getFullYear()} Bubble Portfolio. Crafted with love and code.</p>
    </footer>
  );
};

export default function App() {
  return (
    <div className="relative font-sans">
      <BubbleBackground />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
