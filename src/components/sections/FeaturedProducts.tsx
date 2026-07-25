import React, { useState } from 'react';
import { Box, Sparkles, CheckCircle2, Play, Monitor, Zap, ShieldCheck, Cpu } from 'lucide-react';
import { PRODUCTS_DATA } from '../../data/mockData';

export const FeaturedProducts: React.FC<{ onBookDemo: (productName: string) => void }> = ({ onBookDemo }) => {
  const [activeTab, setActiveTab] = useState<string>(PRODUCTS_DATA[0].id);

  const activeProduct = PRODUCTS_DATA.find((p) => p.id === activeTab) || PRODUCTS_DATA[0];

  return (
    <section id="products" className="py-24 relative bg-[#060B26] overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono tracking-widest uppercase text-amber-400 font-semibold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
            Proprietary SaaS Platforms
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading mt-4 leading-tight">
            Flagship Software <span className="gradient-text-gold-luxury">Products</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base">
            Ready-to-deploy enterprise platforms engineered for rapid implementation and high business conversion.
          </p>
        </div>

        {/* Product Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {PRODUCTS_DATA.map((product) => (
            <button
              key={product.id}
              onClick={() => setActiveTab(product.id)}
              className={`px-5 py-3 rounded-2xl text-xs font-bold font-heading transition-all duration-300 flex items-center space-x-2 cursor-pointer ${
                activeTab === product.id
                  ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-extrabold shadow-[0_0_25px_rgba(245,158,11,0.4)] scale-105 border border-amber-400'
                  : 'glass-panel text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              <Box className="w-4 h-4 text-amber-400" />
              <span>{product.title.split(' ')[0]}</span>
              <span className="text-[10px] font-mono opacity-80 font-normal">({product.badge})</span>
            </button>
          ))}
        </div>

        {/* Featured Product Showcase Container */}
        <div className="glass-card-gold rounded-3xl p-6 sm:p-10 border border-amber-500/30 shadow-2xl relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Product Info & Features */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-mono border border-amber-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{activeProduct.badge}</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-white">
              {activeProduct.title}
            </h3>

            <p className="text-slate-300 text-sm leading-relaxed">
              {activeProduct.fullDesc}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-3 py-4 border-y border-amber-500/20">
              {activeProduct.metrics.map((m, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-xl sm:text-2xl font-extrabold font-mono-numbers text-amber-400">
                    {m.value}
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>

            {/* Features list */}
            <div className="space-y-2">
              {activeProduct.features.map((feat, i) => (
                <div key={i} className="flex items-center space-x-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            {/* Tech Badges */}
            <div className="pt-2 flex flex-wrap gap-1.5">
              {activeProduct.technologies.map((t, i) => (
                <span key={i} className="px-2.5 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-[10px] font-mono text-amber-300">
                  {t}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <button
                onClick={() => onBookDemo(activeProduct.title)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-extrabold text-xs shadow-[0_0_20px_rgba(245,158,11,0.4)] transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <Play className="w-4 h-4 fill-slate-950" />
                <span>Launch Interactive Demo</span>
              </button>

              <button
                onClick={() => onBookDemo(activeProduct.title)}
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-amber-500/30 text-white font-bold text-xs transition-all flex items-center justify-center space-x-2 cursor-pointer"
              >
                <span>Book Live Product Walkthrough &rarr;</span>
              </button>
            </div>
          </div>

          {/* Right Column: Dynamic Screen Showcase with Floating Animated Icons */}
          <div className="lg:col-span-6 relative p-4">
            {/* Floating Orbiting Badges around the screen */}
            <div className="absolute -top-3 -left-3 z-30 animate-float p-2.5 rounded-2xl bg-black/80 backdrop-blur-md border border-amber-500/40 shadow-xl flex items-center space-x-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span className="text-[10px] font-mono text-white font-bold">Sub-Second Execution</span>
            </div>

            <div className="absolute -bottom-3 -right-3 z-30 animate-float-reverse p-2.5 rounded-2xl bg-black/80 backdrop-blur-md border border-amber-500/40 shadow-xl flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span className="text-[10px] font-mono text-amber-300 font-bold">ISO & GST Verified</span>
            </div>

            <div className="rounded-2xl overflow-hidden border border-amber-500/30 bg-[#060B26] p-5 shadow-2xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs font-mono text-slate-400">
                <div className="flex items-center space-x-2">
                  <Monitor className="w-4 h-4 text-amber-400" />
                  <span>{activeProduct.title} Console</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">Live Session</span>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 space-y-2">
                <div className="text-xs font-bold text-amber-300">Core Engine Capabilities:</div>
                {activeProduct.features.slice(0, 4).map((feat, i) => (
                  <div key={i} className="flex items-center space-x-2 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center text-xs text-slate-300 font-mono flex items-center justify-center space-x-2">
                <Cpu className="w-4 h-4 text-amber-400 animate-spin-slow" />
                <span>Deployable on AWS, Azure, GCP, or On-Premise</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
