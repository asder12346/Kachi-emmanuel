import React from 'react';

interface AboutSectionProps {
  isSimple?: boolean;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isSimple = false }) => {
  if (isSimple) {
    return (
      <section id="about" className="py-24 bg-[#050505] border-t border-[#fae78e]/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="w-16 h-1 bg-[#fae78e] mx-auto mb-8 rounded-full shadow-[0_0_10px_#fae78e]"></div>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">About Kachi Emmanuel Ministries</h2>
          <div className="space-y-6 text-lg text-slate-300 leading-relaxed text-center font-light">
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
    <div id="about" className="bg-black min-h-screen">
      <section className="pt-24 pb-16 bg-[#280c2d] relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-[#fae78e] mb-4">The Visionary</h2>
          <h1 className="text-5xl md:text-7xl font-display font-extrabold text-white mb-8 uppercase tracking-tighter">Kachi Emmanuel</h1>
          <p className="max-w-2xl mx-auto text-slate-300 text-lg italic border-l-2 border-[#fae78e] pl-6 py-2 bg-black/20">
            "Ministering through Creativity for the Kingdom of God"
          </p>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8 text-lg text-slate-300 leading-relaxed font-light">
            <h3 className="text-3xl font-display font-bold text-white border-b border-[#fae78e]/30 pb-4 inline-block">The Heart Behind the Ministry</h3>
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
             <div className="rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-[#fae78e]/20 bg-[#280c2d]">
                <img 
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Kachi Emmanuel Teaching" 
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 opacity-90 hover:opacity-100"
                />
             </div>
             <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-[#fae78e]/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-display font-bold text-white mb-12">Our Core Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Creativity', desc: 'Presenting eternal truths through fresh, innovative expressions.' },
              { title: 'Excellence', desc: 'Doing all things with the highest standard to reflect God\'s glory.' },
              { title: 'Community', desc: 'Building authentic relationships that foster spiritual growth.' }
            ].map((v, i) => (
              <div key={i} className="p-10 bg-[#280c2d] rounded-[2rem] shadow-lg border border-[#fae78e]/10 hover:border-[#fae78e]/40 hover:-translate-y-2 transition-all duration-300 group">
                <h4 className="font-bold text-[#fae78e] mb-4 uppercase tracking-widest text-sm group-hover:scale-110 transition-transform inline-block">{v.title}</h4>
                <p className="text-sm text-slate-300 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSection;