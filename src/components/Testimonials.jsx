import React from 'react';
import { Quote } from 'lucide-react';
import { Reveal, SectionHeader } from './MotionPrimitives';

const TESTIMONIALS = [
  {
    name: 'Subham Chatterjee',
    goal: 'Fat Loss & Conditioning',
    duration: '6 Months',
    quote:
      'Sample Testimonial: Dropped 14 kg without crash diets. The coaches kept me accountable on days I wanted to skip.',
  },
  {
    name: 'Ananya Mukherjee',
    goal: 'Strength & Mobility',
    duration: '8 Months',
    quote:
      'Sample Testimonial: Walked in intimidated by barbells—now I deadlift with confidence. Cleanest, most focused gym in town.',
  },
  {
    name: 'Ritwik Ghosh',
    goal: 'Muscle Gain & Powerlifting',
    duration: '1 Year',
    quote:
      'Sample Testimonial: Real iron, zero ego. Added 40 kg to my squat total thanks to the structured coaching here.',
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-20 sm:py-28 bg-[#0A0B0C] bg-noise overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <SectionHeader
            eyebrow="REAL RESULTS"
            title="MEMBER"
            highlight="STORIES"
          />
          <p className="text-xs text-[#8D9195] font-condensed tracking-wider">
            * SAMPLE PLACEHOLDER REVIEWS — REPLACE WITH REAL MEMBER STORIES
          </p>
        </div>

        {/* Swipeable on mobile, 3-column grid on desktop */}
        <div className="flex md:grid md:grid-cols-3 gap-5 overflow-x-auto md:overflow-visible snap-x snap-mandatory no-scrollbar pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {TESTIMONIALS.map((item, idx) => (
            <Reveal
              key={item.name}
              delay={idx * 0.08}
              className="shrink-0 w-[84vw] sm:w-[65vw] md:w-auto snap-center bg-[#121415] border border-[#26292C] hover:border-[#FFE600]/60 p-6 sm:p-7 flex flex-col justify-between transition-colors relative"
            >
              <div>
                <Quote className="w-10 h-10 text-[#FFE600] mb-4 opacity-90" aria-hidden="true" />
                <p className="text-[#F5F5F0]/90 text-base leading-relaxed">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-[#26292C] flex items-center justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl text-[#F5F5F0] tracking-wide">
                    {item.name}
                  </h3>
                  <p className="font-condensed text-xs tracking-[0.16em] text-[#FFE600] font-bold">
                    {item.goal}
                  </p>
                </div>
                <span className="bg-[#1A1D1F] border border-[#26292C] px-2.5 py-1 font-condensed text-xs font-bold tracking-wider text-[#8D9195]">
                  {item.duration}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

