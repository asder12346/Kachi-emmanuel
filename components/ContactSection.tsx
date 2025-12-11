import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube, Sparkles, Music } from 'lucide-react';

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
    console.log('Contact form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-[#050505] transition-colors duration-300 animate-in fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-top-8 duration-700">
          <h2 className="text-sm md:text-base uppercase tracking-widest font-bold text-[#fae78e] mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5" />
            Get In Touch
          </h2>
          <h3 className="font-display text-3xl sm:text-4xl font-bold leading-tight text-white">
            We'd Love to Hear From You
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Contact Form */}
          <div className="bg-[#280c2d] rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-[#fae78e]/10 animate-in fade-in slide-in-from-left-8 duration-700 h-full">
            <h4 className="font-display text-2xl font-bold mb-8 text-white">Send Us a Message</h4>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-[#fae78e] mb-2 uppercase tracking-widest">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-xl border border-[#fae78e]/20 bg-black/40 text-white focus:outline-none focus:ring-2 focus:ring-[#fae78e] focus:border-transparent transition-colors shadow-inner placeholder-slate-500 focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#280c2d]"
                  aria-label="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-bold text-[#fae78e] mb-2 uppercase tracking-widest">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-xl border border-[#fae78e]/20 bg-black/40 text-white focus:outline-none focus:ring-2 focus:ring-[#fae78e] focus:border-transparent transition-colors shadow-inner placeholder-slate-500 focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#280c2d]"
                  aria-label="Email Address"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-bold text-[#fae78e] mb-2 uppercase tracking-widest">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-4 rounded-xl border border-[#fae78e]/20 bg-black/40 text-white focus:outline-none focus:ring-2 focus:ring-[#fae78e] focus:border-transparent transition-colors shadow-inner placeholder-slate-500 resize-none focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#280c2d]"
                  aria-label="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#fae78e] hover:bg-white text-[#280c2d] font-bold rounded-xl shadow-[0_0_15px_rgba(250,231,142,0.3)] transform hover:-translate-y-1 transition-all active:scale-95 w-full focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#280c2d]"
                aria-label="Send Message"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-black text-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl border border-[#fae78e]/20 animate-in fade-in slide-in-from-right-8 duration-700 delay-100 h-full flex flex-col justify-between relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#280c2d] rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none opacity-60"></div>

            <div className="relative z-10">
              <h4 className="font-display text-2xl font-bold mb-10 text-white">Contact Information</h4>
              <div className="space-y-10">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#280c2d] flex items-center justify-center shrink-0 border border-[#fae78e]/20 group-hover:bg-[#fae78e] transition-colors duration-300">
                    <Mail className="w-6 h-6 text-[#fae78e] group-hover:text-[#280c2d] transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#fae78e] uppercase tracking-[0.2em] mb-2">Email</p>
                    <a href="mailto:info@kachiministry.org" className="text-xl font-medium text-white hover:text-[#fae78e] transition-colors break-all leading-tight focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-md">
                      info@kachiministry.org
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#280c2d] flex items-center justify-center shrink-0 border border-[#fae78e]/20 group-hover:bg-[#fae78e] transition-colors duration-300">
                    <Phone className="w-6 h-6 text-[#fae78e] group-hover:text-[#280c2d] transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#fae78e] uppercase tracking-[0.2em] mb-2">Phone</p>
                    <a href="tel:+2348137665723" className="text-xl font-medium text-white hover:text-[#fae78e] transition-colors leading-tight focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-md">
                      +234 813 766 5723
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-[#280c2d] flex items-center justify-center shrink-0 border border-[#fae78e]/20 group-hover:bg-[#fae78e] transition-colors duration-300">
                    <MapPin className="w-6 h-6 text-[#fae78e] group-hover:text-[#280c2d] transition-colors" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#fae78e] uppercase tracking-[0.2em] mb-2">Address</p>
                    <p className="text-xl font-medium text-white leading-tight">Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 relative z-10">
              <h4 className="font-display text-xl font-bold mb-6 text-white flex items-center gap-2">
                Follow Us 
                <span className="h-px w-12 bg-[#fae78e]/40"></span>
              </h4>
              <div className="flex gap-4">
                {[
                  { Icon: Facebook, label: 'Facebook', href: 'https://www.facebook.com/share/1FgQffzLr6/?mibextid=wwXIfr' },
                  { Icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/thebelieversperspective_?igsh=MTV0czVrMmRtZmpnNQ%3D%3D&utm_source=qr' },
                  { Icon: Twitter, label: 'Twitter', href: '#' },
                  { Icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@kachiemmanuelministries?si=6v0vK6vX9GMjh8D7' },
                  { Icon: Music, label: 'TikTok', href: 'https://www.tiktok.com/@thebelieversperspective?_t=ZS-90d0KigCOSW&_r=1' }
                ].map(({ Icon, label, href }) => (
                  <a 
                    key={label}
                    href={href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#280c2d] hover:bg-[#fae78e] text-white hover:text-[#280c2d] rounded-xl flex items-center justify-center transition-all group border border-[#fae78e]/20 hover:border-[#fae78e] hover:scale-110 focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-black" 
                    aria-label={label}
                  >
                    <Icon className="w-5 h-5" />
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