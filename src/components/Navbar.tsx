"use client";

import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: '#fefefe' }} className="shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        <a href="/">
          <img
            src="/FNL.gif"
            alt="FNL Logo"
            width={128}
            height={40}
          />
        </a>

        {/* --- Desktop Menu --- */}
        <div className="hidden md:flex items-center space-x-2">
          <a href="/" className="text-gray-700 px-4 py-2 rounded-md transition-colors duration-300 hover:bg-[#891e6d] hover:text-white">Home</a>
          
          {/* About Dropdown with robust fix */}
          <div className="relative group">
            <a href="/about" className="text-gray-700 px-4 py-2 rounded-md transition-colors duration-300 group-hover:bg-[#891e6d] group-hover:text-white flex items-center">
              About
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </a>
            {/* This container now has padding-top that acts as an invisible bridge */}
            <div className="absolute top-full left-0 pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
              <div style={{ backgroundColor: '#fefefe' }} className="w-48 rounded-md shadow-lg py-1">
                <a href="/about/team" className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#891e6d] hover:text-white">Our Team</a>
                <a href="/about/services" className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#891e6d] hover:text-white">Our Services</a>
              </div>
            </div>
          </div>

          <a href="/buy" className="text-gray-700 px-4 py-2 rounded-md transition-colors duration-300 hover:bg-[#891e6d] hover:text-white">Buy</a>
          <a href="/rent" className="text-gray-700 px-4 py-2 rounded-md transition-colors duration-300 hover:bg-[#891e6d] hover:text-white">Rent</a>
          <a href="/off-plan" className="text-gray-700 px-4 py-2 rounded-md transition-colors duration-300 hover:bg-[#891e6d] hover:text-white">Off Plan</a>
          <a href="/sell" className="text-gray-700 px-4 py-2 rounded-md transition-colors duration-300 hover:bg-[#891e6d] hover:text-white">Sell</a>
          <a href="/land-for-sale" className="text-gray-700 px-4 py-2 rounded-md transition-colors duration-300 hover:bg-[#891e6d] hover:text-white">Land for sale</a>
          <a href="/area-guides" className="text-gray-700 px-4 py-2 rounded-md transition-colors duration-300 hover:bg-[#891e6d] hover:text-white">Area Guides</a>
          <a href="/contact" className="text-gray-700 px-4 py-2 rounded-md transition-colors duration-300 hover:bg-[#891e6d] hover:text-white">Contact</a>
        </div>

        {/* --- Mobile Menu Button --- */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
          </button>
        </div>
      </div>

      {/* --- Mobile Menu --- */}
      {isOpen && (
        <div className="md:hidden bg-white py-4">
          <a href="/" className="block text-gray-700 text-center py-2 text-lg">Home</a>
          <a href="/about" className="block text-gray-700 text-center py-2 text-lg">About</a>
          <a href="/about/team" className="block text-gray-500 text-center py-2 text-md ml-4">- Our Team</a>
          <a href="/about/services" className="block text-gray-500 text-center py-2 text-md ml-4">- Our Services</a>
          <a href="/buy" className="block text-gray-700 text-center py-2 text-lg">Buy</a>
          <a href="/rent" className="block text-gray-700 text-center py-2 text-lg">Rent</a>
          <a href="/off-plan" className="block text-gray-700 text-center py-2 text-lg">Off Plan</a>
          <a href="/sell" className="block text-gray-700 text-center py-2 text-lg">Sell</a>
          <a href="/land-for-sale" className="block text-gray-700 text-center py-2 text-lg">Land for sale</a>
          <a href="/area-guides" className="block text-gray-700 text-center py-2 text-lg">Area Guides</a>
          <a href="/contact" className="block text-gray-700 text-center py-2 text-lg">Contact</a>
        </div>
      )}
    </nav>
  );
}

