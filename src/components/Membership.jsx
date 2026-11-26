import React, { useEffect, useState } from 'react';
import { Check, CheckCircle2, Mail, MessageCircle, Send } from 'lucide-react';
import { SITE_CONFIG } from '../config';
import { Reveal, SectionHeader } from './MotionPrimitives';

const PLANS = [
  {
    id: 'Monthly',
    name: 'Monthly',
    subtitle: 'FLEXIBLE ACCESS',
    quoteText: 'Contact for pricing',
    popular: false,
    benefits: [
      'Full Iron Zone & Machine Floor access',
      'Cardio Deck & Stretching Zone',
      'Locker & changing room access',
      'Initial fitness & movement assessment',
    ],
  },
  {
    id: 'Quarterly',
    name: 'Quarterly',
    subtitle: '90-DAY TRANSFORMATION',
    quoteText: 'Get a custom quote',
    popular: true,
    benefits: [
      'Everything in Monthly access',
      'Custom 12-week workout split',
      'Bi-weekly body composition check-ins',
      'Priority trainer floor guidance',
      '1 Guest Pass per month',
    ],
  },
  {
    id: 'Annual / Elite',
    name: 'Annual / Elite',
    subtitle: 'MAXIMUM COMMITMENT',
    quoteText: 'Get a custom quote',
    popular: false,
    benefits: [
      'Everything in Quarterly access',
      'Dedicated 1-on-1 coaching check-ins',
      'Personalized macro & nutrition roadmap',
      'Membership freeze option (up to 30 days)',
      'Best annual value rate',
    ],
  },
];

const GOALS = [
  'Strength Training',
  'Weight Loss',
  'Bodybuilding',
  'Functional / CrossFit-Style',
  'Personal Training',
  'Beginner Programs',
];

export default function Membership({ preselectedGoal }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    goal: 'Strength Training',
    plan: 'Quarterly',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (preselectedGoal && GOALS.includes(preselectedGoal)) {
      setForm((prev) => ({ ...prev, goal: preselectedGoal }));
    }
  }, [preselectedGoal]);

  const handleSelectPlan = (planName) => {
    setForm((prev) => ({ ...prev, plan: planName }));
    const el = document.getElementById('enquiry-form');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) {
      nextErrors.name = 'Please enter your full name.';
    }
    const cleanPhone = form.phone.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      nextErrors.phone = 'Enter a valid 10-digit phone / WhatsApp number.';
    }
    return nextErrors;
  };

  const buildMessage = () => {
    return [
      `Hi ${SITE_CONFIG.name}!`,
      `I want to enquire about joining.`,
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Goal: ${form.goal}`,
      `Preferred Plan: ${form.plan}`,
      form.message.trim() ? `Message: ${form.message.trim()}` : '',
    ]
      .filter(Boolean)
      .join('\n');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nextErrors = validate();
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setSubmitted(true);

    const text = encodeURIComponent(buildMessage());
    const waUrl = `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${text}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const mailtoHref = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(
    `Membership Enquiry — ${form.plan} (${form.name || 'New Member'})`
  )}&body=${encodeURIComponent(buildMessage())}`;

  return (
    <section
      id="membership"
      className="relative py-20 sm:py-28 bg-[#121415] slant-top-left bg-noise overflow-hidden"
    >
      {/* Outlined Background Text */}
      <div
        className="outlined-text absolute top-14 right-0 text-[6.5rem] sm:text-[12rem] lg:text-[16rem] leading-none whitespace-nowrap"
        aria-hidden="true"
      >
        NO LIMITS
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="MEMBERSHIP"
            title="CHOOSE YOUR"
            highlight="BATTLE"
          />
          <div className="self-start md:self-auto">
            <span className="ribbon-tag text-xs sm:text-sm">
              FREE TRIAL SESSION AVAILABLE
            </span>
          </div>
        </div>

        {/* 3 Plan Cards (NO prices shown) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {PLANS.map((plan, idx) => (
            <Reveal
              key={plan.id}
              delay={idx * 0.08}
              className={`relative flex flex-col justify-between p-7 sm:p-8 border transition-all duration-300 ${
                plan.popular
                  ? 'bg-[#0A0B0C] border-2 border-[#FFE600] lg:scale-[1.04] shadow-[0_0_45px_rgba(255,230,0,0.12)] z-10'
                  : 'bg-[#0A0B0C]/90 border-[#26292C] hover:border-[#FFE600]/60'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-6 bg-[#FFE600] text-[#0A0B0C] font-condensed text-xs font-extrabold tracking-[0.2em] px-3.5 py-1 -skew-x-6">
                  <span className="block skew-x-6">MOST POPULAR</span>
                </div>
              )}

              <div>
                <span className="font-condensed text-xs tracking-[0.2em] text-[#FFE600] font-bold">
                  {plan.subtitle}
                </span>
                <h3 className="font-display text-3xl sm:text-4xl text-[#F5F5F0] mt-1">
                  {plan.name}
                </h3>
                <p className="mt-2 font-condensed text-lg tracking-wider text-[#8D9195] font-semibold">
                  {plan.quoteText}
                </p>

                <div className="h-px w-full bg-[#26292C] my-6" />

                <ul className="space-y-3.5">
                  {plan.benefits.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm sm:text-base text-[#F5F5F0]/90">
                      <Check
                        className="w-5 h-5 text-[#FFE600] shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => handleSelectPlan(plan.name)}
                className={`mt-8 w-full py-3.5 text-base ${
                  plan.popular ? 'btn-primary' : 'btn-secondary'
                }`}
              >
                <span>ENQUIRE NOW</span>
              </button>
            </Reveal>
          ))}
        </div>

        {/* Enquiry Form */}
        <Reveal
          delay={0.15}
          className="mt-16 sm:mt-20 bg-[#0A0B0C] border border-[#26292C] p-6 sm:p-10 relative overflow-hidden"
        >
          <div id="enquiry-form" className="scroll-mt-28" />
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <span className="font-condensed text-xs tracking-[0.22em] text-[#FFE600] font-bold">
                INSTANT WHATSAPP ENQUIRY
              </span>
              <h3 className="font-display text-3xl sm:text-4xl text-[#F5F5F0] mt-1">
                BOOK YOUR <span className="text-[#FFE600]">FREE TRIAL</span> OR QUOTE
              </h3>
              <p className="text-sm text-[#8D9195] mt-2">
                Fill this out and hit send — it opens a pre-filled WhatsApp message directly to our desk.
              </p>
            </div>

            {submitted ? (
              <div className="bg-[#121415] border border-[#FFE600]/60 p-6 sm:p-8 text-center">
                <CheckCircle2 className="w-12 h-12 text-[#FFE600] mx-auto mb-3" />
                <h4 className="font-display text-2xl sm:text-3xl text-[#F5F5F0]">
                  ENQUIRY READY TO SEND!
                </h4>
                <p className="text-sm sm:text-base text-[#8D9195] mt-2 max-w-md mx-auto">
                  WhatsApp should have opened in a new tab. If it didn&apos;t, use the direct buttons below.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                      buildMessage()
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary px-6 py-3 text-sm w-full sm:w-auto"
                  >
                    <span className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" /> OPEN WHATSAPP AGAIN
                    </span>
                  </a>
                  <a
                    href={mailtoHref}
                    className="btn-secondary px-6 py-3 text-sm w-full sm:w-auto"
                  >
                    <span className="flex items-center gap-2">
                      <Mail className="w-4 h-4" /> SEND VIA EMAIL
                    </span>
                  </a>
                </div>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-5 text-xs font-condensed tracking-widest text-[#8D9195] hover:text-[#FFE600] underline cursor-pointer"
                >
                  EDIT MY ENQUIRY
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="enq-name"
                      className="block font-condensed text-xs tracking-[0.18em] text-[#FFE600] font-bold mb-2"
                    >
                      FULL NAME *
                    </label>
                    <input
                      id="enq-name"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Rahul Mondal"
                      className="w-full bg-[#121415] border border-[#26292C] focus:border-[#FFE600] px-4 py-3 text-[#F5F5F0] placeholder:text-[#8D9195]/60 text-sm outline-none transition-colors"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1.5 font-medium">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="enq-phone"
                      className="block font-condensed text-xs tracking-[0.18em] text-[#FFE600] font-bold mb-2"
                    >
                      PHONE / WHATSAPP NUMBER *
                    </label>
                    <input
                      id="enq-phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="e.g. 98765 43210"
                      className="w-full bg-[#121415] border border-[#26292C] focus:border-[#FFE600] px-4 py-3 text-[#F5F5F0] placeholder:text-[#8D9195]/60 text-sm outline-none transition-colors"
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-400 mt-1.5 font-medium">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="enq-goal"
                      className="block font-condensed text-xs tracking-[0.18em] text-[#FFE600] font-bold mb-2"
                    >
                      PRIMARY GOAL
                    </label>
                    <select
                      id="enq-goal"
                      value={form.goal}
                      onChange={(e) => setForm({ ...form, goal: e.target.value })}
                      className="w-full bg-[#121415] border border-[#26292C] focus:border-[#FFE600] px-4 py-3 text-[#F5F5F0] text-sm outline-none transition-colors"
                    >
                      {GOALS.map((g) => (
                        <option key={g} value={g}>
                          {g}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="enq-plan"
                      className="block font-condensed text-xs tracking-[0.18em] text-[#FFE600] font-bold mb-2"
                    >
                      PREFERRED PLAN
                    </label>
                    <select
                      id="enq-plan"
                      value={form.plan}
                      onChange={(e) => setForm({ ...form, plan: e.target.value })}
                      className="w-full bg-[#121415] border border-[#26292C] focus:border-[#FFE600] px-4 py-3 text-[#F5F5F0] text-sm outline-none transition-colors"
                    >
                      {PLANS.map((p) => (
                        <option key={p.name} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="enq-message"
                    className="block font-condensed text-xs tracking-[0.18em] text-[#FFE600] font-bold mb-2"
                  >
                    MESSAGE (OPTIONAL)
                  </label>
                  <textarea
                    id="enq-message"
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Preferred workout timing, trial session request, or any questions..."
                    className="w-full bg-[#121415] border border-[#26292C] focus:border-[#FFE600] px-4 py-3 text-[#F5F5F0] placeholder:text-[#8D9195]/60 text-sm outline-none transition-colors resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <button type="submit" className="btn-primary w-full sm:w-auto px-8 py-4 text-base">
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" /> SEND ENQUIRY ON WHATSAPP
                    </span>
                  </button>

                  <a
                    href={mailtoHref}
                    className="inline-flex items-center gap-2 text-xs font-condensed tracking-[0.16em] text-[#8D9195] hover:text-[#FFE600] transition-colors"
                  >
                    <Mail className="w-4 h-4" /> PREFER EMAIL? SEND VIA MAILTO
                  </a>
                </div>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

