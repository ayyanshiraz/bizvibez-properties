"use client";

import React, { useState, useRef, useEffect } from 'react';
// CORRECT: Import the data from your existing file
import { forRentProperties, ForRentProperty } from './rent-data';

// --- SVG ICONS ---
const BedIcon = ({ className = "h-4 w-4 mr-1 text-gray-600" }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>;
const BathIcon = ({ className = "h-4 w-4 mr-1 text-gray-600" }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0h2" /></svg>;
const AreaIcon = ({ className = "h-4 w-4 mr-1 text-gray-600" }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 1v4m0 0h-4m4 0l-5-5" /></svg>;
const GridViewIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3H3V10H10V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 3H14V10H21V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 14H14V21H21V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 14H3V21H10V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const ListViewIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 6H3.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 12H3.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 18H3.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;


// --- UPDATED PROPERTY CARD COMPONENT ---
const PropertyCard: React.FC<{ property: ForRentProperty }> = ({ property }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const images = property.images && property.images.length > 0 ? property.images : [property.image];

    const startCarousel = () => {
        if (images.length > 1) {
            intervalRef.current = setInterval(() => {
                setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
            }, 1200);
        }
    };

    const stopCarousel = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
        setCurrentImageIndex(0);
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
        startCarousel();
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
        stopCarousel();
    };
    
    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <a 
            href={`/rent/${property.id}`}
            className="block bg-white rounded-lg shadow-md hover:shadow-[#891e6d]/30 hover:shadow-lg transition-all duration-300 overflow-hidden border relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            aria-label={`View details for ${property.title}`}
        >
            <div className="relative">
                <img src={images[currentImageIndex]} alt={property.title} className="w-full h-56 object-cover transition-opacity duration-500" />
                <span className="absolute top-3 right-3 bg-black bg-opacity-80 text-white text-xs font-semibold px-3 py-1 rounded-sm z-10">FOR RENT</span>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <p className="text-white font-bold text-lg">Start From AED {property.price}</p>
                </div>
            </div>

            <div className={`p-4 transition-colors duration-300 ${isHovered ? 'bg-[#891e6d]' : 'bg-white'}`}>
                <h3 className={`text-lg font-semibold truncate ${isHovered ? 'text-white' : 'text-black'}`}>{property.title}</h3>
                <p className={`text-sm mb-3 ${isHovered ? 'text-white/70' : 'text-gray-500'}`}>{property.location}</p>
                
                <div className={`border-t pt-3 mt-3 ${isHovered ? 'border-white/30' : 'border-gray-200'}`}>
                    <div className="flex items-center justify-between text-sm">
                        <div className={`flex items-center ${isHovered ? 'text-white' : 'text-gray-800'}`}>
                            <BedIcon className={`h-5 w-5 mr-2 ${isHovered ? 'text-white/80' : 'text-gray-600'}`} />
                            <span>{property.bedrooms} Bedrooms</span>
                        </div>
                        <div className={`flex items-center ${isHovered ? 'text-white' : 'text-gray-800'}`}>
                            <BathIcon className={`h-5 w-5 mr-2 ${isHovered ? 'text-white/80' : 'text-gray-600'}`} />
                            <span>{property.bathrooms} Bathrooms</span>
                        </div>
                        <div className={`flex items-center ${isHovered ? 'text-white' : 'text-gray-800'}`}>
                            <AreaIcon className={`h-5 w-5 mr-2 ${isHovered ? 'text-white/80' : 'text-gray-600'}`} />
                            <span>{property.size} Sq.Ft</span>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};


// --- MAIN RENT PAGE COMPONENT ---
const RentPage = () => {
  const [sortBy, setSortBy] = useState('default');
  const [view, setView] = useState('grid'); 

  const sortedProperties = [...forRentProperties].sort((a, b) => {
    switch (sortBy) {
        case 'price_asc':
            return parseFloat(a.price.replace(/,/g, '')) - parseFloat(b.price.replace(/,/g, ''));
        case 'price_desc':
            return parseFloat(b.price.replace(/,/g, '')) - parseFloat(a.price.replace(/,/g, ''));
        default:
            return 0;
    }
  });

  return (
    <div className="bg-white">
      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[50vh] bg-gray-900">
        <div 
          className="absolute inset-0 bg-cover bg-center z-0" 
          style={{ backgroundImage: "url('/rent2.avif')" }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div className="container mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold">Properties For Rent</h1>
            <p className="text-lg mt-2 font-light">Luxury Living: Browse Our Exclusive Properties for Rent</p>
          </div>
        </div>
      </div>

      {/* --- MAIN CONTENT SECTION --- */}
      <main className="container mx-auto max-w-7xl px-4 md:px-8 py-12" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18.5c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-48 0c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48-25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z' fill='%23f3f4f6' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`}}>
        
        {/* Header Section with Filters */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <p className="text-sm text-gray-500 mb-2">
              <a href="/" className="hover:text-black">Home</a> / <span className="font-semibold text-black">For Rent</span>
            </p>
            <h2 className="text-4xl font-bold text-black">For Rent</h2>
            <p className="text-sm text-gray-600 mt-2">{sortedProperties.length} Properties</p>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <button onClick={() => setView('grid')} className={`${view === 'grid' ? 'text-black' : 'text-gray-400'} hover:text-black`}><GridViewIcon /></button>
              <button onClick={() => setView('list')} className={`${view === 'list' ? 'text-black' : 'text-gray-400'} hover:text-black`}><ListViewIcon /></button>
            </div>
            <div className="flex items-center text-sm">
              <span className="text-gray-600 mr-2">Sort by:</span>
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="font-semibold border-b border-gray-300 focus:ring-0 focus:border-black p-1 bg-transparent"
              >
                <option className="text-black" value="default">Default Order</option>
                <option className="text-black" value="price_asc">Price: Low to High</option>
                <option className="text-black" value="price_desc">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>
        
        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </main>
    </div>
  );
};

// I removed the const App = RentPage; line for simplicity.
// This is a more direct way to export.
export default RentPage;