import { useState } from 'react';
import { CursorGlow } from './components/common/CursorGlow';
import { ScrollProgress } from './components/common/ScrollProgress';
import { LoadingScreen } from './components/common/LoadingScreen';
import { CmdKSearchModal } from './components/common/CmdKSearchModal';
import { ScheduleDrawer } from './components/common/ScheduleDrawer';
import { AIChatWidget } from './components/common/AIChatWidget';
import { CostEstimatorModal } from './components/common/CostEstimatorModal';

import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';

import { Hero } from './components/sections/Hero';
import { TrustedBy } from './components/sections/TrustedBy';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { FeaturedProducts } from './components/sections/FeaturedProducts';
import { ProcessTimeline } from './components/sections/ProcessTimeline';
import { TechStack } from './components/sections/TechStack';
import { Portfolio } from './components/sections/Portfolio';
import { Statistics } from './components/sections/Statistics';
import { Testimonials } from './components/sections/Testimonials';
import { Pricing } from './components/sections/Pricing';
import { FAQSection } from './components/sections/FAQSection';
import { ContactSection } from './components/sections/ContactSection';

import { CareersModal } from './components/views/CareersModal';
import { TeamModal } from './components/views/TeamModal';
import { LegalModal } from './components/views/LegalModal';
import { NotFoundView } from './components/views/NotFoundView';

export function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isScheduleOpen, setIsScheduleOpen] = useState(false);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);

  const [isCareersOpen, setIsCareersOpen] = useState(false);
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [is404Open, setIs404Open] = useState(false);

  const [prefilledScope, setPrefilledScope] = useState('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceOrPlan = (scopeText: string) => {
    setPrefilledScope(scopeText);
    scrollToSection('contact');
  };

  const handleOpenView = (viewName: 'team' | 'careers' | 'legal' | '404') => {
    if (viewName === 'team') setIsTeamOpen(true);
    if (viewName === 'careers') setIsCareersOpen(true);
    if (viewName === 'legal') setIsLegalOpen(true);
    if (viewName === '404') setIs404Open(true);
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white selection:bg-blue-600 selection:text-white font-sans overflow-x-hidden relative">
      {/* Initial Loading Splash Screen */}
      <LoadingScreen />

      {/* Top Scroll Reading Progress */}
      <ScrollProgress />

      {/* Interactive Mouse Glow Cursor */}
      <CursorGlow />

      {/* Navigation Header */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenSchedule={() => setIsScheduleOpen(true)}
        onNavigateSection={scrollToSection}
      />

      {/* Main Page Content */}
      <main>
        <Hero
          onStartProject={() => scrollToSection('contact')}
          onBookConsultation={() => setIsScheduleOpen(true)}
          onOpenEstimator={() => setIsEstimatorOpen(true)}
        />

        <TrustedBy />

        <About />

        <Services onSelectService={handleSelectServiceOrPlan} />

        <WhyChooseUs />

        <FeaturedProducts onBookDemo={(productTitle) => handleSelectServiceOrPlan(`Demo request for ${productTitle}`)} />

        <ProcessTimeline />

        <TechStack />

        <Portfolio />

        <Statistics />

        <Testimonials />

        <Pricing
          onSelectPlan={handleSelectServiceOrPlan}
          onOpenEstimator={() => setIsEstimatorOpen(true)}
        />

        <FAQSection />

        <ContactSection
          onOpenSchedule={() => setIsScheduleOpen(true)}
          prefilledScope={prefilledScope}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigateSection={scrollToSection}
        onOpenView={handleOpenView}
      />

      {/* Floating Utilities */}
      <AIChatWidget onBookMeeting={() => setIsScheduleOpen(true)} />

      <CmdKSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectAction={scrollToSection}
      />

      <ScheduleDrawer
        isOpen={isScheduleOpen}
        onClose={() => setIsScheduleOpen(false)}
      />

      <CostEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onSelectPlan={handleSelectServiceOrPlan}
      />

      {/* View Modals */}
      <CareersModal
        isOpen={isCareersOpen}
        onClose={() => setIsCareersOpen(false)}
      />

      <TeamModal
        isOpen={isTeamOpen}
        onClose={() => setIsTeamOpen(false)}
      />

      <LegalModal
        isOpen={isLegalOpen}
        onClose={() => setIsLegalOpen(false)}
      />

      <NotFoundView
        isOpen={is404Open}
        onClose={() => setIs404Open(false)}
      />
    </div>
  );
}

export default App;
