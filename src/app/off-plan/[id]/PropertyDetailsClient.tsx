"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Property } from '../data'; // Import the Property type from the central data file
import Image from 'next/image'; // Import Next.js Image component for optimization

// --- Data for Country Codes (remains the same) ---
const countries = [
    { name: 'United Arab Emirates', code: 'AE', dial: '971' },
    { name: 'United States', code: 'US', dial: '1' },
    { name: 'United Kingdom', code: 'GB', dial: '44' },
    { name: 'Afghanistan', code: 'AF', dial: '93' },
    { name: 'Albania', code: 'AL', dial: '355' },
    { name: 'Algeria', code: 'DZ', dial: '213' },
    { name: 'Andorra', code: 'AD', dial: '376' },
    { name: 'Angola', code: 'AO', dial: '244' },
    { name: 'Argentina', code: 'AR', dial: '54' },
    { name: 'Armenia', code: 'AM', dial: '374' },
    { name: 'Australia', code: 'AU', dial: '61' },
    { name: 'Austria', code: 'AT', dial: '43' },
    { name: 'Azerbaijan', code: 'AZ', dial: '994' },
    { name: 'Bahamas', code: 'BS', dial: '1-242' },
    { name: 'Bahrain', code: 'BH', dial: '973' },
    { name: 'Bangladesh', code: 'BD', dial: '880' },
    { name: 'Barbados', code: 'BB', dial: '1-246' },
    { name: 'Belarus', code: 'BY', dial: '375' },
    { name: 'Belgium', code: 'BE', dial: '32' },
    { name: 'Belize', code: 'BZ', dial: '501' },
    { name: 'Benin', code: 'BJ', dial: '229' },
    { name: 'Bhutan', code: 'BT', dial: '975' },
    { name: 'Bolivia', code: 'BO', dial: '591' },
    { name: 'Bosnia and Herzegovina', code: 'BA', dial: '387' },
    { name: 'Botswana', code: 'BW', dial: '267' },
    { name: 'Brazil', code: 'BR', dial: '55' },
    { name: 'Brunei', code: 'BN', dial: '673' },
    { name: 'Bulgaria', code: 'BG', dial: '359' },
    { name: 'Burkina Faso', code: 'BF', dial: '226' },
    { name: 'Burundi', code: 'BI', dial: '257' },
    { name: 'Cambodia', code: 'KH', dial: '855' },
    { name: 'Cameroon', code: 'CM', dial: '237' },
    { name: 'Canada', code: 'CA', dial: '1' },
    { name: 'Central African Republic', code: 'CF', dial: '236' },
    { name: 'Chad', code: 'TD', dial: '235' },
    { name: 'Chile', code: 'CL', dial: '56' },
    { name: 'China', code: 'CN', dial: '86' },
    { name: 'Colombia', code: 'CO', dial: '57' },
    { name: 'Comoros', code: 'KM', dial: '269' },
    { name: 'Congo, Democratic Republic of the', code: 'CD', dial: '243' },
    { name: 'Congo, Republic of the', code: 'CG', dial: '242' },
    { name: 'Costa Rica', code: 'CR', dial: '506' },
    { name: 'Croatia', code: 'HR', dial: '385' },
    { name: 'Cuba', code: 'CU', dial: '53' },
    { name: 'Cyprus', code: 'CY', dial: '357' },
    { name: 'Czech Republic', code: 'CZ', dial: '420' },
    { name: 'Denmark', code: 'DK', dial: '45' },
    { name: 'Djibouti', code: 'DJ', dial: '253' },
    { name: 'Dominica', code: 'DM', dial: '1-767' },
    { name: 'Dominican Republic', code: 'DO', dial: '1-809' },
    { name: 'Ecuador', code: 'EC', dial: '593' },
    { name: 'Egypt', code: 'EG', dial: '20' },
    { name: 'El Salvador', code: 'SV', dial: '503' },
    { name: 'Equatorial Guinea', code: 'GQ', dial: '240' },
    { name: 'Estonia', code: 'EE', dial: '372' },
    { name: 'Ethiopia', code: 'ET', dial: '251' },
    { name: 'Fiji', code: 'FJ', dial: '679' },
    { name: 'Finland', code: 'FI', dial: '358' },
    { name: 'France', code: 'FR', dial: '33' },
    { name: 'Gabon', code: 'GA', dial: '241' },
    { name: 'Gambia', code: 'GM', dial: '220' },
    { name: 'Georgia', code: 'GE', dial: '995' },
    { name: 'Germany', code: 'DE', dial: '49' },
    { name: 'Ghana', code: 'GH', dial: '233' },
    { name: 'Greece', code: 'GR', dial: '30' },
    { name: 'Guatemala', code: 'GT', dial: '502' },
    { name: 'Guinea', code: 'GN', dial: '224' },
    { name: 'Guyana', code: 'GY', dial: '592' },
    { name: 'Haiti', code: 'HT', dial: '509' },
    { name: 'Honduras', code: 'HN', dial: '504' },
    { name: 'Hungary', code: 'HU', dial: '36' },
    { name: 'Iceland', code: 'IS', dial: '354' },
    { name: 'India', code: 'IN', dial: '91' },
    { name: 'Indonesia', code: 'ID', dial: '62' },
    { name: 'Iran', code: 'IR', dial: '98' },
    { name: 'Iraq', code: 'IQ', dial: '964' },
    { name: 'Ireland', code: 'IE', dial: '353' },
    { name: 'Israel', code: 'IL', dial: '972' },
    { name: 'Italy', code: 'IT', dial: '39' },
    { name: 'Jamaica', code: 'JM', dial: '1-876' },
    { name: 'Japan', code: 'JP', dial: '81' },
    { name: 'Jordan', code: 'JO', dial: '962' },
    { name: 'Kazakhstan', code: 'KZ', dial: '7' },
    { name: 'Kenya', code: 'KE', dial: '254' },
    { name: 'Kuwait', code: 'KW', dial: '965' },
    { name: 'Kyrgyzstan', code: 'KG', dial: '996' },
    { name: 'Laos', code: 'LA', dial: '856' },
    { name: 'Latvia', code: 'LV', dial: '371' },
    { name: 'Lebanon', code: 'LB', dial: '961' },
    { name: 'Liberia', code: 'LR', dial: '231' },
    { name: 'Libya', code: 'LY', dial: '218' },
    { name: 'Liechtenstein', code: 'LI', dial: '423' },
    { name: 'Lithuania', code: 'LT', dial: '370' },
    { name: 'Luxembourg', code: 'LU', dial: '352' },
    { name: 'Madagascar', code: 'MG', dial: '261' },
    { name: 'Malaysia', code: 'MY', dial: '60' },
    { name: 'Maldives', code: 'MV', dial: '960' },
    { name: 'Mali', code: 'ML', dial: '223' },
    { name: 'Malta', code: 'MT', dial: '356' },
    { name: 'Mauritania', code: 'MR', dial: '222' },
    { name: 'Mauritius', code: 'MU', dial: '230' },
    { name: 'Mexico', code: 'MX', dial: '52' },
    { name: 'Moldova', code: 'MD', dial: '373' },
    { name: 'Monaco', code: 'MC', dial: '377' },
    { name: 'Mongolia', code: 'MN', dial: '976' },
    { name: 'Montenegro', code: 'ME', dial: '382' },
    { name: 'Morocco', code: 'MA', dial: '212' },
    { name: 'Mozambique', code: 'MZ', dial: '258' },
    { name: 'Myanmar', code: 'MM', dial: '95' },
    { name: 'Namibia', code: 'NA', dial: '264' },
    { name: 'Nepal', code: 'NP', dial: '977' },
    { name: 'Netherlands', code: 'NL', dial: '31' },
    { name: 'New Zealand', code: 'NZ', dial: '64' },
    { name: 'Nicaragua', code: 'NI', dial: '505' },
    { name: 'Niger', code: 'NE', dial: '227' },
    { name: 'Nigeria', code: 'NG', dial: '234' },
    { name: 'North Korea', code: 'KP', dial: '850' },
    { name: 'North Macedonia', code: 'MK', dial: '389' },
    { name: 'Norway', code: 'NO', dial: '47' },
    { name: 'Oman', code: 'OM', dial: '968' },
    { name: 'Pakistan', code: 'PK', dial: '92' },
    { name: 'Palestine', code: 'PS', dial: '970' },
    { name: 'Panama', code: 'PA', dial: '507' },
    { name: 'Papua New Guinea', code: 'PG', dial: '675' },
    { name: 'Paraguay', code: 'PY', dial: '595' },
    { name: 'Peru', code: 'PE', dial: '51' },
    { name: 'Philippines', code: 'PH', dial: '63' },
    { name: 'Poland', code: 'PL', dial: '48' },
    { name: 'Portugal', code: 'PT', dial: '351' },
    { name: 'Qatar', code: 'QA', dial: '974' },
    { name: 'Romania', code: 'RO', dial: '40' },
    { name: 'Russia', code: 'RU', dial: '7' },
    { name: 'Rwanda', code: 'RW', dial: '250' },
    { name: 'Saudi Arabia', code: 'SA', dial: '966' },
    { name: 'Senegal', code: 'SN', dial: '221' },
    { name: 'Serbia', code: 'RS', dial: '381' },
    { name: 'Sierra Leone', code: 'SL', dial: '232' },
    { name: 'Singapore', code: 'SG', dial: '65' },
    { name: 'Slovakia', code: 'SK', dial: '421' },
    { name: 'Slovenia', code: 'SI', dial: '386' },
    { name: 'Somalia', code: 'SO', dial: '252' },
    { name: 'South Africa', code: 'ZA', dial: '27' },
    { name: 'South Korea', code: 'KR', dial: '82' },
    { name: 'South Sudan', code: 'SS', dial: '211' },
    { name: 'Spain', code: 'ES', dial: '34' },
    { name: 'Sri Lanka', code: 'LK', dial: '94' },
    { name: 'Sudan', code: 'SD', dial: '249' },
    { name: 'Sweden', code: 'SE', dial: '46' },
    { name: 'Switzerland', code: 'CH', dial: '41' },
    { name: 'Syria', code: 'SY', dial: '963' },
    { name: 'Taiwan', code: 'TW', dial: '886' },
    { name: 'Tanzania', code: 'TZ', dial: '255' },
    { name: 'Thailand', code: 'TH', dial: '66' },
    { name: 'Togo', code: 'TG', dial: '228' },
    { name: 'Trinidad and Tobago', code: 'TT', dial: '1-868' },
    { name: 'Tunisia', code: 'TN', dial: '216' },
    { name: 'Turkey', code: 'TR', dial: '90' },
    { name: 'Turkmenistan', code: 'TM', dial: '993' },
    { name: 'Uganda', code: 'UG', dial: '256' },
    { name: 'Ukraine', code: 'UA', dial: '380' },
    { name: 'Uruguay', code: 'UY', dial: '598' },
    { name: 'Uzbekistan', code: 'UZ', dial: '998' },
    { name: 'Venezuela', code: 'VE', dial: '58' },
    { name: 'Vietnam', code: 'VN', dial: '84' },
    { name: 'Yemen', code: 'YE', dial: '967' },
    { name: 'Zambia', code: 'ZM', dial: '260' },
    { name: 'Zimbabwe', code: 'ZW', dial: '263' },
];

// --- Helper component for the sticky contact form (remains mostly the same) ---
// --- UPDATED ContactForm Component ---
const ContactForm = ({ propertyName }: { propertyName: string }) => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: 'I am interested in this property and would like more information.',
    });
    const [selectedCountry, setSelectedCountry] = useState(countries.find(c => c.code === 'AE') || countries[0]);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dropdownRef = useRef<HTMLDivElement>(null);
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const filteredCountries = countries.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setStatusMessage('');

        const fullPhoneNumber = `+${selectedCountry.dial} ${formData.phone}`;

        try {
            const response = await fetch('/.netlify/functions/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    email: formData.email,
                    phone: fullPhoneNumber,
                    message: formData.message,
                    subject: `Property Inquiry: ${propertyName}`,
                }),
            });
            const result = await response.json();
            if (!response.ok) throw new Error(result.message || 'Something went wrong');
            setStatusMessage(result.message);
            setFormData({ fullName: '', email: '', phone: '', message: 'I am interested in this property...' });
        } catch (error: any) {
            setStatusMessage(error.message || 'An error occurred while sending the message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white p-6 border rounded-md shadow-lg">
            <style>{`
                ::placeholder { color: black !important; opacity: 1; }
                :-ms-input-placeholder { color: black !important; }
                ::-ms-input-placeholder { color: black !important; }
            `}</style>
            <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                </div>
                <div>
                    <p className="font-bold text-gray-800">BizVibez Property</p>
                    <a href="#" className="text-sm text-[#891e6d] hover:underline">View Listings</a>
                </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input type="text" name="fullName" placeholder="Full Name" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-900" value={formData.fullName} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email" required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-900" value={formData.email} onChange={handleChange} />
                <div className="flex">
                    <div className="relative" ref={dropdownRef}>
                        <button type="button" onClick={() => setDropdownOpen(!dropdownOpen)} className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-800 text-sm rounded-l-md h-full">
                            <img src={`https://flagcdn.com/w20/${selectedCountry.code.toLowerCase()}.png`} alt={selectedCountry.name} className="w-5 h-auto mr-2" />
                            +{selectedCountry.dial}
                            <svg className={`w-4 h-4 ml-1 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </button>
                        {dropdownOpen && (
                            <div className="absolute bottom-full mb-2 w-72 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                                <input type="text" placeholder="Search country..." className="w-full px-4 py-2 border-b border-gray-300 text-gray-900" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                                <ul className="max-h-60 overflow-y-auto">
                                    {filteredCountries.map(country => (
                                        <li key={country.code} onClick={() => { setSelectedCountry(country); setDropdownOpen(false); setSearchTerm(''); }} className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                            <img src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`} alt={country.name} className="w-5 h-auto mr-3" />
                                            <span className="flex-grow text-gray-800">{country.name}</span>
                                            <span className="text-gray-500">+{country.dial}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                    <input type="tel" name="phone" placeholder="050 123 4567" required className="w-full px-4 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-900" value={formData.phone} onChange={handleChange} />
                </div>
                <textarea name="message" placeholder="Your Message" rows={4} required className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-700 text-gray-900" value={formData.message} onChange={handleChange}></textarea>
                
                {statusMessage && (
                  <div className={`p-3 text-center rounded-md text-sm ${statusMessage.toLowerCase().includes('error') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                    {statusMessage}
                  </div>
                )}

                <button type="submit" disabled={loading} className="w-full bg-[#891e6d] text-white font-bold py-3 px-4 rounded-md hover:bg-[#890e6d] transition duration-300 disabled:opacity-70">
                    {loading ? 'Sending...' : 'Request Information'}
                </button>
            </form>
        </div>
    );
};
// --- Lightbox Component (using Next/Image) ---
const Lightbox: React.FC<{ images: string[]; currentIndex: number; onClose: () => void; onNext: () => void; onPrev: () => void; }> = ({ images, currentIndex, onClose, onNext, onPrev }) => {
    return (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50" onClick={onClose}>
            <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="absolute top-4 right-6 text-white text-4xl font-bold hover:text-gray-300">&times;</button>
            
            <button onClick={(e) => { e.stopPropagation(); onPrev(); }} className="absolute left-4 md:left-10 bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>

            {/* Use Next/Image for optimized loading */}
            <div className="relative max-w-[90vw] max-h-[85vh] flex items-center justify-center">
                <Image 
                    src={images[currentIndex]} 
                    alt="Property full view" 
                    fill // Fills the parent div
                    style={{ objectFit: 'contain' }} // Ensures the image fits within boundaries
                    priority // Prioritize loading for the main image
                    onClick={(e) => e.stopPropagation()} 
                />
            </div>

            <button onClick={(e) => { e.stopPropagation(); onNext(); }} className="absolute right-4 md:right-10 bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
        </div>
    );
};


// --- The Main Client Component for Property Details UI ---
const PropertyDetailsClient: React.FC<{ property: Property }> = ({ property }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [lightboxImageIndex, setLightboxImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % property.image.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex - 1 + property.image.length) % property.image.length);
    };

    const openLightbox = (index: number) => {
        setLightboxImageIndex(index);
        setIsLightboxOpen(true);
    };

    const closeLightbox = () => {
        setIsLightboxOpen(false);
    };

    const nextLightboxImage = () => {
        setLightboxImageIndex(prev => (prev + 1) % property.image.length);
    };

    const prevLightboxImage = () => {
        setLightboxImageIndex(prev => (prev - 1 + property.image.length) % property.image.length);
    };


    return (
        <div className="bg-white">
             <style>{`.font-playfair { font-family: 'Playfair Display', serif; }`}</style>
            
            {/* Hero Section with Image Gallery */}
            <div 
                className="relative w-full h-[60vh] bg-gray-900 group cursor-pointer"
                onClick={() => openLightbox(currentImageIndex)}
            >
                {/* MODIFICATION: Using Next/Image for the hero image */}
                <Image
                    src={property.image[currentImageIndex]}
                    alt={`${property.name} ${currentImageIndex + 1}`}
                    fill // Fills the parent div
                    style={{ objectFit: 'cover' }} // Ensures the image covers the area
                    priority // Prioritize loading for the main image
                />
                <div className="absolute inset-0 bg-black opacity-20"></div>

                {/* Navigation Arrows */}
                <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-lg transition opacity-0 group-hover:opacity-100 z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                </button>
                <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow-lg transition opacity-0 group-hover:opacity-100 z-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                </button>
            </div>
            
            {/* Breadcrumbs Section */}
            <div className="border-b">
                 <div className="container mx-auto max-w-7xl px-4 py-3 text-sm text-gray-500">
                    <a href="#" className="hover:text-gray-800">Home</a>
                    <span className="mx-2">/</span>
                    <a href="/off-plan" className="hover:text-gray-800">Apartment</a>
                    <span className="mx-2">/</span>
                    <span className="text-gray-800 font-medium">{property.name}</span>
                 </div>
            </div>

            <div className="container mx-auto max-w-7xl px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    
                    {/* --- Main Content (Left Column) --- */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* Title Section */}
                        <div className="flex justify-between items-start flex-wrap"> {/* Added flex-wrap for responsiveness */}
                             <div>
                                <h1 className="text-3xl font-bold text-gray-900 font-playfair">{property.name}</h1>
                                {/* Ensure tags are visible and styled */}
                                <div className="mt-2 flex flex-wrap gap-2"> {/* Added flex-wrap and gap */}
                                    {property.tags.map(tag => (
                                        <span key={tag.text} className="inline-block bg-green-200 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">{tag.text}</span>
                                    ))}
                                </div>
                                <div className="flex items-center text-gray-500 mt-2">
                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor"><path d="M10.125 2.25A5.625 5.625 0 004.5 7.875c0 2.05 1.706 4.625 5.25 7.425a.375.375 0 00.525 0c3.544-2.8 5.25-5.375 5.25-7.425A5.625 5.625 0 0010.125 2.25zM10.125 9a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" /></svg>
                                     <span>{property.location}</span>
                                </div>
                             </div>
                             <div className="text-right flex-shrink-0 mt-4 lg:mt-0"> {/* Adjusted margin for smaller screens */}
                                 <p className="text-gray-500 text-sm">Start From</p>
                                 {/* Adjusted styling for price to be more prominent */}
                                 <p className="text-3xl font-extrabold text-[#891e6d]">AED {property.price}</p> 
                             </div>
                        </div>

                        {/* Details Box */}
                        <div className="border-2 border-green-100 bg-green-50 rounded-lg p-6">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold text-gray-800">Details</h2>
                                <p className="text-xs text-gray-500">Updated on {property.lastUpdated}</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
                                <div className="flex justify-between border-b pb-2"><span className="text-gray-600">Property ID:</span><span className="font-semibold text-gray-800">{property.propertyId}</span></div>
                                <div className="flex justify-between border-b pb-2"><span className="text-gray-600">Property Size:</span><span className="font-semibold text-gray-800">From {property.size}</span></div>
                                <div className="flex justify-between border-b pb-2"><span className="text-gray-600">Price:</span><span className="font-semibold text-gray-800">Start From AED {property.price}</span></div>
                                <div className="flex justify-between border-b pb-2"><span className="text-gray-600">Bedrooms:</span><span className="font-semibold text-gray-800">{property.bedrooms}</span></div>
                                <div className="flex justify-between border-b pb-2"><span className="text-gray-600">Property Type:</span><span className="font-semibold text-gray-800">{property.propertyType}</span></div>
                                <div className="flex justify-between border-b pb-2"><span className="text-gray-600">Property Status:</span><span className="font-semibold text-gray-800">{property.propertyStatus}</span></div>
                            </div>
                        </div>

                        {/* Description Section */}
                        <div>
                             <h2 className="text-2xl font-bold text-gray-900 mb-4">Description</h2>
                             <div className="space-y-4 text-gray-600 leading-relaxed">
                                <p>{property.description.intro}</p>
                                {property.description.sections.map(section => (
                                    <div key={section.title}>
                                        <h3 className="font-bold text-lg text-gray-800 mt-6 mb-2">{section.title}</h3>
                                        <p>{section.content}</p>
                                    </div>
                                ))}
                             </div>
                        </div>

                        {/* Features Section */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Features</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {property.features.map(feature => (
                                    <div key={feature} className="flex items-center">
                                        {/* Using a more common checkmark icon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Address Section */}
                        <div>
                             <h2 className="text-2xl font-bold text-gray-900 mb-4">Address</h2>
                             <div className="grid grid-cols-2 border-t border-b divide-x">
                                 <div className="p-4"><p className="text-sm text-gray-500">City</p><p className="font-semibold text-gray-800">{property.address.city}</p></div>
                                 <div className="p-4"><p className="text-sm text-gray-500">Area</p><p className="font-semibold text-gray-800">{property.address.area}</p></div>
                             </div>
                        </div>

                        {/* Image Gallery Grid */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Gallery</h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {property.image.slice(0, 6).map((img, index) => (
                                    <div key={index} className="w-full h-48 rounded-lg overflow-hidden relative cursor-pointer group/gallery" onClick={() => openLightbox(index)}>
                                        {/* MODIFICATION: Using Next/Image for gallery items */}
                                        <Image src={img} 
                                               alt={`${property.name} gallery ${index + 1}`} 
                                               fill 
                                               style={{ objectFit: 'cover' }} 
                                               className="transition-transform duration-300 group-hover/gallery:scale-110"
                                        />
                                        {index === 5 && property.image.length > 6 && (
                                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                                                <span className="text-white text-3xl font-bold">+{property.image.length - 6}</span>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                    
                    {/* --- Sticky Contact Form (Right Column) --- */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8">
                            <ContactForm propertyName={property.name} />                        </div>
                    </div>
                </div>
            </div>

            {isLightboxOpen && (
                <Lightbox 
                    images={property.image}
                    currentIndex={lightboxImageIndex}
                    onClose={closeLightbox}
                    onNext={nextLightboxImage}
                    onPrev={prevLightboxImage}
                />
            )}
        </div>
    );
};

export default PropertyDetailsClient;