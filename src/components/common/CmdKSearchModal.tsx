import React, { useState, useEffect } from 'react';
import { Search, X, Code, Box, Layers, ArrowRight, Sparkles } from 'lucide-react';
import { SERVICES_DATA, PRODUCTS_DATA, CASE_STUDIES } from '../../data/mockData';

interface CmdKSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectAction: (sectionId: string) => void;
}

export const CmdKSearchModal: React.FC<CmdKSearchModalProps> = ({ isOpen, onClose, onSelectAction }) => {
  const [query, setQuery] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredServices = SERVICES_DATA.filter((s) =>
    s.title.toLowerCase().includes(query.toLowerCase()) || s.shortDesc.toLowerCase().includes(query.toLowerCase())
  );

  const filteredProducts = PRODUCTS_DATA.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase()) || p.shortDesc.toLowerCase().includes(query.toLowerCase())
  );

  const filteredCaseStudies = CASE_STUDIES.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase()) || c.client.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-[999] flex items-start justify-center pt-20 px-4 bg-black/70 backdrop-blur-md transition-all">
      <div
        className="relative w-full max-w-2xl bg-[#070D22] border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden text-white animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-amber-500/20 bg-white/[0.02]">
          <Search className="w-5 h-5 text-amber-400 mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command, search services, products, or case studies... (Esc to close)"
            className="w-full bg-transparent text-white placeholder-slate-500 focus:outline-none text-base font-sans"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          {/* Quick Actions */}
          {!query && (
            <div>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-amber-400 mb-2">
                Quick Navigation
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { label: 'Services', section: 'services', icon: Code },
                  { label: 'Products', section: 'products', icon: Box },
                  { label: 'Case Studies', section: 'portfolio', icon: Layers },
                  { label: 'Pricing', section: 'pricing', icon: Sparkles },
                ].map((item) => {
                  const IconComp = item.icon;
                  return (
                    <button
                      key={item.section}
                      onClick={() => {
                        onSelectAction(item.section);
                        onClose();
                      }}
                      className="flex items-center space-x-2 p-2.5 rounded-xl bg-white/[0.04] hover:bg-amber-500/20 border border-white/10 hover:border-amber-400/50 text-sm font-medium transition-all group cursor-pointer"
                    >
                      <IconComp className="w-4 h-4 text-amber-400 group-hover:text-amber-300" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Services Matches */}
          {filteredServices.length > 0 && (
            <div>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Services ({filteredServices.length})
              </div>
              <div className="space-y-1">
                {filteredServices.slice(0, 4).map((service) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      onSelectAction('services');
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/10 text-left transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 border border-amber-500/30">
                        <Code className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                          {service.title}
                        </div>
                        <div className="text-xs text-slate-400 line-clamp-1">{service.shortDesc}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Products Matches */}
          {filteredProducts.length > 0 && (
            <div>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Featured Products ({filteredProducts.length})
              </div>
              <div className="space-y-1">
                {filteredProducts.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => {
                      onSelectAction('products');
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/10 text-left transition-colors group cursor-pointer"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center text-amber-400 border border-amber-500/30">
                        <Box className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                          {product.title}
                        </div>
                        <div className="text-xs text-slate-400 line-clamp-1">{product.shortDesc}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Case Studies Matches */}
          {filteredCaseStudies.length > 0 && (
            <div>
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Case Studies ({filteredCaseStudies.length})
              </div>
              <div className="space-y-1">
                {filteredCaseStudies.map((cs) => (
                  <button
                    key={cs.id}
                    onClick={() => {
                      onSelectAction('portfolio');
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-white/10 text-left transition-colors group cursor-pointer"
                  >
                    <div>
                      <div className="text-sm font-semibold text-white group-hover:text-amber-300 transition-colors">
                        {cs.title}
                      </div>
                      <div className="text-xs text-slate-400">Client: {cs.client} • {cs.industry}</div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {filteredServices.length === 0 && filteredProducts.length === 0 && filteredCaseStudies.length === 0 && (
            <div className="py-8 text-center text-slate-400">
              <Search className="w-8 h-8 mx-auto mb-2 text-slate-600" />
              <p className="text-sm">No results found for &quot;{query}&quot;</p>
              <p className="text-xs text-slate-500 mt-1">Try searching for &quot;AI&quot;, &quot;ERP&quot;, &quot;CRM&quot; or &quot;Pricing&quot;</p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-4 py-2.5 bg-white/[0.02] border-t border-amber-500/20 flex justify-between items-center text-xs text-slate-400 font-mono">
          <span>Tip: Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white font-mono">ESC</kbd> to exit</span>
          <span className="text-amber-400 font-semibold">BalajiOne QuickNav v2.0</span>
        </div>
      </div>
    </div>
  );
};
