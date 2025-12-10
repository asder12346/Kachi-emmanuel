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
    <section id="contact" className="py-20 md:py-32 bg-indigo-50 dark:bg-slate-900 transition-colors duration-300 animate-in fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-8 duration-700">
          <h2 className="text-sm md:text-base uppercase tracking-widest font-bold text-amber-700 dark:text-amber-400 mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5" />
            Get In Touch
          </h2>
          <h3 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-slate-900 dark:text-white">
            We'd Love to Hear From You
          </h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-10 shadow-xl border border-slate-200 dark:border-white/10 animate-in fade-in slide-in-from-left-8 duration-700">
            <h4 className="font-display text-2xl font-bold mb-8 text-slate-900 dark:text-white">Send Us a Message</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors shadow-sm"
                  aria-label="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors shadow-sm"
                  aria-label="Email Address"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors shadow-sm"
                  aria-label="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full shadow-lg shadow-indigo-500/30 transform hover:scale-105 transition-all group w-full"
                aria-label="Send Message"
              >
                <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-8 md:p-10 shadow-xl border border-slate-200 dark:border-white/10 animate-in fade-in slide-in-from-right-8 duration-700 delay-100">
            <h4 className="font-display text-2xl font-bold mb-8 text-slate-900 dark:text-white">Contact Information</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Email</p>
                  <a href="mailto:info@kachiministry.org" className="text-lg text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    info@kachiministry.org
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Phone</p>
                  <a href="tel:+2348137665723" className="text-lg text-slate-900 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                    +234 813 766 5723
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-indigo-600 dark:text-indigo-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Address</p>
                  <p className="text-lg text-slate-900 dark:text-white">Nigeria (Placeholder, if a physical address is needed)</p>
                </div>
              </div>
            </div>

            <h4 className="font-display text-2xl font-bold mt-12 mb-6 text-slate-900 dark:text-white">Follow Us</h4>
            <div className="flex gap-6 justify-center lg:justify-start">
              <a href="#" className="p-3 bg-indigo-100 dark:bg-slate-700 text-indigo-700 dark:text-indigo-400 rounded-full hover:bg-indigo-200 dark:hover:bg-slate-600 transition-colors shadow-md group" aria-label="Facebook">
                <Facebook className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-3 bg-indigo-100 dark:bg-slate-700 text-indigo-700 dark:text-indigo-400 rounded-full hover:bg-indigo-200 dark:hover:bg-slate-600 transition-colors shadow-md group" aria-label="Instagram">
                <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-3 bg-indigo-100 dark:bg-slate-700 text-indigo-700 dark:text-indigo-400 rounded-full hover:bg-indigo-200 dark:hover:bg-slate-600 transition-colors shadow-md group" aria-label="Twitter">
                <Twitter className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="p-3 bg-indigo-100 dark:bg-slate-700 text-indigo-700 dark:text-indigo-400 rounded-full hover:bg-indigo-200 dark:hover:bg-slate-600 transition-colors shadow-md group" aria-label="YouTube">
                <Youtube className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;