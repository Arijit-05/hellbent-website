import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../config';
import { Reveal, SectionHeader } from './MotionPrimitives';

const PROGRAMS = [
  {
    name: 'Strength Training',
    tag: 'POWER & PRs',
    desc: 'Barbell-focused squats, deadlifts, and presses built around progressive overload.',
  },
  {
    name: 'Weight Loss',
    tag: 'FAT TORCH',
    desc: 'High-output metabolic conditioning paired with sustainable nutrition guidance.',
  },
  {
    name: 'Bodybuilding',
    tag: 'HYPERTROPHY',
    desc: 'Targeted muscle-split programming for dense symmetry, size, and stage prep.',
  },
  {
    name: 'Functional / CrossFit-Style',
    tag: 'ATHLETIC ENGINE',
    desc: 'Sleds, kettlebells, battle ropes, and explosive circuits for total conditioning.',
  },
  {
    name: 'Personal Training',
    tag: '1-ON-1 COACHING',
    desc: 'Dedicated coach tracking every rep, macro, and weekly milestone.',
  },
  {
    name: 'Beginner Programs',
    tag: 'FOUNDATION',
    desc: 'Safe form mastery, mobility, and confidence-building from day one.',
  },
];

export default function Programs({ onSelectProgram }) {
  const handleEnquire = (programName) => {
    if (onSelectProgram) onSelectProgram(programName);
    const el = document.getElementById('enquiry-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="programs"
      className="relative py-20 sm:py-28 bg-[#0A0B0C] bg-noise overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="TRAINING PROGRAMS"
          title="BUILT FOR EVERY"
          highlight="GOAL"
        />

        {/* 6 Programs Grid */}
        <div className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROGRAMS.map((prog, idx) => (
            <Reveal
              key={prog.name}
              delay={idx * 0.05}
              className="group bg-[#121415] border border-[#26292C] hover:border-[#FFE600] p-6 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              <div
                className="absolute top-0 right-0 w-16 h-16 bg-[#FFE600]/5 -rotate-45 translate-x-8 -translate-y-8 group-hover:bg-[#FFE600]/20 transition-colors"
                aria-hidden="true"
              />
              <div>
                <span className="font-condensed text-xs tracking-[0.2em] text-[#FFE600] font-bold">
                  {prog.tag}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-[#F5F5F0] mt-2 tracking-wide">
                  {prog.name}
                </h3>
                <p className="text-sm text-[#8D9195] mt-2.5 leading-relaxed">
                  {prog.desc}
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleEnquire(prog.name)}
                className="mt-6 inline-flex items-center gap-1.5 font-condensed text-sm font-extrabold tracking-[0.16em] text-[#FFE600] hover:text-white transition-colors self-start cursor-pointer"
              >
                ENQUIRE <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </Reveal>
          ))}
        </div>

        {/* Coaches / Trainers Subsection */}
        <div className="mt-20">
          <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="font-condensed text-xs tracking-[0.22em] text-[#FFE600] font-bold">
                MEET THE COACHES
              </span>
              <h3 className="font-display text-3xl sm:text-4xl text-[#F5F5F0] mt-1">
                GUIDED BY <span className="text-[#FFE600]">PROFESSIONALS</span>
              </h3>
            </div>
            <p className="text-xs text-[#8D9195] font-condensed tracking-wider">
              * PLACEHOLDER PROFILES — SWAP IN YOUR TRAINER ROSTER IN SRC/CONFIG.JS
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {SITE_CONFIG.images.trainers.map((trainer, idx) => (
              <Reveal
                key={trainer.name}
                delay={idx * 0.08}
                className="group bg-[#121415] border border-[#26292C] hover:border-[#FFE600] overflow-hidden transition-colors"
              >
                <div className="relative h-72 overflow-hidden bg-[#1A1D1F]">
                  <img
                    src={trainer.image}
                    alt={`${trainer.name} — ${trainer.role}`}
                    width={800}
                    height={900}
                    loading="lazy"
                    className="w-full h-full object-cover object-top gym-photo group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#121415] via-transparent to-transparent"
                    aria-hidden="true"
                  />
                  <span className="absolute top-3 right-3 bg-[#0A0B0C]/85 border border-[#FFE600]/40 text-[#FFE600] font-condensed text-xs font-bold tracking-wider px-2.5 py-1">
                    {trainer.experience}
                  </span>
                </div>
                <div className="p-5">
                  <h4 className="font-display text-2xl text-[#F5F5F0]">{trainer.name}</h4>
                  <p className="font-condensed text-xs tracking-[0.18em] text-[#FFE600] font-bold mt-0.5">
                    {trainer.role}
                  </p>
                  <p className="text-sm text-[#8D9195] mt-2">{trainer.speciality}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

