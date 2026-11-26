import React from 'react';
import { Facebook, Instagram, MessageCircle, Phone, Youtube } from 'lucide-react';
import { SITE_CONFIG } from '../config';
import { BrandLogo, DumbbellHMark } from './Logo';

const QUICK_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Programs', href: '#programs' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Membership', href: '#membership' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Location', href: '#location' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#0A0B0C] border-t border-[#26292C] pt-14 pb-24 md:pb-12 overflow-hidden">
      {/* Faint Watermark Dumbbell-H */}
      <div
        className="absolute -right-16 -bottom-16 opacity-[0.035] pointer-events-none"
        aria-hidden="true"
      >
        <DumbbellHMark className="w-80 h-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-[#26292C]">
          {/* Brand + Tagline */}
          <div className="md:col-span-5">
            <BrandLogo size="md" />
            <p className="mt-4 text-sm text-[#8D9195] max-w-sm leading-relaxed">
              {SITE_CONFIG.tagline} A raw iron-pit strength and conditioning studio in{' '}
              {SITE_CONFIG.city}, {SITE_CONFIG.region}.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 bg-[#121415] border border-[#26292C] hover:border-[#FFE600] text-[#F5F5F0] hover:text-[#FFE600] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 bg-[#121415] border border-[#26292C] hover:border-[#FFE600] text-[#F5F5F0] hover:text-[#FFE600] flex items-center justify-center transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 bg-[#121415] border border-[#26292C] hover:border-[#FFE600] text-[#F5F5F0] hover:text-[#FFE600] flex items-center justify-center transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 bg-[#121415] border border-[#26292C] hover:border-[#FFE600] text-[#F5F5F0] hover:text-[#FFE600] flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="font-condensed text-xs tracking-[0.2em] text-[#FFE600] font-bold mb-4">
              QUICK LINKS
            </h3>
            <ul className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[#8D9195] hover:text-[#FFE600] transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Snippet */}
          <div className="md:col-span-4">
            <h3 className="font-condensed text-xs tracking-[0.2em] text-[#FFE600] font-bold mb-4">
              CONTACT
            </h3>
            <div className="space-y-2 text-sm text-[#8D9195]">
              <p>{SITE_CONFIG.addressLine1}</p>
              <p>{SITE_CONFIG.addressLine2}</p>
              <p className="pt-1">
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="text-[#F5F5F0] hover:text-[#FFE600] font-semibold"
                >
                  {SITE_CONFIG.phoneDisplay}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="text-[#F5F5F0] hover:text-[#FFE600]"
                >
                  {SITE_CONFIG.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Credit */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#8D9195]">
          <p>
            © {year} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="font-condensed tracking-wider">{SITE_CONFIG.websiteCredit}</p>
        </div>
      </div>

      {/* Floating WhatsApp Button (Desktop & Tablet) */}
      <a
        href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
          `Hi ${SITE_CONFIG.name}, I have an enquiry!`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="hidden md:flex fixed bottom-6 right-6 z-40 items-center gap-2.5 bg-[#FFE600] text-[#0A0B0C] px-4 py-3 font-condensed font-extrabold text-sm tracking-wider shadow-[0_10px_30px_rgba(255,230,0,0.3)] hover:bg-[#0A0B0C] hover:text-[#FFE600] border-2 border-[#FFE600] transition-all -skew-x-6"
      >
        <span className="flex items-center gap-2 skew-x-6">
          <MessageCircle className="w-5 h-5" /> WHATSAPP
        </span>
      </a>

      {/* Sticky Bottom Bar (Mobile Only) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0B0C]/95 backdrop-blur-md border-t border-[#26292C] px-3 py-2.5 flex items-center gap-2.5">
        <a
          href={SITE_CONFIG.phoneHref}
          className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-[#FFE600] text-[#FFE600] font-condensed font-extrabold text-sm tracking-wider"
        >
          <Phone className="w-4 h-4" /> CALL NOW
        </a>
        <a
          href="#enquiry-form"
          className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-[#FFE600] text-[#0A0B0C] font-condensed font-extrabold text-sm tracking-wider"
        >
          JOIN NOW
        </a>
      </div>
    </footer>
  );
}

