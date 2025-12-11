import React, { useState } from 'react';
import { Heart, Globe, Play, Users, DollarSign, CheckCircle2, ArrowRight, X } from 'lucide-react';
import { Page } from '../App';

interface PartnerPageProps {
  onNavigate: (page: Page, sectionId?: string) => void;
}

const PartnerPage: React.FC<PartnerPageProps> = ({ onNavigate }) => {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [amount, setAmount] = useState('50');
  const [customAmount, setCustomAmount] = useState(''); // New state for custom amount input
  const [step, setStep] = useState(1);

  const stats = [
    { label: 'Lives Impacted', value: '1M+', icon: Users },
    { label: 'Countries Reached', value: '15+', icon: Globe },
    { label: 'Media Productions', value: '500+', icon: Play },
    { label: 'Community Projects', value: '50+', icon: Heart },
  ];

  const amounts = ['25', '50', '100', '250'];

  const handleAmountSelect = (selectedAmount: string, type: 'one-time' | 'monthly') => {
    setAmount(selectedAmount);
    setDonationType(type);
    setCustomAmount(''); // Clear custom amount when a preset is selected
    setStep(2);
  };

  const handleCustomAmountSubmit = (type: 'one-time' | 'monthly') => {
    if (customAmount && parseFloat(customAmount) > 0) {
      setAmount(customAmount);
      setDonationType(type);
      setStep(2);
    } else {
      alert('Please enter a valid custom amount.');
    }
  };

  return (
    <div className="bg-black text-white transition-colors duration-300">
      {/* Hero Section with Background Image */}
      <section className="py-24 relative overflow-hidden min-h-[60vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
             <img 
                src="https://bezaleelforge.github.io/kachi/14.jpg" 
                alt="Partner Background" 
                className="w-full h-full object-cover opacity-50"
             />
             <div className="absolute inset-0 bg-gradient-to-r from-[#280c2d]/90 to-black/70"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-4 px-4 py-1 rounded-full border border-[#fae78e] text-[#fae78e] text-xs font-bold uppercase tracking-widest bg-black/30 backdrop-blur-sm">
             Kingdom Impact
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-white drop-shadow-lg">Partner With Us</h1>
          <p className="text-xl text-slate-200 max-w-2xl mx-auto leading-relaxed font-light">
            Join us in spreading the Gospel and transforming lives through your prayers, service, and financial support.
          </p>
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => {
                setStep(1); // Ensure we are on step 1 if navigating from hero
                document.getElementById('support-options')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-10 py-4 bg-[#fae78e] text-[#280c2d] font-bold rounded-xl shadow-[0_0_20px_#fae78e] hover:bg-white hover:scale-105 transition-all transform active:scale-95 focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
            >
              Donate Now
            </button>
          </div>
        </div>
      </section>

      {/* Kingdom Partnership Section */}
      <section className="py-20 bg-[#050505] animate-in fade-in slide-in-from-bottom-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold text-white mb-6">Kingdom Partnership</h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-8 font-light">
              Your partnership enables us to reach more souls, produce life-changing media content, and support communities in need. Together, we can make an eternal impact for the Kingdom of God.
            </p>
            <button 
              onClick={() => {
                setStep(1);
                document.getElementById('support-options')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-3 text-[#fae78e] font-bold text-lg group hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-md"
            >
              Become a Partner Today <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="p-8 bg-[#280c2d] rounded-3xl border border-[#fae78e]/10 text-center group hover:bg-[#fae78e] hover:scale-105 transition-all duration-500 shadow-lg">
                <s.icon className="w-8 h-8 text-[#fae78e] mx-auto mb-4 transition-colors group-hover:text-[#280c2d]" />
                <div className="text-3xl font-bold text-white mb-1 group-hover:text-[#280c2d] transition-colors">{s.value}</div>
                <div className="text-xs uppercase tracking-widest text-slate-400 group-hover:text-[#280c2d] transition-colors font-bold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Options Section */}
      <section id="support-options" className="py-24 bg-[#0a0a0a] animate-in fade-in slide-in-from-bottom-8 delay-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-16 text-white">Support Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* One-Time Gift */}
            <div className="bg-[#280c2d] p-10 rounded-[2.5rem] shadow-2xl border border-[#fae78e]/10 hover:border-[#fae78e]/30 transition-colors">
              <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center mb-6 border border-[#fae78e]/20">
                <DollarSign className="w-8 h-8 text-[#fae78e]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">One-Time Gift</h3>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed">Make a single donation to support specific ministry projects and outreach programs.</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {amounts.map(a => (
                  <button 
                    key={a}
                    onClick={() => handleAmountSelect(a, 'one-time')}
                    className={`py-3 border rounded-xl font-bold transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#280c2d] ${amount === a && donationType === 'one-time' && step === 2 ? 'border-[#fae78e] bg-[#fae78e] text-[#280c2d]' : 'border-[#fae78e]/30 text-white hover:border-[#fae78e]'}`}
                  >
                    ${a}
                  </button>
                ))}
                {/* Custom Amount for One-Time */}
                <input
                  type="number"
                  placeholder="Custom amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  onBlur={() => handleCustomAmountSubmit('one-time')} // Trigger on blur
                  className="w-full px-4 py-3 rounded-xl border border-[#fae78e]/30 bg-black/50 text-white placeholder-slate-500 focus:outline-none focus:border-[#fae78e] transition-colors focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#280c2d]"
                />
              </div>
              <button 
                onClick={() => handleCustomAmountSubmit('one-time')}
                className="w-full py-4 bg-white text-[#280c2d] font-bold rounded-xl active:scale-95 transition-all hover:bg-slate-200 focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#280c2d]"
              >
                Give One-Time Gift
              </button>
            </div>

            {/* Monthly Partnership */}
            <div className="bg-[#280c2d] p-10 rounded-[2.5rem] shadow-[0_0_30px_rgba(40,12,45,0.8)] border border-[#fae78e]/40 relative overflow-hidden group">
               {/* Glow effect */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-[#fae78e]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#fae78e]/20 transition-colors"></div>
              
              <div className="absolute top-0 right-0 p-4">
                <span className="bg-[#fae78e] text-[#280c2d] text-[10px] font-bold px-3 py-1 rounded-full uppercase shadow-[0_0_10px_#fae78e]">Sustainable</span>
              </div>
              <div className="w-14 h-14 bg-[#fae78e]/10 rounded-2xl flex items-center justify-center mb-6 border border-[#fae78e]/30">
                <Heart className="w-8 h-8 text-[#fae78e] fill-[#fae78e]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Monthly Partnership</h3>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed">Become a monthly partner to provide consistent support for ongoing ministry operations.</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {amounts.map(a => (
                  <button 
                    key={a}
                    onClick={() => handleAmountSelect(a, 'monthly')}
                    className={`py-3 border rounded-xl font-bold transition-all active:scale-95 focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#280c2d] ${amount === a && donationType === 'monthly' && step === 2 ? 'border-[#fae78e] bg-[#fae78e] text-[#280c2d]' : 'border-[#fae78e]/30 text-white hover:border-[#fae78e]'}`}
                  >
                    ${a}
                  </button>
                ))}
                 {/* Custom Amount for Monthly */}
                <input
                  type="number"
                  placeholder="Custom amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  onBlur={() => handleCustomAmountSubmit('monthly')} // Trigger on blur
                  className="w-full px-4 py-3 rounded-xl border border-[#fae78e]/30 bg-black/50 text-white placeholder-slate-500 focus:outline-none focus:border-[#fae78e] transition-colors focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#280c2d]"
                />
              </div>
              <button 
                onClick={() => handleCustomAmountSubmit('monthly')}
                className="w-full py-4 bg-[#fae78e] text-[#280c2d] font-bold rounded-xl active:scale-95 transition-all hover:bg-white hover:scale-[1.02] shadow-[0_0_15px_rgba(250,231,142,0.4)] focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                Become Monthly Partner
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Donation Form Step */}
      {step === 2 && (
        <section id="donation-form" className="py-24 animate-in fade-in slide-in-from-bottom-8 bg-black border-t border-[#fae78e]/10">
          <div className="max-w-2xl mx-auto px-4">
            <div className="bg-[#280c2d] p-8 md:p-12 rounded-[3rem] border border-[#fae78e]/20 shadow-2xl relative overflow-hidden">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-display font-bold mb-2 text-white">Complete Your Donation</h2>
                <p className="text-[#fae78e] font-bold">{donationType === 'one-time' ? 'One-time' : 'Monthly'} gift of ${amount}</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Redirecting to secure gateway...'); }}>
                <div>
                  <label htmlFor="fullName" className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-widest">Full Name</label>
                  <input type="text" id="fullName" placeholder="Enter your full name" className="w-full px-6 py-4 rounded-xl bg-black/50 border border-[#fae78e]/20 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#fae78e] focus:border-transparent transition-colors focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#280c2d]" required />
                </div>
                <div>
                  <label htmlFor="emailAddress" className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-widest">Email Address</label>
                  <input type="email" id="emailAddress" placeholder="Enter your email" className="w-full px-6 py-4 rounded-xl bg-black/50 border border-[#fae78e]/20 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-[#fae78e] focus:border-transparent transition-colors focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#280c2d]" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="donationAmount" className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-widest">Amount ($)</label>
                    <input type="number" id="donationAmount" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full px-6 py-4 rounded-xl bg-black/50 border border-[#fae78e]/20 text-white focus:outline-none focus:ring-2 focus:ring-[#fae78e] focus:border-transparent transition-colors focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#280c2d]" required />
                  </div>
                  <div>
                    <label htmlFor="donationType" className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-widest">Donation Type</label>
                    <input type="text" id="donationType" value={donationType === 'one-time' ? 'One-Time Gift' : 'Monthly Partnership'} readOnly className="w-full px-6 py-4 rounded-xl bg-black/50 border border-[#fae78e]/20 text-white cursor-not-allowed focus:outline-none focus:border-[#fae78e] transition-colors" />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <button 
                        type="button" 
                        onClick={() => {
                            setStep(1); 
                            document.getElementById('support-options')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-full sm:w-auto flex-1 py-4 bg-white/10 text-white font-bold rounded-xl shadow-lg hover:bg-white/20 transition-all active:scale-95 flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#280c2d]"
                    >
                        <X className="w-5 h-5" />
                        Back to Support Options
                    </button>
                     <button type="submit" className="w-full sm:w-auto flex-1 py-4 bg-[#fae78e] text-[#280c2d] font-bold rounded-xl shadow-lg hover:bg-white transition-all active:scale-95 flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#fae78e] focus-visible:ring-offset-2 focus-visible:ring-offset-[#280c2d]">
                        <DollarSign className="w-5 h-5" />
                        Process Donation
                     </button>
                </div>
              </form>
              
              <div className="mt-8 pt-8 border-t border-[#fae78e]/10 flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-sm text-slate-400">
                    Your donation is securely processed. Kachi Emmanuel Ministries is a registered non-profit organization. All donations are tax-deductible where applicable.
                  </p>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default PartnerPage;