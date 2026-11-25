import { Heart, Sparkles, PartyPopper, Camera, Palette, Crown, Baby, Briefcase } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: any; 
}

export const services: Service[] = [
  {
    id: "wedding-decor",
    title: "Wedding Decor",
    description: "Complete wedding styling and decoration, creating magical environments for your special day from ceremony to reception.",
    features: ["Mandap & Altar Design", "Floral Installations", "Table Settings", "Stage Backdrops"],
    image: "/images/events/indian-marriage.png",
    icon: Crown
  },
  {
    id: "engagement-decor",
    title: "Engagement Decor",
    description: "Elegant setups for your ring ceremony, designed to be intimate, beautiful, and the perfect backdrop for photos.",
    features: ["Ring Ceremony Stage", "Ambient Lighting", "Photo Booths", "Entrance Decor"],
    image: "https://images.unsplash.com/photo-1545642412-2580a520f01a?auto=format&fit=crop&q=80&w=1200",
    icon: Heart
  },
  {
    id: "birthday-decor",
    title: "Birthday Party Decor",
    description: "Creative, themed decorations for milestone birthdays. We bring your party vision to life with vibrant energy and fun details.",
    features: ["Themed Setups", "Balloon Installations", "Dessert Table Styling", "Lounge Areas"],
    image: "/images/events/birthday-party.png",
    icon: PartyPopper
  },
  {
    id: "haldi-mehndi",
    title: "Haldi & Mehndi Decor",
    description: "Vibrant, traditional, and deeply colorful setups honoring cultural traditions with a modern, stylish twist.",
    features: ["Floral Swings", "Marigold Canopies", "Traditional Props", "Colorful Drapes"],
    image: "/images/events/haldi.webp",
    icon: Sparkles
  },
  {
    id: "sangeet-decor",
    title: "Sangeet Decor",
    description: "High-energy, glamorous setups designed specifically for an unforgettable night of music and dancing.",
    features: ["LED Dance Floors", "Dramatic Lighting", "Stage Decor", "Lounge Seating"],
    image: "/images/events/sangeet.webp",
    icon: PartyPopper
  },
  {
    id: "kankotri-lekhan",
    title: "Kankotri Lekhan Decor",
    description: "Auspicious, culturally rooted setups for Kankotri Lekhan and Ganesh Sthapana ceremonies with marigold garlands and brass accents.",
    features: ["Ganesha & Lotus Backdrops", "Marigold Garlands", "Puja Thali & Bajoth", "Brass Diyas & Rangoli"],
    image: "/images/events/kankotri-lekhan.webp",
    icon: Sparkles
  },
  {
    id: "corporate-events",
    title: "Corporate Event Decor",
    description: "Professional, branded styling for corporate galas, award nights, and company celebrations.",
    features: ["Brand Color Integration", "Stage Design", "VIP Seating Areas", "Registration Desks"],
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
    icon: Briefcase
  },
  {
    id: "reception-decor",
    title: "Reception Decor",
    description: "High-glamour styling for unforgettable evening receptions, focusing on luxury, lighting, and dramatic impact.",
    features: ["Crystal Installations", "Dance Floor Decor", "Lush Centerpieces", "Luxury Seating"],
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1200",
    icon: Camera
  },
  {
    id: "custom-styling",
    title: "Custom Event Styling",
    description: "Bespoke design for private celebrations and unique events tailored exactly to your wildly creative ideas.",
    features: ["Concept Development", "Custom Props", "Venue Transformation", "Personalized Details"],
    image: "/images/events/mehndi.webp",
    icon: Palette
  }
];
