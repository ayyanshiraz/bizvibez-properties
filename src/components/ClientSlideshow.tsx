"use client";

import { usePathname } from 'next/navigation';

export default function ClientSlideshow() {
  const pathname = usePathname();
  const isHomepage = pathname === '/';

  const logos = Array.from({ length: 19 }, (_, i) => `/clients/${i + 2}.png`);

  const sectionStyle = isHomepage
    ? {
        backgroundColor: '#8D0169',
        backgroundImage: `repeating-linear-gradient(
          45deg,
          #a11474,
          #a11474 1px,
          #8D0169 1px,
          #8D0169 10px
        )`,
      }
    : {
        backgroundColor: '#FFFFFF',
      };

  const titleStyle = {
    color: isHomepage ? '#FFFFFF' : '#891e6d',
  };

  const titleText = 'Our Trusted Clients';

  return (
    <>
      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          /* FIX: Changed from -100% to -50% for a seamless loop */
          100% { transform: translateX(-50%); }
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
                  {isHomepage ? (
                    <div
                      className="bg-white rounded-2xl w-full h-full"
                      style={{
                        backgroundImage: `url(${logo})`,
                        backgroundSize: '150px 80px',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                      }}
                      role="img"
                      aria-label={`Client logo ${index + 1}`}
                    ></div>
                  ) : (
                    <img
                      src={logo}
                      alt={`Client logo ${index + 1}`}
                      width="150"
                      height="80"
                      style={{
                        objectFit: 'contain',
                        width: 'auto',
                        height: 'auto',
                      }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

