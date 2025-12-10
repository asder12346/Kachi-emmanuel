import React, { useEffect, useRef, useState } from 'react';
import { Camera } from 'lucide-react';

const GalleryItem: React.FC<{ img: { src: string; alt: string; caption: string }; index: number }> = ({ img, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2, // Trigger when 20% of the item is visible
        rootMargin: '50px' // Start slightly before it enters screen fully
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`relative group overflow-hidden rounded-xl shadow-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-800 transition-all duration-500 transform hover:scale-105 ${
        isVisible 
          ? 'animate-in fade-in zoom-in-95 opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        animationDelay: `${(index % 4) * 100}ms`, // Stagger effect based on column
        animationFillMode: 'both'
      }}
    >
      <img
        src={img.src}
        alt={img.alt}
        className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="text-white text-lg font-semibold px-4 text-center font-display tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {img.caption}
        </p>
      </div>
    </div>
  );
};

const GallerySection: React.FC = () => {
  const galleryImages = [
    { src: 'https://via.placeholder.com/800x600/6366f1/ffffff?text=Ministry+Event', alt: 'Ministry Event', caption: 'Ministry Event' },
    { src: 'https://via.placeholder.com/800x600/eab308/ffffff?text=Bible+Study', alt: 'Bible Study', caption: 'Bible Study' },
    { src: 'https://via.placeholder.com/800x600/a855f7/ffffff?text=Prayer+Session', alt: 'Prayer Session', caption: 'Prayer Session' },
    { src: 'https://via.placeholder.com/800x600/22c55e/ffffff?text=Youth+Program', alt: 'Youth Program', caption: 'Youth Program' },
    { src: 'https://via.placeholder.com/800x600/f43f5e/ffffff?text=Outreach+Day', alt: 'Outreach Day', caption: 'Outreach Day' },
    { src: 'https://via.placeholder.com/800x600/3b82f6/ffffff?text=Worship+Night', alt: 'Worship Night', caption: 'Worship Night' },
    { src: 'https://via.placeholder.com/800x600/f97316/ffffff?text=Community+Service', alt: 'Community Service', caption: 'Community Service' },
    { src: 'https://via.placeholder.com/800x600/8b5cf6/ffffff?text=Conference', alt: 'Conference', caption: 'Conference' },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-8 duration-700">
          <h2 className="text-sm md:text-base uppercase tracking-widest font-bold text-amber-700 dark:text-amber-400 mb-3 flex items-center justify-center gap-2">
            <Camera className="w-5 h-5" />
            Ministry Gallery
          </h2>
          <h3 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-slate-900 dark:text-white">
            Moments of Faith and Community
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((img, index) => (
            <GalleryItem key={index} img={img} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;