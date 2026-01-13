import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

interface ProjectsProps {
  id: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Analytics",
    description: "Real-time dashboard for online retailers with data visualization and predictive inventory management.",
    tags: ["React", "TypeScript", "D3.js", "Supabase"],
    imageUrl: "https://picsum.photos/800/600?random=1",
    link: "#"
  },
  {
    id: 2,
    title: "Neon AI Generator",
    description: "SaaS platform leveraging Gemini API for content generation with a dark-mode focused UI.",
    tags: ["Next.js", "Gemini API", "Tailwind", "Stripe"],
    imageUrl: "https://picsum.photos/800/600?random=2",
    link: "#"
  },
  {
    id: 3,
    title: "FlowTask Manager",
    description: "Collaborative project management tool featuring drag-and-drop kanban and real-time sockets.",
    tags: ["React", "Node.js", "Socket.io", "Redis"],
    imageUrl: "https://picsum.photos/800/600?random=3",
    link: "#"
  },
  {
    id: 4,
    title: "CryptoSentinel",
    description: "Mobile-first cryptocurrency portfolio tracker with price alerts and wallet integration.",
    tags: ["React Native", "GraphQL", "Web3.js"],
    imageUrl: "https://picsum.photos/800/600?random=4",
    link: "#"
  }
];

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 relative">
      <div className="flex flex-col items-start mb-12 animate-slide-up">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
          Featured Work
        </h2>
        <p className="text-slate-400 max-w-2xl text-lg">
          A selection of projects that showcase my passion for building robust and scalable applications.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map((project, index) => (
          <div 
            key={project.id} 
            className="group relative bg-surface/50 rounded-3xl overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-surface/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <a href={project.link} className="p-2 bg-surface/80 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors">
                  <Github size={18} />
                </a>
                <a href={project.link} className="p-2 bg-surface/80 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-black transition-colors">
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
            
            {/* Content Section */}
            <div className="p-8 relative">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-3 flex items-center gap-2 group-hover:text-primary transition-colors">
                  {project.title}
                  <ArrowUpRight size={18} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-medium px-3 py-1 bg-white/5 text-slate-300 rounded-full border border-white/5 group-hover:border-primary/20 group-hover:bg-primary/5 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;