import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const ConnectSection: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribing email:', email);
    alert('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <section id="connect" className="py-20 md:py-32 bg-[#280c2d] transition-colors duration-300 animate-in fade-in border-t border-[#fae78e]/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12 animate-in fade-in slide-in-from-top-8 duration-700">
          <h2 className="text-sm md:text-base uppercase tracking-widest font-bold text-[#fae78e] mb-3 flex items-center justify-center gap-2">
            <Mail className="w-5 h-5" />
            Stay Connected
          </h2>
          <h3 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-white">
            Join the Mailing List
          </h3>
        </div>

        <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-8 leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
          Receive ministry updates, teaching resources, outreach reports, and exclusive content straight to your inbox.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-grow px-6 py-4 rounded-full border-2 border-[#fae78e]/20 bg-black/50 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#fae78e] focus:border-transparent transition-colors shadow-sm"
            aria-label="Email address for newsletter subscription"
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center px-8 py-4 bg-[#fae78e] hover:bg-white text-[#280c2d] font-bold rounded-full shadow-[0_0_20px_rgba(250,231,142,0.3)] transform hover:scale-105 transition-all group"
            aria-label="Subscribe to mailing list"
          >
            <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
            Subscribe
          </button>
        </form>
        <p className="text-xs text-slate-500 mt-4 animate-in fade-in duration-700 delay-300">
          We respect your privacy. You can unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default ConnectSection;