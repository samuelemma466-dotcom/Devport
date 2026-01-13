import React from 'react';
import { Project } from '../types';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectsProps {
  id: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "E-Commerce Dashboard",
    description: "A comprehensive analytics dashboard for online retailers with real-time data visualization.",
    tags: ["React", "TypeScript", "Tailwind", "Recharts"],
    imageUrl: "https://picsum.photos/600/400?random=1",
    link: "#"
  },
  {
    id: 2,
    title: "AI Content Generator",
    description: "SaaS application utilizing LLMs to help marketers generate blog posts and social media captions.",
    tags: ["Next.js", "Gemini API", "Stripe"],
    imageUrl: "https://picsum.photos/600/400?random=2",
    link: "#"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "Collaborative task manager with drag-and-drop kanban boards and team chat features.",
    tags: ["React", "Firebase", "Redux"],
    imageUrl: "https://picsum.photos/600/400?random=3",
    link: "#"
  },
  {
    id: 4,
    title: "Crypto Portfolio Tracker",
    description: "Mobile-first application to track cryptocurrency investments across multiple wallets.",
    tags: ["React Native", "API Integration", "ChartJS"],
    imageUrl: "https://picsum.photos/600/400?random=4",
    link: "#"
  }
];

const Projects: React.FC<ProjectsProps> = ({ id }) => {
  return (
    <section id={id} className="py-20">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
        <div className="w-20 h-1 bg-primary rounded-full"></div>
        <p className="text-slate-400 mt-4 text-center max-w-2xl">
          Here are some of the projects I've worked on recently. Each one presented unique challenges and learning opportunities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <div 
            key={project.id} 
            className="group relative bg-card rounded-xl overflow-hidden border border-slate-800 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10"
          >
            <div className="relative h-64 overflow-hidden">
              <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-colors z-10"></div>
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </div>
            
            <div className="p-6 relative z-20">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                <div className="flex gap-3">
                  <a href={project.link} className="text-slate-400 hover:text-white transition-colors" title="View Code">
                    <Github size={20} />
                  </a>
                  <a href={project.link} className="text-slate-400 hover:text-white transition-colors" title="Live Demo">
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <p className="text-slate-400 mb-6 line-clamp-2">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs px-3 py-1 bg-slate-800 text-slate-300 rounded-full border border-slate-700">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;