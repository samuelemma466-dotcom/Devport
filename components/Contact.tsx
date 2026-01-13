import React from 'react';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

interface ContactProps {
  id: string;
}

const Contact: React.FC<ContactProps> = ({ id }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for the message! (Demo only)");
  };

  return (
    <section id={id} className="py-20 mb-20">
       <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In <span className="text-primary">Touch</span></h2>
        <div className="w-20 h-1 bg-primary rounded-full"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold">Let's talk about everything!</h3>
          <p className="text-slate-400 leading-relaxed">
            Don't like forms? Send me an email. 👋
            <br />
            I am currently available for freelance work or full-time opportunities.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 bg-card rounded-lg flex items-center justify-center text-primary border border-slate-800">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Email</p>
                <p className="font-medium">hello@example.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 bg-card rounded-lg flex items-center justify-center text-primary border border-slate-800">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Phone</p>
                <p className="font-medium">+1 (555) 000-0000</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 bg-card rounded-lg flex items-center justify-center text-primary border border-slate-800">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-sm text-slate-500">Location</p>
                <p className="font-medium">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-card p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-slate-400">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-slate-400">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium text-slate-400">Subject</label>
            <input 
              type="text" 
              id="subject" 
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
              placeholder="Project Inquiry"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-slate-400">Message</label>
            <textarea 
              id="message" 
              rows={4}
              className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-slate-100 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
              placeholder="Tell me about your project..."
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-primary hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 group"
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