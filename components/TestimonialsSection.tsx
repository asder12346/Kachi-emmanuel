import React, { useState } from 'react';
import { MessageSquare, ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    quote: "The creative approach to ministry through media and arts has helped me connect with God in ways I never thought possible. Kachi's messages resonate deeply with my generation.",
    name: "Michael Brown",
    title: "College Student",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    quote: "I've been truly blessed by the authentic teachings and the passion behind every outreach program. Kachi Emmanuel Ministries is making a real difference!",
    name: "Sarah Johnson",
    title: "Community Volunteer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
  {
    quote: "Joining the monthly partnership has been one of the most fulfilling decisions. It's incredible to see the impact of my contributions across various ministries.",
    name: "David Lee",
    title: "Covenant Partner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
  },
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="testimonials" className="py-12 bg-slate-50 dark:bg-black transition-colors duration-300 animate-in fade-in relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <h2 className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#fae78e] mb-2">Testimonials</h2>
          <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-800 dark:text-white">Impact Stories</h3>
        </div>

        <div className="relative group">
            {/* Reduced Compact Card Size */}
            <div className="relative overflow-hidden rounded-[2rem] shadow-xl bg-white dark:bg-[#280c2d] border border-slate-200 dark:border-[#fae78e]/10 p-6 md:p-10 animate-in zoom-in duration-500 min-h-[280px] flex items-center justify-center">
                <Quote className="absolute top-4 left-4 w-8 h-8 text-[#fae78e]/5" />
                
                <div className="w-full">
                    {testimonials.map((testimonial, index) => (
                        <div
                          key={index}
                          className={`transition-all duration-500 ease-in-out absolute inset-0 flex flex-col items-center justify-center p-6 ${
                              index === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'
                          }`}
                        >
                            <div className="flex gap-1 text-[#fae78e] mb-3">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                            </div>

                            <p className="text-sm md:text-base text-slate-600 dark:text-slate-200 text-center font-serif-display leading-relaxed mb-6 italic font-light">
                                "{testimonial.quote}"
                            </p>
                            
                            <div className="flex items-center gap-3">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-10 h-10 rounded-full object-cover border-2 border-[#fae78e] shadow-md"
                                />
                                <div className="text-left">
                                    <p className="font-bold text-xs text-slate-900 dark:text-white">{testimonial.name}</p>
                                    <p className="text-[9px] text-[#fae78e] font-bold uppercase tracking-wider">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Compact Navigation */}
                <div className="absolute bottom-4 right-6 flex gap-2">
                  <button
                    onClick={goToPrevious}
                    className="p-2 bg-slate-100 dark:bg-black/40 rounded-full text-slate-800 dark:text-white hover:bg-[#fae78e] hover:text-[#280c2d] transition-all border border-slate-200 dark:border-[#fae78e]/20"
                    aria-label="Previous"
                  >
                    <ArrowLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={goToNext}
                    className="p-2 bg-slate-100 dark:bg-black/40 rounded-full text-slate-800 dark:text-white hover:bg-[#fae78e] hover:text-[#280c2d] transition-all border border-slate-200 dark:border-[#fae78e]/20"
                    aria-label="Next"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;