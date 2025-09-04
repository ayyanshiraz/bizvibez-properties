'use client';

import { useState, useEffect, useRef } from 'react';

// --- SVG ICON for Square Feet ---
const AreaIcon = ({ className = "w-5 h-5 text-gray-500" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 3H3v18h18V3zM9 3v18M15 3v18M3 9h18M3 15h18"/>
    </svg>
);

// --- PLOT CARD COMPONENT with Hover Effects & Carousel ---
interface Plot {
    title: string;
    location: string;
    size: string;
    price: string;
    images: string[];
}

export const PlotCard = ({ plot }: { plot: Plot }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startCarousel = () => {
        setIsHovered(true);
        intervalRef.current = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % plot.images.length);
        }, 1500); // Change image every 1.5 seconds
    };

    const stopCarousel = () => {
        setIsHovered(false);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        setCurrentImageIndex(0); // Reset to the first image
    };

    useEffect(() => {
        // Cleanup interval on component unmount
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <div
            className="overflow-hidden group rounded-lg shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105"
            onMouseEnter={startCarousel}
            onMouseLeave={stopCarousel}
        >
            <div className="relative overflow-hidden">
                <img src={plot.images[currentImageIndex]} alt={plot.title} className="w-full h-72 object-cover transition-opacity duration-500 ease-in-out"/>
                <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white text-xs font-bold uppercase px-3 py-1 rounded-md">For Sale</div>
                <div className={`absolute bottom-4 left-4 text-lg font-bold px-4 py-2 rounded-md transition-colors duration-300 ${isHovered ? 'bg-[#891e6d]' : 'bg-black bg-opacity-70'} text-white`}>{plot.price}</div>
                 <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
                    {plot.images.map((_, idx) => (
                        <div key={idx} className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImageIndex === idx ? 'bg-white' : 'bg-white/50'}`}></div>
                    ))}
                </div>
            </div>
            <div className={`py-6 px-4 transition-colors duration-300 ${isHovered ? 'bg-[#891e6d]' : 'bg-white'}`}>
                <h3 className={`text-xl font-semibold mb-2 truncate ${isHovered ? 'text-white' : 'text-gray-900'}`}>{plot.title}</h3>
                <p className={`mb-4 ${isHovered ? 'text-gray-300' : 'text-gray-500'}`}>{plot.location}</p>
                <div className={`flex items-center ${isHovered ? 'text-gray-200' : 'text-gray-600'}`}>
                    <AreaIcon className={`w-5 h-5 transition-colors duration-300 ${isHovered ? 'text-gray-300' : 'text-gray-500'}`} />
                    <span className="ml-2">{plot.size} Sq Ft</span>
                </div>
            </div>
        </div>
    );
};

