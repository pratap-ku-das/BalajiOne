import React from 'react';
import {
  Zap, MessageSquare, Scaling, Shield, Tag, Cpu, Clock, Target, Award
} from 'lucide-react';
import { WHY_CHOOSE_US } from '../../data/mockData';

export const WhyChooseUs: React.FC = () => {
  const iconMap: Record<string, any> = {
    Zap, MessageSquare, Scaling, Shield, Tag, Cpu, Clock, Target, Award
  };

  return (
    <section className="py-24 bg-[#070D22] relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest uppercase text-amber-400 font-semibold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
            Why BalajiOne Enterprises
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading mt-4 leading-tight">
            Engineered for <span className="gradient-text-gold-luxury">Reliability & Innovation</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base">
            We combine high-performance software engineering rigor with agile development pipelines to deliver exceptional quality on every single project.
          </p>
        </div>

        {/* 9 Modern Icon Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComp = iconMap[item.icon] || Zap;
            return (
              <div
                key={idx}
                className="glass-panel-hover glass-card-interactive rounded-2xl p-6 border border-white/10 hover:border-amber-400/60 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 mb-5 group-hover:scale-110 group-hover:bg-amber-500 group-hover:text-slate-950 transition-all">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Standard #0{idx + 1}</span>
                  <span className="text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity">Guaranteed SLA</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
