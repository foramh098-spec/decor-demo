export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  location: string;
  year: string;
  description: string;
  images: string[];
  overview: string;
  challenge: string;
  approach: string;
  result: string;
  materials: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "royal-wedding-udaipur",
    title: "Royal Indian Marriage",
    category: "Weddings",
    location: "Udaipur",
    year: "2025",
    description: "A majestic Indian marriage mandap featuring lush floral arches, brass lanterns, and timeless ceremonial styling.",
    images: [
      "/images/events/indian-marriage.png",
      "/images/events/indian-marriage-palace.webp"
    ],
    overview: "This grand destination Indian marriage celebration combined heritage architecture with romantic floral opulence across the pheras and evening reception.",
    challenge: "The primary challenge was designing monumental floral installations that could withstand the outdoor heat while maintaining a fresh, luxurious appearance throughout the three-day celebration.",
    approach: "We crafted an open floral mandap adorned with cascading roses, lush greenery, and mirrored aisle accents, complemented by grand courtyard chandeliers and floral archways for the evening ceremony.",
    result: "A breathtakingly regal setup that felt deeply traditional and romantic, providing an unforgettable backdrop for the couple's vows.",
    materials: ["Fresh Roses & Hydrangeas", "Brass Lanterns", "Crystal Chandeliers", "Mirrored Floral Aisle"]
  },
  {
    id: "6",
    slug: "traditional-haldi",
    title: "Traditional Haldi",
    category: "Haldi & Mehndi",
    location: "Pune",
    year: "2025",
    description: "A vibrant, marigold-infused Haldi setup celebrating sunlit color, brass urlis, and tradition.",
    images: [
      "/images/events/haldi.webp"
    ],
    overview: "A lively daytime Haldi ceremony embracing traditional Indian aesthetics with a burst of bright, joyous marigold and jasmine florals.",
    challenge: "Creating a traditional marigold design that felt elevated, symmetrical, and richly styled without looking generic.",
    approach: "We framed the couple's carved ceremonial seating inside a dense circular marigold ring backed by cascading genda phool strings, sunlit yellow drapes, and ornate brass urlis overflowing with petals.",
    result: "A vibrantly joyful space that honored cultural tradition while providing a radiant, highly photogenic environment for the Haldi festivities.",
    materials: ["Fresh Marigolds & Jasmine", "Brass Urlis", "Carved Wooden Chowkis", "Printed Yellow Drapes"]
  },
  {
    id: "3",
    slug: "sangeet-night",
    title: "Sangeet Night",
    category: "Sangeet",
    location: "Goa",
    year: "2025",
    description: "A glamorous, high-energy stage and dance floor setup for an unforgettable Sangeet celebration.",
    images: [
      "/images/events/sangeet.webp"
    ],
    overview: "A milestone musical evening combining royal draped canopies with a glamorous, illuminated performance stage and dance floor.",
    challenge: "Creating an opulent lounge and viewing atmosphere that also centered around a spacious, high-impact dance floor and performance stage.",
    approach: "We installed sweeping overhead jewel-toned ceiling drapes, tiered crystal chandeliers, dramatic concert uplighting, and a glossy reflective dance floor facing the royal stage.",
    result: "An electric, picturesque evening that transitioned seamlessly from choreographed family performances into a lively late-night celebration.",
    materials: ["Crystal Chandeliers", "Draped Canopy Ceiling", "Reflective Dance Floor", "Dynamic Stage Lighting"]
  },
  {
    id: "7",
    slug: "vibrant-mehndi-celebration",
    title: "Vibrant Mehndi Ceremony",
    category: "Haldi & Mehndi",
    location: "Jaipur",
    year: "2025",
    description: "A colorful, sunlit Mehndi lounge styled with floral garlands, embroidered cushions, brass pots, and hanging birdcages.",
    images: [
      "/images/events/mehndi.webp"
    ],
    overview: "An intimate daytime Mehndi celebration designed as a warm, inviting lounge where guests could relax while intricate henna was applied.",
    challenge: "Blending vibrant festive colors with an airy, refined daytime palette that photographed beautifully in bright afternoon sunlight.",
    approach: "We styled an ivory draped diwan accented with colorful Rajasthani embroidered cushions, floor poufs, brass urlis, hanging golden birdcages, and overflowing rose and marigold arrangements.",
    result: "A cheerful, effortlessly chic Mehndi corner that kept guests comfortable for hours and served as a favorite photo spot all afternoon.",
    materials: ["Marigold & Rose Garlands", "Embroidered Cushions & Poufs", "Brass Urns & Lanterns", "Woven Cane Accents"]
  },
  {
    id: "8",
    slug: "luxury-birthday-party",
    title: "Luxury Birthday Party",
    category: "Birthdays",
    location: "Mumbai",
    year: "2025",
    description: "An editorial garden birthday celebration featuring an organic pastel balloon arch and floral dessert table.",
    images: [
      "/images/events/birthday-party.png"
    ],
    overview: "A bespoke milestone birthday gathering hosted outdoors, combining soft pastel tones with refined botanical table styling.",
    challenge: "Elevating classic balloon party decor into an editorial, grown-up luxury celebration that harmonized with the garden surroundings.",
    approach: "We constructed an asymmetrical organic balloon arch in blush, lavender, and mint tones framing a vintage console dessert table dressed with fresh floral centerpieces and taper candles.",
    result: "A whimsical yet sophisticated birthday centerpiece that delighted guests and anchored the entire celebration space.",
    materials: ["Organic Matte Balloons", "Fresh Pastel Florals", "Vintage Dessert Console", "Taper Candles & Glassware"]
  },
  {
    id: "9",
    slug: "traditional-kankotri-lekhan",
    title: "Kankotri Lekhan Ceremony",
    category: "Kankotri Lekhan",
    location: "Ahmedabad",
    year: "2025",
    description: "An auspicious Gujarati Kankotri Lekhan setup honoring Lord Ganesha with lotus motifs, marigold garlands, and brass diyas.",
    images: [
      "/images/events/kankotri-lekhan.webp",
      "/images/events/kankotri-lekhan-2.webp"
    ],
    overview: "A sacred and culturally rooted Kankotri Lekhan ceremony marking the auspicious writing of the first wedding invitation at the family residence.",
    challenge: "Creating a serene, temple-inspired focal backdrop inside an intimate space while keeping room for the ceremonial writing thali, kalash, and family rituals.",
    approach: "We paired a hand-painted lotus and Ganesha altar backdrop with vertical marigold garlands, traditional brass standing diyas, coconut kalash vessels, and floor rangoli surrounding the puja thali.",
    result: "A deeply reverent, warm, and photogenic setting that honored Gujarati wedding heritage and made the first invitation ritual truly memorable.",
    materials: ["Marigold Garlands", "Hand-Painted Lotus Backdrop", "Brass Diyas & Kalash", "Floral Rangoli & Puja Thali"]
  },
  {
    id: "2",
    slug: "elegant-engagement",
    title: "Elegant Engagement",
    category: "Engagements",
    location: "Mumbai",
    year: "2024",
    description: "A sophisticated evening affair with modern minimalism and soft lighting.",
    images: [
      "https://images.unsplash.com/photo-1545642412-2580a520f01a?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&q=80&w=800"
    ],
    overview: "An intimate engagement ceremony hosted at a luxury hotel banquet, focusing on contemporary elegance rather than traditional grandeur.",
    challenge: "Transforming a standard banquet hall into a personalized, warm, and highly photogenic environment for a modern couple.",
    approach: "We introduced a sleek, geometric stage design softened by cascading white orchids and pampas grass. Ambient uplighting and hundreds of floating candles set a romantic mood.",
    result: "A chic, contemporary celebration space that perfectly matched the couple's modern aesthetic and provided a warm atmosphere for their close friends and family.",
    materials: ["White Orchids", "Pampas Grass", "Floating Candles", "Mirrored Elements"]
  },
  {
    id: "4",
    slug: "floral-baby-shower",
    title: "Floral Baby Shower",
    category: "Baby Showers",
    location: "Delhi",
    year: "2023",
    description: "A pastel wonderland filled with lush blooms and personalized details.",
    images: [
      "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800"
    ],
    overview: "A whimsical daytime baby shower hosted in a private botanical garden setting.",
    challenge: "Balancing a heavily floral theme without it feeling overwhelming or cliché, keeping it fresh and modern.",
    approach: "We used a refined pastel color palette featuring hydrangeas, peonies, and baby's breath. Custom signage, a beautifully styled dessert cart, and elegant table settings completed the look.",
    result: "A stunning, joy-filled environment that provided gorgeous photo opportunities and a delightful experience for the mother-to-be.",
    materials: ["Fresh Hydrangeas", "Custom Signage", "Pastel Linens", "Gold Cutlery"]
  },
  {
    id: "5",
    slug: "luxury-reception",
    title: "Luxury Reception",
    category: "Weddings",
    location: "Bangalore",
    year: "2024",
    description: "A high-glamour reception featuring crystal installations and deep jewel tones.",
    images: [
      "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1200",
      "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?auto=format&fit=crop&q=80&w=800"
    ],
    overview: "A grand wedding reception designed to impress, featuring high-impact visual elements and a sophisticated atmosphere.",
    challenge: "Designing a massive stage and dance floor area that felt cohesive and luxurious from every angle of the large venue.",
    approach: "We focused on dramatic ceiling installations, suspending thousands of crystal strands and warm filament bulbs. The stage featured a custom velvet backdrop with floral borders in deep burgundy and emerald.",
    result: "A spectacular, high-energy environment that radiated luxury and provided a flawless setting for the evening's performances and dancing.",
    materials: ["Suspended Crystals", "Velvet Backdrops", "Jewel-toned Florals", "LED Dance Floor"]
  }
];

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
