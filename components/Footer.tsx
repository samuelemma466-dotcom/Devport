import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-card border-t border-slate-800 py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-slate-400 flex items-center justify-center gap-2">
          Made with <Heart size={16} className="text-red-500 fill-current" /> by Alex &bull; © {new Date().getFullYear()}
        </p>
        <p className="text-xs text-slate-600 mt-2">
          Built with React, Tailwind CSS, and Gemini API
        </p>
      </div>
    </footer>
  );
};

export default Footer;