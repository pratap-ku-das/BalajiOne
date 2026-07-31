import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, ArrowRight, Code, Box } from 'lucide-react';
import { SERVICES_DATA, PRODUCTS_DATA } from '../../data/mockData';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenSchedule: () => void;
  onNavigateSection: (id: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onOpenSchedule,
  onNavigateSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<'services' | 'products' | 'company' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setIsScrolled(true);
      else setIsScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    onNavigateSection(sectionId);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[900] transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070D22]/85 backdrop-blur-xl border-b border-amber-500/20 shadow-2xl py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Mark */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            className="flex items-center space-x-3.5 group"
          >
            <div className="relative w-11 h-11 p-0.5 rounded-xl bg-gradient-to-tr from-amber-500 via-yellow-200 to-amber-600 shadow-[0_0_20px_rgba(212,175,55,0.4)] group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-[9px] overflow-hidden bg-[#070D22]">
                <img
                  src="/balajione-logo.jpg"
                  alt="BalajiOne Enterprises"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <span className="text-2xl font-extrabold font-heading tracking-tight text-white group-hover:text-amber-300 transition-colors">
                Balaji<span className="gradient-text-gold-luxury">One</span>
              </span>
              <span className="block text-[10px] font-mono text-amber-400 font-bold tracking-widest uppercase">
                Enterprises
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 font-medium text-sm">
            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu('services')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button
                onClick={() => handleNavClick('services')}
                className="flex items-center space-x-1 px-3.5 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {/* Services Mega Menu */}
              {activeMegaMenu === 'services' && (
                <div className="absolute top-full left-0 w-[580px] bg-[#070B24] border border-white/15 rounded-2xl shadow-2xl p-4 grid grid-cols-2 gap-3 mt-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  {SERVICES_DATA.slice(0, 6).map((service) => (
                    <button
                      key={service.id}
                      onClick={() => handleNavClick('services')}
                      className="flex items-start space-x-3 p-2.5 rounded-xl hover:bg-white/5 text-left transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                        <Code className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {service.title}
                        </div>
                        <div className="text-[11px] text-slate-400 line-clamp-1">{service.shortDesc}</div>
                      </div>
                    </button>
                  ))}
                  <div className="col-span-2 pt-2 border-t border-white/10 flex justify-between items-center text-xs text-cyan-400">
                    <span>Explore all 16 Service Offerings</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveMegaMenu('products')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button
                onClick={() => handleNavClick('products')}
                className="flex items-center space-x-1 px-3.5 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
              >
                <span>Products</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {/* Products Dropdown */}
              {activeMegaMenu === 'products' && (
                <div className="absolute top-full left-0 w-[340px] bg-[#070B24] border border-white/15 rounded-2xl shadow-2xl p-3 space-y-1 mt-1 animate-in fade-in slide-in-from-top-2 duration-200">
                  {PRODUCTS_DATA.map((product) => (
                    <button
                      key={product.id}
                      onClick={() => handleNavClick('products')}
                      className="w-full flex items-center space-x-3 p-2.5 rounded-xl hover:bg-white/5 text-left transition-colors group"
                    >
                      <div className="w-8 h-8 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                        <Box className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white group-hover:text-purple-300 transition-colors">
                          {product.title}
                        </div>
                        <span className="text-[10px] text-cyan-400 font-mono">{product.badge}</span>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('about')}
              className="px-3.5 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              About
            </button>

            <button
              onClick={() => handleNavClick('process')}
              className="px-3.5 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              Process
            </button>

            <button
              onClick={() => handleNavClick('tech')}
              className="px-3.5 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              Tech Stack
            </button>

            <button
              onClick={() => handleNavClick('portfolio')}
              className="px-3.5 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              Portfolio
            </button>

            <button
              onClick={() => handleNavClick('pricing')}
              className="px-3.5 py-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-colors"
            >
              Pricing
            </button>
          </nav>

          {/* Action CTAs & Search Button */}
          <div className="hidden lg:flex items-center space-x-3">
            {/* Quick Cmd+K Search Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 transition-all cursor-pointer"
            >
              <Search className="w-3.5 h-3.5 text-amber-400" />
              <span>Search...</span>
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-slate-400 font-mono">⌘K</kbd>
            </button>

            {/* Book Consultation */}
            <button
              onClick={onOpenSchedule}
              className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 border border-amber-500/30 hover:border-amber-400 text-xs font-semibold text-amber-200 transition-all cursor-pointer"
            >
              Book Free Consultation
            </button>

            {/* Start Project CTA */}
            <button
              onClick={() => handleNavClick('contact')}
              className="relative group px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-extrabold text-xs shadow-[0_0_20px_rgba(245,158,11,0.4)] hover:shadow-[0_0_30px_rgba(245,158,11,0.7)] hover:scale-105 transition-all cursor-pointer"
            >
              <span>Start Your Project</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={onOpenSearch}
              className="p-2 rounded-xl bg-white/5 text-slate-300 cursor-pointer"
            >
              <Search className="w-5 h-5 text-amber-400" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-white/5 text-slate-300 hover:text-white cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer in Imperial Gold Theme */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070D22]/95 backdrop-blur-2xl border-b border-amber-500/30 p-6 space-y-4 text-white animate-in slide-in-from-top-4 duration-200 shadow-2xl">
          <div className="space-y-1.5">
            {[
              { label: 'Hero Overview', id: 'hero' },
              { label: 'About BalajiOne', id: 'about' },
              { label: 'Services Catalog', id: 'services' },
              { label: 'Featured Products', id: 'products' },
              { label: 'Development Process', id: 'process' },
              { label: 'Technology Stack', id: 'tech' },
              { label: 'Portfolio Case Studies', id: 'portfolio' },
              { label: 'Pricing & Plans', id: 'pricing' },
              { label: 'Contact Us', id: 'contact' },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="w-full text-left py-2.5 px-4 rounded-xl hover:bg-amber-500/10 text-sm font-medium text-slate-200 hover:text-amber-300 transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-amber-500/20 space-y-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSchedule();
              }}
              className="w-full py-3 rounded-xl bg-amber-500/20 border border-amber-500/30 text-xs font-bold text-amber-300 text-center cursor-pointer"
            >
              Book Free Consultation
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-600 text-slate-950 font-extrabold text-xs text-center shadow-lg cursor-pointer"
            >
              Start Your Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
