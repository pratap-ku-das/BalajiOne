import React, { useState } from 'react';
import { Code2, Globe, FileCode, Palette, Sparkles, Server, Cpu, Terminal, Coffee, Box, Cloud, Bot, Database, Layers, Smartphone, GitBranch } from 'lucide-react';
import { TECH_CATEGORIES } from '../../data/mockData';

export const TechStack: React.FC = () => {
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);

  const iconMap: Record<string, any> = {
    Code2, Globe, FileCode, Palette, Sparkles, Server, Cpu, Terminal, Coffee, Box, Cloud, Bot, Database, Layers, Smartphone, GitBranch
  };

  return (
    <section id="tech" className="py-24 bg-[#070D22] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono tracking-widest uppercase text-amber-400 font-semibold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
            Battle-Tested Architecture
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading mt-4 leading-tight">
            Our Modern <span className="gradient-text-gold-luxury">Technology Stack</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base">
            We leverage industry-leading languages, frameworks, AI models, and cloud providers to guarantee speed, safety, and scale.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {TECH_CATEGORIES.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategoryIdx(idx)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                activeCategoryIdx === idx
                  ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-extrabold shadow-[0_0_20px_rgba(245,158,11,0.4)] scale-105'
                  : 'glass-panel text-slate-400 hover:text-white'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Active Tech Stack Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECH_CATEGORIES[activeCategoryIdx].items.map((item, idx) => {
            const IconComp = iconMap[item.icon] || Code2;
            return (
              <div
                key={idx}
                className="glass-card-interactive rounded-2xl p-6 border border-white/10 hover:border-amber-400/60 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-[10px] font-mono text-amber-300">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-white group-hover:text-amber-300 transition-colors mb-2">
                  {item.name}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
