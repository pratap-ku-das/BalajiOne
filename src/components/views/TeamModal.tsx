import React from 'react';
import { X, MapPin, Code, Award } from 'lucide-react';

export const TeamModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const team = [
    {
      name: 'Pratap Kumar Das',
      role: 'Founder & Software Engineer',
      qualification: 'MCA • Master of Computer Applications',
      location: 'Bhubaneswar, Odisha, India',
      bio: 'Visionary Founder and Lead Software Engineer driving BalajiOne\'s technology stack, AI innovations, enterprise ERPs, and cloud architecture.',
      avatar: '/pratap-kumar-das.png',
      badge: 'Founder & Tech Lead',
      icon: Code,
    },
    {
      name: 'Sugyani Das',
      role: 'Managing Director',
      qualification: 'CA • Chartered Accountant',
      location: 'Bhubaneswar, Odisha, India',
      bio: 'Chartered Accountant & Managing Director guiding BalajiOne\'s corporate governance, financial strategy, and enterprise client partnerships.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop',
      badge: 'Managing Director',
      icon: Award,
    },
  ];

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-[#060B26] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">
          Leadership & Governance
        </span>
        <h3 className="text-3xl font-extrabold font-heading text-white mb-2">BalajiOne Executive Team</h3>
        <p className="text-xs text-slate-300 mb-8 font-sans">
          Headquartered in Dumduma, Bhubaneswar, Odisha with software engineering and executive leadership driving digital solutions across India & globally.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {team.map((member, i) => {
            const IconComponent = member.icon;
            return (
              <div
                key={i}
                className="glass-card-gold rounded-3xl p-6 border border-amber-500/30 hover:border-amber-400/60 transition-all duration-300 text-center space-y-4 group relative"
              >
                {/* Floating Orbiting Badge Icon around circular photo */}
                <div className="absolute top-3 right-3 animate-float p-2 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-400">
                  <IconComponent className="w-4 h-4" />
                </div>

                {/* Seamless Circular Profile Photo (NO Background Rectangle Box) */}
                <div className="relative w-32 h-32 mx-auto rounded-full p-1 bg-gradient-to-tr from-amber-500 to-amber-600 shadow-[0_0_30px_rgba(245,158,11,0.4)] group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full rounded-full overflow-hidden border-2 border-white/20">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-black/80 backdrop-blur text-[9px] font-mono text-amber-300 border border-amber-500/30 whitespace-nowrap shadow-lg">
                    {member.badge}
                  </div>
                </div>

                <div className="pt-2">
                  <h4 className="text-xl font-bold font-heading text-white group-hover:text-amber-300 transition-colors">
                    {member.name}
                  </h4>
                  <div className="text-xs text-amber-400 font-mono font-semibold mt-0.5">{member.role}</div>
                  <div className="text-[11px] text-amber-300/80 font-mono mt-0.5">{member.qualification}</div>
                  
                  <div className="flex items-center justify-center space-x-1 text-[11px] text-slate-400 font-mono mt-2">
                    <MapPin className="w-3 h-3 text-amber-400" />
                    <span>{member.location}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed font-sans pt-2 border-t border-amber-500/20">
                  {member.bio}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
