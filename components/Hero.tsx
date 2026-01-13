import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Twitter, Download } from 'lucide-react';

interface HeroProps {
  id: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  const [text, setText] = useState('');
  const fullText = "Full Stack Developer";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (isTyping) {
      if (text.length < fullText.length) {
        const timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
      }
    }
  }, [text, isTyping]);

  return (
    <section id={id} className="min-h-screen flex items-center justify-center pt-20 relative">
      {/* Grid Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full max-w-6xl z-10">
        <div className="space-y-8 order-2 lg:order-1 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new projects
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            Building digital <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent animate-pulse-glow">experiences</span>
            <span className="text-primary">.</span>
          </h1>
          
          <div className="h-8">
            <span className="text-xl md:text-2xl text-slate-400 font-mono">
              &gt; {text}<span className="animate-pulse text-primary">_</span>
            </span>
          </div>

          <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
            I craft accessible, pixel-perfect, and secure web applications. 
            Focused on creating fluid user interfaces with modern technologies.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-2">
            <a href="#projects" className="px-8 py-3.5 bg-primary hover:bg-indigo-600 text-white rounded-xl font-medium transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 flex items-center gap-2 group">
              View My Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white rounded-xl font-medium transition-all border border-white/10 hover:border-white/20 flex items-center gap-2">
              <Download size={18} />
              Resume
            </a>
          </div>

          <div className="flex gap-6 pt-4 text-slate-500">
            {[
              { icon: Github, href: "#" },
              { icon: Linkedin, href: "#" },
              { icon: Twitter, href: "#" }
            ].map((Social, index) => (
              <a 
                key={index}
                href={Social.href} 
                className="hover:text-white transition-all hover:scale-110 p-2 hover:bg-white/5 rounded-lg"
              >
                <Social.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        <div className="order-1 lg:order-2 flex justify-center animate-fade-in perspective-1000">
          <div className="relative w-72 h-72 md:w-[450px] md:h-[450px] animate-float">
            {/* Abstract Shapes behind */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl opacity-50"></div>
            
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-surface/50 backdrop-blur-sm group">
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10 opacity-60"></div>
              <img 
                src="https://picsum.photos/600/600" 
                alt="Profile" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
              
              {/* Floating Cards */}
              <div className="absolute bottom-6 left-6 right-6 z-20 p-4 bg-white/10 backdrop-blur-md border border-white/10 rounded-xl transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => (
                      <div key={i} className="w-8 h-8 rounded-full bg-slate-800 border-2 border-slate-700 flex items-center justify-center text-[10px] text-white font-bold">
                        Dev
                      </div>
                    ))}
                  </div>
                  <div className="text-xs text-white">
                    <span className="font-bold block">5+ Years</span>
                    <span className="text-slate-300">Experience</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Orbiting Icons */}
            <div className="absolute -top-6 -right-6 bg-surface border border-white/10 p-3 rounded-2xl shadow-xl animate-bounce delay-700">
              <span className="text-2xl">🚀</span>
            </div>
            <div className="absolute top-1/2 -left-8 bg-surface border border-white/10 p-3 rounded-2xl shadow-xl animate-pulse delay-300">
              <span className="text-2xl">⚛️</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;