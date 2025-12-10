import React from 'react';
import { Play, HeartHandshake } from 'lucide-react';

interface HeroSectionProps {
  onNavigate?: (page: 'home' | 'about', sectionId?: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative bg-gradient-to-br from-indigo-50 dark:from-slate-900 to-white dark:to-slate-950 py-20 md:py-32 overflow-hidden flex items-center justify-center min-h-[calc(100vh-64px)] transition-colors duration-300">
      
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 dark:opacity-20" style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
      }}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/50 dark:from-indigo-900/20 to-transparent animate-gradient-shift"></div>

      <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-sm md:text-base uppercase tracking-widest font-bold text-indigo-700 dark:text-indigo-400 mb-4 animate-in fade-in slide-in-from-top-8 duration-700">
          Welcome to Kachi Emmanuel Ministries
        </h2>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-6 text-slate-900 dark:text-white animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          Ministering through <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-amber-500 dark:from-indigo-400 dark:to-amber-300">Creativity for the Kingdom</span>
        </h1>
        <p className="text-base md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          Spreading the Gospel through innovative media, powerful teachings, and transformative outreach programs that touch hearts and change lives.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
          <button
            onClick={() => onNavigate?.('home', 'ministries')} // Assuming 'Watch Messages' goes to a section or maybe a new page later. For now, let's link to Video or Ministries. Using 'ministries' for now or 'video' if VideoSection has an ID.
            className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full shadow-lg shadow-indigo-500/30 transform hover:scale-105 transition-all group"
            aria-label="Watch Messages"
          >
            <Play className="w-5 h-5 mr-2 group-hover:animate-bounce-horizontal" />
            Watch Messages
          </button>
          <button
            onClick={() => onNavigate?.('home', 'partner')}
            className="inline-flex items-center justify-center px-8 py-3 bg-transparent border-2 border-indigo-600 dark:border-indigo-400 text-indigo-700 dark:text-indigo-400 font-bold rounded-full hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transform hover:scale-105 transition-all group"
            aria-label="Partner Now"
          >
            <HeartHandshake className="w-5 h-5 mr-2 group-hover:rotate-6 transition-transform" />
            Partner Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;