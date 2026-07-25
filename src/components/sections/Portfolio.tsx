import React, { useState } from 'react';
import { ArrowRight, X } from 'lucide-react';
import { CASE_STUDIES, type CaseStudyItem } from '../../data/mockData';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudyItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Case Studies' },
    { id: 'solar', label: 'Solar & Renewable' },
    { id: 'fintech', label: 'FinTech & Banking' },
    { id: 'edtech', label: 'EdTech & Campus' },
    { id: 'ai', label: 'Healthcare & AI' },
  ];

  const filtered = activeCategory === 'all'
    ? CASE_STUDIES
    : CASE_STUDIES.filter((c) => c.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#060B26] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono tracking-widest uppercase text-amber-400 font-semibold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
            Client Success Stories
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading mt-4 leading-tight">
            Featured Case Studies & <span className="gradient-text-gold-luxury">Portfolio</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base">
            Explore how we partnered with industry leaders to solve complex engineering challenges and achieve measurable ROI.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-extrabold shadow-[0_0_20px_rgba(245,158,11,0.4)] scale-105'
                  : 'glass-panel text-slate-400 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Portfolio Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedCaseStudy(item)}
              className="glass-card-interactive rounded-3xl overflow-hidden border border-white/10 hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-2 group cursor-pointer flex flex-col justify-between"
            >
              {/* Card Image Banner */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-950 via-[#060B26] to-amber-950 flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060B26] via-[#060B26]/30 to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md border border-amber-500/30 text-[10px] font-mono text-amber-300">
                  {item.industry}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="text-xs font-mono text-slate-400">Client: <span className="text-white font-semibold">{item.client}</span></div>
                <h3 className="text-2xl font-bold font-heading text-white group-hover:text-amber-300 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-2 py-3 border-y border-white/10">
                  {item.results.map((res, i) => (
                    <div key={i} className="text-center">
                      <div className="text-lg font-extrabold font-mono-numbers text-amber-400">{res.metric}</div>
                      <div className="text-[10px] text-slate-400 line-clamp-1">{res.label}</div>
                    </div>
                  ))}
                </div>

                {/* Action Link */}
                <div className="pt-2 flex justify-between items-center text-xs font-bold text-amber-400 group-hover:text-amber-300">
                  <span>Read Deep-Dive Case Study Blueprint</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Deep Dive Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-3xl bg-[#060B26] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono text-amber-400 uppercase tracking-wider block mb-1">
              {selectedCaseStudy.industry} Case Study
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mb-2">
              {selectedCaseStudy.title}
            </h3>
            <div className="text-xs font-mono text-slate-400 mb-6">Client: <span className="text-white font-semibold">{selectedCaseStudy.client}</span></div>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">The Challenge</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">{selectedCaseStudy.challenge}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1">BalajiOne Engineering Solution</h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">{selectedCaseStudy.solution}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">Measured Business Impact</h4>
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20">
                  {selectedCaseStudy.results.map((res, i) => (
                    <div key={i} className="text-center">
                      <div className="text-xl sm:text-2xl font-extrabold font-mono-numbers text-amber-400">{res.metric}</div>
                      <div className="text-[10px] text-slate-400 font-mono mt-0.5">{res.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Tech Stack Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedCaseStudy.techStack.map((tech, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-amber-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
