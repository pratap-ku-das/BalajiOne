import React from 'react';
import { Target, Eye, Compass, Shield, Users, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

export const About: React.FC = () => {
  const coreValues = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We continuously push the boundaries of AI, cloud architecture, and modern web software to deliver unfair competitive advantages.',
      image: '/images/about-global.jpg',
    },
    {
      icon: Shield,
      title: 'Uncompromising Quality',
      description: 'Every line of code is benchmarked for performance, SOC2 security compliance, sub-second latency, and pixel-perfect aesthetics.',
      image: '/images/cyber-security.jpg',
    },
    {
      icon: Users,
      title: 'Customer Obsession',
      description: 'We treat your revenue, user engagement, and operational scale as our own core metrics, acting as true long-term partners.',
      image: '/images/about-team.jpg',
    },
    {
      icon: Compass,
      title: 'Long-term Partnership',
      description: 'From early-stage MVP to 24/7 enterprise maintenance, we build scalable software systems designed to thrive for decades.',
      image: '/images/erp-systems.jpg',
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-[#070D22]">
      {/* Background glow spot */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest uppercase text-amber-400 font-semibold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
            About BalajiOne Enterprises
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading mt-4 leading-tight">
            Architecting the Future of <span className="gradient-text-gold-luxury">Enterprise & AI Technology</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            BalajiOne Enterprises is a premier software development, artificial intelligence, and cloud transformation company. We bridge complex engineering with luxury user interfaces to help businesses scale globally.
          </p>
        </div>

        {/* Mission & Vision Dual Cards with Rich High-Definition Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <div className="glass-card-gold rounded-3xl overflow-hidden border border-amber-500/30 hover:border-amber-400/60 transition-all duration-300 group flex flex-col justify-between">
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img
                src="/images/about-office.jpg"
                alt="BalajiOne Mission - Enterprise Tech Hub"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070D22] via-[#070D22]/40 to-transparent pointer-events-none" />
              
              {/* Floating Animated Badge */}
              <div className="absolute top-4 left-4 animate-float p-2.5 rounded-2xl bg-black/70 backdrop-blur-md border border-amber-400/40 text-amber-400 shadow-xl flex items-center space-x-2">
                <Target className="w-5 h-5 animate-pulse" />
                <span className="text-xs font-mono font-bold text-white">Our Mission</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-2">
              <h3 className="text-2xl font-bold font-heading text-white mb-3">Accelerate Global Business Growth</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{COMPANY_INFO.mission}</p>
              <div className="mt-6 pt-4 border-t border-amber-500/20 flex items-center space-x-2 text-xs text-amber-300 font-mono">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Proven ROI Across 12+ Industry Verticals</span>
              </div>
            </div>
          </div>

          {/* Vision Card */}
          <div className="glass-card-gold rounded-3xl overflow-hidden border border-amber-500/30 hover:border-amber-400/60 transition-all duration-300 group flex flex-col justify-between">
            <div className="relative h-48 sm:h-56 overflow-hidden">
              <img
                src="/images/cloud-infrastructure.jpg"
                alt="BalajiOne Vision - Global AI Cloud Systems"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-85 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070D22] via-[#070D22]/40 to-transparent pointer-events-none" />
              
              {/* Floating Animated Badge */}
              <div className="absolute top-4 left-4 animate-float-reverse p-2.5 rounded-2xl bg-black/70 backdrop-blur-md border border-amber-400/40 text-amber-400 shadow-xl flex items-center space-x-2">
                <Eye className="w-5 h-5 animate-pulse" />
                <span className="text-xs font-mono font-bold text-white">Our Vision</span>
              </div>
            </div>

            <div className="p-6 sm:p-8 pt-2">
              <h3 className="text-2xl font-bold font-heading text-white mb-3">Global Technology Leadership</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{COMPANY_INFO.vision}</p>
              <div className="mt-6 pt-4 border-t border-amber-500/20 flex items-center space-x-2 text-xs text-amber-300 font-mono">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Pioneering Next-Gen Generative AI & Cloud Systems</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values 4-Grid with Rich Feature Banner Images */}
        <div>
          <h3 className="text-xl font-bold font-heading text-center mb-8 text-white">Our Core Values</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className="glass-card-interactive rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/50 transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div className="relative h-32 overflow-hidden">
                    <img
                      src={val.image}
                      alt={val.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070D22] via-[#070D22]/30 to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3 p-2 rounded-xl bg-black/70 backdrop-blur border border-amber-500/30 text-amber-400">
                      <IconComp className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-5">
                    <h4 className="text-lg font-bold font-heading text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {val.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{val.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
