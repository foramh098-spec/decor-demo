import { Heart, Sparkles, PartyPopper, Camera, Palette, Crown, Briefcase, Baby, CalendarHeart, Store, Flame, type LucideIcon } from "lucide-react";
import { type Language } from "@/context/LanguageContext";

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  icon: LucideIcon; 
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
    image: "/images/events/engagement.webp",
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
    image: "/images/events/corporate-event.jpg",
    icon: Briefcase
  },
  {
    id: "reception-decor",
    title: "Reception Decor",
    description: "High-glamour styling for unforgettable evening receptions, focusing on luxury, lighting, and dramatic impact.",
    features: ["Crystal Installations", "Dance Floor Decor", "Lush Centerpieces", "Luxury Seating"],
    image: "/images/events/reception.jpg",
    icon: Camera
  },
  {
    id: "custom-styling",
    title: "Custom Event Styling",
    description: "Bespoke design for private celebrations and unique events tailored exactly to your wildly creative ideas.",
    features: ["Concept Development", "Custom Props", "Venue Transformation", "Personalized Details"],
    image: "/images/events/mehndi.webp",
    icon: Palette
  },
  {
    id: "baby-shower",
    title: "Baby Shower Decor",
    description: "Soft pastel floral walls, organic balloon garlands, and custom welcome signage crafted for joyful daytime baby showers.",
    features: ["Pastel Balloon Garlands", "Custom Welcome Easels", "Dessert Table Styling", "Floral Photo Corners"],
    image: "/images/events/baby-shower.png",
    icon: Baby
  },
  {
    id: "anniversary-decor",
    title: "Anniversary Decor",
    description: "Romantic, candlelit dining canopies and bespoke floral backdrops celebrating milestone anniversaries under the stars.",
    features: ["Fairy Light Canopies", "Candlelit Tablescapes", "Couple Backdrop Arches", "Personalized Memory Displays"],
    image: "/images/events/anniversary.jpg",
    icon: CalendarHeart
  },
  {
    id: "flea-market",
    title: "Flea Market & Pop-Up Decor",
    description: "Curated festival stalls, artisan booth styling, festive bunting, and warm ambient lighting for vibrant community flea markets.",
    features: ["Artisan Stall Setup", "Bunting & Canopy Styling", "String Light Pathways", "Interactive Photo Zones"],
    image: "/images/events/flea-market.webp",
    icon: Store
  },
  {
    id: "navratri-decor",
    title: "Navratri & Garba Decor",
    description: "Vibrant traditional pandals, colorful drapes, marigold canopies, and festive lighting tailored for Garba and Dandiya nights.",
    features: ["Pandal & Mataji Altar", "Bandhani & Marigold Drapes", "Garba Ground Lighting", "Dandiya Photo Corners"],
    image: "/images/events/navratri.jpg",
    icon: Flame
  }
];

const servicesGu: Record<string, { title: string; description: string; features: string[] }> = {
  "wedding-decor": {
    title: "ભારતીય લગ્ન ડેકોર",
    description: "વિધિથી લઈને રિસેપ્શન સુધી તમારા ખાસ દિવસ માટે જાદુઈ વાતાવરણ રચતું સંપૂર્ણ વેડિંગ સ્ટાઇલિંગ અને ડેકોરેશન.",
    features: ["મંડપ અને ચોરી ડિઝાઇન", "ફ્લોરલ ઇન્સ્ટોલેશન", "ટેબલ સેટિંગ", "સ્ટેજ બેકડ્રોપ"],
  },
  "engagement-decor": {
    title: "સગાઈ (એન્ગેજમેન્ટ) ડેકોર",
    description: "તમારી રિંગ સેરેમની માટે સુંદર, આત્મીય અને ફોટોગ્રાફી માટે પરફેક્ટ બેકડ્રોપ તૈયાર કરતું એલિગન્ટ ડેકોર.",
    features: ["રિંગ સેરેમની સ્ટેજ", "એમ્બિયન્ટ લાઇટિંગ", "ફોટો બૂથ", "પ્રવેશદ્વાર સજાવટ"],
  },
  "birthday-decor": {
    title: "જન્મદિવસ પાર્ટી ડેકોર",
    description: "ખાસ જન્મદિવસો માટે ક્રિએટિવ થીમ ડેકોરેશન — રંગબેરંગી બલૂન આર્ચ અને સ્ટાઇલિશ વિગતો સાથે.",
    features: ["થીમ આધારિત સેટઅપ", "બલૂન ઇન્સ્ટોલેશન", "ડેઝર્ટ ટેબલ સ્ટાઇલિંગ", "લાઉન્જ એરિયા"],
  },
  "haldi-mehndi": {
    title: "હલ્દી અને મહેંદી ડેકોર",
    description: "સાંસ્કૃતિક પરંપરાને આધુનિક અંદાજમાં ઉજવતું જીવંત, ગલગોટાના ફૂલો અને રંગોથી ભરપૂર ડેકોર.",
    features: ["ફ્લોરલ ઝૂલા (હિંચકો)", "ગલગોટાની કેનોપી", "પરંપરાગત પ્રોપ્સ", "રંગબેરંગી ડ્રેપ્સ"],
  },
  "sangeet-decor": {
    title: "સંગીત નાઇટ ડેકોર",
    description: "સંગીત અને નૃત્યની અવિસ્મરણીય સાંજ માટે ખાસ ડિઝાઇન કરાયેલ ગ્લેમરસ અને હાઈ-એનર્જી સ્ટેજ સેટઅપ.",
    features: ["LED ડાન્સ ફ્લોર", "ડ્રામેટિક લાઇટિંગ", "સ્ટેજ ડેકોર", "લાઉન્જ સીટિંગ"],
  },
  "kankotri-lekhan": {
    title: "કંકોત્રી લેખન ડેકોર",
    description: "કંકોત્રી લેખન અને ગણેશ સ્થાપના વિધિ માટે ગલગોટાની માળા, કમળ બેકડ્રોપ અને પિત્તળના દીવા સાથે શુભ સેટઅપ.",
    features: ["ગણેશ અને કમળ બેકડ્રોપ", "ગલગોટાના તોરણ", "પૂજા થાળી અને બાજોઠ", "પિત્તળના દીવા અને રંગોળી"],
  },
  "corporate-events": {
    title: "કોર્પોરેટ ઇવેન્ટ ડેકોર",
    description: "કોર્પોરેટ ગાલા, એવોર્ડ નાઇટ્સ અને કંપનીની ઉજવણી માટે પ્રોફેશનલ અને બ્રાન્ડેડ સ્ટાઇલિંગ.",
    features: ["બ્રાન્ડ કલર સંકલન", "સ્ટેજ ડિઝાઇન", "VIP સીટિંગ એરિયા", "રજિસ્ટ્રેશન ડેસ્ક"],
  },
  "reception-decor": {
    title: "રિસેપ્શન ડેકોર",
    description: "લક્ઝરી, ઝૂમર લાઇટિંગ અને ભવ્ય ફ્લોરલ ડિઝાઇન સાથે અવિસ્મરણીય સાંજના રિસેપ્શન માટે હાઈ-ગ્લેમર સ્ટાઇલિંગ.",
    features: ["ક્રિસ્ટલ ઇન્સ્ટોલેશન", "ડાન્સ ફ્લોર ડેકોર", "લક્ઝરી સેન્ટરપીસ", "રોયલ સીટિંગ"],
  },
  "custom-styling": {
    title: "કસ્ટમ ઇવેન્ટ સ્ટાઇલિંગ",
    description: "તમારી અનોખી કલ્પનાઓ અને ખાનગી ઉજવણીઓ મુજબ ખાસ તૈયાર કરેલી બેસ્પોક ઇવેન્ટ ડિઝાઇન.",
    features: ["કોન્સેપ્ટ ડેવલપમેન્ટ", "કસ્ટમ પ્રોપ્સ", "વેન્યુ ટ્રાન્સફોર્મેશન", "વ્યક્તિગત વિગતો"],
  },
  "baby-shower": {
    title: "બેબી શાવર (સીમંત) ડેકોર",
    description: "આનંદમય બેબી શાવર માટે પેસ્ટલ ફ્લોરલ વોલ્સ, ઓર્ગેનિક બલૂન ગાર્લેન્ડ અને કસ્ટમ વેલકમ સાઇનેજ.",
    features: ["પેસ્ટલ બલૂન ગાર્લેન્ડ", "કસ્ટમ વેલકમ ઇઝલ", "ડેઝર્ટ ટેબલ સ્ટાઇલિંગ", "ફ્લોરલ ફોટો કોર્નર"],
  },
  "anniversary-decor": {
    title: "એનિવર્સરી (વર્ષગાંઠ) ડેકોર",
    description: "તારાઓ નીચે રોમેન્ટિક કેન્ડલલાઇટ ડાઇનિંગ કેનોપી અને માઇલસ્ટોન વર્ષગાંઠ માટે સુંદર ફ્લોરલ બેકડ્રોપ.",
    features: ["ફેરી લાઇટ કેનોપી", "કેન્ડલલાઇટ ટેબલસ્કેપ", "કપલ બેકડ્રોપ આર્ચ", "યાદગાર ફોટો ડિસ્પ્લે"],
  },
  "flea-market": {
    title: "ફ્લી માર્કેટ અને પોપ-અપ ડેકોર",
    description: "ઉત્સાહપૂર્ણ કોમ્યુનિટી ફ્લી માર્કેટ માટે આર્ટિઝન સ્ટોલ, બંટિંગ અને ગરમાગરમ ફેસ્ટિવલ લાઇટિંગ સેટઅપ.",
    features: ["આર્ટિઝન સ્ટોલ સેટઅપ", "બંટિંગ અને કેનોપી સ્ટાઇલિંગ", "સ્ટ્રિંગ લાઇટ પાથવે", "ઇન્ટરેક્ટિવ ફોટો ઝોન"],
  },
  "navratri-decor": {
    title: "નવરાત્રી અને ગરબા ડેકોર",
    description: "ગરબા અને દાંડિયા રાત્રી માટે રંગબેરંગી પરંપરાગત પંડાલ, બાંધણી ડ્રેપ્સ, ગલગોટાની કેનોપી અને ઉત્સવની લાઇટિંગ.",
    features: ["માતાજી પંડાલ અને સ્થાપના", "બાંધણી અને ગલગોટા ડ્રેપ્સ", "ગરબા ગ્રાઉન્ડ લાઇટિંગ", "દાંડિયા ફોટો કોર્નર"],
  },
};

export function getLocalizedService(service: Service, lang: Language): Service {
  if (lang !== "gu") return service;
  const gu = servicesGu[service.id];
  if (!gu) return service;
  return {
    ...service,
    title: gu.title,
    description: gu.description,
    features: gu.features,
  };
}
