import { Category, Destination, TourPackage, Testimonial, AgencyStats, GalleryItem } from '@/types';

export const FALLBACK_CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Hill Stations & Coffee Trails",
    slug: "hill-stations",
    icon: "Mountain",
    description: "Misty hills, tea & coffee plantations, cool waterfalls, and scenic viewpoints."
  },
  {
    id: 2,
    name: "Beaches & Coastal Escapes",
    slug: "beaches",
    icon: "Waves",
    description: "Golden sands, azure waters, water sports, Portuguese heritage, and beach shacks."
  },
  {
    id: 3,
    name: "Heritage & Historic Circuits",
    slug: "heritage",
    icon: "Compass",
    description: "UNESCO stone ruins, monolithic temples, royal palaces, and ancient architecture."
  },
  {
    id: 4,
    name: "River Rafting & Wildlife",
    slug: "adventure-wildlife",
    icon: "Tent",
    description: "Whitewater river rapids, coracle rides, jungle safaris, and nature campfires."
  },
  {
    id: 5,
    name: "Customized & Group Holidays",
    slug: "custom-trips",
    icon: "Footprints",
    description: "Tailor-made itineraries for families, couples, college batches, and corporate teams."
  }
];

export const FALLBACK_DESTINATIONS: Destination[] = [
  {
    id: 1,
    name: "Coorg (Kodagu)",
    country: "Karnataka, India",
    slug: "coorg",
    image_url: "/assets/img/Testimonals/03.webp",
    description: "The Scotland of India, renowned for aromatic coffee estates, Abbey Falls, and Raja's Seat.",
    best_season: "October to March",
    altitude: "900m - 1,750m",
    treks_count: 3
  },
  {
    id: 2,
    name: "Goa Coastline",
    country: "Goa, India",
    slug: "goa",
    image_url: "/assets/img/Testimonals/02.webp",
    description: "Sun-kissed beaches, parasailing, historic Aguada Fort, and Mandovi sunset river cruises.",
    best_season: "September to April",
    altitude: "Sea Level",
    treks_count: 4
  },
  {
    id: 3,
    name: "Hampi & Gokarna",
    country: "Karnataka, India",
    slug: "hampi",
    image_url: "/assets/img/Hampi.png",
    description: "Vijayanagara boulder kingdom, monolithic temples, and pristine cliffs of Om Beach.",
    best_season: "September to March",
    altitude: "450m",
    treks_count: 3
  },
  {
    id: 4,
    name: "Ooty & Kodaikanal",
    country: "Tamil Nadu, India",
    slug: "ooty",
    image_url: "/assets/img/Testimonals/05.webp",
    description: "Queen of Hill Stations, UNESCO Nilgiri toy train, Mysore Palace, and tea gardens.",
    best_season: "Year-round",
    altitude: "2,240m",
    treks_count: 4
  },
  {
    id: 5,
    name: "Chikmagalur",
    country: "Karnataka, India",
    slug: "chikmagalur",
    image_url: "/assets/img/Testimonals/08.webp",
    description: "Mullayanagiri peak trek, Baba Budangiri, and lush Western Ghats rainforests.",
    best_season: "September to March",
    altitude: "1,090m",
    treks_count: 2
  },
  {
    id: 6,
    name: "Dandeli",
    country: "Karnataka, India",
    slug: "dandeli",
    image_url: "/assets/img/Testimonals/12.webp",
    description: "Kali River whitewater rafting, jungle camping, coracle boating, and hornbill sightings.",
    best_season: "October to May",
    altitude: "473m",
    treks_count: 2
  }
];

export const FALLBACK_PACKAGES: TourPackage[] = [
  {
    id: 1,
    title: "Coorg Getaway",
    slug: "coorg",
    tagline: "The Scotland of India • Misty Valleys, Coffee Plantations & Waterfalls",
    destination_name: "Coorg (Kodagu), Karnataka",
    destination_slug: "coorg",
    category_name: "Hill Stations & Coffee Trails",
    category_slug: "hill-stations",
    duration_days: 2,
    difficulty: "Easy",
    max_altitude: "1,750 m",
    group_size: "2 - 15 Travelers",
    price: 4999,
    discount_price: 4499,
    rating: 4.9,
    reviews_count: 184,
    is_featured: true,
    hero_image: "/assets/img/Testimonals/03.webp",
    gallery: [
      "/assets/img/Testimonals/03.webp",
      "/assets/img/Testimonals/01.webp",
      "/assets/img/Testimonals/08.webp"
    ],
    overview: "Escape into the tranquil, emerald hills of Coorg (Kodagu). Known affectionately as the \"Scotland of India,\" Coorg offers refreshing mountain air, cascading silver waterfalls, and endless aromatic coffee and spice plantations. Our weekend package includes cozy estate accommodations, guided waterfall treks, authentic Kodava cuisine, and magical sunset viewpoints at Raja's Seat.",
    highlights: [
      "Stay in authentic coffee estate resort nestled in Kodagu hills",
      "Abbey Falls waterfall trek with hanging bridge views",
      "Golden sunset over misty Western Ghats at Raja's Seat",
      "Interaction with gentle giants at Dubare Elephant Camp",
      "Namdroling Golden Temple Buddhist monastery tour at Bylakuppe",
      "Campfire night with acoustic music and traditional Kodava feast"
    ],
    itinerary: [{"day": "Day 1", "title": "Arrival, Coffee Trails & Sunset Viewpoint", "meals": "Campfire Dinner Included", "activities": ["Scenic morning drive through Western Ghats into Madikeri; check-in at our boutique coffee estate resort.", "Guided walking tour through sprawling coffee and spice plantations; learn about coffee bean harvesting and roasting.", "Visit the thundering Abbey Falls nestled deep inside private estates; photograph the falls from the iconic hanging bridge.", "Witness a spectacular golden sunset at Raja's Seat overlooking endless rolling misty valleys.", "Warm evening campfire with music and an authentic Kodava dinner feast (Pandi Curry / Akki Roti / Vegetarian specialities)."]}, {"day": "Day 2", "title": "Gentle Giants, Golden Temple & Return Journey", "meals": "Breakfast Included", "activities": ["Enjoy freshly brewed South Indian filter coffee made from estate beans, followed by a buffet breakfast.", "Excursion to Dubare Elephant Camp on the Kaveri riverbanks; interact with gentle giants and witness river bathing.", "Tour the majestic Namdroling Monastery (Golden Temple) in Bylakuppe with 40-foot gilded Buddha statues.", "Shopping stop for authentic Coorg homemade chocolates, pure organic honey, and aromatic spices.", "Depart on return journey back to Hyderabad / Bangalore with unforgettable memories."]}],
    included: ["Round-trip transportation in comfortable AC Pushback Coach / Tempo Traveller", "1 Night stay in certified boutique coffee estate resort / homestay", "1 Delicious Breakfast and 1 Campfire Dinner feast included", "Guided coffee and spice plantation walking tour with estate expert", "All scheduled sightseeing in Madikeri, Dubare, and Bylakuppe", "Evening campfire with acoustic music under starry skies", "All highway tolls, inter-state vehicle taxes, and driver charges", "24/7 dedicated Spirit Adventures tour coordinator on trip"],
    excluded: ["Personal expenses, shopping, and laundry service", "Lunches during highway and sightseeing stops", "Monument and monastery camera entry passes (if applicable)", "River rafting or optional boating tickets at Dubare"],
    upcoming_dates: ["Every Weekend (Fri Night)", "Oct 24, 2026", "Nov 07, 2026", "Nov 21, 2026", "Dec 12, 2026"]
  },
  {
    id: 2,
    title: "Goa Beach Trip",
    slug: "goa",
    tagline: "Sun, Sand & Portuguese Charm • Water Sports, Forts & Vibrant Nightlife",
    destination_name: "Goa Coastline",
    destination_slug: "goa",
    category_name: "Beaches & Coastal Escapes",
    category_slug: "beaches",
    duration_days: 3,
    difficulty: "Easy",
    max_altitude: "Sea Level",
    group_size: "2 - 20 Travelers",
    price: 8500,
    discount_price: 7999,
    rating: 4.8,
    reviews_count: 240,
    is_featured: true,
    hero_image: "/assets/img/Testimonals/02.webp",
    gallery: [
      "/assets/img/Testimonals/02.webp",
      "/assets/img/Testimonals/07.webp",
      "/assets/img/Testimonals/14.webp"
    ],
    overview: "Feel the tropical breeze and soak in the vibrant coastal charm of Goa. From buzzing sandy shores in North Goa and exhilarating water sports to centuries-old Portuguese forts, Dudhsagar waterfalls, and laid-back sunset shacks, this 3 Days, 2 Nights holiday package provides the ultimate mix of thrill and beachside bliss.",
    highlights: [
      "3-Star Beachside Resort stay with swimming pool",
      "Water sports combo: Parasailing, Jet Ski, and Banana rides",
      "Visit Aguada Fort, Chapora Fort (Dil Chahta Hai point), and Sinquerim",
      "Mandovi sunset river cruise with live DJ and Goan folk dance",
      "Explore lively beach shacks and night markets at Baga & Calangute"
    ],
    itinerary: [{"day": "Day 1", "title": "Welcome to Goa & Baga Beach Sunset", "meals": "Dinner Included", "activities": ["Arrival in Goa; pickup and check-in to our 3-star beach resort. Refresh by the pool.", "Afternoon trip to Baga and Calangute beaches; relax on beach loungers with fresh coconut water.", "Thrilling water sports session (Parasailing, Jet Ski, and Banana rides).", "Explore vibrant beach shacks with live music, Goan seafood specials, and night market shopping."]}, {"day": "Day 2", "title": "Heritage Forts, Latin Quarters & River Cruise", "meals": "Breakfast Included", "activities": ["Buffet breakfast at resort followed by a visit to 17th-century Portuguese Fort Aguada and Lighthouse.", "Explore the UNESCO World Heritage Basilica of Bom Jesus and Se Cathedral in Old Goa.", "Stroll through the pastel-hued Portuguese Latin Quarter of Fontainhas in Panjim.", "Scenic evening Mandovi River Cruise with live Goan folk dance performances and DJ music."]}, {"day": "Day 3", "title": "Anjuna Cliffs, Bohemian Flea Markets & Departure", "meals": "Breakfast Included", "activities": ["Breakfast and resort checkout; morning visit to scenic Anjuna and Vagator cliffs.", "Visit Chapora Fort overlooking the Arabian Sea (famous \"Dil Chahta Hai\" viewpoint).", "Souvenir shopping at local Goan markets for cashew nuts, feni, and beachwear.", "Drop-off at airport or railway station for return journey."]}],
    included: ["Round-trip airport / station transfers in AC vehicle", "2 Nights stay in 3-star beachside resort with swimming pool", "Daily morning buffet breakfast at resort", "Guided North Goa & South Goa sightseeing tours", "Evening Mandovi River Cruise ticket included", "Assistance with discounted group water sports combos", "All tolls, parking, and driver allowances"],
    excluded: ["Airfare / Train tickets to and from Goa", "Optional water sports combo activity passes", "Lunches and specialty club dinners", "Personal bar expenses, laundry, and tips"],
    upcoming_dates: ["Every Friday Departure", "Nov 06, 2026", "Nov 20, 2026", "Dec 18, 2026", "Dec 30, 2026"]
  },
  {
    id: 3,
    title: "Hampi, Gokarna & Dandeli",
    slug: "hampi",
    tagline: "UNESCO Ruins, Sacred Coastlines & Whitewater Rapids • South India's Premier Circuit",
    destination_name: "Hampi & Gokarna, Karnataka",
    destination_slug: "hampi",
    category_name: "Heritage & Historic Circuits",
    category_slug: "heritage",
    duration_days: 4,
    difficulty: "Moderate",
    max_altitude: "500 m",
    group_size: "4 - 15 Travelers",
    price: 9500,
    discount_price: 8999,
    rating: 4.9,
    reviews_count: 320,
    is_featured: true,
    hero_image: "/assets/img/Hampi.png",
    gallery: [
      "/assets/img/Hampi.png",
      "/assets/img/Testimonals/04.png",
      "/assets/img/Testimonals/12.webp"
    ],
    overview: "The ultimate 3-in-1 adventure experience! Journey through the mystical boulder-strewn kingdom and monolithic temples of the Vijayanagara Empire in Hampi. Unwind on the serene, sacred cliffs of Om Beach in Gokarna, and conquer rushing whitewater rapids on the Kali River in Dandeli.",
    highlights: [
      "Explore 7th-century Virupaksha Temple & monolithic Vittala Stone Chariot",
      "Sunset over boulder kingdom from sacred Hemakuta Hill",
      "Relax on the peaceful sands and cafes of Om Beach, Gokarna",
      "Whitewater rafting on the Kali River in Dandeli with safety gear",
      "Campfire and starry sky dinner in Dandeli riverside forest camp"
    ],
    itinerary: [{"day": "Day 1", "title": "Monolithic Ruins & Sunset Over Hampi", "meals": "Dinner Included", "activities": ["Early morning arrival in Hampi; check-in and fresh-up.", "Explore the 7th-century Virupaksha Temple on the sacred banks of Tungabhadra River.", "Visit the world-famous Vittala Temple Complex, Stone Chariot, and musical granite pillars.", "Tour the Royal Enclosure, Lotus Mahal, and Elephant Stables.", "Hike up Hemakuta Hill for an unforgettable golden sunset over the stone boulder kingdom; campfire dinner."]}, {"day": "Day 2", "title": "Scenic Coastal Drive & Om Beach Gokarna", "meals": "Breakfast & Beachside Dinner", "activities": ["Scenic morning drive from Hampi to the Arabian Sea coastline of Gokarna.", "Visit the sacred Mahabaleshwar Temple with ancient Atmalinga heritage.", "Explore the naturally curved Om Beach; relax at cliffside cafes (Namaste Cafe).", "Trek along scenic headlands to Kudle Beach and Half Moon Beach.", "Sunset beach walk and campfire under starry coastal skies."]}, {"day": "Day 3", "title": "Dandeli River Rafting & Jungle Adventures", "meals": "Breakfast, Lunch & Barbecue Dinner", "activities": ["Morning drive into the dense teak and bamboo forests of Dandeli.", "Gear up with helmets and lifejackets for thrilling Kali River Whitewater Rafting (Grade 2 & 3 rapids).", "Enjoy kayaking, natural river jacuzzi, and river ziplining.", "Check-in to riverside jungle resort; rain dance and pool party.", "Jungle campfire with barbecue dinner and night stargazing."]}, {"day": "Day 4", "title": "Supa Dam Canyon & Return Journey", "meals": "Breakfast Included", "activities": ["Early morning jungle birdwatching and nature trail.", "Buffet breakfast at resort.", "Visit the grand Supa Dam canyon viewpoint and Syntheri Rocks monolith.", "Afternoon departure on AC coach back to Hyderabad / Bangalore."]}],
    included: ["Round-trip transportation in sanitized AC Pushback Coach", "3 Nights comfortable stays (Hampi, Gokarna & Dandeli)", "3 Breakfasts, 1 Lunch & 3 Campfire Dinners", "Certified local history guide in Hampi", "Kali river water activities (Natural Jacuzzi & Kayaking included)", "Campfire nights with music in Hampi and Dandeli", "All inter-state vehicle permits, tolls, and parking charges", "24/7 dedicated Spirit Adventures tour coordinator"],
    excluded: ["Long-stretch Whitewater river rafting ticket (available as add-on)", "Lunches in Hampi and Gokarna", "Camera and monument entry fees", "Personal adventure sports not listed in inclusions"],
    upcoming_dates: ["Every Thursday Night Departure", "Nov 12, 2026", "Nov 26, 2026", "Dec 10, 2026", "Dec 24, 2026"]
  },
  {
    id: 4,
    title: "Kodaikanal, Ooty & Mysore",
    slug: "ooty",
    tagline: "The Queen of Hill Stations • Nilgiri Toy Train, Tea Plantations & Royal Palaces",
    destination_name: "Ooty & Kodaikanal, Tamil Nadu",
    destination_slug: "ooty",
    category_name: "Hill Stations & Coffee Trails",
    category_slug: "hill-stations",
    duration_days: 6,
    difficulty: "Easy",
    max_altitude: "2,240 m",
    group_size: "2 - 12 Travelers",
    price: 14000,
    discount_price: 12999,
    rating: 4.9,
    reviews_count: 290,
    is_featured: true,
    hero_image: "/assets/img/Testimonals/05.webp",
    gallery: [
      "/assets/img/Testimonals/05.webp",
      "/assets/img/Testimonals/19.webp",
      "/assets/img/Testimonals/15.webp"
    ],
    overview: "Traverse the regal splendor of the Wadiyars in Mysore and ascend into the cool, misty paradise of the Nilgiri Hills. Ride the historic UNESCO mountain railway in Ooty, stroll through endless rolling emerald tea gardens in Coonoor, walk among giant ancient pine forests, and watch the illuminated brilliance of Mysore Palace.",
    highlights: [
      "Magnificent Mysore Palace with golden bulb illumination",
      "Ride the historic UNESCO Nilgiri Mountain Toy Train",
      "Visit Doddabetta Peak, tea gardens, and Ooty Lake boating",
      "Stroll along Kodaikanal Lake, Coaker's Walk, and Pillar Rocks",
      "Stay in scenic heritage hillside resorts"
    ],
    itinerary: [{"day": "Day 1", "title": "Royal Mysore & Grand Palace Illumination", "meals": "Dinner Included", "activities": ["Morning departure from Bangalore/Hyderabad; reach historic Mysore.", "Visit Chamundi Hills and the sacred monolith Nandi Bull statue.", "Guided tour of the grand Mysore Palace; admire royal artifacts and golden throne.", "Marvel at the breathtaking spectacle of Mysore Palace illuminated with 100,000 golden bulbs.", "Stroll through the musical fountains of Brindavan Gardens."]}, {"day": "Day 2", "title": "Ascent to Ooty & Botanical Gardens", "meals": "Breakfast & Dinner", "activities": ["Drive through Bandipur and Mudumalai Tiger Reserves up the 36 hairpin bends into Ooty.", "Check-in to picturesque hill resort overlooking tea slopes.", "Visit Government Botanical Garden featuring over 1,000 exotic flower species.", "Evening boating on Ooty Lake surrounded by eucalyptus groves; chocolate tasting."]}, {"day": "Day 3", "title": "UNESCO Toy Train & Coonoor Tea Estates", "meals": "Breakfast & Campfire Dinner", "activities": ["Board the UNESCO World Heritage Nilgiri Mountain Railway (Toy Train) to Coonoor.", "Visit Dolphin's Nose viewpoint looking down on Catherine Falls and Lamb's Rock.", "Tour an authentic tea factory; learn orthodox tea manufacturing and enjoy tea tasting.", "Sunset at Doddabetta Peak (highest peak in the Nilgiris); resort campfire dinner."]}, {"day": "Day 4", "title": "Scenic Drive to Kodaikanal & Star Lake", "meals": "Breakfast & Dinner", "activities": ["Morning drive from Nilgiris through Palani hills to Kodaikanal (\"Princess of Hill Stations\").", "Check-in to cozy valley resort in Kodaikanal.", "Leisure walk and cycling around the perimeter of Kodaikanal Star-Shaped Lake.", "Visit Bryant Park; shop for homemade chocolates and herbal eucalyptus oils."]}, {"day": "Day 5", "title": "Pillar Rocks, Pine Forest & Coaker's Walk", "meals": "Breakfast & Dinner", "activities": ["Morning visit to the magnificent Pillar Rocks (400-foot sheer granite cliffs).", "Explore Guna Caves (Devil's Kitchen) and Moir Point.", "Walk through the fairy-tale Pine Forest; visit Silver Cascade and Bear Shola Falls.", "Evening walk along Coaker's Walk with breathtaking misty valley views below."]}, {"day": "Day 6", "title": "Chettiar Park & Journey Back", "meals": "Breakfast Included", "activities": ["Leisurely breakfast and visit to Chettiar Park with Kurinji flowers.", "Scenic descent from the hills with roadside viewpoints and fruit stalls.", "Return journey back to Bangalore / Hyderabad with lifelong memories."]}],
    included: ["Round-trip transportation in premium AC coach", "5 Nights accommodation in 3-star hill and heritage resorts", "Daily breakfast and 5 gourmet dinners", "UNESCO Nilgiri Toy Train reservation assistance", "Guided tours of Mysore Palace and Tea Factory", "All interstate entry taxes, tolls, parking, and driver charges", "Dedicated Spirit Adventures tour coordinator"],
    excluded: ["Personal boating charges at Ooty and Kodaikanal lakes", "Lunches and mid-day snacks", "Entry fees to amusement rides / private parks", "Room service and personal tips"],
    upcoming_dates: ["Departures Every Saturday", "Nov 14, 2026", "Nov 28, 2026", "Dec 19, 2026", "Jan 09, 2027"]
  },
  {
    id: 5,
    title: "Chikmagalur Coffee Trail & Mullayanagiri",
    slug: "chikmagalur-coffee-trail",
    tagline: "Trek Karnataka's Highest Peak, Explore Baba Budangiri & Wake Up to Arabica Aromas",
    destination_name: "Chikmagalur, Karnataka",
    destination_slug: "chikmagalur",
    category_name: "Hill Stations & Coffee Trails",
    category_slug: "hill-stations",
    duration_days: 3,
    difficulty: "Moderate",
    max_altitude: "1,930 m",
    group_size: "2 - 15 Travelers",
    price: 6500,
    discount_price: 5999,
    rating: 4.8,
    reviews_count: 135,
    is_featured: false,
    hero_image: "/assets/img/Testimonals/08.webp",
    gallery: [
      "/assets/img/Testimonals/08.webp",
      "/assets/img/Testimonals/01.webp",
      "/assets/img/Testimonals/09.webp"
    ],
    overview: "Chikmagalur is the birthplace of Indian coffee. Trek to Mullayanagiri (the highest peak in Karnataka), witness rolling misty shola grasslands of Baba Budangiri, stand beneath cascading Jhari Waterfalls, and relax in heritage estate homestays with authentic Malnad feasts.",
    highlights: [
      "Trek to Mullayanagiri Peak (1,930m) for panoramic valley views",
      "4x4 Jeep ride to remote Jhari (Buttermilk) Waterfalls",
      "Visit historic Baba Budangiri hills and Manikyadhara Falls",
      "Stay in authentic coffee estate homestay with plantation walk",
      "Campfire and authentic Malnad feast"
    ],
    itinerary: [
      { day: 1, title: "Scenic Drive & Coffee Plantation Check-in", description: "Drive arriving in Chikmagalur. Check-in to estate homestay, fresh up, and take a guided coffee estate walk. Evening campfire and dinner.", accommodation: "Estate Homestay", meals: "Breakfast, Dinner" },
      { day: 2, title: "Mullayanagiri Peak Trek & Jhari Falls Jeep Drive", description: "Early morning trek to Mullayanagiri peak. Afternoon 4x4 jeep ride to Jhari Falls. Sunset at Baba Budangiri.", accommodation: "Estate Homestay", meals: "Breakfast, Dinner" },
      { day: 3, title: "Belur Heritage Temple & Return Journey", description: "Visit the 12th-century Hoysala Chennakeshava Temple at Belur with exquisite stone carvings. Return drive.", accommodation: "N/A", meals: "Breakfast" }
    ],
    included: [
      "2 Nights accommodation in scenic coffee estate homestay",
      "Breakfast on all days, 2 campfire dinners with local Malnad cuisine",
      "AC Pushback transportation for all transfers",
      "4x4 Jeep transfer to Jhari waterfalls",
      "Plantation walk and all tolls, parking"
    ],
    excluded: [
      "Lunches during transit and sightseeing",
      "Personal shopping (coffee beans, spices)"
    ],
    upcoming_dates: ["Every Friday Night", "Nov 06, 2026", "Nov 20, 2026", "Dec 04, 2026", "Dec 18, 2026"]
  },
  {
    id: 6,
    title: "Dandeli River Rafting & Jungle Camp",
    slug: "dandeli-rafting",
    tagline: "Whitewater Rapids on Kali River, Coracle Rides, Jungle Safari & Riverside Campfire",
    destination_name: "Dandeli, Karnataka",
    destination_slug: "dandeli",
    category_name: "River Rafting & Wildlife",
    category_slug: "adventure-wildlife",
    duration_days: 2,
    difficulty: "Moderate",
    max_altitude: "473 m",
    group_size: "2 - 20 Travelers",
    price: 4500,
    discount_price: 3999,
    rating: 4.9,
    reviews_count: 160,
    is_featured: false,
    hero_image: "/assets/img/Testimonals/12.webp",
    gallery: [
      "/assets/img/Testimonals/12.webp",
      "/assets/img/Testimonals/11.webp",
      "/assets/img/Testimonals/17.webp"
    ],
    overview: "Experience heart-pounding whitewater rafting on the Kali River. Dandeli is South India's premier adventure hub offering natural jacuzzi baths, river kayaking, tranquil coracle rides, wildlife jungle treks, and campfire barbecue under starry canopies.",
    highlights: [
      "Certified Kali River whitewater rafting with safety life jackets",
      "Coracle boating and natural river jacuzzi experience",
      "Overnight stay in riverside tented camp or cottage resort",
      "Campfire night with music, barbecue, and team games",
      "Morning jungle walk for birdwatching and hornbill sightings"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Dandeli & Kali River Watersports", description: "Reach Dandeli campsite; check-in and fresh up with welcome drinks. Head to Kali River for thrilling whitewater rafting, coracle ride, and river jacuzzi. Evening campfire with music and dinner.", accommodation: "Riverside Adventure Camp", meals: "Lunch, High Tea, Campfire Dinner" },
      { day: 2, title: "Jungle Walk, Supa Dam & Return Journey", description: "Early morning guided jungle walk. Breakfast at camp. Visit Supa Dam viewpoint and local timber craft shops before starting return journey.", accommodation: "N/A", meals: "Breakfast" }
    ],
    included: [
      "1 Night stay in adventure camp / resort on sharing basis",
      "All meals: 1 Lunch, 1 Dinner, 1 Breakfast, evening tea",
      "Kali River rafting session with certified instructor and equipment",
      "Coracle ride, kayaking, and natural jacuzzi bath",
      "Campfire with music and games",
      "All taxes and parking"
    ],
    excluded: [
      "Personal expenses and tips",
      "Optional night jungle jeep safari"
    ],
    upcoming_dates: ["Every Weekend", "Oct 24, 2026", "Nov 07, 2026", "Nov 21, 2026", "Dec 05, 2026"]
  }
];

export const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Avinash Bollaram",
    location: "Hyderabad, Telangana",
    avatar: "/assets/img/Testimonals/01.webp",
    role: "Verified Coorg Traveler",
    rating: 5,
    comment: "Great hospitality and service on our Coorg family trip. The estate stay amidst coffee plantations was surreal, and Abbey Falls was breathtaking. Everything went smoothly with our coordinator Sathvik!",
    tour_title: "Coorg Getaway"
  },
  {
    id: 2,
    name: "Sneha Kulkarni",
    location: "Pune, Maharashtra",
    avatar: "/assets/img/Testimonals/02.webp",
    role: "Goa Trip Explorer",
    rating: 5,
    comment: "Goa with Spirit Adventures was super hassle-free! The resort was right next to the beach, and the water sports package was fully taken care of with zero waiting in lines. 10/10 recommendation!",
    tour_title: "Goa Beach Trip"
  },
  {
    id: 3,
    name: "Vikramaditya Reddy",
    location: "Bangalore, Karnataka",
    avatar: "/assets/img/Testimonals/08.webp",
    role: "Hampi & Dandeli Adventurer",
    rating: 5,
    comment: "Hampi's stone architecture was mind-blowing, and the Dandeli river rafting was pure adrenaline. Spirit Adventures organized everything seamlessly from pickup to drop.",
    tour_title: "Hampi, Gokarna & Dandeli"
  },
  {
    id: 4,
    name: "Priya & Karthik",
    location: "Hyderabad, Telangana",
    avatar: "/assets/img/Testimonals/09.webp",
    role: "Couple Vacationers",
    rating: 5,
    comment: "We booked the Ooty and Kodaikanal trip for our anniversary. The Nilgiri toy train ride and Mysore Palace illumination were magical. Highly recommend Spirit Adventures!",
    tour_title: "Kodaikanal, Ooty & Mysore"
  }
];

export const FALLBACK_STATS: AgencyStats = {
  years_experience: 8,
  expeditions_completed: 1850,
  happy_explorers: 22400,
  expert_guides: 35,
  safety_record_percentage: 99.8
};

export const FALLBACK_GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 1,
    title: "Mountain Escapade",
    category: "Mountains",
    type: "image",
    src: "/assets/img/Testimonals/01.webp",
    caption: "Misty mountain trails and sunrise peaks across the Western Ghats.",
    location: "Kudremukh & Chikmagalur"
  },
  {
    id: 2,
    title: "Sun & Beaches",
    category: "Beaches",
    type: "image",
    src: "/assets/img/Testimonals/02.webp",
    caption: "Golden sands, azure ocean waves and vibrant beach vibes.",
    location: "Goa & Gokarna"
  },
  {
    id: 3,
    title: "Coorg Greenery",
    category: "Mountains",
    type: "image",
    src: "/assets/img/Testimonals/03.webp",
    caption: "Sprawling emerald coffee estates and fragrant spice plantations in Kodagu.",
    location: "Coorg (Kodagu)"
  },
  {
    id: 4,
    title: "Ancient Hampi",
    category: "Adventure",
    type: "image",
    src: "/assets/img/Testimonals/04.png",
    caption: "Majestic boulder ruins and monolithic stone architecture of the Vijayanagara Empire.",
    location: "Hampi, Karnataka"
  },
  {
    id: 5,
    title: "Ooty Hill Station",
    category: "Mountains",
    type: "image",
    src: "/assets/img/Testimonals/05.webp",
    caption: "Rolling tea gardens and pine-fringed roads in the Queen of Hill Stations.",
    location: "Nilgiris, Ooty"
  },
  {
    id: 6,
    title: "Coastal Paradise",
    category: "Beaches",
    type: "image",
    src: "/assets/img/Testimonals/07.webp",
    caption: "Unspoiled shorelines, cliffside viewpoints and serene tropical sunsets.",
    location: "Om Beach, Gokarna"
  },
  {
    id: 7,
    title: "Misty Trails",
    category: "Mountains",
    type: "image",
    src: "/assets/img/Testimonals/08.webp",
    caption: "Trekking through rolling clouds and whispering winds at high altitude.",
    location: "Mullayanagiri Peak"
  },
  {
    id: 8,
    title: "Adventure Road Trip",
    category: "Adventure",
    type: "image",
    src: "/assets/img/Testimonals/09.webp",
    caption: "Cruising winding ghat roads and scenic countryside with our adventure crew.",
    location: "Western Ghats"
  },
  {
    id: 9,
    title: "Campfire & Stargazing",
    category: "Camping",
    type: "image",
    src: "/assets/img/Testimonals/11.webp",
    caption: "Cozy nights around glowing embers under crystal-clear starlit skies.",
    location: "Dandeli & Coorg Camps"
  },
  {
    id: 10,
    title: "Dandeli Water Rafting",
    category: "Adventure",
    type: "image",
    src: "/assets/img/Testimonals/12.webp",
    caption: "Conquering whitewater rapids on the Kali River with certified river guides.",
    location: "Kali River, Dandeli"
  },
  {
    id: 11,
    title: "Backpacker Journey",
    category: "Adventure",
    type: "image",
    src: "/assets/img/Testimonals/13.webp",
    caption: "Meeting like-minded explorers and creating memories that last a lifetime.",
    location: "Group Expeditions"
  },
  {
    id: 12,
    title: "Golden Horizon",
    category: "Beaches",
    type: "image",
    src: "/assets/img/Testimonals/14.webp",
    caption: "Mesmerizing sunset glow over the Arabian Sea horizon.",
    location: "Goa Coastline"
  },
  {
    id: 13,
    title: "Alpine Lake Retreat",
    category: "Mountains",
    type: "image",
    src: "/assets/img/Testimonals/15.webp",
    caption: "Tranquil reflections and placid waters surrounded by forested hills.",
    location: "Kodaikanal Lake"
  },
  {
    id: 14,
    title: "Serene Boat Cruise",
    category: "Beaches",
    type: "image",
    src: "/assets/img/Testimonals/16.webp",
    caption: "Evening Mandovi river cruise with music, breeze, and coastal sights.",
    location: "Panjim, Goa"
  },
  {
    id: 15,
    title: "Starlit Night Camping",
    category: "Camping",
    type: "image",
    src: "/assets/img/Testimonals/17.webp",
    caption: "Tented camps pitched in deep forests with warm acoustic music.",
    location: "Jungle Campsites"
  },
  {
    id: 16,
    title: "Jungle Safari Trip",
    category: "Camping",
    type: "image",
    src: "/assets/img/Testimonals/18.webp",
    caption: "Wildlife tracking, exotic birds, and lush wilderness trails.",
    location: "Dandeli Wildlife Reserve"
  },
  {
    id: 17,
    title: "Deep Pine Forest",
    category: "Mountains",
    type: "image",
    src: "/assets/img/Testimonals/19.webp",
    caption: "Towering ancient pine trees and mystical canopy walks.",
    location: "Kodaikanal Pines"
  },
  {
    id: 18,
    title: "Golden Sand Dunes",
    category: "Adventure",
    type: "image",
    src: "/assets/img/Testimonals/20.webp",
    caption: "Desert safari and campfire beats under the vast open night sky.",
    location: "Desert Expedition"
  },
  {
    id: 19,
    title: "Coastal Breeze Reel",
    category: "Videos",
    type: "video",
    src: "/assets/video/travel-coast.mp4",
    poster: "/assets/img/hero-poster.jpg",
    caption: "Aerial flight and ocean waves crashing onto pristine tropical sands.",
    location: "Coastal Expeditions"
  },
  {
    id: 20,
    title: "Hot Air Balloons Sky",
    category: "Videos",
    type: "video",
    src: "/assets/video/travel-cappadocia.mp4",
    poster: "/assets/img/hero-poster.jpg",
    caption: "Spectacular flight over fairy chimneys and glowing sunrises.",
    location: "International Specials"
  },
  {
    id: 21,
    title: "Expedition Flight Loop",
    category: "Videos",
    type: "video",
    src: "/assets/video/travel-flight.mp4",
    poster: "/assets/img/hero-poster.jpg",
    caption: "Flying high above mountain peaks and coastal wonders.",
    location: "Global Adventures"
  },
  {
    id: 22,
    title: "Wilderness Discovery Loop",
    category: "Videos",
    type: "video",
    src: "/assets/video/travel-loop.mp4",
    poster: "/assets/img/hero-poster.jpg",
    caption: "Cinematic glimpses of unchartered trails and pure wanderlust.",
    location: "South India Circuits"
  },
  {
    id: 23,
    title: "Island Paradise Waters",
    category: "Videos",
    type: "video",
    src: "/assets/video/travel-maldives.mp4",
    poster: "/assets/img/hero-poster.jpg",
    caption: "Crystal turquoise lagoons, water villas and coral reef wonderlands.",
    location: "Tropical Escapes"
  },
  {
    id: 24,
    title: "Spirit Adventures Stamp Reel",
    category: "Videos",
    type: "video",
    src: "/assets/video/StampVideo.mp4",
    poster: "/assets/img/hero-poster.jpg",
    caption: "Official top-rated Spirit Adventures moments captured on camera.",
    location: "Spirit Adventures Highlights"
  }
];
