import React from 'react';
import { Award, Users, Clock, ShieldCheck, TrendingUp } from 'lucide-react';

export const Statistics: React.FC = () => {
  const stats = [
    { icon: Award, number: '500+', label: 'Projects Completed', subtext: 'Delivered on time across 15+ countries' },
    { icon: Users, number: '99.4%', label: 'Happy Clients', subtext: '98.2% Client Retention Rate' },
    { icon: Clock, number: '10+ Yrs', label: 'Innovation Experience', subtext: 'Architecting modern cloud software' },
    { icon: ShieldCheck, number: '24×7', label: 'Global SLA Support', subtext: '15-min emergency response guarantee' },
    { icon: TrendingUp, number: '₹500 Cr+', label: 'Client Revenue Lift', subtext: 'Driven by automation & scalable tech' },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-amber-950/20 via-[#070D22] to-amber-950/20 border-y border-amber-500/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center">
          {stats.map((st, idx) => {
            const IconComp = st.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.03] border border-amber-500/20 hover:border-amber-400/60 transition-all duration-300 group hover:scale-105"
              >
                <IconComp className="w-6 h-6 text-amber-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-3xl sm:text-4xl font-extrabold font-mono-numbers text-white gradient-text-gold-luxury mb-1">
                  {st.number}
                </div>
                <div className="text-xs font-bold text-slate-200 font-heading">{st.label}</div>
                <div className="text-[10px] font-mono text-slate-400 mt-1">{st.subtext}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
