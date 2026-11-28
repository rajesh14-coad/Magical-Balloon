/**
 * Global Configuration and Constants
 * Business: Magical Balloon Decoration
 * Website: https://magicalballoondecoration.com
 * Theme Rules: Light Mode by default + Dark Mode toggle + Glassmorphism + Saffron/White/Green Accents (STRICTLY NO BLUE)
 */

export const BUSINESS_INFO = {
  name: "Magical Balloon Decoration",
  fullName: "Magical Balloon Decoration Hyderabad",
  shortName: "Magical Balloon",
  // Set your legal proprietor / registered entity name matching your Google Ads billing profile when ready
  legalEntityName: "Magical Balloon Decoration",
  websiteUrl: "https://magicalballoondecoration.com",
  // Add your active working email address here once configured on your domain (e.g. "contact@magicalballoondecoration.com")
  email: "",
  tagline: "Custom Birthday, Anniversary, Baby Shower & Event Balloon Decoration in Hyderabad",
  phone: "+91 9509971603",
  phoneRaw: "+919509971603",
  whatsappUrl: "https://wa.me/919509971603",
  address: "7-4-289, Navajeevan Nagar, Saraband Nagar, Balanagar, Hyderabad, Telangana 500042, India",
  streetAddress: "7-4-289, Navajeevan Nagar, Saraband Nagar, Balanagar",
  city: "Hyderabad",
  state: "Telangana",
  pincode: "500042",
  country: "India",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=7-4-289+Navajeevan+Nagar+Saraband+Nagar+Balanagar+Hyderabad+Telangana+500042",
  // Add your verified Google Business Profile URL when ready
  googleBusinessUrl: "",
  openingHours: "Mon - Sun: Open 24 Hours",
  policyUpdatedDate: "November 26, 2026",
  serviceAreas: [
    "Balanagar",
    "Kukatpally",
    "Madhapur",
    "Hitec City",
    "Gachibowli",
    "Banjara Hills",
    "Jubilee Hills",
    "Secunderabad",
    "Miyapur",
    "Begumpet",
    "Kondapur",
    "Hyderabad Wide"
  ]
};

export const NAV_LINKS = [
  { label: "Home", id: "home", path: "/" },
  { label: "Services", id: "services", path: "/#services" },
  { label: "How It Works", id: "why-us", path: "/#why-us" },
  { label: "About Us", id: "about", path: "/about" },
  { label: "Contact", id: "contact", path: "/#contact" }
];

export const LEGAL_LINKS = [
  { label: "About Us", path: "/about" },
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms & Conditions", path: "/terms" },
  { label: "Cancellation & Refund Policy", path: "/refund-policy" }
];

export const BOOKING_PROCESS = [
  {
    step: "01",
    title: "Select Theme & Venue",
    description: "Browse decoration themes or share your venue size and occasion details in Hyderabad."
  },
  {
    step: "02",
    title: "Upfront Written Quote",
    description: "Receive a clear itemised estimate covering balloon count, backdrop props, and setup charges before confirming."
  },
  {
    step: "03",
    title: "Confirm Schedule & Terms",
    description: "Lock your event date and slot after reviewing clear booking, rescheduling, and cancellation terms."
  },
  {
    step: "04",
    title: "On-Site Crew Setup",
    description: "Our Hyderabad team arrives before your scheduled time slot to install and inspect every detail."
  }
];

export const THEME_CONFIG = {
  defaultTheme: "light",
  supportsDark: true,
  allowsBlue: false,
  accents: {
    green: "#138808",
    saffron: "#FF7722",
    white: "#FFFFFF"
  }
};
