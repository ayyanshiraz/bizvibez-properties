// Using a standard <img> tag to avoid build errors
const ArrowIcon = () => (
  <svg className="w-4 h-4 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
  </svg>
);

// --- Social Media Icons ---
const FacebookIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" /></svg>
);
const InstagramIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.057 1.644-.069 4.85-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.646 1.441-1.441c0-.795-.645-1.44-1.441-1.44z" /></svg>
);
const TikTokIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M13 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/></svg>
);
const YouTubeIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
);
const LinkedInIcon = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);


export default function Footer() {
  // Style for the patterned purple background
  const footerBackgroundStyle = {
    backgroundColor: '#970060',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M-1 1 l2-2 M0 10 l10-10 M9 11 l2-2' stroke='%23FFF' stroke-width='0.5' stroke-opacity='0.2'/%3E%3C/svg%3E")`,
  };

  return (
    <footer style={footerBackgroundStyle} className="text-white pt-12 pb-12">
      {/* Using a robust Flexbox layout for even column distribution */}
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between text-center md:text-left -mx-4">
        
          {/* Column 1: Logo and Address */}
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            <div className="space-y-4 flex flex-col items-center md:items-start">
              <p className="text-sm text-white">
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
                  <p className="text-white">
                    <strong className="block text-white">Email:</strong>
                    info@bizvibezproperties.com
                  </p>
                </li>
                <li>
                  <p className="text-white">
                    <strong className="block text-white">Call:</strong>
                    +971 54 201 9999
                  </p>
                </li>
                  <li>
                  <p className="text-white">
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
              <h3 className="text-lg font-bold text-white uppercase">Services</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="https://bizvibezproperties.com/buy" className="text-white hover:text-white inline-flex items-center justify-center md:justify-start"><ArrowIcon />Buy</a></li>
                <li><a href="https://bizvibezproperties.com/rent" className="text-white hover:text-white inline-flex items-center justify-center md:justify-start"><ArrowIcon />Rent</a></li>
                <li><a href="https://bizvibezproperties.com/off-plan" className="text-white hover:text-white inline-flex items-center justify-center md:justify-start"><ArrowIcon />Off Plan</a></li>
                <li><a href="https://bizvibezproperties.com/sell" className="text-white hover:text-white inline-flex items-center justify-center md:justify-start"><ArrowIcon />Sell</a></li>
                <li><a href="https://bizvibezproperties.com/land-for-sale" className="text-white hover:text-white inline-flex items-center justify-center md:justify-start"><ArrowIcon />Land For Sale</a></li>
                <li><a href="https://bizvibezproperties.com/area-guides" className="text-white hover:text-white inline-flex items-center justify-center md:justify-start"><ArrowIcon />Area Guides</a></li>
              </ul>
            </div>
          </div>

          {/* Column 4: Company */}
          <div className="w-full md:w-1/4 px-4">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white uppercase">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="text-white hover:text-white inline-flex items-center justify-center md:justify-start"><ArrowIcon />About Us</a></li>
                <li><a href="/about/team" className="text-white hover:text-white inline-flex items-center justify-center md:justify-start"><ArrowIcon />Our Team</a></li>
                <li><a href="/careers" className="text-white hover:text-white inline-flex items-center justify-center md:justify-start"><ArrowIcon />Careers</a></li>
                <li><a href="/mortgage-calculator" className="text-white hover:text-white inline-flex items-center justify-center md:justify-start"><ArrowIcon />Mortgage Calculator</a></li>
                <li><a href="/privacy-policy" className="text-white hover:text-white inline-flex items-center justify-center md:justify-start"><ArrowIcon />Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* --- New Sub-Footer Section --- */}
        <div className="border-t border-white border-opacity-20 mt-12 pt-8 text-center">
            <p className="text-sm text-white mb-8">
                Ensuring Business Solution With Excellence And Innovation
            </p>
            <div className="flex justify-center mb-8">
                <a 
                    href="https://bizvibez.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center bg-white rounded-lg px-4 py-0 transition-transform duration-300 hover:scale-105"
                >
                    <img src="/footer.jpg" alt="BizVibez Consultants" className="h-10 w-auto" />
                </a>
            </div>
            <div className="flex justify-center space-x-4 mb-8">
                <a href="https://www.facebook.com/bizvibezproperties" target="_blank" rel="noopener noreferrer" className="text-white border border-white rounded-full p-3 hover:bg-white hover:text-[#891e6d] transition-colors"><FacebookIcon /></a>
                <a href="https://www.instagram.com/bizvibez_properties" target="_blank" rel="noopener noreferrer" className="text-white border border-white rounded-full p-3 hover:bg-white hover:text-[#891e6d] transition-colors"><InstagramIcon /></a>
                <a href="https://www.tiktok.com/@bizvibez.properties?_t=ZS-90TK8DI95uh&_r=1" target="_blank" rel="noopener noreferrer" className="text-white border border-white rounded-full p-3 hover:bg-white hover:text-[#891e6d] transition-colors"><TikTokIcon /></a>
                <a href="https://www.linkedin.com/company/bizvibez-properties/" target="_blank" rel="noopener noreferrer" className="text-white border border-white rounded-full p-3 hover:bg-white hover:text-[#891e6d] transition-colors"><LinkedInIcon /></a>
            </div>
            <p className="text-sm text-white">
                © BizVibez Properties - All rights reserved
            </p>
        </div>

      </div>
    </footer>
  );
}

