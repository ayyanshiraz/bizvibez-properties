'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link'; // 👈 CRUCIAL: Imports the Link component
import { LANDFORSALE, Plot } from '@/data/mockData';

// --- ANIMATION COMPONENT ---
const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });
        const currentRef = sectionRef.current;
        if (currentRef) observer.observe(currentRef);
        return () => { if (currentRef) observer.unobserve(currentRef); };
    }, []);
    return <div ref={sectionRef} className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>{children}</div>;
};

// --- SVG ICON ---
const AreaIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 3H3v18h18V3zM9 3v18M15 3v18M3 9h18M3 15h18"/>
    </svg>
);

// --- PLOT CARD COMPONENT ---
const PlotCard = ({ plot }: { plot: Plot }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startCarousel = () => {
        setIsHovered(true);
        intervalRef.current = setInterval(() => {
            setCurrentImageIndex(prev => (prev + 1) % plot.images.length);
        }, 1500);
    };

    const stopCarousel = () => {
        setIsHovered(false);
        if (intervalRef.current) clearInterval(intervalRef.current);
        setCurrentImageIndex(0);
    };

    useEffect(() => {
        return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    }, []);

    return (
        <div className="overflow-hidden group rounded-lg shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105" onMouseEnter={startCarousel} onMouseLeave={stopCarousel}>
            <div className="relative overflow-hidden">
                <img src={plot.images[currentImageIndex]} alt={plot.title} className="w-full h-72 object-cover transition-opacity duration-500"/>
                <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white text-xs font-bold uppercase px-3 py-1 rounded-md">For Sale</div>
                <div className={`absolute bottom-4 left-4 text-lg font-bold px-4 py-2 rounded-md transition-colors duration-300 ${isHovered ? 'bg-[#891e6d]' : 'bg-black bg-opacity-70'} text-white`}>{plot.price}</div>
                <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
                    {plot.images.map((_, idx) => <div key={idx} className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImageIndex === idx ? 'bg-white' : 'bg-white/50'}`}></div>)}
                </div>
            </div>
            <div className={`py-6 px-4 transition-colors duration-300 ${isHovered ? 'bg-[#891e6d]' : 'bg-white'}`}>
                <h3 className={`text-xl font-semibold mb-2 truncate ${isHovered ? 'text-white' : 'text-gray-900'}`}>{plot.title}</h3>
                <p className={`mb-4 ${isHovered ? 'text-gray-300' : 'text-gray-500'}`}>{plot.location}</p>
                <div className={`flex items-center ${isHovered ? 'text-gray-200' : 'text-gray-600'}`}>
                    <AreaIcon className={`transition-colors duration-300 ${isHovered ? 'text-gray-300' : 'text-gray-500'}`} />
                    <span className="ml-2">{plot.size} Sq Ft</span>
                </div>
            </div>
        </div>
    );
};

// --- LAND FOR SALE PAGE COMPONENT ---
export default function LandForSalePage() {
    return (
        <div className="font-sans bg-white text-gray-800">
            <section className="relative h-[80vh] bg-cover bg-center text-white" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/landforsale.jpg')" }}>
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6 md:p-12 pb-20">
                    <div className="max-w-5xl">
                        <p className="text-sm font-light mb-2">Land For Sale In Dubai</p>
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">Explore Premium Plots In Dubai's Prime Locations.</h1>
                    </div>
                </div>
            </section>
            
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <AnimatedSection>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {LANDFORSALE.map((plot) => (
                                // 👇 CRUCIAL: This wraps the card and makes it a clickable link
                                <Link href={`/land-for-sale/${plot.id}`} key={plot.id} className="block">
                                    <PlotCard plot={plot} />
                                </Link>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

