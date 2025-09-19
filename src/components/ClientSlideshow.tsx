"use client";

import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Import the hook

export default function ClientSlideshow() {
  // --- NEW LOGIC ---
  // This hook gets the current URL path (e.g., "/", "/about", "/contact")
  const pathname = usePathname();
  // We check if the current path is the homepage ("/")
  const isHomepage = pathname === '/';
  // --- END OF NEW LOGIC ---

  const logos = Array.from({ length: 19 }, (_, i) => `/clients/${i + 2}.png`);

  // Styles and text are now automatically set based on the page
  const sectionStyle = {
    backgroundColor: isHomepage ? '#970060' : '#FFFFFF',
  };
  const titleStyle = {
    color: isHomepage ? '#FFFFFF' : '#891e6d',
  };
  const titleText = isHomepage ? 'Our Trusted Clients' : 'Our Trusted Clients';

  return (
    <>
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
      `}</style>

      <section className="py-12" style={sectionStyle}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8" style={titleStyle}>
            {titleText}
          </h2>
          <div className="relative w-full overflow-hidden">
            <div className="flex w-max animate-scroll">
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-4">
                  {/* AMENDMENT: Added rounded-xl and increased padding for better appearance */}
                  <div className={isHomepage ? 'bg-white rounded-xl p-3' : ''}> 
                    <Image
                      src={logo}
                      alt={`Client logo ${index + 1}`}
                      width={150}
                      height={80}
                      style={{ objectFit: 'contain' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}