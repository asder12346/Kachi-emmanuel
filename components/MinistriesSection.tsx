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
    },
    {
      title: 'Outreach Program',
      subtitle: 'The Gospel Truth with Kachi',
      description: 'To help young believers overcome struggles, understand God\'s Word, and walk in spiritual maturity through relatable, Scripture-based content. Transforming communities through practical demonstrations of God\'s love and compassion.',
      icon: HandHeart,
      color: 'amber',
    },
    {
      title: 'Worship Night',
      subtitle: 'Spirit and Stature',
      description: 'Fusing faith and fashion — inspiring believers to reflect excellence in both spiritual and physical appearance. To remind believers that while we grow spiritually, our outward excellence should mirror the inner beauty of the Spirit within.',
      icon: Church,
      color: 'purple',
    },
    {
      title: 'Outreaches and Evangelism',
      subtitle: 'Reach Where They Are',
      description: 'To reach young people where they are on campuses, in schools, and in communities. Taking the message of Christ beyond digital spaces into schools, campuses, and communities.',
      icon: Users,
      color: 'emerald',
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
              className={`bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border border-slate-200 dark:border-white/10 group hover:border-${ministry.color}-500/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 delay-${index * 100} duration-700`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`p-4 rounded-full bg-${ministry.color}-100 dark:bg-${ministry.color}-900/30 text-${ministry.color}-700 dark:text-${ministry.color}-400 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <ministry.icon className="w-8 h-8" />
              </div>
              <h4 className="font-display text-xl font-bold mb-2 text-slate-900 dark:text-white">
                {ministry.title}
              </h4>
              <p className={`text-sm font-semibold text-${ministry.color}-600 dark:text-${ministry.color}-300 mb-4`}>
                {ministry.subtitle}
              </p>
              <p className="text-slate-600 dark:text-slate-300 text-base flex-grow mb-6">
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinistriesSection;