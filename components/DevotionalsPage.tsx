
import React, { useState } from 'react';
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
      fullContent: `In a world driven by what we can see, touch, and measure, the call of the believer is to walk by a different standard. To walk by faith is to trust God even when the circumstances don't make sense. It means relying on His promises rather than our perception.

      Abraham left his homeland not knowing where he was going, yet he moved because he heard the voice of God. Our journey is similar. God may not show us the entire map, but He promise to be our guide. 
      
      When fear whispers that the road is too dark, remember that faith is the evidence of things not seen. Today, choose to lean on His Word more than your worries. Every step taken in faith is a step towards your divine destiny.`,
      category: 'Spiritual Growth',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      date: 'May 19, 2024',
      title: 'The Power of a Renewed Mind',
      scripture: 'Romans 12:2',
      excerpt: 'Transformation doesn\'t start with our actions; it starts with our thinking. When we align our thoughts with God\'s Word...',
      fullContent: `Transformation doesn't start with our actions; it starts with our thinking. The battleground for your life is your mind. Every action is a result of a thought. If we want to change our lives, we must first allow the Holy Spirit to change the way we think.
      
      Conforming to this world is easy because it happens by default. But being transformed requires a conscious decision to soak in the scriptures. As we meditate on God's Word, our old patterns of thinking are replaced with Kingdom perspectives.
      
      You are not defined by your past mistakes or the labels others have placed on you. You are defined by what God says about you. Today, guard your thoughts and filter everything through the lens of truth.`,
      category: 'Mental Health',
      readTime: '4 min',
      image: 'https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      date: 'May 18, 2024',
      title: 'Strength in the Secret Place',
      scripture: 'Psalm 91:1',
      excerpt: 'Public victories are won in private prayer. Discovering the strength that comes from intimacy with the Father...',
      fullContent: `Public victories are won in private prayer. We often admire those who stand strong in public challenges, but their strength is birthed in the "secret place" of prayer and intimacy with God.
      
      The secret place is not just a location; it's a posture of the heart. It's where we strip away our titles, our worries, and our masks to just be with the Father. In this place of stillness, we receive the strategy, the comfort, and the power needed for daily living.
      
      Don't let the busyness of life rob you of your quiet time. Jesus Himself often withdrew to lonely places to pray. If the Son of God needed intimacy with the Father, how much more do we? Make time today to dwell under the shadow of the Almighty.`,
      category: 'Prayer',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1555421689-d6847113196f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      date: 'May 17, 2024',
      title: 'Creativity for the Kingdom',
      scripture: 'Exodus 31:3',
      excerpt: 'God is the ultimate Creator. When we use our talents and creativity, we reflect His image to a world in need of beauty...',
      fullContent: `God is the ultimate Creator. From the vastness of the cosmos to the intricate design of a snowflake, His creativity is on display. As those made in His image, we are also endowed with creative capacity.
      
      Whether you write, paint, code, speak, or design, your creativity is a gift intended to bring glory to God and hope to the world. Creativity is not just for the "artsy"—it's a tool for problem-solving and expressing the multifaceted wisdom of God.
      
      Bezalel in the Bible was filled with the Spirit of God for the specific purpose of artistic work for the Tabernacle. Your work is no less sacred. Today, ask the Holy Spirit to inspire your creative hands and mind to build something that points people back to Him.`,
      category: 'Purpose',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1511632765486-a01980968a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const handleShare = (platform: string, devotional: Devotional) => {
    const url = window.location.href;
    const text = `Read today's word: "${devotional.title}" at Kachi Emmanuel Ministries!`;
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
    <div className="bg-black min-h-screen text-white pb-20 selection:bg-[#fae78e] selection:text-[#280c2d]">
      {/* Header */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#280c2d] to-black"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#fae78e]/10 border border-[#fae78e]/30 mb-8 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-[#fae78e]" />
                <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-[#fae78e]">Daily Spiritual Nourishment</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 tracking-tight">Daily <span className="text-[#fae78e]">Devotionals</span></h1>
            <p className="max-w-2xl mx-auto text-lg text-slate-400 font-light">
                Start your day with truth. Dive into our daily readings designed to strengthen your faith and deepen your walk with Christ.
            </p>
        </div>
      </section>

      {/* Featured Devotional */}
      <section className="px-6 -mt-16 mb-24 relative z-20">
        <div className="max-w-5xl mx-auto bg-[#280c2d] rounded-[3rem] p-8 md:p-16 border border-[#fae78e]/20 shadow-2xl flex flex-col md:flex-row gap-12 items-center group">
            <div className="w-full md:w-1/2 aspect-square rounded-[2rem] overflow-hidden shadow-2xl relative">
                <img 
                    src="https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Featured Devotional" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-40"></div>
                <div className="absolute top-6 left-6 px-4 py-2 bg-[#fae78e] text-[#280c2d] text-xs font-bold rounded-full uppercase tracking-widest">
                    Today's Word
                </div>
            </div>
            <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3 text-[#fae78e] mb-4">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm font-bold uppercase tracking-widest">May 21, 2024</span>
                </div>
                <h2 className="text-3xl font-display font-bold mb-4 text-white">The Peace that Surpasses Understanding</h2>
                <p className="text-[#fae78e] font-serif-display italic mb-6">Scripture: Philippians 4:7</p>
                <p className="text-slate-300 leading-relaxed mb-8 font-light">
                    In the middle of the storm, Jesus didn't just calm the waves; He was at peace while the waves were still raging. Peace isn't the absence of trouble...
                </p>
                <div className="flex items-center gap-4">
                  <button 
                    onClick={() => setSelectedDevotional({
                      date: 'May 21, 2024',
                      title: 'The Peace that Surpasses Understanding',
                      scripture: 'Philippians 4:7',
                      excerpt: 'In the middle of the storm, Jesus didn\'t just calm the waves; He was at peace while the waves were still raging...',
                      fullContent: `In the middle of the storm, Jesus didn't just calm the waves; He was at peace while the waves were still raging. Peace isn't the absence of trouble; it is the presence of God in the midst of it. 
                      
                      The world offers a temporary peace that depends on everything going right. But the peace of God is different. It is a "shalom" that is whole and complete regardless of the external conditions. 
                      
                      Today, if your heart is troubled, look away from the storm and look unto Jesus. The same voice that commanded the winds can speak peace to your soul. Do not be anxious for anything, but in everything by prayer and supplication, let your requests be made known to God.`,
                      category: 'Peace',
                      readTime: '5 min',
                      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
                    })}
                    className="px-8 py-4 bg-[#fae78e] text-[#280c2d] font-bold rounded-xl shadow-[0_0_15px_#fae78e] hover:bg-white hover:scale-105 transition-all flex items-center gap-2"
                  >
                      Read Full Word <ArrowRight className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={() => handleShare('whatsapp', {title: 'The Peace that Surpasses Understanding'} as Devotional)}
                    className="w-12 h-12 rounded-xl bg-white/5 hover:bg-[#25D366] text-white hover:text-white transition-all flex items-center justify-center border border-white/10"
                    title="Share via WhatsApp"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
            </div>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="px-6 mb-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
                <input 
                    type="text" 
                    placeholder="Search devotionals..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-6 py-4 rounded-2xl bg-[#280c2d]/50 border border-[#fae78e]/10 text-white focus:outline-none focus:border-[#fae78e] transition-colors"
                />
            </div>
            <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto">
                {['All', 'Spiritual Growth', 'Prayer', 'Purpose', 'Faith'].map(cat => (
                    <button key={cat} className="whitespace-nowrap px-6 py-2 rounded-full border border-[#fae78e]/20 text-xs font-bold uppercase tracking-widest hover:bg-[#fae78e] hover:text-[#280c2d] transition-all">
                        {cat}
                    </button>
                ))}
            </div>
        </div>
      </section>

      {/* Devotionals List */}
      <section className="px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredDevotionals.map((devo, i) => (
                <div 
                  key={i} 
                  onClick={() => setSelectedDevotional(devo)}
                  className="bg-[#280c2d]/30 backdrop-blur-sm p-8 rounded-[2.5rem] border border-[#fae78e]/10 hover:border-[#fae78e]/40 transition-all group cursor-pointer hover:-translate-y-2 relative overflow-hidden"
                >
                    <div className="flex justify-between items-start mb-6">
                        <div className="p-3 bg-black rounded-xl border border-[#fae78e]/20 text-[#fae78e]">
                            <BookMarked className="w-6 h-6" />
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 text-[10px] font-bold uppercase tracking-widest">
                            <Clock className="w-3 h-3" /> {devo.readTime}
                        </div>
                    </div>
                    <p className="text-[10px] font-bold text-[#fae78e] uppercase tracking-[0.2em] mb-2">{devo.date}</p>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#fae78e] transition-colors">{devo.title}</h3>
                    <p className="text-xs text-slate-400 italic mb-4">Focus: {devo.scripture}</p>
                    <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-2 font-light">
                        {devo.excerpt}
                    </p>
                    <div className="flex items-center justify-between mt-auto">
                        <span className="text-[10px] px-3 py-1 bg-black rounded-full border border-[#fae78e]/10 text-slate-500 font-bold uppercase tracking-widest">
                            {devo.category}
                        </span>
                        <div className="flex items-center gap-2">
                           <span className="text-xs font-bold text-[#fae78e] opacity-0 group-hover:opacity-100 transition-opacity">Read More</span>
                           <div className="w-10 h-10 rounded-full border border-[#fae78e]/20 flex items-center justify-center text-[#fae78e] group-hover:bg-[#fae78e] group-hover:text-[#280c2d] transition-all">
                              <ArrowRight className="w-5 h-5" />
                           </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Devotional Detail Modal */}
      {selectedDevotional && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-xl animate-in fade-in duration-500" onClick={() => setSelectedDevotional(null)}></div>
            <div className="relative w-full max-w-2xl max-h-[90vh] bg-[#280c2d] rounded-[3rem] shadow-2xl overflow-y-auto border border-[#fae78e]/20 animate-in zoom-in-95 duration-500 custom-scrollbar">
                
                {/* Modal Header Image */}
                <div className="relative h-64 overflow-hidden">
                    <img 
                        src={selectedDevotional.image || 'https://images.unsplash.com/photo-1504052434569-70ad5836ab65?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'} 
                        alt={selectedDevotional.title} 
                        className="w-full h-full object-cover grayscale opacity-50"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#280c2d] to-transparent"></div>
                    <button 
                        onClick={() => setSelectedDevotional(null)}
                        className="absolute top-6 right-6 p-3 bg-black/50 hover:bg-[#fae78e] text-white hover:text-[#280c2d] rounded-full transition-all border border-white/10"
                    >
                        <X className="w-6 h-6" />
                    </button>
                    <div className="absolute bottom-8 left-10">
                         <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#fae78e] text-[#280c2d] text-[10px] font-black rounded-full uppercase tracking-widest mb-3">
                            {selectedDevotional.category}
                         </div>
                         <h2 className="text-3xl md:text-4xl font-display font-bold text-white leading-tight">{selectedDevotional.title}</h2>
                    </div>
                </div>

                <div className="p-10">
                    <div className="flex flex-wrap items-center gap-6 mb-8 text-slate-400 text-sm border-b border-[#fae78e]/10 pb-6">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-[#fae78e]" />
                            {selectedDevotional.date}
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-[#fae78e]" />
                            {selectedDevotional.readTime} Read
                        </div>
                    </div>

                    <div className="mb-8 p-6 bg-black/30 rounded-2xl border-l-4 border-[#fae78e]">
                        <p className="text-xl font-serif-display italic text-[#fae78e] leading-relaxed">
                            "{selectedDevotional.scripture}"
                        </p>
                    </div>

                    <div className="text-slate-300 leading-relaxed font-light text-lg space-y-6">
                        {selectedDevotional.fullContent.split('\n\n').map((para, idx) => (
                            <p key={idx}>{para}</p>
                        ))}
                    </div>

                    {/* Modal Actions */}
                    <div className="mt-12 pt-10 border-t border-[#fae78e]/10 flex flex-col md:flex-row justify-between items-center gap-8">
                         <div className="text-center md:text-left">
                            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold mb-3">Share this word</p>
                            <div className="flex gap-3">
                                <button 
                                    onClick={() => handleShare('facebook', selectedDevotional)}
                                    className="w-12 h-12 rounded-full bg-[#1877F2]/10 border border-[#1877F2]/20 flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all"
                                >
                                    <Facebook className="w-5 h-5" />
                                </button>
                                <button 
                                    onClick={() => handleShare('twitter', selectedDevotional)}
                                    className="w-12 h-12 rounded-full bg-[#1DA1F2]/10 border border-[#1DA1F2]/20 flex items-center justify-center text-[#1DA1F2] hover:bg-[#1DA1F2] hover:text-white transition-all"
                                >
                                    <Twitter className="w-5 h-5" />
                                </button>
                                <button 
                                    onClick={() => handleShare('whatsapp', selectedDevotional)}
                                    className="w-12 h-12 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                </button>
                                <button 
                                    onClick={() => handleShare('copy', selectedDevotional)}
                                    className={`w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all ${copySuccess ? 'text-green-500' : 'text-slate-400 hover:text-white'}`}
                                    title="Copy Link"
                                >
                                    {copySuccess ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                                </button>
                            </div>
                         </div>
                         <button 
                            onClick={() => setSelectedDevotional(null)}
                            className="px-10 py-4 bg-[#fae78e] text-[#280c2d] font-bold rounded-2xl hover:bg-white transition-all active:scale-95"
                         >
                            Finish Reading
                         </button>
                    </div>
                </div>
            </div>
        </div>
      )}

      {/* Newsletter / CTA */}
      <section className="px-6 mt-24">
        <div className="max-w-4xl mx-auto p-12 bg-gradient-to-br from-[#280c2d] to-black rounded-[3rem] border border-[#fae78e]/20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(250,231,142,0.05),transparent_70%)]"></div>
            <Star className="w-10 h-10 text-[#fae78e] mx-auto mb-6 animate-pulse" />
            <h3 className="text-3xl font-display font-bold mb-4">Never Miss a Word</h3>
            <p className="text-slate-400 mb-8 max-w-lg mx-auto">Get daily spiritual insights delivered directly to your inbox every morning at 6 AM.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto relative z-10">
                <input type="email" placeholder="Your email address" className="flex-grow px-6 py-4 rounded-xl bg-black border border-[#fae78e]/20 text-white focus:outline-none focus:border-[#fae78e]" />
                <button className="px-8 py-4 bg-[#fae78e] text-[#280c2d] font-bold rounded-xl hover:bg-white transition-colors">Subscribe</button>
            </div>
        </div>
      </section>
    </div>
  );
};

export default DevotionalsPage;
