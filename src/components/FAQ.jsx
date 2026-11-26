import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal, SectionHeader } from './MotionPrimitives';

const FAQS = [
  {
    q: 'What are the gym opening hours?',
    a: 'We are open Monday through Saturday from 5:30 AM to 10:00 PM, and on Sundays from 7:00 AM to 12:00 PM for open gym sessions.',
  },
  {
    q: 'Can I book a free trial session before joining?',
    a: 'Yes! We offer a 1-day free trial pass so you can test our racks, machines, and coaching vibe before committing. Use the enquiry form above or message us on WhatsApp.',
  },
  {
    q: 'Are certified trainers available on the floor?',
    a: 'Certified floor coaches are always available during peak morning and evening hours for form checks and spot support, with dedicated 1-on-1 Personal Training also available.',
  },
  {
    q: 'Is HELL-BENT suitable for complete beginners?',
    a: '100%. Every new member gets an initial movement & fitness assessment plus a structured beginner foundation plan so you train safely from day one.',
  },
  {
    q: 'Do you have dedicated timings or batches for ladies?',
    a: 'Yes, we offer supportive coaching and dedicated ladies-friendly batch options alongside full-day open floor access. Message us on WhatsApp for the current batch schedule.',
  },
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="relative py-20 sm:py-24 bg-[#0A0B0C] bg-noise">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="QUESTIONS"
          title="FREQUENTLY"
          highlight="ASKED"
          align="center"
        />

        <div className="mt-10 sm:mt-12 space-y-3">
          {FAQS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <Reveal
                key={item.q}
                delay={idx * 0.04}
                className={`border transition-colors ${
                  isOpen
                    ? 'bg-[#121415] border-[#FFE600]/60'
                    : 'bg-[#121415]/60 border-[#26292C] hover:border-[#FFE600]/35'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 p-5 sm:p-6 text-left cursor-pointer"
                >
                  <span className="font-condensed text-lg sm:text-xl font-bold tracking-wide text-[#F5F5F0]">
                    {item.q}
                  </span>
                  <span
                    className={`w-8 h-8 shrink-0 flex items-center justify-center border transition-colors ${
                      isOpen
                        ? 'bg-[#FFE600] text-[#0A0B0C] border-[#FFE600]'
                        : 'bg-[#0A0B0C] text-[#FFE600] border-[#26292C]'
                    }`}
                    aria-hidden="true"
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0 text-sm sm:text-base text-[#8D9195] leading-relaxed border-t border-[#26292C]/60 mt-1 pt-4">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

