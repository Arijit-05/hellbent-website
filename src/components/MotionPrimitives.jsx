import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const HEAVY_EASE = [0.22, 1, 0.36, 1];

export function Reveal({ children, delay = 0, y = 24, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay, ease: HEAVY_EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionHeader({ eyebrow, title, highlight, align = 'left', className = '' }) {
  const isCenter = align === 'center';
  return (
    <Reveal className={`${isCenter ? 'text-center mx-auto' : ''} ${className}`}>
      {eyebrow && (
        <div className={`mb-4 ${isCenter ? 'flex justify-center' : ''}`}>
          <span className="ribbon-tag text-xs sm:text-sm">{eyebrow}</span>
        </div>
      )}
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-[#F5F5F0]">
        {title}{' '}
        {highlight && <span className="text-[#FFE600]">{highlight}</span>}
      </h2>
      <div
        className={`h-1.5 w-20 bg-[#FFE600] mt-4 ${isCenter ? 'mx-auto' : ''}`}
        aria-hidden="true"
      />
    </Reveal>
  );
}

export function AnimatedCounter({ target, suffix = '', duration = 1400 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setCount(target);
      return;
    }

    let start = null;
    let rafId;
    const step = (ts) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

