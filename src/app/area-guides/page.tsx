"use client"; // This page now requires client-side interactivity for the slideshow

import { useState, useEffect } from 'react';

// --- Data for the Hero Image Slideshow ---
const heroImages = [
  '/guides/hero/marina.jpg',
  '/guides/hero/businessbay.webp',
  '/guides/hero/damac.jpg',
  '/guides/hero/creek.jpg',
  '/guides/hero/DH2_1x.jpg',
  '/guides/hero/meydancity.webp',
  '/guides/hero/jvc.webp',
  '/guides/hero/golf.jpg',
  '/guides/hero/dubaihillestate.jpeg',
  '/guides/hero/mbrcity.jpg',
  '/guides/hero/arabianranches.webp',
  '/guides/hero/Palm Jumeirah.jpg',
  '/guides/hero/downtown.jpeg',
  '/guides/hero/city-walk.jpeg',
  '/guides/hero/zabeel.jpg',
];

// --- Data for the Area Guide Cards ---
const guides = [
  {
    name: 'Dubai Marina',
    description: "Discover Dubai Marina, one of the world's largest waterfront developments, offering an exhilarating and sophisticated urban lifestyle.",
    imageUrl: '/guides/marina.jpg', 
  },
  {
    name: 'Business Bay',
    description: 'Explore our Living Guide for Business Bay: amenities, facilities, ideal residential areas, and the lifestyle in this prominent Dubai neighborhood.',
    imageUrl: '/guides/businessbay.webp',
  },
  {
    name: 'Jumeirah Lakes Towers',
    description: 'JLT: Waterfront apartments, offices, shops & hotels. Vibrant community, easy access to Dubai. Bustling but fun!',
    imageUrl: '/guides/laketower.avif',
  },
  {
    name: 'Damac Lagoons',
    description: 'Embrace a life of tranquility and waterfront luxury in Dubai. Explore a collection of exquisite residences nestled within a nature-inspired community.',
    imageUrl: '/guides/damac.jpg',
  },
  {
    name: 'Damac Hills 2',
    description: "Explore upscale living opportunities at DAMAC Hills 2. Our comprehensive area guide details the Luxury community's selection of exquisite villas and apartments.",
    imageUrl: '/guides/DH2_1x.jpg',
  },
  {
    name: 'Meydan City',
    description: 'Considering a move to Meydan City? Dive into this comprehensive guide for insights on real estate, infrastructure, and the exciting things to see and do.',
    imageUrl: '/guides/meydancity.webp',
  },
  {
    name: 'Jumeirah Village Circle',
    description: 'JVC, also known as Jumeirah Village Circle, is a top-rated community that combines the excitement of city life with the close-knit feel of a neighborhood.',
    imageUrl: '/guides/jvc.webp',
  },
  {
    name: 'Jumeirah Golf Estates',
    description: "Jumeirah Golf Estates: Luxury villas in Dubai's premier gated community. Golf course views, exclusive living. Inquire for pricing.",
    imageUrl: '/guides/golf.jpg',
  },
  {
    name: 'Dubai Hills Estate',
    description: 'Dubai Hills Estate by Emaar Properties is a meticulously planned, expansive (11 million sq m) community prioritizing a high-quality lifestyle.',
    imageUrl: '/guides/dubaihillestate.jpeg',
  },
  {
    name: 'Mohammed Bin Rashid City',
    description: 'Experience Mohammed Bin Rashid City (MBR City), a highly anticipated mixed-use development in Dubai. Offering luxurious residences and attractions.',
    imageUrl: '/guides/mbrcity.jpg',
  },
  {
    name: 'Dubai Creek Harbour',
    description: 'Dubai Creek Harbour, an iconic waterfront located along the historic Dubai Creek, is just a 10-minute drive from Downtown Dubai.',
    imageUrl: '/guides/creek.jpg',
  },
  {
    name: 'City Walk Dubai',
    description: 'City Walk is an exceptional residential choice in Dubai, featuring a blend of residential and commercial zones complemented by ample open spaces and parks.',
    imageUrl: '/guides/city-walk.jpeg',
  },
  {
    name: 'Arabian Ranches',
    description: 'Explore residential options in Arabian Ranches Dubai, featuring contemporary living spaces including villas, townhouses, apartments, and golf course homes.',
    imageUrl: '/guides/arabianranches.webp',
  },
  {
    name: 'Palm Jumeirah',
    description: 'Embrace the iconic Dubai lifestyle at Palm Jumeirah: enjoy cocktails with Dubai Marina views, beachfront dinners, and dolphin encounters.',
    imageUrl: '/guides/Palm Jumeirah.jpg',
  },
  {
    name: 'Downtown Dubai',
    description: "Downtown Dubai stands among Dubai's most prestigious areas, renowned for its opulent lifestyle and upscale real estate offerings.",
    imageUrl: '/guides/downtown.jpeg',
  },
  {
    name: 'Za’abeel',
    description: "Modern living in Dubai's heart. Za'abeel offers apartments, villas, & amenities near Zabeel Park. Great location for families & professionals.",
    imageUrl: '/guides/zabeel.jpg',
  },
];

export default function AreaGuidesPage() {
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Shuffle images on initial component mount
  useEffect(() => {
    setShuffledImages([...heroImages].sort(() => Math.random() - 0.5));
  }, []);

  // Set up the timer for the slideshow
  useEffect(() => {
    if (shuffledImages.length === 0) return;
    const timer = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % shuffledImages.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(timer);
  }, [shuffledImages]);

  return (
    <>
      <style jsx>{`
        @keyframes continuousZoom {
          from { transform: scale(1); }
          to { transform: scale(1.1); }
        }
        .zoom-animate {
          animation: continuousZoom 3s ease-out forwards;
        }
      `}</style>

      {/* --- Hero Section --- */}
      <section className="relative h-[90vh] bg-black text-white flex items-end overflow-hidden">
        {/* Background Image Slideshow */}
        <div className="absolute inset-0">
          {shuffledImages.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center zoom-animate"
                style={{ backgroundImage: `url('${src}')` }}
                key={index === currentImageIndex ? src : 'stale'} // Re-trigger animation on change
              ></div>
            </div>
          ))}
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        <div className="container mx-auto px-6 pb-12 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold">DUBAI AREA GUIDES</h1>
          <p className="text-lg md:text-xl mt-2">Explore the city using our Area Guides.</p>
        </div>
      </section>

      {/* --- Guides Grid Section --- */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p 
              className="text-lg leading-relaxed font"
            >
              Wondering where to settle down in Dubai? Our detailed guides to Dubai's neighborhoods can help you find your perfect spot. Explore what makes each area special, discover nearby amenities, and get a feel for what life's like in Dubai's most sought-after communities.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide, index) => (
              <div 
                key={index} 
                className="group block rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:bg-[#891e6d] hover:border-[#891e6d]"
              >
                <div className="rounded-t-xl overflow-hidden">
                  <img 
                    src={guide.imageUrl} 
                    alt={guide.name} 
                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-white">{guide.name}</h3>
                  <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-200">{guide.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

