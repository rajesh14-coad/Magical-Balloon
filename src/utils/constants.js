/**
 * Global Configuration and Constants
 * Business: Magical Balloon Decoration Hyderabad
 * Theme Rules: Light Mode by default + Dark Mode toggle + Glassmorphism + Saffron/White/Green Accents (STRICTLY NO BLUE)
 */

export const BUSINESS_INFO = {
  name: "Magical Balloon Decoration Hyderabad",
  shortName: "Magical Balloon Decor",
  tagline: "Elevating Celebrations with Hyderabad's Finest Balloon Artistry",
  phone: "+91 9509971603",
  phoneRaw: "+919509971603",
  whatsappUrl: "https://wa.me/919509971603",
  address: "7-4-289, Navajeevan Nagar, Saraband Nagar, Balanagar, Hyderabad, Telangana 500042, भारत 🇮🇳",
  city: "Hyderabad",
  state: "Telangana",
  pincode: "500042",
  openingHours: "Mon - Sun: 8:00 AM - 10:00 PM",
  serviceAreas: [
    "Balanagar",
    "Kukatpally",
    "Madhapur",
    "Hitec City",
    "Gachibowli",
    "Banjara Hills",
    "Jubilee Hills",
    "Secunderabad",
    "All Over Hyderabad"
  ]
};

export const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" }
];

export const SERVICE_CATEGORIES = [
  {
    id: "birthday",
    title: "Birthday Balloon Setups",
    description: "Captivating themes for kids, milestone birthdays, and luxury pastel decors with personalized neon boards.",
    accent: "saffron"
  },
  {
    id: "anniversary",
    title: "Anniversary & Romantic Canopies",
    description: "Fairytale canopy setups, heart arches, and warm mood lighting for unforgettable couples' celebrations.",
    accent: "white"
  },
  {
    id: "baby-shower",
    title: "Baby Shower & Welcome Baby",
    description: "Gentle pastels, golden ring backdrops, and customized cutouts to celebrate new beginnings.",
    accent: "green"
  },
  {
    id: "corporate",
    title: "Corporate & Grand Openings",
    description: "Sleek organic balloon arches, pillar columns, and brand-matching balloon sculptures.",
    accent: "saffron"
  }
];

export const STATS = [
  { label: "Happy Celebrations", value: "1,500+" },
  { label: "Client Satisfaction", value: "4.9 ★" },
  { label: "On-Time Setup", value: "100%" },
  { label: "Coverage", value: "Hyderabad Wide" }
];

export const THEME_CONFIG = {
  defaultTheme: "light",
  supportsDark: true,
  allowsBlue: false,
  accents: {
    saffron: "#FF7722",
    white: "#FFFFFF",
    green: "#138808"
  }
};
