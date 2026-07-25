import React, { useState } from 'react';
import { X } from 'lucide-react';

export const LegalModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
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
            <h3 className="text-xl font-bold font-heading text-white">Privacy Policy (BalajiOne Technologies)</h3>
            <p><strong>Effective Date:</strong> July 26, 2026</p>
            <p>
              BalajiOne (&quot;balajione.dev&quot;) is committed to protecting the privacy and confidentiality of our clients, partners, and website visitors. This document details our data collection and protection practices.
            </p>
            <h4 className="text-sm font-bold text-white font-heading">1. Data Encryption & Security</h4>
            <p>
              All customer data, application source code, and API interactions are transmitted via TLS 1.3 256-bit encryption. We maintain strict SOC2 Type II compliance standards and execute NDAs prior to project commencement.
            </p>
            <h4 className="text-sm font-bold text-white font-heading">2. IP Ownership</h4>
            <p>
              Clients retain 100% full ownership of custom source code, databases, design assets, and intellectual property produced under paid engagement contracts.
            </p>
          </div>
        ) : (
          <div className="space-y-4 text-xs text-slate-300 leading-relaxed font-sans">
            <h3 className="text-xl font-bold font-heading text-white">Terms & Conditions of Service</h3>
            <p><strong>Effective Date:</strong> July 26, 2026</p>
            <p>
              By accessing balajione.dev or engaging BalajiOne Technologies for software development services, you agree to comply with the following contractual terms.
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
