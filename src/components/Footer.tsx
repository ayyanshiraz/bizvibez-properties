// Using a standard <img> tag to avoid build errors
const ArrowIcon = () => (
  <svg className="w-4 h-4 mr-2 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#891e6d' }} className="text-gray-300 py-12">
      {/* Using a robust Flexbox layout for even column distribution */}
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between text-center md:text-left -mx-4">
        
          {/* Column 1: Logo and Address */}
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <div className="space-y-4 flex flex-col items-center md:items-start">
              <img src="/FNL.gif" alt="FNL Logo" width={128} height={40} />
              <p className="text-sm">
                <strong className="block text-white">Address:</strong>
                602 Bays Water Tower, <br/>
                Business Bay Dubai <br/>
                United Arab Emirates
              </p>
            </div>
          </div>

          {/* Column 2: Contact Us */}
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white uppercase">Contact Us</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="/contact" className="hover:text-white">Contact Us</a></li>
                <li>
                  <p>
                    <strong className="block text-white">Email:</strong>
                    info@bizvibezproperties.com
                  </p>
                </li>
                <li>
                  <p>
                    <strong className="block text-white">Call:</strong>
                    +971 54 201 9999
                  </p>
                </li>
                 <li>
                  <p>
                    <strong className="block text-white">WhatsApp:</strong>
                    +971 4 456 9917
                  </p>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Buy & Sell */}
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white uppercase">Buy & Sell</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white inline-flex items-center justify-center md:justify-start"><ArrowIcon />Apartments</a></li>
                <li><a href="#" className="hover:text-white inline-flex items-center justify-center md:justify-start"><ArrowIcon />Penthouse</a></li>
                <li><a href="#" className="hover:text-white inline-flex items-center justify-center md:justify-start"><ArrowIcon />Townhouse</a></li>
                <li><a href="#" className="hover:text-white inline-flex items-center justify-center md:justify-start"><ArrowIcon />Villas</a></li>
                <li><a href="#" className="hover:text-white inline-flex items-center justify-center md:justify-start"><ArrowIcon />Off Plan</a></li>
                <li><a href="/area-guides" className="hover:text-white inline-flex items-center justify-center md:justify-start"><ArrowIcon />Area Guides</a></li>
              </ul>
            </div>
          </div>

          {/* Column 4: Company */}
          <div className="w-full md:w-1/4 px-4">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white uppercase">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="hover:text-white inline-flex items-center justify-center md:justify-start"><ArrowIcon />About Us</a></li>
                <li><a href="/about/team" className="hover:text-white inline-flex items-center justify-center md:justify-start"><ArrowIcon />Our Team</a></li>
                <li><a href="/careers" className="hover:text-white inline-flex items-center justify-center md:justify-start"><ArrowIcon />Careers</a></li>
                <li><a href="#" className="hover:text-white inline-flex items-center justify-center md:justify-start"><ArrowIcon />News and Articles</a></li>
                <li><a href="/mortgage-calculator" className="hover:text-white inline-flex items-center justify-center md:justify-start"><ArrowIcon />Mortgage Calculator</a></li>
                <li><a href="/privacy-policy" className="hover:text-white inline-flex items-center justify-center md:justify-start"><ArrowIcon />Privacy Policy</a></li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}

