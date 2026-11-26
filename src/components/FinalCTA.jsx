import React from 'react';
import { ChevronRight, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config';
import { Reveal } from './MotionPrimitives';

export default function FinalCTA() {
  const scrollToMembership = () => {
    const el = document.getElementById('enquiry-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-28 bg-[#0A0B0C] overflow-hidden">
      {/* Slanted Yellow Top Edge */}
      <div
        className="absolute top-0 left-0 right-0 h-5 sm:h-7 bg-[#FFE600] z-20"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 30%, 0 100%)' }}
        aria-hidden="true"
      />

      {/* Dark Photo Background */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <img
          src={SITE_CONFIG.images.ctaBg}
          alt="Athlete preparing for a heavy lift"
          width={1600}
          height={900}
          loading="lazy"
          className="w-full h-full object-cover opacity-35"
          style={{ filter: 'grayscale(0.8) contrast(1.15)' }}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#0A0B0C] via-[#0A0B0C]/75 to-[#0A0B0C]/90"
        />
      </div>

      {/* Giant Outlined Text */}
      <div
        className="outlined-text-strong absolute inset-x-0 top-1/2 -translate-y-1/2 text-center text-[4.5rem] sm:text-[9rem] lg:text-[13rem] leading-[0.88] whitespace-nowrap z-0"
        aria-hidden="true"
      >
        JOIN THE HELLBENT COMMUNITY
      </div>

      <Reveal className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="ribbon-tag text-xs sm:text-sm mb-5">
          NO EXCUSES · DAY ONE STARTS TODAY
        </span>
        <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl text-[#F5F5F0] leading-[0.95]">
          READY TO TRAIN <span className="text-[#FFE600]">HELL-BENT?</span>
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#F5F5F0]/80 max-w-xl mx-auto">
          Claim your free trial session in {SITE_CONFIG.city}. Walk the floor, test the iron, and meet our coaches.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={scrollToMembership}
            className="btn-primary w-full sm:w-auto px-9 py-4 text-base sm:text-lg"
          >
            <span className="flex items-center gap-2">
              START YOUR JOURNEY <ChevronRight className="w-5 h-5" />
            </span>
          </button>

          <a
            href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
              `Hi ${SITE_CONFIG.name}, I'd like to book my free trial session!`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary w-full sm:w-auto px-8 py-4 text-base sm:text-lg"
          >
            <span className="flex items-center gap-2">
              <MessageCircle className="w-5 h-5" /> WHATSAPP US
            </span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}

