import React from 'react';
import { Sparkles, ArrowRight, Video, ShieldCheck, Zap, Bot, Award, Code, Cloud, Database } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onStartProject: () => void;
  onBookConsultation: () => void;
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onStartProject,
  onBookConsultation,
  onOpenEstimator,
}) => {
  return (
    <section id="hero" className="relative pt-32 pb-24 md:pt-44 md:pb-36 overflow-hidden bg-glow-spotlight">
      {/* Dynamic Animated Background Mesh */}
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[450px] bg-gradient-to-tr from-amber-500/20 via-blue-600/15 to-amber-600/20 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-amber-500/10 rounded-full blur-[110px] pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Top Imperial Gold Pill Announcement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full glass-card-gold border border-amber-500/40 text-xs font-semibold mb-8 hover:border-amber-400 transition-all cursor-pointer group shadow-lg"
            onClick={onOpenEstimator}
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span className="text-amber-200 font-mono tracking-wide">BUILDING TRUST. DELIVERING EXCELLENCE.</span>
            <span className="text-amber-400 font-bold group-hover:translate-x-1 transition-transform inline-block">
              Estimate Budget &rarr;
            </span>
          </motion.div>

          {/* Main Headline with Luxury Gold Gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold font-heading tracking-tight max-w-5xl leading-[1.1]"
          >
            Transforming Ideas into <br className="hidden sm:inline" />
            <span className="gradient-text-gold-luxury">Powerful Digital Solutions</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl leading-relaxed font-sans"
          >
            BalajiOne Enterprises empowers Indian startups, growing businesses, and global enterprises with custom software engineering, fine-tuned GenAI solutions, enterprise GST ERP/CRM platforms, and cloud architecture.
          </motion.p>

          {/* Dual Imperial Gold CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onStartProject}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-extrabold text-base shadow-[0_0_35px_rgba(245,158,11,0.5)] hover:shadow-[0_0_55px_rgba(245,158,11,0.8)] hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 group cursor-pointer"
            >
              <span>Start Your Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onBookConsultation}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white/10 hover:bg-white/15 border border-amber-500/30 hover:border-amber-400 text-white font-bold text-base backdrop-blur-md hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 cursor-pointer"
            >
              <Video className="w-5 h-5 text-amber-400" />
              <span>Book Free Consultation</span>
            </button>
          </motion.div>

          {/* Key Trust Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap justify-center items-center gap-6 text-xs text-slate-300 font-mono"
          >
            <div className="flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>SOC2 & GST Compliant Architecture</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Sub-Second API Latency</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-amber-400" />
              <span>500+ Enterprise Deployments</span>
            </div>
          </motion.div>
        </div>

        {/* Dynamic Animated Image & Moving Icons Showcase (NO Background Rectangle Box) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 relative mx-auto max-w-4xl flex items-center justify-center min-h-[420px]"
        >
          {/* Animated Background Pulse Rings (NO Solid Rectangle) */}
          <div className="absolute w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] rounded-full border border-amber-500/20 animate-ping-slow pointer-events-none" />
          <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full border border-amber-400/30 animate-spin-slow pointer-events-none" />

          {/* Central Seamless Floating 3D Logo Emblem (NO Rectangular Container Box) */}
          <div className="relative z-20 group cursor-pointer">
            <div className="relative w-44 h-44 sm:w-56 sm:h-56 rounded-full p-2 bg-gradient-to-tr from-amber-500 via-yellow-300 to-amber-600 shadow-[0_0_70px_rgba(245,158,11,0.5)] group-hover:scale-105 transition-transform duration-500">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/20">
                <img
                  src="/balajione-logo.jpg"
                  alt="BalajiOne 3D Logo Emblem"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="mt-4 text-center">
              <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-amber-400/40 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase shadow-xl inline-block">
                BalajiOne Enterprises
              </span>
            </div>
          </div>

          {/* Orbiting Animated Floating Tech Icons Around the Logo */}

          {/* Floating Icon 1: Top-Left GenAI Bot */}
          <div className="absolute top-4 left-4 sm:left-12 z-30 animate-float flex items-center space-x-2 p-3 rounded-2xl bg-black/70 backdrop-blur-md border border-amber-500/40 shadow-2xl hover:scale-110 transition-transform">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Bot className="w-5 h-5 animate-pulse" />
            </div>
            <div className="text-left font-mono">
              <div className="text-[11px] font-bold text-white">GenAI RAG Engine</div>
              <div className="text-[9px] text-amber-300">4.2M req/sec</div>
            </div>
          </div>

          {/* Floating Icon 2: Top-Right Multi-Cloud Kubernetes */}
          <div className="absolute top-4 right-4 sm:right-12 z-30 animate-float-reverse flex items-center space-x-2 p-3 rounded-2xl bg-black/70 backdrop-blur-md border border-amber-500/40 shadow-2xl hover:scale-110 transition-transform">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Cloud className="w-5 h-5" />
            </div>
            <div className="text-left font-mono">
              <div className="text-[11px] font-bold text-white">Multi-Cloud ERP</div>
              <div className="text-[9px] text-emerald-400">99.99% Uptime</div>
            </div>
          </div>

          {/* Floating Icon 3: Bottom-Left Sub-Second API */}
          <div className="absolute bottom-6 left-2 sm:left-16 z-30 animate-float-slow flex items-center space-x-2 p-3 rounded-2xl bg-black/70 backdrop-blur-md border border-amber-500/40 shadow-2xl hover:scale-110 transition-transform">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Zap className="w-5 h-5" />
            </div>
            <div className="text-left font-mono">
              <div className="text-[11px] font-bold text-white">High-Speed APIs</div>
              <div className="text-[9px] text-amber-300">&lt; 40ms Latency</div>
            </div>
          </div>

          {/* Floating Icon 4: Bottom-Right SOC2 Security */}
          <div className="absolute bottom-6 right-2 sm:right-16 z-30 animate-float flex items-center space-x-2 p-3 rounded-2xl bg-black/70 backdrop-blur-md border border-amber-500/40 shadow-2xl hover:scale-110 transition-transform">
            <div className="w-9 h-9 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-left font-mono">
              <div className="text-[11px] font-bold text-white">SOC2 & GST Compliant</div>
              <div className="text-[9px] text-amber-300">Bank-Grade Encryption</div>
            </div>
          </div>

          {/* Floating Orbiting Micro Badges */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10 animate-float-reverse hidden md:flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-[10px] font-mono">
            <Code className="w-3.5 h-3.5 text-amber-400" />
            <span>Full-Stack Microservices</span>
          </div>

          <div className="absolute top-1/2 right-0 -translate-y-1/2 z-10 animate-float hidden md:flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-400/30 text-[10px] font-mono">
            <Database className="w-3.5 h-3.5 text-amber-400" />
            <span>PostgreSQL & VectorDB</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
