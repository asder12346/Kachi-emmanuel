
import React, { useEffect, useRef, useState } from 'react';
import { Camera } from 'lucide-react';
import ImageCarousel from './ImageCarousel'; 

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
    { src: 'https://bezaleelforge.github.io/kachi/17.jpg', alt: 'Founder Kachi Emmanuel', caption: 'Founder Kachi Emmanuel' },
    { src: 'https://bezaleelforge.github.io/kachi/20.jpg', alt: 'Teaching Ministry', caption: 'Believers Perspective Session' },
    { src: 'https://bezaleelforge.github.io/kachi/10.jpg', alt: 'Community Outreach', caption: 'Global Impact Program' },
    { src: 'https://bezaleelforge.github.io/kachi/13.jpg', alt: 'Spirit and Stature', caption: 'Faith and Excellence Seminar' },
    { src: 'https://bezaleelforge.github.io/kachi/18.jpg', alt: 'Campus Invasion', caption: 'University Revival Meeting' },
    { src: 'https://bezaleelforge.github.io/kachi/21.jpg', alt: 'Worship Experience', caption: 'In Presence Worship' },
    { src: 'https://bezaleelforge.github.io/kachi/17.jpg', alt: 'Leadership Summit', caption: 'Ministry Leadership' },
    { src: 'https://bezaleelforge.github.io/kachi/20.jpg', alt: 'Word Study', caption: 'Deep Spiritual Truths' },
    { src: 'https://bezaleelforge.github.io/kachi/10.jpg', alt: 'Regional Crusade', caption: 'Healing and Salvation Crusade' },
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
