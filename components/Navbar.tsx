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
    { name: 'Partner', page: 'partner', icon: Heart },
    { name: 'Contact', page: 'home', section: 'contact', icon: Mail },
  ];

  const handleLinkClick = (page: Page, section?: string) => {
    onNavigate(page, section);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-[#1a1a1a]/95 backdrop-blur-lg border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <button 
          onClick={() => handleLinkClick('home', 'home')}
          className="flex items-center gap-2 focus:outline-none group"
        >
          <BookOpenText className="w-7 h-7 text-[#FFDE59] dark:text-[#FFDE59] brightness-90" />
          <span className="font-display font-bold text-xl md:text-2xl tracking-tight text-[#1a1a1a] dark:text-white">
            Kachi Emmanuel <span className="text-[#FFDE59] drop-shadow-sm text-shadow">Ministries</span>
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.page as Page, (link as any).section)}
              className={`text-sm font-bold uppercase tracking-widest transition-colors relative group ${
                currentPage === link.page ? 'text-[#1a1a1a] dark:text-[#FFDE59]' : 'text-slate-500 hover:text-[#1a1a1a] dark:hover:text-[#FFDE59]'
              }`}
            >
              {link.name}
              <span className={`absolute left-0 -bottom-1 h-0.5 bg-[#FFDE59] transition-all duration-300 ${
                  currentPage === link.page ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
          ))}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/10 text-slate-600 dark:text-slate-300 transition-colors ml-4"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-4">
            <button onClick={toggleDarkMode} className="text-slate-600 dark:text-slate-300">
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-900 dark:text-white">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[60] bg-white dark:bg-[#1a1a1a] flex flex-col p-8">
          <div className="flex justify-end mb-8">
            <button onClick={() => setIsMenuOpen(false)} className="text-[#1a1a1a] dark:text-white">
              <X className="w-8 h-8" />
            </button>
          </div>
          <nav className="flex flex-col gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.page as Page, (link as any).section)}
                className="flex items-center gap-4 text-2xl font-bold text-[#1a1a1a] dark:text-white"
              >
                <link.icon className="w-6 h-6 text-[#FFDE59]" />
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