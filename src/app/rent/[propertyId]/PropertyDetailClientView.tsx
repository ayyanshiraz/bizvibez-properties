"use client";

import React, { useState, useEffect, useRef, FormEvent, ChangeEvent } from 'react';
import { ForRentProperty } from '@/app/rent/rent-data';
import { Country, countries } from '@/app/rent/countries';

// --- Define a type for the component's props ---
interface PropertyDetailClientViewProps {
  propertyData: ForRentProperty;
}

// --- COUNTRY SELECTOR COMPONENT (Unchanged) ---
const CountrySelector: React.FC<{ onSelect: (country: Country) => void }> = ({ onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState(countries.find(c => c.code === 'AE') || countries[0]);
    const [searchTerm, setSearchTerm] = useState("");
    const selectorRef = useRef<HTMLDivElement>(null);

    const handleSelect = (country: Country) => {
        setSelectedCountry(country);
        onSelect(country);
        setIsOpen(false);
        setSearchTerm("");
    };
    
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (selectorRef.current && !selectorRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [selectorRef]);

    const filteredCountries = countries.filter(c => 
        c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        c.dial_code.includes(searchTerm)
    );

    return (
        <div className="relative" ref={selectorRef}>
            <button
                type="button"
                className="flex items-center space-x-2 p-2 bg-gray-50 h-full"
                onClick={() => setIsOpen(!isOpen)}
            >
                <img 
                    src={`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`}
                    width="20"
                    alt={`${selectedCountry.name} flag`}
                />
                <span className="text-black text-sm">{selectedCountry.dial_code}</span>
            </button>

            {isOpen && (
                <div className="absolute z-10 bottom-full mb-2 w-72 bg-white border border-gray-300 rounded-md shadow-lg">
                    <div className="p-2">
                        <input
                            type="text"
                            placeholder="Search country..."
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#891e6d]"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <ul className="max-h-60 overflow-y-auto">
                        {filteredCountries.map((country) => (
                            <li
                                key={country.code}
                                className="flex items-center space-x-3 px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleSelect(country)}
                            >
                                 <img 
                                    src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                                    width="20"
                                    alt={`${country.name} flag`}
                                />
                                <span className="text-black text-sm flex-1">{country.name}</span>
                                <span className="text-gray-500 text-sm">{country.dial_code}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};


// --- SVG ICONS (Unchanged) ---
const ChevronLeftIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>;
const ChevronRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>;
const ShareIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>;
const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>;
const CheckmarkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>;
const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;

// --- Main Client Component ---
const PropertyDetailClientView: React.FC<PropertyDetailClientViewProps> = ({ propertyData }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    // --- ADDED: State for the form ---
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: `I'm interested in renting the property: ${propertyData.title}`,
    });
    const [selectedDialCode, setSelectedDialCode] = useState('+971'); // Default dial code
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const images = propertyData.images ? [propertyData.image, ...propertyData.images] : [propertyData.image];

    // --- Carousel & Lightbox Functions (Unchanged) ---
    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation(); 
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setIsLightboxOpen(true);
    };
    const closeLightbox = () => setIsLightboxOpen(false);
    const nextLightboxImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setLightboxIndex((prev) => (prev + 1) % images.length);
    };
    const prevLightboxImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
    };
    
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isLightboxOpen) {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowRight') setLightboxIndex((prev) => (prev + 1) % images.length);
                if (e.key === 'ArrowLeft') setLightboxIndex((prev) => (prev - 1 + images.length) % images.length);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isLightboxOpen, images.length]);

    // --- ADDED: Form handling logic ---
    const handleCountrySelect = (country: Country) => {
        setSelectedDialCode(country.dial_code);
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setStatusMessage('');

        const fullPhoneNumber = `${selectedDialCode} ${formData.phone}`;

        try {
            const response = await fetch('/.netlify/functions/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    phone: fullPhoneNumber,
                    propertyName: propertyData.title, // Send property name
                    formType: 'Rental Inquiry', // Specific form identifier
                }),
            });

            const result = await response.json();
            setStatusMessage(result.message);

            if (response.ok) {
                // Clear the form on success
                setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    message: `I'm interested in renting the property: ${propertyData.title}`,
                });
            }
        } catch (error) {
            console.error("Form submission error:", error);
            setStatusMessage('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };


    const mapSrc = `https://maps.google.com/maps?q=${propertyData.mapCoordinates.lat},${propertyData.mapCoordinates.lng}&hl=en&z=14&output=embed`;

    return (
        <div className="bg-white font-sans">
            {/* --- HERO IMAGE CAROUSEL --- */}
            {images.length > 0 && (
                <div className="relative w-full h-[60vh] bg-gray-900 group">
                    <div onClick={() => openLightbox(currentImageIndex)} className="w-full h-full cursor-pointer">
                        <img src={images[currentImageIndex]} alt={`Property view ${currentImageIndex + 1}`} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute inset-0 bg-opacity-30 pointer-events-none"></div>
                    <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100"><ChevronLeftIcon /></button>
                    <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-opacity opacity-0 group-hover:opacity-100"><ChevronRightIcon /></button>
                </div>
            )}
            
            <div className="container mx-auto max-w-6xl p-4 sm:p-6 lg:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    
                    {/* --- LEFT (MAIN CONTENT) COLUMN --- */}
                    <div className="lg:col-span-2">
                        <div className="flex justify-between items-start mb-4">
                            <p className="text-sm text-gray-500">
                                <a href="/" className="hover:text-black">Home</a> / <a href="/rent" className="hover:text-black">Apartment</a> / <span>{propertyData.title}</span>
                            </p>
                            <div className="text-right flex items-center">
                                <div>
                                    <p className="text-gray-500 text-sm">Start From AED</p>
                                    <p className="text-black text-2xl font-bold">{propertyData.price} Per Annum</p>
                                </div>
                                <button type="button" className="p-2 ml-4 border rounded-md hover:bg-gray-100"><ShareIcon /></button>
                            </div>
                        </div>

                        <div className="pb-6 mb-6">
                            <h1 className="text-3xl font-semibold text-black">{propertyData.title}</h1>
                            <div className="mt-2"><span className="bg-gray-700 text-white text-xs font-semibold px-3 py-1 rounded-sm">FOR RENT</span></div>
                            <p className="text-gray-500 mt-2 flex items-center"><MapPinIcon /> {propertyData.location}</p>
                        </div>
                        
                        {/* --- Details, Description, etc. (Unchanged) --- */}
                        <div className="border-b-2 pb-6 mb-6">
                            <div className="flex justify-between items-center mb-4"><h2 className="text-xl font-semibold text-black">Details</h2><p className="text-sm text-gray-500">Updated on {propertyData.updatedOn}</p></div>
                            <div className="border border-green-200 bg-green-50 p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-black">
                                <div><strong className="block">Property ID:</strong> {propertyData.propertyId}</div><div><strong className="block">Bathrooms:</strong> {propertyData.bathrooms}</div>
                                <div><strong className="block">Price:</strong> Start From AED {propertyData.price} Per Annum</div><div><strong className="block">Property Type:</strong> {propertyData.type}</div>
                                <div><strong className="block">Property Size:</strong> {propertyData.size} Sq.Ft</div><div><strong className="block">Property Status:</strong> {propertyData.status}</div>
                                <div><strong className="block">Bedrooms:</strong> {propertyData.bedrooms}</div>
                            </div>
                        </div>
                        <div className="border-b-2 pb-6 mb-6"><h2 className="text-xl font-semibold text-black mb-4">Description</h2><p className="text-black leading-relaxed">{propertyData.description}</p></div>
                        <div className="border-b-2 pb-6 mb-6">
                            <div className="flex justify-between items-center mb-4"><h2 className="text-xl font-semibold text-black">Address</h2><a href={`https://www.google.com/maps?q=${propertyData.mapCoordinates.lat},${propertyData.mapCoordinates.lng}`} target="_blank" rel="noopener noreferrer" className="text-sm bg-black text-white px-3 py-1 rounded hover:bg-gray-800">Open on Google Maps</a></div>
                            <div className="border p-4 grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4 text-black"><div><strong className="block">Address:</strong> {propertyData.address.street}</div><div><strong className="block">City:</strong> {propertyData.address.city}</div><div><strong className="block">Area:</strong> {propertyData.address.area}</div></div>
                            <div className="w-full h-80 rounded overflow-hidden"><iframe width="100%" height="100%" title="property-map" frameBorder="0" scrolling="no" src={mapSrc}></iframe></div>
                        </div>
                        <div className="border-b-2 pb-6 mb-6"><h2 className="text-xl font-semibold text-black mb-4">Features</h2><div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-black">{propertyData.features.map((f, i) => <div key={i} className="flex items-center"><CheckmarkIcon /> {f}</div>)}</div></div>
                        <div><div className="grid grid-cols-2 sm:grid-cols-3 gap-4">{images.map((img, i) => (<div key={i} className="h-48 rounded-md overflow-hidden cursor-pointer group relative" onClick={() => openLightbox(i)}><img src={img} alt={`Gallery image ${i + 1}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" /><div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40 transition-colors"></div></div>))}</div></div>
                    </div>
                    
                    {/* --- RIGHT (AGENT FORM) COLUMN (NOW FUNCTIONAL) --- */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-10 border border-gray-300 rounded-sm p-6 shadow-lg">
                            <div className="flex items-center mb-6">
                                <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center mr-4"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg></div>
                                <div><p className="font-bold text-black">BizVibez Property</p><a href="#" className="text-sm hover:underline" style={{ color: '#891e6d' }}>View Listings</a></div>
                            </div>
                            
                            {/* UPDATED FORM TAG AND INPUTS */}
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input type="text" name="fullName" placeholder="Full Name" required value={formData.fullName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-[#891e6d] text-black placeholder-gray-500 transition-colors duration-200" />
                                <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-[#891e6d] text-black placeholder-gray-500 transition-colors duration-200" />
                                <div className="flex items-stretch w-full border border-gray-300 rounded-sm focus-within:border-[#891e6d] transition-colors duration-200">
                                    <CountrySelector onSelect={handleCountrySelect} />
                                    <input type="tel" name="phone" placeholder="050 123 4567" required value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 bg-transparent focus:outline-none text-black placeholder-gray-500" />
                                </div>
                                <textarea name="message" rows={5} required value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-[#891e6d] text-black placeholder-gray-500 transition-colors duration-200"></textarea>
                                
                                {/* Status Message Display */}
                                {statusMessage && (
                                    <div className={`p-3 text-center rounded-md text-sm ${statusMessage.toLowerCase().includes('error') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                                        {statusMessage}
                                    </div>
                                )}

                                <button type="submit" disabled={loading} style={{ backgroundColor: '#891e6d' }} className="w-full text-white font-bold py-3 px-4 rounded-sm hover:opacity-90 transition-opacity disabled:opacity-70 disabled:cursor-not-allowed">
                                    {loading ? 'Sending...' : 'Request Information'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- LIGHTBOX MODAL (Unchanged) --- */}
            {isLightboxOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 animate-fade-in" onClick={closeLightbox}>
                    <button onClick={closeLightbox} className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10"><CloseIcon/></button>
                    <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                        <button onClick={prevLightboxImage} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 p-2 rounded-full hover:bg-opacity-60 text-white z-10"><ChevronLeftIcon /></button>
                        <img src={images[lightboxIndex]} alt="Fullscreen property view" className="max-w-[95vw] max-h-[85vh] object-contain select-none" />
                        <button onClick={nextLightboxImage} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 p-2 rounded-full hover:bg-opacity-60 text-white z-10"><ChevronRightIcon/></button>
                        <div className="absolute bottom-4 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">{lightboxIndex + 1} / {images.length}</div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default PropertyDetailClientView;

