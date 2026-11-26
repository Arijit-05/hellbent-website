/**
 * ============================================================================
 * HELL-BENT FITNESS STUDIO — CENTRAL SITE CONFIGURATION
 * ============================================================================
 * Edit this single file to customize all copy, contact details, hours,
 * social links, and image URLs across the entire website.
 *
 * PLACEHOLDER MARKERS: Look for "[REPLACE]" comments to swap in real gym data.
 * ============================================================================
 */

export const SITE_CONFIG = {
  // Brand Identity
  name: "HELL-BENT FITNESS STUDIO",
  shortName: "HELL-BENT",
  subBrand: "FITNESS STUDIO",
  tagline: "FORGED IN SWEAT. BUILT WITHOUT LIMITS.",
  estYear: "EST. 2021", // [REPLACE] Actual year established
  city: "Berhampore", // [REPLACE] City (e.g., Berhampore or Krishnanagar)
  region: "West Bengal, India",

  // Logo: Drop your real logo at /public/logo.png.
  // Set useCustomLogoImage to true to render /logo.png in navbar/footer,
  // or keep false to use the crisp inline SVG dumbbell-H mark.
  logoPath: "/logo.png",
  useCustomLogoImage: false,

  // Contact Details [REPLACE ALL PLACEHOLDERS BELOW]
  phoneDisplay: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  whatsappNumber: "919876543210", // Country code + number, no '+' or spaces
  email: "hello@hellbentfitness.in",
  addressLine1: "Bonbehari Sen Road, Khagra",
  addressLine2: "Berhampore, Murshidabad, West Bengal 742103", // [REPLACE] Exact street & pin
  googleMapsUrl: "https://maps.google.com/?q=Berhampore+West+Bengal+742103",
  googleMapsEmbedUrl:
    "https://www.google.com/maps?q=Berhampore,West+Bengal,742103&output=embed",

  // Social Links [REPLACE]
  socials: {
    instagramHandle: "@hellbentberhampore",
    instagram: "https://instagram.com/hellbentberhampore",
    facebook: "https://facebook.com/",
    youtube: "https://youtube.com/",
  },

  // Credit [REPLACE]
  websiteCredit: "Website by [YOUR NAME]",

  // Hero Stats Strip [REPLACE]
  heroStats: [
    "500+ MEMBERS",
    "6 DAYS A WEEK",
    "CERTIFIED TRAINERS",
    "OPEN 5:30 AM – 10:00 PM",
  ],

  // About Section Counters [REPLACE]
  aboutStats: [
    { value: 500, suffix: "+", label: "Active Members" },
    { value: 8, suffix: "+", label: "Certified Coaches" },
    { value: 4, suffix: " YRS", label: "Forging Strength" },
    { value: 60, suffix: "+", label: "Pro Stations" },
  ],

  // Opening Hours (used in Location table; dayIndex 0 = Sunday ... 6 = Saturday)
  hours: [
    { day: "Monday", dayIndex: 1, time: "5:30 AM – 10:00 PM" },
    { day: "Tuesday", dayIndex: 2, time: "5:30 AM – 10:00 PM" },
    { day: "Wednesday", dayIndex: 3, time: "5:30 AM – 10:00 PM" },
    { day: "Thursday", dayIndex: 4, time: "5:30 AM – 10:00 PM" },
    { day: "Friday", dayIndex: 5, time: "5:30 AM – 10:00 PM" },
    { day: "Saturday", dayIndex: 6, time: "5:30 AM – 10:00 PM" },
    { day: "Sunday", dayIndex: 0, time: "7:00 AM – 12:00 PM (Open Gym)" },
  ],

  // ============================================================================
  // IMAGES [REPLACE WITH REAL GYM PHOTOS WHEN AVAILABLE]
  // Using hotlink-safe Unsplash photography with WebP/auto-format & dimensions.
  // ============================================================================
  images: {
    hero: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80",
    about: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80",
    ctaBg: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=1600&q=80",

    facilities: {
      freeWeights:
        "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=1000&q=80",
      powerRacks:
        "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=1000&q=80",
      cardioDeck:
        "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=1000&q=80",
      functionalArea:
        "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1000&q=80",
      machineFloor:
        "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=1000&q=80",
      stretching:
        "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1000&q=80",
      personalTraining:
        "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=1000&q=80",
      lockers:
        "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&w=1000&q=80",
    },

    trainers: [
      {
        name: "Mrinal Da", // [REPLACE]
        role: "Head Strength Coach",
        speciality: "Powerlifting & Barbell Mechanics",
        experience: "9+ Years Exp.",
        image:
          "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Arjun Sen", // [REPLACE]
        role: "Hypertrophy & Prep Coach",
        speciality: "Bodybuilding & Body Recomposition",
        experience: "7+ Years Exp.",
        image:
          "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80",
      },
      {
        name: "Riya Das", // [REPLACE]
        role: "Functional & Mobility Specialist",
        speciality: "HIIT, Fat Loss & Ladies Conditioning",
        experience: "6+ Years Exp.",
        image:
          "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=800&q=80",
      },
    ],

    gallery: [
      {
        id: 1,
        category: "EQUIPMENT",
        title: "Calibrated Steel & Olympic Barbells",
        src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80",
        width: 900,
        height: 600,
      },
      {
        id: 2,
        category: "TRAINING",
        title: "Heavy Chalked Deadlifts",
        src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80",
        width: 900,
        height: 1100,
      },
      {
        id: 3,
        category: "EQUIPMENT",
        title: "Full Dumbbell Wall Up to 50kg",
        src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=900&q=80",
        width: 900,
        height: 675,
      },
      {
        id: 4,
        category: "TRAINING",
        title: "Battle Ropes & Metabolic Conditioning",
        src: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=900&q=80",
        width: 900,
        height: 1050,
      },
      {
        id: 5,
        category: "COMMUNITY",
        title: "Late Night Iron Pit Sessions",
        src: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=900&q=80",
        width: 900,
        height: 600,
      },
      {
        id: 6,
        category: "EQUIPMENT",
        title: "Competition Squat Racks",
        src: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=900&q=80",
        width: 900,
        height: 650,
      },
      {
        id: 7,
        category: "COMMUNITY",
        title: "1-on-1 Coaching & Form Checks",
        src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=900&q=80",
        width: 900,
        height: 600,
      },
      {
        id: 8,
        category: "TRAINING",
        title: "High-Intensity Sprints & Cardio",
        src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=900&q=80",
        width: 900,
        height: 1000,
      },
    ],
  },
};

