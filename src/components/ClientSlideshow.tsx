"use client";

import Image from 'next/image';

export default function ClientSlideshow() {
  // Generate the list of logo paths
  const logos = Array.from({ length: 19 }, (_, i) => `/clients/${i + 2}.png`);

  return (
    <>
      {/* This style tag contains the CSS animation for the slideshow */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
      `}</style>

      <section className="bg-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8" style={{ color: '#891e6d' }}>
            Our Trusted Clients
          </h2>
          <div className="relative w-full overflow-hidden">
            {/* We duplicate the logos to create a seamless looping effect */}
            <div className="flex w-max animate-scroll">
              {[...logos, ...logos].map((logo, index) => (
                <div key={index} className="flex-shrink-0 w-48 h-24 flex items-center justify-center mx-4">
                  <Image
                    src={logo}
                    alt={`Client logo ${index + 1}`}
                    width={150}
                    height={80}
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
