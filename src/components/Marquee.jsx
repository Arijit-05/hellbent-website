import React from 'react';

const MARQUEE_ITEMS = [
  'NO EXCUSES',
  'LIFT HEAVY',
  'TRAIN HARD',
  'STAY HELL-BENT',
];

export default function Marquee() {
  const repeated = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      className="relative z-20 -my-3 sm:-my-4 py-3 sm:py-3.5 bg-[#FFE600] text-[#0A0B0C] overflow-hidden -rotate-2 scale-[1.03] border-y-2 border-[#0A0B0C] shadow-[0_10px_30px_rgba(255,230,0,0.18)]"
      aria-hidden="true"
    >
      <div className="marquee-track">
        {repeated.map((text, idx) => (
          <div key={idx} className="flex items-center shrink-0">
            <span className="font-display text-xl sm:text-2xl md:text-3xl tracking-wider px-4 sm:px-6">
              {text}
            </span>
            <span className="text-[#0A0B0C] text-lg sm:text-xl font-bold">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}

