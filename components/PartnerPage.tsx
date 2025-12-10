import React, { useState } from 'react';
import { Heart, Globe, Play, Users, DollarSign, CheckCircle2, ArrowRight } from 'lucide-react';
import { Page } from '../App';

interface PartnerPageProps {
  onNavigate: (page: Page, sectionId?: string) => void;
}

const PartnerPage: React.FC<PartnerPageProps> = ({ onNavigate }) => {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const [amount, setAmount] = useState('50');
  const [step, setStep] = useState(1);

  const stats = [
    { label: 'Lives Impacted', value: '1M+', icon: Users },
    { label: 'Countries Reached', value: '15+', icon: Globe },
    { label: 'Media Productions', value: '500+', icon: Play },
    { label: 'Community Projects', value: '50+', icon: Heart },
  ];

  const amounts = ['25', '50', '100', '250'];

  return (
    <div className="bg-white dark:bg-[#1a1a1a] transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-24 bg-[#FFDE59] text-[#1a1a1a] overflow-hidden relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(black 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 text-[#1a1a1a]">Partner With Us</h1>
          <p className="text-xl text-slate-800 max-w-2xl mx-auto leading-relaxed font-medium">
            Join us in spreading the Gospel and transforming lives through your prayers, service, and financial support.
          </p>
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => setStep(1)}
              className="px-10 py-4 bg-[#1a1a1a] text-[#FFDE59] font-bold rounded-xl shadow-2xl hover:bg-black hover:text-[#FFDE59] transition-all transform hover:-translate-y-1 active:scale-95"
            >
              Donate Now
            </button>
          </div>
        </div>
      </section>

      {/* Kingdom Partnership Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-display font-bold text-[#1a1a1a] dark:text-white mb-6">Kingdom Partnership</h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-8">
              Your partnership enables us to reach more souls, produce life-changing media content, and support communities in need. Together, we can make an eternal impact for the Kingdom of God.
            </p>
            <button className="flex items-center gap-3 text-black dark:text-[#FFDE59] font-bold text-lg group">
              Become a Partner Today <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="p-8 bg-slate-50 dark:bg-white/5 rounded-3xl border border-slate-100 dark:border-white/10 text-center group hover:bg-[#FFDE59] transition-colors duration-500">
                <s.icon className="w-8 h-8 text-[#1a1a1a] mx-auto mb-4 transition-colors" />
                <div className="text-3xl font-bold text-[#1a1a1a] dark:text-white mb-1 group-hover:text-black transition-colors">{s.value}</div>
                <div className="text-xs uppercase tracking-widest text-slate-500 group-hover:text-slate-900 transition-colors">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Options Section */}
      <section className="py-24 bg-slate-50 dark:bg-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-16 text-[#1a1a1a] dark:text-white">Support Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* One-Time Gift */}
            <div className="bg-white dark:bg-[#1a1a1a] p-10 rounded-[2.5rem] shadow-xl border border-slate-100 dark:border-white/10">
              <div className="w-14 h-14 bg-[#1a1a1a]/5 rounded-2xl flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-[#1a1a1a] dark:text-[#FFDE59]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4">One-Time Gift</h3>
              <p className="text-slate-500 mb-8 text-sm">Make a single donation to support specific ministry projects and outreach programs.</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {amounts.map(a => (
                  <button 
                    key={a}
                    onClick={() => { setAmount(a); setDonationType('one-time'); setStep(2); }}
                    className={`py-3 border-2 rounded-xl font-bold transition-all active:scale-95 ${amount === a && donationType === 'one-time' ? 'border-[#FFDE59] bg-[#FFDE59]/20 text-black dark:text-[#FFDE59]' : 'border-slate-100 dark:border-white/10 hover:border-[#FFDE59] hover:text-black dark:hover:text-[#FFDE59]'}`}
                  >
                    ${a}
                  </button>
                ))}
              </div>
              <button 
                onClick={() => { setDonationType('one-time'); setStep(2); }}
                className="w-full py-4 bg-[#1a1a1a] dark:bg-white dark:text-[#1a1a1a] text-white font-bold rounded-xl active:scale-95 transition-all"
              >
                Give One-Time Gift
              </button>
            </div>

            {/* Monthly Partnership */}
            <div className="bg-white dark:bg-[#1a1a1a] p-10 rounded-[2.5rem] shadow-xl border border-[#FFDE59]/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <span className="bg-[#FFDE59] text-black text-[10px] font-bold px-3 py-1 rounded-full uppercase">Sustainable</span>
              </div>
              <div className="w-14 h-14 bg-[#FFDE59]/20 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-[#1a1a1a] dark:text-[#FFDE59]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a1a1a] dark:text-white mb-4">Monthly Partnership</h3>
              <p className="text-slate-500 mb-8 text-sm">Become a monthly partner to provide consistent support for ongoing ministry operations.</p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {amounts.map(a => (
                  <button 
                    key={a}
                    onClick={() => { setAmount(a); setDonationType('monthly'); setStep(2); }}
                    className={`py-3 border-2 rounded-xl font-bold transition-all active:scale-95 ${amount === a && donationType === 'monthly' ? 'border-[#FFDE59] bg-[#FFDE59]/20 text-black dark:text-[#FFDE59]' : 'border-slate-100 dark:border-white/10 hover:border-[#FFDE59] hover:text-black dark:hover:text-[#FFDE59]'}`}
                  >
                    ${a}
                  </button>
                ))}
              </div>
              <button 
                onClick={() => { setDonationType('monthly'); setStep(2); }}
                className="w-full py-4 bg-[#FFDE59] text-[#1a1a1a] font-bold rounded-xl active:scale-95 transition-all"
              >
                Become Monthly Partner
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Donation Form Step */}
      {step === 2 && (
        <section id="donation-form" className="py-24 animate-in fade-in slide-in-from-bottom-8">
          <div className="max-w-2xl mx-auto px-4">
            <div className="bg-white dark:bg-[#1a1a1a] p-8 md:p-12 rounded-[3rem] border border-slate-200 dark:border-white/10 shadow-2xl">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-display font-bold mb-2 text-[#1a1a1a] dark:text-white">Complete Your Donation</h2>
                <p className="text-slate-500">{donationType === 'one-time' ? 'One-time' : 'Monthly'} gift of ${amount}</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Redirecting to secure gateway...'); }}>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest">Full Name</label>
                  <input type="text" placeholder="Enter your full name" className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-[#1a1a1a] border border-slate-200 dark:border-white/10" required />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest">Email Address</label>
                  <input type="email" placeholder="Enter your email" className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-[#1a1a1a] border border-slate-200 dark:border-white/10" required />
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 uppercase tracking-widest">Amount ($)</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} className="w-full px-6 py-4 rounded-xl bg-slate-50 dark:bg-[#1a1a1a] border border-slate-200 dark:border-white/10" required />
                  </div>
                  <div className="flex items-end">
                     <button type="submit" className="w-full py-4 bg-[#FFDE59] text-[#1a1a1a] font-bold rounded-xl shadow-lg hover:bg-[#eab308] transition-all active:scale-95">
                        Proceed to Give
                     </button>
                  </div>
                </div>
              </form>
              
              <div className="mt-8 pt-8 border-t border-slate-200 dark:border-white/10 flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <p className="text-sm text-slate-500">
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