import React, { useState } from 'react';
import {
  Currency,
  ExcellenceModuleData,
  Language,
  ProjectCardData,
} from './data/imaadData';
import { PortalPreloader } from './components/PortalPreloader';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { SovereignMetricsBar } from './components/SovereignMetricsBar';
import { MissionAndStrategy } from './components/MissionAndStrategy';
import { ExcellenceAndProjects } from './components/ExcellenceAndProjects';
import { ResponsibilitySection } from './components/ResponsibilitySection';
import { ProjectsPage } from './components/ProjectsPage';
import { ContactPage } from './components/ContactPage';
import { ContactAndFooter } from './components/ContactAndFooter';
import { soundEngine } from './utils/soundEngine';

export function App() {
  const [portalOpen, setPortalOpen] = useState<boolean>(true);
  const [lang, setLang] = useState<Language>('fr');
  const [currency, setCurrency] = useState<Currency>('FCFA');
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [soundOn, setSoundOn] = useState<boolean>(false);
  const [currentView, setCurrentView] = useState<'home' | 'projects' | 'contact'>('home');

  const [activeDossier, setActiveDossier] = useState<{
    type: 'module' | 'project' | 'submit' | null;
    module?: ExcellenceModuleData;
    project?: ProjectCardData;
  }>({ type: null });

  const handleToggleSound = () => {
    const nextState = soundEngine.toggle();
    setSoundOn(nextState);
  };

  const handleViewAllProjects = () => {
    setCurrentView('projects');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateContact = () => {
    setCurrentView('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-obsidian-950 text-slate-50">
      {/* 1. Interactive 3D WebGL Orbit Entry Portal */}
      <PortalPreloader
        isOpen={portalOpen}
        onEnter={() => setPortalOpen(false)}
        lang={lang}
      />

      {/* 2. Fixed Architectural HUD Navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        currency={currency}
        setCurrency={setCurrency}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        soundOn={soundOn}
        onToggleSound={handleToggleSound}
        currentView={currentView}
        onNavigateHome={handleBackToHome}
        onNavigateProjects={handleViewAllProjects}
        onNavigateContact={handleNavigateContact}
        onReplayIntro={() => {
          setMenuOpen(false);
          setPortalOpen(true);
        }}
        onOpenSubmitModal={() => setActiveDossier({ type: 'submit' })}
      />

      {/* 3. Main Views: Homepage or Dedicated Projects Page */}
      <main>
        {currentView === 'home' ? (
          <>
            {/* Full-Viewport Cinematic Hero */}
            <HeroSection
              lang={lang}
              currency={currency}
              onOpenSubmitModal={() => setActiveDossier({ type: 'submit' })}
            />

            {/* Sovereign Ticker & Key Institutional Metrics Bar */}
            <SovereignMetricsBar lang={lang} currency={currency} />

            {/* The Mission & 3-Pillar Hover-Reveal Strategy Grid */}
            <MissionAndStrategy lang={lang} />

            {/* Corporate & Sovereign Responsibility (ESG Impact Banner) */}
            <ResponsibilitySection
              lang={lang}
              onNavigateContact={handleNavigateContact}
            />

            {/* Areas of Excellence (01-03) + 3 Flagship Projects Showcase */}
            <ExcellenceAndProjects
              lang={lang}
              currency={currency}
              onInspectModule={(module) =>
                setActiveDossier({ type: 'module', module })
              }
              onInspectProject={(project) =>
                setActiveDossier({ type: 'project', project })
              }
              onViewAllProjects={handleViewAllProjects}
            />
          </>
        ) : currentView === 'projects' ? (
          /* Dedicated Projects Page (Full Portfolio View) */
          <ProjectsPage
            lang={lang}
            currency={currency}
            onBackToHome={handleBackToHome}
            onInspectProject={(project) =>
              setActiveDossier({ type: 'project', project })
            }
            onNavigateContact={handleNavigateContact}
          />
        ) : (
          /* Dedicated Contact Page */
          <ContactPage lang={lang} onBackToHome={handleBackToHome} />
        )}

        {/* Contact Desk, Footer & Interactive Dossier Modal */}
        <ContactAndFooter
          lang={lang}
          activeDossier={activeDossier}
          onCloseDossier={() => setActiveDossier({ type: null })}
          onOpenSubmitModal={() => setActiveDossier({ type: 'submit' })}
          onNavigateContact={handleNavigateContact}
        />
      </main>
    </div>
  );
}

export default App;
