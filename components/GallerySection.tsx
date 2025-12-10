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
    { src: 'https://via.placeholder.com/800x600/280c2d/ffffff?text=Ministry+Event', alt: 'Ministry Event', caption: 'Ministry Event' },
    { src: 'https://via.placeholder.com/800x600/fae78e/280c2d?text=Bible+Study', alt: 'Bible Study', caption: 'Bible Study' },
    { src: 'https://via.placeholder.com/800x600/333333/ffffff?text=Prayer+Session', alt: 'Prayer Session', caption: 'Prayer Session' },
    { src: 'https://via.placeholder.com/800x600/550055/ffffff?text=Youth+Program', alt: 'Youth Program', caption: 'Youth Program' },
    { src: 'https://via.placeholder.com/800x600/000000/fae78e?text=Outreach+Day', alt: 'Outreach Day', caption: 'Outreach Day' },
    { src: 'https://via.placeholder.com/800x600/280c2d/fae78e?text=Worship+Night', alt: 'Worship Night', caption: 'Worship Night' },
    { src: 'https://via.placeholder.com/800x600/fae78e/000000?text=Community+Service', alt: 'Community Service', caption: 'Community Service' },
    { src: 'https://via.placeholder.com/800x600/111111/ffffff?text=Conference', alt: 'Conference', caption: 'Conference' },
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