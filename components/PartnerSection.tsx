
import React from 'react';
import { Handshake, Gift, DollarSign, Users, ArrowRight } from 'lucide-react';
import { Page } from '../App';

interface PartnerSectionProps {
  onNavigate?: (page: Page, sectionId?: string) => void;
}

const PartnerSection: React.FC<PartnerSectionProps> = ({ onNavigate }) => {
  const partnershipOptions = [
    {
      title: 'Volunteer',
      subtitle: 'Serve with your gifts & time',
      description: 'Join the volunteer team for events, media, administration, intercession, and campus outreaches.',
      icon: Users,
      buttonText: 'Serve With Us',
      highlight: false,
    },
    {
      title: 'One-Time Gift',
      subtitle: 'Sow a seed into the work',
      description: 'Your one-time gift fuels media production, campus invasions, and support for mission projects.',
      icon: Gift,
      buttonText: 'Give a Seed',
      highlight: true,
    },
    {
      title: 'Monthly Partnership',
      subtitle: 'Consistent Kingdom support',
      description: 'Commit to a monthly gift that helps sustain ongoing outreaches, discipleship platforms, and media missions.',
      icon: DollarSign,
      buttonText: 'Start Partnership',
      highlight: false,
    },
  ];

  return (
    <section id="partner" className="py-24 md:py-32 bg-black transition-colors duration-300 animate-in fade-in relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#280c2d]/40 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#fae78e]/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 animate-in fade-in slide-in-from-top-8 duration-700">
          <h2 className="text-xs md:text-sm uppercase tracking-[0.4em] font-bold text-[#fae78e] mb-4 flex items-center justify-center gap-2">
            <Handshake className="w-5 h-5" />
            Kingdom Partnership
          </h2>
          <h3 className="font-display text-4xl sm:text-5xl font-extrabold leading-tight text-white">
            Become a Covenant Partner
          </h3>
        </div>

        {/* Increased gap for desktop and added margin for mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 items-center">
          {partnershipOptions.map((option, index) => (
            <div
              key={index}
              className={`relative bg-[#280c2d]/90 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 flex flex-col items-center text-center border transition-all duration-500 animate-in fade-in slide-in-from-bottom-8 shadow-xl hover:shadow-[0_0_40px_rgba(250,231,142,0.2)] overflow-visible ${
                option.highlight 
                  ? 'border-[#fae78e] scale-[1.05] z-20 shadow-[0_0_50px_rgba(250,231,142,0.15)] my-6 md:my-0' 
                  : 'border-[#fae78e]/10 group hover:border-[#fae78e]/50 hover:-translate-y-2'
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {option.highlight && (
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-[#fae78e] text-[#280c2d] text-xs font-black uppercase tracking-widest rounded-full shadow-[0_0_20px_#fae78e] z-[30] ring-4 ring-black">
                  Most Popular
                </div>
              )}
              
              <div className={`relative z-10 p-5 rounded-3xl bg-black border border-[#fae78e]/20 text-[#fae78e] mb-8 transition-all duration-300 shadow-inner ${
                option.highlight ? 'scale-110 bg-[#fae78e] text-[#280c2d]' : 'group-hover:scale-110 group-hover:bg-[#fae78e] group-hover:text-[#280c2d]'
              }`}>
                <option.icon className="w-8 h-8" />
              </div>
              
              <h4 className="relative z-10 font-display text-2xl font-bold mb-3 text-white">
                {option.title}
              </h4>
              <p className={`relative z-10 text-[10px] font-bold text-[#fae78e] mb-6 uppercase tracking-[0.2em]`}>
                {option.subtitle}
              </p>
              <p className="relative z-10 text-slate-300 text-sm flex-grow mb-10 leading-relaxed font-light">
                {option.description}
              </p>
              
              <button
                onClick={() => onNavigate?.('partner')}
                className={`relative z-10 w-full inline-flex items-center justify-center px-8 py-4 text-sm font-bold rounded-2xl transition-all duration-300 shadow-lg transform active:scale-95 focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                  option.highlight 
                  ? 'bg-[#fae78e] text-[#280c2d] hover:bg-white hover:scale-105 shadow-[0_0_20px_rgba(250,231,142,0.5)]' 
                  : 'bg-transparent text-white border border-[#fae78e]/30 hover:bg-[#fae78e] hover:text-[#280c2d] hover:border-[#fae78e]'
                }`}
                aria-label={option.buttonText}
              >
                {option.buttonText}
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-24 text-slate-400 font-serif-display text-lg md:text-xl animate-in fade-in duration-700 delay-300">
          <p className="mb-4 italic opacity-60">"For God so loved the world that he gave his one and only Son..." - John 3:16</p>
          <p className="font-bold text-[#fae78e] text-2xl tracking-tighter drop-shadow-[0_0_10px_rgba(250,231,142,0.3)] animate-pulse">Jesus loves you</p>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
