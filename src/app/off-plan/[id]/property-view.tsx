"use client";

import React, { useState } from 'react';

// --- TYPE DEFINITIONS ---
interface Tag {
  text: string;
  type: 'default' | 'featured' | 'new_launch';
}

interface DescriptionSection {
    title: string;
    content: string;
}

export interface Property {
    id: number;
    developer: string;
    name: string;
    location: string;
    price: string;
    size: string;
    bedrooms: string;
    image: string[];
    tags: Tag[];
    description: {
        intro: string;
        sections: DescriptionSection[];
    };
    features: string[];
    paymentPlan: {
        downPayment: string;
        duringConstruction: string;
        onHandover: string;
    };
    propertyId: string;
    propertyType: string;
    propertyStatus: string;
    lastUpdated: string;
    address: {
        city: string;
        area: string;
    };
}

// --- SVG Icons ---
const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const ShareIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12s-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.368a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" /></svg>;
const CheckIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-700" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>;
const UserIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-gray-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>;

// --- Agent/Enquiry Form Component ---
const EnquiryForm = () => (
    <div className="bg-white p-6 border rounded-md shadow-lg">
        <div className="flex items-center mb-4">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                <UserIcon />
            </div>
            <div>
                <p className="font-bold text-lg">Seven Luxury Real Estate</p>
                <a href="#" className="text-teal-600 hover:underline">View Listings</a>
            </div>
        </div>
        <form className="space-y-4">
            <input type="text" placeholder="Full Name" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
            <input type="email" placeholder="Email" className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
            <div className="flex">
                <select className="border rounded-l-md p-3 bg-gray-100 focus:outline-none">
                    <option>🇦🇪 +971</option>
                </select>
                <input type="tel" placeholder="050 123 4567" className="w-full p-3 border rounded-r-md focus:outline-none focus:ring-2 focus:ring-teal-500" />
            </div>
            <textarea placeholder="Your message..." rows={4} className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500"></textarea>
            <button type="submit" className="w-full bg-[#1e3c35] text-white font-bold py-3 rounded-md hover:bg-opacity-90 transition-colors">
                Request Information
            </button>
        </form>
    </div>
);

// --- Fullscreen Image Modal Component ---
const ImageModal = ({ images, currentIndex, onClose, onNext, onPrev }: { images: string[], currentIndex: number, onClose: () => void, onNext: () => void, onPrev: () => void }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 transition-opacity duration-300">
            <button onClick={onClose} className="absolute top-4 right-4 text-white text-3xl font-bold">&times;</button>
            <button onClick={onPrev} className="absolute left-4 text-white text-4xl font-bold">&#8249;</button>
            <img src={images[currentIndex]} alt="Fullscreen property view" className="max-w-[90vw] max-h-[90vh] object-contain"/>
            <button onClick={onNext} className="absolute right-4 text-white text-4xl font-bold">&#8250;</button>
        </div>
    );
};

// --- Main Client Component ---
export const PropertyDetailsComponent = ({ property }: { property: Property }) => {
    const [showAllImages, setShowAllImages] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImageIndex, setModalImageIndex] = useState(0);

    // --- Carousel Logic ---
    const nextSlide = () => {
        setCurrentSlide(currentSlide === property.image.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? property.image.length - 1 : currentSlide - 1);
    };

    // --- Modal Logic ---
    const openModal = (index: number) => {
        setModalImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const nextModalImage = () => {
        setModalImageIndex((prevIndex) => (prevIndex + 1) % property.image.length);
    };
    
    const prevModalImage = () => {
        setModalImageIndex((prevIndex) => (prevIndex - 1 + property.image.length) % property.image.length);
    };

    if (!property) {
        return <div className="flex items-center justify-center h-screen">Loading property...</div>;
    }
    
    return (
        <>
            <div className="bg-white text-gray-800 font-sans">
                
                {/* --- Hero Carousel Section --- */}
                <section className="relative h-[60vh] w-full overflow-hidden">
                    {property.image.map((src, index) => (
                         <div key={index} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
                            <img src={src} alt={`${property.name} hero image ${index + 1}`} className="w-full h-full object-cover cursor-pointer" onClick={() => openModal(index)} />
                            <div className="absolute inset-0 bg-black/40"></div>
                         </div>
                    ))}
                    <button onClick={prevSlide} className="absolute top-1/2 left-4 -translate-y-1/2 text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition">&#8249;</button>
                    <button onClick={nextSlide} className="absolute top-1/2 right-4 -translate-y-1/2 text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition">&#8250;</button>
                </section>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    {/* --- Main Grid --- */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* --- Left Column --- */}
                        <div className="lg:col-span-2 space-y-12">
                            {/* --- Header Section --- */}
                            <header>
                                <div className="text-sm text-gray-500 mb-4">
                                    <span>Home</span> &gt; <a href="#" className="text-teal-600 hover:underline">Apartment</a> &gt; <span className="text-gray-900">{property.name}</span>
                                </div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h1 className="text-3xl font-bold">{property.name}</h1>
                                        <div className="mt-3 flex items-center">
                                            <span className="bg-gray-800 text-white text-xs font-semibold px-3 py-1 rounded">OFF PLAN</span>
                                        </div>
                                        <div className="flex items-center text-gray-700 mt-3">
                                            <LocationIcon />
                                            <span>{property.location}</span>
                                        </div>
                                    </div>
                                    <div className="text-right flex-shrink-0">
                                        <button className="border p-2 rounded-md hover:bg-gray-100 mb-2">
                                            <ShareIcon />
                                        </button>
                                        <p className="text-2xl font-bold">Start From <span className="text-black">AED {property.price}</span></p>
                                    </div>
                                </div>
                            </header>

                            {/* --- Details Section --- */}
                            <section>
                                <div className="flex justify-between items-center mb-4 border-b pb-4">
                                    <h2 className="text-2xl font-bold">Details</h2>
                                    <p className="text-sm text-gray-500">Updated on {property.lastUpdated}</p>
                                </div>
                                <div className="border border-green-200 bg-green-50/30 rounded-lg p-6 grid grid-cols-2 gap-x-12 gap-y-4">
                                    <div className="flex justify-between items-center"><span>Property ID:</span> <strong>{property.propertyId}</strong></div>
                                    <div className="flex justify-between items-center"><span>Property Size:</span> <strong>From {property.size}</strong></div>
                                    <div className="flex justify-between items-center"><span>Price:</span> <strong>Start From AED {property.price}</strong></div>
                                    <div className="flex justify-between items-center"><span>Bedrooms:</span> <strong>{property.bedrooms}</strong></div>
                                    <div className="flex justify-between items-center"><span>Property Type:</span> <strong>{property.propertyType}</strong></div>
                                    <div className="flex justify-between items-center"><span>Property Status:</span> <strong>{property.propertyStatus}</strong></div>
                                </div>
                            </section>
                            
                            {/* --- Description Section --- */}
                            <section>
                                <h2 className="text-2xl font-bold mb-4 border-b pb-4">Description</h2>
                                <div className="space-y-6 text-gray-600 leading-relaxed">
                                    <p>{property.description.intro}</p>
                                    {property.description.sections.map(section => (
                                        <div key={section.title}>
                                            <h3 className="text-xl font-semibold text-gray-800 mb-2">{section.title}</h3>
                                            <p>{section.content}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            {/* --- Address Section --- */}
                            <section>
                                <h2 className="text-2xl font-bold mb-4 border-b pb-4">Address</h2>
                                <div className="grid grid-cols-2 gap-8">
                                    <div><strong>City:</strong> <span className="text-gray-600 float-right">{property.address.city}</span></div>
                                    <div><strong>Area:</strong> <span className="text-gray-600 float-right">{property.address.area}</span></div>
                                </div>
                            </section>

                            {/* --- Features Section --- */}
                            <section>
                                <h2 className="text-2xl font-bold mb-4 border-b pb-4">Features</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {property.features.map(feature => (
                                        <div key={feature} className="flex items-center">
                                            <CheckIcon />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                            
                            {/* --- Image Gallery --- */}
                            <section>
                                <h2 className="text-2xl font-bold mb-4 border-b pb-4">Gallery</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                                    {property.image.slice(0, showAllImages ? property.image.length : 8).map((src, index) => (
                                        <div key={index} className="relative group cursor-pointer" onClick={() => openModal(index)}>
                                            <img src={src} alt={`${property.name} Gallery Image ${index + 1}`} className="w-full h-48 object-cover rounded-md"/>
                                            {index === 7 && !showAllImages && property.image.length > 8 && (
                                                <div 
                                                    onClick={(e) => { e.stopPropagation(); setShowAllImages(true); }}
                                                    className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-2xl font-bold rounded-md"
                                                >
                                                    +{property.image.length - 8}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </section>
                        </div>

                        {/* --- Right Column (Sticky Form) --- */}
                        <aside className="lg:col-span-1">
                            <div className="sticky top-8">
                            <EnquiryForm />
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <ImageModal 
                    images={property.image}
                    currentIndex={modalImageIndex}
                    onClose={closeModal}
                    onNext={nextModalImage}
                    onPrev={prevModalImage}
                />
            )}
        </>
    );
};

