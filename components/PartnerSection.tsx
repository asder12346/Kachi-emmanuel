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
    <section id="partner" className="py-20 md:py-32 bg-black transition-colors duration-300 animate-in fade-in relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#280c2d]/40 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#fae78e]/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              className={`relative bg-[#280c2d]/80 backdrop-blur-xl rounded-[2rem] p-8 flex flex-col items-center text-center border border-[#fae78e]/10 group hover:border-[#fae78e] hover:-translate-y-3 transition-all duration-500 animate-in fade-in slide-in-from-bottom-8 delay-${index * 100} duration-700 shadow-xl hover:shadow-[0_0_30px_rgba(250,231,142,0.15)] overflow-hidden`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card internal glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#fae78e]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {option.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#fae78e] text-[#280c2d] text-[10px] font-bold uppercase tracking-wider rounded-full shadow-[0_0_15px_#fae78e] z-20">
                  Most Popular
                </div>
              )}
              
              <div className={`relative z-10 p-5 rounded-2xl bg-black border border-[#fae78e]/20 text-[#fae78e] mb-6 group-hover:scale-110 group-hover:bg-[#fae78e] group-hover:text-[#280c2d] transition-all duration-300 shadow-inner`}>
                <option.icon className="w-8 h-8" />
              </div>
              
              <h4 className="relative z-10 font-display text-xl font-bold mb-2 text-white group-hover:text-[#fae78e] transition-colors">
                {option.title}
              </h4>
              <p className={`relative z-10 text-xs font-bold text-[#fae78e]/80 mb-4 uppercase tracking-wide`}>
                {option.subtitle}
              </p>
              <p className="relative z-10 text-slate-300 text-sm flex-grow mb-8 leading-relaxed font-light">
                {option.description}
              </p>
              
              <a
                href="#"
                className={`relative z-10 inline-flex items-center px-8 py-3 text-sm font-bold rounded-xl transition-all duration-300 shadow-lg transform active:scale-95 ${
                  option.highlight 
                  ? 'bg-[#fae78e] text-[#280c2d] hover:bg-white hover:scale-105 shadow-[0_0_15px_rgba(250,231,142,0.4)]' 
                  : 'bg-transparent text-white border border-[#fae78e]/30 hover:bg-[#fae78e] hover:text-[#280c2d] hover:border-[#fae78e]'
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
          <p className="font-bold text-[#fae78e] animate-pulse">Jesus loves you</p>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;