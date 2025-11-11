// src/app/area-guides/[slug]/GuidePageClient.tsx
"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { Guide } from '@/data/guidesData'; // Assuming Guide interface is exported from your data file

// This component receives the 'guide' data as a prop from the server component
export default function GuidePageClient({ guide }: { guide: Guide }) {

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const headingStyles = {
    color: '#8D0169'
  };

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const showNextImage = useCallback(() => {
    if (guide.galleryImages) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % guide.galleryImages.length);
    }
  }, [guide.galleryImages]);

  const showPrevImage = useCallback(() => {
    if (guide.galleryImages) {
      setCurrentImageIndex((prevIndex) => (prevIndex - 1 + guide.galleryImages.length) % guide.galleryImages.length);
    }
  }, [guide.galleryImages]);
  
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'ArrowRight') showNextImage();
      if (e.key === 'ArrowLeft') showPrevImage();
      if (e.key === 'Escape') closeLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen, showNextImage, showPrevImage, closeLightbox]);

  return (
    <div>
      <section 
        className="relative h-[80vh] bg-cover bg-center text-white flex items-end"
        style={{ backgroundImage: `url('${guide.imageUrl}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="container mx-auto px-6 pb-12 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold">{guide.name}</h1>
        </div>
      </section>

      <main className="bg-white py-20">
        <div className="container mx-auto px-6 space-y-16">
          
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8" style={headingStyles}>
              One-Stop Destination for Waterfront Living: {guide.name}
            </h2>
            <div className="text-gray-800 text-lg leading-8 space-y-6">
              {guide.longDescription1.split('\n').filter(p => p.trim() !== '').map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
            </div>
          </div>

          {guide.galleryImages && guide.galleryImages.length > 0 && (
            <div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {guide.galleryImages.map((image, index) => (
                    <div 
                      key={index} 
                      className="overflow-hidden rounded-lg shadow-lg cursor-pointer"
                      onClick={() => openLightbox(index)}
                    >
                      <img 
                          src={image} 
                          alt={`${guide.name} gallery image ${index + 1}`} 
                          className="w-full h-full object-cover aspect-square transition-transform duration-500 hover:scale-110"
                      />
                    </div>
                  ))}
              </div>
            </div>
          )}

          <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6" style={headingStyles}>
                {guide.name} Location Features:
              </h3>
              <ul className="list-disc list-inside space-y-3 mb-12 text-lg">
                {guide.locationFeatures.map((feature, index) => (
                    <li key={index} className="text-gray-800">
                      <span style={{ color: '#8D0169', fontWeight: 'bold' }}>•</span> {feature}
                    </li>
                ))}
              </ul>
            <h3 className="text-3xl font-bold mb-8" style={headingStyles}>
              Cruise Around the {guide.name}
            </h3>
            <div className="text-gray-800 text-lg leading-8 space-y-6">
              {guide.longDescription2.split('\n').filter(p => p.trim() !== '').map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
            </div>
          </div>
          
          <div className="text-center pt-10">
            <Link 
              href="/area-guides"
              className="inline-block bg-[#8D0169] text-white font-bold py-4 px-10 rounded-lg text-xl transition-all duration-300 hover:bg-[#800050] hover:scale-105 shadow-xl"
            >
              Back to Area Guides
            </Link>
          </div>

        </div>
      </main>

      {lightboxOpen && guide.galleryImages && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-300 p-4 md:p-64"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-5 right-5 text-white text-4xl hover:text-gray-300 transition-colors"
            onClick={closeLightbox}
          >
            &times;
          </button>

          <button
            className="absolute left-5 text-white p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all"
            onClick={(e) => { e.stopPropagation(); showPrevImage(); }}
            aria-label="Previous image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="absolute right-5 text-white p-3 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all"
            onClick={(e) => { e.stopPropagation(); showNextImage(); }}
            aria-label="Next image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img 
              src={guide.galleryImages[currentImageIndex]} 
              alt={`${guide.name} gallery image ${currentImageIndex + 1}`} 
              className="max-w-full max-h-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}