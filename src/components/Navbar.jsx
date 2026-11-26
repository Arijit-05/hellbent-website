import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrandLogo } from './Logo';

const NAV_LINKS = [
  { id: 'about', label: 'About' },
  { id: 'facilities', label: 'Facilities' },
  { id: 'programs', label: 'Programs' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'membership', label: 'Membership' },
  { id: 'location', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Active section highlighting via IntersectionObserver
  useEffect(() => {
    const sections = ['hero', ...NAV_LINKS.map((l) => l.id)];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0B0C]/92 backdrop-blur-md border-b border-[#26292C] py-3 shadow-lg shadow-black/50'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            aria-label="HELL-BENT FITNESS STUDIO Home"
            className="focus-visible:outline-[#FFE600]"
          >
            <BrandLogo size="sm" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id);
                  }}
                  className={`font-condensed text-sm tracking-[0.16em] font-bold transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#FFE600]'
                      : 'text-[#F5F5F0]/85 hover:text-[#FFE600]'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#FFE600]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right CTA + Mobile Menu Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#membership"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('membership');
              }}
              className="btn-primary px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm"
            >
              <span>JOIN NOW</span>
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="lg:hidden p-2 text-[#F5F5F0] hover:text-[#FFE600] transition-colors border border-[#26292C] bg-[#121415]/80"
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Full-Screen Overlay Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[60] bg-[#0A0B0C] flex flex-col justify-between p-6 bg-noise"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation"
          >
            <div className="relative z-10 flex items-center justify-between">
              <BrandLogo size="sm" />
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                className="p-2.5 text-[#FFE600] border border-[#FFE600]/40 bg-[#121415]"
                aria-label="Close navigation menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="relative z-10 flex flex-col gap-3 my-auto py-8" aria-label="Mobile links">
              {NAV_LINKS.map((link, idx) => (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + idx * 0.04, duration: 0.28 }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.id);
                  }}
                  className={`font-display text-5xl sm:text-6xl tracking-tight leading-none transition-colors ${
                    activeSection === link.id
                      ? 'text-[#FFE600]'
                      : 'text-[#F5F5F0] hover:text-[#FFE600]'
                  }`}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <div className="relative z-10 pt-4 border-t border-[#26292C]">
              <a
                href="#membership"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('membership');
                }}
                className="btn-primary w-full py-4 text-lg"
              >
                <span>JOIN HELL-BENT NOW</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

