import React, { useState, useEffect } from 'react';
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
  CheckCircle2,
  Clock,
  ChevronRight,
  Map as MapIcon,
  Zap,
  Play,
  Facebook,
  Twitter,
  Share2,
  MessageCircle
} from 'lucide-react';

// Simplified World Map SVG Component
const WorldMapSVG = ({ children }: React.PropsWithChildren) => (
  <svg viewBox="0 0 1000 500" className="w-full h-auto text-[#280c2d] fill-current overflow-visible transition-colors duration-500">
    <path d="M120,100 C150,80 200,80 250,110 C300,140 280,220 220,250 C180,270 140,240 120,200 Z" opacity="0.1" /> 
    <path d="M280,280 C320,260 380,280 400,320 C420,380 380,480 320,490 C280,470 260,400 280,320" opacity="0.1" /> 
    <path d="M480,80 C520,60 580,70 600,110 C620,160 580,200 520,210 C480,200 460,150 480,100" opacity="0.1" /> 
    <path d="M440,220 C480,200 540,210 580,250 C620,320 580,440 520,450 C480,440 440,350 440,220" opacity="0.1" /> 
    <path d="M600,120 C700,80 850,100 900,180 C920,280 850,380 750,390 C650,380 600,280 600,120" opacity="0.1" /> 
    <path d="M820,400 C860,390 920,410 930,450 C940,490 880,500 840,490 C810,470 800,430 820,400" opacity="0.1" /> 
    {children}
  </svg>
);

const MinistriesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { label: 'Ministry Arms', value: '7+', icon: ShieldCheck },
    { label: 'Annual Reach', value: '50+', icon: Calendar },
    { label: 'Countries Impacted', value: '15+', icon: Globe },
    { label: 'Volunteers', value: '200+', icon: Users },
  ];

  const impactedCountries = [
    { id: 'nigeria', name: 'Nigeria', x: 485, y: 310, work: 'Headquarters, Regional Crusades, & Youth Hubs', flag: '🇳🇬' },
    { id: 'ghana', name: 'Ghana', x: 465, y: 315, work: 'University Fellowship Revivals & Media Missions', flag: '🇬🇭' },
    { id: 'kenya', name: 'Kenya', x: 535, y: 340, work: 'Community Medical Outreach & Pastoral Training', flag: '🇰🇪' },
    { id: 'uk', name: 'United Kingdom', x: 495, y: 145, work: 'Global Leadership Seminars & Virtual Cell Groups', flag: '🇬🇧' },
    { id: 'usa', name: 'United States', x: 215, y: 165, work: 'Media Broadcasting & Partnership Summits', flag: '🇺🇸' },
    { id: 'canada', name: 'Canada', x: 205, y: 115, work: 'Digital Mentorship & Youth Empowerment Forums', flag: '🇨🇦' },
  ];

  const ministryDetails = [
    {
      id: 'believers-perspective',
      title: 'Believers Perspective',
      subtitle: 'Teaching & Digital Discipleship',
      icon: BookOpen,
      description: 'A digital content platform dedicated to teaching the Word of God with simplicity and depth, specifically tailored for the growth of young believers.',
      outreach: ['Weekly Video Teaching Series', 'Spiritual Growth Mentorship Groups', 'Digital Discipleship Resource Hub'],
      schedule: [
        { day: 'Tuesdays', time: '7:00 PM', event: 'Live Word Study' },
        { day: 'Saturdays', time: '10:00 AM', event: 'Mentorship Group Huddles' }
      ],
      involvement: 'Join our content review team, help moderate our digital community groups, or contribute to our spiritual growth resources.',
      cta: 'Explore Teachings'
    },
    {
      id: 'gospel-truth',
      title: 'The Gospel Truth',
      subtitle: 'Media & Global Interviews',
      icon: Mic2,
      description: 'Engaging the culture through thought-provoking conversations. We host leaders in ministry and industry to address faith in the modern world.',
      outreach: ['High-Impact Video Podcast', 'Industry Leader Insight Sessions', 'Global Faith & Culture Documentary Series'],
      schedule: [
        { day: 'Fridays', time: '8:00 AM', event: 'Podcast Episode Release' },
        { day: 'Quarterly', time: 'Varies', event: 'Media Summit' }
      ],
      involvement: 'Volunteer for video production, guest research, technical support, or social media community management.',
      cta: 'Watch Episodes'
    },
    {
      id: 'spirit-stature',
      title: 'Spirit and Stature',
      icon: Sparkles,
      subtitle: 'Faith, Excellence & Fashion',
      description: 'Inspiring a generation to reflect the beauty of God internally and externally. We believe spiritual growth should mirror outward excellence.',
      outreach: ['Faith & Fashion Workshops', 'Spiritual & Physical Grooming Seminars', 'Annual Excellence Awards'],
      schedule: [
        { day: 'Mondays', time: '9:00 AM', event: 'Weekly Excellence Guide' },
        { day: 'Annually', time: 'October', event: 'Spirit & Stature Conference' }
      ],
      involvement: 'Join our planning committee, partner as a Christian designer, or serve as a mentor in our excellence programs.',
      cta: 'Discover Excellence'
    }
  ];

  const featured = [
    { tag: 'Faith in Action', title: 'Believers Perspective', focus: 'Helping believers grow spiritually.', icon: BookOpen },
    { tag: 'Kingdom Living', title: 'The Gospel Truth', focus: 'Deep conversations about faith & culture.', icon: Mic2 },
    { tag: 'Purpose Driven', title: 'Spirit and Stature', focus: 'Fusing faith and fashion for excellence.', icon: Sparkles },
    { tag: 'Evangelism', title: 'Campus Outreaches', focus: 'Reaching young people on campuses.', icon: Flame }
  ];

  const arms = [
    { title: 'Youth & Campus Ministry', description: 'Engaging the next generation through campus fellowships.', btn: 'Get Involved', icon: Users },
    { title: 'Community Outreach', description: 'Taking the message of Christ into schools and communities.', btn: 'Serve With Us', icon: HandHeart },
    { title: 'Prayer & Intercession', description: 'Building a foundation of prayer that impacts nations.', btn: 'Join Prayer', icon: Flame }
  ];

  const handleShare = (platform: string, title: string) => {
    const url = window.location.href;
    const text = `Check out ${title} at Kachi Emmanuel Ministries!`;
    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`;
        break;
    }
    if (shareUrl) window.open(shareUrl, '_blank');
  };

  if (!mounted) return null;

  return (
    <div className="bg-black text-white font-sans selection:bg-[#fae78e] selection:text-[#280c2d]">
      
      {/* Hero Section with Image Background */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
             <img 
                src="https://bezaleelforge.github.io/kachi/14.jpg" 
                alt="Ministry Background" 
                className="w-full h-full object-cover opacity-40"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-[#280c2d]/80 to-black"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-sm md:text-base uppercase tracking-[0.3em] font-bold text-[#fae78e] mb-4 animate-in slide-in-from-top-4 flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" /> Kachi Emmanuel Ministries
            </h2>
            <h1 className="font-display text-5xl sm:text-7xl font-extrabold text-white mb-6 animate-in slide-in-from-bottom-4 leading-tight">
                Our Ministry <span className="text-[#fae78e] drop-shadow-[0_0_15px_rgba(250,231,142,0.4)]">Works</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-slate-300 leading-relaxed mb-12 animate-in fade-in font-light">
                Discover the various ways we're spreading the Gospel and transforming lives through creative ministry expressions.
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-[#280c2d]/80 backdrop-blur-md p-6 rounded-2xl shadow-[0_0_20px_rgba(40,12,45,0.6)] border border-[#fae78e]/20 group hover:border-[#fae78e] transition-colors animate-in fade-in zoom-in-95" style={{ animationDelay: `${i * 100 + 400}ms` }}>
                        <stat.icon className="w-8 h-8 text-[#fae78e] mx-auto mb-3 drop-shadow-[0_0_8px_rgba(250,231,142,0.6)]" />
                        <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-xs uppercase tracking-wider text-slate-400 font-bold group-hover:text-[#fae78e] transition-colors">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Featured Video Section Below Details */}
      <section className="py-16 bg-[#0a0a0a] border-b border-[#fae78e]/10">
         <div className="max-w-5xl mx-auto px-4">
            <div className="flex flex-col items-center mb-8 text-center">
                <div className="inline-block px-4 py-1 rounded-full bg-[#fae78e]/10 border border-[#fae78e]/30 text-[#fae78e] text-[10px] font-bold uppercase tracking-widest mb-3">
                   Featured
                </div>
                <h3 className="text-2xl font-bold text-white">Ministry in Action</h3>
            </div>
            <div className="relative aspect-video rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(40,12,45,0.6)] border border-[#fae78e]/20 group">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" className="w-full h-full object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-500" alt="Ministry Video" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 bg-[#fae78e] rounded-full flex items-center justify-center pl-1 shadow-[0_0_30px_#fae78e] group-hover:scale-110 transition-transform focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-black" aria-label="Play featured video">
                        <Play className="w-8 h-8 text-[#280c2d] fill-[#280c2d]" />
                    </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                    <h4 className="text-white font-bold text-xl">Global Crusade Highlights</h4>
                    <p className="text-slate-300 text-sm">Witness the power of God moving across nations.</p>
                </div>
            </div>
         </div>
      </section>

      {/* Ministry Deep Dive */}
      <section id="ministry-details" className="py-20 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h3 className="font-display text-4xl font-bold text-white mb-4">Ministry Deep Dive</h3>
                <div className="w-24 h-1 bg-[#fae78e] mx-auto mt-6 rounded-full shadow-[0_0_10px_#fae78e]"></div>
            </div>

            {/* Enhanced Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-16 p-2 bg-[#280c2d]/50 backdrop-blur-lg rounded-[2rem] max-w-4xl mx-auto border border-[#fae78e]/20 shadow-2xl relative">
              {ministryDetails.map((detail, idx) => (
                <button
                  key={detail.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex-1 min-w-[180px] flex items-center justify-center gap-3 px-8 py-5 rounded-2xl font-bold transition-all duration-300 relative overflow-hidden focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#280c2d] ${
                    activeTab === idx 
                      ? 'bg-[#fae78e] text-[#280c2d] shadow-[0_20px_40px_-10px_rgba(250,231,142,0.4)] scale-[1.05] z-10' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5 opacity-70 hover:opacity-100'
                  }`}
                  aria-controls={`tab-panel-${detail.id}`}
                  aria-selected={activeTab === idx}
                  role="tab"
                >
                  <detail.icon className={`w-5 h-5 ${activeTab === idx ? 'text-[#280c2d]' : 'text-[#fae78e]'}`} />
                  <span className="text-sm md:text-base tracking-wide whitespace-nowrap">{detail.title}</span>
                  {activeTab === idx && (
                    <div className="absolute top-0 left-0 w-full h-1 bg-white/40"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Tab Panel Content with Slide-in Animation */}
            <div 
              key={activeTab} // Using key to trigger re-mounting for animate-in
              className="bg-[#1a1a1a] rounded-[3rem] shadow-2xl border border-[#fae78e]/10 overflow-hidden animate-in fade-in slide-in-from-right-8 duration-700 ease-out"
            >
               <div className="flex flex-col lg:flex-row">
                 {/* Overview Column */}
                 <div className="lg:w-2/5 p-8 md:p-12 bg-[#280c2d] border-b lg:border-b-0 lg:border-r border-[#fae78e]/10 relative overflow-hidden flex flex-col">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#fae78e]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    <div className="w-16 h-16 rounded-2xl bg-[#fae78e] flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(250,231,142,0.3)] animate-in zoom-in duration-500 delay-200">
                      {React.createElement(ministryDetails[activeTab].icon, { className: "w-8 h-8 text-[#280c2d]" })}
                    </div>
                    <h4 className="text-3xl font-display font-bold text-white mb-2">{ministryDetails[activeTab].title}</h4>
                    <p className="text-[#fae78e] font-bold uppercase text-xs mb-6 tracking-widest">{ministryDetails[activeTab].subtitle}</p>
                    <p className="text-slate-300 leading-relaxed mb-10 text-lg italic font-light border-l-2 border-[#fae78e]/30 pl-4">
                      "{ministryDetails[activeTab].description}"
                    </p>
                    <div className="mt-auto flex flex-col gap-6">
                      <button className="flex items-center gap-2 px-8 py-3.5 bg-black text-white border border-[#fae78e]/30 font-bold rounded-xl hover:bg-[#fae78e] hover:text-[#280c2d] transition-all shadow-lg active:scale-95 group focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                        {ministryDetails[activeTab].cta}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>

                      {/* Share Section */}
                      <div className="pt-6 border-t border-[#fae78e]/10">
                        <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-3 flex items-center gap-2">
                          <Share2 className="w-3 h-3" /> Share Ministry
                        </p>
                        <div className="flex gap-3">
                          <button 
                            onClick={() => handleShare('facebook', ministryDetails[activeTab].title)}
                            className="w-10 h-10 rounded-full bg-[#1877F2]/10 border border-[#1877F2]/30 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all shadow-sm"
                            title="Share on Facebook"
                          >
                            <Facebook className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleShare('twitter', ministryDetails[activeTab].title)}
                            className="w-10 h-10 rounded-full bg-[#1DA1F2]/10 border border-[#1DA1F2]/30 flex items-center justify-center text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition-all shadow-sm"
                            title="Share on Twitter"
                          >
                            <Twitter className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleShare('whatsapp', ministryDetails[activeTab].title)}
                            className="w-10 h-10 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all shadow-sm"
                            title="Share on WhatsApp"
                          >
                            <MessageCircle className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                 </div>
                 {/* Details Column */}
                 <div className="lg:w-3/5 p-8 md:p-12" role="tabpanel" id={`tab-panel-${ministryDetails[activeTab].id}`}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="animate-in slide-in-from-bottom-4 duration-500 delay-300">
                        <h5 className="font-bold text-[#fae78e] uppercase tracking-wider text-xs mb-6 flex items-center gap-2">
                          <Globe className="w-4 h-4" /> Outreach Programs
                        </h5>
                        <ul className="space-y-4">
                          {ministryDetails[activeTab].outreach.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 group">
                              <CheckCircle2 className="w-4 h-4 text-[#fae78e] shrink-0 mt-0.5" />
                              <span className="text-slate-300 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="animate-in slide-in-from-bottom-4 duration-500 delay-500">
                        <h5 className="font-bold text-[#fae78e] uppercase tracking-wider text-xs mb-6 flex items-center gap-2">
                          <Clock className="w-4 h-4" /> Weekly Schedule
                        </h5>
                        <div className="space-y-3">
                          {ministryDetails[activeTab].schedule.map((item, i) => (
                            <div key={i} className="p-4 rounded-xl bg-[#280c2d] border border-[#fae78e]/10 flex justify-between items-center transition-transform hover:scale-[1.02] shadow-sm">
                              <div>
                                <p className="font-bold text-white text-xs">{item.event}</p>
                                <p className="text-[10px] text-slate-400 uppercase tracking-tighter">{item.day}</p>
                              </div>
                              <span className="text-[10px] font-bold text-[#280c2d] bg-[#fae78e] px-2 py-1 rounded">{item.time}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                 </div>
               </div>
            </div>
        </div>
      </section>

      {/* Global Impact Interactive Map */}
      <section className="py-24 bg-[#050505] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-[#fae78e] mb-4">Global Reach</h2>
                <h3 className="font-display text-4xl font-bold text-white mb-6">15+ Countries Impacted</h3>
            </div>

            <div className="relative bg-[#280c2d] rounded-[3rem] p-6 md:p-12 border border-[#fae78e]/10 shadow-[0_0_50px_rgba(40,12,45,0.5)] overflow-hidden min-h-[500px] flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,231,142,0.05),transparent_70%)]"></div>
                <WorldMapSVG>
                    {impactedCountries.map((country) => (
                      <g 
                        key={country.id} 
                        onMouseEnter={() => setHoveredCountry(country.id)}
                        onMouseLeave={() => setHoveredCountry(null)}
                        className="cursor-pointer"
                      >
                        <circle cx={country.x} cy={country.y} r="6" className={`fill-[#fae78e] transition-all duration-300 ${hoveredCountry === country.id ? 'scale-150 fill-white' : ''}`} />
                        <circle cx={country.x} cy={country.y} r="15" className={`fill-[#fae78e]/20 animate-ping pointer-events-none ${hoveredCountry === country.id ? 'opacity-100' : 'opacity-0'}`} />
                      </g>
                    ))}
                </WorldMapSVG>
            </div>
        </div>
      </section>

      {/* Core Overview */}
      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h3 className="font-display text-3xl font-bold text-white mb-4">Core Overview</h3>
                <div className="w-24 h-1 bg-[#fae78e] mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featured.map((item, i) => (
                    <div 
                        key={i} 
                        className="group bg-[#280c2d] p-8 rounded-3xl border border-[#fae78e]/10 hover:border-[#fae78e]/50 transition-all duration-500 shadow-lg hover:shadow-[0_0_30px_rgba(40,12,45,0.8)] hover:-translate-y-2 relative overflow-hidden"
                    >
                        {/* Glow effect */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#fae78e]/5 rounded-full blur-3xl group-hover:bg-[#fae78e]/10 transition-colors"></div>
                        
                        <div className="flex items-start justify-between mb-6">
                            <div className={`p-4 rounded-2xl bg-[#000] text-[#fae78e] shadow-inner group-hover:scale-110 transition-transform border border-[#fae78e]/20`}>
                                <item.icon className="w-8 h-8 drop-shadow-[0_0_5px_rgba(250,231,142,0.5)]" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">{item.tag}</span>
                        </div>
                        <h4 className="text-2xl font-display font-bold text-white mb-2">{item.title}</h4>
                        <div className="text-[#fae78e] font-semibold text-xs mb-4 italic tracking-wide">Focus: {item.focus}</div>
                        
                        <button 
                          onClick={() => {
                            const target = document.getElementById('ministry-details');
                            target?.scrollIntoView({ behavior: 'smooth' });
                            setActiveTab(i);
                          }}
                          className="flex items-center gap-2 text-white/70 hover:text-[#fae78e] font-bold hover:gap-4 transition-all text-sm focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-md"
                        >
                            Deep Dive <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Ministry Arms */}
      <section className="py-20 bg-[#280c2d] text-white overflow-hidden relative border-t border-[#fae78e]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
                <h3 className="font-display text-4xl font-bold mb-4">Our Specialized Arms</h3>
                <p className="text-slate-400 max-w-2xl mx-auto text-lg">Targeted spiritual and practical support for various groups.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {arms.map((arm, i) => (
                    <div key={i} className="bg-black/40 backdrop-blur-md p-8 rounded-3xl border border-[#fae78e]/10 hover:border-[#fae78e]/40 transition-all duration-300 flex flex-col items-center text-center group hover:-translate-y-2 shadow-xl">
                        <div className="w-16 h-16 rounded-full bg-[#fae78e] flex items-center justify-center mb-6 shadow-[0_0_20px_#fae78e] group-hover:rotate-12 transition-transform">
                            <arm.icon className="w-8 h-8 text-[#280c2d]" />
                        </div>
                        <h4 className="text-xl font-bold mb-4">{arm.title}</h4>
                        <p className="text-slate-300 text-sm leading-relaxed mb-8 flex-grow">{arm.description}</p>
                        <button className="px-8 py-2.5 bg-transparent border border-[#fae78e] text-[#fae78e] font-bold rounded-full hover:bg-[#fae78e] hover:text-[#280c2d] transition-all shadow-[0_0_10px_rgba(250,231,142,0.2)] focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-black">
                            {arm.btn}
                        </button>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Support / Footer Branding */}
      <div className="py-24 bg-black text-center border-t border-[#fae78e]/10 relative overflow-hidden">
          <Star className="w-10 h-10 text-[#fae78e] mx-auto mb-8 animate-pulse drop-shadow-[0_0_10px_#fae78e]" />
          <p className="text-3xl md:text-4xl font-display font-bold text-white italic max-w-4xl mx-auto px-4 mb-6 leading-tight">
            "Ministering through Creativity for the Kingdom of God"
          </p>
          <p className="text-[#fae78e] uppercase tracking-[0.5em] text-xs font-bold mb-10">Kachi Emmanuel Ministries</p>
          <button className="px-12 py-4 bg-[#fae78e] hover:bg-white text-[#280c2d] font-extrabold rounded-full shadow-[0_0_20px_#fae78e] transition-all hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-black">
             <Zap className="w-5 h-5 text-[#280c2d] fill-current" />
             Support the Mission
          </button>
      </div>
    </div>
  );
};

export default MinistriesPage;