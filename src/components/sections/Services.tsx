import React, { useState } from 'react';
import {
  Globe, Smartphone, Code, Layers, Users, GraduationCap, FileText, Sun,
  Cpu, Bot, Cloud, GitBranch, Palette, Zap, Workflow, ShieldCheck,
  ArrowRight, CheckCircle2, X
} from 'lucide-react';
import { SERVICES_DATA, type ServiceItem } from '../../data/mockData';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const iconMap: Record<string, any> = {
    Globe, Smartphone, Code, Layers, Users, GraduationCap, FileText, Sun,
    Cpu, Bot, Cloud, GitBranch, Palette, Zap, Workflow, ShieldCheck
  };

  const serviceImages: Record<string, string> = {
    'website-development': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
    'mobile-app-development': 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=600&auto=format&fit=crop',
    'custom-software': 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop',
    'erp-systems': 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=600&auto=format&fit=crop',
    'crm-systems': 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=600&auto=format&fit=crop',
    'school-erp': 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&auto=format&fit=crop',
    'invoice-software': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=600&auto=format&fit=crop',
    'solar-crm': 'https://images.unsplash.com/photo-1509391365360-2e959784a276?q=80&w=600&auto=format&fit=crop',
    'ai-solutions': 'https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=600&auto=format&fit=crop',
    'ai-chatbots': 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=600&auto=format&fit=crop',
    'cloud-infrastructure': 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=600&auto=format&fit=crop',
    'devops-ci-cd': 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=600&auto=format&fit=crop',
    'ui-ux-design': 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=600&auto=format&fit=crop',
    'api-development': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=600&auto=format&fit=crop',
    'workflow-automation': 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop',
    'cyber-security': 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=600&auto=format&fit=crop'
  };

  const categories = [
    { id: 'all', label: 'All Services (16)' },
    { id: 'web-mobile', label: 'Web & Mobile' },
    { id: 'enterprise', label: 'Enterprise & ERP/CRM' },
    { id: 'ai-automation', label: 'AI & Automation' },
    { id: 'cloud-devops', label: 'Cloud & DevOps' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-24 relative bg-[#060B26] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-gradient-to-br from-amber-500/10 via-blue-600/10 to-amber-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono tracking-widest uppercase text-amber-400 font-semibold px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
            End-to-End Technology Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-heading mt-4 leading-tight">
            Our Enterprise <span className="gradient-text-gold-luxury">Service Offerings</span>
          </h2>
          <p className="mt-4 text-slate-300 text-base">
            From modern web apps and cross-platform mobile products to fine-tuned AI engines, cloud pipelines, and industry-specific ERPs, we build production-ready digital solutions.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-extrabold shadow-[0_0_20px_rgba(245,158,11,0.4)] scale-105'
                  : 'glass-panel text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid (16 Cards with High-Definition Image Banners & Floating Icons) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.icon] || Code;
            const imgUrl = serviceImages[service.id] || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop';

            return (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="glass-card-interactive rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group cursor-pointer"
              >
                <div>
                  {/* Top Image Banner */}
                  <div className="relative h-36 overflow-hidden">
                    <img
                      src={imgUrl}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060B26] via-[#060B26]/30 to-transparent pointer-events-none" />
                    
                    {/* Floating Orbiting Icon Overlay */}
                    <div className="absolute top-3 left-3 animate-float p-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-amber-500/30 text-amber-400 shadow-xl">
                      <IconComponent className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-5 pt-2">
                    <h3 className="text-xl font-bold font-heading text-white group-hover:text-amber-300 transition-colors mb-2">
                      {service.title}
                    </h3>

                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {service.shortDesc}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {service.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono text-amber-300/80 border border-amber-500/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300">
                    <span>Learn More & Blueprint</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-[#060B26] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl text-white max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block mb-1">
              Service Blueprint & Deliverables
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mb-4">
              {selectedService.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3">Key Features</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.features.map((feat, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Technologies Used</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedService.technologies.map((t, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-300">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => {
                    const title = selectedService.title;
                    setSelectedService(null);
                    onSelectService(title);
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-extrabold text-xs shadow-lg hover:scale-[1.01] transition-all cursor-pointer"
                >
                  Request Blueprint Inquiry for {selectedService.title} &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
