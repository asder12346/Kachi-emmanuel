import React from 'react';
import { 
  BookOpen, 
  Users, 
  HandHeart, 
  ArrowRight, 
  Mic2, 
  Sparkles, 
  Globe, 
  ShieldCheck, 
  Calendar, 
  Youtube, 
  Headphones, 
  Library,
  Flame,
  Star,
  PlayCircle
} from 'lucide-react';

const MinistriesPage: React.FC = () => {
  const stats = [
    { label: 'Ministry Arms', value: '7+', icon: ShieldCheck },
    { label: 'Annual Reach', value: '50+', icon: Calendar },
    { label: 'Countries Impacted', value: '15+', icon: Globe },
    { label: 'Volunteers', value: '200+', icon: Users },
  ];

  const featured = [
    {
      tag: 'Faith in Action',
      title: 'Believers Perspective',
      expression: 'Digital content platform',
      focus: 'Teaching the Word and helping young believers grow spiritually.',
      purpose: 'To help young believers overcome struggles, understand God’s Word, and walk in spiritual maturity through relatable, Scripture-based content.',
      icon: BookOpen,
      color: 'indigo'
    },
    {
      tag: 'Kingdom Living',
      title: 'The Gospel Truth with Kachi',
      expression: 'Video Podcast',
      focus: 'Deep, engaging conversations about faith, purpose, and culture with top leaders in ministry and industry.',
      purpose: 'Interview-style video podcast hosted by Kachi Emmanuel, featuring influential voices who address complex and contemporary topics of faith.',
      icon: Mic2,
      color: 'amber'
    },
    {
      tag: 'Purpose Driven Life',
      title: 'Spirit and Stature',
      expression: 'Faith & Fashion',
      focus: 'Fusing faith and fashion inspiring believers to reflect excellence in both spiritual and physical appearance',
      purpose: 'To remind believers that while we grow spiritually, our outward excellence should mirror the inner beauty of the Spirit within.',
      icon: Sparkles,
      color: 'purple'
    },
    {
      tag: 'Evangelism',
      title: 'Outreaches & Evangelism',
      expression: 'Schools & Communities',
      focus: 'To reach young people where they are on campuses, in schools, and in communities.',
      purpose: 'Taking the message of Christ beyond digital spaces into schools, campuses, and communities.',
      icon: Flame,
      color: 'emerald'
    }
  ];

  const arms = [
    {
      title: 'Youth & Campus Ministry',
      description: 'Engaging the next generation through campus fellowships, mentorship programs, and youth empowerment initiatives.',
      btn: 'Get Involved',
      icon: Users,
    },
    {
      title: 'Community Outreach and Evangelism',
      description: 'Focus: Taking the message of Christ beyond digital spaces into schools, campuses, and communities. Includes school outreach programs, community service initiatives, and evangelism training workshops.',
      btn: 'Serve With Us',
      icon: HandHeart,
    },
    {
      title: 'Prayer & Intercession',
      description: 'Building a foundation of prayer that undergirds all ministry activities and impacts nations.',
      btn: 'Join Prayer',
      icon: Flame,
    }
  ];

  const devotionals = [
    { date: 'Nov 15, 2023', read: '5 min read', title: 'Finding Peace in Turbulent Times', desc: 'Discover how to maintain inner peace and spiritual stability when everything around you seems chaotic.' },
    { date: 'Nov 8, 2023', read: '7 min read', title: 'The Transformative Power of Prayer', desc: 'Explore how consistent prayer can transform your circumstances and align your heart with God\'s will.' },
    { date: 'Nov 1, 2023', read: '6 min read', title: 'Walking in Your God-Given Purpose', desc: 'Learn practical steps to discover and walk confidently in the purpose God has designed for your life.' },
  ];

  return (
    <div className="animate-in fade-in duration-700 bg-white dark:bg-slate-950 transition-colors">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-sm md:text-base uppercase tracking-[0.3em] font-bold text-indigo-600 dark:text-indigo-400 mb-4 animate-in slide-in-from-top-4">
                Kachi Emmanuel Ministries
            </h2>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 animate-in slide-in-from-bottom-4 duration-700">
                Our Ministry <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-amber-500">Works</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-12 animate-in fade-in duration-1000 delay-200">
                Discover the various ways we're spreading the Gospel and transforming lives through creative ministry expressions. 
                <span className="block mt-4 font-semibold text-slate-900 dark:text-slate-100">
                    Transforming Lives Through Multiple Ministries
                </span>
                Kachi Emmanuel Ministries operates through various specialized arms, each designed to reach different demographics and address unique needs within our communities.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-white/5 animate-in fade-in zoom-in-95" style={{ animationDelay: `${i * 100 + 400}ms` }}>
                        <stat.icon className="w-8 h-8 text-indigo-500 mx-auto mb-3" />
                        <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                        <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
        
        {/* Background Decorative */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </section>

      {/* Featured Ministries */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h3 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-4">Featured Ministries</h3>
                <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featured.map((item, i) => (
                    <div 
                        key={i} 
                        className="group bg-slate-50 dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200 dark:border-white/5 hover:border-indigo-500/30 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8"
                        style={{ animationDelay: `${i * 150}ms` }}
                    >
                        <div className="flex items-start justify-between mb-6">
                            <div className={`p-4 rounded-2xl bg-${item.color}-100 dark:bg-${item.color}-900/30 text-${item.color}-600 dark:text-${item.color}-400 shadow-inner group-hover:scale-110 transition-transform`}>
                                <item.icon className="w-8 h-8" />
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{item.tag}</span>
                        </div>
                        <h4 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                        <div className="text-indigo-500 dark:text-indigo-400 font-semibold text-sm mb-4 italic">Expression: {item.expression}</div>
                        
                        <div className="space-y-4 mb-8">
                            <div className="flex gap-3">
                                <div className="mt-1"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div></div>
                                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                    <strong className="text-slate-900 dark:text-white">Core Focus:</strong> {item.focus}
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <div className="mt-1"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div></div>
                                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                    <strong className="text-slate-900 dark:text-white">Purpose:</strong> {item.purpose}
                                </p>
                            </div>
                        </div>

                        <button className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold hover:gap-4 transition-all">
                            Learn More <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Our Ministry Arms */}
      <section className="py-20 bg-indigo-600 dark:bg-indigo-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
                <h3 className="font-display text-4xl font-bold mb-4">Our Ministry Arms</h3>
                <p className="text-indigo-100 max-w-2xl mx-auto text-lg">Specialized expressions of faith and service.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {arms.map((arm, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition-all duration-300 flex flex-col items-center text-center group animate-in zoom-in-95" style={{ animationDelay: `${i * 200}ms` }}>
                        <div className="w-16 h-16 rounded-full bg-indigo-500 flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform">
                            <arm.icon className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-xl font-bold mb-4 group-hover:text-amber-400 transition-colors">{arm.title}</h4>
                        <p className="text-indigo-50 text-sm leading-relaxed mb-8 flex-grow">{arm.description}</p>
                        <button className="px-8 py-2.5 bg-white text-indigo-600 font-bold rounded-full hover:bg-amber-400 hover:text-white transition-all shadow-md active:scale-95">
                            {arm.btn}
                        </button>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Latest Devotionals */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
                <div>
                    <h3 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-2">Latest Devotionals</h3>
                    <p className="text-slate-500 dark:text-slate-400">Fresh inspiration for your spiritual walk.</p>
                </div>
                <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full shadow-lg transition-all active:scale-95">
                    View All Devotionals
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {devotionals.map((dev, i) => (
                    <div key={i} className="group bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg border border-slate-200 dark:border-white/5 transition-all duration-300 hover:shadow-2xl animate-in fade-in slide-in-from-right-8" style={{ animationDelay: `${i * 100}ms` }}>
                        <div className="h-48 bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-700"></div>
                            <div className="absolute top-4 left-4 flex gap-2">
                                <span className="bg-white/90 dark:bg-slate-900/90 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider text-slate-800 dark:text-slate-100">{dev.date}</span>
                                <span className="bg-amber-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">{dev.read}</span>
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                                <BookOpen className="w-12 h-12 text-white" />
                            </div>
                        </div>
                        <div className="p-8">
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                {dev.title}
                            </h4>
                            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
                                {dev.desc}
                            </p>
                            <button className="text-sm font-bold flex items-center gap-2 group/btn text-indigo-600 dark:text-indigo-400">
                                Read More <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Watch & Listen */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: 'YouTube Channel', icon: Youtube, desc: 'Watch our latest sermons, teaching series, and ministry highlights on our YouTube channel.', btn: 'Subscribe Now', color: 'red' },
                    { title: 'Podcast', icon: Headphones, desc: 'Listen to our weekly podcast featuring inspiring messages and interviews on your favorite platform.', btn: 'Listen Now', color: 'indigo' },
                    { title: 'Media Library', icon: Library, desc: 'Access our complete collection of sermons, teachings, and resources in our media library.', btn: 'Browse Library', color: 'amber' },
                ].map((media, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-white/5 flex flex-col items-center text-center group hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 shadow-md">
                        <div className={`p-5 rounded-full bg-${media.color}-100 dark:bg-${media.color}-900/30 text-${media.color}-600 dark:text-${media.color}-400 mb-6 group-hover:scale-110 transition-transform shadow-inner`}>
                            <media.icon className="w-8 h-8" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{media.title}</h4>
                        <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 flex-grow leading-relaxed">{media.desc}</p>
                        <button className="w-full py-3.5 bg-slate-900 dark:bg-slate-800 text-white font-bold rounded-xl hover:bg-indigo-600 transition-all shadow-lg active:scale-95">
                            {media.btn}
                        </button>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Support Section Branding */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-white/10 overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 text-center">
             <div className="inline-block p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-6 animate-pulse">
                <Star className="w-6 h-6 text-indigo-600 dark:text-indigo-400 fill-current" />
             </div>
             <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-4 italic">
               "Ministering through Creativity for the Kingdom of God"
             </h3>
             <p className="text-slate-500 dark:text-slate-400 uppercase tracking-[0.4em] text-xs font-bold mb-8">
               Kachi Emmanuel Ministries
             </p>
             <button className="px-10 py-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-2 mx-auto">
                <Flame className="w-5 h-5 text-amber-400" />
                Support Us
             </button>
          </div>
      </section>
    </div>
  );
};

export default MinistriesPage;