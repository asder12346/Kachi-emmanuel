import React from 'react';
import { BookOpenText, ArrowUp, Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react';
import { Page } from '../App';

interface FooterProps {
  onNavigate: (page: Page, sectionId?: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', page: 'home', section: 'home' },
    { name: 'About', page: 'about', section: 'about' },
    { name: 'Ministry', page: 'ministries', section: 'ministries' },
    { name: 'Partner', page: 'home', section: 'partner' },
    { name: 'Contact', page: 'home', section: 'contact' },
  ];

  const resources = [
    { name: 'Sermons', page: 'home', section: 'home' }, // Usually maps to a media section
    { name: 'Devotionals', page: 'ministries', section: 'devotionals' },
    { name: 'Blog', page: 'home', section: 'home' },
    { name: 'Prayer Requests', page: 'home', section: 'contact' },
  ];

  return (
    <footer className="bg-slate-900 dark:bg-black text-slate-300 pt-20 pb-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-1">
            <button 
              onClick={() => onNavigate('home', 'home')}
              className="flex items-center gap-2 mb-6 group"
            >
              <BookOpenText className="w-8 h-8 text-indigo-400 group-hover:rotate-6 transition-transform" />
              <span className="font-display font-bold text-2xl text-white">
                Kachi Emmanuel <span className="text-indigo-400">Ministries</span>
              </span>
            </button>
            <p className="text-slate-400 leading-relaxed mb-8">
              "Ministering through Creativity for the Kingdom of God." We are committed to spreading the Gospel through innovative media and transformative outreach.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-slate-800 hover:bg-indigo-600 text-white rounded-lg transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-indigo-600 text-white rounded-lg transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-indigo-600 text-white rounded-lg transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-slate-800 hover:bg-indigo-600 text-white rounded-lg transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => onNavigate(link.page as Page, link.section)}
                    className="hover:text-indigo-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-indigo-500 rounded-full"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-6 uppercase tracking-wider">Resources</h4>
            <ul className="space-y-4">
              {resources.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => onNavigate(link.page as Page, link.section)}
                    className="hover:text-indigo-400 transition-colors flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-amber-500 rounded-full"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-6 uppercase tracking-wider">Follow Us</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-indigo-400 shrink-0 mt-1" />
                <span className="text-slate-400">info@kachiministry.org</span>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-indigo-400 shrink-0 mt-1" />
                <span className="text-slate-400">+234 813 766 5723</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-indigo-400 shrink-0 mt-1" />
                <span className="text-slate-400">Nigeria</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-sm text-center md:text-left">
            &copy; {currentYear} Kachi Emmanuel Ministries. All Rights Reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="p-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg transition-all transform hover:-translate-y-1"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;