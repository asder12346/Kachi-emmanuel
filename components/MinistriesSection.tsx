import React from 'react';
import { BookOpen, Church, ArrowRight, HandHeart, Users } from 'lucide-react';
import { Page } from '../App';

interface MinistriesSectionProps {
  onNavigate?: (page: Page, sectionId?: string) => void;
}

const MinistriesSection: React.FC<MinistriesSectionProps> = ({ onNavigate }) => {
  const ministries = [
    {
      title: 'Teaching Series',
      subtitle: 'Believers Perspective',
      description: 'Teaching the Word and helping young believers grow spiritually. Your friend in the school of spiritual growth.',
      icon: BookOpen,
      image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Outreach Program',
      subtitle: 'The Gospel Truth',
      description: 'Helping believers overcome struggles and walk in spiritual maturity through relatable and powerful content.',
      icon: HandHeart,
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Spirit & Stature',
      subtitle: 'Faith & Excellence',
      description: 'Fusing faith and fashion — inspiring believers to reflect excellence in both spiritual and physical appearance.',
      icon: Church,
      image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Campus Invasions',
      subtitle: 'Reach Where They Are',
      description: 'Taking the message of Christ beyond digital spaces into schools, campuses, and communities across the globe.',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1511632765486-a01980968a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
  ];

  return (
    <section id="ministries" className="py-24 bg-black relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#280c2d]/20 to-black pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-[#fae78e] mb-4">Ministries Overview</h2>
          <h3 className="font-display text-4xl md:text-5xl font-extrabold text-white">Transforming Lives Everywhere</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ministries.map((m, i) => (
            <div key={i} className="bg-[#280c2d] rounded-[2rem] overflow-hidden shadow-lg border border-[#fae78e]/10 group hover:-translate-y-2 hover:border-[#fae78e]/40 transition-all duration-500">
              <div className="h-48 overflow-hidden relative">
                <img src={m.image} alt={m.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#280c2d] to-transparent"></div>
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-[#fae78e] rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(250,231,142,0.3)]">
                  <m.icon className="w-6 h-6 text-[#280c2d]" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{m.title}</h4>
                <p className="text-[#fae78e] text-xs font-bold uppercase tracking-widest mb-4 opacity-80">{m.subtitle}</p>
                <p className="text-sm text-slate-300 mb-8 leading-relaxed font-light">{m.description}</p>
                <button 
                  onClick={() => onNavigate?.('ministries')}
                  className="flex items-center gap-2 text-[#fae78e] font-bold text-sm hover:gap-4 transition-all group/btn focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#280c2d] rounded-md"
                >
                  Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinistriesSection;