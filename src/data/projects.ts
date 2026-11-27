import { type Language } from "@/context/LanguageContext";

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
  },
  {
    id: "12",
    slug: "milestone-anniversary-dinner",
    title: "Milestone Anniversary Dinner",
    category: "Anniversary",
    location: "Mumbai",
    year: "2025",
    description: "An unforgettable outdoor anniversary dinner beneath a sweeping canopy of thousands of warm fairy lights.",
    images: [
      "/images/events/anniversary.jpg"
    ],
    overview: "A silver-jubilee anniversary evening hosted on a private lawn, designed to feel intimate, luminous, and timeless.",
    challenge: "Transforming an open lawn at night into a cohesive, warmly lit dining room without heavy tenting.",
    approach: "We rigged a sweeping gabled canopy of warm-white fairy lights above gold-sequin round tables, Chiavari chairs, and lush white-and-ivory floral centerpieces.",
    result: "A breathtaking starlit dining experience where guests celebrated late into the evening under a glowing golden sky.",
    materials: ["Fairy Light Canopy", "Gold Sequin Linens", "Gold Chiavari Chairs", "Ivory Floral Centerpieces"]
  },
  {
    id: "13",
    slug: "artisan-flea-market",
    title: "Artisan Flea Market & Pop-Up",
    category: "Flea Market",
    location: "Ahmedabad",
    year: "2025",
    description: "A lively weekend flea market styled with curated vendor booths, festival bunting, and interactive community zones.",
    images: [
      "/images/events/flea-market.webp"
    ],
    overview: "A multi-vendor lifestyle and art flea market bringing together independent creators, live music, and curated street food.",
    challenge: "Giving dozens of individual stalls a cohesive, photogenic festival identity while keeping walkways breezy and accessible.",
    approach: "We styled unified canopy booths with crisp signage, wooden display risers, overhead bunting, and dedicated photo corners that encouraged foot traffic across every aisle.",
    result: "A buzzing, high-footfall weekend market with strong vendor visibility and vibrant social sharing throughout the event.",
    materials: ["Custom Booth Canopies", "Festival Bunting", "Wooden Display Crates", "Warm String Lights"]
  },
  {
    id: "14",
    slug: "navratri-garba-pandal",
    title: "Navratri & Garba Pandal",
    category: "Navratri",
    location: "Vadodara",
    year: "2025",
    description: "A devotional and high-energy Navratri setup pairing crimson-yellow pandal drapes with marigold garlands and brass diyas.",
    images: [
      "/images/events/navratri.jpg",
      "/images/events/navratri-garba.webp"
    ],
    overview: "A nine-night Navratri & Garba celebration featuring an auspicious Mataji altar alongside a vibrant open-air dandiya ground.",
    challenge: "Balancing sacred temple-inspired altar styling with durable, head-clearance lighting for hundreds of energetic Garba dancers.",
    approach: "We framed the central Maa Durga altar with layered saffron and crimson drapes, marigold clusters, warm fairy light curtains, and brass standing lamps.",
    result: "A deeply devotional yet electrifying festive venue that elevated every evening's Aarti and Garba night.",
    materials: ["Crimson & Yellow Drapes", "Marigold Clusters", "Brass Standing Diyas", "Fairy Light Curtains"]
  }
];

export const getProjectBySlug = (slug: string) => projects.find((p) => p.slug === slug);

type ProjectGuTranslation = Omit<Project, "id" | "slug" | "category" | "year" | "images">;

const projectsGu: Record<string, ProjectGuTranslation> = {
  "1": {
    title: "શાહી ભારતીય લગ્ન",
    location: "ઉદયપુર",
    description: "ભવ્ય ફ્લોરલ આર્ચ, પિત્તળના લેન્ટર્ન અને કાલાતીત વિધિગત સ્ટાઇલિંગ સાથેનો શાહી ભારતીય લગ્ન મંડપ.",
    overview: "આ ભવ્ય ડેસ્ટિનેશન ભારતીય લગ્નમાં હેરિટેજ મહેલની સ્થાપત્યકલા સાથે રોમેન્ટિક ફ્લોરલ વૈભવનો સુંદર સમન્વય કરવામાં આવ્યો હતો.",
    challenge: "ત્રણ દિવસની ઉજવણી દરમિયાન બહારની ગરમીમાં પણ વિશાળ ફ્લોરલ સ્થાપનોને તાજા અને ભવ્ય રાખવા મુખ્ય પડકાર હતો.",
    approach: "અમે ગુલાબ, હરિયાળી અને મિરર આઇલ સાથે ઓપન ફ્લોરલ મંડપ તૈયાર કર્યો અને સાંજના પ્રસંગ માટે ક્રિસ્ટલ ઝૂમર અને ફ્લોરલ આર્ચ ઉમેર્યા.",
    result: "એક અત્યંત શાહી અને રોમેન્ટિક સેટઅપ જેણે નવદંપતીના ફેરા માટે અવિસ્મરણીય પૃષ્ઠભૂમિ પૂરી પાડી.",
    materials: ["તાજા ગુલાબ અને હાઇડ્રેન્જિયા", "પિત્તળના લેન્ટર્ન", "ક્રિસ્ટલ ઝૂમર", "મિરર ફ્લોરલ આઇલ"],
  },
  "6": {
    title: "પરંપરાગત હલ્દી",
    location: "પુણે",
    description: "તડકાની ચમક, પિત્તળની ઉર્લી અને ગલગોટાના ફૂલોની ભવ્યતા ઉજવતું જીવંત હલ્દી સેટઅપ.",
    overview: "પીળા અને કેસરી ગલગોટા તથા મોગરાના તાજા ફૂલો સાથે પરંપરાગત ભારતીય સૌંદર્યશાસ્ત્રને ઉજાગર કરતી હલ્દી વિધિ.",
    challenge: "પરંપરાગત ગલગોટા ડિઝાઇનને સામાન્ય દેખાવથી અલગ, સમપ્રમાણ અને રાજસી સ્વરૂપ આપવું.",
    approach: "અમે પીળા ડ્રેપ્સ અને લટકતી ગલગોટાની લડીઓ વચ્ચે ગોળાકાર ફ્લોરલ રિંગમાં કોતરણીવાળી બેઠક અને ફૂલોથી ભરેલી પિત્તળની ઉર્લી ગોઠવી.",
    result: "સાંસ્કૃતિક પરંપરાને માન આપતું અત્યંત આનંદમય અને ફોટોજેનિક વાતાવરણ.",
    materials: ["તાજા ગલગોટા અને મોગરો", "પિત્તળની ઉર્લી", "કોતરણીવાળી ચોકી", "પ્રિન્ટેડ પીળા ડ્રેપ્સ"],
  },
  "3": {
    title: "સંગીત નાઇટ",
    location: "ગોવા",
    description: "અવિસ્મરણીય સંગીત ઉજવણી માટે ગ્લેમરસ અને હાઈ-એનર્જી સ્ટેજ તથા ડાન્સ ફ્લોર સેટઅપ.",
    overview: "શાહી ડ્રેપ્ડ કેનોપી અને ઝગમગતા પરફોર્મન્સ સ્ટેજ સાથે સંગીત અને નૃત્યની યાદગાર સાંજ.",
    challenge: "આરામદાયક લાઉન્જ વાતાવરણની સાથે વિશાળ ડાન્સ ફ્લોર અને પરફોર્મન્સ સ્ટેજનું સંતુલન જાળવવું.",
    approach: "અમે છત પર જ્વેલ-ટોન ડ્રેપ્સ, ક્રિસ્ટલ ઝૂમર, કોન્સર્ટ લાઇટિંગ અને ગ્લોસી રિફ્લેક્ટિવ ડાન્સ ફ્લોર સ્થાપિત કર્યો.",
    result: "પરિવારના નૃત્યથી લઈને મોડી રાતની પાર્ટી સુધી સરળતાથી બદલાતું અત્યંત જીવંત વાતાવરણ.",
    materials: ["ક્રિસ્ટલ ઝૂમર", "ડ્રેપ્ડ કેનોપી સીલિંગ", "રિફ્લેક્ટિવ ડાન્સ ફ્લોર", "ડાયનેમિક સ્ટેજ લાઇટિંગ"],
  },
  "7": {
    title: "રંગબેરંગી મહેંદી સમારોહ",
    location: "જયપુર",
    description: "ફૂલોની માળા, ભરતકામવાળા કુશન, પિત્તળના વાસણો અને લટકતા બર્ડકેજ સાથેની સુંદર મહેંદી લાઉન્જ.",
    overview: "મહેમાનો આરામથી મહેંદી મૂકાવી શકે તે માટે તૈયાર કરાયેલ હૂંફાળું અને આકર્ષક ડે-ટાઇમ લાઉન્જ.",
    challenge: "બપોરના તેજસ્વી પ્રકાશમાં સુંદર દેખાય તેવા તેજસ્વી ઉત્સવના રંગોને હળવા પેલેટ સાથે સંતુલિત કરવા.",
    approach: "આઇવરી ડ્રેપ્ડ દિવાન સાથે રાજસ્થાની કુશન, ફ્લોર પૂફ્સ, સોનેરી બર્ડકેજ અને ગુલાબ-ગલગોટાની સજાવટ ગોઠવવામાં આવી.",
    result: "આખા બપોર દરમિયાન મહેમાનો માટે સૌથી આરામદાયક અને મનપસંદ ફોટો સ્પોટ.",
    materials: ["ગલગોટા અને ગુલાબની માળા", "ભરતકામવાળા કુશન", "પિત્તળના વાસણો અને લેન્ટર્ન", "વણેલા કેન એક્સેન્ટ્સ"],
  },
  "8": {
    title: "લક્ઝરી બર્થડે પાર્ટી",
    location: "મુંબઈ",
    description: "ઓર્ગેનિક પેસ્ટલ બલૂન આર્ચ અને ફ્લોરલ ડેઝર્ટ ટેબલ સાથેની એડિટોરિયલ ગાર્ડન બર્થડે ઉજવણી.",
    overview: "બગીચાના ખુલ્લા વાતાવરણમાં પેસ્ટલ ટોન અને બોટનિકલ ટેબલ સ્ટાઇલિંગ સાથેનો માઇલસ્ટોન જન્મદિવસ.",
    challenge: "ક્લાસિક બલૂન ડેકોરને પ્રૌઢ અને એડિટોરિયલ લક્ઝરી લુક આપવો.",
    approach: "બ્લશ, લવેન્ડર અને મિન્ટ રંગના ઓર્ગેનિક બલૂન આર્ચ વચ્ચે વિન્ટેજ ડેઝર્ટ કોન્સોલ, ફૂલો અને મીણબત્તીઓ સજાવાઈ.",
    result: "સુંદર અને ભવ્ય બર્થડે સેન્ટરપીસ જેણે સમગ્ર ઉજવણીને આકર્ષક બનાવી.",
    materials: ["ઓર્ગેનિક મેટ બલૂન્સ", "તાજા પેસ્ટલ ફૂલો", "વિન્ટેજ ડેઝર્ટ કોન્સોલ", "ટેપર કેન્ડલ્સ"],
  },
  "9": {
    title: "કંકોત્રી લેખન સમારોહ",
    location: "અમદાવાદ",
    description: "કમળના ચિત્રો, ગલગોટાની માળા અને પિત્તળના દીવા સાથે શ્રી ગણેશની આરાધના કરતું શુભ કંકોત્રી લેખન સેટઅપ.",
    overview: "પરિવારના નિવાસસ્થાને પ્રથમ લગ્ન આમંત્રણ પત્રિકા લખવાના પાવન પ્રસંગ માટે સાંસ્કૃતિક રીતે સમૃદ્ધ સેટઅપ.",
    challenge: "ઘરના આંતરિક સ્થળમાં પૂજા થાળી, કળશ અને પરિવારની બેઠક માટે પૂરતી જગ્યા સાથે ભક્તિમય ફોકલ બેકડ્રોપ બનાવવો.",
    approach: "હાથથી દોરેલા કમળ અને ગણેશજીના બેકડ્રોપ સાથે ગલગોટાની લડીઓ, પિત્તળના દીવા, કળશ અને ફ્લોર રંગોળી સજાવવામાં આવી.",
    result: "ગુજરાતી લગ્ન પરંપરાનું ગૌરવ વધારતું પવિત્ર, હૂંફાળું અને ફોટોજેનિક વાતાવરણ.",
    materials: ["ગલગોટાની માળા", "કમળ થીમ બેકડ્રોપ", "પિત્તળના દીવા અને કળશ", "ફ્લોરલ રંગોળી અને પૂજા થાળી"],
  },
  "2": {
    title: "એલિગન્ટ સગાઈ (એન્ગેજમેન્ટ)",
    location: "મુંબઈ",
    description: "લટકતા વિસ્ટેરિયા ફૂલો અને ગરમાગરમ ફેરી લાઇટ કર્ટેન્સ સાથેની રોમેન્ટિક સાંજ.",
    overview: "લક્ઝરી હોટેલ બેન્ક્વેટમાં આધુનિક રોમાન્સ અને નાજુક ફ્લોરલ ડ્રેપિંગ પર કેન્દ્રિત સગાઈ સમારોહ.",
    challenge: "બેન્ક્વેટની ઘેરી દીવાલને રિંગ એક્સચેન્જ માટે તેજસ્વી અને સ્વપ્નિલ સ્ટેજમાં બદલવી.",
    approach: "ફેરી લાઇટ્સ પર આઇવરી શીયર કર્ટેન્સ અને ઉપર હરિયાળી સાથે ગુલાબી-સફેદ વિસ્ટેરિયા ફૂલો લટકાવવામાં આવ્યા.",
    result: "એક સ્વપ્નિલ અને પ્રકાશમય સ્ટેજ જે દરેક ફોટોગ્રાફમાં અત્યંત સુંદર દેખાયું.",
    materials: ["લટકતા વિસ્ટેરિયા ફૂલો", "વોર્મ ફેરી લાઇટ્સ", "શીયર આઇવરી ડ્રેપ્સ", "ફ્લોરલ સેન્ટરપીસ"],
  },
  "4": {
    title: "ફ્લોરલ બેબી શાવર (સીમંત)",
    location: "દિલ્હી",
    description: "ઓર્ગેનિક બલૂન્સ, ગુલાબ અને કસ્ટમ વેલકમ સાઇનેજ સાથેનું બ્લશ પેસ્ટલ સેટઅપ.",
    overview: "સોફ્ટ બ્લશ ટોન, કેલિગ્રાફી અને રોમેન્ટિક ફૂલોના ગુચ્છા સાથે સજાવાયેલ ડે-ટાઇમ બેબી શાવર.",
    challenge: "નાના ઇન્ડોર સ્થળમાં પેસ્ટલ બલૂન અને ફ્લોરલ થીમને ભવ્ય અને વ્યવસ્થિત રાખવી.",
    approach: "આઇવરી ઇઝલ પર કસ્ટમ વોટરકલર વેલકમ બોર્ડ સાથે મેટ બ્લશ બલૂન્સ અને ગાર્ડન રોઝ ગોઠવાયા.",
    result: "મહેમાનોનું ઉષ્માભર્યું સ્વાગત કરતો અને માતા-પિતા માટે યાદગાર ફોટો કોર્નર.",
    materials: ["બ્લશ મેટ બલૂન્સ", "ગાર્ડન રોઝ", "કસ્ટમ વેલકમ ઇઝલ", "યુકેલિપ્ટસ પાંદડા"],
  },
  "5": {
    title: "લક્ઝરી રિસેપ્શન",
    location: "બેંગલુરુ",
    description: "આર્કિટેક્ચરલ લાઇટિંગ, ઝૂમર અને ભવ્ય ટેબલસ્કેપ્સ સાથેનું હાઈ-ગ્લેમર રિસેપ્શન.",
    overview: "ભવ્ય સીલિંગ લાઇટિંગ અને ઉત્કૃષ્ટ બેન્ક્વેટ સ્ટાઇલિંગ સાથેનું યાદગાર લગ્ન રિસેપ્શન.",
    challenge: "વિશાળ બોલરૂમમાં દરેક ટેબલ પરથી સમાન રીતે ભવ્ય અને આત્મીય દેખાય તેવું સેટઅપ કરવું.",
    approach: "ગોળાકાર સ્કલ્પચરલ ઝૂમર, વાયોલેટ-એમ્બર અપલાઇટિંગ, નેવી લિનેન અને ક્રિસ્ટલ ગ્લાસવેરનો ઉપયોગ કરવામાં આવ્યો.",
    result: "ડિનરથી લઈને પર્ફોર્મન્સ સુધી લક્ઝરીનો અનુભવ કરાવતું અદ્ભુત વાતાવરણ.",
    materials: ["સ્કલ્પચરલ ઝૂમર", "ડાયનેમિક અપલાઇટિંગ", "ક્રિસ્ટલ ગ્લાસવેર", "જ્વેલ-ટોન ફ્લોરલ્સ"],
  },
  "10": {
    title: "બોટનિકલ કોર્પોરેટ ગાલા",
    location: "મુંબઈ",
    description: "સીલિંગમાં લટકતી બોટનિકલ કેનોપી અને ગરમ એમ્બિયન્ટ ડાઇનિંગ સાથેનો પ્રતિષ્ઠિત કોર્પોરેટ એવોર્ડ ગાલા.",
    overview: "કન્વેન્શન બોલરૂમને કુદરતી બોટનિકલ સાંજમાં રૂપાંતરિત કરતો વાર્ષિક એક્ઝિક્યુટિવ એવોર્ડ ડિનર.",
    challenge: "મુખ્ય પ્રેઝન્ટેશન સ્ટેજની દૃશ્યતા જાળવી રાખીને વિશાળ કોર્પોરેટ હોલને કુદરતી હૂંફ આપવી.",
    approach: "અમે છત પર એડિસન બલ્બ્સ સાથે લટકતી હરિયાળી કેનોપી અને વૂડન ચેર તથા ગોલ્ડ ટ્રિમ ટેબલ રનર ગોઠવ્યા.",
    result: "બ્રાન્ડ હોસ્પિટાલિટી અને મહેમાનોના અનુભવને ઊંચાઈ આપતું યાદગાર કોર્પોરેટ વાતાવરણ.",
    materials: ["સસ્પેન્ડેડ ગ્રીનરી કેનોપી", "એડિસન બલ્બ ગ્રિડ", "ક્રોસ-બેક વૂડન ચેર", "કસ્ટમ સ્ટેજ AV"],
  },
  "11": {
    title: "ગાર્ડન પ્રાઇવેટ સોઇરી",
    location: "પુણે",
    description: "ફૂલોની લડીઓવાળા શીયર કર્ટેન્સ અને વાઇલ્ડફ્લાવર જાર્સથી સજાવેલી ખુલ્લી બગીચાની ઉજવણી.",
    overview: "ખુલ્લા સૂર્યપ્રકાશમાં કુદરતી ફૂલોના સૌંદર્યને ઉજવતી ખાનગી એનિવર્સરી અને ગાર્ડન પાર્ટી.",
    challenge: "કુદરતી પ્રકાશને અવરોધ્યા વિના બગીચાના વૃક્ષો સાથે ભળી જાય તેવું સ્કલ્પચરલ બેકડ્રોપ બનાવવો.",
    approach: "લાંબી ફૂલોની લડીઓથી સજાવેલા શીયર લિનેન પેનલ સાથે ટિમ્બર આર્ચ અને કાચના ફ્લાવર જાર્સ મૂકવામાં આવ્યા.",
    result: "યજમાનો અને નજીકના મહેમાનો માટે શાંત, રોમેન્ટિક અને બેસ્પોક ઉજવણી.",
    materials: ["ટિમ્બર આર્ચ ફ્રેમ", "વર્ટિકલ વાઇલ્ડફ્લાવર માળા", "શીયર લિનેન ડ્રેપ્સ", "ગ્લાસ ફ્લાવર જાર્સ"],
  },
  "12": {
    title: "માઇલસ્ટોન એનિવર્સરી ડિનર",
    location: "મુંબઈ",
    description: "હજારો ગરમ ફેરી લાઇટ્સની ભવ્ય કેનોપી નીચે આયોજિત અવિસ્મરણીય એનિવર્સરી ડિનર.",
    overview: "ખાનગી લોન પર આયોજિત સિલ્વર-જ્યુબિલી એનિવર્સરીની આત્મીય અને પ્રકાશમય સાંજ.",
    challenge: "ભારે મંડપ વિના રાત્રિના સમયે ખુલ્લા લોનને હૂંફાળા ડાઇનિંગ હોલમાં બદલવો.",
    approach: "ગોલ્ડ-સિક્વિન ટેબલ્સ, શિયાવરી ચેર અને સફેદ ફ્લોરલ સેન્ટરપીસ ઉપર ફેરી લાઇટ્સની વિશાળ કેનોપી લગાવવામાં આવી.",
    result: "તારાઓથી ઝગમગતા આકાશ જેવું અદ્ભુત અને રોમેન્ટિક ડિનર વાતાવરણ.",
    materials: ["ફેરી લાઇટ કેનોપી", "ગોલ્ડ સિક્વિન લિનેન", "ગોલ્ડ શિયાવરી ચેર", "આઇવરી ફ્લોરલ સેન્ટરપીસ"],
  },
  "13": {
    title: "આર્ટિઝન ફ્લી માર્કેટ અને પોપ-અપ",
    location: "અમદાવાદ",
    description: "ક્યુરેટેડ વેન્ડર બૂથ, ફેસ્ટિવલ બંટિંગ અને ઇન્ટરેક્ટિવ કોમ્યુનિટી ઝોન સાથેનું જીવંત વીકએન્ડ ફ્લી માર્કેટ.",
    overview: "સ્વતંત્ર કલાકારો, લાઇવ મ્યુઝિક અને ફૂડ સ્ટોલ્સને એકસાથે લાવતું લાઇફસ્ટાઇલ અને આર્ટ ફ્લી માર્કેટ.",
    challenge: "દરેક ગલી ખુલ્લી અને સરળ રાખીને અનેક સ્ટોલ્સને એકસૂત્ર ફેસ્ટિવલ ઓળખ આપવી.",
    approach: "સ્વચ્છ સાઇનેજ, લાકડાના ડિસ્પ્લે રાઇઝર્સ, બંટિંગ અને ખાસ ફોટો ઝોન સાથે યુનિફાઇડ કેનોપી બૂથ તૈયાર કર્યા.",
    result: "વધુ મુલાકાતીઓ અને સોશિયલ શેરિંગ સાથેનું અત્યંત સફળ વીકએન્ડ માર્કેટ.",
    materials: ["કસ્ટમ બૂથ કેનોપી", "ફેસ્ટિવલ બંટિંગ", "વૂડન ડિસ્પ્લે ક્રેટ્સ", "વોર્મ સ્ટ્રિંગ લાઇટ્સ"],
  },
  "14": {
    title: "નવરાત્રી અને ગરબા પંડાલ",
    location: "વડોદરા",
    description: "લાલ-પીળા પંડાલ ડ્રેપ્સ, ગલગોટાની માળા અને પિત્તળના દીવા સાથે ભક્તિમય અને ઊર્જાવાન નવરાત્રી સેટઅપ.",
    overview: "નવ દિવસની નવરાત્રી અને ગરબા મહોત્સવ માટે માતાજીના શુભ સ્થાપન અને ખુલ્લા દાંડિયા ગ્રાઉન્ડનું સેટઅપ.",
    challenge: "ગરબા રમતા ખેલૈયાઓ માટે પૂરતી ઊંચાઈની લાઇટિંગ સાથે પવિત્ર મંદિર જેવો શણગાર જાળવવો.",
    approach: "કેસરી અને લાલ ડ્રેપ્સ, ગલગોટાના ઝૂમખાં, ફેરી લાઇટ કર્ટેન્સ અને પિત્તળના દીવા વડે માતાજીનો પંડાલ સજાવ્યો.",
    result: "દરેક સાંજની આરતી અને ગરબા નાઇટને યાદગાર બનાવતું ભક્તિમય અને ઉત્સાહપૂર્ણ સ્થળ.",
    materials: ["લાલ અને પીળા ડ્રેપ્સ", "ગલગોટાના ઝૂમખાં", "પિત્તળના સ્ટેન્ડિંગ દીવા", "ફેરી લાઇટ કર્ટેન્સ"],
  },
};

export function getLocalizedProject(project: Project, lang: Language): Project {
  if (lang !== "gu") return project;
  const gu = projectsGu[project.id];
  if (!gu) return project;
  return {
    ...project,
    ...gu,
  };
}
