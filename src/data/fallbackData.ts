import { Category, Destination, TourPackage, Testimonial, AgencyStats, GalleryItem } from '@/types';

export const FALLBACK_CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Wayanad & Coorg Circuits",
    slug: "wayanad-coorg",
    icon: "Mountain",
    description: "Chembra Peak, 900 Kandi Glass Bridge, Golden Temple, Mandalpatti & waterfalls."
  },
  {
    id: 2,
    name: "Gokarna & Coastal Backpacking",
    slug: "coastal-escapes",
    icon: "Waves",
    description: "Murudeshwar Shiva Statue, Udupi temples, Honnavar mangroves & Om to Kudle beach trek."
  },
  {
    id: 3,
    name: "Dandeli & River Watersports",
    slug: "dandeli-adventure",
    icon: "Tent",
    description: "Kali River rafting, kayaking, zorbing, river swimming, DJ rain dance & campfire nights."
  },
  {
    id: 4,
    name: "Hampi & UNESCO Heritage",
    slug: "heritage-circuits",
    icon: "Compass",
    description: "Vijayanagara boulder empire, Vijaya Vittala Stone Chariot, Hippie Island & history."
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
    name: "Wayanad",
    country: "Kerala, India",
    slug: "wayanad",
    image_url: "/assets/img/Testimonals/03.webp",
    description: "Chembra Peak, 900 Kandi Glass Bridge, Banasura Sagar Dam, and Soochipara Falls.",
    best_season: "September to May",
    altitude: "700m - 2,100m",
    treks_count: 3
  },
  {
    id: 2,
    name: "Coorg (Kodagu)",
    country: "Karnataka, India",
    slug: "coorg",
    image_url: "/assets/img/Testimonals/01.webp",
    description: "The Scotland of India, renowned for coffee estates, Abbey Falls, and Mandalpatti Peak.",
    best_season: "October to March",
    altitude: "900m - 1,750m",
    treks_count: 3
  },
  {
    id: 3,
    name: "Gokarna & Murudeshwar",
    country: "Karnataka, India",
    slug: "gokarna",
    image_url: "/assets/img/Testimonals/02.webp",
    description: "Om Beach to Kudle Beach cliff trek, Murudeshwar colossal Shiva statue, and Mirjan Fort.",
    best_season: "October to April",
    altitude: "Sea Level",
    treks_count: 4
  },
  {
    id: 4,
    name: "Hampi",
    country: "Karnataka, India",
    slug: "hampi",
    image_url: "/assets/img/Hampi.png",
    description: "Vijayanagara boulder kingdom, monolithic Stone Chariot, and vibrant Hippie Island.",
    best_season: "October to March",
    altitude: "450m",
    treks_count: 3
  },
  {
    id: 5,
    name: "Dandeli",
    country: "Karnataka, India",
    slug: "dandeli",
    image_url: "/assets/img/Testimonals/12.webp",
    description: "Kali River whitewater rafting, kayaking, zorbing, natural river jacuzzi, and campfires.",
    best_season: "October to May",
    altitude: "473m",
    treks_count: 2
  }
];

export const FALLBACK_PACKAGES: TourPackage[] = [
  {
    id: 1,
    title: "3D 2N Wayanad Adventure Trip",
    slug: "wayanad-adventure",
    tagline: "Kuruvadweep Island, Chembra Peak Trek, 900 Kandi Glass Bridge & Wayanad Safari",
    destination_name: "Wayanad, Kerala",
    destination_slug: "wayanad",
    category_name: "Wayanad & Coorg Circuits",
    category_slug: "wayanad-coorg",
    duration_days: 3,
    difficulty: "Moderate",
    max_altitude: "2,100 m",
    group_size: "10 - 25 Backpackers",
    price: 7499,
    discount_price: 7499,
    rating: 4.9,
    reviews_count: 186,
    is_featured: true,
    hero_image: "/assets/img/Testimonals/03.webp",
    gallery: [
      "/assets/img/Testimonals/03.webp",
      "/assets/img/Testimonals/01.webp",
      "/assets/img/Testimonals/08.webp"
    ],
    overview: "Organized by Spirit Adventures. Depart from Hyderabad (EX-HYD) every Thursday & Friday. Hike Chembra Peak, step onto the 900 Kandi Glass Bridge, experience high-speed ziplining, marvel at Asia's largest earth dam at Banasura Sagar, explore peaceful Kuruvadweep river island, and immerse in Wayanad Wildlife Sanctuary jungle safari vibes with an en-route visit to Mysore Palace.",
    highlights: [
      "Kuruvadweep Island (Peaceful River Island Experience)",
      "Banasura Sagar Dam (Asia's Largest Earth Dam View & Greenery)",
      "Chembra Peak Trek (Start: 3:00 AM | Trek Begins: 7:00 AM | Return: 11:00 AM)",
      "Soochipara Waterfalls & 900 Kandi Glass Bridge Experience",
      "High-Speed Valley Zipline Adventure & Lakkidi View Point",
      "Wayanad Wildlife Sanctuary (Jungle Safari Vibes)",
      "Mysore Palace (En-route Visit)",
      "Non-AC Sleeper Class Train Tickets (To & Fro) Included"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Nature & Scenic Views",
        meals: "Local eateries stop",
        activities: [
          "Arrive in Wayanad; transfer to scenic hotel/homestay and freshen up.",
          "Visit Kuruvadweep Island for a peaceful river island nature walk amidst dense bamboo groves.",
          "Explore Banasura Sagar Dam (Asia's largest earth dam view) with calm waters & mountain landscapes.",
          "Enjoy lush greenery, calm waters & scenic landscapes.",
          "Overnight stay in Wayanad."
        ]
      },
      {
        day: "Day 2",
        title: "Trekking & Adventure",
        meals: "Breakfast & dinner stops",
        activities: [
          "Early morning 3:00 AM start for Chembra Peak.",
          "Trek begins at 7:00 AM up Chembra Peak; pass scenic heart-shaped lake; return by 11:00 AM.",
          "Visit the roaring Soochipara Waterfalls.",
          "Thrilling 900 Kandi Glass Bridge walk suspended high above tea estates.",
          "High-speed valley Zipline adventure.",
          "Sunset stop at Lakkidi View Point (if time permits).",
          "Overnight stay in Wayanad."
        ]
      },
      {
        day: "Day 3",
        title: "Wildlife & Heritage",
        meals: "En-route meals",
        activities: [
          "Early morning trip to Wayanad Wildlife Sanctuary (Jungle Safari Vibes).",
          "Scenic forest route drive towards Mysore.",
          "En-route visit to the grand Mysore Palace.",
          "Board return journey train back to Hyderabad with unforgettable memories."
        ]
      }
    ],
    included: [
      "Non-AC Sleeper Class Train Tickets (To & Fro - Hyderabad ↔ Wayanad/Mysore)",
      "Local Transportation (Non AC)",
      "Local Sightseeing as per itinerary",
      "Accommodation (Sharing Basis)",
      "Driver Charges & Bata",
      "Tolls, Parking & Taxes",
      "Trip Captain (if 10+ members)",
      "Basic First Aid Support"
    ],
    excluded: [
      "Food expenses",
      "Entry Tickets at attractions & viewpoints",
      "Private Rooms & AC Upgrades (3AC / 2AC / 1AC) available at extra cost",
      "Anything Not Mentioned in Inclusions"
    ],
    upcoming_dates: ["Every Thursday & Friday", "Nov 06, 2026", "Nov 13, 2026", "Nov 20, 2026", "Dec 04, 2026"]
  },
  {
    id: 2,
    title: "4D 3N Coorg & Wayanad Trip",
    slug: "coorg-wayanad",
    tagline: "Chembra Peak Trek, 900 Kandi Glass Bridge, Golden Temple, Mandalpatti & Abbey Falls",
    destination_name: "Coorg & Wayanad",
    destination_slug: "coorg-wayanad",
    category_name: "Wayanad & Coorg Circuits",
    category_slug: "wayanad-coorg",
    duration_days: 4,
    difficulty: "Moderate",
    max_altitude: "2,100 m",
    group_size: "10 - 25 Backpackers",
    price: 8999,
    discount_price: 8999,
    rating: 4.9,
    reviews_count: 242,
    is_featured: true,
    hero_image: "/assets/img/Testimonals/01.webp",
    gallery: [
      "/assets/img/Testimonals/01.webp",
      "/assets/img/Testimonals/03.webp",
      "/assets/img/Testimonals/08.webp"
    ],
    overview: "Organized by Spirit Adventures. Depart every Friday from Hyderabad (Board Mysore Express from Kacheguda at 7:00 PM), Bangalore, or Chennai. Discover Mysore Palace, Kuruvadweep Island, Banasura Sagar Dam, Chembra Peak trek, 900 Kandi Glass Bridge, Zipline, Golden Temple at Bylakuppe, Harangi Elephant Camp, and open 4x4 jeep safari to Mandalpatti Peak with Abbey Waterfalls.",
    highlights: [
      "Board Mysore Express from Kacheguda at 7:00 PM (HYD | BLR | CHE)",
      "Mysore Palace, Kuruvadweep Island & Banasura Sagar Dam",
      "Early Morning Chembra Peak Trek (7:00 AM to 11:00 AM)",
      "Soochipara Waterfalls, 900 Kandi Glass Bridge & Zipline Adventure",
      "Golden Temple (Namdroling), Chiklihole Reservoir & Harangi Dam",
      "Harangi Elephant Camp interaction",
      "4x4 Jeep ride to Mandalpatti Peak, Abbey Waterfalls & coffee plantations",
      "Round-trip Non-AC Sleeper Class train tickets included"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Mysore & Wayanad Exploration",
        meals: "En-route meal stops",
        activities: [
          "Board Mysore Express from Kacheguda at 7:00 PM; overnight train to Bangalore/Mysore.",
          "Arrive morning; visit the regal Mysore Palace.",
          "Travel to Wayanad; explore Kuruvadweep Island nature trail.",
          "Visit Banasura Sagar Dam with panoramic reservoir vistas.",
          "Overnight stay in Wayanad."
        ]
      },
      {
        day: "Day 2",
        title: "Trekking & Adventure Day",
        meals: "Breakfast & dinner stops",
        activities: [
          "Early morning start towards Chembra Peak trek (trek begins 7:00 AM, return by 11:00 AM).",
          "Visit Soochipara Waterfalls.",
          "Walk on the transparent 900 Kandi Glass Bridge above rainforest canopies.",
          "Thrilling high-line valley zipline adventure.",
          "Visit scenic Lakkidi View Point (if time permits).",
          "Overnight stay."
        ]
      },
      {
        day: "Day 3",
        title: "Coorg Sightseeing",
        meals: "Local Kodava cuisine stops",
        activities: [
          "Scenic morning drive from Wayanad into the rolling coffee hills of Coorg.",
          "Visit the grand Golden Temple (Namdroling Monastery) in Bylakuppe.",
          "Visit serene Chiklihole Reservoir and Harangi Dam.",
          "Interaction with elephants at Harangi Elephant Camp.",
          "Overnight stay in Coorg."
        ]
      },
      {
        day: "Day 4",
        title: "Coorg Hills & Waterfalls",
        meals: "Lunch break",
        activities: [
          "4x4 open jeep safari to the top of Mandalpatti Peak.",
          "Visit cascading Abbey Waterfalls surrounded by private estates.",
          "Guided coffee and spice plantations walk.",
          "Lunch break and return journey towards Bangalore / Mysore.",
          "Overnight train journey back to Hyderabad."
        ]
      }
    ],
    included: [
      "Non-AC Sleeper Class Train Tickets (Both Ways)",
      "Accommodation on Sharing Basis",
      "Local Transportation in private vehicle",
      "Trip Captain Assistance throughout",
      "Driver Charges & Bata",
      "All Required Permits, Toll, Parking & Taxes",
      "Basic First Aid Support"
    ],
    excluded: [
      "Food Expenses during journey and stay",
      "Entry Tickets & Tatkal Charges",
      "GST (5%)",
      "Anything Not Mentioned in Inclusions"
    ],
    upcoming_dates: ["Every Friday Departure", "Nov 06, 2026", "Nov 13, 2026", "Nov 20, 2026", "Nov 27, 2026"]
  },
  {
    id: 3,
    title: "4D 3N Gokarna & Dandeli & Udupi Trip",
    slug: "gokarna-dandeli-udupi",
    tagline: "Dandeli Kali River Watersports, Murudeshwar, Udupi Temples & Om to Kudle Beach Trek",
    destination_name: "Gokarna, Dandeli & Udupi",
    destination_slug: "gokarna-dandeli-udupi",
    category_name: "Gokarna & Coastal Backpacking",
    category_slug: "coastal-escapes",
    duration_days: 4,
    difficulty: "Moderate",
    max_altitude: "Sea Level - 473 m",
    group_size: "12 - 25 Backpackers",
    price: 8999,
    discount_price: 8999,
    rating: 4.9,
    reviews_count: 310,
    is_featured: true,
    hero_image: "/assets/img/Testimonals/02.webp",
    gallery: [
      "/assets/img/Testimonals/02.webp",
      "/assets/img/Testimonals/12.webp",
      "/assets/img/Testimonals/16.webp"
    ],
    overview: "Organized by Spirit Adventures. Departures every Thursday & Friday (3:30 PM departure from Hyderabad: Nampally, Begumpet, Lingampally; also BLR | BZA | CHE). Experience 1 full day of meals and watersports in Dandeli: boating, kayaking, zorbing, 1.2 KM river rafting, zipline, rain dance, campfire and tent stay. Followed by Vibhuti Falls, Murudeshwar Shiva statue, beachside campfire camping at Nirvana Beach, Udupi Krishna Temple, Mirjan Fort, and cliff trek from Om Beach to Kudle Beach.",
    highlights: [
      "Departures Every Thursday & Friday – 3:30 PM (HYD | BLR | BZA | CHE)",
      "Boarding points: Nampally, Begumpet, Lingampally",
      "Dandeli Resort: Boating, Kayaking, Zorbing, 1.2 KM River Rafting, Zipline & River Swimming",
      "1 Day Dandeli Meals Included (Breakfast, Lunch & Campfire Dinner)",
      "DJ Music, Rain Dance, Campfire Night Under the Stars & Camping Stay",
      "Vibhuti Falls & Honnavar Mangroves walkway",
      "Murudeshwar Temple & giant Shiva statue beside the Arabian Sea",
      "Sunset at Nirvana Beach with beachside campfire & beach camping stay",
      "Sri Mookambika Temple, Udupi Sri Krishna Temple & Maravanthe Beach",
      "Mirjan Fort, Mahabaleshwar Temple & Beach Trek: Om Beach ➝ Kudle Beach"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Dandeli Adventure",
        meals: "Breakfast, Delicious Lunch & Campfire Dinner Included",
        activities: [
          "Reach Hubli by 8:00 AM; transfer to Dandeli resort; check-in, freshen up & enjoy breakfast.",
          "Adventure activities: Boating, Kayaking, Zorbing, River Rafting (1.2 KM), Zipline & River Swimming.",
          "Delicious buffet lunch included.",
          "Indoor & outdoor games, DJ music & rain dance.",
          "Campfire night under the stars with dinner included.",
          "Camping stay experience (rooms available on paid upgrade)."
        ]
      },
      {
        day: "Day 2",
        title: "Beaches & Temples",
        meals: "Local coastal eateries",
        activities: [
          "Early morning departure to crystal-clear Vibhuti Falls.",
          "Explore Honnavar Mangroves boat trails.",
          "Visit Murudeshwar Temple and giant Shiva statue.",
          "Watch golden sunset at Nirvana Beach.",
          "Beachside campfire and overnight beach camping stay."
        ]
      },
      {
        day: "Day 3",
        title: "Udupi Temple Tour",
        meals: "Udupi vegetarian delicacies",
        activities: [
          "Darshan at Sri Mookambika Temple.",
          "Visit historic Udupi Sri Krishna Temple.",
          "Drive along Maravanthe Beach where the Arabian Sea and Souparnika River run parallel.",
          "Overnight stay."
        ]
      },
      {
        day: "Day 4",
        title: "Gokarna Exploration",
        meals: "Cliff cafe lunch",
        activities: [
          "Explore 16th-century historic Mirjan Fort.",
          "Visit sacred Mahabaleshwar Temple.",
          "Gokarna Main Beach visit.",
          "Scenic cliffside beach trek: Om Beach ➝ Kudle Beach.",
          "Return journey starts at 8:30 PM; reach Hyderabad by Tuesday 11:00 AM."
        ]
      }
    ],
    included: [
      "Sleeper Class Train Tickets (Round Trip)",
      "Local Transportation in private vehicle",
      "Accommodation (Resort Stay & Beach Camping)",
      "Meals in Dandeli (Breakfast, Lunch & Dinner Included on Day 1)",
      "Trip Captain Support & First Aid Assistance",
      "Kayaking, Boating, Zorbing & River Swimming in Dandeli"
    ],
    excluded: [
      "Food during train journey & other days",
      "Paid adventure activities (long-stretch rafting add-on)",
      "Tatkal charges & GST (5%)",
      "Private couple room upgrade (₹3,000/- per couple, subject to availability)"
    ],
    upcoming_dates: ["Every Thursday & Friday", "Nov 05, 2026", "Nov 12, 2026", "Nov 19, 2026", "Dec 03, 2026"]
  },
  {
    id: 4,
    title: "4D 3N Gokarna & Murudeshwar & Udupi & Jog Falls",
    slug: "gokarna-murudeshwar-udupi-jogfalls",
    tagline: "Jog Falls, Vibuthi Falls, Murudeshwar Temple, Honnavar Mangroves & Om Beach Sunset",
    destination_name: "Gokarna, Murudeshwar & Jog Falls",
    destination_slug: "gokarna-murudeshwar-udupi-jogfalls",
    category_name: "Gokarna & Coastal Backpacking",
    category_slug: "coastal-escapes",
    duration_days: 4,
    difficulty: "Easy to Moderate",
    max_altitude: "Sea Level - 450 m",
    group_size: "12 - 25 Backpackers",
    price: 8999,
    discount_price: 8999,
    rating: 4.8,
    reviews_count: 215,
    is_featured: true,
    hero_image: "/assets/img/Testimonals/07.webp",
    gallery: [
      "/assets/img/Testimonals/07.webp",
      "/assets/img/Testimonals/14.webp",
      "/assets/img/Testimonals/16.webp"
    ],
    overview: "Organized by Spirit Adventures. Depart every Friday from Hyderabad (also BLR | CHE) on an overnight train journey towards Karnataka's coastal paradise. Stand before the world-famous Jog Falls (one of India's highest waterfalls), marvel at the 123-foot Shiva statue overlooking the Arabian Sea at Murudeshwar, explore Honnavar backwaters & mangrove forests, seek blessings at Udupi Sri Krishna Temple, and relax at Om Beach and Kudle Beach in Gokarna.",
    highlights: [
      "Board train from Hyderabad (Departure Every Friday | HYD | BLR | CHE)",
      "Vibuthi Falls / Apsara Konda Falls & Mangrove Forest",
      "Murudeshwar Temple & iconic Shiva statue beside the Arabian Sea",
      "Sri Mookambika Temple & Shree Krishna Temple in Udupi",
      "Sunset views along pristine Maravanthe Beach",
      "Honavar Backwaters boat cruise & Mangrove Forest walkway",
      "Jog Falls — one of India's highest plunge waterfalls",
      "Mahabaleshwar Temple, Gokarna Main Beach, Om Beach & Kudle Beach",
      "Non-AC Sleeper Class Train Tickets (Both Ways) Included"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Waterfalls & Murudeshwar",
        meals: "Coastal breakfast & dinner stops",
        activities: [
          "Board train from Hyderabad; overnight journey towards Karnataka's coast.",
          "Morning arrival; visit Vibuthi Falls / Apsara Konda Falls.",
          "Explore the natural Mangrove Forest walkway.",
          "Visit Murudeshwar Temple and the grand Shiva statue beside the Arabian Sea.",
          "Overnight stay."
        ]
      },
      {
        day: "Day 2",
        title: "Udupi Temple Tour & Beach",
        meals: "Traditional Udupi meals",
        activities: [
          "Visit sacred Sri Mookambika Temple.",
          "Darshan at Shree Krishna Temple – Udupi.",
          "Sunset stop at Maravanthe Beach with panoramic water on both sides.",
          "Overnight stay."
        ]
      },
      {
        day: "Day 3",
        title: "Honnavar & Jog Falls",
        meals: "En-route meal stops",
        activities: [
          "Scenic morning boat cruise across Honavar Backwaters.",
          "Explore dense Mangrove Forest walkways.",
          "Excursion to Jog Falls — one of India's highest waterfalls.",
          "Overnight stay."
        ]
      },
      {
        day: "Day 4",
        title: "Gokarna Beaches",
        meals: "Beach cafe lunch break",
        activities: [
          "Visit sacred Mahabaleshwar Temple.",
          "Gokarna Main Beach visit.",
          "Spend leisurely afternoon hours on Om Beach and hike to Kudle Beach.",
          "Lunch break and transfer to railway station.",
          "Overnight journey back to Hyderabad."
        ]
      }
    ],
    included: [
      "Non-AC Sleeper Class Train Tickets (Both Ways)",
      "Accommodation on Sharing Basis",
      "Local Transportation in private vehicle",
      "Trip Captain Assistance",
      "Driver Charges & Bata",
      "All Required Permits, Toll, Parking & Taxes",
      "Basic First Aid Support"
    ],
    excluded: [
      "Food Expenses",
      "Entry Tickets & Tatkal Charges",
      "GST (5%)",
      "Anything Not Mentioned in Inclusions"
    ],
    upcoming_dates: ["Every Friday Departure", "Nov 06, 2026", "Nov 13, 2026", "Nov 20, 2026", "Dec 04, 2026"]
  },
  {
    id: 5,
    title: "4D 3N Hampi & Gokarna & Dandeli Trip",
    slug: "hampi-gokarna-dandeli",
    tagline: "UNESCO Boulder Ruins, Hippie Island, Dandeli Adventure Camp & Gokarna Beach Trek",
    destination_name: "Hampi, Gokarna & Dandeli",
    destination_slug: "hampi-gokarna-dandeli",
    category_name: "Hampi & UNESCO Heritage",
    category_slug: "heritage-circuits",
    duration_days: 4,
    difficulty: "Moderate",
    max_altitude: "500 m",
    group_size: "12 - 25 Backpackers",
    price: 8999,
    discount_price: 8999,
    rating: 4.9,
    reviews_count: 340,
    is_featured: true,
    hero_image: "/assets/img/Hampi.png",
    gallery: [
      "/assets/img/Hampi.png",
      "/assets/img/Testimonals/04.png",
      "/assets/img/Testimonals/12.webp"
    ],
    overview: "Organized by Spirit Adventures (Contact / WhatsApp: 96665 67551). Package Price: ₹8,999/- + 5% GST (Ex-Hubballi: ₹7,899/- + GST | HYD/BZA/CHE: ₹8,699/- + GST | 3AC Upgrade: ₹10,499/- + GST). Departure cities: Hyderabad, Chennai, Vijayawada & more. Explore 7th-century Vijayanagara kingdom ruins and Hippie Island in Hampi, enjoy full adventure sports (boating, kayaking, zorbing, swimming), rain dance & campfire camping with meals in Dandeli, and trek the sacred cliffs from Om Beach to Kudle Beach in Gokarna.",
    highlights: [
      "Package Price: ₹8,999 + 5% GST (Ex-Hubballi: ₹7,899+GST | HYD/BZA/CHE: ₹8,699+GST)",
      "Contact / WhatsApp Hotline: 96665 67551",
      "Hampi Heritage Tour: Shri Achyutaraaya Swami Temple, Vijaya Vittala Temple & Hippie Island",
      "Dandeli Adventure Day: Boating, Kayaking, Zorbing, River Swimming, Rain Dance & Nature Walk",
      "Campsite activities: Archery, Dart Board & Badminton with Lunch & Dinner included",
      "Camping Tent Stay Experience in Dandeli (3/4 sharing)",
      "Early Morning Vibuthi Waterfalls & optional Yana Caves",
      "Honnavar Boating, Murudeshwar Temple & Mangrove Forest",
      "Mahabaleshwar Temple, Mirjan Fort, Om Beach & Kudle Beach Trek"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Hampi Heritage Tour",
        meals: "En-route breakfast and local lunch",
        activities: [
          "Reach Hubli by morning train; freshen up & start journey to Hampi.",
          "Explore Shri Achyutaraaya Swami Temple.",
          "Visit the iconic Vijaya Vittala Temple and the world-famous Stone Chariot.",
          "Explore Hippie Island across the Tungabhadra River.",
          "Night stay at Hubli hotel."
        ]
      },
      {
        day: "Day 2",
        title: "Dandeli Adventure Day",
        meals: "Breakfast, Lunch & Dinner Included",
        activities: [
          "Transfer to Dandeli; breakfast included.",
          "Adventure activities: Boating, Kayaking, Zorbing & River Swimming.",
          "Team games: Archery, Dart Board & Badminton.",
          "Rain Dance & nature walk.",
          "Campfire under the stars with night music and dinner included.",
          "Camping tent stay experience."
        ]
      },
      {
        day: "Day 3",
        title: "Gokarna Sightseeing",
        meals: "Coastal eateries stops",
        activities: [
          "Early morning 6:00 AM start to Vibuthi Waterfalls.",
          "Optional visit to massive limestone Yana Caves.",
          "Honnavar boating experience and Mangrove Forest boardwalk.",
          "Visit Murudeshwar Temple overlooking the Arabian Sea.",
          "Overnight stay at Gokarna."
        ]
      },
      {
        day: "Day 4",
        title: "Gokarna Exploration",
        meals: "Beach cafe lunch break",
        activities: [
          "Early morning visit to Mahabaleshwar Temple.",
          "Explore historical Mirjan Fort.",
          "Relax at Om Beach.",
          "Scenic cliffside trek from Om Beach to Kudle Beach.",
          "Drop at railway station; board train by 8:30 PM."
        ]
      }
    ],
    included: [
      "Sleeper Class Train Tickets (Up & Down)",
      "Local Transportation & Local Tempo Transfers",
      "1 Day Dandeli Food (Breakfast, Lunch & Dinner Included)",
      "3 Water Activities in Dandeli (Boating, Kayaking, Zorbing, River Swimming)",
      "Camping Accommodation (3/4 Sharing)",
      "First Aid Assistance",
      "Trip Organizer Support (Spirit Adventures Coordinator)"
    ],
    excluded: [
      "Food Expenses during train journey",
      "Paid Adventure Activities (1.2 KM river rafting add-on, zipline)",
      "Couple room upgrades & 3AC train upgrade",
      "Anything Not Mentioned in Inclusions"
    ],
    upcoming_dates: ["Every Thursday & Friday Departure", "Nov 05, 2026", "Nov 12, 2026", "Nov 19, 2026", "Dec 03, 2026"]
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
