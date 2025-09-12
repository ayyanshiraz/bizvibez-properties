'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

// --- Import your unified data and type ---
import { allProperties, Property } from '../data/properties'; // Adjust this path if your folder structure is different

// --- SVG ICONS ---
const AreaIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M21 3H3v18h18V3zM9 3v18M15 3v18M3 9h18M3 15h18"/>
    </svg>
);

const BedIcon = ({ className = "w-5 h-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M2 4v16h20V4H2z" />
        <path d="M2 9h20" />
        <path d="M12 14v5" />
        <path d="M8 12v7" />
        <path d="M16 12v7" />
    </svg>
);


// --- PLOT CARD COMPONENT ---
interface Plot {
    title: string;
    location: string;
    size: string;
    price: string;
    images: string[];
}

const PlotCard = ({ plot }: { plot: Plot }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const startCarousel = () => {
        setIsHovered(true);
        intervalRef.current = setInterval(() => {
            setCurrentImageIndex(prevIndex => (prevIndex + 1) % plot.images.length);
        }, 1500);
    };

    const stopCarousel = () => {
        setIsHovered(false);
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        setCurrentImageIndex(0);
    };

    useEffect(() => {
        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, []);

    return (
        <div className="overflow-hidden group rounded-lg shadow-md transition-all duration-300 hover:shadow-2xl hover:scale-105" onMouseEnter={startCarousel} onMouseLeave={stopCarousel}>
            <div className="relative overflow-hidden">
                <img src={plot.images[currentImageIndex]} alt={plot.title} className="w-full h-72 object-cover transition-opacity duration-500 ease-in-out"/>
                <div className="absolute top-4 right-4 bg-black bg-opacity-70 text-white text-xs font-bold uppercase px-3 py-1 rounded-md">For Sale</div>
                <div className={`absolute bottom-4 left-4 text-lg font-bold px-4 py-2 rounded-md transition-colors duration-300 ${isHovered ? 'bg-[#8c1e6e]' : 'bg-black bg-opacity-70'} text-white`}>{plot.price}</div>
                 <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
                    {plot.images.map((_, idx) => (<div key={idx} className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImageIndex === idx ? 'bg-white' : 'bg-white/50'}`}></div>))}
                </div>
            </div>
            <div className={`py-6 px-4 transition-colors duration-300 ${isHovered ? 'bg-[#8c1e6e]' : 'bg-white'}`}>
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


// --- OFF-PLAN PROPERTY CARD ---
const OffPlanPropertyCard = ({ property }: { property: Property }) => {
    const imageUrl = Array.isArray(property.image) && property.image.length > 0 ? property.image[0] : '/placeholder.jpg';
    
    const getTagClass = (type: string) => {
        switch (type) {
            case 'featured': return 'bg-yellow-500 text-white';
            case 'new_launch': return 'bg-blue-500 text-white';
            default: return 'bg-gray-700 text-white';
        }
    }

    return (
        <Link href={`/off-plan/${property.id}`} className="block group">
            <div className="bg-white rounded-xl shadow-md overflow-hidden h-full flex flex-col transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <div className="relative">
                    <img className="h-56 w-full object-cover" src={imageUrl} alt={property.name} />
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                        {property.tags?.map((tag: {text: string, type: string}) => (
                            <span key={tag.text} className={`text-xs font-semibold uppercase px-3 py-1 rounded-full ${getTagClass(tag.type)}`}>
                                {tag.text}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="p-6 border-b border-gray-200 flex-grow">
                     <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        {property.bedrooms && <span className="flex items-center"><BedIcon className="mr-2 text-gray-400"/> {property.bedrooms}</span>}
                        {property.size && <span className="flex items-center"><AreaIcon className="mr-2 text-gray-400"/> From {property.size} Sq.Ft</span>}
                    </div>
                     <p className="text-sm text-gray-800">Start From <span className="text-lg font-bold text-[#8c1e6e]">AED {parseInt(property.price).toLocaleString()}</span></p>
                </div>
                <div className="px-6 py-4 bg-gray-50 transition-colors duration-300 group-hover:bg-[#8c1e6e]">
                    <h3 className="font-bold text-lg text-gray-900 truncate transition-colors group-hover:text-white">{property.name}</h3>
                    <p className="text-sm text-gray-600 mt-1 transition-colors group-hover:text-gray-200">{property.location}</p>
                </div>
            </div>
        </Link>
    );
};

// --- FEATURED PROPERTIES SLIDER COMPONENT ---
const FeaturedPropertiesSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const featuredIds = [3, 4, 5, 6, 7, 8, 9, 10, 11];
    const featuredOffPlan = allProperties.filter(p => p.propertyStatus === 'Off Plan' && featuredIds.includes(Number(p.id)));
    
    const chunkArray = (arr: Property[], size: number): Property[][] => {
        const chunkedArr = [];
        for (let i = 0; i < arr.length; i += size) {
            chunkedArr.push(arr.slice(i, i + size));
        }
        return chunkedArr;
    };

    const slides = chunkArray(featuredOffPlan, 3);
    const totalSlides = slides.length;

    const nextSlide = () => setCurrentSlide(prev => (prev + 1) % totalSlides);
    const prevSlide = () => setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);

    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.15 } 
        );
        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className={`py-20 bg-gray-50 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-1/4'}`}>
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-[#8c1e6e]">Featured Properties in Dubai</h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">Explore a curated selection of premier off-plan projects from the city's top developers.</p>
                </div>

                <div className="relative">
                    <div className="overflow-hidden">
                        <div className="flex transition-transform duration-500 ease-in-out py-4" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                            {slides.map((slide, index) => (
                                <div key={index} className="w-full flex-shrink-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-1">
                                    {slide.map(property => ( <OffPlanPropertyCard key={property.id} property={property} /> ))}
                                </div>
                            ))}
                        </div>
                    </div>

                    {totalSlides > 1 && (
                        <>
                            <button onClick={prevSlide} className="absolute top-1/2 -left-4 md:-left-6 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition z-10"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg></button>
                            <button onClick={nextSlide} className="absolute top-1/2 -right-4 md:-right-6 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition z-10"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg></button>
                        </>
                    )}
                </div>

                {totalSlides > 1 && (
                    <div className="flex justify-center space-x-2 mt-8">
                        {slides.map((_, index) => (<button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-[#8c1e6e] scale-125' : 'bg-gray-300'}`}></button>))}
                    </div>
                )}
                
                <div className="text-center mt-12">
                    <Link href="/off-plan" className="inline-block bg-[#8c1e6e] text-white font-bold py-3 px-8 rounded-lg transition-transform duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                        View All Properties
                    </Link>
                </div>
            </div>
        </section>
    );
};


// --- OTHER COMPONENTS ---
const InteractivePieChart = ({ offplanPercent, secondaryPercent, color1, color2 }: { offplanPercent: number, secondaryPercent: number, color1: string, color2: string }) => {
    const [hoveredSlice, setHoveredSlice] = useState<'offplan' | 'secondary' | null>(null); const getCoordinatesForPercent = (percent: number) => { const x = Math.cos(2 * Math.PI * percent); const y = Math.sin(2 * Math.PI * percent); return [x, y]; }; const getSlicePath = (startPercent: number, endPercent: number) => { const start = getCoordinatesForPercent(startPercent); const end = getCoordinatesForPercent(endPercent); const largeArcFlag = endPercent - startPercent > 0.5 ? 1 : 0; return `M ${start[0]} ${start[1]} A 1 1 0 ${largeArcFlag} 1 ${end[0]} ${end[1]} L 0 0 Z`; }; const getTransform = (startPercent: number, endPercent: number, isHovered: boolean) => { if (!isHovered) return ''; const midAngle = 2 * Math.PI * (startPercent + (endPercent - startPercent) / 2); const popoutDistance = 0.08; const x = Math.cos(midAngle) * popoutDistance; const y = Math.sin(midAngle) * popoutDistance; return `translate(${x}, ${y})`; }; const offplanPath = getSlicePath(0, offplanPercent / 100); const secondaryPath = getSlicePath(offplanPercent / 100, 1);
    return (<div className="relative w-48 h-48 cursor-pointer"><svg viewBox="-1.1 -1.1 2.2 2.2" className="transform -rotate-90"><g transform={getTransform(0, offplanPercent / 100, hoveredSlice === 'offplan')} onMouseEnter={() => setHoveredSlice('offplan')} onMouseLeave={() => setHoveredSlice(null)} style={{ transition: 'transform 0.3s ease-in-out' }}><path d={offplanPath} fill={color1} /></g><g transform={getTransform(offplanPercent / 100, 1, hoveredSlice === 'secondary')} onMouseEnter={() => setHoveredSlice('secondary')} onMouseLeave={() => setHoveredSlice(null)} style={{ transition: 'transform 0.3s ease-in-out' }}><path d={secondaryPath} fill={color2} /></g></svg></div>);
};
const googleReviews = [ { name: 'Faraz Shahbaz', avatarInitial: 'F', review: 'BizVibez delivers outstanding consultancy services for our company bank account with a high level of professionalism and insight. Their team quickly understood our needs and provided clear, effective strategies that made a real impact.' }, { name: 'Nida Jawaid', avatarInitial: 'N', review: 'BizVibeZ Consultants are the super star in Dubai . They are the best company and will guide you step by step. We applied for freelance viza and they completed all the steps in a blink. I would recommend them to all . If u want to make your future bright do consult them . They are 💯 percent trustworthy.' }, { name: 'Zmovik Vadim', avatarInitial: 'Z', review: 'Highly recommend this team for UAE visa support! Their professionalism and positive attitude made the whole process smooth, stress-free and super fast. Special thanks to the director Emran, for the personal attention and guidance throughout.' }, { name: 'Rfaat Souyoufi', avatarInitial: 'R', review: 'I got excellent consultation for my request and it was difficult for me to open business account and they help me a lot to open two businesses accounts, they are very good team. I’m very thankful for them.' }, { name: 'Irfane Molou', avatarInitial: 'I', review: 'BizVibeZ consultants are truly amazing, Ive had the joy of working with them, from the very beginning till the very end they will walk you through all the steps to set up everything you need professionally. This team is truly hardworking and just does not give up. 5 stars all the way!' }, { name: 'Mohammed Khan', avatarInitial: 'M', review: 'We\'ve worked with several real estate agencies in the UAE, and Bizvibez is by far the best. Their dedication and attention to detail are unmatched. They found us an incredible investment property.' }, { name: 'Fatima Al Salem', avatarInitial: 'F', review: 'Their knowledge of off-plan projects is impressive. The team provided a clear and honest assessment of various opportunities, helping us make a confident and profitable investment. Thank you, Bizvibez!' },];
const ReviewsSection = () => {
    const [currentReview, setCurrentReview] = useState(0); useEffect(() => { const timer = setInterval(() => { setCurrentReview(prev => (prev + 1) % googleReviews.length); }, 5000); return () => clearInterval(timer); }, []); const nextReview = () => setCurrentReview(prev => (prev + 1) % googleReviews.length); const prevReview = () => setCurrentReview(prev => (prev - 1 + googleReviews.length) % googleReviews.length);
    return (<div className="md:w-1/2"><div className="flex items-center mb-4"><img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-8 h-8 mr-4" /><div><p className="font-bold text-lg">Reviews On Google</p><div className="flex items-center"><span className="font-bold mr-2">5.0</span><div className="flex text-yellow-500">{'★'.repeat(5)}</div></div><a href="https://www.google.com/search?q=Bizvibez+Group+Reviews" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-500 hover:underline">See All Our Reviews</a></div></div><div className="relative bg-white rounded-lg shadow-lg border border-gray-200 min-h-[320px] flex flex-col overflow-hidden"><div className="relative flex-grow">{googleReviews.map((review, index) => (<div key={index} className={`absolute inset-0 p-6 transition-all duration-500 ease-in-out`} style={{ transform: `translateX(${(index - currentReview) * 100}%)`, opacity: index === currentReview ? 1 : 0 }}><div className="flex items-center mb-4"><span className="w-10 h-10 bg-[#8c1e6e] text-white flex items-center justify-center rounded-full font-bold mr-4">{review.avatarInitial}</span><div><p className="font-semibold">{review.name}</p><p className="text-sm text-gray-500">Google Review</p></div><img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google" className="w-5 h-5 ml-auto" /></div><p className="text-gray-600 leading-relaxed">{review.review}</p></div>))}</div><div className="absolute bottom-6 right-6 flex space-x-2 z-10"><button onClick={prevReview} className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path></svg></button><button onClick={nextReview} className="p-2 rounded-full border border-gray-300 hover:bg-gray-100"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg></button></div><div className="absolute bottom-6 left-6 flex text-yellow-500 z-10">{'★'.repeat(5)}</div></div></div>);
};
const AnimatedCounter = ({ end, duration, suffix = '' }: { end: number; duration: number; suffix?: string }) => {
  const [count, setCount] = useState(0); const ref = useRef<HTMLParagraphElement>(null); useEffect(() => { const observer = new IntersectionObserver((entries) => { if (entries[0].isIntersecting) { let start = 0; const endValue = end; const stepTime = Math.max(1, Math.floor(duration / endValue)); const increment = Math.ceil(endValue / (duration / stepTime)); const timer = setInterval(() => { start += increment; if (start >= endValue) { setCount(endValue); clearInterval(timer); } else { setCount(start); } }, stepTime); observer.disconnect(); } }, { threshold: 0.5 }); if (ref.current) observer.observe(ref.current); return () => { if (ref.current) observer.unobserve(ref.current); }; }, [end, duration]);
  return <p ref={ref} className="text-3xl font-bold text-white">{count.toLocaleString()}{suffix}</p>;
};
const featuredPlots = [ { title: 'Plot For Sale In Jumeirah Garden City', location: 'Jumeirah Garden City, Dubai', size: '10,000', price: 'AED 28,000,000', images: ['/p12.webp','/p11.webp', '/p14.webp', '/p13.webp'] }, { title: 'Land For Sale In Al Furjan (Mixed Use)', location: 'Al Furjan, Dubai', size: '23,000', price: 'AED 35,000,000', images: ['/p21.webp', '/p22.webp', '/p23.webp' , '/p24.webp'] }, { title: 'G+Unlimited Plot For Sale In JVC', location: 'Jumeirah Village Circle, Dubai', size: '16,700', price: 'AED 44,000,000', images: ['/p31.webp', '/p32.webp', '/p33.webp' , '/p34.webp'] },];
const locations = ["Dubai", "Dubai Hills", "Downtown Dubai", "Dubai Marina", "Palm Jumeirah"];

// --- HOMEPAGE COMPONENT ---
const HomePage = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [locationIndex, setLocationIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [activeTab, setActiveTab] = useState<'For Sale' | 'For Rent' | 'Off Plan'>('For Sale');
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState<Property[]>([]);
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    
    useEffect(() => { const timer = setTimeout(() => setIsLoading(false), 3000); return () => clearTimeout(timer); }, []);
    useEffect(() => { if (isLoading) return; const currentLocation = locations[locationIndex]; let timeoutId: NodeJS.Timeout; if (isDeleting) { if (displayedText.length > 0) { timeoutId = setTimeout(() => setDisplayedText(currentLocation.substring(0, displayedText.length - 1)), 100); } else { setIsDeleting(false); setLocationIndex((prevIndex) => (prevIndex + 1) % locations.length); } } else { if (displayedText.length < currentLocation.length) { timeoutId = setTimeout(() => setDisplayedText(currentLocation.substring(0, displayedText.length + 1)), 150); } else { timeoutId = setTimeout(() => setIsDeleting(true), 2000); } } return () => clearTimeout(timeoutId); }, [displayedText, isDeleting, locationIndex, isLoading]);
    useEffect(() => { if (searchQuery.length > 1) { const lowercasedQuery = searchQuery.toLowerCase(); const filteredData = allProperties.filter(property => { const isCorrectStatus = (activeTab === 'For Sale' && property.status === 'For Sale') || (activeTab === 'For Rent' && property.status === 'For Rent') || (activeTab === 'Off Plan' && property.propertyStatus === 'Off Plan'); if (!isCorrectStatus) return false; const title = (property.title || property.name || '').toLowerCase(); const location = (property.location || '').toLowerCase(); const propId = (property.propertyId || '').toLowerCase(); return title.includes(lowercasedQuery) || location.includes(lowercasedQuery) || propId.includes(lowercasedQuery); }); setSearchResults(filteredData); } else { setSearchResults([]); } }, [searchQuery, activeTab]);
    const getLinkPrefix = (tab: 'For Sale' | 'For Rent' | 'Off Plan') => { switch (tab) { case 'For Sale': return '/buy'; case 'For Rent': return '/rent'; case 'Off Plan': return '/off-plan'; default: return '/'; } };
    const handleSearchSubmit = (e: React.MouseEvent<HTMLButtonElement>) => { e.preventDefault(); if (searchQuery.length > 0 && searchResults.length === 0) { const path = getLinkPrefix(activeTab); router.push(path); } };

    return (
        <>
            <div style={{ backgroundColor: '#fefefe' }} className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-1000 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}><img src="/FNL.gif" alt="Loading..." width={192} height={192} /></div>
            
            <section className="relative h-screen flex flex-col items-center justify-center text-center text-white overflow-hidden">
                <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover z-0"><source src="/hero-video.mp4" type="video/mp4" />Your browser does not support the video tag.</video>
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>
                <div className="relative z-20 flex flex-col items-center px-4 w-full mb-20">
                    <div className="min-h-[150px] flex flex-col justify-center w-full max-w-4xl text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">Search Luxury Homes<br />In <span style={{ color: '#8c1e6e' }}>{displayedText}</span><span className="animate-ping">|</span></h1>
                        <div className="flex justify-center mb-8"><img src="/Slogan.png" alt="Invest In Your Future, Explore Luxury Real Estate Opportunities." width={400} height={40} /></div>
                    </div>
                    <div className="w-full max-w-4xl">
                        <div className="flex mb-2"><button onClick={() => setActiveTab('For Rent')} className={`py-2 px-6 bg-transparent font-semibold transition-colors duration-300 ${activeTab === 'For Rent' ? 'text-white border-b-4 border-purple-600' : 'text-gray-300 hover:text-white'}`}>For Rent</button><button onClick={() => setActiveTab('For Sale')} className={`py-2 px-6 bg-transparent font-semibold transition-colors duration-300 ${activeTab === 'For Sale' ? 'text-white border-b-4 border-purple-600' : 'text-gray-300 hover:text-white'}`}>For Sale</button><button onClick={() => setActiveTab('Off Plan')} className={`py-2 px-6 bg-transparent font-semibold transition-colors duration-300 ${activeTab === 'Off Plan' ? 'text-white border-b-4 border-purple-600' : 'text-gray-300 hover:text-white'}`}>Off Plan</button></div>
                        <div className="relative">
                            <div className="bg-white p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-4"><select className="w-full md:w-auto p-3 bg-gray-100 rounded-md text-gray-600 focus:outline-none border-r-8 border-transparent"><option>Property Type</option><option>Apartment</option><option>Villa</option><option>Townhouse</option></select><input type="text" placeholder="Search by Location, Title, or Property ID..." className="w-full p-3 text-gray-700 focus:outline-none border-t border-b md:border-none" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onFocus={() => setIsSearchFocused(true)} onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)} /><button style={{ backgroundColor: '#8c1e6e' }} className="w-full md:w-auto text-white font-bold py-3 px-8 rounded-md hover:opacity-90 transition duration-300" onClick={handleSearchSubmit}>Search</button></div>
                            {isSearchFocused && searchQuery.length > 1 && (<div className="absolute top-full mt-2 w-full bg-white rounded-lg shadow-2xl z-30 overflow-hidden border border-gray-200 max-h-80 overflow-y-auto"> {searchResults.length > 0 ? (<ul> {searchResults.map((property) => { const linkHref = `${getLinkPrefix(activeTab)}/${property.id}`; const displayTitle = property.title || property.name; const imageSrc = Array.isArray(property.image) ? property.image[0] : property.image; return (<li key={property.propertyId}><Link href={linkHref} className="flex items-center p-4 hover:bg-gray-100 transition-colors"><img src={imageSrc} alt={displayTitle} className="w-20 h-16 object-cover rounded-md mr-4 flex-shrink-0 bg-gray-200" /><div className="flex-grow overflow-hidden"><p className="font-semibold text-gray-800 truncate">{displayTitle}</p><div className="flex justify-between text-sm text-gray-500 mt-1"><span className="truncate pr-2">{property.location}</span><span className="font-mono text-xs flex-shrink-0">{property.propertyId}</span></div></div></Link></li>); })}</ul>) : (<div className="p-4 text-center text-gray-500">No properties found for "{searchQuery}".</div>)}</div>)}
                        </div>
                    </div>
                </div>
            </section>
            
            <FeaturedPropertiesSlider />
            
            <section className="py-20 bg-cover bg-center text-white" style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.92)), url('/guides/hero/downtown.jpeg')" }}>
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16"><h2 className="text-4xl md:text-5xl font-bold">Dubai Real Estate Market Report</h2><p className="text-xl text-gray-300 mt-2">JULY 2025</p></div>
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <div className="space-y-12 text-center md:text-left"><div><h3 className="text-6xl font-bold">65B</h3><p className="text-gray-300">TOTAL SALES VALUE IN AED</p><p className="text-green-400 mt-1 text-lg">▲ 29.5% <span className="text-gray-400">increase when compared to July 2024</span></p></div><div><h3 className="text-6xl font-bold">20,304</h3><p className="text-gray-300">TOTAL SALES TRANSACTIONS</p><p className="text-green-400 mt-1 text-lg">▲ 24.9% <span className="text-gray-400">increase when compared to July 2024</span></p></div></div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8"><div className="flex flex-col items-center"><InteractivePieChart offplanPercent={66} secondaryPercent={34} color1="#f3b562" color2="#8c1e6e" /><h4 className="font-bold text-xl mt-4">VALUE</h4><ul className="text-sm mt-2 space-y-1 text-left"><li className="flex items-center"><span className="w-3 h-3 rounded-full bg-[#f3b562] mr-2"></span>OFFPLAN: 42.2B</li><li className="flex items-center"><span className="w-3 h-3 rounded-full bg-[#8c1e6e] mr-2"></span>SECONDARY: 22.8B</li></ul></div><div className="flex flex-col items-center"><InteractivePieChart offplanPercent={72} secondaryPercent={28} color1="#f3b562" color2="#8c1e6e" /><h4 className="font-bold text-xl mt-4">VOLUME</h4><ul className="text-sm mt-2 space-y-1 text-left"><li className="flex items-center"><span className="w-3 h-3 rounded-full bg-[#f3b562] mr-2"></span>OFFPLAN: 14,531</li><li className="flex items-center"><span className="w-3 h-3 rounded-full bg-[#8c1e6e] mr-2"></span>SECONDARY: 5,773</li></ul></div></div>
                    </div>
                </div>
            </section>
            
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16"><h2 className="text-4xl font-bold text-[#8c1e6e]">Featured Land For Sale</h2><p className="text-gray-600 mt-4 max-w-2xl mx-auto">Discover exclusive investment opportunities with our curated selection of premium land plots in Dubai's most desirable locations.</p></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">{featuredPlots.map((plot, index) => (<PlotCard key={index} plot={plot} />))}</div>
                    <div className="text-center mt-16"><a href="/land-for-sale" className="inline-block bg-[#8c1e6e] text-white font-bold py-3 px-8 rounded-md transition-transform duration-300 hover:scale-105">View All Land Plots</a></div>
                </div>
            </section>
            
            <section className="py-24 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
                        <div className="md:w-1/2"><div className="relative rounded-lg shadow-lg w-full"><img src="/guides/hero/city-walk.webp" alt="Modern interior design" className="rounded-lg w-full" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-lg"></div><div className="absolute top-0 left-0 p-8 text-white"><p className="text-sm font-semibold uppercase tracking-widest">WHY CHOOSE BIZVIBEZ?</p><h2 className="text-4xl font-bold leading-tight mt-2">Why Choose <span style={{color: '#8c1e6e'}}>BizVibez?</span></h2><p className="mt-4 text-gray-200 max-w-md">Introducing to you an exceptional luxury residence – among the finest and most contemporary real estate offerings to date.</p></div><div className="absolute bottom-0 left-0 right-0 p-4 grid grid-cols-2 gap-4 text-white text-center"><div className="bg-black/50 p-3 rounded-lg backdrop-blur-sm"><AnimatedCounter end={25} duration={1500} suffix="+" /><p className="text-sm text-gray-200">Real Estate Agents</p></div><div className="bg-black/50 p-3 rounded-lg backdrop-blur-sm"><AnimatedCounter end={170} duration={1500} suffix="M+" /><p className="text-sm text-gray-200">Worth of Sales</p></div><div className="bg-black/50 p-3 rounded-lg backdrop-blur-sm"><AnimatedCounter end={7} duration={1500} /><p className="text-sm text-gray-200">Cities Covered</p></div><div className="bg-black/50 p-3 rounded-lg backdrop-blur-sm"><AnimatedCounter end={2100} duration={1500} suffix="+" /><p className="text-sm text-gray-200">Transactions</p></div></div></div></div>
                       <ReviewsSection />
                    </div>
                </div>
            </section>
        </>
    );
};

export default HomePage;

