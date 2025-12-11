import React, { useState, useEffect } from 'react';
import { BookOpen, Church, ArrowRight, HandHeart, Users, Sparkles, Star, Share2 } from 'lucide-react';
import { Page } from '../App';

interface MinistriesSectionProps {
  onNavigate?: (page: Page, sectionId?: string) => void;
}

const MinistryCard: React.FC<{ m: any, onNavigate?: (page: Page, sectionId?: string) => void }> = ({ m, onNavigate }) => {
  const [tooltipPos, setTooltipPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only apply on desktop
    if (window.innerWidth < 768) return;
    
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (centerY - y) / 15;
    const rotateY = (x - centerX) / 15;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    
    // Update Tooltip Position
    setTooltipPos({ x: e.clientX, y: e.clientY });
    setIsHovering(true);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    setIsHovering(false);
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: m.title,
        text: m.description,
        url: window.location.href,
      }).catch(console.error);
    } else {
      alert("Link copied to clipboard!");
    }
  };

  return (
    <>
      <div 
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="bg-[#280c2d] rounded-[2rem] overflow-hidden shadow-lg border border-[#fae78e]/10 group transition-all duration-300 tilt-card cursor-none md:cursor-default"
      >
        <div className="h-48 overflow-hidden relative">
          <img src={m.image} alt={m.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#280c2d] to-transparent"></div>
          
          {/* Top action bar on hover */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <button 
                onClick={handleShare}
                className="p-2 bg-[#fae78e] rounded-full text-[#280c2d] shadow-lg hover:scale-110 active:scale-90 transition-transform"
                title="Share Ministry"
             >
                <Share2 className="w-4 h-4" />
             </button>
          </div>
        </div>
        <div className="p-8">
          <div className="w-12 h-12 bg-[#fae78e] rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(250,231,142,0.3)] group-hover:scale-110 transition-transform">
            <m.icon className="w-6 h-6 text-[#280c2d]" />
          </div>
          <h4 className="text-xl font-bold text-white mb-2">{m.title}</h4>
          <p className="text-[#fae78e] text-xs font-bold uppercase tracking-widest mb-4 opacity-80">{m.subtitle}</p>
          <p className="text-sm text-slate-300 mb-8 leading-relaxed font-light">{m.description}</p>
          <div className="flex items-center justify-between">
            <button 
              onClick={() => onNavigate?.('ministries')}
              className="flex items-center gap-2 text-[#fae78e] font-bold text-sm hover:gap-4 transition-all group/btn focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#280c2d] rounded-md"
            >
              Learn More <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
            </button>
            <div className="h-px flex-grow bg-white/10 mx-4"></div>
            <button 
              onClick={() => onNavigate?.('partner')}
              className="text-[10px] text-slate-400 font-bold uppercase tracking-widest hover:text-white transition-colors"
            >
              Partner
            </button>
          </div>
        </div>
      </div>

      {/* Floating Tooltip (Desktop Only) */}
      {isHovering && window.innerWidth >= 768 && (
        <div 
          className="fixed pointer-events-none z-[100] animate-in fade-in zoom-in-95 duration-200"
          style={{ 
            left: `${tooltipPos.x + 20}px`, 
            top: `${tooltipPos.y + 20}px` 
          }}
        >
          <div className="max-w-[200px] bg-black/90 backdrop-blur-md border border-[#fae78e]/30 p-4 rounded-2xl shadow-2xl ring-1 ring-[#fae78e]/10">
            <p className="text-[#fae78e] text-[10px] font-black uppercase tracking-[0.2em] mb-1">{m.subtitle}</p>
            <p className="text-white text-xs leading-relaxed opacity-80">{m.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

const MinistriesSection: React.FC<MinistriesSectionProps> = ({ onNavigate }) => {
  const ministries = [
    {
      title: 'Teaching Series',
      subtitle: 'Believers Perspective',
      description: 'Teaching the Word and helping young believers grow spiritually. Your friend in the school of spiritual growth.',
      icon: BookOpen,
      image: 'https://bezaleelforge.github.io/kachi/20.jpg'
    },
    {
      title: 'Outreach Program',
      subtitle: 'The Gospel Truth',
      description: 'Helping believers overcome struggles and walk in spiritual maturity through relatable and powerful content.',
      icon: HandHeart,
      image: 'https://bezaleelforge.github.io/kachi/10.jpg'
    },
    {
      title: 'Spirit & Stature',
      subtitle: 'Faith & Excellence',
      description: 'Fusing faith and fashion — inspiring believers to reflect excellence in both spiritual and physical appearance.',
      icon: Church,
      image: 'https://bezaleelforge.github.io/kachi/13.jpg'
    },
    {
      title: 'Campus Invasions',
      subtitle: 'Reach Where They Are',
      description: 'Taking the message of Christ beyond digital spaces into schools, campuses, and communities across the globe.',
      icon: Users,
      image: 'https://bezaleelforge.github.io/kachi/18.jpg'
    },
  ];

  return (
    <section id="ministries" className="py-24 bg-black relative perspective-1000">
      <div className="absolute inset-0 bg-gradient-to-b from-[#280c2d]/20 to-black pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-8">
          <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-[#fae78e] mb-4">Ministries Overview</h2>
          <h3 className="font-display text-4xl md:text-5xl font-extrabold text-white">Transforming Lives Everywhere</h3>
        </div>

        {/* Lined Marquee */}
        <div className="w-full overflow-hidden bg-[#280c2d] py-3 border-y border-[#fae78e]/30 mb-16 shadow-[0_0_30px_rgba(40,12,45,0.5)]">
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="flex items-center gap-6 mx-4">
                <span className="text-white font-bold uppercase tracking-[0.3em] text-sm flex items-center gap-3">
                  <Star className="w-4 h-4 text-[#fae78e] fill-[#fae78e]" />
                  Kachi Emmanuel Ministries
                  <Sparkles className="w-4 h-4 text-[#fae78e]" />
                </span>
                <div className="h-1 w-8 bg-[#fae78e]/20 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {ministries.map((m, i) => (
            <div key={i} className="animate-in fade-in slide-in-from-bottom-8" style={{ animationDelay: `${i * 100}ms` }}>
              <MinistryCard m={m} onNavigate={onNavigate} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MinistriesSection;