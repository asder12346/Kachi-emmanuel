
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
  Zap
} from 'lucide-react';

// Simplified World Map SVG Component for visual representation
// Use React.PropsWithChildren to ensure the 'children' prop is correctly handled in the component definition
const WorldMapSVG = ({ children }: React.PropsWithChildren) => (
  <svg viewBox="0 0 1000 500" className="w-full h-auto text-slate-200 dark:text-slate-800 fill-current overflow-visible transition-colors duration-500">
    {/* Basic continent outlines (simplified) */}
    <path d="M120,100 C150,80 200,80 250,110 C300,140 280,220 220,250 C180,270 140,240 120,200 Z" opacity="0.3" /> {/* N. America */}
    <path d="M280,280 C320,260 380,280 400,320 C420,380 380,480 320,490 C280,470 260,400 280,320" opacity="0.3" /> {/* S. America */}
    <path d="M480,80 C520,60 580,70 600,110 C620,160 580,200 520,210 C480,200 460,150 480,100" opacity="0.3" /> {/* Europe */}
    <path d="M440,220 C480,200 540,210 580,250 C620,320 580,440 520,450 C480,440 440,350 440,220" opacity="0.3" /> {/* Africa */}
    <path d="M600,120 C700,80 850,100 900,180 C920,280 850,380 750,390 C650,380 600,280 600,120" opacity="0.3" /> {/* Asia */}
    <path d="M820,400 C860,390 920,410 930,450 C940,490 880,500 840,490 C810,470 800,430 820,400" opacity="0.3" /> {/* Australia */}
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
    { label: 'Ministry Arms', value: '7+', icon: ShieldCheck, color: 'indigo' },
    { label: 'Annual Reach', value: '50+', icon: Calendar, color: 'amber' },
    { label: 'Countries Impacted', value: '15+', icon: Globe, color: 'purple' },
    { label: 'Volunteers', value: '200+', icon: Users, color: 'emerald' },
  ];

  const impactedCountries = [
    { id: 'nigeria', name: 'Nigeria', x: 485, y: 310, work: 'Headquarters, Regional Crusades, & Youth Hubs', flag: '🇳🇬' },
    { id: 'ghana', name: 'Ghana', x: 465, y: 315, work: 'University Fellowship Revivals & Media Missions', flag: '🇬🇭' },
    { id: 'kenya', name: 'Kenya', x: 535, y: 340, work: 'Community Medical Outreach & Pastoral Training', flag: '🇰🇪' },
    { id: 'uk', name: 'United Kingdom', x: 495, y: 145, work: 'Global Leadership Seminars & Virtual Cell Groups', flag: '🇬🇧' },
    { id: 'usa', name: 'United States', x: 215, y: 165, work: 'Media Broadcasting & Partnership Summits', flag: '🇺🇸' },
    { id: 'canada', name: 'Canada', x: 205, y: 115, work: 'Digital Mentorship & Youth Empowerment Forums', flag: '🇨🇦' },
    { id: 'south-africa', name: 'South Africa', x: 520, y: 435, work: 'Urban Evangelism & Tech-Faith Initiatives', flag: '🇿🇦' },
    { id: 'australia', name: 'Australia', x: 865, y: 445, work: 'Online Bible Study Networks & Outreach Support', flag: '🇦🇺' },
    { id: 'india', name: 'India', x: 715, y: 275, work: 'Missions Support & Children Education Projects', flag: '🇮🇳' },
    { id: 'uae', name: 'United Arab Emirates', x: 605, y: 255, work: 'Professional Discipleship & Media Outreach', flag: '🇦🇪' },
    { id: 'germany', name: 'Germany', x: 515, y: 150, work: 'Youth Mentorship & Literature Distribution', flag: '🇩🇪' },
    { id: 'brazil', name: 'Brazil', x: 345, y: 385, work: 'Social Impact Outreaches & Community Prayer', flag: '🇧🇷' },
    { id: 'rwanda', name: 'Rwanda', x: 528, y: 355, work: 'Healing & Reconciliation Seminars', flag: '🇷🇼' },
    { id: 'uganda', name: 'Uganda', x: 528, y: 342, work: 'Education Support & School Evangelism', flag: '🇺🇬' },
    { id: 'sierra-leone', name: 'Sierra Leone', x: 455, y: 320, work: 'Medical Relief & Rural Gospel Missions', flag: '🇸🇱' },
  ];

  const ministryDetails = [
    {
      id: 'believers-perspective',
      title: 'Believers Perspective',
      subtitle: 'Teaching & Digital Discipleship',
      icon: BookOpen,
      color: 'indigo',
      description: 'A digital content platform dedicated to teaching the Word of God with simplicity and depth, specifically tailored for the growth of young believers.',
      outreach: [
        'Weekly Video Teaching Series',
        'Spiritual Growth Mentorship Groups',
        'Digital Discipleship Resource Hub',
        '1-on-1 Spiritual Guidance Sessions'
      ],
      schedule: [
        { day: 'Tuesdays', time: '7:00 PM', event: 'Live Word Study' },
        { day: 'Saturdays', time: '10:00 AM', event: 'Mentorship Group Huddles' },
        { day: 'Monthly', time: 'Last Sat', event: 'Spiritual Growth Workshop' }
      ],
      involvement: 'Join our content review team, help moderate our digital community groups, or contribute to our spiritual growth resources.',
      cta: 'Explore Teachings'
    },
    {
      id: 'gospel-truth',
      title: 'The Gospel Truth',
      subtitle: 'Media & Global Interviews',
      icon: Mic2,
      color: 'amber',
      description: 'Engaging the culture through thought-provoking conversations. We host leaders in ministry and industry to address faith in the modern world.',
      outreach: [
        'High-Impact Video Podcast',
        'Industry Leader Insight Sessions',
        'Youth Q&A Live Forums',
        'Global Faith & Culture Documentary Series'
      ],
      schedule: [
        { day: 'Fridays', time: '8:00 AM', event: 'Podcast Episode Release' },
        { day: 'Bi-Weekly', time: '6:00 PM', event: 'IG Live Behind-the-Scenes' },
        { day: 'Quarterly', time: 'Varies', event: 'Media Summit' }
      ],
      involvement: 'Volunteer for video production, guest research, technical support, or social media community management.',
      cta: 'Watch Episodes'
    },
    {
      id: 'spirit-stature',
      title: 'Spirit and Stature',
      icon: Sparkles,
      color: 'purple',
      subtitle: 'Faith, Excellence & Fashion',
      description: 'Inspiring a generation to reflect the beauty of God internally and externally. We believe spiritual growth should mirror outward excellence.',
      outreach: [
        'Faith & Fashion Workshops',
        'Excellence in Ministry Training',
        'Spiritual & Physical Grooming Seminars',
        'Annual Excellence Awards'
      ],
      schedule: [
        { day: 'Mondays', time: '9:00 AM', event: 'Weekly Excellence Guide' },
        { day: 'Monthly', time: '2nd Sat', event: 'In-person Styling & Faith Session' },
        { day: 'Annually', time: 'October', event: 'Spirit & Stature Conference' }
      ],
      involvement: 'Join our planning committee, partner as a Christian designer, or serve as a mentor in our excellence programs.',
      cta: 'Discover Excellence'
    },
    {
      id: 'campus-invasion',
      title: 'Campus Invasion',
      icon: Flame,
      color: 'emerald',
      subtitle: 'Field Evangelism',
      description: 'Taking the message of Christ beyond the screen. We invade schools, campuses, and rural communities with the fire of the Holy Spirit.',
      outreach: [
        'Secondary School Gospel Tours',
        'University Fellowship Revivals',
        'Community Medical & Food Outreaches',
        'Rural Evangelism Training'
      ],
      schedule: [
        { day: 'Bi-Monthly', time: 'Weekend', event: 'Regional Campus Rally' },
        { day: 'Monthly', time: '3rd Sat', event: 'Community Service Drive' },
        { day: 'Semiannually', time: 'Varies', event: 'Rural Mission Trip' }
      ],
      involvement: 'Register as a field missionary, join the logistics & planning team, or contribute to our outreach funding projects.',
      cta: 'Join The Invasion'
    }
  ];

  const featured = [
    {
      tag: 'Faith in Action',
      title: 'Believers Perspective',
      expression: 'Digital content platform',
      focus: 'Teaching the Word and helping young believers grow spiritually.',
      purpose: 'To help young believers overcome struggles and walk in maturity.',
      icon: BookOpen,
      color: 'indigo'
    },
    {
      tag: 'Kingdom Living',
      title: 'The Gospel Truth',
      expression: 'Video Podcast',
      focus: 'Deep conversations about faith, purpose, and culture.',
      purpose: 'Interview-style video podcast featuring influential voices.',
      icon: Mic2,
      color: 'amber'
    },
    {
      tag: 'Purpose Driven',
      title: 'Spirit and Stature',
      expression: 'Faith & Fashion',
      focus: 'Fusing faith and fashion for spiritual and physical excellence.',
      purpose: 'Mirroring the inner beauty of the Spirit through outward excellence.',
      icon: Sparkles,
      color: 'purple'
    },
    {
      tag: 'Evangelism',
      title: 'Campus Outreaches',
      expression: 'Schools & Communities',
      focus: 'Reaching young people where they are on campuses.',
      purpose: 'Taking Christ beyond digital spaces into schools and communities.',
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
      title: 'Community Outreach',
      description: 'Taking the message of Christ beyond digital spaces into schools, campuses, and rural communities.',
      btn: 'Serve With Us',
      icon: HandHeart,
    },
    {
      title: 'Prayer & Intercession',
      description: 'Building a foundation of prayer that undergirds all ministry activities and impacts nations globally.',
      btn: 'Join Prayer',
      icon: Flame,
    }
  ];

  const devotionals = [
    { date: 'Nov 15, 2023', read: '5 min read', title: 'Finding Peace in Turbulent Times', desc: 'Discover how to maintain inner peace and spiritual stability when everything around you seems chaotic.' },
    { date: 'Nov 8, 2023', read: '7 min read', title: 'Transformative Power of Prayer', desc: 'Explore how consistent prayer can transform your circumstances and align your heart with God\'s will.' },
    { date: 'Nov 1, 2023', read: '6 min read', title: 'Walking in Your God-Given Purpose', desc: 'Learn practical steps to discover and walk confidently in the purpose God has designed for your life.' },
  ];

  if (!mounted) return null;

  return (
    <div className="bg-white dark:bg-slate-950 transition-colors">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-slate-50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="text-sm md:text-base uppercase tracking-[0.3em] font-bold text-indigo-600 dark:text-indigo-400 mb-4 animate-in slide-in-from-top-4">
                Kachi Emmanuel Ministries
            </h2>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 animate-in slide-in-from-bottom-4">
                Our Ministry <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-amber-500">Works</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-12 animate-in fade-in">
                Discover the various ways we're spreading the Gospel and transforming lives through creative ministry expressions.
                <span className="block mt-4 font-semibold text-slate-900 dark:text-slate-100 text-2xl">
                    Ministering Through Creativity
                </span>
            </p>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-white/5 animate-in fade-in zoom-in-95" style={{ animationDelay: `${i * 100 + 400}ms` }}>
                        <stat.icon className={`w-8 h-8 text-${stat.color}-500 mx-auto mb-3`} />
                        <div className="text-3xl font-bold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                        <div className="text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
        <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
      </section>

      {/* Ministry Deep Dive (New 'Ministry Details' Section) */}
      <section id="ministry-details" className="py-20 bg-white dark:bg-slate-950 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h3 className="font-display text-4xl font-bold text-slate-900 dark:text-white mb-4">Ministry Deep Dive</h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Detailed information about our core expressions, programs, and mission focuses.</p>
                <div className="w-24 h-1 bg-indigo-500 mx-auto mt-6 rounded-full"></div>
            </div>

            {/* Tab Navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-12 p-1.5 bg-slate-100 dark:bg-slate-800/50 rounded-2xl max-w-4xl mx-auto">
              {ministryDetails.map((detail, idx) => (
                <button
                  key={detail.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex-1 min-w-[160px] flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold transition-all ${
                    activeTab === idx 
                      ? 'bg-white dark:bg-slate-700 text-indigo-600 dark:text-white shadow-lg scale-105' 
                      : 'text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200'
                  }`}
                >
                  <detail.icon className={`w-5 h-5 ${activeTab === idx ? 'text-indigo-500' : ''}`} />
                  <span className="text-sm whitespace-nowrap">{detail.title}</span>
                </button>
              ))}
            </div>

            {/* Tab Panel Content */}
            <div className="bg-white dark:bg-slate-800 rounded-[2.5rem] shadow-2xl border border-slate-200 dark:border-white/5 overflow-hidden transition-all duration-500">
               <div className="flex flex-col lg:flex-row">
                 {/* Overview Column */}
                 <div className="lg:w-2/5 p-8 md:p-12 bg-indigo-50/30 dark:bg-indigo-900/10 border-b lg:border-b-0 lg:border-r border-slate-100 dark:border-white/5">
                    <div className="w-16 h-16 rounded-2xl bg-indigo-600 flex items-center justify-center mb-8 shadow-xl">
                      {React.createElement(ministryDetails[activeTab].icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    <h4 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-2">{ministryDetails[activeTab].title}</h4>
                    <p className="text-indigo-600 dark:text-indigo-400 font-bold uppercase text-xs mb-6 tracking-widest">{ministryDetails[activeTab].subtitle}</p>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-10 text-lg italic">
                      "{ministryDetails[activeTab].description}"
                    </p>
                    <button className="flex items-center gap-2 px-8 py-3.5 bg-slate-900 dark:bg-slate-700 text-white font-bold rounded-xl hover:bg-indigo-600 transition-all shadow-lg active:scale-95 group">
                      {ministryDetails[activeTab].cta}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                 </div>
                 {/* Details Column */}
                 <div className="lg:w-3/5 p-8 md:p-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div>
                        <h5 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs mb-6 flex items-center gap-2">
                          <Globe className="w-4 h-4 text-indigo-500" /> Outreach Programs
                        </h5>
                        <ul className="space-y-4">
                          {ministryDetails[activeTab].outreach.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 group">
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                              <span className="text-slate-600 dark:text-slate-300 text-sm">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-slate-900 dark:text-white uppercase tracking-wider text-xs mb-6 flex items-center gap-2">
                          <Clock className="w-4 h-4 text-amber-500" /> Weekly Schedule
                        </h5>
                        <div className="space-y-3">
                          {ministryDetails[activeTab].schedule.map((item, i) => (
                            <div key={i} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-white/5 flex justify-between items-center transition-transform hover:scale-[1.02]">
                              <div>
                                <p className="font-bold text-slate-900 dark:text-white text-xs">{item.event}</p>
                                <p className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-tighter">{item.day}</p>
                              </div>
                              <span className="text-[10px] font-bold text-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 px-2 py-1 rounded">{item.time}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    {/* Involvement Footer */}
                    <div className="mt-12 p-6 rounded-2xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200/50 dark:border-amber-500/20">
                        <h5 className="font-bold text-amber-900 dark:text-amber-400 mb-2 flex items-center gap-2">
                          <HandHeart className="w-5 h-5" /> How to Support
                        </h5>
                        <p className="text-amber-800/80 dark:text-slate-300 text-sm leading-relaxed mb-4">
                          {ministryDetails[activeTab].involvement}
                        </p>
                        <button className="text-xs font-bold text-amber-600 dark:text-amber-400 flex items-center gap-1 hover:gap-2 transition-all group">
                            Partner as a volunteer <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </button>
                    </div>
                 </div>
               </div>
            </div>
        </div>
      </section>

      {/* Global Impact Interactive Map (Requested Section) */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900 transition-colors overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-sm uppercase tracking-[0.3em] font-bold text-indigo-600 dark:text-indigo-400 mb-4">Global Reach</h2>
                <h3 className="font-display text-4xl font-bold text-slate-900 dark:text-white mb-6">15+ Countries Impacted</h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                   Active ministry and digital outreach spanning across continents, bringing hope to millions globally through our various arms.
                </p>
            </div>

            <div className="relative bg-white dark:bg-slate-800 rounded-[3rem] p-6 md:p-12 border border-slate-200 dark:border-white/5 shadow-2xl overflow-hidden min-h-[500px] flex items-center justify-center">
                <WorldMapSVG>
                    {impactedCountries.map((country) => (
                      <g 
                        key={country.id} 
                        onMouseEnter={() => setHoveredCountry(country.id)}
                        onMouseLeave={() => setHoveredCountry(null)}
                        className="cursor-pointer"
                      >
                        {/* Interactive Dot */}
                        <circle 
                            cx={country.x} 
                            cy={country.y} 
                            r="6" 
                            className={`fill-indigo-600 transition-all duration-300 ${hoveredCountry === country.id ? 'scale-150 fill-amber-500' : ''}`} 
                        />
                        {/* Pulse effect */}
                        <circle 
                            cx={country.x} 
                            cy={country.y} 
                            r="15" 
                            className={`fill-indigo-400/20 animate-ping pointer-events-none ${hoveredCountry === country.id ? 'opacity-100' : 'opacity-0'}`} 
                        />
                        {/* Country Tooltip */}
                        {hoveredCountry === country.id && (
                          <foreignObject x={country.x + 15} y={country.y - 60} width="220" height="120" className="overflow-visible z-50 pointer-events-none">
                            <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl shadow-2xl border border-indigo-100 dark:border-white/10 animate-in fade-in zoom-in-95">
                               <div className="flex items-center gap-2 mb-2">
                                  <span className="text-xl">{country.flag}</span>
                                  <h6 className="font-bold text-slate-900 dark:text-white text-sm">{country.name}</h6>
                               </div>
                               <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight">
                                  {country.work}
                                </p>
                            </div>
                          </foreignObject>
                        )}
                      </g>
                    ))}
                </WorldMapSVG>
                {/* Legend / Tip */}
                <div className="absolute bottom-8 right-8 bg-indigo-600 text-white text-[10px] px-4 py-2 rounded-full font-bold uppercase tracking-widest hidden md:flex items-center gap-2 shadow-lg">
                    <MapIcon className="w-3 h-3" /> Hover markers for ministry work details
                </div>
            </div>
        </div>
      </section>

      {/* Featured Core Overview */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h3 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-4">Core Overview</h3>
                <div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {featured.map((item, i) => (
                    <div 
                        key={i} 
                        className="group bg-slate-50 dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-200 dark:border-white/5 hover:border-indigo-500/30 transition-all duration-500 shadow-lg hover:shadow-2xl hover:-translate-y-2"
                        style={{ animationDelay: `${i * 150}ms` }}
                    >
                        <div className="flex items-start justify-between mb-6">
                            <div className={`p-4 rounded-2xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 shadow-inner group-hover:scale-110 transition-transform`}>
                                <item.icon className="w-8 h-8" />
                            </div>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">{item.tag}</span>
                        </div>
                        <h4 className="text-2xl font-display font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
                        <div className="text-indigo-500 dark:text-indigo-400 font-semibold text-xs mb-4 italic tracking-wide">Expression: {item.expression}</div>
                        
                        <div className="space-y-4 mb-8">
                            <div className="flex gap-3">
                                <div className="mt-1"><div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div></div>
                                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                    <strong className="text-slate-900 dark:text-white">Focus:</strong> {item.focus}
                                </p>
                            </div>
                            <div className="flex gap-3">
                                <div className="mt-1"><div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div></div>
                                <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                                    <strong className="text-slate-900 dark:text-white">Purpose:</strong> {item.purpose}
                                </p>
                            </div>
                        </div>

                        <button 
                          onClick={() => {
                            const target = document.getElementById('ministry-details');
                            target?.scrollIntoView({ behavior: 'smooth' });
                            setActiveTab(i);
                          }}
                          className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 font-bold hover:gap-4 transition-all text-sm"
                        >
                            Deep Dive <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Ministry Arms */}
      <section className="py-20 bg-indigo-600 dark:bg-indigo-950 text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
                <h3 className="font-display text-4xl font-bold mb-4">Our Specialized Arms</h3>
                <p className="text-indigo-100 max-w-2xl mx-auto text-lg">Targeted spiritual and practical support for various groups.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {arms.map((arm, i) => (
                    <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:bg-white/20 transition-all duration-300 flex flex-col items-center text-center group" style={{ animationDelay: `${i * 200}ms` }}>
                        <div className="w-16 h-16 rounded-full bg-indigo-500 flex items-center justify-center mb-6 shadow-lg group-hover:rotate-12 transition-transform">
                            <arm.icon className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-xl font-bold mb-4">{arm.title}</h4>
                        <p className="text-indigo-50 text-sm leading-relaxed mb-8 flex-grow">{arm.description}</p>
                        <button className="px-8 py-2.5 bg-white text-indigo-600 font-bold rounded-full hover:bg-amber-400 hover:text-white transition-all shadow-md">
                            {arm.btn}
                        </button>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Resources & Latest Devotionals */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
                <div>
                    <h3 className="font-display text-3xl font-bold text-slate-900 dark:text-white mb-2">Daily Devotionals</h3>
                    <p className="text-slate-500 dark:text-slate-400">Fresh inspiration for your daily spiritual journey.</p>
                </div>
                <button className="px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-full transition-all shadow-lg active:scale-95">
                    View Archive
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {devotionals.map((dev, i) => (
                    <div key={i} className="group bg-slate-50 dark:bg-slate-900 rounded-3xl p-8 border border-slate-200 dark:border-white/5 transition-all hover:shadow-2xl hover:bg-white dark:hover:bg-slate-800">
                        <div className="flex gap-4 mb-4 text-[10px] font-bold uppercase tracking-widest text-slate-400">
                          <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-indigo-500" /> {dev.date}</span>
                          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-amber-500" /> {dev.read}</span>
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-indigo-600 transition-colors">{dev.title}</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed line-clamp-3">{dev.desc}</p>
                        <button className="text-indigo-600 dark:text-indigo-400 font-bold flex items-center gap-2 text-sm group/btn">
                          Read Full Article <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Watch & Listen Channels */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/50 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { title: 'YouTube Channel', icon: Youtube, desc: 'Watch sermons, teachings, and highlights on our official channel.', btn: 'Subscribe', color: 'red' },
                    { title: 'Podcast Episodes', icon: Headphones, desc: 'Listen to weekly podcasts featuring inspiring faith messages.', btn: 'Listen Now', color: 'indigo' },
                    { title: 'Media Library', icon: Library, desc: 'Browse our collection of free spiritual resources and articles.', btn: 'Browse', color: 'amber' },
                ].map((media, i) => (
                    <div key={i} className="p-8 rounded-3xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-white/5 flex flex-col items-center text-center group hover:scale-[1.03] transition-all shadow-md">
                        <div className={`p-5 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 mb-6 group-hover:text-indigo-500 transition-colors`}>
                            <media.icon className="w-8 h-8" />
                        </div>
                        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{media.title}</h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-grow leading-relaxed">{media.desc}</p>
                        <button className="w-full py-3.5 bg-slate-900 dark:bg-slate-700 text-white font-bold rounded-xl hover:bg-indigo-600 transition-all shadow-lg">
                            {media.btn}
                        </button>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Support / Footer Branding */}
      <div className="py-24 bg-slate-900 text-center border-t border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, rgba(99,102,241,0.15) 0%, transparent 70%)' }}></div>
          <Star className="w-10 h-10 text-amber-500 mx-auto mb-8 animate-pulse" />
          <p className="text-3xl md:text-4xl font-display font-bold text-white italic max-w-4xl mx-auto px-4 mb-6 leading-tight">
            "Ministering through Creativity for the Kingdom of God"
          </p>
          <p className="text-indigo-400 uppercase tracking-[0.5em] text-xs font-bold mb-10">Kachi Emmanuel Ministries</p>
          <button className="px-12 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-extrabold rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto">
             <Zap className="w-5 h-5 text-amber-400 fill-current" />
             Support the Mission
          </button>
      </div>
    </div>
  );
};

export default MinistriesPage;
