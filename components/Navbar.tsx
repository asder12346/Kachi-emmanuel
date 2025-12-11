import React, { useState, useEffect } from 'react';
import { BookOpenText, Facebook, Instagram, Youtube, Music } from 'lucide-react';
import { Page } from '../App';

interface NavbarProps {
  onNavigate: (page: Page, sectionId?: string) => void;
  currentPage: Page;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', page: 'home', section: 'home' },
    { name: 'Our Story', page: 'about' },
    { name: 'Ministries', page: 'ministries' },
    { name: 'Devotionals', page: 'devotionals' },
    { name: 'Gallery', page: 'home', section: 'gallery' },
    { name: 'Partner', page: 'partner' },
    { name: 'Contact', page: 'home', section: 'contact' },
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
    // Ensure body scroll is restored if the menu was open
    document.body.style.overflow = '';
  };

  const toggleMenu = () => {
    const nextState = !isMenuOpen;
    setIsMenuOpen(nextState);
    document.body.style.overflow = nextState ? 'hidden' : '';
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled || isMenuOpen ? 'bg-[#280c2d]/95 backdrop-blur-xl border-b border-[#fae78e]/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Brand Identity */}
        <button 
          onClick={() => handleLinkClick('home', 'home')}
          className="flex items-center gap-3 focus:outline-none group focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#280c2d] rounded-md transition-transform active:scale-95"
        >
          <div className="p-2 bg-[#fae78e] rounded-xl shadow-[0_0_20px_rgba(250,231,142,0.3)] group-hover:rotate-6 transition-transform">
             <BookOpenText className="w-6 h-6 text-[#280c2d]" />
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className="font-display font-bold text-lg md:text-xl tracking-tight text-white">
              Kachi Emmanuel
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#fae78e] font-bold mt-1">Ministries</span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const isActive = (currentPage === link.page && !link.section) || (currentPage === 'home' && link.section === 'home' && link.name === 'Home');
            return (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.page as Page, link.section)}
                className={`text-[10px] xl:text-xs font-bold uppercase tracking-[0.3em] transition-all relative group py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#280c2d] rounded-md ${
                  isActive ? 'text-[#fae78e]' : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute left-0 bottom-0 h-0.5 bg-[#fae78e] transition-all duration-300 ${
                    isActive ? 'w-full shadow-[0_0_10px_#fae78e]' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            );
          })}
        </nav>

        {/* Desktop Socials */}
        <div className="hidden lg:flex items-center gap-4 ml-6 border-l border-white/10 pl-6">
          {socialLinks.map((social, i) => (
            <a 
              key={i} 
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-[#fae78e] transition-all hover:scale-110"
              aria-label={`Follow on social media`}
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        {/* Mobile Hamburger (Pure CSS Animated) */}
        <div className="lg:hidden">
          <button 
            className={`x-nav-burger ${isMenuOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Modular Mobile Overlay Menu */}
      <div 
        className={`lg:hidden fixed inset-0 z-[90] bg-black/98 backdrop-blur-2xl x-nav-mobile-menu flex flex-col ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex-grow flex flex-col items-center justify-center p-8 gap-1">
          {navLinks.map((link, i) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.page as Page, link.section)}
              className={`w-full py-6 text-2xl font-display font-bold uppercase tracking-[0.2em] transition-all transform animate-in fade-in slide-in-from-top-4 ${
                currentPage === link.page && !link.section ? 'text-[#fae78e]' : 'text-white'
              }`}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Footer */}
        <div className="p-12 border-t border-white/5 flex flex-col items-center gap-8 bg-[#280c2d]/30">
          <div className="flex gap-6">
            {socialLinks.map((social, i) => (
              <a 
                key={i} 
                href={social.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/5 text-[#fae78e] hover:bg-[#fae78e] hover:text-[#280c2d] transition-all active:scale-90"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <p className="text-[10px] text-slate-600 font-bold uppercase tracking-[0.4em] text-center">
            &copy; {new Date().getFullYear()} Kachi Emmanuel Ministries
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;