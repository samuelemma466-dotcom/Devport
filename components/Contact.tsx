import React from 'react';
import { Mail, MapPin, Phone, Send, ArrowRight } from 'lucide-react';

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for the message! (Demo only)");
  };

  return (
    <section id={id} className="py-24 mb-12">
       <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
                Let's Connect
            </h2>
            <p className="text-slate-400 max-w-lg text-lg">
                Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing together.
            </p>
        </div>
        <div className="hidden md:block">
             <div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center animate-spin-slow">
                <ArrowRight className="text-primary -rotate-45" size={32} />
             </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        <div className="space-y-10">
          <div className="space-y-8">
            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-surface/50 rounded-2xl flex items-center justify-center text-primary border border-white/5 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-300">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">Email</p>
                <p className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors">hello@example.com</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-surface/50 rounded-2xl flex items-center justify-center text-primary border border-white/5 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-300">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">Phone</p>
                <p className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors">+1 (555) 000-0000</p>
              </div>
            </div>

            <div className="flex items-start gap-6 group">
              <div className="w-14 h-14 bg-surface/50 rounded-2xl flex items-center justify-center text-primary border border-white/5 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-300">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-500 mb-1">Location</p>
                <p className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors">San Francisco, CA</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl border border-white/5">
             <p className="text-slate-200 font-medium mb-2">Currently Status</p>
             <div className="flex items-center gap-2 text-green-400 bg-green-400/10 w-fit px-3 py-1 rounded-full text-sm border border-green-400/20">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Open for opportunities
             </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-surface/30 p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl backdrop-blur-sm space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-500">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-slate-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-slate-600"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-500">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-slate-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-slate-600"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-slate-500">Subject</label>
            <input 
              type="text" 
              id="subject" 
              className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-slate-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all placeholder:text-slate-600"
              placeholder="Project Inquiry"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-500">Message</label>
            <textarea 
              id="message" 
              rows={4}
              className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-slate-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none placeholder:text-slate-600"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-600/90 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 flex items-center justify-center gap-2 group transform hover:-translate-y-0.5"
          >
            Send Message
            <Send size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;