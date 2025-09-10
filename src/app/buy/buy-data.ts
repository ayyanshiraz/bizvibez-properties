// This interface defines the complete structure for a single property listing.
export interface ForSaleProperty {
  id: string;
  propertyId: string; // e.g., 'sevenlux-13610512'
  title: string;
  location: string;
  price: string;
  image: string;      
  images?: string[];    
  bedrooms: number;
  bathrooms: number;
  size: string;
  mainImage?: string;   
  type?: string;
  description: string;
  propertyFeatures: string[];
  address: {
    street: string;
    city: string;
    area: string;
  };
  mapCoordinates: {
    lat: number;
    lng: number;
  };
  features: string[];
  status: string;
  updatedOn: string;
}

// This array holds all the property listings for your page.
export const forSaleProperties: ForSaleProperty[] = [
  {
    id: '1',
    propertyId: 'sevenlux-13610512',
    title: 'High End Finishing | Exclusive | Vacant',
    location: 'Business Bay',
    price: '24,999,999',
    image: '/images/property1-main.jpg',
    images: ['/images/property1-main.jpg', '/images/property1-alt1.jpg', '/images/property1-alt2.jpg', '/images/property3-main.jpg'],
    bedrooms: 0,
    bathrooms: 2,
    size: '3565',
    mainImage: '/images/property1-main.jpg',
    type: 'Commercial Office space',
    description: "Seven Luxury Real Estate is delighted to offer this premium, luxurious, and exclusive office space for sale in The Opus by Omniyat, situated in Business Bay, Dubai, UAE.The layout of this premium office is both efficient and flexible, making it an excellent choice for dynamic businesses seeking a prestigious address. Expansive floor-to-ceiling windows flood the space with natural light and offer panoramic views of Downtown Dubai, creating an inspiring work environment.Located in the iconic Opus by Omniyat, this building delivers world-class amenities including 24/7 security, valet parking, fine dining restaurants, high-end retail outlets, and an upscale lifestyle hotel. With direct access to Sheikh Zayed Road and just minutes from Dubai Mall and DIFC, this location offers unmatched convenience and connectivity.The Opus is more than just an office—it’s a powerful statement of success. Perfect for businesses that value cutting-edge design, high visibility, and a prime central location in the heart of Dubai.For more details, please Contact Seven Luxury Real Estate.",
    propertyFeatures: [ "Spacious Layout: 3,565.67 Sq.Ft of premium office space", "Elegantly Furnished: Fully outfitted with sophisticated, high-end interiors", "Stunning City Views: Panoramic vistas of Dubai’s dynamic skyline", "Prime Location: Walking distance to the metro and public transport", "24/7 Support: Around-the-clock maintenance and security services." ],
    address: { street: "The Opus by Omniyat", city: "Dubai", area: "Business Bay" },
    mapCoordinates: { lat: 25.1878, lng: 55.265 },
    features: ["Central A/C", "Dining in building", "Covered Parking", "Security"],
    status: 'For Sale',
    updatedOn: 'September 10, 2025 at 10:27 am',
  },
  {
    id: '2',
    propertyId: 'sevenlux-13904894',
    title: 'Prestigious Office High-End Interiors | Exclusive',
    location: 'Business Bay',
    price: '19,999,999',
    image: '/images/property3-main.jpg',
    images: ['/images/property3-main.jpg', '/images/property3-alt1.jpg', '/images/property3-alt2.jpg', '/images/property3-alt3.jpg'],
    bedrooms: 0,
    bathrooms: 2,
    size: '2842',
    mainImage: '/images/property3-main.jpg',
    type: 'Commercial, Office space',
    description: "Seven Luxury Real Estate is proud to present this premium, luxurious and exclusive office space for sale in The Opus by Omniyat, located in Business Bay Dubai UAE.Property Highlights:• Size: 2,842.32 SqFt• Fully Furnished with Elegant, High-End Interiors• Outfitted with Premium Furniture• Equipped with Top-of-the-Line Computers• Access to a Sophisticated Lobby Area• Well-Maintained Washroom Facilities• Modern, Fully Equipped Pantry• Enjoy Breathtaking Views of the City• Convenient Proximity to Metro Station and Public Transportation• 24/7 Maintenance and Security Services for Peace of Mind.The layout is both efficient and adaptable, making it perfect for dynamic businesses in search of a prestigious address. Floor-to-ceiling windows illuminate the space with natural light while showcasing breathtaking views of Downtown Dubai.This iconic building offers exceptional amenities, including 24/7 security, valet parking, fine dining, retail outlets, and a lifestyle hotel. With direct access to Sheikh Zayed Road and just minutes from Dubai Mall and DIFC, convenience is at your doorstep.The Opus is more than just an office — it’s a bold statement of success, ideal for companies that prioritize design, visibility, and strategic connectivity.For more details, please Contact Seven Luxury Real Estate.",
    propertyFeatures: [ 'Covered Parking',
'Dining in building',
'Security'],
    address: { street: "", city: "Dubai", area: "Business Bay" },
    mapCoordinates: {  lat: 25.1878, lng: 55.265 },
    features: ["Private Garden", "Private Pool", "Beach Access", "Study"],
    status: 'For Sale',
    updatedOn: 'September 9, 2025 at 11:45 am',
  },
  {
    id: '3',
    propertyId: 'sevenlux-13574700',
    title: 'Ain Dubai View | Brand New| Luxurious',
    location: 'Bluewaters',
    price: ' 6,000,000',
    image: '/images/property4-main.jpg',
    images: ['/images/property4-main.jpg', '/images/property4-alt1.jpg', '/images/property4-alt2.jpg'],
    bedrooms: 1,
    bathrooms: 2,
    size: '1118 ',
    mainImage: '/images/property4-main.jpg',
    type: 'Apartment, Residential',
    description: "Seven Luxury Real Estate is excited to present this one-bedroom apartment for sale in Bluewaters Residences 3, in Marsa Dubai.PROPERTY DETAILS:• Size: 1,118.59 SqFt,• 1 Bedroom,• Bathroom,• Kitchen,• Balcony,• Parking.FEATURES & AMENITIES:• Infinity Swimming Pool,• Play Area,• Kids Pool,• BBQ Area,,• Spacious open areas,,• Jogging paths,,• Long walkways,,• Lush landscapes,,• Elevated community garden.Bluewaters Island is a unique destination that merges the tranquility of island waterfront living with the excitement of city life, offering an unmatched experience for both residents and visitors. It shines as a vibrant landmark in Dubai’s urban skyline, drawing those in search of limitless lifestyle possibilities.Bluewaters Residences presents a perfect combination of city living, stunning waterfront views, and a lively community, making it a great choice for both families and individuals.For more details, please contact Seven Luxury Real Estate",
    propertyFeatures: [ 'Balcony',
'Covered Parking',
'Security',
'Shared Gym',
'Shared Pool' ],
    address: { street: "", city: "Dubai", area: "Bluewaters" },
    mapCoordinates: {lat: 25.078, lng: 55.127 },
    features: ["Balcony", "Marina View", "Shared Gym", "Shared Pool"],
    status: 'For Sale',
    updatedOn: 'September 8, 2025 at 2:15 pm',
  },
  {
    id: '4',
    propertyId: 'sevenlux-13324890',
    title: 'High Floor | Stunning Marina View | Vacant',
    location: 'Dubai Marina',
    price: '3,200,000',
    image: '/images/property5-main.jpg',
    images: ['/images/property5-main.jpg', '/images/property5-alt1.jpg', '/images/property5-alt2.jpg'],
    bedrooms: 3,
    bathrooms: 3,
    size: '1582',
    mainImage: '/images/property5-main.jpg',
    type: 'Apartment, Residential',
    description: "Seven Luxury Real Estate is excited to present your dream apartment in Marina Heights, Dubai Marina.Property Highlights:Breathtaking Full Marina View,Situated on a High Floor,Ready for Immediate Transfer,Multiple Spacious Balconies,Expansive and Well-Designed Layout,Bright and Airy Interiors,Convenient Access to Roads & Public Transport,Just Steps Away from Dubai Marina Walk,Premium Amenities and FacilitiesEnjoy easy access to Dubai’s key destinations, including:Dubai Mall, Burj Khalifa, and Dubai Fountain within 20 minutes.Palm Jumeirah in just 10 minutes.Mall of the Emirates and Ibn Battuta Mall in 10 to 15 minutes.Dubai International Airport (DXB) and Al Maktoum International Airport within 30 minutes.",
    propertyFeatures: [ 'Balcony',
'Covered Parking',
'Pets Allowed',
'Private Gym',
'Security',
'Shared Gym',
'Shared Pool',
'Study',
'View of Water' ],
    address: { street: "", city: "Dubai", area: "Dubai Marina" },
    mapCoordinates: { lat: 25.0865, lng: 55.1451 },
    features: ["Rooftop Terrace", "Upgraded Interior", "Jacuzzi", "Concierge Service"],
    status: 'For Sale',
    updatedOn: 'September 7, 2025 at 9:00 am',
  },
  {
    id: '5',
    propertyId: 'sevenlux-13335420',
    title: 'Semi-Detached | Vacant | Gated Community',
    location: 'Mudon',
    price: ' 4,250,000',
    image: '/images/property6-main.jpg',
    images: ['/images/property6-main.jpg', '/images/property6-alt1.jpg', '/images/property6-alt2.jpg'],
    bedrooms: 3,
    bathrooms: 4,
    size: '3643',
    mainImage: '/images/property6-main.jpg',
    type: 'Residential, Townhouse',
    description: "Seven Luxury Real Estate is delighted to present this distinguished 3-bedroom townhouse for sale in Arabella 1, Mudon Community, Dubai.Property Features:• Size: 3,643.69 SqFt,• 3 Bedroom,• 4 Bathroom,• Balcony,• Built-in Wardrobes,• Parking Spaces,• Semi-Detached.Amenities:• Widest Landscaping Behind the Villa Plot,• Landscaped Garden,• Community Swimming Pools,• Scenic Bicycle Paths & Park,• State-of-the-Art Gymnasium,• Parks and Leisure Areas• Kids’ Playground.,• Sports Court,• Community Centre,• Diverse Range of Restaurants.Arabella 1 is a community crafted to enhance the health and well-being of families. The Arabella Mudon townhouses are nestled amidst lush greenery, offering a contemporary and stylish design, with interiors that are spacious, bright, and filled with natural light.The expansive park within the community provides a wide range of recreational options, including cycling and jogging paths, sports courts, and fitness stations. Children can enjoy dedicated play areas, while families can unwind in the open green spaces—ideal for picnics and barbecues",
    propertyFeatures: [ 'Balcony',
'Built in Wardrobes',
'Covered Parking',
'Security',
'Shared Pool' ],
    address: { street: "", city: "Dubai", area: "Mudon" },
    mapCoordinates: { lat: 25.0478, lng: 55.2751 },
    features: ["Private Garden", "Community Parks", "Shared Pool", "Pet Friendly"],
    status: 'For Sale',
    updatedOn: 'September 6, 2025 at 4:30 pm',
  },
  {
    id: '6',
    propertyId: 'sevenlux-13028732',
    title: 'Prime Location | Upgraded Interior | Investor Deal',
    location: 'Jumeirah Village Circle',
    price: '950,000',
    image: '/images/property7-main.jpg',
    images: ['/images/property7-main.jpg', '/images/property7-alt1.jpg', '/images/property7-alt2.jpg'],
    bedrooms: 1,
    bathrooms: 2,
    size: '818',
    mainImage: '/images/property7-main.jpg',
    type: 'Apartment, Residential',
    description: "Seven Luxury Real Estate is proud to offer this prestigious 1-bedroom apartment for sale in Tower 108, situated in Jumeirah Village Circle, Dubai.Property Features:• Size:818.49 SqFt,• 1 Bedroom,• 2 Bathroom,• Balcony,• Built-in Wardrobes,• Parking SpacesAmenities:• Central A/C•, Pets allowed•, Kids play area•, Gym• Swimming Pool•, Shopping Mall,• Nearby Park,• Public Transportation:15 minutes to Circle Mall JVC,18 minutes to Palm Jumeirah,20 minutes to Burj Al Arab,26 minutes to drive to Dubai Mall.Tower 108 by Damac Properties delivers an exceptional luxury living experience, featuring modern design and top-notch amenities. Its balanced layout and exquisite interior architecture promise a stylish and comfortable environment for residents.",
    propertyFeatures: [ 'Balcony',
'Built in Kitchen Appliances',
'Central A/C',
'Pets Allowed',
'Shared Pool' ],
    address: { street: "", city: "Dubai", area: "Jumeirah Village Circle" },
    mapCoordinates: { lat: 25.0684, lng: 55.1413 },
    features: ["Burj Khalifa View", "High Floor", "Modern Kitchen", "Shared Gym"],
    status: 'For Sale',
    updatedOn: 'September 5, 2025 at 1:00 pm',
  },
  {
    id: '7',
    propertyId: 'sevenlux-12177317',
    title: 'Luxurious | Prime Location | Stunning Views',
    location: 'Downtown Dubai',
    price: ' 7,000,000',
    image: '/images/property2-main.jpg', // Using placeholder images, replace with actual ones
    images: ['/images/property2-main.jpg', '/images/property2-alt1.jpg', '/images/property2-alt2.jpg'],
    bedrooms: 2,
    bathrooms: 2,
    size: '1201 ',
    mainImage: '/images/property2-main.jpg',
    type: 'Apartment, Residential',
    description: "Seven Luxury Real Estate is pleased to introduce this move-in-ready two-bedroom apartment for sale in Grande, Burj Khalifa, Dubai, UAE.PROPERTY DETAILS:• Spacious 2-bedroom apartment.,• Brand New Tower.,• Panoramic windows.,• 1201.46 Sq. Ft.,• Two bathrooms.,• Balcony.,• World class amenities.,• Parking Space.FEATURES & AMENITIES:• Gym and Fitness Center.• Barbecue Areas.• Children’s play areas.• 24 Hour Security.• Restaurants and Shops.Grande Signature Residences, project that is being developed by Emaar Properties. Amenities include a state-of-the-art fitness centre and a health club as well as a children’s playground and barbeque areas. The Signature Residences feature upgraded interiors with premium wood veneer and tiles as well as high quality stone floors.TRANSPORT & ACCESS:From Grande it takes roughly 6 minutes to drive to Dubai Mall, 22 minutes to Palm Jumeirah, 21 minutes to Burj Al Arab and 26 minutes to The Walk JBR.Dubai International Airport (DXB) is roughly 18 minutes’ drive, and the new Al Maktoum International Airport is roughly 48 minutes’ drive.To discover the true beauty of this property, get in touch today to arrange a viewing.",
    propertyFeatures: [ 'Balcony',
'Built in Wardrobes',
'Concierge Service',
'Covered Parking',
'Security',
'Shared Gym',
'Shared Pool' ],
    address: { street: "", city: "Dubai", area: "Downtown Dubai" },
    mapCoordinates: { lat: 25.1972, lng: 55.2744  },
    features: ["Private Cinema", "Infinity Pool", "Golf Course View", "Basement Parking"],
    status: 'For Sale',
    updatedOn: 'September 4, 2025 at 10:00 am',
  },
];