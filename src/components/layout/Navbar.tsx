import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, Search, X } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onOpenSchedule: () => void;
  onNavigateSection: (id: string) => void;
}

const links = [['Work', 'portfolio'], ['Expertise', 'services'], ['Process', 'process'], ['Studio', 'about']];

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenSchedule, onNavigateSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    onNavigateSection(id);
  };

  return (
    <header className={`atelier-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="atelier-nav-inner">
        <button className="brand-lockup" onClick={() => go('hero')} aria-label="BalajiOne home">
          <span className="brand-mark">B1</span>
          <span className="brand-name">BalajiOne<small>digital atelier</small></span>
        </button>
        <nav className="nav-links" aria-label="Primary navigation">
          {links.map(([label, id]) => <button key={id} onClick={() => go(id)}>{label}</button>)}
        </nav>
        <div className="nav-actions">
          <button className="nav-search" onClick={onOpenSearch} aria-label="Search"><Search size={18} /><span>⌘ K</span></button>
          <button className="nav-cta" onClick={onOpenSchedule}>Let&apos;s talk <ArrowUpRight size={17} /></button>
          <button className="nav-menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">{open ? <X size={22} /> : <Menu size={22} />}</button>
        </div>
      </div>
      {open && (
        <div className="mobile-nav">
          {links.map(([label, id], index) => <button key={id} onClick={() => go(id)}><span>0{index + 1}</span>{label}<ArrowUpRight size={18} /></button>)}
          <button className="mobile-contact" onClick={onOpenSchedule}>Start a conversation</button>
        </div>
      )}
    </header>
  );
};