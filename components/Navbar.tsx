
import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Home, Info, Heart, Users, Mail, BookOpenText } from 'lucide-react';
import { Page } from '../App';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  onNavigate: (page: Page, sectionId?: string) => void;
  currentPage: Page;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode, onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', page: 'home', section: 'home', icon: Home },
    { name: 'About', page: 'about', section: 'about', icon: Info },
    { name: 'Ministry', page: 'ministries', section: 'ministries', icon: Users },
    { name: 'Partner With Us', page: 'home', section: 'partner', icon: Heart },
    { name: 'Contact', page: 'home', section: 'contact', icon: Mail },
  ];

  const handleLinkClick = (page: Page, section?: string) => {
    onNavigate(page, section);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-slate-200/60 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => handleLinkClick('home', 'home')}
          className="flex items-center gap-2 group focus:outline-none"
        >
          <BookOpenText className="w-7 h-7 text-indigo-700 dark:text-indigo-400 group-hover:rotate-6 transition-transform" />
          <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-slate-900 dark:text-white leading-none text-left">
            Kachi Emmanuel <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-amber-500 dark:from-indigo-400 dark:to-amber-300">Ministries</span>
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.page as Page, link.section)}
              className={`text-slate-600 dark:text-slate-300 hover:text-indigo-700 dark:hover:text-indigo-400 font-medium transition-colors relative group ${
                currentPage === link.page ? 'text-indigo-700 dark:text-indigo-400 font-bold' : ''
              }`}
            >
              {link.name}
              <span className={`absolute left-0 bottom-0 h-[2px] bg-indigo-500 transition-all duration-300 ${
                  currentPage === link.page ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
          ))}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-700 dark:hover:text-indigo-400 transition-colors border border-slate-200 dark:border-white/10 shadow-sm ml-4"
            title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
            <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-700 dark:hover:text-indigo-400 transition-colors border border-slate-200 dark:border-white/10 shadow-sm"
                title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle navigation menu"
            >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl flex flex-col p-6 animate-in slide-in-from-right-8 fade-in duration-300">
          <div className="flex justify-end mb-8">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-md text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close navigation menu"
            >
              <X className="w-7 h-7" />
            </button>
          </div>
          <nav className="flex flex-col gap-6 text-xl">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.page as Page, link.section)}
                className="flex items-center gap-4 text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-300 font-semibold transition-colors py-2 border-b border-slate-100 dark:border-slate-800 last:border-b-0 w-full text-left"
              >
                <link.icon className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />
                {link.name}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
