export interface ForRentProperty {
  id: string;
  propertyId: string;
  title: string;
  location: string;
  price: string; // Price per annum
  image: string;
  images?: string[];
  bedrooms: number;
  bathrooms: number;
  size: string;
  type: string;
  description: string;
  features: string[];
  address: {
    street: string;
    city: string;
    area: string;
  };
  mapCoordinates: {
    lat: number;
    lng: number;
  };
  status: string;
  updatedOn: string;
}

export const forRentProperties: ForRentProperty[] = [
  {
    id: 'rent-1',
    propertyId: 'bizlux-13905972',
    title: 'Stunning View | Prime Location High Floor',
    location: 'Dubai Marina',
    price: '180,000',
    image: '/b45.webp',
    images: [
        '/b41.webp',
        '/b42.webp',
        '/b43.webp',
    ],
    bedrooms: 3,
    bathrooms: 3,
    size: '1502',
    type: 'Apartment, Residential',
    description: "BizVibez Property is proud to offer your ideal three-bedroom apartment for rent in Marina Heights, Dubai Marina, UAE, available at AED 180,000 per year.Property Highlights:• Size: 1582.29 SqFt• 3 Bedroom• 3 Bathroom•Parking• Balcony• Kitchen.Features:Breathtaking Full Marina View,Situated on a High Floor,Ready for Immediate Transfer,Multiple Spacious Balconies,Expansive and Well-Designed Layout,Bright and Airy Interiors,Convenient Access to Roads & Public Transport,Just Steps Away from Dubai Marina Walk,Premium Amenities and Facilities.Enjoy easy access to Dubai’s key destinations, including:Dubai Mall, Burj Khalifa, and Dubai Fountain within 20 minutes.Palm Jumeirah in just 10 minutes.Mall of the Emirates and Ibn Battuta Mall in 10 to 15 minutes.Dubai International Airport (DXB) and Al Maktoum International Airport within 30 minutes.For more details, please contact BizVibez Property",
    features: ["Balcony", "Shared Gym", "Shared Pool", "Covered Parking", "24/7 Security", "Walk-in Closet"],
    address: { street: "Dubai, Dubai Marina, Marina Heights", city: "Dubai", area: "Dubai Marina" },
    mapCoordinates: { lat: 25.089, lng: 55.148 },
    status: 'For Rent',
    updatedOn: 'September 10, 2025 at 3:15 pm',
  },
  // Add more rental properties here...
];