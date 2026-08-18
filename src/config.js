// ============================================================
// SITE CONFIGURATION
// Update this file to change your contact information globally.
// ============================================================

export const CONFIG = {
  name: "Lase Olufemi",
  tagline: "Web Designer & Developer",
  email: "laseolufemi48@gmail.com",

  // WhatsApp: include country code, no + or spaces e.g. 2348012345678
  whatsapp: "+2348061721017", // ← UPDATE THIS with your real number

  // Pre-filled WhatsApp message
  whatsappMessage: "Hi Lase, I found your portfolio and I'm interested in getting a website for my business.",

  // Social links
  github: "https://github.com/lasecode",
  linkedin: "https://www.linkedin.com/in/eli-codes/",
  instagram: "", // ← ADD your Instagram handle e.g. https://instagram.com/yourusername

  // Project links
  projects: [
    {
      id: "salon",
      name: "Salon Landing Page",
      category: "Beauty & Wellness",
      type: "Concept Project",
      description:
        "Conversion-focused website concept designed to help a local salon showcase its services, build trust and turn visitors into WhatsApp bookings.",
      tags: ["Salon", "Landing Page", "Booking"],
      liveUrl: "https://lasecode.github.io/salon-landingpage/",
      image: "/screenshots/salon.png",
    },
    {
      id: "realestate",
      name: "Real Estate Landing Page",
      category: "Real Estate",
      type: "Concept Project",
      description:
        "A professional real estate landing page designed to showcase property listings, communicate trust, and capture enquiry leads.",
      tags: ["Real Estate", "Landing Page", "Leads"],
      liveUrl: "https://lasecode.github.io/realestate-landingpage/",
      image: "/screenshots/realestate.png",
    },
    {
      id: "restaurant",
      name: "Restaurant Website",
      category: "Food & Hospitality",
      type: "Concept Project",
      description:
        "A rich, visually engaging website for a restaurant — designed to showcase the menu, build appetite and drive reservations.",
      tags: ["Restaurant", "Business Website", "Reservations"],
      liveUrl: "https://lasecode.github.io/resturantlanding-page/",
      image: "/screenshots/restaurant.png",
    },
    {
      id: "saas",
      name: "SaaS / Business Landing Page",
      category: "Business",
      type: "Concept Project",
      description:
        "A modern, conversion-focused landing page for a business or SaaS product — with clear feature sections and a compelling call-to-action.",
      tags: ["Business", "Landing Page", "SaaS"],
      liveUrl: "https://lasecode.github.io/saas-landingpage/",
      image: "/screenshots/saas.png",
    },
  ],
};

// Computed WhatsApp link
export const whatsappLink = (message = CONFIG.whatsappMessage) =>
  `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
