import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../../data/mockData';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-[#070D22] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest uppercase text-amber-400 font-semibold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
            What Clients Say
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading mt-4 leading-tight">
            Trusted by <span className="gradient-text-gold-luxury">Industry Leaders</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base">
            Read genuine feedback from technology officers, directors, and business leaders who built their systems with BalajiOne Enterprises.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="glass-card-interactive rounded-3xl p-8 border border-white/10 hover:border-amber-400/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center space-x-1 mb-4 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <Quote className="w-8 h-8 text-amber-500/30 mb-3" />

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  &quot;{t.content}&quot;
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center space-x-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border border-amber-500/30 shrink-0"
                />
                <div>
                  <div className="text-sm font-bold text-white font-heading">{t.name}</div>
                  <div className="text-xs text-amber-400 font-mono">{t.role}</div>
                  <div className="text-[10px] text-slate-400">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
