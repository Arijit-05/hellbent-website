import React from 'react';
import { Dumbbell, ShieldCheck, Users } from 'lucide-react';
import { SITE_CONFIG } from '../config';
import { AnimatedCounter, Reveal, SectionHeader } from './MotionPrimitives';

const PILLARS = [
  {
    icon: Dumbbell,
    title: 'STRENGTH',
    desc: 'Calibrated plates, heavy iron, zero compromises.',
  },
  {
    icon: ShieldCheck,
    title: 'DISCIPLINE',
    desc: 'Structured programming that builds real grit.',
  },
  {
    icon: Users,
    title: 'COMMUNITY',
    desc: 'Lifters who push each other past every plateau.',
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-20 sm:py-28 bg-[#0A0B0C] bg-noise overflow-hidden"
    >
      {/* Giant Outlined Background Texture */}
      <div
        className="outlined-text absolute -top-6 right-0 text-[7rem] sm:text-[13rem] lg:text-[18rem] leading-none whitespace-nowrap"
        aria-hidden="true"
      >
        NO EXCUSES
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Image with offset yellow frame + floating badge */}
          <Reveal className="lg:col-span-5 relative">
            <div className="relative group max-w-md mx-auto lg:max-w-none">
              {/* Offset Yellow Frame */}
              <div
                className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-full h-full border-2 border-[#FFE600] z-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                aria-hidden="true"
              />
              <div className="relative z-10 overflow-hidden bg-[#121415] border border-[#26292C]">
                <img
                  src={SITE_CONFIG.images.about}
                  alt="Athlete chalking hands before heavy lift at HELL-BENT FITNESS STUDIO"
                  width={900}
                  height={1100}
                  loading="lazy"
                  className="w-full h-[380px] sm:h-[460px] object-cover gym-photo group-hover:scale-105"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0A0B0C]/80 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>

              {/* Floating EST Badge */}
              <div className="absolute -top-4 -left-3 sm:-left-5 z-20 bg-[#FFE600] text-[#0A0B0C] px-4 py-2 font-display text-xl sm:text-2xl tracking-wider shadow-xl -skew-x-6">
                <span className="block skew-x-6">{SITE_CONFIG.estYear}</span>
              </div>
            </div>
          </Reveal>

          {/* Right Column: Copy + Pillars + Counters */}
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="WHO WE ARE"
              title="MORE THAN A GYM."
              highlight="A MINDSET."
            />

            <Reveal delay={0.1} className="mt-6 space-y-4 text-[#F5F5F0]/85 text-base sm:text-lg leading-relaxed">
              <p>
                Born in {SITE_CONFIG.city}, <strong className="text-[#FFE600] font-semibold">{SITE_CONFIG.name}</strong>{' '}
                was built for lifters tired of crowded commercial floors and soft excuses. Step inside and
                you&apos;ll find raw iron, calibrated racks, and an atmosphere engineered to make you work.
              </p>
              <p className="text-[#8D9195]">
                Whether you&apos;re stepping under a barbell for the first time or chasing a new deadlift PR,
                our coaches and community hold the standard high every single rep.
              </p>
            </Reveal>

            {/* 3 Value Pillars */}
            <Reveal delay={0.18} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="bg-[#121415] border border-[#26292C] p-4 hover:border-[#FFE600]/60 transition-colors"
                  >
                    <Icon className="w-6 h-6 text-[#FFE600] mb-2.5" aria-hidden="true" />
                    <h3 className="font-condensed text-lg font-bold tracking-wider text-[#F5F5F0]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#8D9195] mt-1 leading-snug">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </Reveal>

            {/* Animated Stats Counters */}
            <Reveal
              delay={0.25}
              className="mt-8 pt-8 border-t border-[#26292C] grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {SITE_CONFIG.aboutStats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-3xl sm:text-4xl text-[#FFE600] leading-none">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="font-condensed text-xs sm:text-sm tracking-[0.14em] text-[#8D9195] font-bold mt-1.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

