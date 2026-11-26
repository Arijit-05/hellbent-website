import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Instagram, X, ZoomIn } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_CONFIG } from '../config';
import { Reveal, SectionHeader } from './MotionPrimitives';

const FILTERS = ['ALL', 'EQUIPMENT', 'TRAINING', 'COMMUNITY'];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [lightboxIdx, setLightboxIdx] = useState(null);
  const [touchStartX, setTouchStartX] = useState(null);

  const items = SITE_CONFIG.images.gallery;
  const filtered =
    activeFilter === 'ALL'
      ? items
      : items.filter((item) => item.category === activeFilter);

  const closeLightbox = () => setLightboxIdx(null);
  const prevImage = () =>
    setLightboxIdx((prev) => (prev === 0 ? filtered.length - 1 : prev - 1));
  const nextImage = () =>
    setLightboxIdx((prev) => (prev === filtered.length - 1 ? 0 : prev + 1));

  // Keyboard support for lightbox
  useEffect(() => {
    if (lightboxIdx === null) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [lightboxIdx, filtered.length]);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    if (touchStartX === null) return;
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (diff > 50) nextImage();
    if (diff < -50) prevImage();
    setTouchStartX(null);
  };

  return (
    <section
      id="gallery"
      className="relative py-20 sm:py-28 bg-[#121415] slant-top-right bg-noise overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionHeader
            eyebrow="INSIDE THE PIT"
            title="THE"
            highlight="GALLERY"
          />

          {/* Filter Chips */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Gallery category filter">
            {FILTERS.map((cat) => {
              const active = activeFilter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => {
                    setActiveFilter(cat);
                    setLightboxIdx(null);
                  }}
                  className={`font-condensed text-xs sm:text-sm font-bold tracking-[0.16em] px-4 py-2 border transition-all cursor-pointer -skew-x-6 ${
                    active
                      ? 'bg-[#FFE600] text-[#0A0B0C] border-[#FFE600]'
                      : 'bg-[#0A0B0C] text-[#8D9195] border-[#26292C] hover:border-[#FFE600] hover:text-[#F5F5F0]'
                  }`}
                >
                  <span className="block skew-x-6">{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Masonry Columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((item, idx) => (
            <Reveal
              key={item.id}
              delay={idx * 0.04}
              className="break-inside-avoid"
            >
              <button
                type="button"
                onClick={() => setLightboxIdx(idx)}
                className="group relative w-full block overflow-hidden bg-[#0A0B0C] border border-[#26292C] hover:border-[#FFE600] text-left cursor-pointer"
                aria-label={`View ${item.title} in lightbox`}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  className="w-full h-auto object-cover gym-photo group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0A0B0C]/90 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity"
                  aria-hidden="true"
                />
                {/* Yellow Corner Accent */}
                <div
                  className="absolute top-0 right-0 w-0 h-0 border-t-[28px] border-l-[28px] border-t-[#FFE600] border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                  aria-hidden="true"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
                  <div>
                    <span className="font-condensed text-[11px] tracking-[0.2em] text-[#FFE600] font-bold">
                      {item.category}
                    </span>
                    <p className="font-condensed text-base sm:text-lg font-bold text-[#F5F5F0] leading-tight">
                      {item.title}
                    </p>
                  </div>
                  <ZoomIn className="w-5 h-5 text-[#FFE600] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        {/* Instagram CTA */}
        <Reveal className="mt-12 text-center">
          <a
            href={SITE_CONFIG.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary px-7 py-3.5 text-sm sm:text-base"
          >
            <span className="flex items-center gap-2.5">
              <Instagram className="w-5 h-5" />
              FOLLOW {SITE_CONFIG.socials.instagramHandle.toUpperCase()} ON INSTAGRAM
            </span>
          </a>
        </Reveal>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIdx !== null && filtered[lightboxIdx] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            role="dialog"
            aria-modal="true"
            aria-label="Image Lightbox"
          >
            <button
              type="button"
              onClick={closeLightbox}
              className="absolute top-4 right-4 p-2.5 bg-[#121415] border border-[#FFE600]/40 text-[#FFE600] hover:bg-[#FFE600] hover:text-[#0A0B0C] transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-3 sm:left-6 p-2.5 bg-[#121415]/90 border border-[#26292C] text-[#F5F5F0] hover:border-[#FFE600] hover:text-[#FFE600] transition-colors cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div
              className="max-w-4xl max-h-[85vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filtered[lightboxIdx].src}
                alt={filtered[lightboxIdx].title}
                className="max-h-[75vh] w-auto object-contain border border-[#26292C]"
              />
              <div className="mt-3 text-center">
                <span className="font-condensed text-xs tracking-[0.2em] text-[#FFE600] font-bold">
                  {filtered[lightboxIdx].category} · {lightboxIdx + 1} / {filtered.length}
                </span>
                <p className="font-display text-xl text-[#F5F5F0] mt-0.5">
                  {filtered[lightboxIdx].title}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-3 sm:right-6 p-2.5 bg-[#121415]/90 border border-[#26292C] text-[#F5F5F0] hover:border-[#FFE600] hover:text-[#FFE600] transition-colors cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

