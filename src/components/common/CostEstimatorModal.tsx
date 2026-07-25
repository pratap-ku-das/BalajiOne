import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, X, Clock } from 'lucide-react';

interface CostEstimatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPlan: (estimatedScope: string) => void;
}

export const CostEstimatorModal: React.FC<CostEstimatorModalProps> = ({ isOpen, onClose, onSelectPlan }) => {
  const [projectType, setProjectType] = useState<'web' | 'mobile' | 'erp' | 'ai' | 'fullstack'>('fullstack');
  const [designLevel, setDesignLevel] = useState<'standard' | 'luxury'>('luxury');
  const [aiModule, setAiModule] = useState(true);
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  if (!isOpen) return null;

  // Base calculation logic in INR & USD
  let basePriceInr = 60000;
  let baseWeeks = 6;

  if (projectType === 'web') { basePriceInr = 20000; baseWeeks = 3; }
  if (projectType === 'mobile') { basePriceInr = 35000; baseWeeks = 4; }
  if (projectType === 'erp') { basePriceInr = 50000; baseWeeks = 6; }
  if (projectType === 'ai') { basePriceInr = 45000; baseWeeks = 5; }
  if (projectType === 'fullstack') { basePriceInr = 60000; baseWeeks = 8; }

  if (designLevel === 'luxury') { basePriceInr += 5000; baseWeeks += 1; }
  if (aiModule) { basePriceInr += 10000; baseWeeks += 1; }

  const minInr = Math.round(basePriceInr * 0.9);
  const maxInr = Math.round(basePriceInr * 1.15);

  const minUsd = Math.round(minInr / 83);
  const maxUsd = Math.round(maxInr / 83);

  const isRupees = currency === 'INR';
  const minText = isRupees ? `₹${minInr.toLocaleString('en-IN')}` : `$${minUsd.toLocaleString()}`;
  const maxText = isRupees ? `₹${maxInr.toLocaleString('en-IN')}` : `$${maxUsd.toLocaleString()}`;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#060B26] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-white animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-amber-500/20">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold font-heading">Interactive Project Cost Estimator</h3>
              <p className="text-xs text-slate-300 font-mono">Calculate instant budget & delivery timeline</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Currency Switcher */}
        <div className="mt-4 flex justify-end">
          <div className="flex space-x-1 p-1 rounded-xl glass-panel border border-amber-500/30 text-xs">
            <button
              onClick={() => setCurrency('INR')}
              className={`px-3 py-1 rounded-lg font-mono font-bold cursor-pointer ${isRupees ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400'}`}
            >
              🇮🇳 INR (₹)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3 py-1 rounded-lg font-mono font-bold cursor-pointer ${!isRupees ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400'}`}
            >
              🌐 USD ($)
            </button>
          </div>
        </div>

        {/* Options Selection */}
        <div className="mt-4 space-y-5">
          {/* Step 1: Project Type */}
          <div>
            <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
              1. Select Project Type
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { id: 'web', label: 'Web Application' },
                { id: 'mobile', label: 'Mobile App (iOS/Android)' },
                { id: 'erp', label: 'Enterprise ERP/CRM' },
                { id: 'ai', label: 'AI Model & Automation' },
                { id: 'fullstack', label: 'Full-Stack Ecosystem' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setProjectType(item.id as any)}
                  className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all cursor-pointer ${
                    projectType === item.id
                      ? 'bg-amber-500 border-amber-400 text-slate-950 font-bold shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 text-slate-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Design Level & AI */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                2. Visual & UX Design Level
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setDesignLevel('standard')}
                  className={`p-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                    designLevel === 'standard'
                      ? 'bg-amber-500 border-amber-400 text-slate-950 font-bold'
                      : 'bg-white/5 border-white/10 text-slate-300'
                  }`}
                >
                  Clean Minimal
                </button>
                <button
                  onClick={() => setDesignLevel('luxury')}
                  className={`p-2.5 rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                    designLevel === 'luxury'
                      ? 'bg-gradient-to-r from-amber-500 to-yellow-400 border-amber-300 text-slate-950 font-extrabold'
                      : 'bg-white/5 border-white/10 text-slate-300'
                  }`}
                >
                  3D Glassmorphism ✨
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 uppercase tracking-wider mb-2">
                3. GenAI Chatbot Integration
              </label>
              <button
                onClick={() => setAiModule(!aiModule)}
                className={`w-full p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                  aiModule
                    ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                    : 'bg-white/5 border-white/10 text-slate-400'
                }`}
              >
                <span>Include AI RAG & Chatbot Engine</span>
                {aiModule && <Check className="w-4 h-4 text-amber-400" />}
              </button>
            </div>
          </div>

          {/* Result Box */}
          <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">
                Estimated Investment & Timeframe
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                <span>{minText} - {maxText}</span>
              </div>
              <div className="text-xs text-slate-300 flex items-center space-x-1 mt-1 font-mono">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>Estimated Delivery: {baseWeeks} Weeks</span>
              </div>
            </div>

            <button
              onClick={() => {
                onSelectPlan(`Custom Estimate: ${minText}-${maxText} (${projectType})`);
                onClose();
              }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 hover:scale-105 text-slate-950 font-extrabold text-xs shadow-lg transition-all flex items-center space-x-2 shrink-0 cursor-pointer"
            >
              <span>Lock Quote & Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
