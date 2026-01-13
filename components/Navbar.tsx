import React, { useState, useEffect } from 'react';
import { NavItem } from '../types';
import { Menu, X, Terminal } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-4 left-0 right-0 z-50 transition-all duration-300 mx-auto w-[90%] md:w-fit ${
          scrolled || mobileMenuOpen 
            ? 'glass-nav rounded-2xl shadow-lg shadow-primary/5 py-3 px-6' 
            : 'bg-transparent py-6 px-4'
        }`}
      >
        <div className="flex justify-between items-center md:gap-12">
          <a href="#home" className="text-xl font-bold flex items-center gap-2 text-white group">
            <div className="bg-primary/20 p-1.5 rounded-lg group-hover:bg-primary/30 transition-colors">
              <Terminal size={20} className="text-primary" />
            </div>
            <span className="font-display tracking-tight">Dev<span className="text-primary">Port</span></span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-1">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`relative px-4 py-1.5 text-sm font-medium transition-all rounded-full hover:text-white ${
                  activeSection === item.href.substring(1) 
                    ? 'text-white bg-white/10' 
                    : 'text-slate-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-300 hover:text-white p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 flex flex-col gap-2 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`text-left py-3 px-4 rounded-xl transition-colors ${
                  activeSection === item.href.substring(1) 
                    ? 'bg-primary/20 text-primary' 
                    : 'hover:bg-white/5 text-slate-400'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;