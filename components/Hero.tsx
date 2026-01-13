import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

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
    <section id={id} className="min-h-screen flex items-center justify-center pt-20">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-6 order-2 md:order-1 animate-slide-up">
          <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-2 border border-primary/20">
            Available for hire
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Alex</span>
            <br />
            <span className="text-3xl md:text-5xl text-slate-400 block mt-2 h-16">
              {text}<span className="animate-pulse">|</span>
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-lg leading-relaxed">
            I build accessible, pixel-perfect, secure, and performant web applications.
            Let's turn your vision into reality.
          </p>
          
          <div className="flex gap-4 pt-4">
            <a href="#projects" className="px-8 py-3 bg-primary hover:bg-blue-600 text-white rounded-lg font-medium transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2 group">
              View Work 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium transition-all border border-slate-700">
              Contact Me
            </a>
          </div>

          <div className="flex gap-6 pt-8 text-slate-400">
            <a href="#" className="hover:text-white transition-colors hover:scale-110 transform duration-200">
              <Github size={24} />
            </a>
            <a href="#" className="hover:text-white transition-colors hover:scale-110 transform duration-200">
              <Linkedin size={24} />
            </a>
            <a href="#" className="hover:text-white transition-colors hover:scale-110 transform duration-200">
              <Twitter size={24} />
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center animate-fade-in relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-full opacity-20 blur-2xl animate-pulse"></div>
            <img 
              src="https://picsum.photos/400/400" 
              alt="Profile" 
              className="relative w-full h-full object-cover rounded-full border-4 border-slate-800 shadow-2xl z-10 hover:scale-105 transition-transform duration-500 grayscale hover:grayscale-0"
            />
            {/* Floating tech icons */}
            <div className="absolute -top-4 -right-4 bg-card p-3 rounded-xl shadow-xl border border-slate-700 animate-bounce delay-100">
              <span className="text-2xl">⚛️</span>
            </div>
            <div className="absolute bottom-12 -left-8 bg-card p-3 rounded-xl shadow-xl border border-slate-700 animate-bounce delay-300">
              <span className="text-2xl">🎨</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;