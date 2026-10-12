import { Category, Destination, TourPackage, Testimonial, AgencyStats } from '@/types';

export const FALLBACK_CATEGORIES: Category[] = [
  {
    id: 1,
    name: "High Altitude Trekking",
    slug: "trekking",
    icon: "Mountain",
    description: "Epic multi-day expeditions through world-renowned mountain ranges."
  },
  {
    id: 2,
    name: "Mountaineering Expeditions",
    slug: "mountaineering",
    icon: "Compass",
    description: "Technical summit bids guided by certified UIAGM/IFMGA lead alpinists."
  },
  {
    id: 3,
    name: "Alpine & Glacier Hikes",
    slug: "alpine-hikes",
    icon: "Footprints",
    description: "Scenic passes, turquoise glacial lakes, and alpine valley traverses."
  },
  {
    id: 4,
    name: "Wilderness Camping & Safari",
    slug: "wilderness",
    icon: "Tent",
    description: "Remote backcountry immersion with full expedition cook and logistics crews."
  },
  {
    id: 5,
    name: "White Water & Adventure Trails",
    slug: "adventure-trails",
    icon: "Waves",
    description: "Adrenaline-fueled river gorges, hanging bridges, and deep canyon trails."
  }
];

export const FALLBACK_DESTINATIONS: Destination[] = [
  {
    id: 1,
    name: "Everest Khumbu Region",
    country: "Nepal",
    slug: "everest-khumbu",
    image_url: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
    description: "The cradle of world mountaineering, surrounded by 8,000-meter giants and Sherpa monasteries.",
    best_season: "Mar - May, Sep - Nov",
    altitude: "2,800m - 5,550m",
    treks_count: 6
  },
  {
    id: 2,
    name: "Annapurna Sanctuary",
    country: "Nepal",
    slug: "annapurna-sanctuary",
    image_url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    description: "An amphitheater of snow-capped peaks, rhododendron forests, and natural hot springs.",
    best_season: "Oct - Dec, Mar - May",
    altitude: "1,050m - 4,130m",
    treks_count: 4
  },
  {
    id: 3,
    name: "Torres del Paine",
    country: "Patagonia, Chile",
    slug: "torres-del-paine",
    image_url: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1200&q=80",
    description: "Granite spires rising dramatically above sapphire icebergs, windswept pampas, and glaciers.",
    best_season: "Nov - Mar (Austral Summer)",
    altitude: "Sea Level - 1,200m",
    treks_count: 5
  },
  {
    id: 4,
    name: "Bernese Oberland & Zermatt",
    country: "Switzerland",
    slug: "swiss-alps",
    image_url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    description: "Classic European alpine mountaineering beneath the Eiger, Jungfrau, and the iconic Matterhorn.",
    best_season: "Jun - Sep",
    altitude: "1,600m - 4,107m",
    treks_count: 4
  },
  {
    id: 5,
    name: "Ladakh & Zanskar Range",
    country: "India",
    slug: "ladakh-himalayas",
    image_url: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
    description: "The Moonland of high mountain passes, ancient Tibetan Buddhist gompas, and stark desert beauty.",
    best_season: "Jun - Sep",
    altitude: "3,500m - 5,200m",
    treks_count: 4
  },
  {
    id: 6,
    name: "Mount Kilimanjaro",
    country: "Tanzania",
    slug: "mount-kilimanjaro",
    image_url: "https://images.unsplash.com/photo-1650668301026-6d6016e10757?auto=format&fit=crop&w=1200&q=80",
    description: "The Roof of Africa standing solitary above savannah plains, traversing 5 distinct ecological climate zones.",
    best_season: "Jan - Mar, Jun - Oct",
    altitude: "1,800m - 5,895m",
    treks_count: 3
  }
];

export const FALLBACK_PACKAGES: TourPackage[] = [
  {
    id: 1,
    title: "Everest Base Camp & Kala Patthar Trek",
    slug: "everest-base-camp-kala-patthar",
    tagline: "Stand at the foot of the world's highest summit and watch golden sunrise over Mt. Everest.",
    destination_name: "Everest Khumbu Region",
    destination_slug: "everest-khumbu",
    destination: FALLBACK_DESTINATIONS[0],
    category_name: "High Altitude Trekking",
    category_slug: "trekking",
    category: FALLBACK_CATEGORIES[0],
    duration_days: 14,
    difficulty: "Challenging",
    max_altitude: "5,550 m (Kala Patthar)",
    group_size: "4 - 12 Explorers",
    price: 1650.00,
    discount_price: 1485.00,
    rating: 4.9,
    reviews_count: 184,
    is_featured: true,
    hero_image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "The classic journey through the legendary Khumbu Valley leads you through ancient Sherpa villages, sacred cliffside monasteries, and suspension bridges fluttering with prayer flags. Ascend to Kala Patthar for the most spectacular panoramic view of Everest, Lhotse, and Nuptse before walking upon the Khumbu Glacier directly into Everest Base Camp.",
    highlights: [
      "Thrilling mountain flight into Lukla's cliffside airstrip",
      "Acclimatization days in vibrant Namche Bazaar with Everest views",
      "Blessing ceremony at the historic Tengboche Buddhist Monastery",
      "Unobstructed 360-degree sunrise view from Kala Patthar (5,550m)",
      "Certified wilderness medical guides with pulse oximeter monitoring",
      "High-altitude satellite communications and helicopter rescue insurance support"
    ],
    itinerary: [
      { day: 1, title: "Fly from Kathmandu to Lukla & Trek to Phakding", description: "Scenic 35-minute mountain flight into Lukla (2,860m). Meet our expedition Sherpa porters and begin an easy 3-hour warm-up descent along the Dudh Koshi River.", accommodation: "Mountain Tea House", meals: "Lunch, Dinner" },
      { day: 2, title: "Phakding to Namche Bazaar (3,440m)", description: "Cross iconic suspension bridges draped in colorful prayer flags and climb the Hillary Bridge before reaching the bustling Sherpa capital of Namche Bazaar.", accommodation: "Namche Guest Lodge", meals: "Breakfast, Lunch, Dinner" },
      { day: 3, title: "Acclimatization Day at Namche Bazaar", description: "Hike up to the Everest View Hotel for your first breathtaking glimpse of Ama Dablam and Everest. Explore the local Sherpa culture museum.", accommodation: "Namche Guest Lodge", meals: "Breakfast, Lunch, Dinner" },
      { day: 4, title: "Namche to Tengboche Monastery (3,860m)", description: "Trek through rhododendron woods with jaw-dropping views of Thamserku and Ama Dablam. Visit the sacred Tengboche monastery for evening chanting.", accommodation: "Mountain Tea House", meals: "Breakfast, Lunch, Dinner" },
      { day: 5, title: "Tengboche to Dingboche (4,410m)", description: "Cross the Imja River and enter alpine terrain above the tree line. Stone-walled fields protect crops from fierce mountain winds in Dingboche.", accommodation: "Alpine Lodge", meals: "Breakfast, Lunch, Dinner" },
      { day: 6, title: "Dingboche Acclimatization & Nangkartshang Peak", description: "Ascend Nangkartshang Peak (5,083m) for views of Makalu, Island Peak, and Cho Oyu. Rest and rehydrate in the afternoon.", accommodation: "Alpine Lodge", meals: "Breakfast, Lunch, Dinner" },
      { day: 7, title: "Dingboche to Lobuche (4,940m)", description: "Pass through the poignant Thokla Memorial dedicated to fallen climbers before following the lateral moraine of the Khumbu Glacier.", accommodation: "Lobuche Tea House", meals: "Breakfast, Lunch, Dinner" },
      { day: 8, title: "Gorak Shep & Hike to Everest Base Camp (5,364m)", description: "Reach Gorak Shep, fuel up with hot garlic soup, and hike across the Khumbu Glacier to Everest Base Camp. Stand beneath the legendary Khumbu Icefall!", accommodation: "Gorak Shep Tea House", meals: "Breakfast, Lunch, Dinner" },
      { day: 9, title: "Sunrise at Kala Patthar (5,550m) & Descent to Pheriche", description: "Pre-dawn headlamp climb up Kala Patthar for the golden morning glow on Mount Everest. Descend down to Pheriche (4,240m).", accommodation: "Pheriche Lodge", meals: "Breakfast, Lunch, Dinner" },
      { day: 10, title: "Pheriche to Namche Bazaar", description: "Retrace steps downhill through Tengboche forest trails, enjoying richer oxygen and celebrating in Namche's bakeries.", accommodation: "Namche Guest Lodge", meals: "Breakfast, Lunch, Dinner" },
      { day: 11, title: "Namche Bazaar to Lukla", description: "Final leg along the Dudh Koshi River to Lukla. Evening celebratory dinner with our guide and porter crew.", accommodation: "Lukla Hotel", meals: "Breakfast, Lunch, Dinner" },
      { day: 12, title: "Fly Lukla to Kathmandu & Hotel Transfer", description: "Early morning flight back to Kathmandu. Rest, hot showers, and celebratory group dinner in Thamel.", accommodation: "Kathmandu Deluxe Hotel", meals: "Breakfast, Dinner" }
    ],
    included: [
      "Roundtrip domestic flights Kathmandu - Lukla - Kathmandu",
      "Sagarmatha National Park entry permits & TIMS card",
      "Licensed English-speaking certified mountain guide & porters (1:2 ratio)",
      "All accommodation in tea houses/lodges throughout trek",
      "All 3 meals per day on trek (Breakfast, Lunch, Dinner with hot tea)",
      "Pulse oximeter daily altitude checks & medical first-aid kit",
      "Duffel bag and warm -20°C sleeping bag for use on trek"
    ],
    excluded: [
      "International airfare and Nepal entry visa fee ($50)",
      "Personal travel and high-altitude emergency medical insurance (mandatory)",
      "Hot showers, Wi-Fi, battery charging in tea houses",
      "Tips for mountain guide, assistants, and porter crew"
    ],
    upcoming_dates: ["Nov 04, 2026", "Nov 20, 2026", "Dec 12, 2026", "Mar 15, 2027", "Apr 08, 2027"]
  },
  {
    id: 2,
    title: "Annapurna Circuit & Thorong La Pass",
    slug: "annapurna-circuit-thorong-la-pass",
    tagline: "Traverse the deepest gorges in the world to the world's highest trekking pass at 5,416m.",
    destination_name: "Annapurna Sanctuary",
    destination_slug: "annapurna-sanctuary",
    destination: FALLBACK_DESTINATIONS[1],
    category_name: "High Altitude Trekking",
    category_slug: "trekking",
    category: FALLBACK_CATEGORIES[0],
    duration_days: 12,
    difficulty: "Challenging",
    max_altitude: "5,416 m (Thorong La)",
    group_size: "4 - 10 Explorers",
    price: 1350.00,
    discount_price: 1199.00,
    rating: 4.8,
    reviews_count: 142,
    is_featured: true,
    hero_image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "The Annapurna Circuit is widely celebrated as one of earth's ultimate wilderness treks. You transition from subtropical banana groves and cascading waterfalls to barren Tibetan plateaus, culminating with the dawn conquest of Thorong La Pass (5,416m) and holy Muktinath temple.",
    highlights: [
      "Crossing the iconic Thorong La Pass at 5,416m",
      "Dramatic scenery transition from lush jungle to arid Tibetan plateau",
      "Ancient Buddhist monasteries of Manang and sacred Muktinath temples",
      "Views of Annapurna I, Dhaulagiri, and Machapuchare (Fishtail)",
      "Relaxing in Tatopani natural geothermal hot springs"
    ],
    itinerary: [
      { day: 1, title: "Kathmandu to Besisahar & Chame (2,670m)", description: "Scenic overland drive along the Trishuli and Marsyangdi rivers to the trek trailhead at Chame.", accommodation: "River Lodge", meals: "Lunch, Dinner" },
      { day: 2, title: "Chame to Pisang (3,200m)", description: "Walk through pine pine forests under towering cliff faces, viewing the sheer Paungda Danda curved rock wall.", accommodation: "Tea House", meals: "Breakfast, Lunch, Dinner" },
      { day: 3, title: "Pisang to Manang (3,540m)", description: "Upper trail through Ghyaru offering grand panoramas of Annapurna II, III, and IV.", accommodation: "Manang Lodge", meals: "Breakfast, Lunch, Dinner" },
      { day: 4, title: "Manang Acclimatization & Gangapurna Lake", description: "Hike to Gangapurna Glacier lake and the viewpoint clinic of the Himalayan Rescue Association.", accommodation: "Manang Lodge", meals: "Breakfast, Lunch, Dinner" },
      { day: 5, title: "Manang to Yak Kharka (4,050m)", description: "Climb steadily up through juniper shrubs and alpine pastures where blue sheep graze.", accommodation: "Alpine Tea House", meals: "Breakfast, Lunch, Dinner" },
      { day: 6, title: "Yak Kharka to Thorong Phedi (4,525m)", description: "Base of the high pass. Early bedtime to prepare for tomorrow's dawn summit push.", accommodation: "Phedi Lodge", meals: "Breakfast, Lunch, Dinner" },
      { day: 7, title: "Cross Thorong La Pass (5,416m) to Muktinath", description: "Start at 4:30 AM under a canopy of stars. Celebrate atop Thorong La Pass before descending into Mustang.", accommodation: "Muktinath Hotel", meals: "Breakfast, Lunch, Dinner" },
      { day: 8, title: "Muktinath to Jomsom & Fly to Pokhara", description: "Trek through windy Kali Gandaki gorge to Jomsom, followed by a scenic flight to lakeside Pokhara.", accommodation: "Pokhara Lakeside Resort", meals: "Breakfast, Lunch" }
    ],
    included: [
      "Annapurna Conservation Area Permit (ACAP) and TIMS card",
      "Expert English-speaking guide and porter team",
      "Overland transportation and Jomsom-Pokhara flight",
      "All tea house accommodation and daily meals on trek"
    ],
    excluded: [
      "International flights, Nepal visa",
      "Travel insurance with emergency evacuation coverage",
      "Beverages, charging and hot water fees"
    ],
    upcoming_dates: ["Nov 10, 2026", "Dec 01, 2026", "Apr 05, 2027", "May 02, 2027"]
  },
  {
    id: 3,
    title: "Patagonia W-Trek & Grey Glacier Ice Hike",
    slug: "patagonia-w-trek-grey-glacier",
    tagline: "Venture into the heart of Torres del Paine to touch ancient blue ice and towering granite towers.",
    destination_name: "Torres del Paine",
    destination_slug: "torres-del-paine",
    destination: FALLBACK_DESTINATIONS[2],
    category_name: "Alpine & Glacier Hikes",
    category_slug: "alpine-hikes",
    category: FALLBACK_CATEGORIES[2],
    duration_days: 8,
    difficulty: "Moderate",
    max_altitude: "1,200 m (Base Torres)",
    group_size: "6 - 12 Explorers",
    price: 2490.00,
    discount_price: 2250.00,
    rating: 5.0,
    reviews_count: 96,
    is_featured: true,
    hero_image: "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Patagonia is wild, vast, and breathtakingly raw. Hike along the world-famous W Route in Torres del Paine National Park, marvel at the jagged Cuernos del Paine, walk on the cracking blue ice of Grey Glacier with crampons, and stand before the monumental granite towers reflecting in green glacial water.",
    highlights: [
      "Sunrise at the legendary Base of the Towers (Las Torres)",
      "Crampon ice hike on Grey Glacier inside the Southern Ice Field",
      "French Valley amphitheater with hanging avalanches and granite needles",
      "Catamaran sail across the cobalt waters of Lake Pehoe",
      "Comfortable mountain refugios and gourmet Patagonian meals"
    ],
    itinerary: [
      { day: 1, title: "Puerto Natales to Torres del Paine & Central Refugio", description: "Meet in Puerto Natales, private transfer into the National Park across steppe landscapes dotted with guanacos.", accommodation: "Refugio Central", meals: "Dinner" },
      { day: 2, title: "The Towers Trek: Mirador Las Torres", description: "Trek through the Ascencio Valley, boulder scramble to the base of the three sheer granite spires reflecting in turquoise waters.", accommodation: "Refugio Central", meals: "Breakfast, Box Lunch, Dinner" },
      { day: 3, title: "Refugio Central to Frances along Lake Nordenskjöld", description: "Hike beneath the dramatic black and grey sedimentary bands of the Cuernos del Paine.", accommodation: "Refugio Los Cuernos", meals: "Breakfast, Box Lunch, Dinner" },
      { day: 4, title: "The French Valley Amphitheater", description: "Ascend into the heart of the massif, listening to the thunderous roar of the French Glacier cracking and shedding hanging ice.", accommodation: "Paine Grande Lodge", meals: "Breakfast, Box Lunch, Dinner" },
      { day: 5, title: "Grey Glacier & Ice Walk Adventure", description: "Hike to Grey Glacier. Strap on crampons and explore ice caves, crevasses, and deep blue seracs with specialist glacier guides.", accommodation: "Refugio Grey", meals: "Breakfast, Box Lunch, Dinner" },
      { day: 6, title: "Catamaran across Lake Pehoe & Return to Puerto Natales", description: "Cruise across Lake Pehoe enjoying last views of the Paine Horns. Return transfer to Puerto Natales for a Patagonian lamb barbecue.", accommodation: "Natales Boutique Hotel", meals: "Breakfast, Farewell Dinner" }
    ],
    included: [
      "All Torres del Paine National Park access fees & CONAF permits",
      "Refugio accommodation with full bedding & sheets (no sleeping bag needed)",
      "Full board meals: Breakfasts, nutritious trail box lunches, 3-course dinners",
      "Grey Glacier ice hike equipment (crampons, harness, ice axe)",
      "Catamaran crossing on Lake Pehoe and private roundtrip transfers"
    ],
    excluded: [
      "International and domestic flights to Puerto Natales or Punta Arenas",
      "Alcoholic drinks outside dinner service",
      "Travel insurance"
    ],
    upcoming_dates: ["Dec 02, 2026", "Dec 18, 2026", "Jan 10, 2027", "Feb 04, 2027", "Mar 01, 2027"]
  },
  {
    id: 4,
    title: "Swiss Alps Haute Route: Chamonix to Zermatt",
    slug: "swiss-alps-haute-route",
    tagline: "The queen of alpine traverses linking Mont Blanc to the Matterhorn through high alpine passes.",
    destination_name: "Bernese Oberland & Zermatt",
    destination_slug: "swiss-alps",
    destination: FALLBACK_DESTINATIONS[3],
    category_name: "Mountaineering Expeditions",
    category_slug: "mountaineering",
    category: FALLBACK_CATEGORIES[1],
    duration_days: 10,
    difficulty: "Strenuous",
    max_altitude: "3,295 m (Col de Prafleuri)",
    group_size: "4 - 8 Explorers",
    price: 2850.00,
    discount_price: 2690.00,
    rating: 4.9,
    reviews_count: 78,
    is_featured: true,
    hero_image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Winding through the highest peaks of the European Alps, the Walker's Haute Route traverses glaciated valleys, high passes, and traditional Swiss villages. Finish by stepping onto the Sunnegga ridge with the unforgettable triangular silhouette of the Matterhorn filling your gaze.",
    highlights: [
      "Traversing 11 mountain passes between France and Switzerland",
      "Staying in atmospheric Swiss Alpine Club (SAC) mountain huts",
      "Views of Mont Blanc, Grand Combin, Weisshorn, and the Matterhorn",
      "Tasting authentic Swiss fondue and Valais wines in mountain chalets",
      "Lead by IFMGA-certified alpine mountain guides"
    ],
    itinerary: [
      { day: 1, title: "Chamonix to Trient via Col de Balme (2,191m)", description: "Ascend out of the Chamonix Valley to the French-Swiss frontier with Mont Blanc behind you.", accommodation: "Swiss Auberge", meals: "Dinner" },
      { day: 2, title: "Trient to Champex-Lac via Fenêtre d'Arpette (2,665m)", description: "High rocky pass alongside the Trient glacier, descending to idyllic lakeside Champex.", accommodation: "Lakeside Chalet", meals: "Breakfast, Dinner" },
      { day: 3, title: "Champex to Cabane de Louvie (2,250m)", description: "Trek above the Val de Bagnes looking out over Grand Combin to an isolated lakeside mountain hut.", accommodation: "SAC Mountain Hut", meals: "Breakfast, Dinner" },
      { day: 4, title: "Cabane de Louvie to Cabane de Prafleuri (2,624m)", description: "Traverse the wild Désert de Platé and cross Col de Prafleuri among alpine ibex herds.", accommodation: "Prafleuri Hut", meals: "Breakfast, Dinner" },
      { day: 5, title: "Prafleuri to Arolla via Lac des Dix", description: "Hike past the turquoise waters of Lac des Dix, ascend the Pas de Chèvres with trail ladders, arriving in pine-scented Arolla.", accommodation: "Historic Alpine Hotel", meals: "Breakfast, Dinner" },
      { day: 6, title: "Arolla to La Sage & Col du Tsaté (2,868m)", description: "Traverse through typical Val d'Hérens flower meadows and descend toward the turquoise reservoir of Moiry.", accommodation: "Mountain Lodge", meals: "Breakfast, Dinner" },
      { day: 7, title: "Moiry to Zinal via Col de Sorebois (2,835m)", description: "High pass above the Moiry icefall with views into the Weisshorn and Dent Blanche massif.", accommodation: "Zinal Hotel", meals: "Breakfast, Dinner" },
      { day: 8, title: "Gruben to St. Niklaus & Europaweg to Zermatt", description: "Cross the Augstbordpass into the Matter valley. Arrive into Zermatt under the majestic Matterhorn.", accommodation: "Zermatt Boutique Hotel", meals: "Breakfast, Celebration Dinner" }
    ],
    included: [
      "IFMGA / UIAGM certified bilingual alpine trekking guide",
      "All nights accommodation in SAC huts and authentic alpine hotels",
      "Half-board meals (Hearty Swiss breakfasts and 3-course dinners)",
      "Luggage transfer service where road access is available"
    ],
    excluded: [
      "Travel to Chamonix and from Zermatt",
      "Midday lunches (purchased daily in mountain huts)",
      "Cable car or local bus tickets (approx. 40 CHF)"
    ],
    upcoming_dates: ["Jul 12, 2026", "Jul 26, 2026", "Aug 09, 2026", "Aug 23, 2026"]
  },
  {
    id: 5,
    title: "Mount Kilimanjaro: Lemosho Route 8-Day Trek",
    slug: "kilimanjaro-lemosho-route",
    tagline: "Ascend the Roof of Africa via its most scenic, high-acclimatization western flank.",
    destination_name: "Mount Kilimanjaro",
    destination_slug: "mount-kilimanjaro",
    destination: FALLBACK_DESTINATIONS[5],
    category_name: "High Altitude Trekking",
    category_slug: "trekking",
    category: FALLBACK_CATEGORIES[0],
    duration_days: 8,
    difficulty: "Strenuous",
    max_altitude: "5,895 m (Uhuru Peak)",
    group_size: "4 - 12 Explorers",
    price: 2390.00,
    discount_price: 2150.00,
    rating: 4.9,
    reviews_count: 115,
    is_featured: false,
    hero_image: "https://images.unsplash.com/photo-1650668301026-6d6016e10757?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1650668301026-6d6016e10757?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "The Lemosho Route is widely regarded as Kilimanjaro's most pristine approach. Starting on the lush western slopes, it gives you 8 full days for superior acclimatization, boasting an industry-leading 98% summit success rate to Uhuru Peak (5,895m).",
    highlights: [
      "98% summit success rate with the gradual 8-day profile",
      "Cross the vast lunar landscape of the Shira Plateau",
      "Scramble the thrilling Barranco Wall with your expert guides",
      "Sunrise over the African clouds from Uhuru Peak, 5,895m",
      "Private chemical toilet tents and 4-season mountain expedition tents"
    ],
    itinerary: [
      { day: 1, title: "Londorossi Gate to Mti Mkubwa (2,650m)", description: "Hike through pristine rainforest, spotting blue monkeys and colobus monkeys.", accommodation: "Mountain Expedition Tent", meals: "Lunch, Dinner" },
      { day: 2, title: "Mti Mkubwa to Shira 1 Camp (3,610m)", description: "Climb out of the forest canopy onto moorland heather and the volcanic Shira plateau.", accommodation: "Tent", meals: "Breakfast, Lunch, Dinner" },
      { day: 3, title: "Shira 1 to Shira 2 Camp (3,850m)", description: "Gentle acclimatization day traversing the plateau with open views of Kibo's glaciers.", accommodation: "Tent", meals: "Breakfast, Lunch, Dinner" },
      { day: 4, title: "Shira 2 to Lava Tower (4,600m) & Barranco (3,900m)", description: "Classic 'walk high, sleep low' acclimatization day climbing to Lava Tower before descending into Barranco.", accommodation: "Tent", meals: "Breakfast, Lunch, Dinner" },
      { day: 5, title: "Barranco Wall to Karanga Camp (3,995m)", description: "Tackle the famous Barranco Wall using hands and feet, then cross valleys to Karanga Camp.", accommodation: "Tent", meals: "Breakfast, Lunch, Dinner" },
      { day: 6, title: "Karanga Camp to Barafu Camp (4,673m)", description: "Ascend to Barafu High Camp. Rest, early dinner, and prepare gear for midnight summit push.", accommodation: "Tent", meals: "Breakfast, Lunch, Dinner" },
      { day: 7, title: "Summit Push: Uhuru Peak (5,895m) & Mweka Camp", description: "Step onto Stella Point at sunrise, then Uhuru Peak — the highest point in Africa! Descend to Mweka.", accommodation: "Tent", meals: "Breakfast, Lunch, Dinner" },
      { day: 8, title: "Mweka Gate & Hotel Celebration", description: "Final walk down through rainforest, receive summit certificates, and celebrate in Moshi.", accommodation: "Moshi Safari Lodge", meals: "Breakfast, Lunch, Celebration Dinner" }
    ],
    included: [
      "Kilimanjaro National Park entrance fees, camping fees & rescue fee",
      "Certified wilderness first responder guides, chef, and porter team",
      "3 nutritious hot meals prepared daily by our mountain chef",
      "Heavy duty 4-season mountain tents and thick foam sleeping mats",
      "Emergency oxygen cylinder and daily pulse oximeter vitals check"
    ],
    excluded: [
      "Tanzania visa ($50-$100)",
      "Personal trekking gear (boots, thermal layers)",
      "Crew tips (recommended KPAP ethical guidelines)"
    ],
    upcoming_dates: ["Nov 15, 2026", "Dec 20, 2026", "Jan 12, 2027", "Feb 18, 2027"]
  },
  {
    id: 6,
    title: "Markha Valley & Stok Kangri Base Trek",
    slug: "markha-valley-ladakh",
    tagline: "A high-desert journey through Tibetan Buddhist canyons, ancient chortens, and snow leopards territory.",
    destination_name: "Ladakh & Zanskar Range",
    destination_slug: "ladakh-himalayas",
    destination: FALLBACK_DESTINATIONS[4],
    category_name: "White Water & Adventure Trails",
    category_slug: "adventure-trails",
    category: FALLBACK_CATEGORIES[4],
    duration_days: 9,
    difficulty: "Moderate",
    max_altitude: "5,260 m (Kongmaru La)",
    group_size: "4 - 10 Explorers",
    price: 1150.00,
    discount_price: 999.00,
    rating: 4.8,
    reviews_count: 64,
    is_featured: false,
    hero_image: "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1600&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80"
    ],
    overview: "Nestled in Ladakh's rain shadow in northern India, the Markha Valley trek offers a mystical Himalayan immersion. Walk across river crossings, past mud-brick monasteries, and over the sweeping 5,260m Kongmaru La pass with views stretching towards K2.",
    highlights: [
      "Crossing Kongmaru La pass at 5,260m with Karakoram views",
      "Authentic Ladakhi homestays drinking butter tea with local families",
      "Exploring Hemis and Thiksey monasteries in Leh",
      "Hemis National Park: habitat of wild bharal and snow leopards",
      "Safe and gradual acclimatization itinerary"
    ],
    itinerary: [
      { day: 1, title: "Acclimatization in Leh (3,500m)", description: "Rest day in the oasis town of Leh to adapt to thin air. Visit Leh Palace.", accommodation: "Leh Heritage Hotel", meals: "Dinner" },
      { day: 2, title: "Leh to Zingchen & Yurutse (4,150m)", description: "Drive to Spituk and trek through gorges into Hemis National Park.", accommodation: "Traditional Homestay", meals: "Breakfast, Lunch, Dinner" },
      { day: 3, title: "Yurutse to Skiu via Ganda La (4,960m)", description: "Climb over Ganda La pass and descend into the vibrant oasis of Skiu.", accommodation: "Homestay", meals: "Breakfast, Lunch, Dinner" },
      { day: 4, title: "Skiu to Markha Village (3,700m)", description: "Follow the Markha river, passing crumbling forts and prayer walls.", accommodation: "Homestay", meals: "Breakfast, Lunch, Dinner" },
      { day: 5, title: "Markha to Thachungtse (4,150m)", description: "Pass Techa monastery and walk into wide alpine meadows beneath Kang Yatse peak.", accommodation: "Camp", meals: "Breakfast, Lunch, Dinner" },
      { day: 6, title: "Thachungtse to Nimaling Plateau (4,720m)", description: "High pasture land where shepherds graze yaks under the 6,400m pyramid of Kang Yatse.", accommodation: "Camp", meals: "Breakfast, Lunch, Dinner" },
      { day: 7, title: "Cross Kongmaru La (5,260m) to Shang Sumdo & Leh", description: "Ascend to the pass, take in the vast views of the Karakoram, and descend canyon gorges back to Leh.", accommodation: "Leh Heritage Hotel", meals: "Breakfast, Lunch, Farewell Dinner" }
    ],
    included: [
      "Inner Line Permits and Wildlife Conservation entry fees",
      "Experienced Ladakhi local guide and horse team logistics",
      "Homestay and tented camp stays with authentic meals",
      "Airport transfers and Leh hotel stays"
    ],
    excluded: [
      "Flights to/from Leh",
      "Personal travel insurance",
      "Tips for local guide and staff"
    ],
    upcoming_dates: ["Jul 05, 2026", "Jul 20, 2026", "Aug 10, 2026", "Sep 01, 2026"]
  }
];

export const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    location: "Colorado, USA",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=250&q=80",
    role: "Everest Base Camp Trekker",
    rating: 5,
    comment: "Standing at Kala Patthar at 5,550m watching the morning sun illuminate Everest was the most spiritual moment of my life. Spirit Adventure handled every single detail with immense warmth, supreme safety, and ethical Sherpa care. I wouldn't trust anyone else in the Himalayas!",
    tour_title: "Everest Base Camp & Kala Patthar Trek"
  },
  {
    id: 2,
    name: "Dr. Marcus Vance",
    location: "Melbourne, Australia",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80",
    role: "High Alpine Mountaineer",
    rating: 5,
    comment: "The Swiss Haute Route traverse was masterfully executed. Our IFMGA guide was knowledgeable, reassuring in technical sections, and the mountain huts selected were unbelievable. A world-class agency that lives and breathes genuine mountain passion.",
    tour_title: "Swiss Alps Haute Route: Chamonix to Zermatt"
  },
  {
    id: 3,
    name: "Elena Rostova",
    location: "Munich, Germany",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80",
    role: "Patagonia W-Trek Explorer",
    rating: 5,
    comment: "Patagonia's winds and wild glaciers took my breath away. Walking on Grey Glacier with crampons was an unforgettable rush. Spirit Adventure's logistics were seamless — from refugio bookings to delicious trail meals. 10/10 recommendation!",
    tour_title: "Patagonia W-Trek & Grey Glacier Ice Hike"
  },
  {
    id: 4,
    name: "Tariq Al-Mansoor",
    location: "Dubai, UAE",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=250&q=80",
    role: "Kilimanjaro Summit Achiever",
    rating: 5,
    comment: "Summitting Uhuru Peak at sunrise was a life milestone! The 8-day Lemosho route allowed our bodies to acclimatize properly without any altitude illness. The chef made hot gourmet meals even at 4,600m Barafu Camp. Outstanding crew!",
    tour_title: "Mount Kilimanjaro: Lemosho Route 8-Day Trek"
  }
];

export const FALLBACK_STATS: AgencyStats = {
  years_experience: 14,
  expeditions_completed: 1250,
  happy_explorers: 15400,
  expert_guides: 48,
  safety_record_percentage: 99.8
};
