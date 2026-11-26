import React from 'react';
import {
  Dumbbell,
  Flame,
  HeartPulse,
  Zap,
  Cog,
  Sparkles,
  UserCheck,
  Lock,
} from 'lucide-react';
import { SITE_CONFIG } from '../config';
import { Reveal, SectionHeader } from './MotionPrimitives';

const FACILITIES = [
  {
    title: 'Free Weights Zone',
    desc: 'Olympic barbells, calibrated plates, and dumbbells up to 50kg.',
    icon: Dumbbell,
    image: SITE_CONFIG.images.facilities.freeWeights,
    span: 'md:col-span-2 md:row-span-2',
    height: 'h-72 md:h-full md:min-h-[380px]',
  },
  {
    title: 'Power Racks & Squat Stations',
    desc: 'Competition-grade half racks and deadlift platforms.',
    icon: Zap,
    image: SITE_CONFIG.images.facilities.powerRacks,
    span: 'md:col-span-2',
    height: 'h-64 md:h-[182px]',
  },
  {
    title: 'Cardio Deck',
    desc: 'Commercial treadmills, air bikes, and rowing ergs.',
    icon: HeartPulse,
    image: SITE_CONFIG.images.facilities.cardioDeck,
    span: 'md:col-span-1',
    height: 'h-64 md:h-[182px]',
  },
  {
    title: 'Functional Training Area',
    desc: 'Turf lane, battle ropes, kettlebells, and plyo boxes.',
    icon: Flame,
    image: SITE_CONFIG.images.facilities.functionalArea,
    span: 'md:col-span-1',
    height: 'h-64 md:h-[182px]',
  },
  {
    title: 'Machine Floor',
    desc: 'Plate-loaded & pin-select isolation machines for hypertrophy.',
    icon: Cog,
    image: SITE_CONFIG.images.facilities.machineFloor,
    span: 'md:col-span-2',
    height: 'h-64 md:h-[220px]',
  },
  {
    title: 'Stretching & Recovery',
    desc: 'Dedicated mobility mats, foam rollers, and warm-up zone.',
    icon: Sparkles,
    image: SITE_CONFIG.images.facilities.stretching,
    span: 'md:col-span-1',
    height: 'h-64 md:h-[220px]',
  },
  {
    title: 'Personal Training Zone',
    desc: 'Private coaching bay for 1-on-1 form & strength progression.',
    icon: UserCheck,
    image: SITE_CONFIG.images.facilities.personalTraining,
    span: 'md:col-span-1',
    height: 'h-64 md:h-[220px]',
  },
  {
    title: 'Locker & Changing Rooms',
    desc: 'Clean, secure lockers, showers, and changing facilities.',
    icon: Lock,
    image: SITE_CONFIG.images.facilities.lockers,
    span: 'md:col-span-4',
    height: 'h-56 md:h-[170px]',
  },
];

export default function Facilities() {
  return (
    <section
      id="facilities"
      className="relative py-20 sm:py-28 bg-[#121415] slant-top-left bg-noise overflow-hidden"
    >
      {/* Giant Outlined Background Text */}
      <div
        className="outlined-text absolute top-12 -left-6 text-[7rem] sm:text-[13rem] lg:text-[17rem] leading-none whitespace-nowrap"
        aria-hidden="true"
      >
        IRON ZONE
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <SectionHeader
            eyebrow="FACILITIES"
            title="THE IRON"
            highlight="ZONE"
          />
          <p className="text-sm text-[#8D9195] max-w-sm font-medium">
            8 dedicated training zones built for serious strength, conditioning, and recovery.
            <span className="block sm:hidden text-[#FFE600] text-xs font-condensed tracking-wider mt-1">
              SWIPE TO EXPLORE →
            </span>
          </p>
        </div>

        {/* Mobile: horizontal swipe carousel | Desktop: Bento Grid */}
        <div className="flex md:grid md:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {FACILITIES.map((item, idx) => {
            const Icon = item.icon;
            return (
              <Reveal
                key={item.title}
                delay={idx * 0.04}
                className={`group relative shrink-0 w-[80vw] sm:w-[60vw] md:w-auto snap-center overflow-hidden bg-[#0A0B0C] border border-[#26292C] hover:border-[#FFE600] transition-all duration-300 hover:-translate-y-1 ${item.span} ${item.height}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  width={1000}
                  height={700}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover gym-photo group-hover:scale-105"
                />
                {/* Dark overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0A0B0C] via-[#0A0B0C]/60 to-[#0A0B0C]/20 group-hover:via-[#0A0B0C]/45 transition-colors"
                  aria-hidden="true"
                />

                {/* Yellow sliding top accent bar */}
                <div
                  className="absolute top-0 left-0 h-1 w-0 bg-[#FFE600] group-hover:w-full transition-all duration-300"
                  aria-hidden="true"
                />

                <div className="relative z-10 h-full flex flex-col justify-end p-5">
                  <div className="w-9 h-9 bg-[#FFE600]/15 border border-[#FFE600]/40 flex items-center justify-center mb-3 group-hover:bg-[#FFE600] transition-colors">
                    <Icon
                      className="w-4 h-4 text-[#FFE600] group-hover:text-[#0A0B0C] transition-colors"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-[#F5F5F0] tracking-wide leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#8D9195] group-hover:text-[#F5F5F0]/85 mt-1 leading-snug transition-colors">
                    {item.desc}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

