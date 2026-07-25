import React, { useState } from 'react';
import { Check, Sparkles, Calculator } from 'lucide-react';
import { PRICING_PLANS } from '../../data/mockData';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
  onOpenEstimator: () => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan, onOpenEstimator }) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  return (
    <section id="pricing" className="py-24 bg-[#060B26] relative overflow-hidden">
      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-amber-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono tracking-widest uppercase text-amber-400 font-semibold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
            Transparent Investment Models
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading mt-4 leading-tight">
            Simple, Scalable <span className="gradient-text-gold-luxury">Pricing & Plans</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base">
            Choose a dedicated engineering squad model or custom fixed-scope pricing. GST & International invoicing supported. Full code ownership.
          </p>
        </div>

        {/* Currency & Billing Interval Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          {/* Currency Toggle */}
          <div className="flex items-center space-x-1 p-1 rounded-xl glass-panel border border-amber-500/30">
            <button
              onClick={() => setCurrency('INR')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                currency === 'INR' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              🇮🇳 INR (₹)
            </button>
            <button
              onClick={() => setCurrency('USD')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-mono font-bold transition-all cursor-pointer ${
                currency === 'USD' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-400 hover:text-white'
              }`}
            >
              🌐 USD ($)
            </button>
          </div>

          {/* Monthly vs Annual Toggle */}
          <div className="flex items-center space-x-3">
            <span className={`text-xs font-mono font-semibold ${!isAnnual ? 'text-white' : 'text-slate-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-12 h-7 rounded-full bg-white/10 p-1 border border-amber-500/30 relative transition-colors focus:outline-none cursor-pointer"
            >
              <div
                className={`w-5 h-5 rounded-full bg-gradient-to-r from-amber-400 to-yellow-500 shadow-md transform transition-transform ${
                  isAnnual ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <div className="flex items-center space-x-1.5">
              <span className={`text-xs font-mono font-semibold ${isAnnual ? 'text-white' : 'text-slate-400'}`}>
                Annual
              </span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono border border-emerald-500/30">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Cards 3-Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {PRICING_PLANS.map((plan) => {
            const rawPrice = currency === 'INR'
              ? (isAnnual ? plan.annualPriceInr : plan.monthlyPriceInr)
              : (isAnnual ? plan.annualPriceUsd : plan.monthlyPriceUsd);

            const symbol = currency === 'INR' ? '₹' : '$';

            return (
              <div
                key={plan.id}
                className={`glass-card-interactive rounded-3xl p-8 border transition-all duration-300 flex flex-col justify-between relative ${
                  plan.popular
                    ? 'border-amber-400/80 shadow-[0_0_35px_rgba(245,158,11,0.25)] scale-105 bg-gradient-to-b from-amber-500/10 via-[#060B26] to-[#060B26]'
                    : 'border-white/10 hover:border-amber-500/40'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 font-extrabold text-[10px] uppercase font-mono tracking-widest shadow-md">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-bold font-heading text-white">{plan.name}</h3>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed min-h-[36px]">
                    {plan.tagline}
                  </p>

                  {/* Price display */}
                  <div className="my-6">
                    <span className="text-3xl sm:text-4xl font-extrabold font-mono-numbers text-white">
                      {symbol}{rawPrice.toLocaleString('en-IN')}
                    </span>
                    <span className="text-xs text-slate-400 font-mono"> / month</span>
                    <span className="block text-[10px] text-slate-500 font-mono mt-1">
                      {isAnnual ? 'Billed annually (+ GST compliant)' : 'Billed monthly (+ GST compliant)'}
                    </span>
                  </div>

                  {/* Feature checklist */}
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-center space-x-2.5 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-amber-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className={`mt-8 w-full py-3.5 px-6 rounded-2xl text-xs font-extrabold font-heading transition-all cursor-pointer ${
                    plan.popular
                      ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:scale-105'
                      : 'bg-white/10 hover:bg-white/15 text-white border border-amber-500/30 hover:border-amber-400'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* Custom Quote & Interactive Estimator Banner */}
        <div className="glass-card-gold rounded-3xl p-6 sm:p-8 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold font-heading text-white">Need a Custom Fixed-Scope Quote in INR or USD?</h4>
              <p className="text-xs text-slate-300">
                Use our dynamic calculator to select your exact tech requirements and calculate instant estimate.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenEstimator}
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-bold text-xs shadow-lg transition-all flex items-center space-x-2 shrink-0 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 fill-slate-950" />
            <span>Launch Interactive Estimator</span>
          </button>
        </div>
      </div>
    </section>
  );
};
