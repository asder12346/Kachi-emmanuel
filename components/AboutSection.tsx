import React from 'react';
import { Sparkles, Target, Heart, Book, Globe, ShieldCheck, Users, Flame, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900 transition-colors duration-300 animate-in fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20 animate-in fade-in slide-in-from-top-8 duration-700">
          <h2 className="text-sm md:text-base uppercase tracking-widest font-bold text-amber-700 dark:text-amber-400 mb-3 flex items-center justify-center gap-2">
            <Sparkles className="w-5 h-5" />
            About Kachi Emmanuel Ministries
          </h2>
          <h3 className="font-display text-3xl sm:text-5xl font-bold leading-tight mb-6 text-slate-900 dark:text-white max-w-4xl mx-auto">
            Discover the journey, vision, and beliefs that drive our mission.
          </h3>
        </div>

        {/* Biography Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
           {/* Image/Visual */}
           <div className="relative animate-in fade-in slide-in-from-left-8 duration-700">
             <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                <img 
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Kachi Emmanuel" 
                    className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent p-8">
                    <p className="text-white font-display font-bold text-2xl">Kachi Emmanuel</p>
                    <p className="text-indigo-300 font-medium">Founder & Visionary Leader</p>
                </div>
             </div>
             {/* Decorative Element */}
             <div className="absolute -top-6 -right-6 w-full h-full bg-indigo-100 dark:bg-indigo-900/30 rounded-3xl -z-10"></div>
             <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl"></div>
           </div>

           {/* Bio Text */}
           <div className="space-y-6 text-slate-600 dark:text-slate-300 animate-in fade-in slide-in-from-right-8 duration-700">
              <h4 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-4">Meet The Founder</h4>
              <p className="leading-relaxed">
                Kachi Emmanuel is a passionate lover of God and the visionary behind Kachi Emmanuel Ministries. From a young age, he was drawn to the gospel—not out of tradition, but from a deep, personal conviction that would shape the rest of his life. Inspired by the ministry of renowned evangelists, Kachi embraced teaching with clarity, passion, and relevance, cultivating a unique voice that speaks powerfully to the next generation.
              </p>
              <p className="leading-relaxed">
                Saved at 15, Kachi quickly embraced his calling. By 17, he was already teaching and leading his first home cell. While he pursued academic excellence and graduated as a first-class biotechnology student, his heart consistently beat for media, public speaking, and podcasting. This calling led him to evangelize through social media right from his undergraduate years.
              </p>
              <p className="leading-relaxed font-semibold text-slate-900 dark:text-white italic border-l-4 border-amber-500 pl-4">
                Today, Kachi stands as a media and field evangelist, committed teacher of God’s Word, and mentor to a thriving community. Affectionately, he is known as “your friend in the school of spiritual growth.”
              </p>
           </div>
        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
            {/* Vision */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border border-slate-200 dark:border-white/5 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-bl-full transition-all group-hover:scale-110"></div>
                <div className="w-14 h-14 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 rounded-2xl flex items-center justify-center mb-6">
                    <Target className="w-8 h-8" />
                </div>
                <h4 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Vision</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                    To raise a generation rooted in Christ, empowered by the Holy Spirit, living out the Gospel with creativity, compassion, and excellence.
                </p>
            </div>

            {/* Mission */}
            <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border border-slate-200 dark:border-white/5 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-bl-full transition-all group-hover:scale-110"></div>
                <div className="w-14 h-14 bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400 rounded-2xl flex items-center justify-center mb-6">
                    <Globe className="w-8 h-8" />
                </div>
                <h4 className="font-display text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Mission</h4>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                    To spread the Gospel through innovative media, practical teaching, and compassionate outreach, equipping believers to fulfill the Great Commission.
                </p>
            </div>
        </div>

        {/* Core Beliefs Grid */}
        <div className="mb-32">
            <h4 className="font-display text-3xl font-bold text-center text-slate-900 dark:text-white mb-12">Core Beliefs & Values</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                    { title: "Biblical Authority", text: "We believe the Bible is the inspired, infallible Word of God and the final authority for faith and practice.", icon: Book },
                    { title: "Salvation Through Christ", text: "We believe in salvation by grace through faith in Jesus Christ alone, who died for our sins and rose again.", icon: ShieldCheck },
                    { title: "Holy Spirit Empowerment", text: "We believe in the present ministry of the Holy Spirit, who empowers believers for life and service.", icon: Flame },
                    { title: "The Church's Mission", text: "We believe the Church is God's primary instrument for fulfilling the Great Commission in this age.", icon: Globe },
                    { title: "Prayer & Worship", text: "We believe in the power of prayer and worship as essential components of the Christian life.", icon: Heart },
                    { title: "Compassionate Service", text: "We believe in demonstrating God's love through practical service and meeting human need.", icon: Users },
                ].map((belief, i) => (
                    <div key={i} className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-indigo-500/30 transition-colors">
                        <div className="flex items-center gap-3 mb-4">
                            <belief.icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                            <h5 className="font-bold text-slate-900 dark:text-white">{belief.title}</h5>
                        </div>
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                            {belief.text}
                        </p>
                    </div>
                ))}
            </div>
        </div>

        {/* Milestones / Achievements */}
        <div className="bg-indigo-600 dark:bg-indigo-900 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-full opacity-10" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                backgroundSize: '30px 30px'
             }}></div>
             
             <div className="relative z-10">
                 <h4 className="font-display text-2xl md:text-3xl font-bold mb-12 flex items-center justify-center gap-2">
                    <Award className="w-8 h-8 text-amber-400" />
                    Achievements & Milestones
                 </h4>
                 
                 <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { number: "1M+", label: "Lives Impacted" },
                        { number: "15+", label: "Countries Reached" },
                        { number: "500+", label: "Media Productions" },
                        { number: "50+", label: "Community Projects" },
                    ].map((stat, i) => (
                        <div key={i} className="p-4">
                            <div className="text-4xl md:text-5xl font-bold text-amber-400 mb-2">{stat.number}</div>
                            <div className="text-indigo-100 font-medium tracking-wide text-sm uppercase">{stat.label}</div>
                        </div>
                    ))}
                 </div>
             </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;