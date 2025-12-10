import React from 'react';
import { Handshake, Gift, DollarSign, Users, ArrowRight } from 'lucide-react';

const PartnerSection: React.FC = () => {
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
    <section id="partner" className="py-20 md:py-32 bg-black transition-colors duration-300 animate-in fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-8 duration-700">
          <h2 className="text-sm md:text-base uppercase tracking-widest font-bold text-[#fae78e] mb-3 flex items-center justify-center gap-2">
            <Handshake className="w-5 h-5" />
            Partner With Us
          </h2>
          <h3 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-white">
            Become a Covenant Partner
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnershipOptions.map((option, index) => (
            <div
              key={index}
              className={`relative bg-[#280c2d] rounded-[2rem] p-8 flex flex-col items-center text-center shadow-lg border border-[#fae78e]/10 group hover:border-[#fae78e]/50 hover:-translate-y-2 transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 delay-${index * 100} duration-700`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {option.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#fae78e] text-[#280c2d] text-[10px] font-bold uppercase tracking-wider rounded-full shadow-[0_0_15px_#fae78e]">
                  Most Popular
                </div>
              )}
              <div className={`p-5 rounded-2xl bg-black border border-[#fae78e]/20 text-[#fae78e] mb-6 group-hover:scale-110 transition-transform duration-300 shadow-inner`}>
                <option.icon className="w-8 h-8" />
              </div>
              <h4 className="font-display text-xl font-bold mb-2 text-white">
                {option.title}
              </h4>
              <p className={`text-sm font-semibold text-[#fae78e]/80 mb-4 uppercase tracking-wide`}>
                {option.subtitle}
              </p>
              <p className="text-slate-300 text-sm flex-grow mb-8 leading-relaxed font-light">
                {option.description}
              </p>
              
              <a
                href="#"
                className={`inline-flex items-center px-8 py-3 text-sm font-bold rounded-xl transition-all duration-300 shadow-lg transform active:scale-95 ${
                  option.highlight 
                  ? 'bg-[#fae78e] text-[#280c2d] hover:bg-white' 
                  : 'bg-black text-white border border-[#fae78e]/30 hover:border-[#fae78e] hover:text-[#fae78e]'
                }`}
                aria-label={option.buttonText}
              >
                {option.buttonText}
                <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-20 text-slate-400 font-serif-display text-base md:text-lg animate-in fade-in duration-700 delay-300">
          <p className="mb-2 italic">"For God so loved the world that he gave his one and only Son..." - John 3:16</p>
          <p className="font-bold text-[#fae78e]">Jesus loves you</p>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;