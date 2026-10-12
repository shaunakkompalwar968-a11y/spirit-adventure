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
    name: "Ooty, Coonoor & Isha Circuits",
    slug: "ooty-nilgiris",
    icon: "Mountain",
    description: "Isha Adiyogi, UNESCO Nilgiri Toy Train, Dolphin's Nose, Pykara Falls & Mysore Palace."
  },
  {
    id: 6,
    name: "Munnar & Alleppey Backwaters",
    slug: "kerala-escapes",
    icon: "Waves",
    description: "Athirapally waterfalls, Kolukkumalai cloud sunrise, Alleppey houseboat & Thekkady."
  },
  {
    id: 7,
    name: "Manali, Kasol & Kashmir",
    slug: "himalayan-escapes",
    icon: "Mountain",
    description: "Solang Valley snow, Atal Tunnel, Beas river rafting, Kasol camping & Kashmir Gulmarg Gondola."
  },
  {
    id: 8,
    name: "Gangtok & Darjeeling",
    slug: "darjeeling-northeast",
    icon: "Mountain",
    description: "Tiger Hill sunrise over Mt. Kanchenjunga, Tsomgo glacial lake, Baba Mandir & Toy Train."
  },
  {
    id: 9,
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
    name: "Coorg & Wayanad",
    country: "Karnataka & Kerala, India",
    slug: "coorg-wayanad",
    image_url: "/assets/img/Testimonals/01.webp",
    description: "The Scotland of India, renowned for coffee estates, Abbey Falls, and Mandalpatti Peak.",
    best_season: "October to March",
    altitude: "900m - 1,750m",
    treks_count: 3
  },
  {
    id: 3,
    name: "Gokarna & Dandeli",
    country: "Karnataka, India",
    slug: "gokarna-dandeli-udupi",
    image_url: "/assets/img/Testimonals/02.webp",
    description: "Om Beach to Kudle Beach cliff trek, Murudeshwar colossal Shiva statue, and Mirjan Fort.",
    best_season: "October to April",
    altitude: "Sea Level",
    treks_count: 4
  },
  {
    id: 4,
    name: "Gokarna & Jog Falls",
    country: "Karnataka, India",
    slug: "gokarna-murudeshwar-udupi-jogfalls",
    image_url: "/assets/img/Testimonals/07.webp",
    description: "Jog Falls 830ft plunge, Vibuthi Falls, Murudeshwar, and Honnavar backwaters.",
    best_season: "October to April",
    altitude: "Sea Level - 450m",
    treks_count: 4
  },
  {
    id: 5,
    name: "Hampi Heritage",
    country: "Karnataka, India",
    slug: "hampi-gokarna-dandeli",
    image_url: "/assets/img/Hampi.png",
    description: "Vijayanagara boulder kingdom, monolithic Stone Chariot, and vibrant Hippie Island.",
    best_season: "October to March",
    altitude: "450m",
    treks_count: 3
  },
  {
    id: 6,
    name: "Ooty & Isha Foundation",
    country: "Tamil Nadu, India",
    slug: "isha-ooty-coonoor",
    image_url: "/assets/img/Testimonals/05.webp",
    description: "112ft Adiyogi Shiva Statue, UNESCO Nilgiri Toy Train to Coonoor & Pykara Falls.",
    best_season: "Year-round",
    altitude: "2,240m",
    treks_count: 4
  },
  {
    id: 7,
    name: "Manali & Kasol",
    country: "Himachal Pradesh, India",
    slug: "manali-kullu-kasol",
    image_url: "/assets/img/Testimonals/13.webp",
    description: "Solang Valley snow adventures, Atal Tunnel, Beas river rafting & Kasol camping.",
    best_season: "December to June",
    altitude: "2,050m - 3,050m",
    treks_count: 5
  },
  {
    id: 8,
    name: "Munnar & Thekkady",
    country: "Kerala, India",
    slug: "munnar-thekkady",
    image_url: "/assets/img/Testimonals/09.webp",
    description: "Athirapally & Cheeyappara waterfalls, Mattupetty Dam, elephant safari & Kathakali show.",
    best_season: "September to May",
    altitude: "1,600m",
    treks_count: 4
  },
  {
    id: 9,
    name: "Munnar & Alleppey",
    country: "Kerala, India",
    slug: "munnar-alleppey",
    image_url: "/assets/img/Testimonals/11.webp",
    description: "Kolukkumalai cloud sunrise, tea hills, overnight Alleppey luxury houseboat cruise.",
    best_season: "September to May",
    altitude: "Sea Level - 2,170m",
    treks_count: 4
  },
  {
    id: 10,
    name: "Ooty, Coonoor & Mysore",
    country: "Tamil Nadu & Karnataka, India",
    slug: "ooty-coonoor-mysore",
    image_url: "/assets/img/Testimonals/16.webp",
    description: "Toy train to Coonoor, Dolphin's Nose, tea factory, Mysore Palace & Brindavan Gardens.",
    best_season: "Year-round",
    altitude: "750m - 2,240m",
    treks_count: 4
  },
  {
    id: 11,
    name: "Gangtok & Darjeeling",
    country: "Sikkim & West Bengal, India",
    slug: "darjeeling-gangtok",
    image_url: "/assets/img/Testimonals/16.webp",
    description: "Tiger Hill sunrise over Mt. Kanchenjunga, Tsomgo glacial lake, Baba Mandir & Toy Train.",
    best_season: "October to May",
    altitude: "2,042m - 3,753m",
    treks_count: 5
  },
  {
    id: 12,
    name: "Coastal Karnataka & Temple Trail",
    country: "Karnataka, India",
    slug: "coastal-karnataka-temples",
    image_url: "/assets/img/Testimonals/02.webp",
    description: "Dandeli watersports, Om Beach, Murudeshwar, Udupi, Kukke Subramanya & Dharmasthala.",
    best_season: "October to April",
    altitude: "Sea Level - 950m",
    treks_count: 5
  },
  {
    id: 13,
    name: "Kashmir Paradise",
    country: "Jammu & Kashmir, India",
    slug: "kashmir-paradise",
    image_url: "/assets/img/Testimonals/13.webp",
    description: "Dal Lake houseboat & Shikara, Gulmarg Gondola to Apharwat Peak, Pahalgam & Sonmarg.",
    best_season: "Year-round (Snow Dec-May)",
    altitude: "1,585m - 3,980m",
    treks_count: 5
  },
  {
    id: 14,
    name: "Munnar, Alleppey & Varkala",
    country: "Kerala, India",
    slug: "kerala-varkala-alleppey",
    image_url: "/assets/img/Testimonals/11.webp",
    description: "Athirapally Falls, tea hills, Alleppey houseboat, Marari & Varkala cliff beaches, Jatayu.",
    best_season: "September to May",
    altitude: "Sea Level - 2,170m",
    treks_count: 5
  },
  {
    id: 15,
    name: "Manali & Delhi (Ex-HYD)",
    country: "Himachal Pradesh & Delhi, India",
    slug: "manali-delhi-hyd",
    image_url: "/assets/img/Testimonals/18.webp",
    description: "Delhi monuments, Solang snow sports, Atal Tunnel, Beas river rafting & Kasol camping.",
    best_season: "March to June",
    altitude: "216m - 3,050m",
    treks_count: 5
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
  },
  {
    id: 6,
    title: "4D 3N Isha & Ooty & Coonoor Trip",
    slug: "isha-ooty-coonoor",
    tagline: "Isha Foundation Adiyogi, Ooty Boat House, Toy Train & Coonoor Tea Gardens",
    destination_name: "Ooty, Coonoor & Isha",
    destination_slug: "isha-ooty-coonoor",
    category_name: "Ooty, Coonoor & Isha Circuits",
    category_slug: "ooty-nilgiris",
    duration_days: 4,
    difficulty: "Easy to Moderate",
    max_altitude: "2,240 m",
    group_size: "12 - 25 Backpackers",
    price: 8999,
    discount_price: 8999,
    rating: 4.9,
    reviews_count: 210,
    is_featured: true,
    hero_image: "/assets/img/Testimonals/05.webp",
    gallery: [
      "/assets/img/Testimonals/05.webp",
      "/assets/img/Testimonals/16.webp",
      "/assets/img/Testimonals/17.webp"
    ],
    overview: "Organized by Spirit Adventures. Depart every Friday from Hyderabad (Board Mysore Express from Kacheguda at 7:00 PM; also BLR & CHE pickups). Experience the mystical heights of the Nilgiris combined with spiritual serenity: explore Bandipur Forest, Needle Rock viewpoint, Pykara Waterfalls, Ooty Lake boat house, Doddabetta Peak, Tea & Chocolate factories, UNESCO Nilgiri Mountain Toy Train to Coonoor, tea estates, and a transformative visit to the Isha Foundation (Adiyogi Shiva Statue, Linga Bhairavi & Dhyanalinga) with Pine Forests and Shooting Point.",
    highlights: [
      "Board Mysore Express from Kacheguda at 7:00 PM (HYD | BLR | CHE)",
      "Mysore Palace & Bandipur National Forest drive",
      "Needle Rock View Point & roaring Pykara Waterfalls",
      "Ooty Boat House, Tea Factory & Chocolate Factory tour",
      "Doddabetta Peak, Government Botanical Garden & Rose Garden",
      "UNESCO Nilgiri Mountain Toy Train Ride & Coonoor Tea Gardens",
      "Isha Foundation visit: 112-ft Adiyogi Shiva Statue, Linga Bhairavi & Dhyanalinga",
      "Pine Forest, Shooting Point & comfortable sharing stay in Ooty",
      "Round-trip Non-AC Sleeper Class train tickets included"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Mysore & Ooty Sightseeing",
        meals: "En-route meal stops",
        activities: [
          "Board Mysore Express from Kacheguda at 7:00 PM; overnight journey.",
          "Morning arrival; drive through scenic Bandipur Forest.",
          "Visit Needle Rock View Point and Pykara Waterfalls.",
          "Visit the historic Mysore Palace.",
          "Check-in and overnight stay in Ooty."
        ]
      },
      {
        day: "Day 2",
        title: "Ooty Exploration",
        meals: "Local eateries break",
        activities: [
          "Morning visit to Ooty Boat House lake for boating.",
          "Guided tour of Tea Factory & homemade Chocolate Factory.",
          "Panoramic valley views from Doddabetta Peak.",
          "Stroll through Government Botanical Garden and Rose Garden.",
          "Overnight stay in Ooty."
        ]
      },
      {
        day: "Day 3",
        title: "Coonoor & Isha Foundation",
        meals: "Coonoor tea break & dinner",
        activities: [
          "Ride the famous UNESCO Nilgiri Mountain Toy Train to Coonoor.",
          "Walk through emerald Tea Gardens.",
          "Excursion to Isha Yoga Center Coimbatore.",
          "Darshan at the monumental 112-foot Adiyogi Shiva Statue.",
          "Meditation at Linga Bhairavi Temple & Dhyanalinga.",
          "Return to Ooty for overnight stay."
        ]
      },
      {
        day: "Day 4",
        title: "Ooty & Return Journey",
        meals: "Lunch break",
        activities: [
          "Morning walk through tall Pine Forest & Bollywood Shooting Point.",
          "Photography and local Nilgiri shopping break.",
          "Scenic return journey drive towards Bangalore / Mysore.",
          "Board overnight return train back to Hyderabad."
        ]
      }
    ],
    included: [
      "Non-AC Sleeper Class Train Tickets (Both Ways)",
      "Accommodation on Sharing Basis in Ooty",
      "Local Transportation throughout trip",
      "Toy Train Charges (Subject to Availability)",
      "Trip Guide Assistance",
      "Driver Charges & Bata",
      "Toll, Parking & Taxes",
      "Basic First Aid Support"
    ],
    excluded: [
      "Food Expenses",
      "Entry Tickets & Tatkal Charges",
      "GST (5%)",
      "Anything Not Mentioned in Inclusions"
    ],
    upcoming_dates: ["Every Friday Departure", "Nov 06, 2026", "Nov 13, 2026", "Nov 20, 2026", "Nov 27, 2026"]
  },
  {
    id: 7,
    title: "4D 3N Manali, Kullu & Kasol Group Trip",
    slug: "manali-kullu-kasol",
    tagline: "Solang Valley Snow, Atal Tunnel, Kullu River Rafting, Kasol Bonfire & Manikaran Hot Springs",
    destination_name: "Manali, Kullu & Kasol",
    destination_slug: "manali-kullu-kasol",
    category_name: "Manali & Kasol Himalayan Trips",
    category_slug: "himalayan-escapes",
    duration_days: 4,
    difficulty: "Moderate",
    max_altitude: "3,050 m",
    group_size: "10 - 25 Backpackers",
    price: 9999,
    discount_price: 9999,
    rating: 4.9,
    reviews_count: 385,
    is_featured: true,
    hero_image: "/assets/img/Testimonals/13.webp",
    gallery: [
      "/assets/img/Testimonals/13.webp",
      "/assets/img/Testimonals/18.webp",
      "/assets/img/Testimonals/20.webp"
    ],
    overview: "Organized by Spirit Adventures (Hotline / WhatsApp: 96665 67551, 70935 82116). Package Cost: ₹9,999/- Per Person Only (EX DELHI TO DELHI). Embark on the ultimate Himalayan backpacking escape covering Manali, Solang Valley, Atal Tunnel, Beas River rafting in Kullu, riverside camping in Kasol with a party bonfire & music, and sacred hot springs at Gurudwara Manikaran Sahib. Includes Volvo/tempo travel, 3-star hotel stay in Manali, tent camping in Kasol, and 3 breakfasts & 3 dinners.",
    highlights: [
      "EX DELHI TO DELHI with Volvo / Private Vehicle transfers",
      "Contact / WhatsApp Hotline: 96665 67551, 70935 82116",
      "Hadimba Devi Temple, Van Vihar, Vashisht Temple, Jogini Waterfalls & Mall Road",
      "Solang Valley Snow Excursion & Atal Tunnel Visit",
      "Adventure activities: Zipline, Skiing, ATV rides & snow play",
      "Kullu River Rafting & Paragliding thrills amidst Himalayan valleys",
      "Kasol Riverside Camping Stay with Bonfire Night, Music & Party Vibes",
      "Gurudwara Sahib Manikaran & natural healing hot water springs",
      "3-Star Hotel Stay in Manali + 3 Breakfasts & 3 Dinners included"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Manali Sightseeing",
        meals: "Dinner Included",
        activities: [
          "Arrive in Manali via scenic mountain highway; check-in at 3-star hotel and freshen up.",
          "Visit ancient cedar-wood Hadimba Devi Temple & Veer Ghatothkach Temple.",
          "Stroll through nature trails in Van Vihar and hot water springs at Vashisht Temple.",
          "Visit Ram Temple, Club House, and hike to cascading Jogini Waterfalls.",
          "Evening walk through vibrant Mall Road & Old Manali cozy cafes.",
          "Overnight stay at 3-star hotel in Manali."
        ]
      },
      {
        day: "Day 2",
        title: "Solang Valley Adventures",
        meals: "Breakfast & Dinner Included",
        activities: [
          "Morning excursion to snow-capped Solang Valley.",
          "Drive to engineering marvel Atal Tunnel (extra charges applicable).",
          "Thrill adventures available: Zipline, Skiing, ATV snow rides, and tube sliding.",
          "Capture panoramic Himalayan snow peaks and glaciers.",
          "Return to Manali for warm dinner and overnight hotel stay."
        ]
      },
      {
        day: "Day 3",
        title: "Kullu Adventure Day",
        meals: "Breakfast & Campfire Dinner Included",
        activities: [
          "Check out from Manali; drive along Beas River to Kullu valley.",
          "Optional whitewater River Rafting & high-altitude Paragliding.",
          "Local Kullu shawl shopping and handicrafts market visit.",
          "Scenic mountain drive into Parvati Valley to Kasol.",
          "Check in at riverside Kasol Camping site.",
          "Bonfire night under starry skies with music, party vibes & dinner included."
        ]
      },
      {
        day: "Day 4",
        title: "Kasol & Manikaran",
        meals: "Breakfast Included",
        activities: [
          "Morning visit to historic Gurudwara Sahib Manikaran.",
          "Experience the sacred natural boiling hot water springs & Shiv Mandir.",
          "Walk through serene pine trails of Kasol Nature Park along the Parvati River.",
          "Board Volvo / tempo for return journey to Delhi with unforgettable Himalayan memories."
        ]
      }
    ],
    included: [
      "Delhi ⇄ Manali Transportation (Volvo / Private Vehicle / Tempo)",
      "Local Transportation throughout Himachal",
      "Accommodation in 3-Star Hotel in Manali",
      "Kasol Riverside Camping Stay",
      "Bonfire Night with Music & Party Vibes",
      "3 Breakfasts & 3 Dinners Included",
      "Trip Captain Support (For 10+ Members)",
      "All Permits Included (Toll, Tax, Parking, Driver Bata & Charges)",
      "Basic First Aid Assistance"
    ],
    excluded: [
      "Atal Tunnel Charges (If Applicable)",
      "Paragliding, River Rafting & Paid Adventure Activities",
      "Entry Tickets & Monument Passes",
      "Lunch & Other Meals Not Mentioned",
      "Anything Not Mentioned in Inclusions"
    ],
    upcoming_dates: ["Every Weekend Departure", "Dec to June (Best Snow Season)", "Nov 06, 2026", "Nov 13, 2026", "Nov 20, 2026"]
  },
  {
    id: 8,
    title: "4D 3N Munnar & Thekkady Kerala Escape",
    slug: "munnar-thekkady",
    tagline: "Athirapally & Cheeyappara Falls, Eravikulam Nilgiri Tahr, Elephant Safari & Kathakali Show",
    destination_name: "Munnar & Thekkady",
    destination_slug: "munnar-thekkady",
    category_name: "Munnar & Alleppey Backwaters",
    category_slug: "kerala-escapes",
    duration_days: 4,
    difficulty: "Easy to Moderate",
    max_altitude: "1,600 m",
    group_size: "10 - 25 Backpackers",
    price: 11000,
    discount_price: 11000,
    rating: 4.9,
    reviews_count: 195,
    is_featured: true,
    hero_image: "/assets/img/Testimonals/09.webp",
    gallery: [
      "/assets/img/Testimonals/09.webp",
      "/assets/img/Testimonals/14.webp",
      "/assets/img/Testimonals/15.webp"
    ],
    overview: "Organized by The Spirit Adventures (Contact / WhatsApp: 96665 67551, 91005 82116). Package Cost: ₹11,000/- Per Person Only. Journey through God's Own Country with majestic waterfalls at Athirapally (the Niagara of India), Cheeyappara, and Valara. Climb into the rolling mist-covered tea gardens of Munnar visiting Kundala Lake, Mattupetty Dam, Echo Point, and Eravikulam National Park. Immerse in wildlife and Kerala traditions at Thekkady with elephant rides, elephant bath activity, authentic Kathakali dance performance, and Kalaripayattu martial arts show with a beach visit and shopping in Kochi.",
    highlights: [
      "Contact / WhatsApp Hotline: 96665 67551, 91005 82116",
      "Majestic waterfalls trail: Athirapally Falls, Cheeyappara & Valara Falls",
      "Kundala Lake, Mattupetty Dam & Echo Point in Munnar",
      "Eravikulam National Park (Home of Nilgiri Tahr & tea slopes)",
      "Thekkady wildlife experience: Elephant Ride & Elephant Bath Activity",
      "Cultural extravaganza: Traditional Kathakali Show & Kalaripayattu Martial Arts",
      "Kochi Beach sunset & spice/souvenir market shopping",
      "Airport / Railway Pick-up & Drop with dedicated vehicle and trip captain"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Waterfalls & Munnar",
        meals: "En-route meal stops",
        activities: [
          "Start your beautiful Kerala journey with scenic drive into Western Ghats.",
          "Visit thundering Athirapally Waterfalls (the Niagara of India).",
          "Stops at Cheeyappara Waterfalls and Valara Waterfalls.",
          "Ascend into the misty tea hills of Munnar.",
          "Check in at hotel/resort; overnight stay at Munnar."
        ]
      },
      {
        day: "Day 2",
        title: "Munnar Sightseeing",
        meals: "Local tea estate eateries",
        activities: [
          "Visit serene Kundala Lake with pedal boating.",
          "Panoramic reservoir views at Mattupetty Dam.",
          "Experience acoustic echoes across the valley at Echo Point.",
          "Explore Eravikulam National Park (Rajamalai), habitat of endangered Nilgiri Tahr.",
          "Overnight stay at Munnar."
        ]
      },
      {
        day: "Day 3",
        title: "Thekkady Experience",
        meals: "Kerala traditional cuisine",
        activities: [
          "Morning drive through aromatic cardamom and spice plantations to Thekkady.",
          "Elephant Ride Experience and Elephant Bathing activity in Periyar.",
          "Evening traditional Kathakali classical dance performance.",
          "Live thrilling Kalaripayattu martial arts demonstration.",
          "Overnight stay at Thekkady hotel."
        ]
      },
      {
        day: "Day 4",
        title: "Kochi Tour & Shopping",
        meals: "Coastal lunch break",
        activities: [
          "Morning drive to the coastal port city of Kochi.",
          "Visit Kochi Beach and iconic Chinese fishing nets.",
          "Shop for authentic Kerala banana chips, aromatic spices, and handicrafts.",
          "Departure drop at Kochi Airport / Railway station with beautiful memories."
        ]
      }
    ],
    included: [
      "Local Transportation in private dedicated vehicle",
      "Complete Local Sightseeing as per itinerary",
      "Accommodation Stay in verified hotels / resorts",
      "Trip Captain Support throughout",
      "All Permits Included (Toll, Tax, Driver Bata & Driver Charges)",
      "First Aid Assistance",
      "Airport / Railway Pick-up & Drop"
    ],
    excluded: [
      "Personal Food Expenses",
      "Entry Tickets & Paid Activities (Boating, Elephant rides, Cultural shows)",
      "Anything Not Mentioned in Inclusions"
    ],
    upcoming_dates: ["Every Weekend Departure", "Nov 06, 2026", "Nov 13, 2026", "Nov 20, 2026", "Dec 04, 2026"]
  },
  {
    id: 9,
    title: "4D 3N Munnar & Alleppey Houseboat Trip",
    slug: "munnar-alleppey",
    tagline: "Kolukkumalai Cloud Sunrise, Tea Plantations, Alleppey Houseboat Stay & Kochi Beach",
    destination_name: "Munnar & Alleppey",
    destination_slug: "munnar-alleppey",
    category_name: "Munnar & Alleppey Backwaters",
    category_slug: "kerala-escapes",
    duration_days: 4,
    difficulty: "Easy to Moderate",
    max_altitude: "2,170 m",
    group_size: "10 - 25 Backpackers",
    price: 11000,
    discount_price: 11000,
    rating: 4.9,
    reviews_count: 260,
    is_featured: true,
    hero_image: "/assets/img/Testimonals/11.webp",
    gallery: [
      "/assets/img/Testimonals/11.webp",
      "/assets/img/Testimonals/09.webp",
      "/assets/img/Testimonals/19.webp"
    ],
    overview: "Organized by The Spirit Adventures (Contact / WhatsApp: 96665 67551, 91005 82116). Package Cost: ₹11,000/- Per Person Only (EX HYD TO HYD). Experience the crown jewel of Kerala combining misty high-altitude tea trails and peaceful palm-fringed backwaters. Hike to the world's highest organic tea estate at Kolukkumalai Peak to witness an ocean of clouds at sunrise, visit Athirapally and Cheeyappara waterfalls, Mattupetty Dam, and stay overnight aboard a traditional luxury Alleppey houseboat gliding through lagoons, paddy fields, and canal villages.",
    highlights: [
      "Package Cost: ₹11,000/- Per Person Only (EX HYD TO HYD)",
      "Contact / WhatsApp Hotline: 96665 67551, 91005 82116",
      "Athirapally Waterfalls, Cheeyappara Waterfalls & Valara Waterfalls",
      "Kundala Lake, Mattupetty Dam, Echo Point & Eravikulam National Park",
      "Early morning 4x4 Jeep trek to Kolukkumalai Peak for sunrise above the clouds",
      "Overnight Stay at Alleppey Houseboat on the Vembanad backwaters",
      "Kochi Beach sunset, Chinese fishing nets & local spice shopping",
      "Dedicated transportation, verified stays, and trip captain assistance"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Waterfalls & Munnar",
        meals: "En-route breakfast & dinner stops",
        activities: [
          "Begin your Kerala journey with scenic drive from Kochi / railway pickup.",
          "Visit spectacular Athirapally Waterfalls, Cheeyappara Waterfalls & Valara Waterfalls.",
          "Drive through rolling misty tea plantations into Munnar.",
          "Check in at scenic resort/hotel; overnight stay at Munnar."
        ]
      },
      {
        day: "Day 2",
        title: "Munnar Sightseeing",
        meals: "Local tea shop & eatery stops",
        activities: [
          "Visit Kundala Lake with shikara / pedal boating.",
          "Explore Mattupetty Dam reservoir viewpoints.",
          "Shout across the hills at Echo Point.",
          "Explore Eravikulam National Park tea slopes & Nilgiri Tahr habitat.",
          "Overnight stay at Munnar."
        ]
      },
      {
        day: "Day 3",
        title: "Kolukkumalai & Alleppey",
        meals: "Houseboat Dinner Included",
        activities: [
          "Early morning 4x4 open jeep excursion to Kolukkumalai Peak (world's highest tea estate).",
          "Witness mesmerizing sunrise floating above a blanket of clouds.",
          "Scenic afternoon drive down Western Ghats to Alleppey backwaters.",
          "Check-in aboard traditional Alleppey Houseboat.",
          "Glide past emerald canals, coconut groves, and rural village life.",
          "Overnight stay aboard Alleppey Houseboat on the water."
        ]
      },
      {
        day: "Day 4",
        title: "Kochi Tour & Shopping",
        meals: "Houseboat Breakfast Included",
        activities: [
          "Enjoy fresh traditional Kerala breakfast as the boat cruises morning lagoons.",
          "Disembark and transfer to heritage coastal city of Kochi.",
          "Visit Kochi Beach, Fort Kochi, and Chinese fishing nets.",
          "Local shopping for pure spices, banana chips, and handicrafts.",
          "Departure transfer to railway station / airport."
        ]
      }
    ],
    included: [
      "Local Transportation throughout trip",
      "Complete Local Sightseeing as per itinerary",
      "Accommodation Stay in Munnar",
      "Alleppey Boat House Stay on Kerala Backwaters",
      "Trip Captain Support",
      "All Permits Included (Toll, Tax, Driver Bata & Driver Charges)",
      "First Aid Assistance",
      "Airport / Railway Pick-up & Drop"
    ],
    excluded: [
      "Personal Food Expenses during transit",
      "Entry Tickets & Paid Activities",
      "Anything Not Mentioned in Inclusions"
    ],
    upcoming_dates: ["Every Weekend Departure", "Nov 06, 2026", "Nov 13, 2026", "Nov 20, 2026", "Dec 04, 2026"]
  },
  {
    id: 10,
    title: "4D 3N Ooty & Coonoor & Mysore Trip",
    slug: "ooty-coonoor-mysore",
    tagline: "Nilgiri Toy Train, Dolphin's Nose, Pykara Falls, Mysore Palace & Brindavan Gardens",
    destination_name: "Ooty, Coonoor & Mysore",
    destination_slug: "ooty-coonoor-mysore",
    category_name: "Ooty, Coonoor & Isha Circuits",
    category_slug: "ooty-nilgiris",
    duration_days: 4,
    difficulty: "Easy to Moderate",
    max_altitude: "2,240 m",
    group_size: "12 - 25 Backpackers",
    price: 7499,
    discount_price: 7499,
    rating: 4.8,
    reviews_count: 275,
    is_featured: true,
    hero_image: "/assets/img/Testimonals/16.webp",
    gallery: [
      "/assets/img/Testimonals/16.webp",
      "/assets/img/Testimonals/05.webp",
      "/assets/img/Testimonals/01.webp"
    ],
    overview: "Organized by Spirit Adventures. Depart every Friday from Hyderabad (Board Mysore Express from Kacheguda at 7:00 PM; also BLR & CHE pickups). Cost: ₹7,499/- Per Person. Travel from the regal heritage of Mysore to the Queen of Hill Stations in the Nilgiris. Ride the historic UNESCO Toy Train from Ooty to Coonoor, visit Dolphin's Nose viewpoint, tea factories, Pykara Falls, Bandipur Forest, Shooting Point, Chamundi Hills Temple, grand Mysore Palace, and illuminated musical fountains at Brindavan Gardens.",
    highlights: [
      "Board Mysore Express from Kacheguda at 7:00 PM (Departure Every Friday | HYD | BLR | CHE)",
      "Travel: Hyderabad ↔ Hyderabad (Round-trip Non-AC Sleeper train tickets included)",
      "Bandipur National Forest safari corridor & Needle Rock View Point",
      "Pykara Waterfalls & iconic movie Shooting Point",
      "Historic UNESCO Toy Train Ride to Coonoor & Dolphin's Nose View Point",
      "Tea Gardens, Pine Forest, Tea Factory & Chocolate Factory walk",
      "Botanical Garden & scenic Ooty lake boating experience",
      "Chamundi Hills Temple, Mysore Palace & Brindavan Gardens musical fountains"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Ooty Sightseeing",
        meals: "En-route meal stops",
        activities: [
          "Board Mysore Express from Kacheguda at 7:00 PM; overnight journey.",
          "Morning arrival & freshup; scenic drive through Bandipur Forest.",
          "Visit Needle Rock View Point and Pykara Waterfalls.",
          "Visit the picturesque movie Shooting Point.",
          "Check in and overnight stay in Ooty."
        ]
      },
      {
        day: "Day 2",
        title: "Coonoor Exploration",
        meals: "Coonoor cafe break",
        activities: [
          "Board historic UNESCO Nilgiri Mountain Toy Train from Ooty to Coonoor.",
          "Panoramic valley views at Dolphin's Nose View Point.",
          "Walk through emerald Tea Gardens & Pine Forest.",
          "Tour authentic Tea Factory & homemade Chocolate Factory.",
          "Relax with a beautiful boating experience on Ooty lake.",
          "Overnight stay in Ooty."
        ]
      },
      {
        day: "Day 3",
        title: "Ooty to Mysore",
        meals: "Mysore dining stops",
        activities: [
          "Morning walk through scenic Pine Forest.",
          "Explore the rich flora at Government Botanical Garden.",
          "Scenic afternoon journey down the Western Ghats towards Mysore.",
          "Check-in and overnight stay in Mysore."
        ]
      },
      {
        day: "Day 4",
        title: "Mysore Sightseeing & Return",
        meals: "Lunch break",
        activities: [
          "Darshan at hilltop Chamundi Hills Temple.",
          "Tour the royal corridors of the world-famous Mysore Palace.",
          "Evening stroll through Brindavan Gardens & musical fountain show.",
          "Visit the royal art museum.",
          "Lunch break and return transfer to railway station.",
          "Board overnight return train back to Hyderabad."
        ]
      }
    ],
    included: [
      "Non-AC Sleeper Class Train Tickets (Both Ways)",
      "Accommodation on Sharing Basis (Ooty & Mysore)",
      "Local Transportation throughout trip",
      "Toy Train Charges (Subject to Availability)",
      "Trip Guide & Driver Charges",
      "Toll, Parking & Taxes",
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
    id: 11,
    title: "5D 4N Gangtok & Darjeeling Tour Package",
    slug: "darjeeling-gangtok",
    tagline: "Tiger Hill Sunrise, Kanchenjunga Views, Tsomgo Glacial Lake & Toy Train",
    destination_name: "Gangtok & Darjeeling",
    destination_slug: "darjeeling-gangtok",
    category_name: "Gangtok & Darjeeling",
    category_slug: "darjeeling-northeast",
    duration_days: 5,
    difficulty: "Easy to Moderate",
    max_altitude: "3,753 m (12,400 ft)",
    group_size: "2 - 15 Travelers",
    price: 34500,
    discount_price: 34500,
    rating: 4.9,
    reviews_count: 142,
    is_featured: true,
    hero_image: "/assets/img/Testimonals/16.webp",
    gallery: [
      "/assets/img/Testimonals/16.webp",
      "/assets/img/Testimonals/05.webp",
      "/assets/img/Testimonals/13.webp"
    ],
    overview: "Organized by Spirit Adventures. Package Cost: ₹34,500/- (Excluding GST) for 2 Adults. Experience the serene majesty of the Eastern Himalayas across Sikkim and West Bengal. Includes 2 Nights at The Royal Heritage (3-Star) in Gangtok and 2 Nights at The Cloudhaus (3-Star) in Darjeeling with daily Breakfast & Dinner. Journey to high-altitude glacial Tsomgo Lake (12,400 ft), Baba Mandir, optional Nathula Pass, Tiger Hill golden sunrise over Mt. Kanchenjunga, Ghoom Monastery, Batasia Loop, UNESCO Darjeeling Toy Train, tea estates, and Himalayan Mountaineering Institute.",
    highlights: [
      "Package Cost: ₹34,500/- for 2 Adults (Excluding GST)",
      "Gangtok Stay (2 Nights): The Royal Heritage 3-Star with Breakfast & Dinner",
      "Darjeeling Stay (2 Nights): The Cloudhaus 3-Star with Breakfast & Dinner",
      "Bagdogra Airport / NJP Railway Station private vehicle transfers",
      "High-altitude Tsomgo Lake (12,400 ft) & Baba Harbhajan Singh Mandir",
      "Optional Nathula Pass border snow views",
      "Tiger Hill early morning golden sunrise over Mt. Kanchenjunga",
      "Ghoom Monastery, Batasia Loop & Darjeeling Himalayan Toy Train joy ride",
      "Himalayan Mountaineering Institute & Padmaja Naidu Himalayan Zoological Park"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Gangtok Arrival",
        meals: "Dinner Included",
        activities: [
          "Pickup at Bagdogra Airport / NJP Railway Station.",
          "Scenic drive along Teesta River through emerald mountain valleys to Gangtok.",
          "Check in at The Royal Heritage (3-Star) Hotel.",
          "Evening leisure stroll through MG Marg and local Sikkim markets.",
          "Overnight stay in Gangtok."
        ]
      },
      {
        day: "Day 2",
        title: "Tsomgo Lake & Baba Mandir",
        meals: "Breakfast & Dinner Included",
        activities: [
          "Excursion to sacred glacial Tsomgo Lake at 12,400 ft altitude.",
          "Visit legendary Baba Harbhajan Singh Mandir.",
          "Optional trip to Indo-China border at Nathula Pass (subject to permits).",
          "Capture panoramic snow peaks and scenic winding mountain roads.",
          "Dinner and overnight stay in Gangtok."
        ]
      },
      {
        day: "Day 3",
        title: "Gangtok to Darjeeling",
        meals: "Breakfast & Dinner Included",
        activities: [
          "Scenic Himalayan drive from Sikkim into the tea hills of Darjeeling.",
          "Drive past cascading mountain streams and rolling tea estates.",
          "Check in at The Cloudhaus (3-Star) Hotel.",
          "Evening visit to Chowrasta, Mall Road, and local Tibetan markets.",
          "Overnight stay in Darjeeling."
        ]
      },
      {
        day: "Day 4",
        title: "Darjeeling Sightseeing",
        meals: "Breakfast & Dinner Included",
        activities: [
          "Early 4:00 AM trip to Tiger Hill for iconic sunrise over Mt. Kanchenjunga.",
          "Visit historic Ghoom Monastery and spiral Batasia Loop.",
          "Darjeeling Himalayan Toy Train joy ride through mountain vistas.",
          "Visit Himalayan Mountaineering Institute (HMI) & Padmaja Naidu Zoo.",
          "Tour a heritage tea estate and peaceful Japanese Peace Pagoda.",
          "Overnight stay in Darjeeling."
        ]
      },
      {
        day: "Day 5",
        title: "Return Journey",
        meals: "Breakfast Included",
        activities: [
          "Enjoy morning Himalayan views and fresh breakfast.",
          "Scenic descent through tea estates towards Siliguri.",
          "Transfer to Bagdogra Airport / NJP Railway Station for return journey.",
          "Return home with lifelong Himalayan memories."
        ]
      }
    ],
    included: [
      "Accommodation in 3-Star Hotels (Twin Sharing Basis)",
      "2 Nights Gangtok (The Royal Heritage) + 2 Nights Darjeeling (The Cloudhaus)",
      "Daily Breakfast & Dinner Included",
      "Private Dedicated Vehicle for all Transfers & Sightseeing",
      "Complete Local Sightseeing as per itinerary",
      "All Inner Line Permits & Taxes Included"
    ],
    excluded: [
      "Air / Train Fare",
      "Entry Tickets & Activities",
      "Nathula Pass Charges (Optional on permit)",
      "Toy Train Joy Ride Charges",
      "Lunch & Personal Expenses",
      "Room Heater Charges & GST"
    ],
    upcoming_dates: ["Daily Departures Available", "Nov 05, 2026", "Nov 12, 2026", "Nov 19, 2026", "Dec 03, 2026"]
  },
  {
    id: 12,
    title: "5D 4N Gokarna, Dandeli, Kukke & Dharmasthala Trip",
    slug: "coastal-karnataka-temples",
    tagline: "Dandeli Watersports, Om Beach, Murudeshwar, Udupi, Kukke Subramanya & Dharmasthala",
    destination_name: "Coastal Karnataka & Temple Circuit",
    destination_slug: "coastal-karnataka-temples",
    category_name: "Hampi & Temple Circuits",
    category_slug: "heritage-circuits",
    duration_days: 5,
    difficulty: "Moderate",
    max_altitude: "Sea Level - 950 m",
    group_size: "12 - 25 Backpackers",
    price: 11999,
    discount_price: 11999,
    rating: 4.9,
    reviews_count: 315,
    is_featured: true,
    hero_image: "/assets/img/Testimonals/02.webp",
    gallery: [
      "/assets/img/Testimonals/02.webp",
      "/assets/img/Testimonals/12.webp",
      "/assets/img/Testimonals/07.webp"
    ],
    overview: "Organized by THE SPIRIT ADVENTURES (Contact / WhatsApp: 96665 67551, 70935 82116). Package Cost: ₹11,999/- Per Person Only. Embark on the comprehensive 5 Days • 4 Nights Coastal Karnataka & Sacred Temple Circuit. Highlights include Dandeli Kali River watersports (Kayaking, Boating, Zorbing) with 1 day of food included, Vibhuti Waterfalls, Gokarna Mahabaleshwar Temple & Om Beach sunset, Honnavar mangrove boating, Murudeshwar Shiva Statue, Kollur Mookambika Temple, Udupi Sri Krishna Temple, Kukke Subramanya, Dharmasthala Manjunatha Temple, Horanadu Annapoorneshwari Temple, and historic Sringeri Sharada Peetham.",
    highlights: [
      "Package Cost: ₹11,999/- Per Person Only (NON-AC Train Tickets To & Fro Included)",
      "Contact / WhatsApp Hotline: 96665 67551, 70935 82116",
      "Dandeli Adventure: Kayaking, Boating, Zorbing & 1 Day Food Included",
      "Overnight Resort Stay in Dandeli",
      "Vibhuti Waterfalls, Gokarna Mahabaleshwar Temple & Om Beach Sunset",
      "Honnavar Mangrove Boating, Murudeshwar Shiva Statue & Kollur Mookambika",
      "Udupi Sri Krishna Temple & coastal Western Ghats scenic drive",
      "Sacred Temple Trail: Kukke Subramanya, Dharmasthala, Horanadu & Sringeri"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Dandeli Adventure",
        meals: "1 Day Dandeli Food Included (Breakfast, Lunch & Dinner)",
        activities: [
          "Pickup from Hubli Railway Station.",
          "Transfer to Dandeli resort; freshen up & enjoy breakfast.",
          "Exciting water activities: Kayaking, Boating, Zorbing & River Swimming.",
          "Fun-filled adventure vibes amidst lush Western Ghats forest.",
          "Campfire night and overnight resort stay at Dandeli."
        ]
      },
      {
        day: "Day 2",
        title: "Gokarna Beaches & Temples",
        meals: "Coastal eateries stop",
        activities: [
          "Early morning drive to crystal-clear Vibhuti Waterfalls.",
          "Explore sacred Gokarna coastal town.",
          "Darshan at Mahabaleshwar Temple & Ganapati Temple.",
          "Relax at crescent-shaped Om Beach with breathtaking sunset views.",
          "Overnight stay at Gokarna."
        ]
      },
      {
        day: "Day 3",
        title: "Murudeshwar & Udupi Tour",
        meals: "Local Udupi cuisine",
        activities: [
          "Scenic Honnavar backwaters mangrove boat cruise.",
          "Visit grand Murudeshwar Temple & colossal Shiva statue beside the sea.",
          "Darshan at sacred Kollur Mookambika Temple.",
          "Visit ancient Udupi Sri Krishna Temple.",
          "Experience coastal spirituality and overnight stay at Kukke."
        ]
      },
      {
        day: "Day 4",
        title: "Temple Trail & Hills",
        meals: "Temple dining stops",
        activities: [
          "Darshan at famous Kukke Subramanya Temple nestled in Kumaraparvatha foothills.",
          "Visit revered Dharmasthala Manjunatha Swamy Temple.",
          "Scenic Ghat drive to Horanadu Annapoorneshwari Temple amidst coffee hills.",
          "Overnight stay at Horanadu."
        ]
      },
      {
        day: "Day 5",
        title: "Sringeri & Return",
        meals: "Lunch break",
        activities: [
          "Darshan at the historic Sringeri Sharada Peetham Temple by Tunga River.",
          "Enjoy panoramic Western Ghats views during the scenic return drive.",
          "Drop at Hubli Railway Station with divine blessings & cherished memories."
        ]
      }
    ],
    included: [
      "NON-AC Train Tickets (To & Fro)",
      "Local Transportation in private vehicle",
      "Complete Local Sightseeing as per itinerary",
      "1 Day Food in Dandeli Included",
      "Boating, Kayaking & Zorbing in Dandeli",
      "Accommodation (Sharing Basis)",
      "Trip Captain Support throughout",
      "All Permits, Toll, Parking & Taxes Included",
      "Basic First Aid Assistance"
    ],
    excluded: [
      "Remaining Meals",
      "Personal Expenses & Extra Activities",
      "Anything Not Mentioned in Inclusions"
    ],
    upcoming_dates: ["Every Weekend Departure", "Nov 05, 2026", "Nov 12, 2026", "Nov 19, 2026", "Dec 03, 2026"]
  },
  {
    id: 13,
    title: "5D 4N Kashmir Group Trip (Gulmarg & Pahalgam)",
    slug: "kashmir-paradise",
    tagline: "Dal Lake Houseboat, Shikara Ride, Gulmarg Gondola, Apharwat Peak & Pahalgam Valleys",
    destination_name: "Kashmir (Srinagar, Gulmarg & Pahalgam)",
    destination_slug: "kashmir-paradise",
    category_name: "Manali, Kasol & Kashmir",
    category_slug: "himalayan-escapes",
    duration_days: 5,
    difficulty: "Easy to Moderate",
    max_altitude: "3,980 m (Apharwat Peak)",
    group_size: "10 - 25 Backpackers",
    price: 15999,
    discount_price: 15999,
    rating: 5.0,
    reviews_count: 410,
    is_featured: true,
    hero_image: "/assets/img/Testimonals/13.webp",
    gallery: [
      "/assets/img/Testimonals/13.webp",
      "/assets/img/Testimonals/18.webp",
      "/assets/img/Testimonals/20.webp"
    ],
    overview: "Organized by SPIRIT ADVENTURES (Contact / WhatsApp: 96665 67551). Package Cost: ₹15,999/- Per Person (EX SRINAGAR). Discover 'Heaven on Earth' across Srinagar, Gulmarg, Pahalgam, and Sonmarg. Experience an authentic Kashmiri Houseboat stay on Dal Lake with evening Shikara rides, Nishat & Shalimar Mughal Gardens, ride the world-famous Gulmarg Gondola Cable Car to snow-covered Apharwat Peak, explore the lush pine meadows and Lidder River at Chandanwari in Pahalgam, and trek Thajiwas Glacier in Sonmarg.",
    highlights: [
      "EX SRINAGAR with dedicated vehicle & trip captain support",
      "Contact / WhatsApp Hotline: 96665 67551",
      "Stay in a beautiful traditional Kashmiri Houseboat on Dal Lake",
      "Sunset Shikara Ride across Dal Lake & Floating Market",
      "Mughal Gardens (Nishat & Shalimar) & Tulip Gardens",
      "World-famous Gulmarg Gondola Cable Car to Apharwat Peak (snow play & skiing)",
      "Pahalgam: Chandanwari Valley, Anantnag Springs & rushing Lidder River",
      "Sonmarg 'Meadow of Gold' & Thajiwas Glacier expedition",
      "Breakfast & Dinner included daily throughout trip",
      "Authentic Kashmiri market shopping: Pashmina shawls, saffron & dry fruits"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Srinagar Exploration",
        meals: "Dinner Included",
        activities: [
          "Arrival at Srinagar Airport; transfer to Dal Lake.",
          "Check in at traditional Kashmiri Houseboat.",
          "Visit famous Mughal Gardens (Nishat & Shalimar) and vibrant Tulip Gardens.",
          "Evening relaxing Shikara ride on peaceful Dal Lake waters.",
          "Explore local Srinagar City Market and enjoy Kashmiri dinner aboard houseboat."
        ]
      },
      {
        day: "Day 2",
        title: "Gulmarg Adventure",
        meals: "Breakfast & Dinner Included",
        activities: [
          "Drive through pine valleys to Gulmarg 'Meadow of Flowers'.",
          "Board iconic Gondola Cable Car ride to Apharwat Peak.",
          "Enjoy snow sports, skiing, pony rides & mountain photography.",
          "Witness vast blanket of white snow & panoramic Himalayan views.",
          "Overnight stay at Gulmarg / Srinagar hotel."
        ]
      },
      {
        day: "Day 3",
        title: "Pahalgam Sightseeing",
        meals: "Breakfast & Dinner Included",
        activities: [
          "Scenic drive past saffron fields and willow trees to Pahalgam.",
          "Explore Chandanwari Valley and sacred Anantnag Springs.",
          "Stroll along crystal-clear Lidder River and shepherd meadows.",
          "Lush green valleys, roaring rivers, and serene mountain beauty.",
          "Overnight stay in Pahalgam."
        ]
      },
      {
        day: "Day 4",
        title: "Sonmarg Exploration",
        meals: "Breakfast & Dinner Included",
        activities: [
          "Full-day excursion to Sonmarg 'Meadow of Gold'.",
          "Pony trek / excursion to Thajiwas Glacier surrounded by towering snow caps.",
          "Explore scenic Baltal Valley.",
          "Capture breathtaking mountain landscapes and glaciers.",
          "Overnight stay."
        ]
      },
      {
        day: "Day 5",
        title: "Local Markets & Return",
        meals: "Breakfast Included",
        activities: [
          "Explore famous Kashmiri local handicraft markets.",
          "Shop for authentic Pashmina shawls, walnut wood souvenirs, dry fruits, and saffron.",
          "Final photo moments in the paradise of India.",
          "Departure transfer to Srinagar Airport for onward journey."
        ]
      }
    ],
    included: [
      "Local Transportation in private vehicle",
      "Complete Local Sightseeing as per itinerary",
      "Accommodation on Sharing Basis (Houseboat + Hotels)",
      "Daily Breakfast & Dinner Included",
      "Shikara Ride in Dal Lake",
      "Trip Captain Support throughout",
      "All Permits Included",
      "Driver Charges, Bata, Parking, Toll & Taxes Included",
      "Basic First Aid Assistance"
    ],
    excluded: [
      "Airfare to / from Srinagar",
      "Entry Tickets & Adventure Activities",
      "Gondola Cable Ride Charges",
      "Pony Ride Charges",
      "Lunch & Personal Expenses"
    ],
    upcoming_dates: ["Every Weekend Departure", "Year-round (Best Snow Dec-May)", "Nov 06, 2026", "Nov 13, 2026", "Nov 20, 2026"]
  },
  {
    id: 14,
    title: "5D 4N Kerala Grand Escape (Munnar, Alleppey, Varkala & Jatayu)",
    slug: "kerala-varkala-alleppey",
    tagline: "Athirapally Falls, Munnar Tea Valleys, Alleppey Houseboat, Varkala Cliff & Jatayu Earth Center",
    destination_name: "Munnar, Alleppey & Varkala",
    destination_slug: "kerala-varkala-alleppey",
    category_name: "Munnar, Alleppey & Varkala",
    category_slug: "kerala-escapes",
    duration_days: 5,
    difficulty: "Easy to Moderate",
    max_altitude: "2,170 m",
    group_size: "10 - 25 Backpackers",
    price: 14200,
    discount_price: 14200,
    rating: 4.9,
    reviews_count: 290,
    is_featured: true,
    hero_image: "/assets/img/Testimonals/11.webp",
    gallery: [
      "/assets/img/Testimonals/11.webp",
      "/assets/img/Testimonals/09.webp",
      "/assets/img/Testimonals/14.webp"
    ],
    overview: "Organized by THE SPIRIT ADVENTURES (Contact / WhatsApp: 96665 67551). Package Cost: ₹14,200/- Per Person Only (EX HYDERABAD with round-trip Non-AC Sleeper train tickets included). Embark on the comprehensive 5 Days • 5 Nights Kerala Grand Escape covering misty mountain peaks, world-famous waterfalls, tranquil backwaters, bohemian coastal cliffs, and cultural landmarks. Highlights include Athirappilly & Cheeyappara Waterfalls, Munnar tea hills, Mattupetty Dam, early morning Kolukkumalai sunrise above the clouds, overnight stay aboard traditional Alleppey Houseboat on Vembanad Lake, Marari & Varkala cliff beaches, Jatayu Earth Center, and Sri Padmanabhaswamy Temple in Trivandrum.",
    highlights: [
      "Package Cost: ₹14,200/- Per Person Only (EX HYDERABAD)",
      "Non-AC Sleeper Class Train Tickets (To & Fro) Included",
      "Contact / WhatsApp Hotline: 96665 67551",
      "Athirappilly Waterfalls, Cheeyappara & Valara Falls",
      "Traditional Kathakali Classical Show in Munnar",
      "Mattupetty Dam, Echo Point & Eravikulam National Park",
      "Kolukkumalai Peak sunrise above the clouds",
      "Overnight Stay aboard traditional Alleppey Houseboat on Vembanad Lake",
      "Pristine sands of Marari Beach & dramatic red cliffs of Varkala Beach",
      "Jatayu Earth Center (World's Largest Bird Sculpture) & Sri Padmanabhaswamy Temple"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Waterfalls & Cultural Experience",
        meals: "En-route meal stops",
        activities: [
          "Arrival in Kerala; start journey with Athirappilly Waterfalls.",
          "Visit roaring Cheeyappara Waterfalls & Valara Waterfalls.",
          "Scenic ascent into mist-covered Munnar tea mountains.",
          "Evening traditional Kathakali cultural show.",
          "Overnight stay in Munnar."
        ]
      },
      {
        day: "Day 2",
        title: "Munnar Sightseeing",
        meals: "Tea estate dining stops",
        activities: [
          "Visit Kundala Lake with pedal boating.",
          "Explore Mattupetty Dam reservoir viewpoints.",
          "Shout across the valley at Echo Point.",
          "Explore Eravikulam National Park (Rajamalai) tea plantations and cool climate.",
          "Overnight stay in Munnar."
        ]
      },
      {
        day: "Day 3",
        title: "Kolukkumalai & Alleppey Houseboat",
        meals: "Houseboat Dinner Included",
        activities: [
          "Early morning 4x4 open jeep safari to Kolukkumalai Peak.",
          "Witness breathtaking sunrise above an ocean of clouds.",
          "Scenic afternoon drive down Western Ghats to Alleppey backwaters.",
          "Visit Vembanad Lake and Alleppey Beach.",
          "Board traditional Alleppey Boat House for backwater cruise & overnight stay."
        ]
      },
      {
        day: "Day 4",
        title: "Beach Day (Marari & Varkala)",
        meals: "Houseboat Breakfast Included",
        activities: [
          "Enjoy morning cruise breakfast on Vembanad backwaters.",
          "Visit pristine white sands of Marari Beach.",
          "Drive south along the coast to famous Varkala Cliff Beach.",
          "Relax by the sea, enjoy cliff views, bohemian cafes & stunning sunset.",
          "Overnight stay in Varkala."
        ]
      },
      {
        day: "Day 5",
        title: "Trivandrum & Jatayu Exploration",
        meals: "Lunch break",
        activities: [
          "Excursion to Jatayu Earth Center (world's largest bird sculpture).",
          "Relax at Samudra Beach in Kovalam.",
          "Darshan at the sacred Sri Padmanabhaswamy Temple in Trivandrum.",
          "Transfer to railway station; board return train to Hyderabad."
        ]
      }
    ],
    included: [
      "Non-AC Sleeper Class Train Tickets (To & Fro - Hyderabad ↔ Kerala)",
      "Local Transportation in private dedicated vehicle",
      "Complete Local Sightseeing as per itinerary",
      "Accommodation on Sharing Basis",
      "Alleppey Boat House Stay with meals",
      "Trip Captain Support throughout",
      "All Permits, Driver Bata, Parking, Toll & Taxes Included",
      "Basic First Aid Assistance"
    ],
    excluded: [
      "Food Expenses during transit",
      "Entry Tickets & Paid Activities (Jatayu cable car, temple passes)",
      "Personal Expenses",
      "Anything Not Mentioned in Inclusions"
    ],
    upcoming_dates: ["Every Friday Departure", "Nov 06, 2026", "Nov 13, 2026", "Nov 20, 2026", "Dec 04, 2026"]
  },
  {
    id: 15,
    title: "5D 4N Manali, Kullu & Kasol Trip (Ex-Hyderabad via Delhi)",
    slug: "manali-delhi-hyd",
    tagline: "Delhi Monuments, Manali Solang Snow, Atal Tunnel, Beas Rafting & Kasol Riverside Bonfire",
    destination_name: "Manali & Delhi",
    destination_slug: "manali-delhi-hyd",
    category_name: "Manali, Kasol & Kashmir",
    category_slug: "himalayan-escapes",
    duration_days: 5,
    difficulty: "Moderate",
    max_altitude: "3,050 m",
    group_size: "10 - 25 Backpackers",
    price: 13999,
    discount_price: 13999,
    rating: 4.9,
    reviews_count: 360,
    is_featured: true,
    hero_image: "/assets/img/Testimonals/18.webp",
    gallery: [
      "/assets/img/Testimonals/18.webp",
      "/assets/img/Testimonals/13.webp",
      "/assets/img/Testimonals/20.webp"
    ],
    overview: "Organized by Spirit Adventures (Contact / WhatsApp: 96665 67551, 70935 82116). Package Cost: ₹13,999/- Per Person Only (EX HYD TO HYD). Experience the quintessential Himalayan backpacking trip departing seamlessly from Hyderabad. Connect via Delhi with optional sightseeing at India Gate, Red Fort, and Lotus Temple before boarding an AC Volvo coach into Himachal. Features Hadimba Temple, Jogini Falls, Solang Valley snow adventures, Atal Tunnel, Beas River rafting in Kullu, riverside camping in Kasol with a lively party bonfire & music, and hot springs at Gurudwara Manikaran Sahib.",
    highlights: [
      "Package Cost: ₹13,999/- Per Person Only (EX HYD TO HYD)",
      "Contact / WhatsApp Hotline: 96665 67551, 70935 82116",
      "Optional Delhi Sightseeing: India Gate, Red Fort, Lotus Temple, Qutub Minar",
      "Overnight Delhi ⇄ Manali AC Volvo / Tempo travel",
      "Hadimba Devi Temple, Van Vihar, Vashisht Temple & Jogini Waterfalls",
      "Solang Valley snow excursion & engineering marvel Atal Tunnel",
      "Adventure sports: Zipline, Skiing, ATV rides, and Beas river rafting",
      "Riverside Kasol Camping Stay with Bonfire Night, Music & Party Vibes",
      "Gurudwara Sahib Manikaran natural sulfur hot water springs",
      "3-Star Hotel Stay in Manali + 3 Breakfasts & 3 Dinners included"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Delhi to Manali Journey",
        meals: "En-route stops",
        activities: [
          "Arrive in Delhi from Hyderabad.",
          "Optional Delhi sightseeing: India Gate, Red Fort, Lotus Temple, Agrasen Ki Baoli & Qutub Minar.",
          "Board evening AC Volvo coach; begin exciting overnight journey into the breathtaking hills of Manali.",
          "Enjoy scenic mountain roads, cool breeze, and travel vibes with your gang."
        ]
      },
      {
        day: "Day 2",
        title: "Manali Local Sightseeing",
        meals: "Dinner Included",
        activities: [
          "Morning arrival in Manali; check in at 3-star hotel and freshen up.",
          "Visit ancient Hadimba Devi Temple & Veer Ghatothkach Temple.",
          "Stroll through pine trails in Van Vihar and hot springs at Vashisht Temple.",
          "Visit Ram Temple, Club House, and hike to Jogini Waterfalls.",
          "Evening shopping at Mall Road & cozy Old Manali cafes.",
          "Overnight stay at 3-star hotel in Manali."
        ]
      },
      {
        day: "Day 3",
        title: "Solang Valley Adventures",
        meals: "Breakfast & Dinner Included",
        activities: [
          "Morning excursion to snow-clad Solang Valley.",
          "Drive through Atal Tunnel (extra charges applicable).",
          "Adventure activities: Zipline, Skiing, ATV rides, and snow tubing.",
          "Capture breathtaking snow views & thrilling adventure moments.",
          "Dinner and overnight stay in Manali."
        ]
      },
      {
        day: "Day 4",
        title: "Kullu & Kasol Experience",
        meals: "Breakfast & Campfire Dinner Included",
        activities: [
          "Check out and drive along Beas River towards Kullu.",
          "Optional whitewater River Rafting & high-altitude Paragliding.",
          "Kullu shawl market & local handicrafts shopping.",
          "Scenic mountain drive into Parvati Valley to Kasol.",
          "Check-in at Kasol riverside camping; bonfire night with music, fun & party vibes.",
          "Overnight stay at Kasol camping."
        ]
      },
      {
        day: "Day 5",
        title: "Kasol & Return Journey",
        meals: "Breakfast Included",
        activities: [
          "Morning walk through tall pine trails of Kasol Nature Park.",
          "Visit sacred Gurudwara Sahib Manikaran and healing natural hot water springs.",
          "Visit Shiv Mandir.",
          "Capture final photos with your travel gang.",
          "Board Volvo for return journey to Delhi with lifelong memories."
        ]
      }
    ],
    included: [
      "Delhi ⇄ Manali Transportation (Volvo / Private Vehicle / Tempo)",
      "Local Transportation throughout Himachal",
      "Complete Local Sightseeing as per itinerary",
      "Accommodation in 3-Star Hotels in Manali",
      "Kasol Riverside Camping Stay",
      "Bonfire Night with Music & Party Vibes",
      "3 Breakfasts & 3 Dinners Included",
      "Trip Captain Support (For 10+ Members)",
      "All Permits, Toll, Tax, Parking, Driver Bata Included",
      "Basic First Aid Assistance"
    ],
    excluded: [
      "Train / Flight to & from Delhi",
      "Atal Tunnel Charges (If Applicable)",
      "Paragliding, River Rafting & Paid Activities",
      "Entry Tickets & Adventure Activities",
      "Lunch & Other Meals Not Mentioned"
    ],
    upcoming_dates: ["Every Weekend Departure", "March to June (Best Weather & Snow)", "Nov 06, 2026", "Nov 13, 2026", "Nov 20, 2026"]
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
