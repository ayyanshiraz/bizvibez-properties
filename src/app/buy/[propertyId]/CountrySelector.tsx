"use client";

import React, { useState, useEffect, useRef } from 'react';
import { countries, Country } from '../countries';

const DropdownArrowIcon = () => <svg className="h-4 w-4 text-gray-700 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>;

const CountrySelector = ({ onSelect }: { onSelect: (country: Country) => void }) => {
    const [isOpen, setIsOpen] = useState(false);
    // Set initial country to UAE or a default, if not explicitly selected
    const [selectedCountry, setSelectedCountry] = useState<Country>(countries.find(c => c.dial_code === '+971') || countries[0]);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleSelect = (country: Country) => {
        setSelectedCountry(country);
        onSelect(country);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        // Ensure to call onSelect with the initial country when component mounts
        onSelect(selectedCountry);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [onSelect, selectedCountry]); // Added selectedCountry and onSelect to dependencies

    return (
        <div className="relative z-20" ref={dropdownRef}> {/* Increased z-index */}
            <button type="button" onClick={() => setIsOpen(!isOpen)} 
                    className="flex items-center justify-between px-3 py-2 bg-gray-100 rounded-l-sm h-full" // Added h-full
            >
                <img src={selectedCountry.flag} alt={selectedCountry.name} className="h-4 w-auto mr-2" />
                <span className="text-black text-sm">{selectedCountry.dial_code}</span>
                <DropdownArrowIcon />
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 mt-1 w-72 max-h-60 overflow-y-auto bg-white border border-gray-300 rounded-md shadow-lg">
                    <ul className="py-1">
                        {countries.map((country) => (
                            <li key={country.name} onClick={() => handleSelect(country)} className="flex items-center px-4 py-2 text-sm text-black hover:bg-gray-100 cursor-pointer">
                                <img src={country.flag} alt={country.name} className="h-4 w-6 mr-3" />
                                <span>{country.name} ({country.dial_code})</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CountrySelector;