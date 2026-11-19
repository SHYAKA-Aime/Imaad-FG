import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Currency, Language } from '../data/imaadData';
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
  currentView?: 'home' | 'projects' | 'contact';
  onNavigateHome?: () => void;
  onNavigateProjects?: () => void;
  onNavigateContact?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  setLang,
  currentView = 'home',
  onNavigateHome,
  onNavigateProjects,
  onNavigateContact,
  onOpenSubmitModal,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on view change or resize to desktop
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
      }, 80);
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
      className={`fixed top-0 right-0 left-0 z-[1000] transition-all duration-500 ease-out border-b border-white/10 ${
        scrolled || currentView !== 'home' || mobileMenuOpen
          ? 'bg-[#0B1528]/95 backdrop-blur-xl shadow-[0_12px_35px_rgba(0,0,0,0.6)]'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-[74px] sm:h-[88px] md:h-[104px] w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 md:px-14 lg:px-20">
        {/* Left Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#hero');
          }}
          className="group flex shrink-0 items-center py-1.5 transition-transform duration-300 hover:scale-[1.02]"
        >
          <img
            src="/logo-imaad.svg"
            alt="IMAAD Financial Group"
            className="h-11 sm:h-14 md:h-16 lg:h-[70px] w-auto object-contain drop-shadow-[0_0_20px_rgba(201,162,77,0.35)]"
          />
        </a>

        {/* Desktop Navigation (md and up) */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          <a
            href="#mission"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#mission');
            }}
            onMouseEnter={() => soundEngine.playHover()}
            className="font-heading text-xs font-semibold tracking-[0.18em] text-slate-300 uppercase transition-colors hover:text-gold-300 lg:text-sm"
          >
            {lang === 'en' ? 'About' : 'À Propos'}
          </a>

          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              handleGoProjects();
            }}
            onMouseEnter={() => soundEngine.playHover()}
            className={`font-heading text-xs font-semibold tracking-[0.18em] uppercase transition-colors lg:text-sm ${
              currentView === 'projects'
                ? 'text-gold-300 font-bold'
                : 'text-slate-300 hover:text-gold-300'
            }`}
          >
            {lang === 'en' ? 'Projects' : 'Projets'}
          </a>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              handleGoContact();
            }}
            onMouseEnter={() => soundEngine.playHover()}
            className={`font-heading text-xs font-semibold tracking-[0.18em] uppercase transition-colors lg:text-sm ${
              currentView === 'contact'
                ? 'text-gold-300 font-bold'
                : 'text-slate-300 hover:text-gold-300'
            }`}
          >
            Contact
          </a>

          {/* Language Switcher */}
          <button
            type="button"
            onClick={() => {
              soundEngine.playClick();
              setLang(lang === 'en' ? 'fr' : 'en');
            }}
            className="font-mono text-xs font-semibold tracking-widest text-slate-400 transition-colors hover:text-gold-300"
            title="Switch Language"
          >
            {lang.toUpperCase()}
          </button>

          {/* Gold Action Button */}
          <button
            type="button"
            onClick={handleGoContact}
            className="inline-flex items-center justify-center rounded bg-[#C69C45] px-4 py-2 lg:px-5 font-heading text-xs font-bold tracking-wider text-[#0B1528] uppercase transition-all duration-300 hover:bg-[#d4ab53] hover:shadow-[0_0_20px_rgba(201,162,77,0.4)]"
          >
            {lang === 'en' ? 'CONTACT US' : 'CONTACTEZ-NOUS'}
          </button>
        </nav>

        {/* Mobile Controls (< md) */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={() => {
              soundEngine.playClick();
              setLang(lang === 'en' ? 'fr' : 'en');
            }}
            className="rounded border border-white/15 bg-white/[0.04] px-2.5 py-1.5 font-mono text-[11px] font-semibold tracking-widest text-slate-300 transition-colors hover:border-gold-400/50 hover:text-gold-300"
            title="Switch Language"
          >
            {lang.toUpperCase()}
          </button>

          <button
            type="button"
            onClick={() => {
              soundEngine.playClick();
              setMobileMenuOpen((prev) => !prev);
            }}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="flex h-10 w-10 items-center justify-center rounded border border-white/15 bg-white/[0.04] text-gold-300 transition-colors hover:border-gold-400/60 hover:bg-gold-500/10"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-white/10 bg-[#081020]/98 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-5">
              <a
                href="#mission"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#mission');
                }}
                className="border-b border-white/5 py-3.5 font-heading text-sm font-semibold tracking-[0.2em] text-slate-200 uppercase transition-colors hover:text-gold-300"
              >
                {lang === 'en' ? 'About' : 'À Propos'}
              </a>

              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  handleGoProjects();
                }}
                className={`border-b border-white/5 py-3.5 font-heading text-sm font-semibold tracking-[0.2em] uppercase transition-colors ${
                  currentView === 'projects'
                    ? 'text-gold-300 font-bold'
                    : 'text-slate-200 hover:text-gold-300'
                }`}
              >
                {lang === 'en' ? 'Projects' : 'Projets'}
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleGoContact();
                }}
                className={`border-b border-white/5 py-3.5 font-heading text-sm font-semibold tracking-[0.2em] uppercase transition-colors ${
                  currentView === 'contact'
                    ? 'text-gold-300 font-bold'
                    : 'text-slate-200 hover:text-gold-300'
                }`}
              >
                Contact
              </a>

              <button
                type="button"
                onClick={handleGoContact}
                className="mt-4 w-full rounded bg-[#C69C45] py-3 font-heading text-xs font-bold tracking-[0.18em] text-[#0B1528] uppercase transition-colors hover:bg-[#d4ab53]"
              >
                {lang === 'en' ? 'CONTACT US' : 'CONTACTEZ-NOUS'}
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};
