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
      color: 'indigo',
    },
    {
      title: 'One-Time Gift',
      subtitle: 'Sow a seed into the work',
      description: 'Your one-time gift fuels media production, campus invasions, and support for mission projects.',
      icon: Gift,
      buttonText: 'Give a Seed',
      color: 'amber',
      highlight: true,
    },
    {
      title: 'Monthly Partnership',
      subtitle: 'Consistent Kingdom support',
      description: 'Commit to a monthly gift that helps sustain ongoing outreaches, discipleship platforms, and media missions.',
      icon: DollarSign,
      buttonText: 'Start Partnership',
      color: 'purple',
    },
  ];

  return (
    <section id="partner" className="py-20 md:py-32 bg-white dark:bg-slate-950 transition-colors duration-300 animate-in fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-8 duration-700">
          <h2 className="text-sm md:text-base uppercase tracking-widest font-bold text-indigo-700 dark:text-indigo-400 mb-3 flex items-center justify-center gap-2">
            <Handshake className="w-5 h-5" />
            Partner With Us
          </h2>
          <h3 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-slate-900 dark:text-white">
            Become a Covenant Partner
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnershipOptions.map((option, index) => (
            <div
              key={index}
              className={`relative bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border border-slate-200 dark:border-white/10 group hover:border-${option.color}-500/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 delay-${index * 100} duration-700`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {option.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-amber-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-md">
                  Most Popular
                </div>
              )}
              <div className={`p-4 rounded-full bg-${option.color}-100 dark:bg-${option.color}-900/30 text-${option.color}-700 dark:text-${option.color}-400 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <option.icon className="w-8 h-8" />
              </div>
              <h4 className="font-display text-xl font-bold mb-2 text-slate-900 dark:text-white">
                {option.title}
              </h4>
              <p className={`text-sm font-semibold text-${option.color}-600 dark:text-${option.color}-300 mb-4`}>
                {option.subtitle}
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-sm flex-grow mb-8 leading-relaxed">
                {option.description}
              </p>
              
              {/* Updated Button: Smaller and Better */}
              <a
                href="#"
                className={`inline-flex items-center px-6 py-2.5 text-sm font-bold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform active:scale-95 group-hover:bg-${option.color}-600 group-hover:text-white bg-white dark:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 hover:border-transparent`}
                aria-label={option.buttonText}
              >
                {option.buttonText}
                <ArrowRight className="w-3.5 h-3.5 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-20 text-slate-500 dark:text-slate-400 font-serif-display text-base md:text-lg animate-in fade-in duration-700 delay-300">
          <p className="mb-2">"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." - John 3:16</p>
          <p className="font-bold text-indigo-600 dark:text-indigo-400">Jesus loves you</p>
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;