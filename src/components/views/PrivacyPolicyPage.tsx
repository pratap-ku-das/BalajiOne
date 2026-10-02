import React, { useState, useEffect } from 'react';
import {
  Shield,
  FileText,
  Lock,
  Eye,
  Server,
  Globe,
  UserCheck,
  Cookie,
  Share2,
  Database,
  AlertTriangle,
  Mail,
  ExternalLink,
  Clock,
  ArrowUp,
  ChevronDown,
  Building2,
  Sparkles,
  Calendar,
  CheckCircle2,
  ArrowUpRight,
  ShieldCheck,
  Send,
  HelpCircle
} from 'lucide-react';

interface PrivacyPolicyPageProps {
  onNavigateHome: () => void;
  onOpenContact: () => void;
}

interface TocItem {
  id: string;
  title: string;
  shortTitle: string;
  icon: React.ElementType;
}

const TOC_SECTIONS: TocItem[] = [
  { id: 'introduction', title: '1. Introduction & Scope', shortTitle: 'Introduction', icon: FileText },
  { id: 'information-we-collect', title: '2. Information We Collect', shortTitle: 'Information Collected', icon: Database },
  { id: 'how-we-collect', title: '3. How We Collect Information', shortTitle: 'Collection Methods', icon: Eye },
  { id: 'how-we-use-information', title: '4. How We Use Your Information', shortTitle: 'Use of Information', icon: Sparkles },
  { id: 'cookies-tracking', title: '5. Cookies & Tracking Technologies', shortTitle: 'Cookies & Tracking', icon: Cookie },
  { id: 'third-party-services', title: '6. Third-Party Services & Integrations', shortTitle: 'Third-Party Services', icon: Server },
  { id: 'data-sharing-disclosure', title: '7. Data Sharing & Disclosure', shortTitle: 'Data Sharing', icon: Share2 },
  { id: 'data-security', title: '8. Data Security Safeguards', shortTitle: 'Data Security', icon: Lock },
  { id: 'data-retention', title: '9. Data Retention Practices', shortTitle: 'Data Retention', icon: Clock },
  { id: 'user-rights', title: '10. Your Privacy Rights & Choices', shortTitle: 'User Rights', icon: UserCheck },
  { id: 'childrens-privacy', title: "11. Children's Privacy", shortTitle: "Children's Privacy", icon: Shield },
  { id: 'third-party-links', title: '12. Links to Third-Party Websites', shortTitle: 'External Links', icon: ExternalLink },
  { id: 'international-processing', title: '13. International Data Processing', shortTitle: 'International Data', icon: Globe },
  { id: 'marketing-communications', title: '14. Marketing Communications & Opt-Out', shortTitle: 'Marketing & Opt-Out', icon: Mail },
  { id: 'policy-changes', title: '15. Changes to This Privacy Policy', shortTitle: 'Policy Updates', icon: Calendar },
  { id: 'contact-us', title: '16. Contact Information', shortTitle: 'Contact Us', icon: Building2 },
];

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({
  onNavigateHome,
  onOpenContact
}) => {
  const [activeSection, setActiveSection] = useState<string>('introduction');
  const [isMobileTocOpen, setIsMobileTocOpen] = useState<boolean>(false);
  const [showBackToTop, setShowBackToTop] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  // SEO: Dynamic Title, Meta Description & Canonical link setup
  useEffect(() => {
    const originalTitle = document.title;
    document.title = 'Privacy Policy | BalajiOne Enterprises';

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    const originalDescription = metaDescription ? metaDescription.getAttribute('content') : '';
    const policyDescription =
      'Read the Privacy Policy of BalajiOne Enterprises to understand how we collect, use, protect, and manage personal information across our website and services.';

    if (metaDescription) {
      metaDescription.setAttribute('content', policyDescription);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', policyDescription);
      document.head.appendChild(metaDescription);
    }

    // Update Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    const originalCanonical = canonical ? canonical.getAttribute('href') : '';
    const policyCanonical = 'https://balajione.dev/privacy-policy';

    if (canonical) {
      canonical.setAttribute('href', policyCanonical);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', policyCanonical);
      document.head.appendChild(canonical);
    }

    // Scroll to top on initial page load
    window.scrollTo({ top: 0, behavior: 'instant' });

    return () => {
      document.title = originalTitle;
      if (metaDescription && originalDescription) {
        metaDescription.setAttribute('content', originalDescription);
      }
      if (canonical && originalCanonical) {
        canonical.setAttribute('href', originalCanonical);
      }
    };
  }, []);

  // Track active section on scroll & toggle back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      const headerOffset = 140;
      const scrollPosition = window.scrollY + headerOffset;

      for (let i = TOC_SECTIONS.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(TOC_SECTIONS[i].id);
        if (sectionEl) {
          const top = sectionEl.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(TOC_SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileTocOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSharePolicy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('https://balajione.dev/privacy-policy');
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2400);
    }
  };

  return (
    <div className="privacy-policy-wrapper relative bg-[var(--paper)] text-[var(--ink)] pt-24 sm:pt-28 pb-16 min-h-screen">
      {/* Background Decorative Grid and Grain */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" aria-hidden="true" />
      <div className="hero-grain pointer-events-none" aria-hidden="true" />

      {/* Floating Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-[var(--blue)] text-white border border-[var(--ink)] shadow-[4px_4px_0_var(--ink)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0_var(--ink)] transition-all cursor-pointer flex items-center justify-center group"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      )}

      {/* Hero Header Section */}
      <header className="relative border-b border-[var(--ink)] bg-[var(--paper)] pb-12 sm:pb-16 pt-6">
        <div className="atelier-container max-w-6xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-6 flex items-center space-x-2 text-xs font-mono text-[var(--muted)]">
            <button
              onClick={onNavigateHome}
              className="hover:text-[var(--blue)] transition-colors underline-offset-4 hover:underline cursor-pointer"
            >
              BalajiOne
            </button>
            <span>/</span>
            <span className="text-[var(--ink)] font-bold">Legal</span>
            <span>/</span>
            <span className="text-[var(--blue)] font-bold">Privacy Policy</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--ink)] bg-[var(--lime)] text-[var(--ink)] text-xs font-mono font-bold uppercase tracking-wider shadow-[3px_3px_0_var(--ink)]">
                <ShieldCheck className="w-4 h-4 text-[var(--ink)]" />
                <span>BalajiOne Legal & Compliance Center</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[var(--ink)] tracking-tight leading-[1.05]">
                Privacy Policy
              </h1>

              <p className="text-lg sm:text-xl font-medium text-[var(--blue)] font-heading italic">
                &ldquo;Your privacy matters to us.&rdquo;
              </p>

              <p className="text-sm sm:text-base text-[var(--muted)] leading-relaxed max-w-2xl font-sans">
                BalajiOne Enterprises is dedicated to ethical, transparent, and responsible data management.
                This document sets out the legal framework governing how we collect, handle, process, and protect your information
                across our digital platforms, software engineering engagements, and enterprise solutions.
              </p>
            </div>

            {/* Meta Card: Last Updated & Actions */}
            <div className="lg:w-80 shrink-0 p-5 rounded-2xl border border-[var(--ink)] bg-[#fffdf7] shadow-[5px_5px_0_var(--ink)] space-y-4 text-xs font-mono">
              <div className="flex items-center justify-between pb-3 border-b border-[var(--line)]">
                <span className="text-[var(--muted)]">Effective & Last Updated:</span>
                <span className="font-bold text-[var(--ink)] bg-[var(--paper)] px-2.5 py-1 rounded-md border border-[var(--line)]">
                  October 2, 2026
                </span>
              </div>

              <div className="space-y-1.5 text-[var(--muted)] leading-relaxed">
                <div><strong className="text-[var(--ink)]">Entity:</strong> BalajiOne Enterprises</div>
                <div><strong className="text-[var(--ink)]">Jurisdiction:</strong> Bhubaneswar, Odisha, India</div>
                <div><strong className="text-[var(--ink)]">Official Website:</strong> <a href="https://balajione.dev" className="text-[var(--blue)] underline font-bold">balajione.dev</a></div>
                <div><strong className="text-[var(--ink)]">Contact Email:</strong> <a href="mailto:info@balajione.dev" className="text-[var(--blue)] underline font-bold">info@balajione.dev</a></div>
              </div>

              <div className="pt-2 flex items-center gap-2">
                <button
                  onClick={handleSharePolicy}
                  className="flex-1 py-2 px-3 rounded-xl border border-[var(--ink)] bg-[var(--paper)] hover:bg-[var(--lime)] font-bold text-center transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-[2px_2px_0_var(--ink)]"
                  title="Copy direct canonical link"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copiedLink ? 'Link Copied!' : 'Share Policy'}</span>
                </button>
                <button
                  onClick={onOpenContact}
                  className="py-2 px-3.5 rounded-xl border border-[var(--ink)] bg-[var(--ink)] text-white hover:bg-[var(--blue)] font-bold transition-all cursor-pointer flex items-center gap-1 shadow-[2px_2px_0_var(--ink)]"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Layout with Sticky Sidebar (Desktop) and Collapsible Drawer (Mobile) */}
      <div className="atelier-container max-w-6xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14">
        {/* Mobile Sticky / Collapsible Table of Contents Bar */}
        <div className="lg:hidden mb-8 sticky top-20 z-30">
          <div className="bg-[#fffdf7] border border-[var(--ink)] rounded-2xl shadow-[4px_4px_0_var(--ink)] p-3">
            <button
              onClick={() => setIsMobileTocOpen(!isMobileTocOpen)}
              className="w-full flex items-center justify-between text-xs font-mono font-bold text-[var(--ink)] py-1 px-2 cursor-pointer"
              aria-expanded={isMobileTocOpen}
            >
              <div className="flex items-center gap-2 truncate">
                <FileText className="w-4 h-4 text-[var(--blue)] shrink-0" />
                <span className="text-[var(--muted)]">Table of Contents:</span>
                <span className="truncate text-[var(--blue)]">
                  {TOC_SECTIONS.find((s) => s.id === activeSection)?.shortTitle || 'Select Section'}
                </span>
              </div>
              <ChevronDown className={`w-4 h-4 text-[var(--ink)] transition-transform duration-200 ${isMobileTocOpen ? 'rotate-180' : ''}`} />
            </button>

            {isMobileTocOpen && (
              <nav aria-label="Mobile Table of Contents" className="mt-3 pt-3 border-t border-[var(--line)] max-h-72 overflow-y-auto space-y-1">
                {TOC_SECTIONS.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-sans transition-all flex items-center justify-between cursor-pointer ${
                      activeSection === sec.id
                        ? 'bg-[var(--blue)] text-white font-bold'
                        : 'text-[var(--ink)] hover:bg-[var(--paper)]'
                    }`}
                  >
                    <span className="truncate">{sec.title}</span>
                    {activeSection === sec.id && <CheckCircle2 className="w-3.5 h-3.5 shrink-0 ml-2" />}
                  </button>
                ))}
              </nav>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Desktop Sticky Table of Contents Sidebar */}
          <aside className="hidden lg:block lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              <div className="bg-[#fffdf7] border border-[var(--ink)] rounded-2xl p-5 shadow-[5px_6px_0_var(--ink)]">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--line)]">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[var(--ink)]">
                    <FileText className="w-4 h-4 text-[var(--blue)]" />
                    <span>Table of Contents</span>
                  </div>
                  <span className="text-[10px] font-mono text-[var(--muted)]">16 Sections</span>
                </div>

                <nav aria-label="Table of Contents" className="space-y-1 max-h-[calc(100vh-230px)] overflow-y-auto pr-1">
                  {TOC_SECTIONS.map((sec) => {
                    const Icon = sec.icon;
                    const isActive = activeSection === sec.id;
                    return (
                      <button
                        key={sec.id}
                        onClick={() => scrollToSection(sec.id)}
                        className={`w-full text-left px-3 py-2 rounded-xl text-xs transition-all flex items-center gap-2.5 cursor-pointer ${
                          isActive
                            ? 'bg-[var(--blue)] text-white font-bold shadow-[2px_2px_0_var(--ink)]'
                            : 'text-[var(--muted)] hover:text-[var(--ink)] hover:bg-[var(--paper)] font-medium'
                        }`}
                      >
                        <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[var(--lime)]' : 'text-[var(--muted)]'}`} />
                        <span className="truncate">{sec.title}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>

              {/* Quick Contact & Inquiries Assist Card */}
              <div className="p-4 rounded-2xl border border-[var(--ink)] bg-[var(--lime)] text-[var(--ink)] shadow-[4px_4px_0_var(--ink)] space-y-3">
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[var(--ink)]" />
                  <span className="font-heading font-bold text-xs uppercase tracking-wide">Privacy Questions?</span>
                </div>
                <p className="text-xs text-[var(--ink)] leading-snug">
                  Reach out directly to our dedicated legal & data administration team for inquiries or data requests.
                </p>
                <a
                  href="mailto:info@balajione.dev"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--blue)] bg-white px-3 py-1.5 rounded-lg border border-[var(--ink)] shadow-[2px_2px_0_var(--ink)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>info@balajione.dev</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Main Privacy Policy Article Document */}
          <main className="lg:col-span-8">
            <article className="space-y-12 sm:space-y-16">
              {/* Highlighted General Disclaimer Notice Box */}
              <div className="p-5 sm:p-6 rounded-2xl border border-[var(--ink)] bg-[#fffdf7] shadow-[5px_5px_0_var(--ink)] space-y-3">
                <div className="flex items-center gap-2.5 text-[var(--blue)] font-heading font-bold text-sm sm:text-base">
                  <AlertTriangle className="w-5 h-5 text-[var(--blue)] shrink-0" />
                  <h2>General Privacy Notice &amp; Contractual Terms Notice</h2>
                </div>
                <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed font-sans">
                  This Privacy Policy provides general information about BalajiOne Enterprises&apos; data handling and privacy practices.
                  Depending on the specific services, bespoke software builds, enterprise SaaS solutions, or custom software engagements you use,
                  this policy may be supplemented by product-specific privacy notices, Master Services Agreements (MSAs), Statements of Work (SOWs),
                  Non-Disclosure Agreements (NDAs), or tailored contractual terms where applicable.
                </p>
              </div>

              {/* 1. Introduction */}
              <section id="introduction" className="space-y-5 scroll-mt-28">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--ink)] bg-[var(--paper-2)] text-xs font-mono font-bold text-[var(--muted)]">
                  <span>Section 01</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[var(--ink)] tracking-tight">
                  1. Introduction &amp; Scope
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#3f3e39] leading-relaxed font-sans">
                  <p>
                    Welcome to BalajiOne Enterprises (&quot;BalajiOne&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;).
                    BalajiOne Enterprises is an independent technology and software engineering company based in Bhubaneswar, Odisha, India.
                    We specialize in delivering high-impact technological solutions including AI-powered software development, bespoke web applications,
                    native and cross-platform mobile applications, cloud engineering solutions, UI/UX product design, DevOps automation, API architecture
                    and integration, business workflow automation, and scalable Software-as-a-Service (SaaS) product development.
                  </p>
                  <p>
                    We deeply respect the privacy of every individual who interacts with us, including website visitors, prospective and current clients,
                    business partners, vendor representatives, and authorized users of our software products and platforms.
                  </p>
                  <p>
                    The purpose of this Privacy Policy is to explain in a clear, straightforward, and transparent manner how BalajiOne Enterprises collects,
                    uses, stores, protects, shares, and handles your information when you visit our website (
                    <a href="https://balajione.dev" className="text-[var(--blue)] font-bold hover:underline">https://balajione.dev</a>),
                    reach out to our team, submit inquiries, request cost estimations, engage our professional engineering services, or utilize any
                    BalajiOne applications, client portals, or SaaS products.
                  </p>
                  <p>
                    By accessing or using our website, submitting information through our digital channels, or contracting our services, you acknowledge
                    the information handling practices described in this Privacy Policy, where applicable and to the extent permitted by applicable law.
                  </p>
                </div>
              </section>

              {/* 2. Information We Collect */}
              <section id="information-we-collect" className="space-y-5 scroll-mt-28">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--ink)] bg-[var(--paper-2)] text-xs font-mono font-bold text-[var(--muted)]">
                  <span>Section 02</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[var(--ink)] tracking-tight">
                  2. Information We Collect
                </h2>
                <p className="text-sm sm:text-base text-[#3f3e39] leading-relaxed font-sans">
                  We collect information necessary to provide software engineering services, respond to project requests, maintain business operations,
                  and ensure the security of our platforms. Depending on how you interact with BalajiOne Enterprises, the information we collect may include:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {/* Card A */}
                  <div className="p-4 rounded-xl border border-[var(--ink)] bg-[#fffdf7] shadow-[3px_3px_0_var(--ink)] space-y-2">
                    <h3 className="font-heading font-bold text-sm text-[var(--ink)] flex items-center gap-2">
                      <UserCheck className="w-4 h-4 text-[var(--blue)]" />
                      Personal Identification Data
                    </h3>
                    <ul className="text-xs text-[var(--muted)] space-y-1.5 list-disc list-inside">
                      <li>Full Name</li>
                      <li>Email address</li>
                      <li>Phone / mobile contact number</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>

                  {/* Card B */}
                  <div className="p-4 rounded-xl border border-[var(--ink)] bg-[#fffdf7] shadow-[3px_3px_0_var(--ink)] space-y-2">
                    <h3 className="font-heading font-bold text-sm text-[var(--ink)] flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-[var(--blue)]" />
                      Business &amp; Project Data
                    </h3>
                    <ul className="text-xs text-[var(--muted)] space-y-1.5 list-disc list-inside">
                      <li>Company or organization name</li>
                      <li>Job title and department</li>
                      <li>Industry vertical and website URL</li>
                      <li>Project scope, budget, and timeline criteria</li>
                    </ul>
                  </div>

                  {/* Card C */}
                  <div className="p-4 rounded-xl border border-[var(--ink)] bg-[#fffdf7] shadow-[3px_3px_0_var(--ink)] space-y-2">
                    <h3 className="font-heading font-bold text-sm text-[var(--ink)] flex items-center gap-2">
                      <FileText className="w-4 h-4 text-[var(--blue)]" />
                      Forms &amp; Enquiries
                    </h3>
                    <ul className="text-xs text-[var(--muted)] space-y-1.5 list-disc list-inside">
                      <li>Contact and general inquiry submissions</li>
                      <li>Cost estimator and scope calculator submissions</li>
                      <li>Consultation scheduling and demo bookings</li>
                      <li>Candidate job application details where submitted</li>
                    </ul>
                  </div>

                  {/* Card D */}
                  <div className="p-4 rounded-xl border border-[var(--ink)] bg-[#fffdf7] shadow-[3px_3px_0_var(--ink)] space-y-2">
                    <h3 className="font-heading font-bold text-sm text-[var(--ink)] flex items-center gap-2">
                      <Lock className="w-4 h-4 text-[var(--blue)]" />
                      Accounts &amp; Transactions
                    </h3>
                    <ul className="text-xs text-[var(--muted)] space-y-1.5 list-disc list-inside">
                      <li>Account usernames and access credentials for our SaaS tools</li>
                      <li>Billing address, tax identifiers, and invoicing records</li>
                      <li>Payment transaction identifiers (processed via third-party gateways)</li>
                      <li>Service activation and licensing records</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-[var(--ink)] bg-[var(--paper-2)] space-y-3 mt-4 text-xs sm:text-sm text-[#3f3e39] font-sans">
                  <h4 className="font-heading font-bold text-sm text-[var(--ink)] flex items-center gap-2">
                    <Server className="w-4 h-4 text-[var(--blue)]" />
                    Technical, Device &amp; Usage Information
                  </h4>
                  <p>
                    When you navigate our website or use web-based applications, our web servers and telemetry systems automatically record technical data.
                    This includes your Internet Protocol (IP) address, operating system, browser type and version, language settings, device hardware identifiers,
                    referring and exit pages, date/time stamps, clickstream activity, and diagnostic crash logs.
                  </p>
                  <p>
                    We also collect information through cookies and similar analytical technologies (as detailed in Section 5), as well as any feedback,
                    documentation, or correspondence voluntarily provided by you.
                  </p>
                </div>
              </section>

              {/* 3. How We Collect Information */}
              <section id="how-we-collect" className="space-y-5 scroll-mt-28">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--ink)] bg-[var(--paper-2)] text-xs font-mono font-bold text-[var(--muted)]">
                  <span>Section 03</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[var(--ink)] tracking-tight">
                  3. How We Collect Information
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#3f3e39] leading-relaxed font-sans">
                  <p>
                    We collect personal and technical information through transparent, lawful touchpoints across your interactions with BalajiOne Enterprises:
                  </p>
                  <ul className="space-y-2.5 list-disc list-inside pl-1 text-xs sm:text-sm">
                    <li><strong>Website Forms:</strong> Interactive discovery forms, newsletter signup fields, project cost estimators, and quick quote requests on our website.</li>
                    <li><strong>Contact &amp; Enquiry Inquiries:</strong> Direct submissions through our contact section, demo booking drawers, and meeting scheduling tools.</li>
                    <li><strong>Direct Electronic Correspondence:</strong> Email messages, telephone conversations, messaging platforms, and virtual video discovery sessions.</li>
                    <li><strong>Account Registration &amp; Onboarding:</strong> Client account provisioning, team workspace setup, or administrator credential creation for our proprietary SaaS platforms and ERP systems.</li>
                    <li><strong>Customer Onboarding &amp; Contract Scoping:</strong> Formal statement-of-work questionnaires, architecture discovery sessions, and project management communication.</li>
                    <li><strong>Software Applications &amp; Platform Usage:</strong> Authorized use of our deployed client portals, APIs, and software demonstrations where system events and performance logs are recorded.</li>
                    <li><strong>Cookies &amp; Automated Analytics:</strong> Automated telemetry, session cookies, and analytics tags deployed across our web properties.</li>
                    <li><strong>Third-Party Integrations:</strong> External tools (such as calendar scheduling services, cloud authentication widgets, or collaborative repositories) that you authorize to connect with our workflow.</li>
                  </ul>
                </div>
              </section>

              {/* 4. How We Use Your Information */}
              <section id="how-we-use-information" className="space-y-5 scroll-mt-28">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--ink)] bg-[var(--paper-2)] text-xs font-mono font-bold text-[var(--muted)]">
                  <span>Section 04</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[var(--ink)] tracking-tight">
                  4. How We Use Your Information
                </h2>
                <p className="text-sm sm:text-base text-[#3f3e39] leading-relaxed font-sans">
                  BalajiOne Enterprises processes your information strictly for legitimate commercial, operational, and legal purposes:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2">
                  {[
                    { title: 'Provide & Maintain Services', desc: 'Designing, building, testing, deploying, maintaining, and supporting bespoke software, web & mobile applications, and cloud infrastructures.' },
                    { title: 'Respond to Inquiries', desc: 'Evaluating project requirements, providing custom architectural proposals, and fulfilling service or quotation requests.' },
                    { title: 'Customer Communication', desc: 'Coordinating project milestones, delivering software updates, sharing sprint reviews, and administrative notices.' },
                    { title: 'Process Service Requests', desc: 'Executing development contracts, change orders, technical roadmaps, and agreed engagement deliverables.' },
                    { title: 'Account Administration', desc: 'Creating, maintaining, verifying, and safeguarding user credentials on our proprietary platforms and portals.' },
                    { title: 'Customer & Technical Support', desc: 'Diagnosing technical bugs, troubleshooting infrastructure anomalies, and providing responsive customer care.' },
                    { title: 'Improve Websites & Products', desc: 'Analyzing interaction trends, optimizing user interface flows, and enhancing application speed and performance.' },
                    { title: 'Develop New Offerings', desc: 'Researching enterprise market patterns to invent innovative AI tools, business automations, and SaaS utilities.' },
                    { title: 'Service-Critical Communications', desc: 'Sending security alerts, platform availability updates, maintenance notices, and policy revisions.' },
                    { title: 'Billing & Transaction Processing', desc: 'Generating commercial invoices, recording payments, and fulfilling accounting records where applicable.' },
                    { title: 'Security & Abuse Prevention', desc: 'Detecting, investigating, and mitigating cyberattacks, fraudulent actions, security vulnerabilities, or unauthorized access.' },
                    { title: 'Legal & Regulatory Compliance', desc: 'Complying with applicable judicial, statutory, financial, and tax obligations to the extent permitted by applicable law.' }
                  ].map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl border border-[var(--ink)] bg-[#fffdf7] shadow-[2px_2px_0_var(--ink)]">
                      <div className="font-heading font-bold text-xs text-[var(--ink)] mb-1 flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--blue)] shrink-0" />
                        <span>{item.title}</span>
                      </div>
                      <p className="text-xs text-[var(--muted)] leading-relaxed font-sans">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* 5. Cookies and Tracking Technologies */}
              <section id="cookies-tracking" className="space-y-5 scroll-mt-28">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--ink)] bg-[var(--paper-2)] text-xs font-mono font-bold text-[var(--muted)]">
                  <span>Section 05</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[var(--ink)] tracking-tight">
                  5. Cookies and Tracking Technologies
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#3f3e39] leading-relaxed font-sans">
                  <p>
                    Our website and digital tools utilize cookies, local storage, session identifiers, and similar technologies.
                    Cookies are small text files placed on your browser or device that enable us to recognize your device,
                    remember preferences, optimize page rendering speeds, and analyze aggregate traffic patterns.
                  </p>

                  <div className="p-4 rounded-xl border border-[var(--ink)] bg-[#fffdf7] space-y-3">
                    <h3 className="font-heading font-bold text-sm text-[var(--ink)]">Categories of Cookies We Use</h3>
                    <div className="space-y-2 text-xs text-[var(--muted)]">
                      <div>
                        <strong className="text-[var(--ink)]">Essential / Strictly Necessary Cookies:</strong> Required for the fundamental operation of the website, including core security, form handling, and navigation. The website cannot function properly without these.
                      </div>
                      <div>
                        <strong className="text-[var(--ink)]">Performance &amp; Analytics Cookies:</strong> Allow us to collect aggregated, anonymized metrics on visitor numbers, popular pages, bounce rates, and navigation pathways to improve website usability.
                      </div>
                      <div>
                        <strong className="text-[var(--ink)]">Functional Cookies:</strong> Remember your interface preferences (such as language, layout preferences, or previous form inputs) to deliver a personalized experience.
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl border border-[var(--ink)] bg-[var(--paper-2)] space-y-2 text-xs sm:text-sm">
                    <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[var(--ink)]">
                      Managing and Disabling Cookies
                    </h4>
                    <p className="text-[var(--muted)] leading-relaxed">
                      You have the right to control, block, or delete cookies at any time through your browser settings.
                      Most modern browsers (including Google Chrome, Mozilla Firefox, Apple Safari, and Microsoft Edge) provide options
                      to reject cookies or alert you when a cookie is placed.
                    </p>
                    <p className="text-[var(--muted)] leading-relaxed font-semibold">
                      Please note that if you choose to disable or reject certain essential cookies, some parts, features, or interactive tools
                      of the BalajiOne website may experience diminished functionality or become inaccessible.
                    </p>
                  </div>
                </div>
              </section>

              {/* 6. Third-Party Services */}
              <section id="third-party-services" className="space-y-5 scroll-mt-28">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--ink)] bg-[var(--paper-2)] text-xs font-mono font-bold text-[var(--muted)]">
                  <span>Section 06</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[var(--ink)] tracking-tight">
                  6. Third-Party Services &amp; Integrations
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#3f3e39] leading-relaxed font-sans">
                  <p>
                    To operate our digital ecosystem, deliver enterprise-grade performance, and provide seamless customer experiences,
                    BalajiOne Enterprises partners with carefully selected, trusted third-party service providers.
                    These specialized providers support various functions, including:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    {[
                      { icon: Server, title: 'Cloud Infrastructure & Hosting', desc: 'Secure cloud hosting, serverless computing, and content delivery networks (CDNs).' },
                      { icon: Database, title: 'Analytics & Diagnostic Monitoring', desc: 'Aggregated website traffic analysis, application logging, and error tracking.' },
                      { icon: Lock, title: 'Payment Gateways & Invoicing', desc: 'PCI-compliant third-party payment processors for secure service and subscription payments.' },
                      { icon: Mail, title: 'Email & Communication Systems', desc: 'Transactional email relays, notification systems, and customer ticketing platforms.' },
                      { icon: UserCheck, title: 'Identity & Authentication', desc: 'Secure OAuth providers and authentication services for client portal access.' },
                      { icon: Globe, title: 'APIs & Development Libraries', desc: 'Third-party APIs and libraries integrated into specific client applications as contracted.' }
                    ].map((svc, i) => {
                      const Icon = svc.icon;
                      return (
                        <div key={i} className="p-3.5 rounded-xl border border-[var(--ink)] bg-[#fffdf7] shadow-[2px_2px_0_var(--ink)]">
                          <div className="flex items-center gap-2 font-heading font-bold text-xs text-[var(--ink)] mb-1">
                            <Icon className="w-3.5 h-3.5 text-[var(--blue)] shrink-0" />
                            <span>{svc.title}</span>
                          </div>
                          <p className="text-[var(--muted)] leading-relaxed">{svc.desc}</p>
                        </div>
                      );
                    })}
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                    These third-party vendors are authorized to access personal information only to the extent necessary to execute their assigned tasks
                    on our behalf. They process information in accordance with their respective privacy policies, security safeguards, and applicable
                    data processing agreements.
                  </p>
                </div>
              </section>

              {/* 7. Data Sharing and Disclosure */}
              <section id="data-sharing-disclosure" className="space-y-5 scroll-mt-28">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--ink)] bg-[var(--paper-2)] text-xs font-mono font-bold text-[var(--muted)]">
                  <span>Section 07</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[var(--ink)] tracking-tight">
                  7. Data Sharing and Disclosure
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#3f3e39] leading-relaxed font-sans">
                  {/* Non-sale statement alert */}
                  <div className="p-4 rounded-xl border border-[var(--ink)] bg-[var(--lime)] text-[var(--ink)] shadow-[3px_3px_0_var(--ink)] font-sans">
                    <p className="text-xs sm:text-sm font-bold flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[var(--ink)] shrink-0" />
                      We do not sell your personal data.
                    </p>
                    <p className="text-xs text-[var(--ink)] mt-1">
                      BalajiOne Enterprises does NOT sell, rent, trade, lease, or monetize your personal information to third parties
                      for money or any other commercial consideration under any circumstances.
                    </p>
                  </div>

                  <p>
                    We disclose personal information only when reasonably necessary, under strict confidentiality, and under the following defined circumstances:
                  </p>

                  <ul className="space-y-2.5 list-disc list-inside pl-1 text-xs sm:text-sm text-[#3f3e39]">
                    <li>
                      <strong>Authorized Service Providers:</strong> Vetted third-party contractors, software engineers, cloud providers, and operational agents who assist in our business functions under binding confidentiality commitments.
                    </li>
                    <li>
                      <strong>Technology &amp; Payment Partners:</strong> Technology vendors and payment processing gateways required to complete authorized financial transactions or deliver contracted digital services.
                    </li>
                    <li>
                      <strong>Legal &amp; Regulatory Authorities:</strong> When required by applicable law, judicial order, search warrant, subpoena, regulatory statute, or enforceable government request, or to protect the vital rights, safety, and property of BalajiOne Enterprises, our clients, or the public.
                    </li>
                    <li>
                      <strong>Professional Advisers:</strong> Qualified external legal counsel, chartered accountants, financial auditors, and insurers where necessary for legitimate business governance, dispute resolution, or compliance audits.
                    </li>
                    <li>
                      <strong>Business Successors:</strong> In the event of a proposed or completed corporate merger, acquisition, restructuring, divestiture, or transfer of business assets, personal information may be transferred as part of the business transition, subject to the recipient adopting privacy standards substantially equivalent to this policy.
                    </li>
                  </ul>
                </div>
              </section>

              {/* 8. Data Security */}
              <section id="data-security" className="space-y-5 scroll-mt-28">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--ink)] bg-[var(--paper-2)] text-xs font-mono font-bold text-[var(--muted)]">
                  <span>Section 08</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[var(--ink)] tracking-tight">
                  8. Data Security Safeguards
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#3f3e39] leading-relaxed font-sans">
                  <p>
                    BalajiOne Enterprises implements reasonable and appropriate technical, administrative, and organizational safeguards designed to protect
                    your personal information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or unauthorized access.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    <div className="p-3.5 rounded-xl border border-[var(--ink)] bg-[#fffdf7] shadow-[2px_2px_0_var(--ink)] text-xs space-y-1">
                      <strong className="text-[var(--ink)] font-heading block">Access Controls</strong>
                      <span className="text-[var(--muted)]">Role-based access credentials, least-privilege authorizations, and restricted staff permissions.</span>
                    </div>
                    <div className="p-3.5 rounded-xl border border-[var(--ink)] bg-[#fffdf7] shadow-[2px_2px_0_var(--ink)] text-xs space-y-1">
                      <strong className="text-[var(--ink)] font-heading block">Transport Security</strong>
                      <span className="text-[var(--muted)]">Industry-standard transport encryption (HTTPS/TLS) across our public websites and service endpoints.</span>
                    </div>
                    <div className="p-3.5 rounded-xl border border-[var(--ink)] bg-[#fffdf7] shadow-[2px_2px_0_var(--ink)] text-xs space-y-1">
                      <strong className="text-[var(--ink)] font-heading block">System Hygiene</strong>
                      <span className="text-[var(--muted)]">Periodic dependency audits, vulnerability patching, environment isolation, and secure coding practices.</span>
                    </div>
                  </div>

                  {/* Important Security Disclaimer Box */}
                  <div className="p-4 rounded-xl border border-[var(--ink)] bg-[var(--paper-2)] space-y-2 text-xs sm:text-sm">
                    <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-[var(--red)] flex items-center gap-1.5">
                      <AlertTriangle className="w-4 h-4 text-[var(--red)] shrink-0" />
                      <span>Important Notice Regarding Internet Security</span>
                    </h3>
                    <p className="text-[var(--muted)] leading-relaxed">
                      While we make reasonable and diligent efforts to safeguard your information, <strong>no method of data transmission across the Internet or method of electronic data storage is 100% secure</strong>.
                      Consequently, BalajiOne Enterprises cannot and does not guarantee or warrant absolute security.
                      You transmit information to us at your own risk, and you are responsible for maintaining the confidentiality of any account passwords or API access credentials issued to you.
                    </p>
                  </div>
                </div>
              </section>

              {/* 9. Data Retention */}
              <section id="data-retention" className="space-y-5 scroll-mt-28">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--ink)] bg-[var(--paper-2)] text-xs font-mono font-bold text-[var(--muted)]">
                  <span>Section 09</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[var(--ink)] tracking-tight">
                  9. Data Retention Practices
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#3f3e39] leading-relaxed font-sans">
                  <p>
                    BalajiOne Enterprises retains personal information only for as long as reasonably necessary to fulfill the purposes for which it was originally collected, including:
                  </p>
                  <ul className="space-y-2 list-disc list-inside pl-1 text-xs sm:text-sm text-[#3f3e39]">
                    <li>Fulfilling our contractual commitments and ongoing development, maintenance, and warranty engagements.</li>
                    <li>Maintaining active user accounts and ongoing business relationships.</li>
                    <li>Complying with applicable legal, statutory, tax, corporate, and accounting record-keeping requirements.</li>
                    <li>Resolving disputes, enforcing contractual agreements, and defending legal claims.</li>
                    <li>Safeguarding our technical systems against recurring security threats, fraud, or abuse.</li>
                  </ul>
                  <p className="text-xs sm:text-sm text-[var(--muted)]">
                    When personal information is no longer needed for its operational or legal purpose, we take reasonable steps to securely delete,
                    permanently erase, or de-identify the data in accordance with our operational retention standards and applicable law.
                  </p>
                </div>
              </section>

              {/* 10. User Rights */}
              <section id="user-rights" className="space-y-5 scroll-mt-28">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--ink)] bg-[var(--paper-2)] text-xs font-mono font-bold text-[var(--muted)]">
                  <span>Section 10</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[var(--ink)] tracking-tight">
                  10. Your Privacy Rights &amp; Choices
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#3f3e39] leading-relaxed font-sans">
                  <p>
                    Depending on your jurisdiction and to the extent permitted by applicable law, you may have specific rights regarding your personal information:
                  </p>

                  <div className="space-y-2.5 text-xs sm:text-sm">
                    {[
                      { label: 'Right of Access', desc: 'You may request confirmation of whether we process your personal data and request a copy of the personal information we hold about you.' },
                      { label: 'Right to Correction & Rectification', desc: 'You may request correction or updating of any inaccurate, incomplete, or out-of-date personal information.' },
                      { label: 'Right to Deletion / Erasure', desc: 'You may request deletion of your personal data where retention is no longer necessary for legitimate business or legal purposes.' },
                      { label: 'Right to Restriction of Processing', desc: 'You may request that we temporarily or permanently restrict the processing of your personal information under certain circumstances.' },
                      { label: 'Right to Object', desc: 'You may object to the processing of your personal information for direct marketing or where processing relies upon legitimate interest grounds.' },
                      { label: 'Right to Withdraw Consent', desc: 'Where our processing is based upon your explicit consent, you have the right to withdraw that consent at any time without affecting past processing lawfulness.' },
                      { label: 'Right to Information & Inquiries', desc: 'You have the right to request comprehensive information regarding how your data is collected, stored, and protected.' }
                    ].map((r, idx) => (
                      <div key={idx} className="p-3.5 rounded-xl border border-[var(--ink)] bg-[#fffdf7] shadow-[2px_2px_0_var(--ink)]">
                        <strong className="text-[var(--ink)] font-heading block mb-0.5">{r.label}</strong>
                        <span className="text-[var(--muted)]">{r.desc}</span>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl border border-[var(--ink)] bg-[var(--paper-2)] space-y-2 text-xs sm:text-sm">
                    <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-[var(--ink)]">
                      How to Exercise Your Rights
                    </h3>
                    <p className="text-[var(--muted)] leading-relaxed">
                      To exercise any of the applicable rights listed above, please submit a written request to{' '}
                      <a href="mailto:info@balajione.dev" className="text-[var(--blue)] font-bold underline">
                        info@balajione.dev
                      </a>.
                      To protect your privacy and security, we may require verification of your identity before fulfilling your request.
                      Please note that these rights are subject to applicable legal, regulatory, dispute-resolution, and legitimate contractual exceptions.
                    </p>
                  </div>
                </div>
              </section>

              {/* 11. Children's Privacy */}
              <section id="childrens-privacy" className="space-y-5 scroll-mt-28">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--ink)] bg-[var(--paper-2)] text-xs font-mono font-bold text-[var(--muted)]">
                  <span>Section 11</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[var(--ink)] tracking-tight">
                  11. Children&apos;s Privacy
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#3f3e39] leading-relaxed font-sans">
                  <p>
                    The BalajiOne Enterprises website, software applications, and commercial engineering services are designed for business professionals,
                    commercial enterprises, and adult individuals. We do not intentionally target, market to, or direct our services toward children under the age of 18
                    (or the age of majority in your jurisdiction).
                  </p>
                  <p>
                    We do not knowingly collect personal information from children without appropriate parental or legal guardian authorization where required by applicable law.
                    If we become aware that personal information has been inadvertently collected from a child without verified authorization, we will take immediate
                    and reasonable steps to delete such information from our active records.
                    If you believe a child has provided us with personal data, please inform us immediately at{' '}
                    <a href="mailto:info@balajione.dev" className="text-[var(--blue)] font-bold underline">info@balajione.dev</a>.
                  </p>
                </div>
              </section>

              {/* 12. Links to Third-Party Websites */}
              <section id="third-party-links" className="space-y-5 scroll-mt-28">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--ink)] bg-[var(--paper-2)] text-xs font-mono font-bold text-[var(--muted)]">
                  <span>Section 12</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[var(--ink)] tracking-tight">
                  12. Links to Third-Party Websites
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#3f3e39] leading-relaxed font-sans">
                  <p>
                    Our website, blog articles, product demonstrations, and documentation may contain hyperlinks leading to external third-party websites,
                    tools, or digital services that are not owned, operated, or controlled by BalajiOne Enterprises.
                  </p>
                  <p>
                    We provide these links solely for convenience, context, or informational reference. BalajiOne Enterprises has no control over,
                    and assumes no liability or responsibility for, the privacy policies, content, security mechanisms, or practices of any external third-party site.
                    We strongly recommend that you carefully review the privacy policy and terms of service of every third-party website you visit.
                  </p>
                </div>
              </section>

              {/* 13. International Data Processing */}
              <section id="international-processing" className="space-y-5 scroll-mt-28">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--ink)] bg-[var(--paper-2)] text-xs font-mono font-bold text-[var(--muted)]">
                  <span>Section 13</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[var(--ink)] tracking-tight">
                  13. International Data Processing
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#3f3e39] leading-relaxed font-sans">
                  <p>
                    BalajiOne Enterprises is headquartered in Bhubaneswar, Odisha, India.
                    However, because we engineer globally distributed web applications, utilize multi-region cloud infrastructures,
                    and collaborate with international clients and software vendors, personal information may be transferred to, stored,
                    and processed on cloud servers located outside your state, province, or country of residence.
                  </p>
                  <p>
                    The data protection and privacy laws of these jurisdictions may differ from those in your local region.
                    Whenever cross-border processing occurs, we take reasonable and appropriate measures to ensure that your information receives
                    an adequate level of protection, consistent with this Privacy Policy and applicable data protection requirements.
                  </p>
                </div>
              </section>

              {/* 14. Marketing Communications */}
              <section id="marketing-communications" className="space-y-5 scroll-mt-28">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--ink)] bg-[var(--paper-2)] text-xs font-mono font-bold text-[var(--muted)]">
                  <span>Section 14</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[var(--ink)] tracking-tight">
                  14. Marketing Communications &amp; Opt-Out
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#3f3e39] leading-relaxed font-sans">
                  <p>
                    With your consent or where permitted by applicable law, we may periodically send technology insights, software engineering updates,
                    AI trend reports, or announcements regarding BalajiOne products and services to your email address.
                  </p>
                  <div className="p-4 rounded-xl border border-[var(--ink)] bg-[#fffdf7] space-y-2">
                    <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-[var(--ink)]">
                      How to Unsubscribe or Opt-Out
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--muted)] leading-relaxed">
                      You may opt out of receiving promotional and non-essential marketing emails at any time by:
                    </p>
                    <ul className="text-xs text-[var(--muted)] list-disc list-inside space-y-1">
                      <li>Clicking the &quot;Unsubscribe&quot; link located at the bottom of any promotional email we send.</li>
                      <li>Replying directly with &quot;Unsubscribe&quot; or sending an email request to <a href="mailto:info@balajione.dev" className="text-[var(--blue)] font-bold underline">info@balajione.dev</a>.</li>
                    </ul>
                    <p className="text-xs text-[var(--muted)] pt-1">
                      <strong>Important Notice:</strong> Opting out of marketing communications does NOT affect our ability to send you essential, non-marketing,
                      or transactional communications, such as invoice notifications, project delivery updates, security alerts, and contractual notices.
                    </p>
                  </div>
                </div>
              </section>

              {/* 15. Changes to This Privacy Policy */}
              <section id="policy-changes" className="space-y-5 scroll-mt-28">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--ink)] bg-[var(--paper-2)] text-xs font-mono font-bold text-[var(--muted)]">
                  <span>Section 15</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[var(--ink)] tracking-tight">
                  15. Changes to This Privacy Policy
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#3f3e39] leading-relaxed font-sans">
                  <p>
                    BalajiOne Enterprises may update, modify, or revise this Privacy Policy periodically to reflect changes in our operational procedures,
                    service offerings, technological advancements, industry best practices, or applicable legal and regulatory standards.
                  </p>
                  <p>
                    When material changes are made, we will update the &quot;Last Updated&quot; date prominently displayed at the top of this page.
                    In situations involving significant modifications that alter the nature of our data processing, we may provide more prominent notice,
                    such as a notification banner on our website or direct electronic communication to registered clients.
                  </p>
                  <p>
                    We encourage you to periodically review this Privacy Policy to remain informed about how BalajiOne Enterprises protects and manages your information.
                    Your continued use of our website or services following any updates indicates your acknowledgment of the revised Privacy Policy.
                  </p>
                </div>
              </section>

              {/* 16. Contact Us */}
              <section id="contact-us" className="space-y-6 scroll-mt-28 pt-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--ink)] bg-[var(--paper-2)] text-xs font-mono font-bold text-[var(--muted)]">
                  <span>Section 16</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[var(--ink)] tracking-tight">
                  16. Contact Information
                </h2>

                <p className="text-sm sm:text-base text-[#3f3e39] leading-relaxed font-sans">
                  If you have any questions, comments, concerns, or requests regarding this Privacy Policy, our data protection practices,
                  or wish to exercise your applicable privacy rights, please contact our team using the official details below:
                </p>

                {/* Official Contact Card */}
                <div className="p-6 sm:p-8 rounded-2xl border border-[var(--ink)] bg-[#fffdf7] shadow-[6px_7px_0_var(--ink)] space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--line)]">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 rounded-xl bg-[var(--blue)] text-white border border-[var(--ink)] flex items-center justify-center font-heading font-extrabold text-lg shadow-[3px_3px_0_var(--ink)]">
                        B1
                      </div>
                      <div>
                        <h3 className="font-heading font-extrabold text-lg text-[var(--ink)]">BalajiOne Enterprises</h3>
                        <span className="text-xs font-mono text-[var(--muted)]">Technology &amp; Software Development Company</span>
                      </div>
                    </div>

                    <button
                      onClick={onOpenContact}
                      className="inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl border border-[var(--ink)] bg-[var(--red)] text-white font-heading font-bold text-sm shadow-[3px_3px_0_var(--ink)] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[1px_1px_0_var(--ink)] transition-all cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Contact Us</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm font-sans">
                    <div className="space-y-1">
                      <span className="text-xs font-mono text-[var(--muted)] uppercase tracking-wider block">Location</span>
                      <p className="font-bold text-[var(--ink)]">Bhubaneswar, Odisha, India</p>
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs font-mono text-[var(--muted)] uppercase tracking-wider block">Official Inquiries &amp; Privacy Email</span>
                      <a href="mailto:info@balajione.dev" className="font-bold text-[var(--blue)] hover:underline break-all">
                        info@balajione.dev
                      </a>
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs font-mono text-[var(--muted)] uppercase tracking-wider block">Official Website</span>
                      <a href="https://balajione.dev" className="font-bold text-[var(--blue)] hover:underline">
                        https://balajione.dev
                      </a>
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs font-mono text-[var(--muted)] uppercase tracking-wider block">Response Commitment</span>
                      <p className="text-[var(--muted)]">We endeavor to review and respond to privacy inquiries promptly.</p>
                    </div>
                  </div>
                </div>
              </section>
            </article>
          </main>
        </div>
      </div>
    </div>
  );
};
