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
    <footer className="bg-[#070D22] border-t border-amber-500/20 pt-12 sm:pt-16 pb-24 sm:pb-12 relative overflow-hidden text-slate-300">
      {/* Glow background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 pb-12">
          {/* Brand Info & Dual Emails (Full width on mobile, 2-cols on desktop) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="flex items-center space-x-3 group">
              <div className="w-11 h-11 p-0.5 rounded-xl bg-gradient-to-tr from-amber-500 via-yellow-200 to-amber-600 shadow-[0_0_20px_rgba(212,175,55,0.35)] group-hover:scale-105 transition-transform duration-300">
                <div className="w-full h-full rounded-[9px] overflow-hidden bg-[#070D22]">
                  <img
                    src="/balajione-logo.jpg"
                    alt="BalajiOne Logo"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </div>
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

            {/* Social Media Links */}
            <div className="flex items-center space-x-3 pt-1">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61592516462507"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BalajiOne Enterprises Facebook"
                className="w-9 h-9 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 hover:text-amber-300 transition-all hover:scale-110 shadow-md cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a
                href="https://www.instagram.com/balajione_enterprises/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BalajiOne Enterprises Instagram"
                className="w-9 h-9 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 hover:text-amber-300 transition-all hover:scale-110 shadow-md cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/balajione-enterprises/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="BalajiOne Enterprises LinkedIn"
                className="w-9 h-9 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 hover:text-amber-300 transition-all hover:scale-110 shadow-md cursor-pointer"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
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
