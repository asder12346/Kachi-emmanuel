import React from 'react';

interface AboutSectionProps {
  isSimple?: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isSimple = false }) => {
  if (isSimple) {
    return (
      <section id="about" className="py-24 bg-white dark:bg-[#1a1a1a] transition-colors duration-300 border-t border-slate-100 dark:border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-1 bg-[#FFDE59] mx-auto mb-8 rounded-full"></div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1a1a1a] dark:text-white mb-8 tracking-tight">About Kachi Emmanuel Ministries</h2>
          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-center">
            <p>
              Kachi Emmanuel Ministries is a global movement dedicated to spreading the Gospel of Jesus Christ through the lens of creativity and modern media. We believe that the timeless message of the Bible can be presented in innovative ways that resonate with the hearts of the current generation.
            </p>
            <p>
              From digital discipleship to campus invasions and community outreach, our heart is to see souls saved, believers empowered, and nations transformed by the love of God.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div id="about" className="bg-white dark:bg-[#1a1a1a] min-h-screen">
      <section className="pt-24 pb-16 bg-[#FFDE59]/10 border-b border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-[#eab308] dark:text-[#FFDE59] mb-4">The Visionary</h2>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-[#1a1a1a] dark:text-white mb-8 uppercase tracking-tighter">Kachi Emmanuel</h1>
          <p className="max-w-2xl mx-auto text-slate-500 dark:text-slate-400 text-lg italic">
            "Ministering through Creativity for the Kingdom of God"
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            <h3 className="text-3xl font-display font-bold text-[#1a1a1a] dark:text-white">The Heart Behind the Ministry</h3>
            <p>
              Kachi Emmanuel is a visionary leader committed to teaching God's Word with clarity, passion, and relevance. Saved at a young age, his life became a testament to the transformative power of the Gospel.
            </p>
            <p>
              With a background in Biotechnology, Kachi fuses intellectual excellence with spiritual fervency. He is affectionately known as "your friend in the school of spiritual growth" by thousands of believers worldwide.
            </p>
            <p>
              His ministry is characterized by a unique ability to bridge secular media techniques with deep spiritual truths, making the Gospel accessible to the digital-native generation.
            </p>
          </div>
          <div className="relative">
             <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white dark:border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Kachi Emmanuel Teaching" 
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                />
             </div>
             <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#FFDE59]/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-[#1a1a1a]/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-display font-bold text-[#1a1a1a] dark:text-white mb-8">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Creativity', desc: 'Presenting eternal truths through fresh, innovative expressions.' },
              { title: 'Excellence', desc: 'Doing all things with the highest standard to reflect God\'s glory.' },
              { title: 'Community', desc: 'Building authentic relationships that foster spiritual growth.' }
            ].map((v, i) => (
              <div key={i} className="p-8 bg-white dark:bg-[#1a1a1a] rounded-2xl shadow-sm border border-slate-100 dark:border-white/5">
                <h4 className="font-bold text-[#1a1a1a] dark:text-[#FFDE59] mb-4 uppercase tracking-widest text-sm">{v.title}</h4>
                <p className="text-sm text-slate-500">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;