import React, { useState } from 'react';
import { CheckCircle2, Clock } from 'lucide-react';
import { PROCESS_STEPS } from '../../data/mockData';

export const ProcessTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-16 sm:py-24 bg-[#070D22] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <span className="text-xs font-mono tracking-widest uppercase text-amber-400 font-semibold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
            How We Build
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading mt-4 leading-tight">
            Our Proven 7-Step <span className="gradient-text-gold-luxury">Development Process</span>
          </h2>
          <p className="mt-4 text-slate-300 text-sm sm:text-base">
            From initial concept to cloud deployment and 24/7 support, our structured engineering pipeline guarantees on-time delivery and predictable quality.
          </p>
        </div>

        {/* Desktop Stepper Bar Header */}
        <div className="hidden lg:grid grid-cols-7 gap-2 mb-12">
          {PROCESS_STEPS.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`p-3 rounded-2xl border text-center transition-all duration-300 cursor-pointer ${
                activeStep === idx
                  ? 'bg-gradient-to-br from-amber-500 via-yellow-400 to-amber-600 border-amber-300 text-slate-950 font-extrabold shadow-[0_0_20px_rgba(245,158,11,0.5)] scale-105'
                  : 'glass-panel text-slate-400 hover:text-white border-white/5'
              }`}
            >
              <div className="text-[10px] font-mono font-bold opacity-80">STEP {s.step}</div>
              <div className="text-xs font-bold font-heading truncate mt-0.5">{s.title.split(' ')[0]}</div>
            </button>
          ))}
        </div>

        {/* Mobile & Tablet Horizontal Scrollable Stepper Pills */}
        <div className="flex lg:hidden overflow-x-auto gap-2 mb-6 pb-2 no-scrollbar">
          {PROCESS_STEPS.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setActiveStep(idx)}
              className={`whitespace-nowrap px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all cursor-pointer ${
                activeStep === idx
                  ? 'bg-amber-500 text-slate-950 shadow-md'
                  : 'bg-white/5 text-slate-400 border border-white/10'
              }`}
            >
              Step 0{s.step}: {s.title.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Active Step Spotlight Detail Card (Responsive Padding) */}
        <div className="glass-card-gold rounded-3xl p-5 sm:p-10 border border-amber-500/30 shadow-2xl relative overflow-hidden grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
          <div className="md:col-span-4 space-y-3 sm:space-y-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 p-[2px] shadow-lg">
              <div className="w-full h-full bg-[#070D22] rounded-[14px] flex items-center justify-center font-extrabold font-mono text-lg sm:text-xl text-amber-400">
                {PROCESS_STEPS[activeStep].step}
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
              {PROCESS_STEPS[activeStep].title}
            </h3>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {PROCESS_STEPS[activeStep].description}
            </p>

            <div className="pt-1 sm:pt-2 text-xs font-mono text-amber-300 flex items-center space-x-2">
              <Clock className="w-4 h-4 text-amber-400" />
              <span>Sprint Duration: 1 - 2 Weeks</span>
            </div>
          </div>

          {/* Right Column: Key Deliverables & Standards */}
          <div className="md:col-span-8 p-4 sm:p-6 rounded-2xl bg-white/[0.03] border border-amber-500/20 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
              Step #{PROCESS_STEPS[activeStep].step} Standards & Deliverables
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              {[
                'Transparent Jira & Slack updates',
                'Comprehensive technical documentation',
                'Peer code reviews & security linting',
                'Client demo at every sprint milestone',
                'Automated unit & integration test coverage',
                'Zero downtime staging deployment'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-2.5 p-2 sm:p-2.5 rounded-xl bg-white/5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Stepper Navigation buttons */}
            <div className="pt-4 border-t border-amber-500/20 flex justify-between items-center text-xs">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
              >
                &larr; Prev
              </button>

              <div className="font-mono text-slate-400">
                Step {activeStep + 1} of {PROCESS_STEPS.length}
              </div>

              <button
                disabled={activeStep === PROCESS_STEPS.length - 1}
                onClick={() => setActiveStep((prev) => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-bold shadow-md disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
              >
                Next &rarr;
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
