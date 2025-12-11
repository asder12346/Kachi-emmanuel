import React from 'react';
import { X, BookOpen, SunMedium } from 'lucide-react';

interface DevotionalModalProps {
  onClose: () => void;
}

const DevotionalModal: React.FC<DevotionalModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-500"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500 border border-slate-200 dark:border-white/10">
        
        {/* Decorative Header Background */}
        <div className="h-32 bg-gradient-to-br from-indigo-500 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '20px 20px'
          }}></div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white flex flex-col items-center">
            <SunMedium className="w-10 h-10 mb-2 animate-pulse-slow" />
            <h3 className="font-display font-bold text-xl tracking-wider uppercase">Daily Word</h3>
          </div>
          
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full transition-colors backdrop-blur-md focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-8 text-center">
          <h2 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-3">
            Today's Devotional
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
            Start your day with spiritual nourishment! Dive into a word that refreshes your soul and renews your mind.
          </p>

          <div className="flex flex-col gap-3">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); onClose(); }}
              className="w-full py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/25 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 group focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Read Now
            </a>
            <button 
              onClick={onClose}
              className="w-full py-3 text-slate-500 dark:text-slate-400 font-medium hover:text-slate-800 dark:hover:text-white transition-colors text-sm focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-md"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevotionalModal;