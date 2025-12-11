import React from 'react';
import { Sparkles, ArrowRight, Zap } from 'lucide-react';
import { Page } from '../App';

interface HeroSectionProps {
  onNavigate?: (page: Page, sectionId?: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden bg-black">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
            src="https://bezaleelforge.github.io/kachi/14.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-[#280c2d]/40"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(40,12,45,0.5),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-left animate-in fade-in slide-in-from-bottom-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#280c2d]/80 border border-[#fae78e]/30 mb-8 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#fae78e]" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#fae78e]">Kachi Emmanuel Ministries</span>
            </div>
            
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight mb-8 text-white">
              Ministering through <br />
              <span className="text-[#fae78e] drop-shadow-[0_0_15px_rgba(250,231,142,0.3)]">Creativity</span> for the <br />
              Kingdom
            </h1>
            
            <p className="text-lg text-slate-300 max-w-lg mb-12 leading-relaxed font-light">
              Spreading the Gospel through innovative media, powerful teachings, and transformative outreach programs that bridge the gap between tradition and the digital age.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button
                onClick={() => onNavigate?.('partner')}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#fae78e] text-[#280c2d] font-bold rounded-xl shadow-[0_0_20px_rgba(250,231,142,0.4)] hover:scale-[1.02] hover:bg-white transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Become a Partner <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              
              <button
                onClick={() => onNavigate?.('ministries')}
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border border-white/20 font-bold rounded-xl hover:bg-white/10 hover:border-[#fae78e]/50 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Our Ministries
              </button>
            </div>
          </div>

          <div className="relative animate-in fade-in zoom-in duration-1000 delay-200 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[450px]">
              <div className="relative p-3 bg-gradient-to-br from-[#fae78e]/20 to-transparent backdrop-blur-2xl rounded-[3rem] border border-[#fae78e]/20 shadow-2xl overflow-hidden">
                <div className="rounded-[2.5rem] overflow-hidden aspect-[4/5] relative">
                    <div className="absolute inset-0 bg-[#280c2d]/20 mix-blend-overlay z-10"></div>
                    <img 
                        src="https://bezaleelforge.github.io/kachi/18.jpg" 
                        alt="Kachi Emmanuel Impact" 
                        className="w-full h-full object-cover animate-float"
                    />
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#280c2d] rounded-2xl flex items-center justify-center shadow-[0_0_30px_rgba(40,12,45,0.6)] border border-[#fae78e]/20 rotate-12">
                <Zap className="w-10 h-10 text-[#fae78e]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;