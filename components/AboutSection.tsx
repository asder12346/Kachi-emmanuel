import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 animate-in fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image/Logo Section */}
        <div className="relative text-center md:text-left animate-in fade-in slide-in-from-left-8 duration-700">
          <div className="w-full h-80 md:h-96 bg-gradient-to-br from-indigo-100 to-indigo-200 dark:from-indigo-900/30 dark:to-indigo-800/30 rounded-3xl shadow-xl flex items-center justify-center overflow-hidden">
            <Sparkles className="w-40 h-40 md:w-60 md:h-60 text-indigo-300 dark:text-indigo-700 opacity-60 animate-pulse-slow" />
            <span className="absolute font-display font-bold text-4xl text-indigo-700 dark:text-indigo-200">KEM</span>
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0 md:-right-6 w-48 h-48 bg-amber-200/50 dark:bg-amber-800/50 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        </div>

        {/* Content Section */}
        <div className="animate-in fade-in slide-in-from-right-8 duration-700 delay-100">
          <h2 className="text-xs md:text-sm uppercase tracking-widest font-bold text-amber-700 dark:text-amber-400 mb-3 flex items-center gap-2 justify-center md:justify-start">
            <Sparkles className="w-4 h-4" />
            About Kachi Emmanuel Ministries
          </h2>
          <h3 className="font-display text-3xl sm:text-4xl font-bold leading-tight mb-6 text-slate-900 dark:text-white">
            Transforming Lives Through Faith
          </h3>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
            Kachi Emmanuel Ministries is dedicated to spreading the Gospel through creative expressions and innovative approaches. Founded on the principles of faith, hope, and love, our mission is to reach souls across generations with the transformative message of Jesus Christ.
          </p>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            Through multimedia productions, inspirational teachings, and community outreach, we strive to make a lasting impact in our world for the Kingdom of God.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full shadow-lg shadow-indigo-500/30 transform hover:scale-105 transition-all group"
            aria-label="Learn More about Kachi Emmanuel Ministries"
          >
            Learn More
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;