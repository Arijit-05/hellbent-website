import React from 'react';
import { SITE_CONFIG } from '../config';

/**
 * Recreates the HELL-BENT dumbbell-"H" mark as a crisp inline SVG.
 * Also supports rendering /public/logo.png if SITE_CONFIG.useCustomLogoImage is true.
 */
export function DumbbellHMark({ className = 'w-10 h-10' }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="60" cy="60" r="58" fill="#0A0B0C" stroke="#FFE600" strokeWidth="3.5" />
      {/* Outer left half-plate */}
      <path d="M16 49C12 49 10 52 10 60C10 68 12 71 16 71V49Z" fill="#FFE600" />
      {/* Middle left half-plate */}
      <path d="M29 37C21 37 19 45 19 60C19 75 21 83 29 83V37Z" fill="#FFE600" />
      {/* Bold H with rounded outer half-plates */}
      <path
        d="M49 24C37 24 33 38 33 60C33 82 37 96 49 96V68H71V96C83 96 87 82 87 60C87 38 83 24 71 24V52H49V24Z"
        fill="#FFE600"
      />
      {/* Middle right half-plate */}
      <path d="M91 37C99 37 101 45 101 60C101 75 99 83 91 83V37Z" fill="#FFE600" />
      {/* Outer right half-plate */}
      <path d="M104 49C108 49 110 52 110 60C110 68 108 71 104 71V49Z" fill="#FFE600" />
    </svg>
  );
}

export function BrandLogo({ size = 'md', showSubtext = true }) {
  const sizes = {
    sm: { icon: 'w-9 h-9', title: 'text-xl', sub: 'text-[9px]' },
    md: { icon: 'w-11 h-11', title: 'text-2xl', sub: 'text-[10px]' },
    lg: { icon: 'w-14 h-14', title: 'text-3xl', sub: 'text-xs' },
  };
  const s = sizes[size] || sizes.md;

  if (SITE_CONFIG.useCustomLogoImage) {
    return (
      <div className="flex items-center gap-3">
        <img
          src={SITE_CONFIG.logoPath}
          alt={SITE_CONFIG.name}
          width={56}
          height={56}
          className={`${s.icon} rounded-full object-cover border border-[#FFE600]/40`}
        />
        <div className="leading-none">
          <span className={`font-display block tracking-wider text-[#FFE600] ${s.title}`}>
            HELL<span className="text-[#F5F5F0]">-BENT</span>
          </span>
          {showSubtext && (
            <span className={`font-condensed block tracking-[0.26em] text-[#8D9195] font-bold ${s.sub}`}>
              {SITE_CONFIG.subBrand}
            </span>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2.5 sm:gap-3">
      <DumbbellHMark className={`${s.icon} shrink-0`} />
      <div className="leading-none">
        <span className={`font-display block tracking-wide text-[#F5F5F0] ${s.title}`}>
          HELL<span className="text-[#FFE600]">-BENT</span>
        </span>
        {showSubtext && (
          <span className={`font-condensed block tracking-[0.28em] text-[#FFE600] font-bold mt-0.5 ${s.sub}`}>
            {SITE_CONFIG.subBrand}
          </span>
        )}
      </div>
    </div>
  );
}

