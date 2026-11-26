import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown, ChevronRight, Flame } from 'lucide-react';
import { SITE_CONFIG } from '../config';

const SLAM_EASE = [0.16, 1, 0.3, 1];

export default function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 700], [0, 120]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const word1 = 'HELL'.split('');
  const word2 = 'BENT'.split('');

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full flex flex-col justify-between overflow-hidden bg-[#0A0B0C] pt-24 pb-6"
    >
      {/* Parallax Background Image with Ken Burns */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden="true"
      >
        <img
          src={SITE_CONFIG.images.hero}
          alt="Barbell lifter in dark iron-pit gym"
          width={1920}
          height={1080}
          className="w-full h-full object-cover object-center animate-ken-burns opacity-55"
          style={{ filter: 'grayscale(0.75) contrast(1.15)' }}
        />
        {/* Dark gradient overlay: 50% top to 90% bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,11,12,0.55) 0%, rgba(10,11,12,0.65) 45%, rgba(10,11,12,0.95) 100%)',
          }}
        />
        {/* Faint yellow radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 42%, rgba(255,230,0,0.14) 0%, rgba(10,11,12,0) 60%)',
          }}
        />
      </motion.div>

      {/* Main Centerpiece Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto flex flex-col items-center text-center pt-6 pb-8">
        {/* Location Pill */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: SLAM_EASE }}
          className="inline-flex items-center gap-2 px-3.5 py-1 border border-[#FFE600]/40 bg-[#0A0B0C]/75 backdrop-blur-sm mb-4 sm:mb-6"
        >
          <Flame className="w-3.5 h-3.5 text-[#FFE600]" aria-hidden="true" />
          <span className="font-condensed text-xs sm:text-sm tracking-[0.22em] text-[#FFE600] font-bold">
            {SITE_CONFIG.city} · {SITE_CONFIG.region}
          </span>
        </motion.div>

        {/* Giant Stacked HELL-BENT Headline with Letter Slam Stagger */}
        <h1
          className="font-display leading-[0.84] tracking-tight select-none"
          style={{ fontSize: 'clamp(4.2rem, 17vw, 13.5rem)' }}
          aria-label="HELL-BENT FITNESS STUDIO"
        >
          <span className="block text-[#F5F5F0] overflow-hidden">
            {word1.map((char, i) => (
              <motion.span
                key={`w1-${i}`}
                initial={{ opacity: 0, y: 80, scale: 1.15 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.05 + i * 0.045, ease: SLAM_EASE }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
          <span className="block text-[#FFE600] overflow-hidden drop-shadow-[0_10px_35px_rgba(255,230,0,0.2)]">
            {word2.map((char, i) => (
              <motion.span
                key={`w2-${i}`}
                initial={{ opacity: 0, y: 90, scale: 1.15 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.45, delay: 0.22 + i * 0.045, ease: SLAM_EASE }}
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </span>
        </h1>

        {/* Ribbon Tag Beneath Headline */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.45, ease: SLAM_EASE }}
          className="mt-3 sm:mt-5"
        >
          <span className="ribbon-tag text-sm sm:text-lg md:text-xl px-7 sm:px-10 py-1.5">
            {SITE_CONFIG.subBrand}
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.55 }}
          className="mt-5 sm:mt-6 font-condensed text-lg sm:text-2xl tracking-[0.18em] text-[#F5F5F0]/90 font-semibold max-w-2xl"
        >
          {SITE_CONFIG.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.65 }}
          className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 sm:px-0"
        >
          <a
            href="#membership"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('membership');
            }}
            className="btn-primary w-full sm:w-auto px-8 py-4 text-base sm:text-lg"
          >
            <span className="flex items-center gap-2">
              JOIN NOW <ChevronRight className="w-5 h-5" />
            </span>
          </a>

          <a
            href="#facilities"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('facilities');
            }}
            className="btn-secondary w-full sm:w-auto px-8 py-4 text-base sm:text-lg"
          >
            <span>VIEW FACILITIES</span>
          </a>
        </motion.div>
      </div>

      {/* Bottom Stats Strip + Scroll Indicator */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-[#26292C] pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-4 gap-y-1.5 text-xs sm:text-sm font-condensed tracking-[0.16em] text-[#8D9195] font-bold">
            {SITE_CONFIG.heroStats.map((stat, idx) => (
              <React.Fragment key={stat}>
                <span className="text-[#F5F5F0]/90">{stat}</span>
                {idx < SITE_CONFIG.heroStats.length - 1 && (
                  <span className="text-[#FFE600]" aria-hidden="true">
                    ·
                  </span>
                )}
              </React.Fragment>
            ))}
          </div>

          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('about');
            }}
            className="hidden sm:inline-flex items-center gap-2 text-xs font-condensed tracking-[0.2em] text-[#FFE600] hover:text-white transition-colors"
            aria-label="Scroll down to About section"
          >
            <span>SCROLL</span>
            <motion.span
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowDown className="w-4 h-4" />
            </motion.span>
          </a>
        </div>
      </div>
    </section>
  );
}

