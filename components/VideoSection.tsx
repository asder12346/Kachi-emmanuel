import React from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-[#0a0a0a] transition-colors relative overflow-hidden border-t border-[#fae78e]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Simplified Video Frame */}
        <div className="relative w-full aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl border border-[#fae78e]/20 group cursor-pointer animate-in fade-in zoom-in duration-700 focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-3xl" tabIndex={0} role="button" aria-label="Play ministry video">
           {/* Subtle Glow Effect */}
           <div className="absolute -inset-1 bg-gradient-to-r from-[#fae78e] to-[#280c2d] blur opacity-10 group-hover:opacity-30 transition duration-1000"></div>
           
           <div className="relative w-full h-full bg-black rounded-[2.5rem] overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
                    alt="Ministry Video" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-60"
                />
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#fae78e]/20 backdrop-blur-md flex items-center justify-center border border-[#fae78e]/50 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_40px_rgba(250,231,142,0.3)]">
                        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#fae78e] flex items-center justify-center pl-1 shadow-lg">
                            <Play className="w-6 h-6 md:w-8 md:h-8 text-[#280c2d] fill-[#280c2d]" />
                        </div>
                    </div>
                </div>
           </div>
        </div>

        {/* Caption Label Below */}
        <div className="mt-8 text-center animate-in slide-in-from-bottom-4 duration-1000">
            <p className="text-[#fae78e] text-xs font-bold uppercase tracking-[0.4em] drop-shadow-sm">
                Emmanuel Industries - Kingdom Media Production
            </p>
            <div className="w-12 h-0.5 bg-[#fae78e]/30 mx-auto mt-4 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;