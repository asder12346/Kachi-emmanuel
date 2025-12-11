import React, { useEffect, useRef, useState } from 'react';
import { Camera } from 'lucide-react';
import ImageCarousel from './ImageCarousel'; // Import the new carousel component

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
      { threshold: 0.2, rootMargin: '50px' }
    );

    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`relative group overflow-hidden rounded-2xl shadow-lg border border-[#fae78e]/10 bg-[#280c2d] transition-all duration-500 transform hover:scale-105 hover:border-[#fae78e]/40 ${
        isVisible ? 'animate-in fade-in zoom-in-95 opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ animationDelay: `${(index % 4) * 100}ms`, animationFillMode: 'both' }}
    >
      <img
        src={img.src}
        alt={img.alt}
        className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-[#280c2d]/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm">
        <p className="text-[#fae78e] text-lg font-bold px-4 text-center font-display tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          {img.caption}
        </p>
      </div>
    </div>
  );
};

const GallerySection: React.FC = () => {
  const galleryImages = [
    { src: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', alt: 'Ministry Event', caption: 'Ministry Event' },
    { src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', alt: 'Bible Study', caption: 'Bible Study' },
    { src: 'https://images.unsplash.com/photo-1555421689-d6847113196f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', alt: 'Prayer Session', caption: 'Prayer Session' },
    { src: 'https://images.unsplash.com/photo-1517486851061-f09c25f48866?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', alt: 'Youth Program', caption: 'Youth Program' },
    { src: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', alt: 'Outreach Day', caption: 'Outreach Day' },
    { src: 'https://images.unsplash.com/photo-1522071820075-848f87e2b7e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', alt: 'Worship Night', caption: 'Worship Night' },
    { src: 'https://images.unsplash.com/photo-1510525000516-ac69b827170d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', alt: 'Community Service', caption: 'Community Service' },
    { src: 'https://images.unsplash.com/photo-1543269875-ae9a70719602?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', alt: 'Conference', caption: 'Conference' },
    { src: 'https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80', alt: 'Baptism', caption: 'Baptism Service' },
  ];

  return (
    <section id="gallery" className="py-20 md:py-32 bg-[#050505] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-8 duration-700">
          <h2 className="text-sm md:text-base uppercase tracking-widest font-bold text-[#fae78e] mb-3 flex items-center justify-center gap-2">
            <Camera className="w-5 h-5" />
            Ministry Gallery
          </h2>
          <h3 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-white">
            Moments of Faith and Community
          </h3>
        </div>

        {/* Desktop View: Full Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryImages.map((img, index) => (
            <GalleryItem key={index} img={img} index={index} />
          ))}
        </div>

        {/* Mobile View: First Two + Carousel */}
        <div className="block md:hidden">
          <div className="grid grid-cols-2 gap-6 mb-8">
            {galleryImages.slice(0, 2).map((img, index) => (
              <GalleryItem key={index} img={img} index={index} />
            ))}
          </div>
          {galleryImages.length > 2 && (
            <ImageCarousel images={galleryImages.slice(2)} />
          )}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;