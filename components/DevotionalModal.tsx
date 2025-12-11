
import React from 'react';
import { X, BookOpen, SunMedium } from 'lucide-react';
import { Page } from '../App';

interface DevotionalModalProps {
  onClose: () => void;
  onNavigate: (page: Page) => void;
}

const DevotionalModal: React.FC<DevotionalModalProps> = ({ onClose, onNavigate }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-md animate-in fade-in duration-500"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-md bg-[#280c2d] rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-500 border border-[#fae78e]/20">
        
        {/* Decorative Header Background */}
        <div className="h-40 bg-gradient-to-br from-[#280c2d] to-black relative overflow-hidden flex items-center justify-center border-b border-[#fae78e]/10">
          <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, #fae78e 1px, transparent 0)`,
              backgroundSize: '24px 24px'
          }}></div>
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#fae78e]/5 rounded-full blur-2xl"></div>
          <div className="flex flex-col items-center relative z-10">
            <div className="p-3 bg-[#fae78e] rounded-2xl mb-3 shadow-[0_0_20px_rgba(250,231,142,0.4)]">
                <SunMedium className="w-8 h-8 text-[#280c2d]" />
            </div>
            <h3 className="font-display font-bold text-lg tracking-[0.3em] uppercase text-[#fae78e]">Daily Devotional</h3>
          </div>
          
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-[#fae78e] text-[#fae78e] hover:text-[#280c2d] rounded-full transition-all border border-[#fae78e]/20 focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-10 text-center">
          <h2 className="font-display text-2xl font-bold text-white mb-4">
            Today's Fresh Manna
          </h2>
          <p className="text-slate-300 mb-10 leading-relaxed font-light italic">
            "Thy word is a lamp unto my feet, and a light unto my path." — Psalm 119:105
          </p>

          <div className="flex flex-col gap-4">
            <button 
              onClick={() => onNavigate('devotionals')}
              className="w-full py-4 bg-[#fae78e] hover:bg-white text-[#280c2d] font-bold rounded-xl shadow-lg shadow-[#fae78e]/10 transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 group focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              <BookOpen className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Read Devotional
            </button>
            <button 
              onClick={onClose}
              className="w-full py-3 text-slate-500 font-bold hover:text-white transition-colors text-xs uppercase tracking-widest focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevotionalModal;
