// src/data/mockData.ts

export interface Plot {
  id: number;
  title: string;
  location: string;
  size: string; // e.g., "10,000 Sq Ft"
  price: string; // e.g., "AED 28,000,000"
  images: string[]; // For the main hero carousel
  
  // --- EXPANDED FIELDS TO MATCH REFERENCE ---
  status: 'For Sale' | 'Sold';
  propertyId: string;
  propertyType: string;
  city: string;
  area: string;
  updatedOn: string; // e.g., "January 29, 2025 at 5:32 pm"
  
  // Description fields
  mainDescription: string;
  propertyDetails: { label: string; value: string }[];
  aboutLocation: string;
  keyFeatures: { title: string; text: string }[];
  
  // Second gallery of images
  galleryImages: string[];

  // Agent Info
  agent: {
    name: string;
    company: string;
  };
  
  // --- UPDATED FIELD (NOW OPTIONAL) ---
  mapEmbedUrl?: string; // URL for the live Google Maps embed

  // --- NEW FIELD ---
  communityFeatures?: {
    aboutText: string;
    features: { title: string; text: string }[];
  };
}

export const LANDFORSALE: Plot[] = [
  {
    id: 1,
    title: 'Plot For Sale In Jumeirah Garden City, Dubai',
    location: 'Jumeirah Garden City',
    size: '10,000 Sq Ft',
    price: 'AED 28,000,000',
    images: ['/p12.webp','/p11.webp', '/p14.webp', '/p13.webp'],
    status: 'For Sale',
    propertyId: 'SLRE-001',
    propertyType: 'Land / Plot',
    city: 'Dubai',
    area: 'Jumeirah Garden City',
    updatedOn: 'January 29, 2025 at 5:32 pm',
    mainDescription: 'An exceptional investment opportunity in one of Dubai’s most sought-after locations!',
    propertyDetails: [
      { label: 'Location', value: 'Jumeirah Garden City, Dubai' },
      { label: 'Plot Size', value: '10,000 Sqft' },
      { label: 'G+8 Approved', value: 'Yes' },
      { label: 'GFA', value: '35,000 Sqft' },
      { label: 'Selling Price', value: 'AED 28 Million' },
    ],
    aboutLocation: 'Jumeirah Garden City is a prime mixed-use community located in the heart of Dubai, offering a blend of residential, commercial, and hospitality developments. Designed to provide modern urban living, the area features wide roads, green spaces, and a well-planned infrastructure.',
    keyFeatures: [
        { title: 'Strategic Location', text: 'Close to Sheikh Zayed Road, ensuring seamless connectivity to major business hubs.' },
        { title: 'Burj Khalifa & Downtown Dubai', text: 'Just minutes away from Dubai’s iconic landmarks and luxury lifestyle attractions.' },
        { title: 'City Walk & La Mer Beach', text: 'Enjoy high-end retail, dining, and entertainment options nearby.' },
        { title: 'Public Transport', text: 'Well-connected with metro stations, bus stops, and major road networks.' },
        { title: 'Vibrant Community', text: 'A well-developed area with a mix of residential and commercial properties, ensuring high demand and investment returns.' },
    ],
    galleryImages: ['/p12.webp', '/p11.webp', '/p14.webp', '/p13.webp'],
    agent: {
        name: 'John Doe',
        company: 'Seven Luxury Real Estate'
    },
    // mapEmbedUrl has been removed
  },
  {
    id: 2,
    title: 'Land For Sale In Dubai - Al Furjan Mixed Use Plot',
    location: 'Al Furjan',
    size: '23,000 Sq Ft',
    price: 'AED 35,000,000',
    images: ['/p21.webp', '/p22.webp', '/p23.webp' , '/p24.webp'],
    status: 'For Sale',
    propertyId: 'SLRE-002',
    propertyType: 'Land / Plot',
    city: 'Dubai',
    area: 'Al Furjan',
    updatedOn: 'February 15, 2025 at 11:10 am',
    mainDescription: 'Seven Luxury Real Estate is pleased to offer you this mixed-use plot located in Al Furjan. This is a great opportunity for investment and development in a thriving Dubai community.',
    propertyDetails: [
        { label: 'Plot Size', value: '23,000 Sqft' },
        { label: 'Permission', value: 'G+7' },
        { label: 'Price/SqFt', value: 'AED 1,521' },
        { label: 'GFA', value: '69,000 Sqft' },
    ],
    aboutLocation: 'Al Furjan, a contemporary and family-oriented community, is a Nakheel project that offers a range of townhouses and villas. It is located close to Ibn Battuta Mall and the Expo 2020 site, with easy access to Sheikh Zayed Road and Sheikh Mohammed Bin Zayed Road.',
    keyFeatures: [
        { title: 'Excellent Connectivity', text: 'Direct access to major highways making commutes to Abu Dhabi and other parts of Dubai seamless.' },
        { title: 'Proximity to Metro', text: 'Located near the Al Furjan metro station on Route 2020, enhancing public transport options.' },
        { title: 'Community Amenities', text: 'Features two community retail centers, Al Furjan Pavilion and Al Furjan West Pavilion, with shops, cafes, and sports facilities.' },
        { title: 'Family-Oriented', text: 'A safe and friendly environment with parks, playgrounds, and schools nearby.' },
    ],
    galleryImages: ['/p21.webp', '/p22.webp', '/p23.webp', '/p24.webp'],
    agent: {
        name: 'Jane Smith',
        company: 'Seven Luxury Real Estate'
    },
    // mapEmbedUrl has been removed
  },
  {
    id: 3,
    title: 'G+Unlimited Plot For Sale In JVC, Dubai',
    location: 'Jumeirah Village Circle',
    size: '16,700 Sq Ft',
    price: 'AED 44,000,000',
    images: ['/p31.webp', '/p32.webp', '/p33.webp', '/p34.webp'],
    status: 'For Sale',
    propertyId: 'SLRE-003',
    propertyType: 'Land / Plot',
    city: 'Dubai',
    area: 'Jumeirah Village Circle (JVC)',
    updatedOn: 'March 01, 2025 at 09:00 am',
    mainDescription: 'This G+Unlimited plot in Jumeirah Village Circle (JVC) presents a lucrative investment opportunity for developers looking to create a landmark residential or mixed-use project in one of Dubai’s most popular communities.',
    propertyDetails: [
      { label: 'Plot Size', value: '16,700 Sqft' },
      { label: 'Permission', value: 'G+Unlimited' },
      { label: 'Price/SqFt', value: 'AED 2,634' },
      { label: 'FAR', value: '7.0' },
    ],
    aboutLocation: 'Jumeirah Village Circle (JVC) is a rapidly growing community known for its family-friendly atmosphere, abundant green spaces, and a wide range of amenities. Its central location provides easy access to major highways, making it a convenient choice for residents commuting across Dubai.',
    keyFeatures: [
        { title: 'High ROI Potential', text: 'JVC is one of the most in-demand areas for rentals and sales, promising high returns on investment.' },
        { title: 'Strategic Location', text: 'Situated at the crossroads of Al Khail Road and Sheikh Mohammed Bin Zayed Road.' },
        { title: 'Community Parks', text: 'Over 30 landscaped parks, ideal for families and recreational activities.' },
        { title: 'Circle Mall', text: 'A major retail and entertainment destination within the community, featuring numerous shops and restaurants.' },
    ],
    galleryImages: ['/p31.webp', '/p32.webp', '/p33.webp', '/p34.webp'],
    agent: {
        name: 'Michael Brown',
        company: 'Seven Luxury Real Estate'
    },
    communityFeatures: {
      aboutText: 'Jumeirah Village Circle (JVC) is one of Dubai’s most sought-after residential communities, offering a harmonious blend of urban convenience and suburban tranquility. Popularly known as “JVC,” this vibrant neighborhood is designed with families, professionals, and investors in mind, providing everything needed for a comfortable, fulfilling lifestyle.',
      features: [
        { title: 'Family-Friendly Environment', text: 'JVC offers a safe, peaceful, and family-oriented setting, with over 30 parks, playgrounds, and green spaces for relaxation and recreation.' },
        { title: 'Modern Residences', text: 'A diverse selection of housing options includes contemporary villas, spacious townhouses, and stylish apartments, each reflecting high-quality construction and design trends.' },
        { title: 'Prime Location', text: 'Centrally located, JVC provides quick access to major landmarks like Dubai Marina, Internet City, Media City, and Jumeirah Lake Towers (JLT).' },
        { title: 'Comprehensive Amenities', text: 'Residents enjoy proximity to top schools (e.g., JSS International), nurseries, supermarkets (Spinneys and Choithrams), and healthcare facilities (e.g., Karama Medical Centre).' },
        { title: 'Retail and Entertainment', text: 'The upcoming Circle Mall, featuring over 200 shops, a cinema, and restaurants, is set to become a community hub.' }
      ]
    },
    // mapEmbedUrl has been removed
  },
  {
    id: 4,
    title: 'Residential Land For Sale In Dubai Production City',
    location: 'Dubai Production City',
    size: '50,000 Sq Ft',
    price: 'AED 52,000,000',
    images: ['/p42.webp', '/p41.webp', '/p43.webp' , '/p44.webp'],
    status: 'For Sale',
    propertyId: 'SLRE-004',
    propertyType: 'Residential Land',
    city: 'Dubai',
    area: 'Dubai Production City (IMPZ)',
    updatedOn: 'March 10, 2025 at 10:20 am',
    mainDescription: 'Seize a remarkable investment opportunity with this expansive residential plot in Dubai Production City (formerly IMPZ). Spanning a generous 50,000 sq. ft., this land is perfect for developing a modern residential complex in a strategic and fast-growing part of Dubai.',
    propertyDetails: [
      { label: 'Plot Size', value: '50,000 Sqft' },
      { label: 'Permission', value: 'G+10' },
      { label: 'Price/SqFt', value: 'AED 1,040' },
      { label: 'Use', value: 'Residential' },
    ],
    aboutLocation: 'Dubai Production City is a dynamic business hub that caters to the media and production industries. It offers a blend of residential and commercial properties, creating a vibrant, self-contained community. Its strategic location near major highways provides excellent connectivity to the rest of Dubai.',
    keyFeatures: [
        { title: 'Growing Community', text: 'A well-established area with increasing demand for residential properties.' },
        { title: 'Proximity to Expo City', text: 'Located near the Expo City site, enhancing its long-term value.' },
        { title: 'City Centre Me\'aisem', text: 'A popular mall offering a wide range of retail, dining, and entertainment options.' },
        { title: 'Excellent Infrastructure', text: 'Well-developed road networks and public transport links.' },
    ],
    galleryImages: ['/p42.webp', '/p41.webp', '/p43.webp', '/p44.webp'],
    agent: {
        name: 'Sarah Evans',
        company: 'Seven Luxury Real Estate'
    },
    // mapEmbedUrl has been removed
  },
  {
    id: 5,
    title: 'Prime Land For Sale In Business Bay, Dubai',
    location: 'Business Bay',
    size: '460,000 Sq Ft',
    price: 'AED 500,000,000',
    images: ['/p51.webp', '/p52.webp', '/p53.webp' , '/p54.webp'],
    status: 'For Sale',
    propertyId: 'SLRE-005',
    propertyType: 'Land / Plot',
    city: 'Dubai',
    area: 'Business Bay',
    updatedOn: 'March 20, 2025 at 12:00 pm',
    mainDescription: 'Seven Luxury Real Estate is delighted to present this prime plot of land for sale in the prestigious Business Bay district. This is a rare opportunity to acquire a substantial land parcel in Dubai\'s central business hub, ideal for a flagship mixed-use development.',
    propertyDetails: [
      { label: 'Plot Size', value: '460,000 Sqft' },
      { label: 'Permission', value: 'G+40' },
      { label: 'Price/SqFt', value: 'AED 1,086' },
      { label: 'Use', value: 'Mixed-Use' },
    ],
    aboutLocation: 'Business Bay is Dubai\'s central business district, located just south of Downtown Dubai. It is a vibrant, modern, and cosmopolitan hub for international and local businesses. The area is characterized by its impressive skyscrapers, luxurious hotels, and the stunning Dubai Water Canal.',
    keyFeatures: [
        { title: 'Dubai Water Canal', text: 'A prime location along the iconic Dubai Water Canal, offering stunning views and recreational opportunities.' },
        { title: 'World-Class Infrastructure', text: 'State-of-the-art infrastructure and well-planned road networks.' },
        { title: 'Business Hub', text: 'Home to numerous multinational corporations, financial institutions, and retail enterprises.' },
        { title: 'Luxury Lifestyle', text: 'Close proximity to Downtown Dubai, the Burj Khalifa, and The Dubai Mall, offering world-class dining, shopping, and entertainment.' },
    ],
    galleryImages: ['/p51.webp', '/p52.webp', '/p53.webp', '/p54.webp'],
    agent: {
        name: 'Emily Clark',
        company: 'Seven Luxury Real Estate'
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.176432882834!2d55.25743497592998!3d25.19736177771146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f69d2c613e5a3%3A0xad5f32b1311b1907!2sBusiness%20Bay!5e0!3m2!1sen!2sae!4v1676885562130!5m2!1sen!2sae'
  },
  {
    id: 6,
    title: 'Corner Plot In JVC | 16,743 Sq. Ft. | Excellent Investment',
    location: 'Jumeirah Village Circle',
    size: '16,743 Sq Ft',
    price: 'AED 280 per sq. ft.',
    images: ['/p61.webp', '/p62.webp', '/p63.webp'],
    status: 'For Sale',
    propertyId: 'SLRE-006',
    propertyType: 'Land / Plot',
    city: 'Dubai',
    area: 'Jumeirah Village Circle (JVC)',
    updatedOn: 'April 05, 2025 at 02:15 pm',
    mainDescription: 'This corner plot in JVC represents an outstanding opportunity for investors and developers. Located in a prime residential area, the plot offers excellent potential for a high-return development project.',
    propertyDetails: [
      { label: 'Plot Size', value: '16,743 Sq Ft' },
      { label: 'Use', value: 'Residential' },
      { label: 'Permission', value: 'G+4' },
      { label: 'Price/SqFt', value: 'AED 280' },
    ],
    aboutLocation: 'Jumeirah Village Circle (JVC) is a family-friendly community developed by Nakheel, one of Dubai’s leading developers. It is designed to provide a sense of community and has all the modern facilities of a city in a tranquil and village settings.',
    keyFeatures: [
        { title: 'Strategic Location', text: 'Easy access to all major arterial roads and a short drive to key destinations.' },
        { title: 'Family-Friendly Environment', text: 'Known for its landscaped parks, schools, and community centers.' },
        { title: 'Comprehensive Amenities', text: 'Offers a wide range of amenities including supermarkets, restaurants, and fitness centers.' },
        { title: 'Strong Investment Potential', text: 'High rental yields and strong capital appreciation make JVC a top choice for investors.' },
    ],
    galleryImages: ['/p61.webp', '/p62.webp', '/p63.webp',],
    agent: {
        name: 'David Wilson',
        company: 'Seven Luxury Real Estate'
    },
    mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231223.1423233804!2d55.05389659453125!3d25.064505100000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6d2d1b8e43ff%3A0x6ba43c32e6981881!2sJumeirah%20Village%20Circle%20-%20Dubai!5e0!3m2!1sen!2sae!4v1676885482433!5m2!1sen!2sae',
    communityFeatures: {
      aboutText: 'Jumeirah Village Circle (JVC) is one of Dubai’s most sought-after residential communities, offering a harmonious blend of urban convenience and suburban tranquility. Popularly known as “JVC,” this vibrant neighborhood is designed with families, professionals, and investors in mind, providing everything needed for a comfortable, fulfilling lifestyle.',
      features: [
        { title: 'Family-Friendly Environment', text: 'JVC offers a safe, peaceful, and family-oriented setting, with over 30 parks, playgrounds, and green spaces for relaxation and recreation.' },
        { title: 'Modern Residences', text: 'A diverse selection of housing options includes contemporary villas, spacious townhouses, and stylish apartments, each reflecting high-quality construction and design trends.' },
        { title: 'Prime Location', text: 'Centrally located, JVC provides quick access to major landmarks like Dubai Marina, Internet City, Media City, and Jumeirah Lake Towers (JLT).' },
        { title: 'Comprehensive Amenities', text: 'Residents enjoy proximity to top schools (e.g., JSS International), nurseries, supermarkets (Spinneys and Choithrams), and healthcare facilities (e.g., Karama Medical Centre).' },
        { title: 'Retail and Entertainment', text: 'The upcoming Circle Mall, featuring over 200 shops, a cinema, and restaurants, is set to become a community hub.' }
      ]
    }
  }
];

