import React from 'react';
import { Target, Compass, Shield, Flame, Heart, Users, Play, Globe, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { Page } from '../App';

interface AboutSectionProps {
  isSimple?: boolean;
  onNavigate?: (page: Page, sectionId?: string) => void;
}

const AboutSection: React.FC<AboutSectionProps> = ({ isSimple = false, onNavigate }) => {
  const coreBeliefs = [
    { title: 'Biblical Authority', desc: 'We believe the Bible is the inspired, infallible Word of God and the final authority for faith and practice.', icon: Shield },
    { title: 'Salvation Through Christ', desc: 'We believe in salvation by grace through faith in Jesus Christ alone, who died for our sins and rose again.', icon: Heart },
    { title: 'Holy Spirit Empowerment', desc: 'We believe in the present ministry of the Holy Spirit, who empowers believers for life and service.', icon: Flame },
    { title: 'The Church\'s Mission', desc: 'We believe the Church is God\'s primary instrument for fulfilling the Great Commission in this age.', icon: Globe },
    { title: 'Prayer & Worship', desc: 'We believe in the power of prayer and worship as essential components of the Christian life.', icon: Sparkles },
    { title: 'Compassionate Service', desc: 'We believe in demonstrating God\'s love through practical service and meeting human need.', icon: HandHeart },
  ];

  const stats = [
    { label: 'Lives Impacted', value: '1M+', icon: Users },
    { label: 'Countries Reached', value: '15+', icon: Globe },
    { label: 'Media Productions', value: '500+', icon: Play },
    { label: 'Community Projects', value: '50+', icon: Heart },
  ];

  if (isSimple) {
    return (
      <section id="about" className="py-24 bg-white dark:bg-[#050505] border-t border-[#fae78e]/10 transition-colors">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-16 h-1 bg-[#fae78e] mx-auto mb-8 rounded-full shadow-[0_0_10px_#fae78e]"></div>
          
          <h4 className="text-[#fae78e] font-bold text-sm uppercase tracking-[0.3em] mb-4">About Kachi Emmanuel Ministries</h4>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8 tracking-tight">
            Transforming Lives Through Faith
          </h2>
          
          <div className="space-y-6 text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-light mb-12">
            <p>
              Kachi Emmanuel Ministries is dedicated to spreading the Gospel through creative expressions and innovative approaches. Founded on the principles of faith, hope, and love, our mission is to reach souls across generations with the transformative message of Jesus Christ.
            </p>
            <p>
              Through multimedia productions, inspirational teachings, and community outreach, we strive to make a lasting impact in our world for the Kingdom of God.
            </p>
          </div>

          <button 
            onClick={() => onNavigate?.('about')}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#280c2d] dark:bg-[#fae78e] text-[#fae78e] dark:text-[#280c2d] font-bold rounded-xl shadow-lg hover:scale-105 transition-all group"
          >
            Learn More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>
    );
  }

  return (
    <div id="about" className="bg-white dark:bg-black min-h-screen transition-colors">
      {/* Hero Section */}
      <section className="pt-32 pb-24 relative overflow-hidden flex items-center min-h-[50vh]">
        <div className="absolute inset-0 z-0">
             <img 
                src="https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
                alt="About Hero" 
                className="w-full h-full object-cover opacity-30 dark:opacity-20"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-[#280c2d]/90 to-white dark:to-black"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-[#fae78e] mb-4">The Visionary</h2>
          <h1 className="text-5xl md:text-8xl font-display font-extrabold text-white mb-8 uppercase tracking-tighter drop-shadow-2xl">Kachi Emmanuel</h1>
          <p className="max-w-2xl mx-auto text-white text-lg md:text-xl italic border-l-4 border-[#fae78e] pl-6 py-2 bg-white/5 backdrop-blur-sm rounded-r-xl">
            "Ministering through Creativity for the Kingdom of God"
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-24 bg-white dark:bg-black">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 text-lg text-slate-700 dark:text-slate-300 leading-relaxed font-light">
            <h3 className="text-3xl font-display font-bold text-slate-900 dark:text-white border-b border-[#fae78e]/30 pb-4 inline-block">The Heart Behind the Ministry</h3>
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
          <div className="flex justify-center">
             <div className="w-full max-w-sm rounded-[3rem] overflow-hidden shadow-2xl border-4 border-[#fae78e]/30 bg-[#280c2d] relative group">
                <img 
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Kachi Emmanuel" 
                  className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#280c2d]/60 to-transparent"></div>
             </div>
          </div>
        </div>
      </section>

      {/* Core Beliefs */}
      <section className="py-24 bg-slate-50 dark:bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">Core Beliefs & Values</h3>
            <div className="w-20 h-1 bg-[#fae78e] mx-auto rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreBeliefs.map((belief, i) => (
              <div key={i} className="p-8 bg-white dark:bg-[#280c2d] rounded-[2.5rem] shadow-xl border border-slate-200 dark:border-[#fae78e]/10 hover:border-[#fae78e] transition-all group">
                <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-black flex items-center justify-center mb-6 group-hover:bg-[#fae78e] transition-colors">
                  <belief.icon className="w-7 h-7 text-[#280c2d] dark:text-[#fae78e] group-hover:text-[#280c2d]" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{belief.title}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">{belief.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-[#280c2d] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(250,231,142,0.1),transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h3 className="text-white font-display text-4xl font-bold mb-16">Achievements & Milestones</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#fae78e]/10 border border-[#fae78e]/30 flex items-center justify-center mb-4 shadow-[0_0_15px_rgba(250,231,142,0.2)]">
                  <s.icon className="w-8 h-8 text-[#fae78e]" />
                </div>
                <div className="text-4xl md:text-5xl font-extrabold text-white mb-2">{s.value}</div>
                <div className="text-xs uppercase tracking-[0.2em] font-bold text-[#fae78e]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Simple helper icon
const HandHeart = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 14h2a2 2 0 1 0 0-4h-3.5L12 8c.6-1 1-2.1 1-3.2A2.8 2.8 0 0 0 10.2 2c-.6 0-1.2.3-1.6.8L5 8H2v10a2 2 0 0 0 2 2h12.5a2.5 2.5 0 0 0 2.4-3.2L18 14H11Z"/><path d="M11 14v4a2 2 0 0 0 2 2h0a2 2 0 0 0 2 2v-4"/><path d="M7 15h0"/></svg>
);

export default AboutSection;