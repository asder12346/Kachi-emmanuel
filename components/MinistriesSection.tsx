import React from 'react';
import { BookOpen, Church, Lightbulb, TrendingUp, ArrowRight, Video, Users, HandHeart } from 'lucide-react';

const MinistriesSection: React.FC = () => {
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
      title: 'Outreaches and Evangelism',
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ministries.map((ministry, index) => (
            <div
              key={index}
              className={`bg-slate-50 dark:bg-slate-800/50 rounded-2xl overflow-hidden flex flex-col shadow-lg border border-slate-200 dark:border-white/10 group hover:border-${ministry.color}-500/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 delay-${index * 100} duration-700 hover:-translate-y-2`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Header */}
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={ministry.image} 
                  alt={ministry.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60"></div>
                
                {/* Floating Icon Badge */}
                <div className={`absolute -bottom-6 left-1/2 -translate-x-1/2 p-4 rounded-full bg-white dark:bg-slate-800 shadow-xl border-4 border-slate-50 dark:border-slate-800/50 z-10 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`text-${ministry.color}-600 dark:text-${ministry.color}-400`}>
                    <ministry.icon className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="pt-10 pb-8 px-6 flex flex-col items-center text-center flex-grow">
                <h4 className="font-display text-xl font-bold mb-2 text-slate-900 dark:text-white">
                  {ministry.title}
                </h4>
                <p className={`text-sm font-semibold text-${ministry.color}-600 dark:text-${ministry.color}-300 mb-4`}>
                  {ministry.subtitle}
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base flex-grow mb-6 leading-relaxed">
                  {ministry.description}
                </p>
                <a
                  href="#"
                  className={`inline-flex items-center px-5 py-2.5 bg-${ministry.color}-600 hover:bg-${ministry.color}-700 text-white font-medium rounded-full transform group-hover:scale-105 transition-all shadow-lg shadow-${ministry.color}-500/20`}
                  aria-label={`Learn more about ${ministry.title}`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinistriesSection;