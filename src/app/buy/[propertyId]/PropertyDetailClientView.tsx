"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ForSaleProperty } from '../buy-data';
import CountrySelector from './CountrySelector';
import { Country } from '../countries';

// --- SVG ICONS ---
const ChevronLeftIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>;
const ChevronRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>;
const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;
const CheckmarkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>;
const ShareIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>;
const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>;


// --- LIGHTBOX COMPONENT ---
const Lightbox = ({ images, startIndex, onClose }: { images: string[], startIndex: number, onClose: () => void }) => {
    const [currentIndex, setCurrentIndex] = useState(startIndex);

    const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center" onClick={onClose}>
            <button className="absolute top-4 right-4 p-2 z-50"><CloseIcon /></button>
            <button className="absolute left-4 top-1/2 -translate-y-1/2 p-2 z-50" onClick={(e) => { e.stopPropagation(); prevImage(); }}><ChevronLeftIcon /></button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 p-2 z-50" onClick={(e) => { e.stopPropagation(); nextImage(); }}><ChevronRightIcon /></button>
            <div className="relative w-full h-full max-w-screen-lg max-h-screen p-16" onClick={(e) => e.stopPropagation()}>
                <img src={images[currentIndex]} alt={`Lightbox view ${currentIndex + 1}`} className="w-full h-full object-contain" />
            </div>
        </div>
    );
};


const PropertyDetailClientView = ({ propertyData }: { propertyData: ForSaleProperty }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedDialCode, setSelectedDialCode] = useState('+971');
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const images = propertyData.images || [];

    const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
    const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    
    const mapSrc = `https://maps.google.com/maps?q=${propertyData.mapCoordinates.lat},${propertyData.mapCoordinates.lng}&hl=en&z=14&output=embed`;

    const handleCountrySelect = (country: Country) => {
        setSelectedDialCode(country.dial_code);
    };

    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

    return (
        <div className="bg-white font-sans">
            {/* --- HERO IMAGE CAROUSEL --- */}
            {images.length > 0 && (
                <div className="relative w-full h-[60vh] bg-gray-900 group">
                    <div onClick={() => openLightbox(currentImageIndex)} className="w-full h-full cursor-pointer">
                        <img src={images[currentImageIndex]} alt={`Property view ${currentImageIndex + 1}`} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute inset-0  bg-opacity-30 pointer-events-none"></div>
                    <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2  bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100"><ChevronLeftIcon /></button>
                    <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2  bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100"><ChevronRightIcon /></button>
                </div>
            )}
            
            <div className="container mx-auto max-w-6xl p-4 sm:p-6 lg:p-8">
                 <div className="flex justify-between items-start mb-4">
                    <p className="text-sm text-gray-500">
                        <Link href="/" className="hover:text-black">Home</Link> / <Link href="/buy" className="hover:text-black">Commercial</Link> / <span>{propertyData.title}</span>
                    </p>
                    <div className="text-right flex items-center">
                        <div>
                            <p className="text-gray-500 text-sm">Start From AED</p>
                            <p className="text-black text-2xl font-bold">{propertyData.price}</p>
                        </div>
                        <button type="button" className="p-2 ml-4 border rounded-md hover:bg-gray-100"><ShareIcon /></button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <div className="pb-6 mb-6">
                            <h1 className="text-3xl font-semibold text-black">{propertyData.title}</h1>
                            <div className="mt-2"><span className="bg-gray-700 text-white text-xs font-semibold px-3 py-1 rounded-sm">FOR SALE</span></div>
                            <p className="text-gray-500 mt-2 flex items-center"><MapPinIcon /> {propertyData.location}</p>
                        </div>
                        
                        <div className="border-b-2 pb-6 mb-6">
                             <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold text-black">Details</h2>
                                <p className="text-sm text-gray-500">Updated on {propertyData.updatedOn}</p>
                            </div>
                            <div className="border border-green-200 bg-green-50 p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-black">
                                <div><strong className="block">Property ID:</strong> {propertyData.propertyId}</div>
                                <div><strong className="block">Bathrooms:</strong> {propertyData.bathrooms}</div>
                                <div><strong className="block">Price:</strong> Start From AED {propertyData.price}</div>
                                <div><strong className="block">Property Type:</strong> {propertyData.type}</div>
                                <div><strong className="block">Property Size:</strong> {propertyData.size} Sq.Ft</div>
                                <div><strong className="block">Property Status:</strong> {propertyData.status}</div>
                            </div>
                        </div>

                        <div className="border-b-2 pb-6 mb-6">
                            <h2 className="text-xl font-semibold text-black mb-4">Description</h2>
                            <p className="text-black leading-relaxed mb-4">{propertyData.description}</p>
                            <h3 className="font-semibold text-black mb-2">Property Features:</h3>
                            <ul className="space-y-1 text-black">{propertyData.propertyFeatures.map((f, i) => <li key={i}>• {f}</li>)}</ul>
                        </div>

                        <div className="border-b-2 pb-6 mb-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-semibold text-black">Address</h2>
                                <a href={`https://www.google.com/maps?q=${propertyData.mapCoordinates.lat},${propertyData.mapCoordinates.lng}`} target="_blank" rel="noopener noreferrer" className="text-sm bg-black text-white px-3 py-1 rounded hover:bg-gray-800">Open on Google Maps</a>
                            </div>
                            <div className="border p-4 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 text-black">
                                <div><strong className="block">Address:</strong> {propertyData.address.street}</div>
                                <div><strong className="block">City:</strong> {propertyData.address.city}</div>
                                <div><strong className="block">Area:</strong> {propertyData.address.area}</div>
                            </div>
                            <div className="w-full h-80 rounded overflow-hidden"><iframe width="100%" height="100%" frameBorder="0" scrolling="no" src={mapSrc}></iframe></div>
                        </div>
                        
                         <div className="border-b-2 pb-6 mb-6">
                            <h2 className="text-xl font-semibold text-black mb-4">Features</h2>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-black">{propertyData.features.map((f, i) => <div key={i} className="flex items-center"><CheckmarkIcon /> {f}</div>)}</div>
                        </div>

                        <div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {images.map((img, i) => (
                                    <div key={i} className="h-48 rounded-md overflow-hidden cursor-pointer" onClick={() => openLightbox(i)}>
                                        <img src={img} alt={`Gallery image ${i + 1}`} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className="lg:col-span-1">
                        <div className="sticky top-10 border border-gray-300 rounded-sm p-6 shadow-lg">
                            <div className="flex items-center mb-6">
                                <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                                </div>
                                <div>
                                    <p className="font-bold text-black">BizVibez Property</p>
                                    <Link href="#" className="text-sm hover:underline" style={{ color: '#891e6d' }}>View Listings</Link>
                                </div>
                            </div>
                            <form className="space-y-4">
                                <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:border-[#891e6d] text-black placeholder-gray-500" />
                                <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:border-[#891e6d] text-black placeholder-gray-500" />
                                <div className="flex items-stretch w-full border border-gray-300 rounded-sm focus-within:ring-1 focus-within:border-[#891e6d]">
                                    <CountrySelector onSelect={handleCountrySelect} />
                                    <input type="tel" placeholder="050 123 4567" className="w-full px-4 py-2 bg-transparent focus:outline-none text-black placeholder-gray-500" />
                                </div>
                                <textarea rows={5} placeholder="I'm interested in this property..." className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:border-[#891e6d] text-black placeholder-gray-500"></textarea>
                                <button type="submit" style={{ backgroundColor: '#891e6d' }} className="w-full text-white font-bold py-3 px-4 rounded-sm hover:opacity-90 transition-opacity">
                                    Request Information
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {lightboxIndex !== null && (
                <Lightbox 
                    images={images}
                    startIndex={lightboxIndex}
                    onClose={closeLightbox}
                />
            )}
        </div>
    );
};

export default PropertyDetailClientView;