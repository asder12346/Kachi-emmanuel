import React, { useState } from 'react';
import { Menu, X, Home, Info, Heart, Users, Mail, BookOpenText, Sun, Moon } from 'lucide-react';
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
    <header className="sticky top-0 z-50 bg-[#280c2d]/95 dark:bg-[#280c2d]/90 backdrop-blur-lg border-b border-[#fae78e]/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <button 
          onClick={() => handleLinkClick('home', 'home')}
          className="flex items-center gap-3 focus:outline-none group"
        >
          <div className="p-2 bg-[#fae78e] rounded-lg shadow-[0_0_15px_rgba(250,231,142,0.3)]">
             <BookOpenText className="w-6 h-6 text-[#280c2d]" />
          </div>
          <span className="font-display font-bold text-lg md:text-2xl tracking-tight text-white">
            Kachi Emmanuel <span className="text-[#fae78e]">Ministries</span>
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.page as Page, (link as any).section)}
              className={`text-xs font-bold uppercase tracking-widest transition-colors relative group py-2 ${
                currentPage === link.page ? 'text-[#fae78e]' : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute left-0 bottom-0 h-0.5 bg-[#fae78e] transition-all duration-300 ${
                  currentPage === link.page ? 'w-full shadow-[0_0_10px_#fae78e]' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
          ))}
          
          <button 
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-white/10 text-[#fae78e] hover:bg-[#fae78e] hover:text-[#280c2d] transition-all border border-[#fae78e]/20"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </nav>

        <div className="md:hidden flex items-center gap-3">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-white/10 text-[#fae78e]"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#fae78e]">
                {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[60] bg-white dark:bg-[#000000] flex flex-col p-8 border-l border-[#fae78e]/20 animate-in slide-in-from-right-full">
          <div className="flex justify-between items-center mb-8">
            <div className="p-2 bg-[#fae78e] rounded-lg">
                <BookOpenText className="w-6 h-6 text-[#280c2d]" />
            </div>
            <button onClick={() => setIsMenuOpen(false)} className="text-[#280c2d] dark:text-[#fae78e]">
              <X className="w-8 h-8" />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.page as Page, (link as any).section)}
                className="flex items-center gap-4 text-xl font-bold text-slate-800 dark:text-white hover:text-[#fae78e] transition-colors"
              >
                <link.icon className="w-6 h-6 text-[#fae78e]" />
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