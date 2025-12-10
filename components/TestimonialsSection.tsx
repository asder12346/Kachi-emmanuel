import React, { useState } from 'react';
import { MessageSquare, ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The creative approach to ministry through media and arts has helped me connect with God in ways I never thought possible. Kachi's messages resonate deeply with my generation.",
    name: "Michael Brown",
    title: "College Student",
    image: "https://via.placeholder.com/150/6366f1/ffffff?text=MB",
  },
  {
    quote: "I've been truly blessed by the authentic teachings and the passion behind every outreach program. Kachi Emmanuel Ministries is making a real difference!",
    name: "Sarah Johnson",
    title: "Community Volunteer",
    image: "https://via.placeholder.com/150/eab308/ffffff?text=SJ",
  },
  {
    quote: "Joining the monthly partnership has been one of the most fulfilling decisions. It's incredible to see the impact of my contributions across various ministries.",
    name: "David Lee",
    title: "Covenant Partner",
    image: "https://via.placeholder.com/150/a855f7/ffffff?text=DL",
  },
  {
    quote: "The Worship Nights are truly transformative. The fusion of faith and fashion inspires me to reflect excellence in every aspect of my life, both spiritual and physical.",
    name: "Jessica Chen",
    title: "Worship Attendee",
    image: "https://via.placeholder.com/150/22c55e/ffffff?text=JC",
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
    <section id="testimonials" className="py-20 md:py-32 bg-white dark:bg-slate-950 transition-colors duration-300 animate-in fade-in">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-16 animate-in fade-in slide-in-from-top-8 duration-700">
          <h2 className="text-sm md:text-base uppercase tracking-widest font-bold text-indigo-700 dark:text-indigo-400 mb-3 flex items-center justify-center gap-2">
            <MessageSquare className="w-5 h-5" />
            Impact Stories
          </h2>
          <h3 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-slate-900 dark:text-white">
            Lives Transformed by Faith
          </h3>
        </div>

        <div className="relative overflow-hidden rounded-3xl shadow-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-800/50 p-8 md:p-12 animate-in fade-in zoom-in duration-700">
          <Quote className="absolute top-8 left-8 w-12 h-12 text-indigo-200 dark:text-indigo-700 opacity-70" />
          <Quote className="absolute bottom-8 right-8 w-12 h-12 text-indigo-200 dark:text-indigo-700 opacity-70 transform rotate-180" />

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`flex flex-col items-center transition-opacity duration-700 ease-in-out ${
                index === currentIndex ? 'opacity-100' : 'opacity-0 absolute inset-0 pointer-events-none'
              }`}
            >
              <p className="text-lg md:text-2xl text-slate-700 dark:text-slate-200 italic font-serif-display leading-relaxed mb-8 max-w-2xl">
                "{testimonial.quote}"
              </p>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-white dark:border-slate-700 shadow-md mb-4"
              />
              <p className="font-bold text-lg text-slate-900 dark:text-white">{testimonial.name}</p>
              <p className="text-sm text-indigo-600 dark:text-indigo-400 mb-6">{testimonial.title}</p>
            </div>
          ))}

          {/* Navigation Buttons */}
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button
              onClick={goToPrevious}
              className="p-3 bg-white/70 dark:bg-slate-700/70 rounded-full shadow-md text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 transition-colors mx-2"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button
              onClick={goToNext}
              className="p-3 bg-white/70 dark:bg-slate-700/70 rounded-full shadow-md text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-700 transition-colors mx-2"
              aria-label="Next testimonial"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentIndex ? 'bg-indigo-600 dark:bg-indigo-400' : 'bg-slate-300 dark:bg-slate-600'
                } transition-colors duration-300`}
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