import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-6 py-2 flex justify-between items-center">
        {/* Logo Section */}
        <a href="/">
          <Image
            src="/FNL.gif"        // <-- Changed to your GIF
            alt="FNL Logo"        // <-- Updated alt text
            width={128}           // You may need to adjust this
            height={40}           // You may need to adjust this
            unoptimized={true}    // <-- Important for GIF animations to work
            priority
          />
        </a>

        {/* Navigation Links Section */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="/" className="text-gray-700 hover:text-purple-600">Home</a>

          {/* About Dropdown */}
          <div className="relative group">
            <a href="/about" className="text-gray-700 hover:text-purple-600 flex items-center">
              About
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </a>
            <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 invisible group-hover:visible">
              <a href="/about/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Our Team</a>
              <a href="/about/services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Our Services</a>
            </div>
          </div>

          <a href="/buy" className="text-gray-700 hover:text-purple-600">Buy</a>
          <a href="/rent" className="text-gray-700 hover:text-purple-600">Rent</a>
          <a href="/off-plan" className="text-gray-700 hover:text-purple-600">Off Plan</a>
          <a href="/sell" className="text-gray-700 hover:text-purple-600">Sell</a>
          <a href="/land-for-sale" className="text-gray-700 hover:text-purple-600">Land for sale</a>
          <a href="/area-guides" className="text-gray-700 hover:text-purple-600">Area Guides</a>
          <a href="/contact" className="text-gray-700 hover:text-purple-600">Contact</a>
        </div>
      </div>
    </nav>
  );
}