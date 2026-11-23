import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Currency, Language } from '../data/imaadData';
import { HudCorners } from './ui/BlueprintPrimitives';
import { soundEngine } from '../utils/soundEngine';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  currency?: Currency;
  setCurrency?: (c: Currency) => void;
  menuOpen?: boolean;
  setMenuOpen?: (o: boolean) => void;
  soundOn?: boolean;
  onToggleSound?: () => void;
  onReplayIntro?: () => void;
  onOpenSubmitModal?: () => void;
  currentView?: 'home' | 'projects' | 'team' | 'service' | 'contact';
  onNavigateHome?: () => void;
  onNavigateProjects?: () => void;
  onNavigateTeam?: () => void;
  onNavigateService?: (serviceId: string) => void;
  onNavigateContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  currentView = 'home',
  onNavigateHome,
  onNavigateProjects,
  onNavigateTeam,
  onNavigateService,
  onNavigateContact,
  onOpenSubmitModal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = (targetHash: string) => {
    soundEngine.playClick();
    setMobileMenuOpen(false);
    if (currentView !== 'home') {
      if (onNavigateHome) onNavigateHome();
      setTimeout(() => {
        const el = document.querySelector(targetHash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 90);
    } else {
      const el = document.querySelector(targetHash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGoProjects = () => {
    soundEngine.playClick();
    setMobileMenuOpen(false);
    if (currentView !== 'projects' && onNavigateProjects) {
      onNavigateProjects();
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleGoTeam = () => {
    soundEngine.playClick();
    setMobileMenuOpen(false);
    if (onNavigateTeam) {
      onNavigateTeam();
    } else {
      handleNavClick('#team');
    }
  };

  const handleGoServices = () => {
    soundEngine.playClick();
    setMobileMenuOpen(false);
    if (currentView === 'home') {
      handleNavClick('#excellence');
    } else if (onNavigateService) {
      onNavigateService('excellence-01');
    }
  };

  const handleGoContact = () => {
    soundEngine.playClick();
    setMobileMenuOpen(false);
    if (currentView !== 'contact' && onNavigateContact) {
      onNavigateContact();
    } else if (onNavigateContact) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (onOpenSubmitModal) {
      onOpenSubmitModal();
    }
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-[1000] border-b transition-all duration-400 ${
        scrolled || currentView !== 'home' || mobileMenuOpen
          ? 'border-[#F8F6F2]/15 bg-[#0E1B2E]/95 backdrop-blur-md shadow-[0_8px_28px_rgba(14,27,46,0.35)]'
          : 'border-[#F8F6F2]/10 bg-[#0E1B2E]/45 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-[74px] sm:h-[86px] md:h-[96px] w-full max-w-[1360px] items-center justify-between px-5 sm:px-10 lg:px-16">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          className="group flex shrink-0 items-center py-1.5 transition-opacity duration-300 hover:opacity-90"
        >
          <img
            src="/logo-imaad.svg"
            alt="Imaad Financial Group"
            className="h-11 sm:h-14 md:h-16 w-auto object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <a
            href="#mission"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#mission');
            }}
            onMouseEnter={() => soundEngine.playHover()}
            className="font-sans text-xs font-semibold tracking-[0.16em] text-[#D8DDE6] uppercase transition-colors hover:text-[#C1A258]"
          >
            {lang === 'en' ? 'About' : 'À propos'}
          </a>

          <a
            href="#excellence"
            onClick={(e) => {
              e.preventDefault();
              handleGoServices();
            }}
            onMouseEnter={() => soundEngine.playHover()}
            className={`font-sans text-xs font-semibold tracking-[0.16em] uppercase transition-colors ${
              currentView === 'service'
                ? 'text-[#C1A258]'
                : 'text-[#D8DDE6] hover:text-[#C1A258]'
            }`}
          >
            Services
          </a>

          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              handleGoProjects();
            }}
            onMouseEnter={() => soundEngine.playHover()}
            className={`font-sans text-xs font-semibold tracking-[0.16em] uppercase transition-colors ${
              currentView === 'projects'
                ? 'text-[#C1A258]'
                : 'text-[#D8DDE6] hover:text-[#C1A258]'
            }`}
          >
            {lang === 'en' ? 'Projects' : 'Projets'}
          </a>

          <a
            href="#team"
            onClick={(e) => {
              e.preventDefault();
              handleGoTeam();
            }}
            onMouseEnter={() => soundEngine.playHover()}
            className={`font-sans text-xs font-semibold tracking-[0.16em] uppercase transition-colors ${
              currentView === 'team'
                ? 'text-[#C1A258]'
                : 'text-[#D8DDE6] hover:text-[#C1A258]'
            }`}
          >
            {lang === 'en' ? 'Team' : 'Équipe'}
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleGoContact();
            }}
            onMouseEnter={() => soundEngine.playHover()}
            className={`font-sans text-xs font-semibold tracking-[0.16em] uppercase transition-colors ${
              currentView === 'contact'
                ? 'text-[#C1A258]'
                : 'text-[#D8DDE6] hover:text-[#C1A258]'
            }`}
          >
            Contact
          </a>

          {/* FR | EN Switcher */}
          <div
            className="inline-flex items-center border border-[#F8F6F2]/20 bg-[#111F38]"
            role="group"
            aria-label={lang === 'en' ? 'Language switcher' : 'Sélecteur de langue'}
          >
            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                setLang('fr');
              }}
              className={`px-2.5 py-1.5 font-sans text-[11px] font-semibold tracking-[0.14em] uppercase transition-colors ${
                lang === 'fr'
                  ? 'bg-[#C1A258] text-[#0E1B2E]'
                  : 'text-[#D8DDE6] hover:text-[#C1A258]'
              }`}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                setLang('en');
              }}
              className={`px-2.5 py-1.5 font-sans text-[11px] font-semibold tracking-[0.14em] uppercase transition-colors ${
                lang === 'en'
                  ? 'bg-[#C1A258] text-[#0E1B2E]'
                  : 'text-[#D8DDE6] hover:text-[#C1A258]'
              }`}
            >
              EN
            </button>
          </div>

          {/* Unified Institutional CTA Button */}
          <button
            type="button"
            onClick={handleGoContact}
            onMouseEnter={() => soundEngine.playHover()}
            className="group relative inline-flex h-10 items-center justify-center bg-[#C1A258]/15 px-5 font-sans text-[11px] font-semibold tracking-[0.16em] text-[#F8F6F2] uppercase transition-all duration-300 hover:bg-[#C1A258] hover:text-[#0E1B2E]"
          >
            <HudCorners tone="on-navy" />
            <span>{lang === 'en' ? 'Contact Us' : 'Nous écrire'}</span>
          </button>
        </nav>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 md:hidden">
          <div
            className="inline-flex items-center border border-[#F8F6F2]/20 bg-[#111F38]"
            role="group"
            aria-label={lang === 'en' ? 'Language switcher' : 'Sélecteur de langue'}
          >
            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                setLang('fr');
              }}
              className={`px-2.5 py-1 font-sans text-[10px] font-semibold tracking-wider uppercase transition-colors ${
                lang === 'fr'
                  ? 'bg-[#C1A258] text-[#0E1B2E]'
                  : 'text-[#D8DDE6] hover:text-[#C1A258]'
              }`}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => {
                soundEngine.playClick();
                setLang('en');
              }}
              className={`px-2.5 py-1 font-sans text-[10px] font-semibold tracking-wider uppercase transition-colors ${
                lang === 'en'
                  ? 'bg-[#C1A258] text-[#0E1B2E]'
                  : 'text-[#D8DDE6] hover:text-[#C1A258]'
              }`}
            >
              EN
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              soundEngine.playClick();
              setMobileMenuOpen((prev) => !prev);
            }}
            aria-label={
              mobileMenuOpen
                ? lang === 'en'
                  ? 'Close navigation menu'
                  : 'Fermer le menu de navigation'
                : lang === 'en'
                ? 'Open navigation menu'
                : 'Ouvrir le menu de navigation'
            }
            className="flex h-10 w-10 items-center justify-center border border-[#F8F6F2]/20 bg-[#111F38] text-[#C1A258] transition-colors hover:border-[#C1A258]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-[#F8F6F2]/10 bg-[#0E1B2E] md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              <a
                href="#mission"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#mission');
                }}
                className="border-b border-[#F8F6F2]/10 py-3.5 font-sans text-xs font-semibold tracking-[0.18em] text-[#F8F6F2] uppercase hover:text-[#C1A258]"
              >
                {lang === 'en' ? 'About' : 'À propos'}
              </a>

              <a
                href="#excellence"
                onClick={(e) => {
                  e.preventDefault();
                  handleGoServices();
                }}
                className="border-b border-[#F8F6F2]/10 py-3.5 font-sans text-xs font-semibold tracking-[0.18em] text-[#F8F6F2] uppercase hover:text-[#C1A258]"
              >
                Services
              </a>

              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleGoProjects();
                }}
                className="border-b border-[#F8F6F2]/10 py-3.5 font-sans text-xs font-semibold tracking-[0.18em] text-[#F8F6F2] uppercase hover:text-[#C1A258]"
              >
                {lang === 'en' ? 'Projects' : 'Projets'}
              </a>

              <a
                href="#team"
                onClick={(e) => {
                  e.preventDefault();
                  handleGoTeam();
                }}
                className="border-b border-[#F8F6F2]/10 py-3.5 font-sans text-xs font-semibold tracking-[0.18em] text-[#F8F6F2] uppercase hover:text-[#C1A258]"
              >
                {lang === 'en' ? 'Team' : 'Équipe'}
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleGoContact();
                }}
                className="border-b border-[#F8F6F2]/10 py-3.5 font-sans text-xs font-semibold tracking-[0.18em] text-[#F8F6F2] uppercase hover:text-[#C1A258]"
              >
                Contact
              </a>

              <button
                type="button"
                onClick={handleGoContact}
                className="group relative mt-4 w-full bg-[#C1A258] py-3 font-sans text-xs font-semibold tracking-[0.18em] text-[#0E1B2E] uppercase transition-colors hover:bg-[#C1A258]/90"
              >
                {lang === 'en' ? 'Contact Us' : 'Nous écrire'}
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
