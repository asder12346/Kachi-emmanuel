import React from 'react';
import { BookOpen, Church, Lightbulb, TrendingUp, ArrowRight, Video, Users, HandHeart } from 'lucide-react';

interface MinistriesSectionProps {
  onNavigate?: (page: 'home' | 'about' | 'ministries', sectionId?: string) => void;
}

const MinistriesSection: React.FC<MinistriesSectionProps> = ({ onNavigate }) => {
  const ministries = [
    {
      title: 'Teaching Series',
      subtitle: 'Believers Perspective',
      description: 'Teaching the Word and helping young believers grow spiritually. Your friend in the school of spiritual growth.',
      icon: BookOpen,
      color: 'indigo',
      image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Outreach Program',
      subtitle: 'The Gospel Truth with Kachi',
      description: 'To help young believers overcome struggles, understand God\'s Word, and walk in spiritual maturity through relatable content.',
      icon: HandHeart,
      color: 'amber',
      image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Worship Night',
      subtitle: 'Spirit and Stature',
      description: 'Fusing faith and fashion — inspiring believers to reflect excellence in both spiritual and physical appearance.',
      icon: Church,
      color: 'purple',
      image: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      title: 'Outreaches',
      subtitle: 'Reach Where They Are',
      description: 'Taking the message of Christ beyond digital spaces into schools, campuses, and communities.',
      icon: Users,
      color: 'emerald',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980968a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
  ];

  return (
    <section id="ministries" className="py-20 md:py-32 bg-white dark:bg-slate-950 transition-colors duration-300 animate-in fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-8 duration-700">
          <h2 className="text-sm md:text-base uppercase tracking-widest font-bold text-indigo-700 dark:text-indigo-400 mb-3 flex items-center justify-center gap-2">
            <Lightbulb className="w-5 h-5" />
            Ministries Overview
          </h2>
          <h3 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-slate-900 dark:text-white">
            Transforming Lives, Building Futures
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {ministries.map((ministry, index) => (
            <div
              key={index}
              className={`bg-slate-50 dark:bg-slate-900 rounded-2xl overflow-hidden flex flex-col shadow-lg border border-slate-200 dark:border-white/5 group hover:border-indigo-500/30 transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-700 hover:-translate-y-2`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={ministry.image} 
                  alt={ministry.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6 flex flex-col flex-grow relative">
                <div className="flex items-start gap-4 mb-3">
                    <div className={`p-2.5 rounded-xl bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 shrink-0`}>
                        <ministry.icon className="w-5 h-5" />
                    </div>
                    <div>
                        <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white leading-tight">
                        {ministry.title}
                        </h4>
                        <p className={`text-xs font-bold text-amber-600 dark:text-amber-400 mt-1 uppercase tracking-wide`}>
                        {ministry.subtitle}
                        </p>
                    </div>
                </div>

                <div className="w-full h-px bg-slate-200 dark:bg-slate-800 my-3"></div>

                <p className="text-slate-600 dark:text-slate-300 text-sm flex-grow mb-6 leading-relaxed">
                  {ministry.description}
                </p>

                <button
                  onClick={() => onNavigate?.('ministries')}
                  className={`inline-flex items-center text-sm font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors group/link mt-auto`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
            <button 
                onClick={() => onNavigate?.('ministries')}
                className="inline-flex items-center justify-center px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full shadow-xl shadow-indigo-500/20 transition-all hover:scale-105 active:scale-95 group"
            >
                Discover All Ministry Works
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
        </div>
      </div>
    </section>
  );
};

export default MinistriesSection;