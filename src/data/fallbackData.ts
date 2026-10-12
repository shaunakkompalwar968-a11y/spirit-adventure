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
  },
  {
    id: 16,
    name: "Meghalaya & Shillong",
    country: "Meghalaya, India",
    slug: "meghalaya",
    image_url: "/assets/img/Testimonals/19.webp",
    description: "Double Decker Living Root Bridge, crystal clear Dawki River, Cherrapunji caves & Mawlynnong.",
    best_season: "September to May",
    altitude: "1,496m",
    treks_count: 5
  },
  {
    id: 17,
    name: "Ooty & Kodaikanal",
    country: "Tamil Nadu, India",
    slug: "ooty-kodaikanal",
    image_url: "/assets/img/Testimonals/15.webp",
    description: "UNESCO Nilgiri Toy Train, Isha Foundation Adiyogi laser show, Pillar Rocks & Kodai Lake.",
    best_season: "Year-round",
    altitude: "2,133m - 2,240m",
    treks_count: 5
  },
  {
    id: 18,
    name: "Delhi, Shimla & Manali",
    country: "Himachal Pradesh & Delhi, India",
    slug: "shimla-manali",
    image_url: "/assets/img/Testimonals/20.webp",
    description: "UNESCO Kalka-Shimla Toy Train, Kufri Valley, Solang snow sports & Jogini Waterfalls.",
    best_season: "Year-round (Snow Dec-April)",
    altitude: "216m - 2,276m",
    treks_count: 5
  },
  {
    id: 19,
    name: "Coorg Weekend",
    country: "Karnataka, India",
    slug: "coorg-weekend",
    image_url: "/assets/img/Testimonals/01.webp",
    description: "Namdroling Golden Temple, Harangi Elephant Camp, Mandalpatti Peak & Abbey Falls.",
    best_season: "October to March",
    altitude: "900m - 1,750m",
    treks_count: 3
  },
  {
    id: 20,
    name: "Dandeli Weekend",
    country: "Karnataka, India",
    slug: "dandeli-weekend",
    image_url: "/assets/img/Testimonals/12.webp",
    description: "Boating, kayaking, zorbing, swimming pool, rain dance & campfire night resort stay.",
    best_season: "October to May",
    altitude: "473m",
    treks_count: 3
  },
  {
    id: 21,
    name: "Gokarna & Murudeshwar",
    country: "Karnataka, India",
    slug: "gokarna-murudeshwar-2d",
    image_url: "/assets/img/Testimonals/07.webp",
    description: "Vibhuti Falls, Honnavar mangrove boating, Murudeshwar Shiva temple & Nirvana Beach camping.",
    best_season: "October to May",
    altitude: "Sea Level - 150m",
    treks_count: 3
  },
  {
    id: 22,
    name: "Hampi Adventure",
    country: "Karnataka, India",
    slug: "hampi-weekend",
    image_url: "/assets/img/Hampi.png",
    description: "Cliff jumping, coracle boat ride, Anegundi Fort, Anjanadri Temple, Vijaya Vittala & Virupaksha.",
    best_season: "October to March",
    altitude: "450m",
    treks_count: 3
  },
  {
    id: 23,
    name: "Munnar & Athirappilly",
    country: "Kerala, India",
    slug: "munnar-2d",
    image_url: "/assets/img/Testimonals/09.webp",
    description: "Athirappilly Falls, tea factory, Mattupetty Dam, Kalaripayattu martial arts, sunrise jeep safari & Fort Kochi.",
    best_season: "September to May",
    altitude: "Sea Level - 1,600m",
    treks_count: 4
  },
  {
    id: 24,
    name: "Chikmagalur",
    country: "Karnataka, India",
    slug: "chikmagalur",
    image_url: "/assets/img/Testimonals/08.webp",
    description: "Mullayanagiri (highest peak in Karnataka), Baba Budangiri, Jhari Falls, Hebbe Falls & Belur Temple.",
    best_season: "Year-round",
    altitude: "1,090m - 1,930m",
    treks_count: 4
  },
  {
    id: 25,
    name: "Coorg & Chikmagalur",
    country: "Karnataka, India",
    slug: "coorg-chikmagalur",
    image_url: "/assets/img/Testimonals/03.webp",
    description: "Namdroling Golden Temple, Mandalpatti Peak, Abbey Falls, Belur Temple & Mullayanagiri Peak.",
    best_season: "October to April",
    altitude: "900m - 1,930m",
    treks_count: 4
  },
  {
    id: 26,
    name: "Coorg Scotland of India",
    country: "Karnataka, India",
    slug: "coorg-3d",
    image_url: "/assets/img/Testimonals/01.webp",
    description: "Golden Temple, Harangi Elephant Camp, Raja's Seat, Abbey Falls, Mandalpatti Jeep Ride, Coffee plantation & Madikeri Fort.",
    best_season: "October to March",
    altitude: "900m - 1,750m",
    treks_count: 4
  },
  {
    id: 27,
    name: "Goa Beaches & Heritage",
    country: "Goa, India",
    slug: "goa",
    image_url: "/assets/img/Testimonals/14.webp",
    description: "North Goa beaches, Aguada & Chapora Forts, water sports, Tito's Lane nightlife, Old Goa churches & Mangueshi Temple.",
    best_season: "October to May",
    altitude: "Sea Level - 100m",
    treks_count: 3
  },
  {
    id: 28,
    name: "Gokarna & Dandeli Express",
    country: "Karnataka, India",
    slug: "gokarna-dandeli-3d",
    image_url: "/assets/img/Testimonals/12.webp",
    description: "Kali River rafting, kayaking, zorbing, camping & rain dance plus Murudeshwar, Vibhuti Falls, Mirjan Fort & Om Beach.",
    best_season: "October to May",
    altitude: "Sea Level - 473m",
    treks_count: 4
  },
  {
    id: 29,
    name: "Gokarna & Jog Falls Express",
    country: "Karnataka, India",
    slug: "gokarna-jogfalls-3d",
    image_url: "/assets/img/Testimonals/07.webp",
    description: "Jog Falls 830ft plunge, Vibhuti Falls, Honnavar mangrove boat ride, Murudeshwar Shiva Statue, Mirjan Fort & Kudle Beach.",
    best_season: "October to May",
    altitude: "Sea Level - 450m",
    treks_count: 3
  },
  {
    id: 30,
    name: "Gokarna & Udupi Express",
    country: "Karnataka, India",
    slug: "gokarna-udupi-3d",
    image_url: "/assets/img/Testimonals/02.webp",
    description: "Vibhuti/Apsara Konda Falls, Honnavar mangroves, Murudeshwar, Kollur Mookambika, Udupi Sri Krishna, Maravanthe Beach & Om Beach.",
    best_season: "October to May",
    altitude: "Sea Level - 150m",
    treks_count: 3
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
  },
  {
    id: 16,
    title: "5D 4N Meghalaya Group Trip (Shillong & Cherrapunji)",
    slug: "meghalaya-escape",
    tagline: "Double Decker Root Bridge, Dawki River, Nohkalikai Falls & Mawlynnong Cleanest Village",
    destination_name: "Meghalaya & Shillong",
    destination_slug: "meghalaya",
    category_name: "Gangtok, Darjeeling & Northeast",
    category_slug: "darjeeling-northeast",
    duration_days: 5,
    difficulty: "Moderate",
    max_altitude: "1,496 m",
    group_size: "10 - 25 Backpackers",
    price: 12800,
    discount_price: 12800,
    rating: 5.0,
    reviews_count: 220,
    is_featured: true,
    hero_image: "/assets/img/Testimonals/19.webp",
    gallery: [
      "/assets/img/Testimonals/19.webp",
      "/assets/img/Testimonals/09.webp",
      "/assets/img/Testimonals/11.webp"
    ],
    overview: "Organized by THE SPIRIT ADVENTURES (Contact / WhatsApp: 96665 67551). Package Cost: ₹12,800/- Per Person Only (EX MEGHALAYA). Embark on the 5 Days • 4 Nights Northeast Escape across the abode of clouds. Trek the iconic Double Decker Living Root Bridge in Nongriat, boat on the crystal clear waters of Dawki River along the India-Bangladesh border, explore Asia's cleanest village at Mawlynnong, and witness roaring waterfalls (Nohkalikai, Seven Sisters, Wei Sawdong, Elephant Falls) and mystical caves (Mawsmai & Arwah) in Cherrapunji.",
    highlights: [
      "EX MEGHALAYA with dedicated transportation & trip captain support",
      "Contact / WhatsApp Hotline: 96665 67551",
      "Umiam Lake & scenic Shillong hill station sightseeing",
      "Cherrapunji Waterfalls: Nohkalikai Falls, Seven Sisters Falls & Wei Sawdong Falls",
      "Elephant Falls & panoramic valley viewpoints",
      "Explore mystical Arwah Caves & Mawsmai limestone caves",
      "Trek to the world-famous Double Decker Living Root Bridge in Nongriat",
      "Mawlynnong — Asia's Cleanest Village & Single Living Root Bridge",
      "Crystal clear transparent waters of Dawki River with boating & Shnongpdeng",
      "Visit India–Bangladesh Border"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Shillong Exploration",
        meals: "Local cuisine stops",
        activities: [
          "Arrival and transfer to Shillong.",
          "Visit picturesque Umiam Lake surrounded by lush pine hills.",
          "Shillong local sightseeing and scenic viewpoints.",
          "Enjoy cool weather, cloudy mountain vistas, and tranquil Northeast landscapes.",
          "Check in and overnight stay in Shillong."
        ]
      },
      {
        day: "Day 2",
        title: "Cherrapunji Waterfalls & Caves",
        meals: "En-route meal stops",
        activities: [
          "Morning drive to Cherrapunji (Sohra).",
          "Visit multi-tiered Elephant Falls and panoramic Meghalaya valley viewpoints.",
          "Marvel at majestic Nohkalikai Falls (India's tallest plunge waterfall).",
          "Visit Seven Sisters Falls and tiered Wei Sawdong Waterfalls.",
          "Explore prehistoric limestone formations at Mawsmai Caves and Arwah Caves.",
          "Overnight stay in Cherrapunji."
        ]
      },
      {
        day: "Day 3",
        title: "Nongriat Trek Adventure",
        meals: "Village trail meals",
        activities: [
          "Begin thrilling trek down into the tropical valley of Nongriat.",
          "Trek to the world-famous Double Decker Living Root Bridge bio-engineering marvel.",
          "Visit peaceful local village church and crystal forest streams.",
          "Explore untouched Meghalaya tribal hamlets and lush nature trails.",
          "Overnight stay in Nongriat / Cherrapunji."
        ]
      },
      {
        day: "Day 4",
        title: "Dawki & Mawlynnong",
        meals: "Traditional border meals",
        activities: [
          "Drive to Mawlynnong — celebrated as Asia's Cleanest Village.",
          "Explore the village living root bridge and eco balancing rock.",
          "Transfer to Dawki River along the India-Bangladesh border.",
          "Experience unforgettable boating on crystal clear, glass-like transparent waters.",
          "Explore adventurous campsite village Shnongpdeng.",
          "Overnight stay."
        ]
      },
      {
        day: "Day 5",
        title: "Return with Memories",
        meals: "Breakfast Included",
        activities: [
          "Explore more peaceful corners of Mawlynnong and Dawki River viewpoints.",
          "Capture final photos amidst Meghalaya's lush emerald green hills.",
          "Return transfer for departure with unforgettable memories and adventure vibes."
        ]
      }
    ],
    included: [
      "Local Transportation throughout trip",
      "Complete Local Sightseeing as per itinerary",
      "Accommodation (Sharing Basis)",
      "Trip Captain Support throughout",
      "All Permits Included",
      "Driver Charges, Bata, Parking, Toll & Taxes Included",
      "Basic First Aid Assistance"
    ],
    excluded: [
      "Food Expenses",
      "Entry Tickets & Paid Activities (Dawki boating, cave passes)",
      "Personal Expenses",
      "Anything Not Mentioned in Inclusions"
    ],
    upcoming_dates: ["Every Weekend Departure", "Oct to May (Best Season)", "Nov 06, 2026", "Nov 13, 2026", "Nov 20, 2026"]
  },
  {
    id: 17,
    title: "5D 4N Ooty & Kodaikanal Group Trip",
    slug: "ooty-kodaikanal-group",
    tagline: "Nilgiri Toy Train, Isha Foundation Adiyogi Laser Show, Pillar Rocks & Kodai Lake",
    destination_name: "Ooty & Kodaikanal",
    destination_slug: "ooty-kodaikanal",
    category_name: "Ooty, Coonoor & Isha Circuits",
    category_slug: "ooty-nilgiris",
    duration_days: 5,
    difficulty: "Easy",
    max_altitude: "2,240 m",
    group_size: "10 - 25 Backpackers",
    price: 11999,
    discount_price: 11999,
    rating: 4.9,
    reviews_count: 245,
    is_featured: true,
    hero_image: "/assets/img/Testimonals/15.webp",
    gallery: [
      "/assets/img/Testimonals/15.webp",
      "/assets/img/Testimonals/05.webp",
      "/assets/img/Testimonals/16.webp"
    ],
    overview: "Organized by The Spirit Adventures (Contact / WhatsApp: 96665 67551). Package Cost: ₹11,999/- Per Person Only (Round-trip Sleeper Class Train Tickets Included). Experience the premier 5 Days • 4 Nights Hill Station Escape combining Ooty, Isha Foundation, and Kodaikanal. Ride the historic UNESCO Toy Train, visit Doddabetta Peak, Pykara Falls, Botanical Gardens, immerse in spiritual energy with the 112-ft Adiyogi Statue & spectacular Laser Show at Isha Foundation, and discover Kodaikanal's mist-covered Pillar Rocks, Guna Caves, Pine Forest, and serene Kodai Lake.",
    highlights: [
      "Round-trip Sleeper Class Train Tickets Included",
      "Contact / WhatsApp Hotline: 96665 67551",
      "Bandipur Forest wildlife drive & Pykara Waterfalls",
      "Ooty Boat House, Tea Factory & Homemade Chocolate Factory",
      "Doddabetta Peak, Botanical Garden & Rose Garden",
      "UNESCO Nilgiri Mountain Toy Train Joy Ride (Subject to availability)",
      "Isha Foundation: 112ft Adiyogi Statue, Dhyanalinga & Spectacular Laser Show",
      "Kodaikanal: Pillar Rocks, Silent Valley, Guna Caves & Pine Forest",
      "Echo Point, Kodai Lake boating, Bryant Park & Vattakanal Waterfalls",
      "Dedicated trip captain & verified hotel stays"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Journey to Ooty",
        meals: "En-route meal stops",
        activities: [
          "Board train; morning arrival and scenic drive through Bandipur Forest.",
          "Visit roaring Pykara Waterfalls and iconic movie Shooting Point.",
          "Enjoy scenic mountain roads, cool pine breeze, and tea estate views.",
          "Check in and overnight stay in Ooty."
        ]
      },
      {
        day: "Day 2",
        title: "Ooty Sightseeing",
        meals: "Local hill dining stops",
        activities: [
          "Morning pedal / row boating at Ooty Boat House lake.",
          "Guided tour of authentic Tea Factory and homemade Chocolate Factory.",
          "Panoramic valley views from Doddabetta Peak (highest Nilgiri point).",
          "Stroll through blooming Government Botanical Garden and Rose Garden.",
          "Overnight stay in Ooty."
        ]
      },
      {
        day: "Day 3",
        title: "Isha Foundation Experience",
        meals: "Temple dining stops",
        activities: [
          "Ride the famous UNESCO Nilgiri Mountain Toy Train (subject to availability).",
          "Walk through emerald Tea Gardens.",
          "Visit Isha Yoga Center Coimbatore.",
          "Darshan at Linga Bhairavi Temple and deep meditation in Dhyanalinga.",
          "Marvel at the colossal 112-ft Adiyogi Shiva Statue.",
          "Witness the spectacular evening Adiyogi Divya Rupa 3D Laser Show.",
          "Overnight stay near Isha / Coimbatore."
        ]
      },
      {
        day: "Day 4",
        title: "Kodaikanal Exploration",
        meals: "Kodai cafe stops",
        activities: [
          "Scenic mountain drive into Princess of Hill Stations — Kodaikanal.",
          "Marvel at dramatic vertical cliff formations at Pillar Rocks.",
          "View deep Silent Valley and explore mysterious Guna Caves.",
          "Walk through towering ancient Pine Forests and shout across Echo Point.",
          "Evening leisurely stroll around star-shaped Kodai Lake.",
          "Overnight stay in Kodaikanal."
        ]
      },
      {
        day: "Day 5",
        title: "Kodaikanal & Return",
        meals: "Breakfast Included",
        activities: [
          "Stroll through landscaped flowerbeds at Bryant Park.",
          "Visit cascading Vattakanal Waterfalls.",
          "Explore cozy Tibetan cafes, homemade chocolate shops, and essential oil boutiques.",
          "Transfer to railway station; board return train home with cherished memories."
        ]
      }
    ],
    included: [
      "Sleeper Class Train Tickets (Round Trip)",
      "Accommodation Stay on Sharing Basis",
      "Local Transportation in private vehicle",
      "Complete Local Sightseeing as per itinerary",
      "Trip Captain Support (10 Members Minimum)",
      "Toy Train Tickets (Subject to Availability)",
      "All Permits, Toll, Tax, Driver Bata & Driver Charges Included",
      "First Aid Assistance"
    ],
    excluded: [
      "Food Expenses",
      "Entry Tickets & Activities",
      "Anything Not Mentioned in Inclusions"
    ],
    upcoming_dates: ["Every Weekend Departure", "Nov 06, 2026", "Nov 13, 2026", "Nov 20, 2026", "Dec 04, 2026"]
  },
  {
    id: 18,
    title: "5D 4N Delhi, Shimla & Manali Group Trip",
    slug: "delhi-shimla-manali",
    tagline: "UNESCO Kalka-Shimla Toy Train, Kufri Valley, Solang Snow Adventures & Jogini Falls",
    destination_name: "Delhi, Shimla & Manali",
    destination_slug: "shimla-manali",
    category_name: "Manali, Kasol & Kashmir",
    category_slug: "himalayan-escapes",
    duration_days: 5,
    difficulty: "Moderate",
    max_altitude: "2,276 m",
    group_size: "10 - 25 Backpackers",
    price: 12999,
    discount_price: 12999,
    rating: 4.9,
    reviews_count: 280,
    is_featured: true,
    hero_image: "/assets/img/Testimonals/20.webp",
    gallery: [
      "/assets/img/Testimonals/20.webp",
      "/assets/img/Testimonals/13.webp",
      "/assets/img/Testimonals/18.webp"
    ],
    overview: "Organized by SPIRIT ADVENTURES (Contact / WhatsApp: 96665 67551). Package Cost: ₹12,999/- Per Person (EX DELHI). Embark on the 5 Days • 4 Nights classic Himalayan escape covering Delhi, the colonial summer capital Shimla, and the alpine wonderland Manali. Highlights include Delhi monuments (Qutub Minar, Lotus Temple, India Gate), the UNESCO World Heritage Kalka–Shimla Toy Train traversing 96.6 km and 969 bridges, horse riding in Kufri Valley, ancient Hadimba Devi Temple, Jogini Falls, and snow sports at Solang Valley with daily breakfast and dinner included.",
    highlights: [
      "EX DELHI with Sleeper Class train tickets & Volvo transfers",
      "Contact / WhatsApp Hotline: 96665 67551",
      "Delhi Sightseeing: Qutub Minar, Lotus Temple, India Gate, Rashtrapati Bhavan & Chandni Chowk",
      "Shimla Exploration: Kufri Valley, Jakhu Temple, Ridge Church, Horse Riding & Mall Road",
      "UNESCO Heritage Kalka–Shimla Toy Train Ride (96.6 KM, 969 Bridges, 103 Tunnels)",
      "Manali Local Sightseeing: Hadimba Devi Temple, Van Vihar, Vashisht Temple & Jogini Waterfalls",
      "Solang Valley Snow Excursion: Paragliding, River Rafting, ATV rides & snow games",
      "Breakfast & Dinner Included daily",
      "Trip Captain Support (10 Pax Minimum)"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Delhi Sightseeing",
        meals: "En-route meals",
        activities: [
          "Arrive in Delhi; explore iconic landmarks: Qutub Minar, Lotus Temple, and India Gate.",
          "Drive past Rashtrapati Bhavan and explore vibrant bazaars of Chandni Chowk.",
          "Visit the monumental Akshardham Temple.",
          "Board evening Volvo coach / train for overnight journey into Himachal hills."
        ]
      },
      {
        day: "Day 2",
        title: "Shimla Exploration",
        meals: "Dinner Included",
        activities: [
          "Morning arrival in Shimla; check in and freshen up.",
          "Excursion to scenic Kufri Valley; optional horse riding and apple orchard walks.",
          "Visit hilltop Jakhu Temple and historic neo-Gothic Christ Church on The Ridge.",
          "Evening stroll through bustling colonial Mall Road & Lakkar Bazaar.",
          "Overnight stay in Shimla."
        ]
      },
      {
        day: "Day 3",
        title: "Heritage Toy Train Experience",
        meals: "Breakfast & Dinner Included",
        activities: [
          "Board the world-famous UNESCO Heritage Kalka–Shimla Toy Train.",
          "Glide past 96.6 km of alpine scenery, 969 bridges, and 103 tunnels.",
          "Panoramic pine forest views and charming colonial mountain railway stations.",
          "Afternoon scenic mountain highway transfer towards Manali.",
          "Check in and overnight stay in Manali."
        ]
      },
      {
        day: "Day 4",
        title: "Manali Local Sightseeing",
        meals: "Breakfast & Dinner Included",
        activities: [
          "Visit 16th-century cedar-wood Hadimba Devi Temple & Ghatothkach Temple.",
          "Stroll through towering deodars at Van Vihar and hot springs at Vashisht Temple.",
          "Visit Mall Road and Club House.",
          "Scenic hike to cascading Jogini Waterfalls with valley panoramas.",
          "Explore riverside cafes in Old Manali; overnight stay in Manali."
        ]
      },
      {
        day: "Day 5",
        title: "Solang Valley Adventures",
        meals: "Breakfast Included",
        activities: [
          "Morning excursion to snow-capped Solang Valley.",
          "Adventure activities: Paragliding, River Rafting, ATV rides, and snow tubing.",
          "Capture thrilling action shots against Himalayan snow peaks.",
          "Board evening Volvo coach for return journey to Delhi with lifelong memories."
        ]
      }
    ],
    included: [
      "Sleeper Class Train Tickets",
      "Local Transportation in dedicated vehicle",
      "Complete Local Sightseeing as per itinerary",
      "Accommodation on Sharing Basis",
      "Toy Train Ride Included",
      "Breakfast & Dinner Included",
      "Trip Captain Support (10 Pax Minimum)",
      "All Permits, Toll, Taxes & Driver Bata Included",
      "Basic First Aid Assistance"
    ],
    excluded: [
      "Lunch & Other Food Expenses",
      "Entry Tickets & Adventure Activities",
      "River Rafting, Paragliding & Paid Activities",
      "Anything Not Mentioned in Inclusions"
    ],
    upcoming_dates: ["Every Weekend Departure", "Year-round (Snow Dec-April)", "Nov 06, 2026", "Nov 13, 2026", "Nov 20, 2026"]
  },
  {
    id: 19,
    title: "2D 1N Coorg Weekend Backpacking Trip",
    slug: "coorg-weekend-backpacking",
    tagline: "Golden Temple, Harangi Elephant Camp, Mandalpatti Peak 4x4 Jeep Safari & Abbey Falls",
    destination_name: "Coorg",
    destination_slug: "coorg-weekend",
    category_name: "Wayanad & Coorg Circuits",
    category_slug: "wayanad-coorg",
    duration_days: 2,
    difficulty: "Easy",
    max_altitude: "1,750 m",
    group_size: "10 - 20 Backpackers",
    price: 4200,
    discount_price: 4200,
    rating: 4.8,
    reviews_count: 165,
    is_featured: true,
    hero_image: "/assets/img/Testimonals/01.webp",
    gallery: [
      "/assets/img/Testimonals/01.webp",
      "/assets/img/Testimonals/03.webp",
      "/assets/img/Testimonals/08.webp"
    ],
    overview: "Organized by Spirit Adventures. Package Cost: ₹4,200/- Per Person Only (Round-trip Sleeper Class Train Tickets Included). A quick, refreshing 1 Night / 2 Days weekend getaway to the Scotland of India. Designed for backpackers and friend groups looking for coffee hill vibes without taking leaves. Explore the Tibetan Golden Temple in Bylakuppe, Chiklihole Reservoir, Harangi Elephant Camp, musical fountain show, open 4x4 Jeep safari up Mandalpatti Peak, cascading Abbey Waterfalls, and sunset at Raja Seat.",
    highlights: [
      "Package Cost: ₹4,200/- Per Person Only",
      "Round-trip Sleeper Class Train Tickets Included",
      "Tibetan Golden Temple (Namdroling Monastery) & Chiklihole Reservoir",
      "Harangi Elephant Camp interaction & Musical Fountain Show",
      "Mandalpatti Peak high-altitude ridge view",
      "Roaring Abbey Waterfalls surrounded by private coffee estates",
      "Sunset panorama from historic Raja Seat View Point",
      "Trip Manager & verified accommodation (Optional couple room upgrade at ₹1,500)"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Start to Coorg",
        meals: "En-route meal stops",
        activities: [
          "Arrival and scenic transfer to Coorg hills.",
          "Visit Tibetan Namdroling Monastery (Golden Temple) in Bylakuppe.",
          "Explore peaceful waters of Chiklihole Reservoir.",
          "Interaction with elephants at Harangi Elephant Camp.",
          "Watch evening Musical Fountain Show with your travel gang.",
          "Overnight stay in Coorg."
        ]
      },
      {
        day: "Day 2",
        title: "Coorg Exploration",
        meals: "Breakfast stop",
        activities: [
          "Early morning 4x4 Jeep safari to rugged heights of Mandalpatti Peak.",
          "Visit thunderous Abbey Waterfalls nestled in spice plantations.",
          "Stroll through historic Raja Seat View Point overlooking misty rolling valleys.",
          "Capture final group photos and return transfer to railway station."
        ]
      }
    ],
    included: [
      "Sleeper Class Train Tickets (Both Ways)",
      "Local Transfers in private vehicle",
      "Accommodation Stay on Sharing Basis",
      "Trip Manager (10 PAX MAX)",
      "All Required Permits Included",
      "Driver Charges, Toll & Taxes Included",
      "Trip Host & First Aid Support"
    ],
    excluded: [
      "Food During Travel",
      "Adventure Activities & Jeep Rides",
      "Tatkal Charges (If applicable)",
      "GST (5%)",
      "Anything Not Mentioned in Inclusions"
    ],
    upcoming_dates: ["Every Weekend Departure", "Nov 06, 2026", "Nov 13, 2026", "Nov 20, 2026", "Nov 27, 2026"]
  },
  {
    id: 20,
    title: "2D 1N Dandeli Adventure Trip",
    slug: "dandeli-weekend-adventure",
    tagline: "Kali River Boating, Kayaking, Zorbing, Jungle Walk, Rain Dance & Campfire Resort Stay",
    destination_name: "Dandeli",
    destination_slug: "dandeli-weekend",
    category_name: "Dandeli & River Watersports",
    category_slug: "dandeli-adventure",
    duration_days: 2,
    difficulty: "Moderate",
    max_altitude: "473 m",
    group_size: "10 - 25 Backpackers",
    price: 4200,
    discount_price: 4200,
    rating: 4.9,
    reviews_count: 195,
    is_featured: true,
    hero_image: "/assets/img/Testimonals/12.webp",
    gallery: [
      "/assets/img/Testimonals/12.webp",
      "/assets/img/Testimonals/02.webp",
      "/assets/img/Testimonals/17.webp"
    ],
    overview: "Organized by Spirit Adventures. Package Cost: ₹4,200/- Per Person Only (Round-trip Sleeper Class Train Tickets Included + Resort Food Included). The ultimate 1 Night / 2 Days quick weekend adrenaline rush in Dandeli. Includes resort stay with swimming pool, jungle nature walk, evening DJ rain dance with music, delicious buffet meals (Breakfast, Lunch & Campfire Dinner), starlit bonfire night, and thrill water activities on the Kali River: boating, kayaking, and zorbing.",
    highlights: [
      "Package Cost: ₹4,200/- Per Person Only",
      "Round-trip Sleeper Class Train Tickets Included",
      "Buffet Resort Meals Included (Breakfast, Lunch & Dinner)",
      "Water activities included: Boating, Kayaking & Zorbing",
      "Swimming pool fun & Evening DJ Rain Dance with music",
      "Guided Dandeli jungle nature walk",
      "Campfire night under the stars with music",
      "Overnight stay at verified Dandeli Adventure Resort (Optional couple room upgrade at ₹1,500)"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Welcome to Dandeli",
        meals: "Breakfast, Lunch & Campfire Dinner Included",
        activities: [
          "Arrival at Hubli; transfer to Dandeli Adventure Resort.",
          "Check in, freshen up, and enjoy hot breakfast.",
          "Guided jungle nature walk amidst dense Western Ghats canopy.",
          "Buffet lunch followed by swimming pool relaxation.",
          "Evening DJ Rain Dance with energetic party music.",
          "Bonfire night under starry skies with delicious buffet dinner.",
          "Overnight stay at Dandeli Resort."
        ]
      },
      {
        day: "Day 2",
        title: "Water Adventure Day",
        meals: "Breakfast Included",
        activities: [
          "Early morning wake up in fresh forest breeze; breakfast included.",
          "Transfer to Kali River water sports zone in nylon gear.",
          "Enjoy thrilling water sports: Boating, Kayaking, and Zorbing.",
          "Optional whitewater river rafting and zipline available.",
          "Return transfer to Hubli railway station with unforgettable memories."
        ]
      }
    ],
    included: [
      "Sleeper Class Train Tickets (Both Ways)",
      "Local Transfers in private vehicle",
      "Accommodation at Dandeli Resort",
      "Buffet Meals Included at Resort",
      "Boating, Kayaking & Zorbing Activities",
      "Trip Manager (10 PAX MAX)",
      "All Permits, Driver Charges, Toll & Taxes Included",
      "Trip Host & First Aid Support"
    ],
    excluded: [
      "Food During Train Journey",
      "Long-Stretch Whitewater River Rafting & Zipline (Optional add-on)",
      "Tatkal Charges (If applicable)",
      "GST (5%)",
      "Anything Not Mentioned in Inclusions"
    ],
    upcoming_dates: ["Every Weekend Departure", "Nov 06, 2026", "Nov 13, 2026", "Nov 20, 2026", "Dec 04, 2026"]
  },
  {
    id: 21,
    title: "2D 1N Gokarna & Murudeshwar Trip",
    slug: "gokarna-murudeshwar-weekend",
    tagline: "Vibhuti Falls, Honnavar Mangroves Boating, Murudeshwar Shiva & Nirvana Beach Camping",
    destination_name: "Gokarna & Murudeshwar",
    destination_slug: "gokarna-murudeshwar-2d",
    category_name: "Gokarna & Coastal Backpacking",
    category_slug: "coastal-escapes",
    duration_days: 2,
    difficulty: "Easy",
    max_altitude: "Sea Level - 150 m",
    group_size: "10 - 25 Backpackers",
    price: 3200,
    discount_price: 3200,
    rating: 4.8,
    reviews_count: 175,
    is_featured: true,
    hero_image: "/assets/img/Testimonals/07.webp",
    gallery: [
      "/assets/img/Testimonals/07.webp",
      "/assets/img/Testimonals/02.webp",
      "/assets/img/Testimonals/14.webp"
    ],
    overview: "Organized by Spirit Adventures (Contact: 7093582116). Package Cost: ₹3,200/- Per Person Only. The perfect 1 Night / 2 Days coastal backpacking getaway. Discover crystal-clear Vibhuti Falls, cruise through Honnavar Mangrove backwaters on a boat, seek blessings before the colossal Shiva statue at Murudeshwar Temple, catch golden sunset and enjoy a lively campfire with beach camping at Nirvana Beach, explore 16th-century Mirjan Fort, visit sacred Mahabaleshwar Temple, and trek scenic cliffs from Om Beach to Kudle Beach.",
    highlights: [
      "Package Cost: ₹3,200/- Per Person Only",
      "Contact Hotline: 7093582116",
      "Early morning excursion to cascading Vibhuti Falls",
      "Scenic Honnavar Mangrove boat cruise",
      "Murudeshwar Temple & world's second-tallest Shiva statue overlooking the Arabian Sea",
      "Golden sunset at Nirvana Beach with fun campfire night & beach camping",
      "16th-century historic Mirjan Fort exploration",
      "Sacred Mahabaleshwar Temple darshan in Gokarna",
      "Iconic cliffside beach trek: Om Beach ➝ Kudle Beach",
      "Return journey by 8:30 PM train (Optional couple room upgrade at ₹2,500)"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Murudeshwar & Gokarna",
        meals: "Local coastal eateries",
        activities: [
          "Early morning pickup and start to coastal Karnataka.",
          "Visit serene crystal-clear Vibhuti Waterfalls.",
          "Scenic Honnavar Mangroves boat safari.",
          "Darshan at towering Murudeshwar Temple overlooking the sea.",
          "Witness stunning golden sunset at Nirvana Beach.",
          "Fun campfire night with music under starlit skies.",
          "Overnight beach camping experience."
        ]
      },
      {
        day: "Day 2",
        title: "Gokarna Exploration",
        meals: "Cliff cafe dining",
        activities: [
          "Explore historical red-stone Mirjan Fort.",
          "Darshan at ancient Mahabaleshwar Temple in Gokarna.",
          "Scenic cliff beach trek: Om Beach ➝ Kudle Beach.",
          "Leisure time at Kudle beach cafes.",
          "Transfer to railway station; board return train by 8:30 PM."
        ]
      }
    ],
    included: [
      "Local Transfers in dedicated vehicle",
      "Honnavar Mangroves Boating Experience",
      "Accommodation (Beach Camping / Sharing Basis)",
      "Trip Host & First Aid Support",
      "Campfire Night Activities"
    ],
    excluded: [
      "Food During Travel",
      "Adventure Activities",
      "Tatkal Charges (If applicable)",
      "GST (5%)",
      "Anything Not Mentioned in Inclusions"
    ],
    upcoming_dates: ["Every Weekend Departure", "Nov 06, 2026", "Nov 13, 2026", "Nov 20, 2026", "Dec 04, 2026"]
  },
  {
    id: 22,
    title: "2D 1N Hampi Adventure Trip",
    slug: "hampi-weekend-adventure",
    tagline: "Cliff Jumping, Coracle Ride, Anegundi Fort, Anjanadri Temple & Vijaya Vittala Stone Chariot",
    destination_name: "Hampi Adventure",
    destination_slug: "hampi-weekend",
    category_name: "Hampi & UNESCO Heritage",
    category_slug: "heritage-circuits",
    duration_days: 2,
    difficulty: "Moderate",
    max_altitude: "450 m",
    group_size: "10 - 20 Backpackers",
    price: 4200,
    discount_price: 4200,
    rating: 4.9,
    reviews_count: 210,
    is_featured: true,
    hero_image: "/assets/img/Hampi.png",
    gallery: [
      "/assets/img/Hampi.png",
      "/assets/img/Testimonals/04.png",
      "/assets/img/Testimonals/08.webp"
    ],
    overview: "Organized by Spirit Adventures. Package Cost: ₹4,200/- Per Person Only (Round-trip Sleeper Class Train Tickets Included). Experience the thrill of adventure and ancient history across the boulder empire of Hampi in 1 Night / 2 Days. Features exhilarating cliff jumping and coracle boating in the Tungabhadra River, historic Chinthamani Temple, Anegundi Fort, holy Anjanadri Temple (Hanuman Janmasthal), and iconic UNESCO monuments including Vijaya Vittala Temple, the monolithic Stone Chariot, and sacred Virupaksha Temple.",
    highlights: [
      "Package Cost: ₹4,200/- Per Person Only",
      "Round-trip Sleeper Class Train Tickets Included",
      "Adrenaline-pumping Cliff Jumping & Coracle Boat Ride",
      "Chinthamani Temple & historic Anegundi Fort",
      "Anjanadri Temple hilltop climb (Hanuman birth place) with 360° boulder views",
      "UNESCO Vijaya Vittala Temple & iconic Stone Chariot",
      "Ancient Virupaksha Temple in Hampi Sacred Center",
      "Trip Manager (10 PAX MAX) & verified accommodation (Couple room upgrade ₹1,500)"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Journey to Hampi & Adventure",
        meals: "Local cafe stops",
        activities: [
          "Morning arrival; transfer across Tungabhadra River.",
          "Exhilarating Cliff Jumping into fresh river waters.",
          "Traditional round Coracle Boat Ride experience.",
          "Explore Chinthamani Temple and historic Anegundi Fort.",
          "Climb hilltop Anjanadri Temple for spectacular panoramic sunset over boulder fields.",
          "Overnight stay in Hampi."
        ]
      },
      {
        day: "Day 2",
        title: "Heritage of Hampi",
        meals: "Traditional South Indian meals",
        activities: [
          "Explore the timeless UNESCO World Heritage architecture.",
          "Visit Vijaya Vittala Temple, musical pillars, and world-famous Stone Chariot.",
          "Visit sacred Virupaksha Temple and Hampi Bazaar.",
          "Capture unforgettable memories amidst prehistoric boulder ruins.",
          "Transfer to railway station for return journey."
        ]
      }
    ],
    included: [
      "Sleeper Class Train Tickets (Both Ways)",
      "Local Transfers in private vehicle",
      "Local Sightseeing as per itinerary",
      "Accommodation Stay on Sharing Basis",
      "Trip Manager (10 PAX MAX)",
      "All Permits, Driver Charges, Toll & Taxes Included",
      "Trip Host & First Aid Support"
    ],
    excluded: [
      "Food Expenses",
      "Entry Tickets & Activities",
      "Tatkal Charges (If applicable)",
      "GST (5%)",
      "Anything Not Mentioned in Inclusions"
    ],
    upcoming_dates: ["Every Weekend Departure", "Nov 06, 2026", "Nov 13, 2026", "Nov 20, 2026", "Nov 27, 2026"]
  },
  {
    id: 23,
    title: "3D 2N Munnar Adventure Trip",
    slug: "munnar-adventure-escape",
    tagline: "Athirappilly Falls, Tea Factory, Traditional Martial Arts, Sunrise Jeep Safari & Fort Kochi",
    destination_name: "Munnar & Athirappilly",
    destination_slug: "munnar-2d",
    category_name: "Munnar & Alleppey Backwaters",
    category_slug: "kerala-escapes",
    duration_days: 3,
    difficulty: "Easy",
    max_altitude: "1,600 m",
    group_size: "10 - 25 Backpackers",
    price: 6999,
    discount_price: 6999,
    rating: 4.9,
    reviews_count: 185,
    is_featured: true,
    hero_image: "/assets/img/Testimonals/09.webp",
    gallery: [
      "/assets/img/Testimonals/09.webp",
      "/assets/img/Testimonals/11.webp",
      "/assets/img/Testimonals/14.webp"
    ],
    overview: "Organized by Spirit Adventures. Starting Point: EX-KOCHI (Pickup Aluva / Drop Ernakulam). Package Cost: ₹6,999/- Per Person Only (Round-trip Non-AC Sleeper Train Tickets Included). Discover the verdant Western Ghats covering thundering Athirappilly Waterfalls (the Niagara of India), Cheeyappara and Valara falls, scenic Gap Road, tea factory tour, Mattupetty Dam, Echo Point, live traditional Kalaripayattu martial arts show, early morning open 4x4 Jeep Safari to Sunrise View Point, Chennai Express movie location, Ripple Falls, and Fort Kochi heritage sightseeing.",
    highlights: [
      "Round-trip Non-AC Sleeper Class Train Tickets Included",
      "Starting Point: EX-KOCHI (Aluva pickup / Ernakulam drop)",
      "Athirappilly Waterfalls, Cheeyappara & Valara Falls",
      "Gap Road View, Photo Point & Botanical Garden in Munnar",
      "Tea Garden vistas & guided Tea Factory Visit",
      "Mattupetty Dam & acoustic Echo Point",
      "Live Cultural Experience: Traditional Kalaripayattu Martial Arts Show",
      "Early Morning 4x4 Jeep Safari to Sunrise View Point & Hanging Bridge",
      "Chennai Express movie shooting point & Ripple Waterfalls",
      "Fort Kochi, Jew Market, Marine Drive & Mattancherry Palace (time permitting)"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Waterfalls & Hill Journey",
        meals: "En-route meal stops",
        activities: [
          "Pickup from Aluva Railway Station.",
          "Proceed to majestic Athirappilly Waterfalls.",
          "Enroute sightseeing at Cheeyappara and Valara Waterfalls.",
          "Ascend into misty rolling hills of Munnar.",
          "Check in at resort & relax; overnight stay in Munnar."
        ]
      },
      {
        day: "Day 2",
        title: "Munnar Sightseeing & Culture",
        meals: "Local tea estate eateries",
        activities: [
          "Visit Photo Point, Gap Road View, and Botanical Garden.",
          "Walk through emerald Tea Gardens and guided Tea Factory tour.",
          "Visit Mattupetty Dam and Echo Point.",
          "Evening thrilling Cultural Experience: Traditional Martial Arts (Kalaripayattu) Show.",
          "Overnight stay in Munnar."
        ]
      },
      {
        day: "Day 3",
        title: "Sunrise Jeep Safari & Kochi",
        meals: "Breakfast Included",
        activities: [
          "Early morning open 4x4 Jeep Safari to Sunrise View Point.",
          "Visit Hanging Bridge, Chennai Express Shooting Point, and Ripple Waterfalls.",
          "Enjoy sweeping views from Pothamedu View Point.",
          "Breakfast & checkout; return journey to Kochi.",
          "Fort Kochi, Jew Market, Marine Drive & St. Francis Church sightseeing (if time permits).",
          "Drop at Ernakulam Railway Station with cherished memories."
        ]
      }
    ],
    included: [
      "Non-AC Sleeper Class Train Tickets (To & Fro)",
      "Local Transportation (Non AC)",
      "Full Local Sightseeing as per itinerary",
      "Accommodation (Sharing Basis)",
      "Trip Captain Support throughout",
      "All Permits, Toll & Tax Included",
      "Driver Charges & Bata Included",
      "Basic First Aid Support"
    ],
    excluded: [
      "Food During Travel",
      "Paid Adventure Activities & Martial Arts entry ticket",
      "Tatkal Charges (If applicable)",
      "GST (5%)",
      "Anything Not Mentioned in Inclusions"
    ],
    upcoming_dates: ["Every Weekend Departure", "Nov 06, 2026", "Nov 13, 2026", "Nov 20, 2026", "Dec 04, 2026"]
  },
  {
    id: 24,
    title: "3D 2N Chikmagalur Adventure Trip",
    slug: "chikmagalur-adventure",
    tagline: "Mullayanagiri Peak, Baba Budangiri Hills, Jhari Waterfalls, Coffee Museum & Belur Temple",
    destination_name: "Chikmagalur",
    destination_slug: "chikmagalur",
    category_name: "Wayanad & Coorg Circuits",
    category_slug: "wayanad-coorg",
    duration_days: 3,
    difficulty: "Moderate",
    max_altitude: "1,930 m",
    group_size: "10 - 25 Backpackers",
    price: 7199,
    discount_price: 7199,
    rating: 4.9,
    reviews_count: 230,
    is_featured: true,
    hero_image: "/assets/img/Testimonals/08.webp",
    gallery: [
      "/assets/img/Testimonals/08.webp",
      "/assets/img/Testimonals/01.webp",
      "/assets/img/Testimonals/03.webp"
    ],
    overview: "Organized by Spirit Adventures. Package Cost: ₹7,199/- Per Person Only (Round-trip Sleeper Class Train Tickets Included). Departures from Hyderabad (Kacheguda at 7:00 PM), Bangalore, and Chennai. Experience the serene coffee capital of Karnataka in 2 Nights / 3 Days. Climb Karnataka's highest peak at Mullayanagiri (1,930m), cruise the scenic crest of Baba Budangiri, trek to the hidden cascading Jhari Waterfalls, experience coffee heritage at the Coffee Museum, visit historic 12th-century Hoysala architecture at Belur Chennakeshava Temple, relax at Yagachi Dam, and catch serene sunrise reflections at Hirekolale Lake.",
    highlights: [
      "Package Cost: ₹7,199/- Per Person Only",
      "Round-trip Non-AC Sleeper Class Train Tickets (HYD | BLR | CHE)",
      "Boarding: Kacheguda Railway Station at 7:00 PM",
      "Coffee Museum Chikmagalur — authentic coffee heritage experience",
      "12th-century UNESCO-nominated Belur Chennakeshava Temple & Yagachi Dam",
      "Trek Mullayanagiri Peak — Highest Peak in Karnataka (1,930 m)",
      "Scenic ridge drive across Baba Budangiri Hills",
      "Hidden jungle trek to refreshing Jhari Waterfalls",
      "Hirekolale Lake peaceful sunrise view & local specialty coffee breaks",
      "Hebbe Falls scenic waterfall visit & 2 nights sharing stay in Chikmagalur"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Journey & Coffee Heritage",
        meals: "En-route meal stops",
        activities: [
          "Pickup from Bangalore / Mysore; scenic drive to Chikmagalur.",
          "Check in to resort and freshen up.",
          "Visit Coffee Museum Chikmagalur to learn bean roasting and heritage.",
          "Marvel at intricate stone sculptures at Belur Chennakeshava Temple.",
          "Scenic water views and photo stop at Yagachi Dam.",
          "Overnight stay in Chikmagalur."
        ]
      },
      {
        day: "Day 2",
        title: "Peaks, Waterfalls & Adventure",
        meals: "Coffee plantation eateries",
        activities: [
          "Early morning trek up Mullayanagiri Peak — highest summit in Karnataka.",
          "Panoramic mountain ridge drive across Baba Budangiri Hills.",
          "Off-road jungle trek to pristine hidden Jhari Waterfalls (Buttermilk Falls).",
          "Capture breathtaking hill views, floating clouds, and sprawling coffee estates.",
          "Overnight stay in Chikmagalur."
        ]
      },
      {
        day: "Day 3",
        title: "Lakes, Waterfalls & Return",
        meals: "Breakfast stop",
        activities: [
          "Witness calm golden sunrise reflections at Hirekolale Lake.",
          "Stop at authentic local coffee cafe (Sri Café) for freshly brewed Kodagu/Chikmagalur coffee.",
          "Visit roaring Hebbe Falls surrounded by thick forest.",
          "Commence scenic return journey; drop with beautiful memories."
        ]
      }
    ],
    included: [
      "Non-AC Sleeper Class Train Tickets (To & Fro)",
      "3 Days Local Transportation (Non AC)",
      "2 Nights Accommodation (Sharing Basis)",
      "Trip Captain / Organizer Support",
      "Driver Charges & Bata Included",
      "Tolls, Parking & Taxes Included",
      "Basic First Aid Support"
    ],
    excluded: [
      "Food Expenses",
      "Off-road Jeep Rides (if applicable)",
      "Entry Tickets & Activities",
      "Tatkal Charges (If applicable)",
      "GST (5%)",
      "Anything Not Mentioned in Inclusions"
    ],
    upcoming_dates: ["Every Weekend Departure", "Nov 06, 2026", "Nov 13, 2026", "Nov 20, 2026", "Dec 04, 2026"]
  },
  {
    id: 25,
    title: "3D 2N Coorg & Chikmagalur Adventure Trip",
    slug: "coorg-chikmagalur-adventure",
    tagline: "Golden Temple, Mandalpatti Peak, Abbey Falls, Belur Temple & Mullayanagiri Peak",
    destination_name: "Coorg & Chikmagalur",
    destination_slug: "coorg-chikmagalur",
    category_name: "Wayanad & Coorg Circuits",
    category_slug: "wayanad-coorg",
    duration_days: 3,
    difficulty: "Moderate",
    max_altitude: "1,930 m",
    group_size: "10 - 25 Backpackers",
    price: 7199,
    discount_price: 7199,
    rating: 4.9,
    reviews_count: 260,
    is_featured: true,
    hero_image: "/assets/img/Testimonals/03.webp",
    gallery: [
      "/assets/img/Testimonals/03.webp",
      "/assets/img/Testimonals/01.webp",
      "/assets/img/Testimonals/08.webp"
    ],
    overview: "Organized by Spirit Adventures. Package Cost: ₹7,199/- Per Person Only (Round-trip Sleeper Class Train Tickets Included). Departures from Hyderabad (Kacheguda at 7:00 PM), Bangalore, and Chennai. Experience the twin coffee jewels of Karnataka in 2 Nights / 3 Days. Features Namdroling Monastery (Tibetan Golden Temple), Harangi Elephant Camp, Raja's Seat Viewpoint, rugged Mandalpatti Peak, cascading Abbey Falls, Hoysala architectural marvel Belur Chennakeshava Temple, Yagachi Reservoir, Karnataka's highest peak at Mullayanagiri, and scenic Jhari Falls.",
    highlights: [
      "Package Cost: ₹7,199/- Per Person Only",
      "Round-trip Non-AC Sleeper Class Train Tickets (HYD | BLR | CHE)",
      "Departure: Kacheguda Railway Station at 7:00 PM",
      "Tibetan Namdroling Monastery (Golden Temple) in Bylakuppe",
      "Harangi Elephant Camp & Raja's Seat panoramic sunset viewpoint",
      "4x4 Jeep ride to Mandalpatti Peak & roaring Abbey Falls in Coorg",
      "Travel between Coorg & Chikmagalur via historic Belur Chennakeshava Temple",
      "Yagachi Reservoir scenic waterscape",
      "Mullayanagiri Peak — Highest Summit in Karnataka (1,930 m)",
      "Jhari Falls jungle trek & 2 nights verified accommodation"
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Welcome to Coorg",
        meals: "En-route breakfast & dinner stops",
        activities: [
          "Arrive at Bangalore or Mysore railway station; pickup in dedicated vehicle.",
          "Basic fresh-up & breakfast.",
          "Explore Tibetan Namdroling Monastery (Golden Temple) with giant golden Buddha statues.",
          "Interaction with elephants at Harangi Elephant Camp.",
          "Sunset views from Raja's Seat Viewpoint overlooking misty valleys.",
          "Overnight stay in Coorg."
        ]
      },
      {
        day: "Day 2",
        title: "Peaks & Temples (Coorg to Chikmagalur)",
        meals: "En-route dining stops",
        activities: [
          "Early morning visit to scenic Mandalpatti Peak.",
          "Visit thundering Abbey Falls enclosed by private coffee plantations.",
          "Scenic mountain drive from Coorg into Chikmagalur hills.",
          "Visit historic 12th-century Belur Chennakeshava Temple.",
          "Photo stop at Yagachi Reservoir.",
          "Check in and overnight stay in Chikmagalur."
        ]
      },
      {
        day: "Day 3",
        title: "Chikmagalur Views & Return",
        meals: "Breakfast stop",
        activities: [
          "Ascend Mullayanagiri Peak — Karnataka's highest peak with sweeping ocean-of-cloud vistas.",
          "Trek down into dense forest trail to Jhari Falls (Buttermilk Waterfalls).",
          "Drive back to Bangalore railway station.",
          "Board return train back to your city with beautiful memories."
        ]
      }
    ],
    included: [
      "Non-AC Sleeper Class Train Tickets (To & Fro)",
      "3 Days Local Transportation (Non AC)",
      "2 Nights Accommodation (Sharing Basis)",
      "Trip Captain / Organizer Support throughout",
      "Driver Charges & Bata Included",
      "Tolls, Parking & Taxes Included",
      "Basic First Aid Support"
    ],
    excluded: [
      "Food Expenses",
      "Off-road Jeep Rides (Mandalpatti, Mullayanagiri, Jhari Falls)",
      "Tatkal Charges (If Applicable)",
      "GST (5%)",
      "Anything Not Mentioned in Inclusions"
    ],
    upcoming_dates: ["Every Weekend Departure", "Nov 06, 2026", "Nov 13, 2026", "Nov 20, 2026", "Dec 04, 2026"]
  },
  {
    id: 26,
    title: "3D 2N Coorg Adventure Trip",
    slug: "coorg-adventure-3d",
    tagline: "Golden Temple, Harangi Elephant Camp, Raja's Seat, Abbey Falls, Mandalpatti & Madikeri Fort",
    destination_name: "Coorg Scotland of India",
    destination_slug: "coorg-3d",
    category_name: "Wayanad & Coorg Circuits",
    category_slug: "wayanad-coorg",
    duration_days: 3,
    difficulty: "Moderate",
    max_altitude: "1,750 m",
    group_size: "10 - 25 Backpackers",
    price: 7499.0,
    discount_price: 7499.0,
    rating: 4.9,
    reviews_count: 210,
    is_featured: true,
    hero_image: "/assets/img/Testimonals/01.webp",
    gallery: ["/assets/img/Testimonals/01.webp", "/assets/img/Testimonals/03.webp", "/assets/img/Testimonals/08.webp"],
    overview: "Organized by Spirit Adventures. Package Cost: ₹7,499/- Per Person. 3 Days / 2 Nights exploration of Coorg — Karnataka's Scotland of India. Includes Namdroling Golden Temple, Harangi Elephant Camp, spectacular Raja's Seat sunset, roaring Abbey Falls, thrilling optional Mandalpatti 4x4 Jeep ride, aromatic coffee plantation tour, Madikeri Fort, Talacauvery viewpoints, and return train travel.",
    highlights: [
      "Package Cost: ₹7,499/- Per Person (Organized by Spirit Adventures)",
      "Non-AC Sleeper Class Train Journey (To & Fro)",
      "Namdroling Golden Temple (Tibetan Monastery Experience)",
      "Harangi Elephant Camp Experience & Interaction",
      "Raja's Seat Viewpoint (Iconic Sunset Panoramic View)",
      "Abbey Falls Scenic Waterfall & Coffee Plantation Walk",
      "Mandalpatti 4x4 Jeep Safari Ride (Optional Adventure)",
      "Madikeri Fort, Talacauvery & Local Spice / Coffee Shopping",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Journey to Coorg & Sightseeing",
        meals: "Local eateries stop",
        activities: [
          "Pickup from Railway Station / Boarding Point.",
          "Non-AC Sleeper Class Train Journey (To & Fro).",
          "Visit the grand Namdroling Golden Temple (Tibetan Monastery).",
          "Explore Harangi Elephant Camp and watch elephants in their natural element.",
          "Head to Raja's Seat Viewpoint for a breathtaking sunset over misty valleys.",
          "Overnight Stay in Coorg.",
        ],
      },
      {
        day: "Day 2",
        title: "Waterfalls & Adventure",
        meals: "Breakfast & local food stop",
        activities: [
          "Visit roaring Abbey Falls nestled amidst spice and coffee estates.",
          "Experience optional high-thrill Mandalpatti 4x4 Jeep Ride up windswept hills.",
          "Take a guided Coffee Plantation tour and discover Coorg beans & spices.",
          "Capture panoramic shots at scenic hill viewpoints and valleys.",
          "Enjoy authentic local Kodava culinary experience (optional).",
          "Return to hotel/homestay and unwind.",
        ],
      },
      {
        day: "Day 3",
        title: "Viewpoints & Return Journey",
        meals: "En-route meals stop",
        activities: [
          "Explore historical Madikeri Fort and surrounding viewpoints.",
          "Visit Talacauvery / nearby scenic vantage points (if time permits).",
          "Local shopping for fresh handmade chocolates, spices, and Coorg coffee.",
          "Commence return journey to boarding railway station.",
          "Drop at railway station with beautiful memories.",
        ],
      },
    ],
    included: [
      "Non-AC Sleeper Class Train Tickets (To & Fro)",
      "Local Transportation (Entire Trip)",
      "Local Sightseeing as per itinerary",
      "2 Nights Accommodation (Sharing Basis)",
      "Trip Captain / Coordinator",
      "Driver Charges, Toll, Parking & Taxes",
      "Basic First Aid Support",
    ],
    excluded: [
      "Food & meals",
      "Entry Tickets & Activities (Mandalpatti Jeep Ride, etc.)",
      "Personal Expenses",
      "Private Couple Room & AC Transport Upgrades (Available at extra cost)",
      "Anything Not Mentioned in Inclusions",
    ],
    upcoming_dates: ["Every Weekend Departure", "Nov 06, 2026", "Nov 13, 2026", "Nov 20, 2026", "Dec 04, 2026"],
  },
  {
    id: 27,
    title: "3D 2N Go Goa Adventure Trip",
    slug: "goa-adventure-trip",
    tagline: "North Goa Beaches, Water Sports, Aguada & Chapora Forts, Tito's Lane & Old Goa Heritage",
    destination_name: "Goa Beaches & Heritage",
    destination_slug: "goa",
    category_name: "Gokarna & Coastal Backpacking",
    category_slug: "coastal-escapes",
    duration_days: 3,
    difficulty: "Easy",
    max_altitude: "100 m",
    group_size: "10 - 25 Backpackers",
    price: 7999.0,
    discount_price: 7999.0,
    rating: 4.9,
    reviews_count: 245,
    is_featured: true,
    hero_image: "/assets/img/Testimonals/14.webp",
    gallery: ["/assets/img/Testimonals/14.webp", "/assets/img/Testimonals/02.webp", "/assets/img/Testimonals/07.webp"],
    overview: "Organized by Spirit Adventures. Package Cost: ₹7,999/- Per Person (Advance ₹3,000/- to block your slot). 2 Nights / 3 Days Go Goa Adventure Trip from Hubli Railway Station. Includes North Goa iconic beaches (Candolim, Baga, Calangute, Sinquerim, Anjuna, Vagator), Aguada Fort, Chapora Fort (Dil Chahta Hai point), 2 nights AC hotel stay with swimming pool, 2 breakfasts & 2 dinners, thrilling optional water sports (Scuba, Parasailing, Jet Ski, Banana ride), and South Goa heritage churches.",
    highlights: [
      "Package Cost: ₹7,999/- Per Person (Advance ₹3,000 to Block Slot)",
      "Sleeper Class Train Tickets (To & From Hubli Railway Station)",
      "2 Nights AC Hotel Stay (Sharing Basis with Swimming Pool)",
      "2 Breakfasts & 2 Dinners Included at Hotel",
      "Aguada Fort & Portuguese Lighthouse Panoramas",
      "Chapora Fort (Dil Chahta Hai iconic viewpoint) & Parra Road",
      "Candolim, Baga, Calangute, Anjuna & Vagator Beaches",
      "Optional Water Sports: Scuba Diving, Parasailing, Jet Ski, Banana & Bumper Ride",
      "Old Goa Basilica of Bom Jesus, Se Cathedral & Mangueshi Temple",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "North Goa Vibes & Nightlife",
        meals: "Dinner Included",
        activities: [
          "Start from Hubli Railway Station and arrive in Goa.",
          "Hotel check-in, freshen up and relax by the swimming pool.",
          "Explore historic Aguada Fort overlooking the vast Arabian Sea.",
          "Hop across North Goa's top beaches: Candolim Beach, Baga Beach & Calangute Beach.",
          "Delicious dinner at hotel.",
          "Optional nightlife and clubbing experience at Tito's Lane (own transport required).",
          "Immerse in Goa's iconic coastal energy and beach vibes.",
        ],
      },
      {
        day: "Day 2",
        title: "North Goa Forts, Water Fun & Beaches",
        meals: "Breakfast & Dinner Included",
        activities: [
          "Enjoy morning breakfast at the hotel.",
          "Visit Sinquerim Beach beneath the fort ramparts.",
          "Climb up to Chapora Fort (famous Dil Chahta Hai viewpoint).",
          "Lunch break with Goan delicacies.",
          "Explore Anjuna Beach and dramatic rocky red cliffs of Vagator Beach.",
          "Photo stop at iconic palm-lined Parra Road (if time permits).",
          "Optional high-adrenaline water sports: Scuba Diving, Parasailing, Jet Ski, Banana & Bumper Ride, Speed Boat.",
          "Return to hotel, dinner, and relaxing pool chill session.",
        ],
      },
      {
        day: "Day 3",
        title: "South Goa Heritage & Return",
        meals: "Breakfast Included",
        activities: [
          "Breakfast and hotel check-out.",
          "Visit Miramar Beach and Dona Paula viewpoint.",
          "Tour UNESCO World Heritage Old Goa Churches (Basilica of Bom Jesus & Se Cathedral).",
          "Visit sacred Mangueshi Temple.",
          "Lunch break and souvenir shopping.",
          "Transfer back to Hubli Railway Station for return train journey.",
        ],
      },
    ],
    included: [
      "Sleeper Class Train Tickets (To & From Hubli)",
      "3 Days Local Transport (Non-AC)",
      "2 Nights AC Hotel Stay (Sharing Basis with Swimming Pool)",
      "2 Breakfasts | 2 Dinners Included",
      "Trip Captain (10 PAX MAX)",
      "State Permits & Tolls",
      "Driver Allowance & Parking Charges",
    ],
    excluded: [
      "Other meals (lunches and en-route food)",
      "Entry Tickets & Parking (Extra)",
      "Water activities (Scuba, Parasailing, Jet Ski etc. paid on spot)",
      "AC Train Tickets upgrade (Extra Fare)",
      "Couple Room Upgrade – ₹2,500/- Per Person Extra",
      "Anything Not Mentioned in Inclusions",
    ],
    upcoming_dates: ["Every Weekend Departure", "Nov 06, 2026", "Nov 13, 2026", "Nov 20, 2026", "Dec 04, 2026"],
  },
  {
    id: 28,
    title: "3D 2N Gokarna & Dandeli Backpacking Trip",
    slug: "gokarna-dandeli-3d2n-backpacking",
    tagline: "Kali River Rafting, Kayaking, Zorbing, Vibhuti Falls, Murudeshwar & Nirvana Beach Camping",
    destination_name: "Gokarna & Dandeli Express",
    destination_slug: "gokarna-dandeli-3d",
    category_name: "Gokarna & Coastal Backpacking",
    category_slug: "coastal-escapes",
    duration_days: 3,
    difficulty: "Moderate",
    max_altitude: "473 m",
    group_size: "10 - 25 Backpackers",
    price: 4999.0,
    discount_price: 4999.0,
    rating: 4.9,
    reviews_count: 230,
    is_featured: true,
    hero_image: "/assets/img/Testimonals/12.webp",
    gallery: ["/assets/img/Testimonals/12.webp", "/assets/img/Testimonals/02.webp", "/assets/img/Testimonals/07.webp"],
    overview: "Organized by Spirit Adventures. Package Cost: ₹4,999/- Per Person. 2 Nights / 3 Days action-packed backpacking trip covering Dandeli river adventures, Murudeshwar, and Gokarna. Ex-HYD/BLR/BZA/CHE departures every Thursday & Friday (3:30 PM). Features Kali River boating, kayaking, zorbing, river swimming, DJ rain dance, campfire resort night, Vibhuti Falls, Honnavar mangrove boating, Murudeshwar Shiva Temple, beachside campfire camping at Nirvana Beach, Mirjan Fort, and Om to Kudle Beach trek.",
    highlights: [
      "Package Cost: ₹4,999/- Per Person (Sleeper Train Tickets Included)",
      "Ex-HYD / BLR / BZA / CHE (Boarding: Nampally, Begumpet, Lingampally)",
      "Dandeli Resort Stay with Full Meals (Breakfast, Lunch & Dinner)",
      "Water activities included: Boating, Kayaking, Zorbing & River Swimming",
      "Music & DJ Rain Dance plus Campfire Night in Dandeli",
      "Vibhuti Falls nature dip & Honnavar Mangrove boat ride",
      "Murudeshwar 123ft Shiva Statue & Beach View Temple",
      "Nirvana Beach Sunset Campfire & Beachside Camping",
      "Mirjan Fort historical walk & Om Beach to Kudle Beach trek",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Dandeli River Adventures & Resort Fun",
        meals: "Breakfast, Lunch & Dinner Included",
        activities: [
          "Reach Hubli by 8:00 AM; transfer to Dandeli adventure resort.",
          "Resort check-in and delicious breakfast.",
          "Action-packed water activities on Kali River: Boating, Kayaking, Zorbing, River Swimming.",
          "Optional high-octane River Rafting (1.2 KM) & Zipline.",
          "Buffet lunch and outdoor/indoor games.",
          "Evening DJ Rain dance with music & starlit Campfire Night.",
          "Dinner and camping stay (rooms available as paid upgrade).",
        ],
      },
      {
        day: "Day 2",
        title: "Murudeshwar & Nirvana Beach Camping",
        meals: "Local eateries stop",
        activities: [
          "Early morning start towards coastal Karnataka.",
          "Visit natural limestone pool of Vibhuti Falls for a fresh dip.",
          "Take scenic Honnavar Mangrove walkboard & backwater boat ride.",
          "Marvel at Murudeshwar Temple & world's second-tallest Shiva statue by Arabian Sea.",
          "Witness golden sunset at tranquil Nirvana Beach.",
          "Evening beachside campfire and starlit beach tent camping stay.",
        ],
      },
      {
        day: "Day 3",
        title: "Gokarna Exploration & Return",
        meals: "Local cafes stop",
        activities: [
          "Explore the lush moss-covered ruins of 16th-century Mirjan Fort.",
          "Seek blessings at sacred Mahabaleshwar Temple in Gokarna town.",
          "Scenic coastal cliff trek from Om Beach to Kudle Beach.",
          "Enjoy beach cafe chill vibes, sea breeze & photography.",
          "Return train journey at 8:30 PM; reach Hyderabad by Tuesday 11:00 AM.",
        ],
      },
    ],
    included: [
      "Sleeper Class Train Tickets (Round Trip)",
      "Local Transfers (Non-AC)",
      "Accommodation (1 Night Dandeli Resort + 1 Night Beach Camp)",
      "Meals in Dandeli (Breakfast, Lunch & Dinner)",
      "Trip Captain & First Aid Support",
      "Kayaking, Boating, Zorbing & River Swimming",
    ],
    excluded: [
      "Food During Train Journey & Gokarna meals",
      "Paid Adventure Activities (River Rafting 1.2km / Zipline)",
      "Tatkal Charges (If applicable), GST (5%)",
      "Optional Private Couple Room Upgrade (₹3,000/- Per Couple)",
      "Anything Not Mentioned in Inclusions",
    ],
    upcoming_dates: ["Every Thursday & Friday Departure", "Nov 06, 2026", "Nov 13, 2026", "Nov 20, 2026", "Dec 04, 2026"],
  },
  {
    id: 29,
    title: "3D 2N Gokarna & Jog Falls Backpacking Trip",
    slug: "gokarna-jogfalls-3d2n-backpacking",
    tagline: "Jog Falls 830ft Plunge, Vibhuti Falls, Honnavar Backwaters, Murudeshwar & Kudle Beach",
    destination_name: "Gokarna & Jog Falls Express",
    destination_slug: "gokarna-jogfalls-3d",
    category_name: "Gokarna & Coastal Backpacking",
    category_slug: "coastal-escapes",
    duration_days: 3,
    difficulty: "Easy",
    max_altitude: "450 m",
    group_size: "10 - 25 Backpackers",
    price: 5999.0,
    discount_price: 5999.0,
    rating: 4.9,
    reviews_count: 215,
    is_featured: true,
    hero_image: "/assets/img/Testimonals/07.webp",
    gallery: ["/assets/img/Testimonals/07.webp", "/assets/img/Testimonals/02.webp", "/assets/img/Testimonals/14.webp"],
    overview: "Organized by Spirit Adventures. Package Cost: ₹5,999/- Per Person. 2 Nights / 3 Days backpacking adventure combining India's second highest plunge waterfall Jog Falls with coastal Gokarna & Murudeshwar. Ex-HYD/BLR/BZA/CHE departures every Thursday & Friday (3:30 PM). Includes Vibhuti Falls, Honnavar mangrove boardwalk, overnight stay at Murudeshwar, roaring Jog Falls, Sharavathi backwater boating, overnight stay at Gokarna, Mirjan Fort, Om Beach & Kudle Beach sunset.",
    highlights: [
      "Package Cost: ₹5,999/- Per Person (Sleeper Train Tickets Included)",
      "Ex-HYD / BLR / BZA / CHE (Dep: Every Thursday & Friday 3:30 PM)",
      "Jog Falls (Witness India's iconic 830ft segmented waterfall cascade)",
      "Vibhuti Falls crystal-clear forest spring dip",
      "Honnavar Mangrove Walkboard & Sharavathi river boating",
      "Murudeshwar Shiva Temple & beachside overnight stay",
      "Mirjan Fort historical ramparts & moat photography",
      "Om Beach & Kudle Beach sunset walks and beach cafe chill",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Waterfalls & Temple Vibes",
        meals: "Local stops",
        activities: [
          "Arrive in coastal Karnataka; freshen up.",
          "Hike down to Vibhuti Falls for a refreshing forest waterfall experience.",
          "Explore the serene Mangrove Walkboard in Honnavar.",
          "Visit Murudeshwar Temple & majestic 123ft Shiva Statue towering over the Arabian Sea.",
          "Overnight Stay at Murudeshwar.",
        ],
      },
      {
        day: "Day 2",
        title: "Jog Falls & Coastal Beauty",
        meals: "Local eateries stop",
        activities: [
          "Journey into Western Ghats to witness the majestic Jog Falls (one of India's tallest waterfalls).",
          "Marvel at the Raja, Roarer, Rocket and Rani cascading water plunges.",
          "Experience peaceful Honnavar Backwater Boating through coastal mangroves.",
          "Take in scenic coastal drives with sweeping views.",
          "Overnight Stay at Gokarna.",
        ],
      },
      {
        day: "Day 3",
        title: "Gokarna Beach Exploration & Return",
        meals: "Beach cafes stop",
        activities: [
          "Explore the moss-clad architecture of 16th-century Mirjan Fort.",
          "Visit Murudeshwar Temple / Gokarna heritage shrines (if time permits).",
          "Walk along the famous shape of Om Beach and head towards Kudle Beach.",
          "Catch a mesmerizing Arabian Sea sunset with chilled beach vibes.",
          "Return Journey: Train at 8:30 PM; reach Hyderabad by Tuesday 11:00 AM.",
        ],
      },
    ],
    included: [
      "Non-AC Sleeper Class Train Tickets (To & Fro)",
      "Local Transfers (Non AC)",
      "Local Sightseeing as per itinerary",
      "Accommodation (Sharing Basis)",
      "Trip Captain",
      "All Permits, Toll, Tax, Driver Charges & Bata",
      "Basic First Aid Support",
    ],
    excluded: [
      "Food During Train Journey & Sightseeing",
      "Paid Adventure Activities",
      "Tatkal Charges (If applicable), GST (5%)",
      "Optional Private Couple Room Upgrade (₹3,000/- Per Couple)",
      "Anything Not Mentioned in Inclusions",
    ],
    upcoming_dates: ["Every Thursday & Friday Departure", "Nov 06, 2026", "Nov 13, 2026", "Nov 20, 2026", "Dec 04, 2026"],
  },
  {
    id: 30,
    title: "3D 2N Gokarna & Udupi Backpacking Trip",
    slug: "gokarna-udupi-3d2n-backpacking",
    tagline: "Vibhuti Falls, Murudeshwar, Sri Krishna Temple Udupi, Maravanthe Beach, Mirjan & Om Beach",
    destination_name: "Gokarna & Udupi Express",
    destination_slug: "gokarna-udupi-3d",
    category_name: "Gokarna & Coastal Backpacking",
    category_slug: "coastal-escapes",
    duration_days: 3,
    difficulty: "Easy",
    max_altitude: "150 m",
    group_size: "10 - 25 Backpackers",
    price: 5999.0,
    discount_price: 5999.0,
    rating: 4.9,
    reviews_count: 205,
    is_featured: true,
    hero_image: "/assets/img/Testimonals/02.webp",
    gallery: ["/assets/img/Testimonals/02.webp", "/assets/img/Testimonals/07.webp", "/assets/img/Testimonals/17.webp"],
    overview: "Organized by Spirit Adventures. Package Cost: ₹5,999/- Per Person. 2 Nights / 3 Days coastal & spiritual circuit covering Gokarna, Murudeshwar, and Udupi. Ex-HYD/BLR/BZA/CHE departures every Thursday & Friday (3:30 PM). Features Vibhuti Falls / Apsara Konda Falls, Honnavar mangrove forest walk, Murudeshwar Shiva temple stay, Kollur Sri Mookambika Temple, world-famous Udupi Sri Krishna Temple, picturesque Maravanthe Beach highway drive, Mirjan Fort, Mahabaleshwar Temple, and Om to Kudle Beach sunset.",
    highlights: [
      "Package Cost: ₹5,999/- Per Person (Round-Trip Sleeper Train Tickets Included)",
      "Ex-HYD / BLR / BZA / CHE (Dep: Every Thursday & Friday 3:30 PM)",
      "Vibhuti Falls or Apsara Konda Falls waterfall experience",
      "Honnavar Mangrove Forest wooden boardwalk & coastal nature",
      "Murudeshwar Shiva Temple visit & Murudeshwar overnight stay",
      "Sri Mookambika Temple (Kollur) & Sri Krishna Temple Udupi",
      "Maravanthe Beach coastal highway scenic drive (River on one side, Sea on other)",
      "Mirjan Fort, Mahabaleshwar Temple, Om Beach & Kudle Beach",
    ],
    itinerary: [
      {
        day: "Day 1",
        title: "Waterfalls & Temple Vibes",
        meals: "Local stops",
        activities: [
          "Arrive in coastal region; transfer to freshen up.",
          "Experience Vibhuti Falls or Apsara Konda Falls natural pools.",
          "Stroll across Honnavar Mangrove Forest boardwalk amidst untouched backwaters.",
          "Visit Murudeshwar Temple (world's 2nd tallest Shiva statue & Raja Gopura view).",
          "Overnight Stay at Murudeshwar.",
        ],
      },
      {
        day: "Day 2",
        title: "Udupi Exploration & Spiritual Coastal Trail",
        meals: "Local authentic Udupi cuisine stop",
        activities: [
          "Visit the revered Sri Mookambika Temple situated in Kollur foothills.",
          "Seek divine darshan through the silver-plated Kanakana Kindi at Udupi Sri Krishna Matha.",
          "Experience the world-renowned Maravanthe Beach drive (Suparnika River on the left, Arabian Sea on the right).",
          "Scenic coastal highway drive filled with golden spiritual vibes.",
          "Overnight Stay in Gokarna.",
        ],
      },
      {
        day: "Day 3",
        title: "Gokarna Beach & Heritage",
        meals: "Beach cafes stop",
        activities: [
          "Explore the battlements, watchtowers, and moats of historic Mirjan Fort.",
          "Visit the sacred Atmalinga at Mahabaleshwar Temple in Gokarna.",
          "Hop across Gokarna Main Beach, the holy Om Beach, and Kudle Beach.",
          "Soak in panoramic cliff sunset views and chill beach vibes.",
          "Board return journey train at 8:30 PM; reach Hyderabad next day by 11:00 AM.",
        ],
      },
    ],
    included: [
      "Non-AC Sleeper Class Train Tickets (To & Fro)",
      "Local Transportation (Non AC)",
      "Local Sightseeing as per itinerary",
      "Accommodation (Sharing Basis)",
      "Trip Captain",
      "All Permits, Toll & Tax, Driver Charges & Bata",
      "Basic First Aid Support",
    ],
    excluded: [
      "Food During Travel",
      "Paid Adventure Activities",
      "Tatkal Charges (If applicable), GST (5%)",
      "Optional Private Couple Room Upgrade (₹3,000/- Per Couple)",
      "Anything Not Mentioned in Inclusions",
    ],
    upcoming_dates: ["Every Thursday & Friday Departure", "Nov 06, 2026", "Nov 13, 2026", "Nov 20, 2026", "Dec 04, 2026"],
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
