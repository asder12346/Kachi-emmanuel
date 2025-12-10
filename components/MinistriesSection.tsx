import React from 'react';
import { BookOpen, Church, Lightbulb, ArrowRight, HandHeart, Users } from 'lucide-react';
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
    <section id="ministries" className="py-24 bg-slate-50 dark:bg-[#1a1a1a] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-[#eab308] dark:text-[#FFDE59] mb-4">Ministries Overview</h2>
          <h3 className="font-display text-4xl md:text-5xl font-extrabold text-[#1a1a1a] dark:text-white">Transforming Lives Everywhere</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ministries.map((m, i) => (
            <div key={i} className="bg-white dark:bg-white/5 rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-white/10 group hover:-translate-y-2 transition-all duration-500">
              <div className="h-48 overflow-hidden relative">
                <img src={m.image} alt={m.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFDE59]/80 to-transparent"></div>
              </div>
              <div className="p-8">
                <div className="w-10 h-10 bg-[#FFDE59]/20 rounded-xl flex items-center justify-center mb-6">
                  <m.icon className="w-5 h-5 text-black dark:text-[#FFDE59]" />
                </div>
                <h4 className="text-xl font-bold text-[#1a1a1a] dark:text-white mb-2">{m.title}</h4>
                <p className="text-[#1a1a1a] text-xs font-bold uppercase tracking-widest mb-4">{m.subtitle}</p>
                <p className="text-sm text-slate-500 mb-8 leading-relaxed">{m.description}</p>
                <button 
                  onClick={() => onNavigate?.('ministries')}
                  className="flex items-center gap-2 text-black dark:text-[#FFDE59] font-bold text-sm hover:gap-4 transition-all group/btn"
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