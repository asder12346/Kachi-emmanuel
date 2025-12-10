import React from 'react';
import { Sparkles, ArrowRight, Zap } from 'lucide-react';
import { Page } from '../App';

interface HeroSectionProps {
  onNavigate?: (page: Page, sectionId?: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative min-h-[85vh] flex items-center overflow-hidden bg-white dark:bg-[#1a1a1a] transition-colors duration-500">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
            src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-100"
        />
        {/* Overlays to ensure text readability */}
        <div className="absolute inset-0 bg-white/95 dark:bg-[#1a1a1a]/95"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-[#1a1a1a] dark:via-[#1a1a1a]/80 dark:to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-left animate-in fade-in slide-in-from-bottom-8">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FFDE59]/20 dark:bg-[#FFDE59]/20 border border-[#FFDE59]/40 mb-6">
              <Sparkles className="w-4 h-4 text-black dark:text-[#FFDE59]" />
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-black dark:text-[#FFDE59]">Kachi Emmanuel Ministries</span>
            </div>
            
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-8 text-[#1a1a1a] dark:text-white">
              Ministering through <br />
              <span className="text-[#eab308] dark:text-[#FFDE59]">Creativity</span> for the <br />
              Kingdom
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-lg mb-10 leading-relaxed">
              Spreading the Gospel through innovative media, powerful teachings, and transformative outreach programs that bridge the gap between tradition and the digital age.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate?.('partner')}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#FFDE59] text-[#1a1a1a] font-bold rounded-xl shadow-xl shadow-[#FFDE59]/30 hover:scale-[1.02] transition-transform"
              >
                Become a Partner <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              
              <button
                onClick={() => onNavigate?.('ministries')}
                className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-[#1a1a1a] text-[#1a1a1a] dark:text-white border border-slate-200 dark:border-white/10 font-bold rounded-xl hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
              >
                Our Ministries
              </button>
            </div>
          </div>

          <div className="relative animate-in fade-in zoom-in duration-1000 delay-200 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px]">
              <div className="relative p-2 bg-white/50 dark:bg-white/5 backdrop-blur-xl rounded-[2.5rem] border border-white dark:border-white/10 shadow-2xl overflow-hidden">
                <div className="rounded-[2rem] overflow-hidden aspect-[4/5]">
                  <img 
                    src="https://images.unsplash.com/photo-1511632765486-a01980968a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                    alt="Kachi Emmanuel Impact" 
                    className="w-full h-full object-cover animate-float"
                  />
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#1a1a1a] rounded-2xl flex items-center justify-center shadow-xl rotate-12">
                <Zap className="w-10 h-10 text-[#FFDE59]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;