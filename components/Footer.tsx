import React from 'react';
import { BookOpenText, Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone, Heart, ArrowRight, Sparkles, ChevronUp } from 'lucide-react';
import { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page, sectionId?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', page: 'home', section: 'home' },
    { name: 'About Us', page: 'about', section: 'about' },
    { name: 'Ministries', page: 'ministries', section: 'ministries' },
    { name: 'Partner', page: 'home', section: 'partner' },
    { name: 'Contact', page: 'home', section: 'contact' },
  ];

  const socialLinks = [
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Youtube, label: 'YouTube', href: '#' },
  ];

  return (
    <footer className="relative bg-[#000000] text-slate-400 pt-24 pb-12 transition-colors overflow-hidden border-t border-[#fae78e]/10">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#280c2d]/50 rounded-full blur-[120px] -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#fae78e]/10 rounded-full blur-[100px] translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4">
            <button 
              onClick={() => onNavigate('home', 'home')}
              className="flex items-center gap-3 mb-8 group focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-md"
            >
              <div className="p-2.5 rounded-2xl bg-[#fae78e] shadow-[0_0_15px_#fae78e] group-hover:rotate-6 transition-transform">
                <BookOpenText className="w-8 h-8 text-[#280c2d]" />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-display font-bold text-2xl text-white tracking-tight leading-none">
                  Kachi Emmanuel
                </span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fae78e] to-white font-bold tracking-[0.2em] text-[10px] uppercase mt-1">
                  Ministries
                </span>
              </div>
            </button>
            <p className="text-slate-400 leading-relaxed mb-8 max-w-sm text-sm font-light">
              Empowering a global generation through the creative presentation of the Gospel. Join us in transforming lives and spreading the light of Christ across all platforms.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  className={`w-10 h-10 flex items-center justify-center rounded-xl bg-[#280c2d] border border-[#fae78e]/20 text-[#fae78e] hover:bg-[#fae78e] hover:text-[#280c2d] transition-all transform hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-black`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-white mb-8 tracking-[0.2em] uppercase text-xs flex items-center gap-2">
              <Sparkles className="w-3 h-3 text-[#fae78e]" /> Navigation
            </h4>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => onNavigate(link.page as Page, link.section)}
                    className="hover:text-[#fae78e] transition-colors flex items-center gap-2 group text-sm font-medium focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-md"
                  >
                    <ArrowRight className="w-3 h-3 text-[#fae78e] opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-white mb-8 tracking-[0.2em] uppercase text-xs flex items-center gap-2">
               Connect With Us
            </h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-[#280c2d] border border-[#fae78e]/20 text-[#fae78e]">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Email Support</span>
                  <a href="mailto:info@kachiministry.org" className="text-slate-300 hover:text-white transition-colors text-sm font-semibold focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-md">
                    info@kachiministry.org
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-[#280c2d] border border-[#fae78e]/20 text-[#fae78e]">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Global Line</span>
                  <a href="tel:+2348137665723" className="text-slate-300 hover:text-white transition-colors text-sm font-semibold focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-md">
                    +234 813 766 5723
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-xl bg-[#280c2d] border border-[#fae78e]/20 text-[#fae78e]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Location</span>
                  <span className="text-slate-300 text-sm font-semibold">Lagos, Nigeria</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Partnership CTA */}
          <div className="lg:col-span-3">
             <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-[#280c2d] to-black border border-[#fae78e]/20 relative group overflow-hidden shadow-2xl">
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#fae78e]/10 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-150"></div>
                <div className="w-12 h-12 bg-[#fae78e]/20 rounded-2xl flex items-center justify-center mb-6">
                    <Heart className="w-6 h-6 text-[#fae78e] animate-pulse-slow fill-[#fae78e]" />
                </div>
                <h5 className="text-white font-bold text-lg mb-3">Partner with us</h5>
                <p className="text-slate-400 text-xs mb-8 leading-relaxed">
                  Join our mission to saturate the world with the Gospel through high-impact creative works.
                </p>
                <button 
                  onClick={() => onNavigate('home', 'partner')}
                  className="w-full py-4 bg-[#fae78e] text-[#280c2d] hover:bg-white transition-all font-bold rounded-2xl flex items-center justify-center gap-2 text-xs uppercase tracking-widest shadow-[0_0_15px_rgba(250,231,142,0.3)] focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  Become a Partner <ArrowRight className="w-4 h-4" />
                </button>
             </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-[#fae78e]/10 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
            <p className="text-slate-500 text-xs font-medium">
              &copy; {currentYear} Kachi Emmanuel Ministries. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
                <a href="#" className="text-[10px] text-slate-600 hover:text-[#fae78e] uppercase tracking-widest transition-colors focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-md">Privacy Policy</a>
                <a href="#" className="text-[10px] text-slate-600 hover:text-[#fae78e] uppercase tracking-widest transition-colors focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-md">Terms of Service</a>
            </div>
          </div>

          {/* Back to Top */}
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-3 px-6 py-3 bg-[#280c2d] hover:bg-[#fae78e] text-slate-400 hover:text-[#280c2d] rounded-full border border-[#fae78e]/20 transition-all group shadow-lg focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest">Back to top</span>
            <ChevronUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;