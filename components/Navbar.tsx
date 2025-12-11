import React, { useState } from 'react';
import { Menu, X, Home, Info, Heart, Users, BookOpenText, BookOpen, Facebook, Instagram, Youtube, Music, Image as ImageIcon, MessageSquare } from 'lucide-react';
import { Page } from '../App';

interface NavbarProps {
  onNavigate: (page: Page, sectionId?: string) => void;
  currentPage: Page;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', page: 'home', section: 'home', icon: Home },
    { name: 'Our Story', page: 'about', section: 'about', icon: Info },
    { name: 'Ministries', page: 'ministries', icon: Users },
    { name: 'Devotionals', page: 'devotionals', icon: BookOpen },
    { name: 'Gallery', page: 'home', section: 'gallery', icon: ImageIcon },
    { name: 'Partner', page: 'partner', icon: Heart },
    { name: 'Contact', page: 'home', section: 'contact', icon: MessageSquare },
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/1FgQffzLr6/?mibextid=wwXIfr' },
    { icon: Instagram, href: 'https://www.instagram.com/thebelieversperspective_?igsh=MTV0czVrMmRtZmpnNQ%3D%3D&utm_source=qr' },
    { icon: Youtube, href: 'https://youtube.com/@kachiemmanuelministries?si=6v0vK6vX9GMjh8D7' },
    { icon: Music, href: 'https://www.tiktok.com/@thebelieversperspective?_t=ZS-90d0KigCOSW&_r=1' },
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

        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.page as Page, (link as any).section)}
              className={`text-[10px] xl:text-xs font-bold uppercase tracking-widest transition-colors relative group py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#280c2d] rounded-md ${
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

        <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)} 
              className="text-[#fae78e] p-2 focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#280c2d] rounded-md transition-transform active:scale-90"
              aria-label="Toggle menu"
            >
                {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
        </div>
      </div>

      {/* Clean Mobile Menu with Dark Black Background */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-[#000000] flex flex-col animate-in fade-in slide-in-from-right-full duration-300">
          <div className="flex justify-between items-center px-6 h-20 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#fae78e] rounded-lg">
                  <BookOpenText className="w-5 h-5 text-[#280c2d]" />
              </div>
              <span className="font-display font-bold text-lg text-white">Navigation</span>
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)} 
              className="text-white p-2 hover:text-[#fae78e] transition-colors focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-md"
            >
              <X className="w-8 h-8" />
            </button>
          </div>

          <nav className="flex flex-col p-4 pt-6 gap-1 overflow-y-auto">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.page as Page, (link as any).section)}
                className={`flex items-center justify-between px-6 py-4 rounded-2xl font-bold text-base transition-all group ${
                  currentPage === link.page 
                  ? 'bg-white/10 text-[#fae78e]' 
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-4">
                    <link.icon className={`w-5 h-5 ${currentPage === link.page ? 'text-[#fae78e]' : 'text-slate-500 group-hover:text-white'}`} />
                    <span className="tracking-wide">{link.name}</span>
                </div>
                {currentPage === link.page && (
                    <div className="w-1.5 h-1.5 bg-[#fae78e] rounded-full shadow-[0_0_10px_#fae78e]"></div>
                )}
              </button>
            ))}
          </nav>

          <div className="mt-auto p-8 border-t border-white/5 flex flex-col items-center gap-6">
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 text-slate-400 hover:bg-[#fae78e] hover:text-[#280c2d] transition-all"
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
              <p className="text-[9px] text-slate-600 font-bold uppercase tracking-[0.4em] text-center">
                Kachi Emmanuel Ministries
              </p>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;