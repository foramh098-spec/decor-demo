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
    description: "A romantic evening affair with cascading wisteria blooms and warm fairy light curtains.",
    images: [
      "/images/events/engagement.webp",
      "/images/events/private-event.webp"
    ],
    overview: "An intimate engagement ceremony hosted at a luxury hotel banquet, focusing on contemporary romance and delicate floral draping.",
    challenge: "Transforming a dark-paneled banquet wall into a bright, ethereal, and highly photogenic focal stage for the ring exchange.",
    approach: "We layered sheer ivory curtains over cascading warm fairy lights, crowned with lush hanging wisteria and greenery across the backdrop.",
    result: "A dreamy, softly illuminated stage that framed the couple's ring ceremony beautifully in both candid and portrait photography.",
    materials: ["Cascading Wisteria", "Warm Fairy Lights", "Sheer Ivory Drapes", "Floral Centerpieces"]
  },
  {
    id: "4",
    slug: "floral-baby-shower",
    title: "Floral Baby Shower",
    category: "Baby Showers",
    location: "Delhi",
    year: "2023",
    description: "A blush pastel welcome setup filled with organic balloons, roses, and bespoke signage.",
    images: [
      "/images/events/baby-shower.png"
    ],
    overview: "An intimate daytime baby shower styled with soft blush tones, bespoke calligraphy, and romantic floral clusters.",
    challenge: "Balancing a delicate pastel balloon and floral theme so it felt elevated, cohesive, and photo-ready in a compact indoor space.",
    approach: "We paired custom watercolor welcome signage on an ivory easel with matte blush balloons, lush garden roses, and eucalyptus sprigs.",
    result: "A charming, joy-filled focal corner that welcomed guests warmly and created effortless photo moments for the parents-to-be.",
    materials: ["Blush Matte Balloons", "Garden Roses", "Custom Welcome Easel", "Eucalyptus Foliage"]
  },
  {
    id: "5",
    slug: "luxury-reception",
    title: "Luxury Reception",
    category: "Weddings",
    location: "Bangalore",
    year: "2024",
    description: "A high-glamour reception featuring architectural lighting, chandeliers, and fine dining tablescapes.",
    images: [
      "/images/events/reception.jpg",
      "/images/events/indian-marriage-palace.webp"
    ],
    overview: "A grand wedding reception designed to impress, featuring dramatic architectural ceiling lighting and elevated banquet styling.",
    challenge: "Designing a large ballroom reception that felt cohesive, atmospheric, and luxurious from every guest table.",
    approach: "We paired warm sculptural pendant chandeliers and dynamic violet-amber uplighting with crisp navy linens, crystal stemware, and jewel-toned floral centerpieces.",
    result: "A spectacular, high-energy ballroom atmosphere that radiated luxury throughout the evening's dinner and performances.",
    materials: ["Sculptural Chandeliers", "Dynamic Uplighting", "Crystal Glassware", "Jewel-Toned Florals"]
  },
  {
    id: "10",
    slug: "botanical-corporate-gala",
    title: "Botanical Corporate Gala",
    category: "Corporate",
    location: "Mumbai",
    year: "2025",
    description: "An upscale corporate awards gala featuring a suspended botanical canopy and warm ambient dining.",
    images: [
      "/images/events/corporate-event.jpg",
      "/images/events/reception.jpg"
    ],
    overview: "An executive annual awards dinner transforming a convention ballroom into an immersive botanical evening.",
    challenge: "Softening a vast corporate hall while maintaining clear sightlines to the main presentation stage and branded screens.",
    approach: "We engineered an overhead suspended greenery ceiling dotted with warm Edison bulbs, paired with cross-back wood chairs, gold-trimmed runners, and crisp stage lighting.",
    result: "A refined, memorable corporate gala environment that elevated brand hospitality and guest engagement.",
    materials: ["Suspended Greenery Canopy", "Edison Bulb Grid", "Cross-Back Dining Chairs", "Custom Stage AV"]
  },
  {
    id: "11",
    slug: "garden-private-soiree",
    title: "Garden Private Soirée",
    category: "Private Events",
    location: "Pune",
    year: "2025",
    description: "An enchanting outdoor private celebration framed by pressed-look floral curtains and wildflower jars.",
    images: [
      "/images/events/private-event.webp",
      "/images/events/engagement.webp"
    ],
    overview: "An intimate milestone anniversary and private garden gathering celebrating natural botanical textures in open sunlight.",
    challenge: "Creating a sculptural outdoor photo backdrop that felt organic to the surrounding garden trees without blocking natural light.",
    approach: "We built a timber frame draped in sheer linen panels interwoven with vertical wildflower garlands and clustered glass apothecary jars filled with fresh meadow blooms.",
    result: "A serene, sunlit celebration centerpiece that felt effortlessly romantic and bespoke for the hosts and their closest guests.",
    materials: ["Timber Arch Frame", "Vertical Wildflower Garlands", "Sheer Linen Drapes", "Glass Floral Jars"]
  }
];

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);
