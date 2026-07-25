import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../../data/mockData';

interface FooterProps {
  onNavigateSection: (secId: string) => void;
  onOpenView: (viewName: 'team' | 'careers' | 'legal' | '404') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onOpenView }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#060B26] border-t border-amber-500/20 pt-12 sm:pt-16 pb-24 sm:pb-12 relative overflow-hidden text-slate-300">
      {/* Glow background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 pb-12">
          {/* Brand Info & Dual Emails (Full width on mobile, 2-cols on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-lg border border-amber-400/40">
                <img
                  src="/balajione-logo.jpg"
                  alt="BalajiOne Logo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold font-heading text-white tracking-tight leading-none">
                  Balaji<span className="gradient-text-gold-luxury">One</span>
                </span>
                <span className="text-xs font-mono text-amber-400 font-bold tracking-widest uppercase block mt-0.5">
                  Enterprises
                </span>
              </div>
            </a>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-sans">
              {COMPANY_INFO.tagline}. We empower Indian & global startups, SMEs, and enterprises with custom software engineering, AI automation, and cloud infrastructure.
            </p>

            <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs font-mono space-y-1.5">
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-slate-300">Quotes & Inquiries:</span>
                <a href={`mailto:${COMPANY_INFO.contactEmail}`} className="text-amber-400 font-bold hover:underline break-all">
                  {COMPANY_INFO.contactEmail}
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                <span className="text-slate-300">24/7 Tech Support:</span>
                <a href={`mailto:${COMPANY_INFO.supportEmail}`} className="text-amber-300 font-bold hover:underline break-all">
                  {COMPANY_INFO.supportEmail}
                </a>
              </div>
            </div>

            {/* Newsletter Box */}
            <div className="pt-2">
              <span className="text-xs font-mono text-amber-400 font-semibold block mb-2">
                Subscribe to Tech & AI Insights
              </span>
              {!subscribed ? (
                <form onSubmit={handleNewsletterSubmit} className="flex items-center space-x-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter work email..."
                    className="bg-white/5 border border-amber-500/20 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 flex-1 font-sans"
                  />
                  <button
                    type="submit"
                    className="p-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-bold transition-all shadow-md cursor-pointer shrink-0"
                  >
                    <Send className="w-4 h-4 fill-slate-950" />
                  </button>
                </form>
              ) : (
                <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-xs text-emerald-300 flex items-center space-x-2 font-mono">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Subscribed! Check your inbox weekly.</span>
                </div>
              )}
            </div>
          </div>

          {/* Links Grid: Organized side-by-side in 2 or 3 columns on Mobile & Tablet */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 lg:pt-0 border-t lg:border-t-0 border-amber-500/10">
            {/* Col 1: Company Links */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold mb-3">
                Company
              </h4>
              <ul className="space-y-2 text-xs text-slate-400 font-sans">
                {['about', 'process', 'tech', 'portfolio', 'pricing', 'contact'].map((sec) => (
                  <li key={sec}>
                    <button
                      onClick={() => onNavigateSection(sec)}
                      className="hover:text-amber-400 transition-colors capitalize cursor-pointer text-left"
                    >
                      {sec === 'tech' ? 'Tech Stack' : sec}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => onOpenView('team')}
                    className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                  >
                    Leadership Team
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => onOpenView('careers')}
                    className="hover:text-amber-400 transition-colors flex items-center space-x-1 cursor-pointer"
                  >
                    <span>Careers</span>
                    <span className="px-1.5 py-0.2 bg-amber-500/20 border border-amber-500/30 text-amber-300 text-[9px] rounded font-mono">Hiring</span>
                  </button>
                </li>
              </ul>
            </div>

            {/* Col 2: Services */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold mb-3">
                Services
              </h4>
              <ul className="space-y-2 text-xs text-slate-400 font-sans">
                {['Website Development', 'Mobile App Dev', 'Custom Software', 'ERP Systems', 'AI & Chatbots', 'Cloud Solutions'].map((serv) => (
                  <li key={serv}>
                    <button
                      onClick={() => onNavigateSection('services')}
                      className="hover:text-amber-400 transition-colors cursor-pointer text-left"
                    >
                      {serv}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3: Products & Legal */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold mb-3">
                Products & Legal
              </h4>
              <ul className="space-y-2 text-xs text-slate-400 font-sans">
                <li>
                  <button onClick={() => onNavigateSection('products')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">
                    Invoice Cloud SaaS
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigateSection('products')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">
                    CampusOne School ERP
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigateSection('products')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">
                    SolarPulse CRM
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenView('legal')} className="hover:text-amber-400 transition-colors cursor-pointer text-left">
                    Privacy Policy & Terms
                  </button>
                </li>
                <li>
                  <button onClick={() => onOpenView('404')} className="hover:text-amber-400 transition-colors font-mono text-[11px] cursor-pointer text-left">
                    Test 404 Page View
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-6 border-t border-amber-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400 text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} BalajiOne Enterprises. All rights reserved.
          </div>
          <div className="flex items-center space-x-2.5 bg-amber-500/10 px-4 py-2 rounded-full border border-amber-500/30 shadow-md">
            <span className="text-slate-300 text-xs">Developed by</span>
            <span className="text-amber-300 font-bold font-heading text-sm tracking-wide">Pratap Kumar Das</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
