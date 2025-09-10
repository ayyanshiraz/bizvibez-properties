"use client";

// STEP 1: All necessary imports are placed at the top of the file.
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { forSaleProperties, ForSaleProperty } from './buy-data';

// STEP 2: All icon components must be defined before they are used.
const BedIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>;
const BathIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v2m10 0h2" /></svg>;
const AreaIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 1v4m0 0h-4m4 0l-5-5" /></svg>;
const GridViewIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3H3V10H10V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 3H14V10H21V3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 14H14V21H21V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 14H3V21H10V14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;
const ListViewIcon = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M8 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 6H3.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 12H3.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M3 18H3.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>;

// --- PROPERTY CARD COMPONENT ---
const PropertyCard: React.FC<{ property: ForSaleProperty }> = ({ property }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const images = property.images;
    if (isHovered && images && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex: number) => (prevIndex + 1) % images.length);
      }, 1500); 
    } else {
      if (intervalRef.current) clearInterval(intervalRef.current);
      setCurrentImageIndex(0);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, property.images]);

  const displayedImage = (property.images && property.images.length > 0) ? property.images[currentImageIndex] : property.image; 

  return (
    <Link 
      href={`/buy/${property.id}`} 
      className={`block rounded-lg shadow-md transition-all duration-300 overflow-hidden ${isHovered ? 'bg-[#891e6d] text-white shadow-xl transform scale-105' : 'bg-white text-gray-800 hover:shadow-xl'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        <img src={displayedImage} alt={property.title} className="w-full h-56 object-cover transition-opacity duration-500 ease-in-out" />
        <span className="absolute top-3 right-3 bg-gray-900 bg-opacity-70 text-white text-xs font-semibold px-3 py-1 rounded">FOR SALE</span>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <p className="font-bold text-lg">Start From AED {property.price}</p>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold truncate">{property.title}</h3>
        <p className="text-sm mb-3 opacity-80">{property.location}</p>
        <hr className={`${isHovered ? 'border-purple-300' : 'border-gray-200'}`} />
        <div className="flex justify-start items-center space-x-6 mt-3 text-sm">
          <div className="flex items-center"><BedIcon /><span className={`${isHovered ? 'text-white' : 'text-gray-700'}`}>{property.bedrooms} Bedrooms</span></div>
          <div className="flex items-center"><BathIcon /><span className={`${isHovered ? 'text-white' : 'text-gray-700'}`}>{property.bathrooms} Bathrooms</span></div>
          <div className="flex items-center"><AreaIcon /><span className={`${isHovered ? 'text-white' : 'text-gray-700'}`}>{property.size} Sq.Ft</span></div>
        </div>
      </div>
    </Link>
  );
};

// --- MAIN BUY PAGE COMPONENT ---
const BuyPage = () => {
  const [sortBy, setSortBy] = useState('default');
  const [view, setView] = useState('grid'); 

  const sortedProperties = [...forSaleProperties].sort((a, b) => {
    switch (sortBy) {
      case 'price_asc': return parseInt(a.price.replace(/,/g, '')) - parseInt(b.price.replace(/,/g, ''));
      case 'price_desc': return parseInt(b.price.replace(/,/g, '')) - parseInt(a.price.replace(/,/g, ''));
      default: return 0;
    }
  });

  return (
    <div className="bg-gray-50">
      <div className="relative w-full h-[50vh] bg-gray-900">
        <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop')" }}>
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">Dubai Properties For Sale</h1>
            <p className="text-base mt-1 max-w-2xl font-light">Discover Real Estate Opportunities: Properties For Sale</p>
          </div>
        </div>
      </div>

      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto max-w-7xl px-4 md:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm text-gray-500 mb-2"><Link href="/" className="hover:text-gray-800">Home</Link> / <span className="font-semibold text-gray-700">For Sale</span></p>
              <h2 className="text-3xl font-bold text-gray-900">For Sale</h2>
              <p className="text-sm text-gray-600 mt-1">{forSaleProperties.length} Properties</p>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <button onClick={() => setView('grid')} className={`${view === 'grid' ? 'text-gray-900' : 'text-gray-400'} hover:text-gray-700 transition-colors`}><GridViewIcon /></button>
                <button onClick={() => setView('list')} className={`${view === 'list' ? 'text-gray-900' : 'text-gray-400'} hover:text-gray-700 transition-colors`}><ListViewIcon /></button>
              </div>
              <div className="flex items-center text-sm">
                <span className="text-gray-600 mr-2">Sort by:</span>
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="font-semibold border border-gray-300 rounded-md px-2 py-1 bg-white focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option className="text-black" value="default">Default Order</option>
                  <option className="text-black" value="price_asc">Price: Low to High</option>
                  <option className="text-black" value="price_desc">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="py-12 px-4 md:px-8 bg-white" >
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BuyPage;