import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Asterisk, Play, Sparkles } from 'lucide-react';

interface HeroProps {
  onStartProject: () => void;
  onBookConsultation: () => void;
  onOpenEstimator: () => void;
}

const proofPoints = [['12+', 'industries shipped'], ['500+', 'products delivered'], ['99.99%', 'platform uptime']];

export const Hero: React.FC<HeroProps> = ({ onStartProject, onBookConsultation, onOpenEstimator }) => (
  <section id="hero" className="atelier-hero">
    <div className="hero-grain" aria-hidden="true" />
    <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
    <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
    <div className="atelier-container hero-layout">
      <div className="hero-copy">
        <motion.button initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} onClick={onOpenEstimator} className="eyebrow-pill">
          <Sparkles size={14} /><span>Independent Indian digital product studio</span><ArrowUpRight size={14} />
        </motion.button>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.08 }} className="hero-title">
          We build digital
          <span className="hero-title-accent"> systems that move</span>
          <span className="hero-title-outline"> business forward.</span>
        </motion.h1>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.2 }} className="hero-bottom">
          <p>Strategy, design, AI and engineering in one senior team. We turn ambitious ideas into useful products built for Indian businesses and users.</p>
          <div className="hero-actions">
            <button onClick={onStartProject} className="button-primary">Start a project <ArrowUpRight size={18} /></button>
            <button onClick={onBookConsultation} className="button-quiet"><span className="play-dot"><Play size={13} fill="currentColor" /></span>Book a 30-min call</button>
          </div>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0, scale: 0.92, rotate: 2 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.8, delay: 0.16, ease: [0.22, 1, 0.36, 1] }} className="hero-art-wrap">
        <div className="hero-art-label hero-art-label-top"><span>01</span> India-ready products</div>
        <img src="/balajione-logo.jpg" alt="BalajiOne Enterprises logo" className="hero-art logo-art" />
        <div className="hero-art-label hero-art-label-bottom"><Asterisk size={17} /> Bhubaneswar · Odisha · India</div>
      </motion.div>
    </div>
    <div className="atelier-container proof-row">
      <span className="proof-intro">Built for meaningful scale</span>
      {proofPoints.map(([value, label]) => <div className="proof-item" key={label}><strong>{value}</strong><span>{label}</span></div>)}
    </div>
  </section>
);