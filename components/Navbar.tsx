
import React, { useState } from 'react';
import { Menu, X, Home, Info, Heart, Users, BookOpenText, BookOpen } from 'lucide-react';
import { Page } from '../App';

interface NavbarProps {
  onNavigate: (page: Page, sectionId?: string) => void;
  currentPage: Page;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', page: 'home', section: 'home', icon: Home },
    { name: 'About', page: 'about', section: 'about', icon: Info },
    { name: 'Ministry', page: 'ministries', section: 'ministries', icon: Users },
    { name: 'Devotionals', page: 'devotionals', icon: BookOpen },
    { name: 'Partner', page: 'partner', icon: Heart },
  ];

  const handleLinkClick = (page: Page, section?: string) => {
    onNavigate(page, section);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#280c2d]/95 backdrop-blur-lg border-b border-[#fae78e]/20 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-20 flex items-center justify-between">
        <button 
          onClick={() => handleLinkClick('home', 'home')}
          className="flex items-center gap-3 focus:outline-none group focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#280c2d] rounded-md"
        >
          <div className="p-2 bg-[#fae78e] rounded-lg shadow-[0_0_15px_rgba(250,231,142,0.3)]">
             <BookOpenText className="w-6 h-6 text-[#280c2d]" />
          </div>
          <span className="font-display font-bold text-lg md:text-2xl tracking-tight text-white">
            Kachi Emmanuel <span className="text-[#fae78e]">Ministries</span>
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.page as Page, (link as any).section)}
              className={`text-xs font-bold uppercase tracking-widest transition-colors relative group py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#280c2d] rounded-md ${
                currentPage === link.page ? 'text-[#fae78e]' : 'text-slate-300 hover:text-white'
              }`}
            >
              {link.name}
              <span className={`absolute left-0 bottom-0 h-0.5 bg-[#fae78e] transition-all duration-300 ${
                  currentPage === link.page ? 'w-full shadow-[0_0_10px_#fae78e]' : 'w-0 group-hover:w-full'
              }`}></span>
            </button>
          ))}
        </nav>

        <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-[#fae78e] p-2 focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#280c2d] rounded-md"
              aria-label="Toggle menu"
            >
                {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
        </div>
      </div>

      {/* Professional Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[60] bg-black flex flex-col animate-in slide-in-from-right-full duration-500">
          <div className="flex justify-between items-center px-6 h-20 border-b border-[#fae78e]/10">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#fae78e] rounded-lg">
                  <BookOpenText className="w-6 h-6 text-[#280c2d]" />
              </div>
              <span className="font-display font-bold text-lg text-white">KEM</span>
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="text-[#fae78e] p-2 focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-md"
            >
              <X className="w-8 h-8" />
            </button>
          </div>
          <nav className="flex flex-col p-8 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.page as Page, (link as any).section)}
                className={`flex items-center gap-6 px-6 py-5 rounded-2xl font-bold text-xl transition-all border ${
                  currentPage === link.page 
                  ? 'bg-[#fae78e] text-[#280c2d] border-[#fae78e]' 
                  : 'text-slate-300 border-[#fae78e]/10 hover:border-[#fae78e]/40'
                }`}
              >
                <link.icon className={`w-6 h-6 ${currentPage === link.page ? 'text-[#280c2d]' : 'text-[#fae78e]'}`} />
                {link.name}
              </button>
            ))}
          </nav>
          <div className="mt-auto p-12 text-center border-t border-[#fae78e]/5">
              <p className="text-[#fae78e] text-xs font-bold uppercase tracking-[0.3em] mb-4">Transforming Nations</p>
              <div className="flex justify-center gap-4">
                  <div className="w-2 h-2 bg-[#fae78e] rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-[#fae78e] rounded-full animate-pulse delay-150"></div>
                  <div className="w-2 h-2 bg-[#fae78e] rounded-full animate-pulse delay-300"></div>
              </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
