// src/app/guides/page.tsx

"use client"; // This page now requires client-side interactivity for the slideshow

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { guidesData } from '@/data/guidesData'; // Make sure this path is correct for your project

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

      {/* --- Hero Section (Unchanged) --- */}
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

      {/* --- Guides Grid Section (UPDATED) --- */}
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
            {guidesData.map((guide) => (
              // The entire card is now a clickable link
              <Link 
                href={`/area-guides/${guide.slug}`}
                key={guide.slug} 
                className="group block rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-2 hover:bg-[#8D0169] hover:border-[#8D0169]"
              >
                <div className="flex flex-col h-full">
                  <div className="rounded-t-xl overflow-hidden">
                    <img 
                      src={guide.imageUrl} 
                      alt={guide.name} 
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110" 
                    />
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-white">{guide.name}</h3>
                    <p className="text-gray-600 text-sm transition-colors duration-300 group-hover:text-gray-200">{guide.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}