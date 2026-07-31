import React from 'react';
import { Sun, Landmark, GraduationCap, HeartPulse, Truck, Bot, ShoppingBag, Factory } from 'lucide-react';

export const TrustedBy: React.FC = () => {
  const partners = [
    {
      name: 'SunRay Energy',
      industry: 'Solar & CleanTech',
      icon: Sun,
      color: 'from-amber-500 to-yellow-400',
      textColor: 'text-amber-400',
      logoImg: '/images/client-logo-1.jpg',
    },
    {
      name: 'Apex Financial',
      industry: 'FinTech Enterprise',
      icon: Landmark,
      color: 'from-blue-600 to-cyan-500',
      textColor: 'text-cyan-400',
      logoImg: '/images/client-logo-2.jpg',
    },
    {
      name: 'Global Academy',
      industry: 'EdTech & Campus',
      icon: GraduationCap,
      color: 'from-purple-600 to-indigo-500',
      textColor: 'text-purple-400',
      logoImg: '/images/client-logo-3.jpg',
    },
    {
      name: 'MediCare Network',
      industry: 'Healthcare Tech',
      icon: HeartPulse,
      color: 'from-emerald-500 to-teal-400',
      textColor: 'text-emerald-400',
      logoImg: '/images/client-logo-4.jpg',
    },
    {
      name: 'Vanguard Logistics',
      industry: 'Supply Chain',
      icon: Truck,
      color: 'from-orange-500 to-amber-500',
      textColor: 'text-orange-400',
      logoImg: '/images/client-logo-5.jpg',
    },
    {
      name: 'Nova Dynamics',
      industry: 'AI & Robotics',
      icon: Bot,
      color: 'from-cyan-500 to-blue-600',
      textColor: 'text-cyan-300',
      logoImg: '/images/client-logo-6.jpg',
    },
    {
      name: 'Starlight Retail',
      industry: 'E-Commerce SaaS',
      icon: ShoppingBag,
      color: 'from-pink-500 to-rose-500',
      textColor: 'text-pink-400',
      logoImg: '/images/client-logo-7.jpg',
    },
    {
      name: 'Optima Industrial',
      industry: 'Smart Industry 4.0',
      icon: Factory,
      color: 'from-blue-500 to-slate-400',
      textColor: 'text-blue-400',
      logoImg: '/images/client-logo-8.jpg',
    },
  ];

  return (
    <section className="py-12 bg-[#050816] border-y border-white/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 text-center mb-8">
        <p className="text-xs font-mono tracking-widest uppercase text-slate-400">
          TRUSTED BY INNOVATIVE STARTUPS, SMES & GLOBAL ENTERPRISES
        </p>
      </div>

      {/* Infinite Seamless Right-to-Left Marquee Track */}
      <div className="flex overflow-hidden select-none w-full animate-marquee-track">
        {/* Track 1 */}
        <div className="flex animate-marquee shrink-0 items-center space-x-6 sm:space-x-8 pr-6 sm:pr-8">
          {partners.map((partner, idx) => {
            const IconComponent = partner.icon;
            return (
              <div
                key={`t1-${idx}`}
                className="flex items-center space-x-3.5 px-4 py-2.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group cursor-pointer shrink-0 shadow-md"
              >
                {/* Company Logo Image with Glow Badge */}
                <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/20 shrink-0 group-hover:scale-105 transition-transform">
                  <img
                    src={partner.logoImg}
                    alt={partner.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${partner.color} opacity-30 group-hover:opacity-10 mix-blend-overlay`} />
                </div>

                <div className="text-left">
                  <div className="flex items-center space-x-1.5">
                    <IconComponent className={`w-3.5 h-3.5 ${partner.textColor}`} />
                    <span className="text-sm font-bold font-heading text-slate-200 group-hover:text-white transition-colors">
                      {partner.name}
                    </span>
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">{partner.industry}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Track 2 (Duplicate for Seamless Loop) */}
        <div className="flex animate-marquee shrink-0 items-center space-x-6 sm:space-x-8 pr-6 sm:pr-8" aria-hidden="true">
          {partners.map((partner, idx) => {
            const IconComponent = partner.icon;
            return (
              <div
                key={`t2-${idx}`}
                className="flex items-center space-x-3.5 px-4 py-2.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 group cursor-pointer shrink-0 shadow-md"
              >
                {/* Company Logo Image with Glow Badge */}
                <div className="relative w-10 h-10 rounded-xl overflow-hidden border border-white/20 shrink-0 group-hover:scale-105 transition-transform">
                  <img
                    src={partner.logoImg}
                    alt={partner.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-tr ${partner.color} opacity-30 group-hover:opacity-10 mix-blend-overlay`} />
                </div>

                <div className="text-left">
                  <div className="flex items-center space-x-1.5">
                    <IconComponent className={`w-3.5 h-3.5 ${partner.textColor}`} />
                    <span className="text-sm font-bold font-heading text-slate-200 group-hover:text-white transition-colors">
                      {partner.name}
                    </span>
                  </div>
                  <div className="text-[10px] font-mono text-slate-400">{partner.industry}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
