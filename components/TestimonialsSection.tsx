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
  {
    quote: "The Worship Nights are truly transformative. The fusion of faith and fashion inspires me to reflect excellence in every aspect of my life, both spiritual and physical.",
    name: "Jessica Chen",
    title: "Worship Attendee",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80",
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
    <section id="testimonials" className="py-20 md:py-32 bg-black transition-colors duration-300 animate-in fade-in relative overflow-hidden">
        {/* Background blobs for visual interest */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-[#280c2d] rounded-full filter blur-[100px] opacity-40 animate-blob"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#fae78e]/10 rounded-full filter blur-[100px] opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-8 duration-700">
          <h2 className="text-sm md:text-base uppercase tracking-widest font-bold text-[#fae78e] mb-3 flex items-center justify-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Impact Stories
          </h2>
          <h3 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-white">
            Lives Transformed by Faith
          </h3>
        </div>

        <div className="relative">
            {/* Main Card */}
            <div className="relative overflow-hidden rounded-[3rem] shadow-2xl bg-[#280c2d]/60 backdrop-blur-xl border border-[#fae78e]/10 p-8 md:p-16 animate-in fade-in zoom-in duration-700">
            <Quote className="absolute top-8 left-8 w-16 h-16 text-[#fae78e]/10 -z-10" />
            
            <div className="flex items-center justify-center min-h-[300px]">
                {testimonials.map((testimonial, index) => (
                    <div
                    key={index}
                    className={`transition-all duration-700 ease-in-out absolute w-full max-w-3xl flex flex-col items-center ${
                        index === currentIndex ? 'opacity-100 translate-x-0 relative' : 'opacity-0 translate-x-12 absolute top-0 pointer-events-none'
                    }`}
                    >
                        {/* Rating Stars */}
                        <div className="flex gap-1 text-[#fae78e] mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-5 h-5 fill-current" />
                            ))}
                        </div>

                        <p className="text-xl md:text-2xl text-slate-200 text-center font-serif-display leading-relaxed mb-10 italic font-light">
                            "{testimonial.quote}"
                        </p>
                        
                        <div className="flex flex-col items-center gap-4">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#fae78e] rounded-full blur opacity-20"></div>
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-[#fae78e] shadow-lg relative z-10"
                                />
                            </div>
                            <div className="text-center">
                                <p className="font-bold text-lg text-white">{testimonial.name}</p>
                                <p className="text-sm text-[#fae78e] font-medium uppercase tracking-wide">{testimonial.title}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Controls */}
            <div className="flex justify-between items-center absolute top-1/2 left-0 right-0 -translate-y-1/2 px-2 md:px-8 pointer-events-none">
                <button
                onClick={goToPrevious}
                className="pointer-events-auto p-4 bg-black/50 rounded-full shadow-lg text-white hover:bg-[#fae78e] hover:text-[#280c2d] transition-all transform hover:scale-110 border border-white/10 group"
                aria-label="Previous testimonial"
                >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                </button>
                <button
                onClick={goToNext}
                className="pointer-events-auto p-4 bg-black/50 rounded-full shadow-lg text-white hover:bg-[#fae78e] hover:text-[#280c2d] transition-all transform hover:scale-110 border border-white/10 group"
                aria-label="Next testimonial"
                >
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
            </div>

             {/* Dots Indicator */}
            <div className="flex justify-center mt-8 gap-3">
                {testimonials.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'w-8 bg-[#fae78e]' : 'w-2 bg-[#280c2d] border border-[#fae78e]/30 hover:bg-[#fae78e]/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                ></button>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;