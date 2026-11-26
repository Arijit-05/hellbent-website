import React from 'react';
import { Clock, Mail, MapPin, MessageCircle, Navigation, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../config';
import { Reveal, SectionHeader } from './MotionPrimitives';

export default function Location() {
  const todayIndex = new Date().getDay();

  return (
    <section
      id="location"
      className="relative py-20 sm:py-28 bg-[#121415] slant-top-right bg-noise overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="FIND US"
          title="LOCATION &"
          highlight="CONTACT"
        />

        <div className="mt-10 sm:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Contact Cards + Hours Table */}
          <Reveal className="lg:col-span-5 flex flex-col justify-between gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {/* Address */}
              <div className="bg-[#0A0B0C] border border-[#26292C] p-5 flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[#FFE600] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <h3 className="font-condensed text-xs tracking-[0.2em] text-[#FFE600] font-bold">
                    ADDRESS
                  </h3>
                  <p className="text-sm sm:text-base text-[#F5F5F0] mt-1 font-medium">
                    {SITE_CONFIG.addressLine1}
                    <br />
                    <span className="text-[#8D9195]">{SITE_CONFIG.addressLine2}</span>
                  </p>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="bg-[#0A0B0C] border border-[#26292C] p-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a
                  href={SITE_CONFIG.phoneHref}
                  className="flex items-start gap-3 group"
                >
                  <Phone className="w-5 h-5 text-[#FFE600] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="font-condensed text-xs tracking-[0.2em] text-[#FFE600] font-bold block">
                      CALL US
                    </span>
                    <span className="text-sm text-[#F5F5F0] group-hover:text-[#FFE600] transition-colors font-medium">
                      {SITE_CONFIG.phoneDisplay}
                    </span>
                  </div>
                </a>

                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <MessageCircle className="w-5 h-5 text-[#FFE600] shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <span className="font-condensed text-xs tracking-[0.2em] text-[#FFE600] font-bold block">
                      WHATSAPP
                    </span>
                    <span className="text-sm text-[#F5F5F0] group-hover:text-[#FFE600] transition-colors font-medium">
                      Chat Now →
                    </span>
                  </div>
                </a>
              </div>

              {/* Email */}
              <div className="bg-[#0A0B0C] border border-[#26292C] p-5 flex items-start gap-4">
                <Mail className="w-5 h-5 text-[#FFE600] shrink-0 mt-0.5" aria-hidden="true" />
                <div>
                  <span className="font-condensed text-xs tracking-[0.2em] text-[#FFE600] font-bold block">
                    EMAIL
                  </span>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-sm sm:text-base text-[#F5F5F0] hover:text-[#FFE600] transition-colors font-medium"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Opening Hours Table */}
            <div className="bg-[#0A0B0C] border border-[#26292C] p-5">
              <div className="flex items-center gap-2.5 mb-3">
                <Clock className="w-5 h-5 text-[#FFE600]" aria-hidden="true" />
                <h3 className="font-condensed text-xs tracking-[0.2em] text-[#FFE600] font-bold">
                  OPENING HOURS
                </h3>
              </div>
              <ul className="divide-y divide-[#26292C]/70 text-sm">
                {SITE_CONFIG.hours.map((row) => {
                  const isToday = row.dayIndex === todayIndex;
                  return (
                    <li
                      key={row.day}
                      className={`py-2 flex items-center justify-between ${
                        isToday ? 'text-[#FFE600] font-bold' : 'text-[#8D9195]'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {row.day}
                        {isToday && (
                          <span className="text-[10px] font-condensed tracking-widest bg-[#FFE600] text-[#0A0B0C] px-1.5 py-0.5 font-extrabold">
                            TODAY
                          </span>
                        )}
                      </span>
                      <span className={isToday ? 'text-[#FFE600]' : 'text-[#F5F5F0]/85'}>
                        {row.time}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          {/* Right: Dark-Styled Google Map + Get Directions */}
          <Reveal delay={0.12} className="lg:col-span-7 flex flex-col gap-4">
            <div className="relative flex-1 min-h-[340px] sm:min-h-[420px] bg-[#0A0B0C] border border-[#26292C] overflow-hidden">
              <iframe
                title={`${SITE_CONFIG.name} Map`}
                src={SITE_CONFIG.googleMapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[340px] sm:min-h-[420px] border-0"
                style={{
                  filter: 'invert(90%) hue-rotate(180deg) grayscale(0.6) contrast(1.05)',
                }}
                allowFullScreen
              />
            </div>

            <a
              href={SITE_CONFIG.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-4 px-8 text-base w-full sm:w-auto self-start"
            >
              <span className="flex items-center gap-2.5">
                <Navigation className="w-4 h-4" /> GET DIRECTIONS ON GOOGLE MAPS
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

