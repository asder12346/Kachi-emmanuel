import React from 'react';
import { BookOpenText, ArrowUp, Facebook, Instagram, Twitter, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Ministries', href: '#ministries' },
    { name: 'Partner', href: '#partner' },
    { name: 'Contact', href: '#contact' },
  ];

  const resourcesLinks = [
    { name: 'Devotionals', href: '#' },
    { name: 'Events', href: '#' },
    { name: 'Prayer Requests', href: '#' },
  ];

  const supportLinks = [
    { name: 'Give a Seed', href: '#partner' },
    { name: 'Volunteer', href: '#partner' },
  ];

  return (
    <footer className="bg-slate-800 dark:bg-slate-950 text-slate-300 py-16 md:py-20 relative transition-colors duration-300 border-t border-slate-700 dark:border-slate-900">
      {/* Scroll to Top */}
      <a href="#home" className="absolute top-0 right-8 -translate-y-1/2 p-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full shadow-lg transition-all transform hover:scale-110 group z-10" aria-label="Scroll to top">
        <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" />
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Ministry Info */}
        <div className="col-span-1 text-center md:text-left">
          <a href="#home" className="flex items-center justify-center md:justify-start gap-2 mb-6">
            <BookOpenText className="w-8 h-8 text-indigo-400" />
            <span className="font-display font-bold text-2xl tracking-tight text-white">Kachi Emmanuel <span className="text-amber-400">Ministries</span></span>
          </a>
          <p className="text-slate-400 mb-6 italic text-sm leading-relaxed">
            "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future." <br/>
            <span className="font-semibold text-indigo-400 not-italic block mt-2">- Jeremiah 29:11</span>
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="YouTube"><Youtube className="w-5 h-5" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-1 text-center md:text-left">
          <h4 className="text-white font-display font-bold text-lg mb-6">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-slate-400 hover:text-indigo-400 transition-colors flex items-center justify-center md:justify-start gap-2 group">
                  <span className="w-0 overflow-hidden group-hover:w-2 transition-all duration-300 bg-indigo-500 h-0.5 inline-block"></span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div className="col-span-1 text-center md:text-left">
          <h4 className="text-white font-display font-bold text-lg mb-6">Resources</h4>
          <ul className="space-y-3">
            {resourcesLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-slate-400 hover:text-indigo-400 transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <h4 className="text-white font-display font-bold text-lg mt-8 mb-6">Support Us</h4>
          <ul className="space-y-3">
            {supportLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-slate-400 hover:text-indigo-400 transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Mini */}
        <div className="col-span-1 text-center md:text-left">
          <h4 className="text-white font-display font-bold text-lg mb-6">Contact Us</h4>
          <ul className="space-y-4">
            <li className="flex items-center justify-center md:justify-start gap-3 text-slate-400">
              <Mail className="w-5 h-5 text-indigo-500 flex-shrink-0" />
              <span>info@kachiministry.org</span>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3 text-slate-400">
              <Phone className="w-5 h-5 text-indigo-500 flex-shrink-0" />
              <span>+234 813 766 5723</span>
            </li>
            <li className="flex items-start justify-center md:justify-start gap-3 text-slate-400">
              <MapPin className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-1" />
              <span>Nigeria</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-700/50 mt-16 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm">
            © 2024 Kachi Emmanuel Ministries. All Rights Reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;