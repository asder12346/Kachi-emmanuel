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

  // Ensure body scroll is locked when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

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
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
        scrolled || isMenuOpen ? 'glass-header py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Section */}
        <button 
          onClick={() => handleLinkClick('home', 'home')}
          className="flex items-center gap-3 focus:outline-none group relative z-[110]"
        >
          <div className="p-2.5 bg-[#fae78e] rounded-xl shadow-[0_0_20px_rgba(250,231,142,0.4)] group-hover:rotate-6 transition-transform">
             <BookOpenText className="w-6 h-6 text-[#280c2d]" />
          </div>
          <div className="flex flex-col items-start leading-none">
            <span className="font-display font-bold text-lg md:text-xl tracking-tight text-white drop-shadow-md">
              Kachi Emmanuel
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#fae78e] font-bold mt-1 drop-shadow-sm">Ministries</span>
          </div>
        </button>

        {/* Desktop Links */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const isActive = (currentPage === link.page && !link.section) || (currentPage === 'home' && link.section === 'home' && link.name === 'Home');
            return (
              <button
                key={link.name}
                onClick={() => handleLinkClick(link.page as Page, link.section)}
                className={`text-[10px] xl:text-xs font-bold uppercase tracking-[0.3em] transition-all relative group py-2 focus:outline-none drop-shadow-sm ${
                  isActive ? 'text-[#fae78e]' : 'text-slate-100/90 hover:text-white'
                }`}
              >
                {link.name}
                <span className={`absolute left-0 bottom-0 h-0.5 bg-[#fae78e] transition-all duration-300 ${
                    isActive ? 'w-full shadow-[0_0_12px_#fae78e]' : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            );
          })}
        </nav>

        {/* Desktop Social Icons */}
        <div className="hidden lg:flex items-center gap-4 ml-6 border-l border-white/20 pl-6">
          {socialLinks.map((social, i) => (
            <a 
              key={i} 
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/80 hover:text-[#fae78e] transition-all hover:scale-125 hover:-translate-y-1 drop-shadow-lg"
              aria-label="Social Link"
            >
              <social.icon className="w-4.5 h-4.5" />
            </a>
          ))}
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button 
            className={`x-nav-burger ${isMenuOpen ? 'open' : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation"
            aria-expanded={isMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Modular Mobile Overlay */}
      <div className={`x-nav-mobile-overlay ${isMenuOpen ? 'active' : ''}`}>
        <div className="flex flex-col items-center gap-3">
          {navLinks.map((link, i) => (
            <button
              key={link.name}
              onClick={() => handleLinkClick(link.page as Page, link.section)}
              className="x-nav-link-item x-animate-link"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Socials */}
        <div className="x-nav-social-wrap x-animate-link" style={{ animationDelay: '700ms' }}>
          {socialLinks.map((social, i) => (
            <a 
              key={i} 
              href={social.href} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/10 text-[#fae78e] border border-[#fae78e]/30 hover:bg-[#fae78e] hover:text-[#280c2d] transition-all active:scale-90"
              aria-label="Social Media"
            >
              <social.icon className="w-7 h-7" />
            </a>
          ))}
        </div>
        
        <div className="mt-auto pb-10 text-center x-animate-link" style={{ animationDelay: '850ms' }}>
           <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.4em]">
             &copy; {new Date().getFullYear()} Kachi Emmanuel Ministries
           </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;