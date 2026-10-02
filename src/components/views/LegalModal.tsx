import React, { useState } from 'react';
import { X, ArrowUpRight } from 'lucide-react';

export const LegalModal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onNavigateToFullPolicy?: () => void;
}> = ({ isOpen, onClose, onNavigateToFullPolicy }) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-[#070B24] border border-white/15 rounded-3xl p-6 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Tab switch */}
        <div className="flex space-x-3 mb-6">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all ${
              activeTab === 'privacy' ? 'bg-cyan-600 text-white' : 'glass-panel text-slate-400'
            }`}
          >
            Privacy Policy
          </button>
          <button
            onClick={() => setActiveTab('terms')}
            className={`px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all ${
              activeTab === 'terms' ? 'bg-cyan-600 text-white' : 'glass-panel text-slate-400'
            }`}
          >
            Terms & Conditions
          </button>
        </div>

        {activeTab === 'privacy' ? (
          <div className="space-y-4 text-xs text-slate-300 leading-relaxed font-sans">
            <div className="flex items-center justify-between pb-2 border-b border-white/10">
              <h3 className="text-xl font-bold font-heading text-white">Privacy Policy</h3>
              <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/30">
                Last Updated: October 2, 2026
              </span>
            </div>
            <p>
              BalajiOne Enterprises (&quot;balajione.dev&quot;) is committed to protecting the privacy, confidentiality, and integrity of data for our clients, partners, and visitors.
            </p>
            <p>
              We provide AI-powered software development, web applications, mobile applications, cloud solutions, UI/UX design, DevOps, API integration, business automation, and SaaS product development.
            </p>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2">
              <strong className="text-white block font-heading">Complete Legal Policy Document:</strong>
              <p className="text-slate-400">
                Our complete 16-section Privacy Policy is available on its dedicated page with full details on collected data, usage, cookies, third-party services, data retention, security, and your user privacy rights.
              </p>
              {onNavigateToFullPolicy && (
                <button
                  onClick={() => {
                    onClose();
                    onNavigateToFullPolicy();
                  }}
                  className="mt-2 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform cursor-pointer shadow-md"
                >
                  <span>Open Dedicated Privacy Policy Page (/privacy-policy)</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="space-y-4 text-xs text-slate-300 leading-relaxed font-sans">
            <h3 className="text-xl font-bold font-heading text-white">Terms & Conditions of Service</h3>
            <p><strong>Effective Date:</strong> July 26, 2026</p>
            <p>
              By accessing balajione.dev or engaging BalajiOne Enterprises for software development services, you agree to comply with the following contractual terms.
            </p>
            <h4 className="text-sm font-bold text-white font-heading">1. Service Level Agreements (SLAs)</h4>
            <p>
              Enterprise support tiers include a guaranteed 15-minute emergency SLA for production critical outages and 99.99% cloud uptime guarantees.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
