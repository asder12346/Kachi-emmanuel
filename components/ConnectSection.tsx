import React, { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

const ConnectSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
    // Simulate API call success
    setTimeout(() => {
      setShowSuccessMessage(true);
      setEmail('');
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000); // Hide success message after 5 seconds
    }, 500);
  };

  return (
    <section 
      id="connect" 
      className="relative py-24 md:py-40 transition-colors duration-300 overflow-hidden group"
    >
      {/* Parallax Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed opacity-40 grayscale group-hover:grayscale-0 transition-all duration-1000" 
        style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")' }}
      ></div>
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-[#280c2d] via-[#280c2d]/90 to-black"></div>
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="mb-10">
          <h2 className="text-xs md:text-sm uppercase tracking-[0.4em] font-bold text-[#fae78e] mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#fae78e]/40"></span>
            <Mail className="w-5 h-5" />
            Join Our Global Family
            <span className="h-px w-8 bg-[#fae78e]/40"></span>
          </h2>
          <h3 className="font-display text-4xl sm:text-6xl font-extrabold leading-tight text-white mb-6">
            Stay Connected
          </h3>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed font-light mb-12">
            Be the first to receive transformative teachings, ministry updates, and exclusive resources designed to help you grow in your spiritual journey.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto relative group/form">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#fae78e]/20 to-transparent blur-md opacity-0 group-hover/form:opacity-100 transition-opacity"></div>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="relative z-10 flex-grow px-8 py-5 rounded-2xl border border-[#fae78e]/20 bg-black/60 backdrop-blur-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#fae78e] focus:border-transparent transition-all shadow-2xl"
            aria-label="Email address for newsletter subscription"
          />
          <button
            type="submit"
            className="relative z-10 inline-flex items-center justify-center px-10 py-5 bg-[#fae78e] hover:bg-white text-[#280c2d] font-bold rounded-2xl shadow-[0_0_30px_rgba(250,231,142,0.4)] transform hover:scale-[1.02] active:scale-95 transition-all group/btn"
            aria-label="Subscribe to mailing list"
          >
            Subscribe
            <Send className="w-5 h-5 ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </form>

        {showSuccessMessage && (
          <div 
            className="mt-8 p-6 bg-green-600/90 text-white rounded-2xl shadow-xl flex items-center justify-center gap-4 max-w-md mx-auto animate-in fade-in slide-in-from-top-4 duration-500"
            role="alert"
            aria-live="assertive"
          >
            <CheckCircle className="w-7 h-7 animate-pulse" />
            <span className="font-bold text-lg">Thank you for subscribing!</span>
          </div>
        )}
        
        <div className="mt-12 flex items-center justify-center gap-8 opacity-60">
           <div className="text-center">
              <p className="text-white font-bold text-2xl">100k+</p>
              <p className="text-[10px] uppercase tracking-widest text-[#fae78e]">Subscribers</p>
           </div>
           <div className="w-px h-8 bg-white/20"></div>
           <div className="text-center">
              <p className="text-white font-bold text-2xl">Weekly</p>
              <p className="text-[10px] uppercase tracking-widest text-[#fae78e]">Inspirations</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectSection;