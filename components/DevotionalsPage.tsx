import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Star, 
  Sparkles, 
  BookMarked, 
  Search, 
  X, 
  Facebook, 
  Twitter, 
  MessageCircle, 
  Share2,
  Copy,
  Check
} from 'lucide-react';

interface Devotional {
  date: string;
  title: string;
  scripture: string;
  excerpt: string;
  fullContent: string;
  category: string;
  readTime: string;
  image?: string;
}

const DevotionalsPage: React.FC = () => {
  const [selectedDevotional, setSelectedDevotional] = useState<Devotional | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);

  const devotionals: Devotional[] = [
    {
      date: 'May 20, 2024',
      title: 'Walking by Faith, Not by Sight',
      scripture: '2 Corinthians 5:7',
      excerpt: 'In a world driven by what we can see, touch, and measure, the call of the believer is to walk by a different standard...',
      fullContent: `In a world driven by what we can see, touch, and measure, the call of the believer is to walk by a different standard. To walk by faith is to trust God even when the circumstances don't make sense. It means relying on His promises rather than our perception.\n\nAbraham left his homeland not knowing where he was going, yet he moved because he heard the voice of God. Our journey is similar. God may not show us the entire map, but He promise to be our guide.\n\nWhen fear whispers that the road is too dark, remember that faith is the evidence of things not seen. Today, choose to lean on His Word more than your worries. Every step taken in faith is a step towards your divine destiny.`,
      category: 'Spiritual Growth',
      readTime: '5 min',
      image: 'https://bezaleelforge.github.io/kachi/18.jpg'
    },
    {
      date: 'May 19, 2024',
      title: 'The Power of a Renewed Mind',
      scripture: 'Romans 12:2',
      excerpt: 'Transformation doesn\'t start with our actions; it starts with our thinking. When we align our thoughts with God\'s Word...',
      fullContent: `Transformation doesn't start with our actions; it starts with our thinking. The battleground for your life is your mind. Every action is a result of a thought. If we want to change our lives, we must first allow the Holy Spirit to change the way we think.\n\nConforming to this world is easy because it happens by default. But being transformed requires a conscious decision to soak in the scriptures. As we meditate on God's Word, our old patterns of thinking are replaced with Kingdom perspectives.\n\nYou are not defined by your past mistakes or the labels others have placed on you. You are defined by what God says about you. Today, guard your thoughts and filter everything through the lens of truth.`,
      category: 'Mental Health',
      readTime: '4 min',
      image: 'https://bezaleelforge.github.io/kachi/10.jpg'
    },
    {
      date: 'May 18, 2024',
      title: 'Strength in the Secret Place',
      scripture: 'Psalm 91:1',
      excerpt: 'Public victories are won in private prayer. Discovering the strength that comes from intimacy with the Father...',
      fullContent: `Public victories are won in private prayer. We often admire those who stand strong in public challenges, but their strength is birthed in the "secret place" of prayer and intimacy with God.\n\nThe secret place is not just a location; it's a posture of the heart. It's where we strip away our titles, our worries, and our masks to just be with the Father. In this place of stillness, we receive the strategy, the comfort, and the power needed for daily living.\n\nDon't let the busyness of life rob you of your quiet time. Jesus Himself often withdrew to lonely places to pray. If the Son of God needed intimacy with the Father, how much more do we? Make time today to dwell under the shadow of the Almighty.`,
      category: 'Prayer',
      readTime: '6 min',
      image: 'https://bezaleelforge.github.io/kachi/21.jpg'
    },
    {
      date: 'May 17, 2024',
      title: 'Creativity for the Kingdom',
      scripture: 'Exodus 31:3',
      excerpt: 'God is the ultimate Creator. When we use our talents and creativity, we reflect His image to a world in need of beauty...',
      fullContent: `God is the ultimate Creator. From the vastness of the cosmos to the intricate design of a snowflake, His creativity is on display. As those made in His image, we are also endowed with creative capacity.\n\nWhether you write, paint, code, speak, or design, your creativity is a gift intended to bring glory to God and hope to the world. Creativity is not just for the "artsy"—it's a tool for problem-solving and expressing the multifaceted wisdom of God.\n\nBezalel in the Bible was filled with the Spirit of God for the specific purpose of artistic work for the Tabernacle. Your work is no less sacred. Today, ask the Holy Spirit to inspire your creative hands and mind to build something that points people back to Him.`,
      category: 'Purpose',
      readTime: '5 min',
      image: 'https://bezaleelforge.github.io/kachi/13.jpg'
    }
  ];

  useEffect(() => {
    const savedPos = sessionStorage.getItem('devotionals_scroll_y');
    if (savedPos) {
      const timer = setTimeout(() => {
        window.scrollTo({ top: parseInt(savedPos, 10), behavior: 'instant' as any });
      }, 150);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      sessionStorage.setItem('devotionals_scroll_y', window.scrollY.toString());
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleShare = (platform: string, devotional: Devotional) => {
    const url = window.location.href;
    const text = `Read today's word: "${devotional.title}" at Kachi Emmanuel Ministries!`;
    let shareUrl = '';
    switch (platform) {
      case 'facebook': shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`; break;
      case 'twitter': shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`; break;
      case 'whatsapp': shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`; break;
      case 'copy':
        navigator.clipboard.writeText(url);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
        return;
    }
    if (shareUrl) window.open(shareUrl, '_blank');
  };

  const filteredDevotionals = devotionals.filter(d => 
    d.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    d.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-transparent min-h-screen text-white pb-20 selection:bg-[#fae78e] selection:text-[#280c2d]">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://bezaleelforge.github.io/kachi/21.jpg" 
            alt="Worship Background" 
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#280c2d]/90 via-[#280c2d]/70 to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#fae78e]/10 border border-[#fae78e]/40 mb-8 backdrop-blur-md shadow-xl">
                <Sparkles className="w-5 h-5 text-[#fae78e]" />
                <span className="text-[12px] uppercase tracking-[0.3em] font-bold text-[#fae78e]">Daily Spiritual Nourishment</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-display font-bold mb-6 tracking-tight drop-shadow-2xl">Daily <span className="text-[#fae78e] italic">Devotionals</span></h1>
            <p className="max-w-2xl mx-auto text-xl text-slate-100 font-light leading-relaxed">
                Unlock spiritual depth every morning. Strengthen your inner man with faith-filled words from the heart of God.
            </p>
        </div>
      </section>

      <section className="px-6 -mt-20 mb-24 relative z-20">
        <div className="max-w-5xl mx-auto bg-black/60 backdrop-blur-3xl rounded-[3.5rem] p-8 md:p-16 border border-[#fae78e]/30 shadow-2xl flex flex-col md:flex-row gap-12 items-center group transition-all hover:border-[#fae78e]/60">
            <div className="w-full md:w-2/5 aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl relative">
                <img 
                    src="https://bezaleelforge.github.io/kachi/18.jpg" 
                    alt="Featured Word" 
                    className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#280c2d] to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 px-5 py-2.5 bg-[#fae78e] text-[#280c2d] text-xs font-black rounded-full uppercase tracking-widest shadow-xl">
                    Featured
                </div>
            </div>
            <div className="w-full md:w-3/5">
                <div className="flex items-center gap-3 text-[#fae78e] mb-5">
                    <Calendar className="w-5 h-5" />
                    <span className="text-sm font-black uppercase tracking-widest drop-shadow-md">May 21, 2024</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white leading-tight">The Peace that Surpasses Understanding</h2>
                <div className="flex items-center gap-2 mb-8">
                  <BookOpen className="w-5 h-5 text-[#fae78e]" />
                  <p className="text-xl text-[#fae78e] font-serif-display italic tracking-wide">Philippians 4:7</p>
                </div>
                <p className="text-slate-100 leading-relaxed mb-10 text-xl font-light">
                    In the middle of the storm, Jesus didn't just calm the waves; He was at peace while the waves were still raging. Peace isn't the absence of trouble...
                </p>
                <button 
                  onClick={() => setSelectedDevotional({
                    date: 'May 21, 2024',
                    title: 'The Peace that Surpasses Understanding',
                    scripture: 'Philippians 4:7',
                    excerpt: 'In the middle of the storm, Jesus didn\'t just calm the waves; He was at peace while the waves were still raging...',
                    fullContent: `In the middle of the storm, Jesus didn't just calm the waves; He was at peace while the waves were still raging. Peace isn't the absence of trouble; it is the presence of God in the midst of it.\n\nThe world offers a temporary peace that depends on everything going right. But the peace of God is different. It is a "shalom" that is whole and complete regardless of the external conditions.\n\nToday, if your heart is troubled, look away from the storm and look unto Jesus. The same voice that commanded the winds can speak peace to your soul. Do not be anxious for anything, but in everything by prayer and supplication, let your requests be made known to God.`,
                    category: 'Peace',
                    readTime: '5 min',
                    image: 'https://bezaleelforge.github.io/kachi/20.jpg'
                  })}
                  className="px-10 py-5 bg-[#fae78e] text-[#280c2d] font-black rounded-2xl shadow-[0_0_25px_rgba(250,231,142,0.5)] hover:bg-white hover:scale-105 transition-all flex items-center gap-3 focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                    Read Today's Word <ArrowRight className="w-6 h-6" />
                </button>
            </div>
        </div>
      </section>

      <section className="px-6 mb-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="relative w-full md:w-1/3">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-[#fae78e]/60 w-5 h-5" />
                <input 
                    type="text" 
                    placeholder="Search spiritual archives..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-14 pr-6 py-5 rounded-2xl bg-[#280c2d]/40 backdrop-blur-md border border-[#fae78e]/20 text-white placeholder-slate-400 focus:outline-none focus:border-[#fae78e] focus:ring-2 focus:ring-[#fae78e] transition-all shadow-xl"
                />
            </div>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredDevotionals.map((devo, i) => (
                <button 
                  key={i} 
                  onClick={() => setSelectedDevotional(devo)}
                  className="bg-black/40 backdrop-blur-xl p-10 rounded-[3rem] border border-[#fae78e]/10 hover:border-[#fae78e]/60 transition-all group cursor-pointer hover:-translate-y-3 relative overflow-hidden flex flex-col text-left focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                    <div className="flex justify-between items-start mb-8">
                        <div className="p-4 bg-[#280c2d]/60 rounded-2xl border border-[#fae78e]/30 text-[#fae78e] group-hover:bg-[#fae78e] group-hover:text-[#280c2d] transition-all duration-500 shadow-lg">
                            <BookMarked className="w-7 h-7" />
                        </div>
                        <div className="flex items-center gap-2 text-[#fae78e]/60 text-[11px] font-black uppercase tracking-[0.2em] bg-white/5 px-3 py-1 rounded-full border border-white/5">
                            <Clock className="w-4 h-4" /> {devo.readTime} Read
                        </div>
                    </div>
                    <p className="text-xs font-black text-[#fae78e] uppercase tracking-[0.3em] mb-3 opacity-80">{devo.date}</p>
                    <h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-[#fae78e] transition-colors leading-tight">{devo.title}</h3>
                    <p className="text-sm text-[#fae78e] italic font-medium mb-6 flex items-center gap-2">
                      <Sparkles className="w-4 h-4" /> {devo.scripture}
                    </p>
                    <p className="text-slate-200 text-lg leading-relaxed mb-10 line-clamp-3 font-light">
                        {devo.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                        <span className="text-[10px] px-4 py-1.5 bg-black/60 rounded-full border border-[#fae78e]/20 text-slate-300 font-black uppercase tracking-widest shadow-inner">
                            {devo.category}
                        </span>
                        <div className="flex items-center gap-3">
                           <span className="text-xs font-black text-[#fae78e] opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">Open Word</span>
                           <div className="w-12 h-12 rounded-full border border-[#fae78e]/30 flex items-center justify-center text-[#fae78e] group-hover:bg-[#fae78e] group-hover:text-[#280c2d] transition-all group-hover:shadow-[0_0_15px_#fae78e]">
                              <ArrowRight className="w-6 h-6" />
                           </div>
                        </div>
                    </div>
                </button>
            ))}
        </div>
      </section>

      {/* READABILITY ENHANCED MODAL */}
      {selectedDevotional && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl animate-in fade-in duration-500" onClick={() => setSelectedDevotional(null)}></div>
            <div className="relative w-full max-w-3xl max-h-[90vh] bg-[#1a081d] rounded-[3.5rem] shadow-[0_0_100px_rgba(0,0,0,0.8)] overflow-y-auto border border-[#fae78e]/30 animate-in zoom-in-95 duration-500 custom-scrollbar" role="dialog" aria-modal="true" aria-labelledby="modal-title">
                <div className="relative h-72 md:h-80 overflow-hidden">
                    <img 
                        src={selectedDevotional.image || 'https://bezaleelforge.github.io/kachi/17.jpg'} 
                        alt={selectedDevotional.title} 
                        className="w-full h-full object-cover grayscale opacity-40 group-hover:opacity-60 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a081d] via-[#1a081d]/40 to-transparent"></div>
                    <button 
                        onClick={() => setSelectedDevotional(null)}
                        className="absolute top-8 right-8 p-4 bg-black/50 hover:bg-[#fae78e] text-white hover:text-[#280c2d] rounded-full transition-all border border-white/10 shadow-2xl focus-visible:ring-2 focus-visible:ring-[#fae78e] z-[110]"
                        aria-label="Close"
                    >
                        <X className="w-7 h-7" />
                    </button>
                    <div className="absolute bottom-10 left-10 right-10">
                         <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-[#fae78e] text-[#280c2d] text-[11px] font-black rounded-full uppercase tracking-widest mb-4 shadow-xl">
                            <Sparkles className="w-3.5 h-3.5" /> {selectedDevotional.category}
                         </div>
                         <h2 id="modal-title" className="text-4xl md:text-6xl font-display font-bold text-white leading-tight drop-shadow-xl">{selectedDevotional.title}</h2>
                    </div>
                </div>

                <div className="p-10 md:p-16">
                    <div className="flex flex-wrap items-center gap-6 mb-12 text-slate-400 text-sm border-b border-white/5 pb-8">
                        <div className="flex items-center gap-3">
                            <Calendar className="w-5 h-5 text-[#fae78e]" />
                            <span className="font-bold text-white tracking-wide">{selectedDevotional.date}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-[#fae78e]" />
                            <span className="font-bold text-white tracking-wide">{selectedDevotional.readTime} study</span>
                        </div>
                    </div>

                    <div className="mb-12 p-10 bg-black/40 rounded-[2.5rem] border-l-[6px] border-[#fae78e] shadow-2xl relative overflow-hidden">
                        <div className="absolute -top-4 -left-4 opacity-5 text-white">
                          <BookMarked className="w-24 h-24" />
                        </div>
                        <p className="text-3xl md:text-4xl font-serif-display italic text-[#fae78e] leading-snug relative z-10">
                            "{selectedDevotional.scripture}"
                        </p>
                    </div>

                    {/* ENHANCED READABILITY CONTENT */}
                    <div className="text-slate-100 leading-[2.1] font-light text-xl md:text-2xl space-y-12 mb-20">
                        {selectedDevotional.fullContent.split('\n\n').map((para, idx) => (
                            <p key={idx} className="drop-shadow-sm">{para}</p>
                        ))}
                    </div>

                    {/* CLEAR & VISIBLE SOCIAL SHARE */}
                    <div className="mt-20 pt-12 border-t border-[#fae78e]/20 flex flex-col md:flex-row justify-between items-center gap-10">
                         <div className="text-center md:text-left">
                            <p className="text-xs uppercase tracking-[0.4em] text-[#fae78e] font-black mb-6 flex items-center justify-center md:justify-start gap-3">
                              <Share2 className="w-4 h-4" /> Share This Revelation
                            </p>
                            <div className="flex gap-4">
                                <button 
                                  onClick={() => handleShare('facebook', selectedDevotional)} 
                                  className="w-14 h-14 rounded-2xl bg-[#1877F2]/10 border border-[#1877F2]/40 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white hover:scale-110 transition-all shadow-xl"
                                  title="Share on Facebook"
                                >
                                  <Facebook className="w-7 h-7" />
                                </button>
                                <button 
                                  onClick={() => handleShare('twitter', selectedDevotional)} 
                                  className="w-14 h-14 rounded-2xl bg-white/5 border border-white/20 flex items-center justify-center text-white hover:bg-black hover:border-white transition-all hover:scale-110 shadow-xl"
                                  title="Share on X"
                                >
                                  <Twitter className="w-7 h-7" />
                                </button>
                                <button 
                                  onClick={() => handleShare('whatsapp', selectedDevotional)} 
                                  className="w-14 h-14 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/40 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white hover:scale-110 transition-all shadow-xl"
                                  title="Share on WhatsApp"
                                >
                                  <MessageCircle className="w-7 h-7" />
                                </button>
                                <button 
                                  onClick={() => handleShare('copy', selectedDevotional)} 
                                  className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center transition-all hover:scale-110 ${copySuccess ? 'text-green-500 bg-green-500/10' : 'text-slate-400 hover:text-white'}`}
                                  title="Copy Link"
                                >
                                    {copySuccess ? <Check className="w-7 h-7" /> : <Copy className="w-7 h-7" />}
                                </button>
                            </div>
                         </div>
                         <button 
                            onClick={() => setSelectedDevotional(null)} 
                            className="px-12 py-5 bg-[#fae78e] text-[#280c2d] font-black rounded-2xl hover:bg-white hover:scale-105 transition-all active:scale-95 shadow-[0_0_30px_rgba(250,231,142,0.6)] text-lg"
                         >
                           Finish Reading
                         </button>
                    </div>
                </div>
            </div>
        </div>
      )}

      <section className="px-6 mt-32">
        <div className="max-w-4xl mx-auto p-12 md:p-20 bg-gradient-to-br from-[#280c2d] via-[#1a081d] to-black rounded-[4rem] border border-[#fae78e]/30 text-center relative overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,231,142,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#fae78e]/5 rounded-full blur-[100px] pointer-events-none"></div>
            
            <Star className="w-16 h-16 text-[#fae78e] mx-auto mb-8 animate-pulse drop-shadow-[0_0_15px_#fae78e]" aria-hidden="true" />
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 tracking-tight text-white">Never Miss a Word</h3>
            <p className="text-xl text-slate-300 mb-12 max-w-xl mx-auto font-light leading-relaxed">Join 50,000+ believers receiving daily spiritual insights delivered directly to their inbox every morning.</p>
            
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto relative z-10">
                <input 
                  type="email" 
                  placeholder="Your spiritual email address..." 
                  required 
                  className="flex-grow px-8 py-5 rounded-2xl bg-black/60 border border-[#fae78e]/30 text-white placeholder-slate-500 focus:outline-none focus:border-[#fae78e] focus:ring-2 focus:ring-[#fae78e] text-lg transition-all" 
                  aria-label="Email for devotional subscription" 
                />
                <button 
                  type="submit" 
                  className="px-10 py-5 bg-[#fae78e] text-[#280c2d] font-black rounded-2xl hover:bg-white transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(250,231,142,0.4)]"
                >
                  Join Us
                </button>
            </form>
        </div>
      </section>
    </div>
  );
};

export default DevotionalsPage;