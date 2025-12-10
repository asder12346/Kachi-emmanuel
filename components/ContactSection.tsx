import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, Sparkles } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend service
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 animate-in fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-8 duration-700">
          <h2 className="text-sm md:text-base uppercase tracking-widest font-bold text-[#eab308] dark:text-[#FFDE59] mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5" />
            Get In Touch
          </h2>
          <h3 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-slate-900 dark:text-white">
            We'd Love to Hear From You
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Contact Form */}
          <div className="bg-white dark:bg-[#1a1a1a] rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-200 dark:border-white/10 animate-in fade-in slide-in-from-left-8 duration-700 h-full">
            <h4 className="font-display text-2xl font-bold mb-8 text-[#1a1a1a] dark:text-white">Send Us a Message</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-[#1a1a1a] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FFDE59] focus:border-transparent transition-colors shadow-sm"
                  aria-label="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-[#1a1a1a] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FFDE59] focus:border-transparent transition-colors shadow-sm"
                  aria-label="Email Address"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/5 text-[#1a1a1a] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#FFDE59] focus:border-transparent transition-colors shadow-sm resize-none"
                  aria-label="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#FFDE59] hover:bg-[#eab308] text-[#1a1a1a] font-bold rounded-xl shadow-lg shadow-[#FFDE59]/20 transform hover:-translate-y-1 transition-all active:scale-95 w-full"
                aria-label="Send Message"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-[#1a1a1a] text-white rounded-[2.5rem] p-8 md:p-12 shadow-xl border border-slate-200 dark:border-white/10 animate-in fade-in slide-in-from-right-8 duration-700 delay-100 h-full flex flex-col justify-between relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FFDE59]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div>
              <h4 className="font-display text-2xl font-bold mb-10 text-white">Contact Information</h4>
              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFDE59]/20 flex items-center justify-center shrink-0 border border-[#FFDE59]/10 group-hover:bg-[#FFDE59] transition-colors duration-300">
                    <Mail className="w-6 h-6 text-[#FFDE59] group-hover:text-[#1a1a1a] transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#FFDE59] uppercase tracking-[0.2em] mb-2">Email</p>
                    <a href="mailto:info@kachiministry.org" className="text-xl font-medium text-white hover:text-[#FFDE59] transition-colors break-all leading-tight">
                      info@kachiministry.org
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFDE59]/20 flex items-center justify-center shrink-0 border border-[#FFDE59]/10 group-hover:bg-[#FFDE59] transition-colors duration-300">
                    <Phone className="w-6 h-6 text-[#FFDE59] group-hover:text-[#1a1a1a] transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#FFDE59] uppercase tracking-[0.2em] mb-2">Phone</p>
                    <a href="tel:+2348137665723" className="text-xl font-medium text-white hover:text-[#FFDE59] transition-colors leading-tight">
                      +234 813 766 5723
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#FFDE59]/20 flex items-center justify-center shrink-0 border border-[#FFDE59]/10 group-hover:bg-[#FFDE59] transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-[#FFDE59] group-hover:text-[#1a1a1a] transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#FFDE59] uppercase tracking-[0.2em] mb-2">Address</p>
                    <p className="text-xl font-medium text-white leading-tight">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <h4 className="font-display text-xl font-bold mb-6 text-white flex items-center gap-2">
                Follow Us 
                <span className="h-px w-12 bg-white/20"></span>
              </h4>
              <div className="flex gap-4">
                {[
                  { Icon: Facebook, label: 'Facebook' },
                  { Icon: Instagram, label: 'Instagram' },
                  { Icon: Twitter, label: 'Twitter' },
                  { Icon: Youtube, label: 'YouTube' }
                ].map(({ Icon, label }) => (
                  <a 
                    key={label}
                    href="#" 
                    className="w-12 h-12 bg-white/5 hover:bg-[#FFDE59] text-white hover:text-[#1a1a1a] rounded-xl flex items-center justify-center transition-all group border border-white/10 hover:border-[#FFDE59]" 
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;