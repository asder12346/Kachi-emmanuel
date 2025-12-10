import React from 'react';
import { Play, Video } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 bg-slate-900 dark:bg-black text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/20 to-purple-900/20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-10 animate-in fade-in slide-in-from-bottom-8">
          <div>
            <h2 className="text-sm uppercase tracking-widest font-bold text-amber-500 mb-2 flex items-center gap-2">
              <Video className="w-4 h-4" />
              Latest Message
            </h2>
            <h3 className="font-display text-3xl font-bold">Watch & Be Blessed</h3>
          </div>
          <a href="#" className="px-6 py-2 rounded-full border border-white/20 hover:bg-white/10 transition-colors text-sm font-semibold flex items-center gap-2">
             View All Sermons <Play className="w-3 h-3" />
          </a>
        </div>

        {/* Video Placeholder / Embed Container */}
        <div className="w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative group cursor-pointer animate-in fade-in zoom-in duration-700">
           {/* Placeholder Image simulating a video thumbnail */}
           <img 
             src="https://images.unsplash.com/photo-1478737270239-2f02b77ac6d5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
             alt="Latest Sermon Thumbnail" 
             className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
           />
           
           {/* Overlay */}
           <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center pl-1">
                      <Play className="w-6 h-6 text-indigo-600 fill-indigo-600" />
                  </div>
              </div>
           </div>
           
           {/* Video Info Overlay at Bottom */}
           <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-gradient-to-t from-black via-black/80 to-transparent">
              <span className="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold rounded mb-2">NEW</span>
              <h4 className="text-xl md:text-2xl font-bold font-display mb-1">Walking in Divine Purpose</h4>
              <p className="text-slate-300 text-sm md:text-base line-clamp-1">Discover how to align your daily walk with God's eternal plan for your life.</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;