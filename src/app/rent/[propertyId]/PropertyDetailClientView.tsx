"use client";

import React, { useState, useEffect, useRef } from 'react';

// --- PLACEHOLDER DATA TYPES (to resolve import errors) ---
// This interface is a stand-in for the one from rent-data.ts
export interface ForRentProperty {
  id: string;
  propertyId: string;
  title: string;
  location: string;
  price: string;
  image: string;
  images?: string[];
  bedrooms: number;
  bathrooms: number;
  size: string;
  type: string;
  description: string;
  features: string[];
  address: { street: string; city: string; area: string; };
  mapCoordinates: { lat: number; lng: number; };
  status: string;
  updatedOn: string;
}

// This interface is a stand-in for the one from countries.ts
export interface Country {
  name: string;
  dial_code: string;
  code: string;
}

// --- Data for the new Country Selector ---
const countries: Country[] = [
    { name: "Afghanistan", dial_code: "+93", code: "AF" },
    { name: "Albania", dial_code: "+355", code: "AL" },
    { name: "Algeria", dial_code: "+213", code: "DZ" },
    { name: "American Samoa", dial_code: "+1684", code: "AS" },
    { name: "Andorra", dial_code: "+376", code: "AD" },
    { name: "Angola", dial_code: "+244", code: "AO" },
    { name: "Anguilla", dial_code: "+1264", code: "AI" },
    { name: "Antarctica", dial_code: "+672", code: "AQ" },
    { name: "Antigua and Barbuda", dial_code: "+1268", code: "AG" },
    { name: "Argentina", dial_code: "+54", code: "AR" },
    { name: "Armenia", dial_code: "+374", code: "AM" },
    { name: "Aruba", dial_code: "+297", code: "AW" },
    { name: "Australia", dial_code: "+61", code: "AU" },
    { name: "Austria", dial_code: "+43", code: "AT" },
    { name: "Azerbaijan", dial_code: "+994", code: "AZ" },
    { name: "Bahamas", dial_code: "+1242", code: "BS" },
    { name: "Bahrain", dial_code: "+973", code: "BH" },
    { name: "Bangladesh", dial_code: "+880", code: "BD" },
    { name: "Barbados", dial_code: "+1246", code: "BB" },
    { name: "Belarus", dial_code: "+375", code: "BY" },
    { name: "Belgium", dial_code: "+32", code: "BE" },
    { name: "Belize", dial_code: "+501", code: "BZ" },
    { name: "Benin", dial_code: "+229", code: "BJ" },
    { name: "Bermuda", dial_code: "+1441", code: "BM" },
    { name: "Bhutan", dial_code: "+975", code: "BT" },
    { name: "Bolivia", dial_code: "+591", code: "BO" },
    { name: "Bosnia and Herzegovina", dial_code: "+387", code: "BA" },
    { name: "Botswana", dial_code: "+267", code: "BW" },
    { name: "Brazil", dial_code: "+55", code: "BR" },
    { name: "British Indian Ocean Territory", dial_code: "+246", code: "IO" },
    { name: "British Virgin Islands", dial_code: "+1284", code: "VG" },
    { name: "Brunei", dial_code: "+673", code: "BN" },
    { name: "Bulgaria", dial_code: "+359", code: "BG" },
    { name: "Burkina Faso", dial_code: "+226", code: "BF" },
    { name: "Burundi", dial_code: "+257", code: "BI" },
    { name: "Cambodia", dial_code: "+855", code: "KH" },
    { name: "Cameroon", dial_code: "+237", code: "CM" },
    { name: "Canada", dial_code: "+1", code: "CA" },
    { name: "Cape Verde", dial_code: "+238", code: "CV" },
    { name: "Cayman Islands", dial_code: "+1345", code: "KY" },
    { name: "Central African Republic", dial_code: "+236", code: "CF" },
    { name: "Chad", dial_code: "+235", code: "TD" },
    { name: "Chile", dial_code: "+56", code: "CL" },
    { name: "China", dial_code: "+86", code: "CN" },
    { name: "Christmas Island", dial_code: "+61", code: "CX" },
    { name: "Cocos Islands", dial_code: "+61", code: "CC" },
    { name: "Colombia", dial_code: "+57", code: "CO" },
    { name: "Comoros", dial_code: "+269", code: "KM" },
    { name: "Cook Islands", dial_code: "+682", code: "CK" },
    { name: "Costa Rica", dial_code: "+506", code: "CR" },
    { name: "Croatia", dial_code: "+385", code: "HR" },
    { name: "Cuba", dial_code: "+53", code: "CU" },
    { name: "Curacao", dial_code: "+599", code: "CW" },
    { name: "Cyprus", dial_code: "+357", code: "CY" },
    { name: "Czech Republic", dial_code: "+420", code: "CZ" },
    { name: "Democratic Republic of the Congo", dial_code: "+243", code: "CD" },
    { name: "Denmark", dial_code: "+45", code: "DK" },
    { name: "Djibouti", dial_code: "+253", code: "DJ" },
    { name: "Dominica", dial_code: "+1767", code: "DM" },
    { name: "Dominican Republic", dial_code: "+1", code: "DO" },
    { name: "East Timor", dial_code: "+670", code: "TL" },
    { name: "Ecuador", dial_code: "+593", code: "EC" },
    { name: "Egypt", dial_code: "+20", code: "EG" },
    { name: "El Salvador", dial_code: "+503", code: "SV" },
    { name: "Equatorial Guinea", dial_code: "+240", code: "GQ" },
    { name: "Eritrea", dial_code: "+291", code: "ER" },
    { name: "Estonia", dial_code: "+372", code: "EE" },
    { name: "Ethiopia", dial_code: "+251", code: "ET" },
    { name: "Falkland Islands", dial_code: "+500", code: "FK" },
    { name: "Faroe Islands", dial_code: "+298", code: "FO" },
    { name: "Fiji", dial_code: "+679", code: "FJ" },
    { name: "Finland", dial_code: "+358", code: "FI" },
    { name: "France", dial_code: "+33", code: "FR" },
    { name: "French Polynesia", dial_code: "+689", code: "PF" },
    { name: "Gabon", dial_code: "+241", code: "GA" },
    { name: "Gambia", dial_code: "+220", code: "GM" },
    { name: "Georgia", dial_code: "+995", code: "GE" },
    { name: "Germany", dial_code: "+49", code: "DE" },
    { name: "Ghana", dial_code: "+233", code: "GH" },
    { name: "Gibraltar", dial_code: "+350", code: "GI" },
    { name: "Greece", dial_code: "+30", code: "GR" },
    { name: "Greenland", dial_code: "+299", code: "GL" },
    { name: "Grenada", dial_code: "+1473", code: "GD" },
    { name: "Guam", dial_code: "+1671", code: "GU" },
    { name: "Guatemala", dial_code: "+502", code: "GT" },
    { name: "Guernsey", dial_code: "+44", code: "GG" },
    { name: "Guinea", dial_code: "+224", code: "GN" },
    { name: "Guinea-Bissau", dial_code: "+245", code: "GW" },
    { name: "Guyana", dial_code: "+592", code: "GY" },
    { name: "Haiti", dial_code: "+509", code: "HT" },
    { name: "Honduras", dial_code: "+504", code: "HN" },
    { name: "Hong Kong", dial_code: "+852", code: "HK" },
    { name: "Hungary", dial_code: "+36", code: "HU" },
    { name: "Iceland", dial_code: "+354", code: "IS" },
    { name: "India", dial_code: "+91", code: "IN" },
    { name: "Indonesia", dial_code: "+62", code: "ID" },
    { name: "Iran", dial_code: "+98", code: "IR" },
    { name: "Iraq", dial_code: "+964", code: "IQ" },
    { name: "Ireland", dial_code: "+353", code: "IE" },
    { name: "Isle of Man", dial_code: "+44", code: "IM" },
    { name: "Israel", dial_code: "+972", code: "IL" },
    { name: "Italy", dial_code: "+39", code: "IT" },
    { name: "Ivory Coast", dial_code: "+225", code: "CI" },
    { name: "Jamaica", dial_code: "+1876", code: "JM" },
    { name: "Japan", dial_code: "+81", code: "JP" },
    { name: "Jersey", dial_code: "+44", code: "JE" },
    { name: "Jordan", dial_code: "+962", code: "JO" },
    { name: "Kazakhstan", dial_code: "+7", code: "KZ" },
    { name: "Kenya", dial_code: "+254", code: "KE" },
    { name: "Kiribati", dial_code: "+686", code: "KI" },
    { name: "Kosovo", dial_code: "+383", code: "XK" },
    { name: "Kuwait", dial_code: "+965", code: "KW" },
    { name: "Kyrgyzstan", dial_code: "+996", code: "KG" },
    { name: "Laos", dial_code: "+856", code: "LA" },
    { name: "Latvia", dial_code: "+371", code: "LV" },
    { name: "Lebanon", dial_code: "+961", code: "LB" },
    { name: "Lesotho", dial_code: "+266", code: "LS" },
    { name: "Liberia", dial_code: "+231", code: "LR" },
    { name: "Libya", dial_code: "+218", code: "LY" },
    { name: "Liechtenstein", dial_code: "+423", code: "LI" },
    { name: "Lithuania", dial_code: "+370", code: "LT" },
    { name: "Luxembourg", dial_code: "+352", code: "LU" },
    { name: "Macau", dial_code: "+853", code: "MO" },
    { name: "Macedonia", dial_code: "+389", code: "MK" },
    { name: "Madagascar", dial_code: "+261", code: "MG" },
    { name: "Malawi", dial_code: "+265", code: "MW" },
    { name: "Malaysia", dial_code: "+60", code: "MY" },
    { name: "Maldives", dial_code: "+960", code: "MV" },
    { name: "Mali", dial_code: "+223", code: "ML" },
    { name: "Malta", dial_code: "+356", code: "MT" },
    { name: "Marshall Islands", dial_code: "+692", code: "MH" },
    { name: "Mauritania", dial_code: "+222", code: "MR" },
    { name: "Mauritius", dial_code: "+230", code: "MU" },
    { name: "Mayotte", dial_code: "+262", code: "YT" },
    { name: "Mexico", dial_code: "+52", code: "MX" },
    { name: "Micronesia", dial_code: "+691", code: "FM" },
    { name: "Moldova", dial_code: "+373", code: "MD" },
    { name: "Monaco", dial_code: "+377", code: "MC" },
    { name: "Mongolia", dial_code: "+976", code: "MN" },
    { name: "Montenegro", dial_code: "+382", code: "ME" },
    { name: "Montserrat", dial_code: "+1664", code: "MS" },
    { name: "Morocco", dial_code: "+212", code: "MA" },
    { name: "Mozambique", dial_code: "+258", code: "MZ" },
    { name: "Myanmar", dial_code: "+95", code: "MM" },
    { name: "Namibia", dial_code: "+264", code: "NA" },
    { name: "Nauru", dial_code: "+674", code: "NR" },
    { name: "Nepal", dial_code: "+977", code: "NP" },
    { name: "Netherlands", dial_code: "+31", code: "NL" },
    { name: "New Caledonia", dial_code: "+687", code: "NC" },
    { name: "New Zealand", dial_code: "+64", code: "NZ" },
    { name: "Nicaragua", dial_code: "+505", code: "NI" },
    { name: "Niger", dial_code: "+227", code: "NE" },
    { name: "Nigeria", dial_code: "+234", code: "NG" },
    { name: "Niue", dial_code: "+683", code: "NU" },
    { name: "North Korea", dial_code: "+850", code: "KP" },
    { name: "Northern Mariana Islands", dial_code: "+1670", code: "MP" },
    { name: "Norway", dial_code: "+47", code: "NO" },
    { name: "Oman", dial_code: "+968", code: "OM" },
    { name: "Pakistan", dial_code: "+92", code: "PK" },
    { name: "Palau", dial_code: "+680", code: "PW" },
    { name: "Palestine", dial_code: "+970", code: "PS" },
    { name: "Panama", dial_code: "+507", code: "PA" },
    { name: "Papua New Guinea", dial_code: "+675", code: "PG" },
    { name: "Paraguay", dial_code: "+595", code: "PY" },
    { name: "Peru", dial_code: "+51", code: "PE" },
    { name: "Philippines", dial_code: "+63", code: "PH" },
    { name: "Pitcairn", dial_code: "+64", code: "PN" },
    { name: "Poland", dial_code: "+48", code: "PL" },
    { name: "Portugal", dial_code: "+351", code: "PT" },
    { name: "Puerto Rico", dial_code: "+1", code: "PR" },
    { name: "Qatar", dial_code: "+974", code: "QA" },
    { name: "Republic of the Congo", dial_code: "+242", code: "CG" },
    { name: "Reunion", dial_code: "+262", code: "RE" },
    { name: "Romania", dial_code: "+40", code: "RO" },
    { name: "Russia", dial_code: "+7", code: "RU" },
    { name: "Rwanda", dial_code: "+250", code: "RW" },
    { name: "Saint Barthelemy", dial_code: "+590", code: "BL" },
    { name: "Saint Helena", dial_code: "+290", code: "SH" },
    { name: "Saint Kitts and Nevis", dial_code: "+1869", code: "KN" },
    { name: "Saint Lucia", dial_code: "+1758", code: "LC" },
    { name: "Saint Martin", dial_code: "+590", code: "MF" },
    { name: "Saint Pierre and Miquelon", dial_code: "+508", code: "PM" },
    { name: "Saint Vincent and the Grenadines", dial_code: "+1784", code: "VC" },
    { name: "Samoa", dial_code: "+685", code: "WS" },
    { name: "San Marino", dial_code: "+378", code: "SM" },
    { name: "Sao Tome and Principe", dial_code: "+239", code: "ST" },
    { name: "Saudi Arabia", dial_code: "+966", code: "SA" },
    { name: "Senegal", dial_code: "+221", code: "SN" },
    { name: "Serbia", dial_code: "+381", code: "RS" },
    { name: "Seychelles", dial_code: "+248", code: "SC" },
    { name: "Sierra Leone", dial_code: "+232", code: "SL" },
    { name: "Singapore", dial_code: "+65", code: "SG" },
    { name: "Sint Maarten", dial_code: "+1721", code: "SX" },
    { name: "Slovakia", dial_code: "+421", code: "SK" },
    { name: "Slovenia", dial_code: "+386", code: "SI" },
    { name: "Solomon Islands", dial_code: "+677", code: "SB" },
    { name: "Somalia", dial_code: "+252", code: "SO" },
    { name: "South Africa", dial_code: "+27", code: "ZA" },
    { name: "South Korea", dial_code: "+82", code: "KR" },
    { name: "South Sudan", dial_code: "+211", code: "SS" },
    { name: "Spain", dial_code: "+34", code: "ES" },
    { name: "Sri Lanka", dial_code: "+94", code: "LK" },
    { name: "Sudan", dial_code: "+249", code: "SD" },
    { name: "Suriname", dial_code: "+597", code: "SR" },
    { name: "Svalbard and Jan Mayen", dial_code: "+47", code: "SJ" },
    { name: "Swaziland", dial_code: "+268", code: "SZ" },
    { name: "Sweden", dial_code: "+46", code: "SE" },
    { name: "Switzerland", dial_code: "+41", code: "CH" },
    { name: "Syria", dial_code: "+963", code: "SY" },
    { name: "Taiwan", dial_code: "+886", code: "TW" },
    { name: "Tajikistan", dial_code: "+992", code: "TJ" },
    { name: "Tanzania", dial_code: "+255", code: "TZ" },
    { name: "Thailand", dial_code: "+66", code: "TH" },
    { name: "Togo", dial_code: "+228", code: "TG" },
    { name: "Tokelau", dial_code: "+690", code: "TK" },
    { name: "Tonga", dial_code: "+676", code: "TO" },
    { name: "Trinidad and Tobago", dial_code: "+1868", code: "TT" },
    { name: "Tunisia", dial_code: "+216", code: "TN" },
    { name: "Turkey", dial_code: "+90", code: "TR" },
    { name: "Turkmenistan", dial_code: "+993", code: "TM" },
    { name: "Turks and Caicos Islands", dial_code: "+1649", code: "TC" },
    { name: "Tuvalu", dial_code: "+688", code: "TV" },
    { name: "U.S. Virgin Islands", dial_code: "+1340", code: "VI" },
    { name: "Uganda", dial_code: "+256", code: "UG" },
    { name: "Ukraine", dial_code: "+380", code: "UA" },
    { name: "United Arab Emirates", dial_code: "+971", code: "AE" },
    { name: "United Kingdom", dial_code: "+44", code: "GB" },
    { name: "United States", dial_code: "+1", code: "US" },
    { name: "Uruguay", dial_code: "+598", code: "UY" },
    { name: "Uzbekistan", dial_code: "+998", code: "UZ" },
    { name: "Vanuatu", dial_code: "+678", code: "VU" },
    { name: "Vatican", dial_code: "+379", code: "VA" },
    { name: "Venezuela", dial_code: "+58", code: "VE" },
    { name: "Vietnam", dial_code: "+84", code: "VN" },
    { name: "Wallis and Futuna", dial_code: "+681", code: "WF" },
    { name: "Western Sahara", dial_code: "+212", code: "EH" },
    { name: "Yemen", dial_code: "+967", code: "YE" },
    { name: "Zambia", dial_code: "+260", code: "ZM" },
    { name: "Zimbabwe", dial_code: "+263", code: "ZW" }
];


// --- UPDATED COUNTRY SELECTOR COMPONENT ---
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
    
    // Close dropdown when clicking outside
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


// --- SVG ICONS ---
const ChevronLeftIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>;
const ChevronRightIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>;
const ShareIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>;
const MapPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" /></svg>;
const CheckmarkIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>;
const CloseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>;


const PropertyDetailClientView = ({ propertyData }: { propertyData: ForRentProperty }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [selectedDialCode, setSelectedDialCode] = useState('+971');
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const images = propertyData.images || [propertyData.image];

    // --- Carousel Functions ---
    const nextImage = (e?: React.MouseEvent) => {
        e?.stopPropagation(); 
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }
    const prevImage = (e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }

    // --- Lightbox Functions ---
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
    
    // Keyboard navigation for lightbox
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


    const mapSrc = `https://maps.google.com/maps?q=${propertyData.mapCoordinates.lat},${propertyData.mapCoordinates.lng}&hl=en&z=14&output=embed`;

    const handleCountrySelect = (country: Country) => {
        setSelectedDialCode(country.dial_code);
    };

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
                        
                        {/* --- Details Box --- */}
                        <div className="border-b-2 pb-6 mb-6">
                             <div className="flex justify-between items-center mb-4">
                                 <h2 className="text-xl font-semibold text-black">Details</h2>
                                 <p className="text-sm text-gray-500">Updated on {propertyData.updatedOn}</p>
                             </div>
                             <div className="border border-green-200 bg-green-50 p-4 grid grid-cols-1 sm:grid-cols-2 gap-4 text-black">
                                 <div><strong className="block">Property ID:</strong> {propertyData.propertyId}</div>
                                 <div><strong className="block">Bathrooms:</strong> {propertyData.bathrooms}</div>
                                 <div><strong className="block">Price:</strong> Start From AED {propertyData.price} Per Annum</div>
                                 <div><strong className="block">Property Type:</strong> {propertyData.type}</div>
                                 <div><strong className="block">Property Size:</strong> {propertyData.size} Sq.Ft</div>
                                 <div><strong className="block">Property Status:</strong> {propertyData.status}</div>
                                 <div><strong className="block">Bedrooms:</strong> {propertyData.bedrooms}</div>
                             </div>
                        </div>

                        {/* --- Description --- */}
                        <div className="border-b-2 pb-6 mb-6">
                            <h2 className="text-xl font-semibold text-black mb-4">Description</h2>
                            <p className="text-black leading-relaxed">{propertyData.description}</p>
                        </div>

                        {/* --- Address & Map --- */}
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
                        
                         {/* --- Features Section --- */}
                         <div className="border-b-2 pb-6 mb-6">
                             <h2 className="text-xl font-semibold text-black mb-4">Features</h2>
                             <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-black">{propertyData.features.map((f, i) => <div key={i} className="flex items-center"><CheckmarkIcon /> {f}</div>)}</div>
                         </div>

                        {/* --- Additional Images Gallery --- */}
                        <div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {images.map((img, i) => (
                                    <div key={i} className="h-48 rounded-md overflow-hidden cursor-pointer group relative" onClick={() => openLightbox(i)}>
                                        <img src={img} alt={`Gallery image ${i + 1}`} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                                        <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-40 transition-colors"></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    {/* --- RIGHT (AGENT FORM) COLUMN --- */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-10 border border-gray-300 rounded-sm p-6 shadow-lg">
                            <div className="flex items-center mb-6">
                                <div className="h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center mr-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" /></svg>
                                </div>
                                <div>
                                    <p className="font-bold text-black">BizVibez Property</p>
                                    <a href="#" className="text-sm hover:underline" style={{ color: '#891e6d' }}>View Listings</a>
                                </div>
                            </div>
                            <form className="space-y-4">
                                <input type="text" placeholder="Full Name" className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-[#891e6d] text-black placeholder-gray-500 transition-colors duration-200" />
                                <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-[#891e6d] text-black placeholder-gray-500 transition-colors duration-200" />
                                <div className="flex items-stretch w-full border border-gray-300 rounded-sm focus-within:border-[#891e6d] transition-colors duration-200">
                                    <CountrySelector onSelect={handleCountrySelect} />
                                    <input type="tel" placeholder="050 123 4567" className="w-full px-4 py-2 bg-transparent focus:outline-none text-black placeholder-gray-500" />
                                </div>
                                <textarea rows={5} placeholder="I'm interested in this property..." className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-[#891e6d] text-black placeholder-gray-500 transition-colors duration-200"></textarea>
                                <button type="submit" style={{ backgroundColor: '#891e6d' }} className="w-full text-white font-bold py-3 px-4 rounded-sm hover:opacity-90 transition-opacity">
                                    Request Information
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* --- LIGHTBOX MODAL --- */}
            {isLightboxOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 animate-fade-in" onClick={closeLightbox}>
                    <button onClick={closeLightbox} className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10">
                       <CloseIcon/>
                    </button>
                    
                    <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
                        <button onClick={prevLightboxImage} className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 p-2 rounded-full hover:bg-opacity-60 text-white z-10">
                            <ChevronLeftIcon />
                        </button>
                        
                        <img 
                            src={images[lightboxIndex]} 
                            alt="Fullscreen property view" 
                            className="max-w-[95vw] max-h-[85vh] object-contain select-none"
                        />
                        
                        <button onClick={nextLightboxImage} className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 p-2 rounded-full hover:bg-opacity-60 text-white z-10">
                           <ChevronRightIcon/>
                        </button>
                        
                        <div className="absolute bottom-4 text-white text-sm bg-black bg-opacity-50 px-2 py-1 rounded">
                            {lightboxIndex + 1} / {images.length}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

// We need a dummy App component to make this file runnable in isolation
const App = () => {
    // Dummy data for a single property
    const dummyProperty: ForRentProperty = {
        id: 'rent-1',
        propertyId: 'bizlux-13905972',
        title: 'Stunning View | Prime Location High Floor',
        location: 'Dubai Marina',
        price: '180,000',
        image: '/b45.webp',
        images: [
            '/b41.webp',
            '/b42.webp',
            '/b42.webp',
            '/b43.webp',
        ],
        bedrooms: 3,
        bathrooms: 3,
        size: '1502',
        type: 'Apartment, Residential',
        description: "A beautiful apartment with stunning views of the marina...",
        features: ["Balcony", "Shared Gym", "Shared Pool", "Covered Parking", "24/7 Security", "Walk-in Closet"],
        address: { street: "Dubai, Dubai Marina, Marina Heights", city: "Dubai", area: "Dubai Marina" },
        mapCoordinates: { lat: 25.089, lng: 55.148 },
        status: 'For Rent',
        updatedOn: 'September 11, 2025 at 4:15 pm',
    };

    return <PropertyDetailClientView propertyData={dummyProperty} />;
};


export default App;

