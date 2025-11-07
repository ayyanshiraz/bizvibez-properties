"use client"; // This page requires client-side interactivity for animations

import { useEffect, useRef, useState } from 'react';

// --- Mock Data for Team Members ---
const teamMembers = [
  {
    isCEO: true,
    name: 'Emran Ahmed',
    title: 'CEO, Bizvibez Group of Companies',
    imageUrl: '/ceo.png',
    languages: 'English, Arabic, Hindi, Urdu, Punjabi',
    email: 'mailto:info@bizvibezproperties.com',
    phone: 'tel:+971542019999',
    whatsapp: 'https://wa.me/97144569917',
  },
  {
    name: 'Naazia Khan',
    title: 'Property & Investment Advisor',
    imageUrl: '/nazia11.png',
    languages: 'English, Urdu, Hindi, Pashto',
    email: 'mailto:info@bizvibezproperties.com',
    phone: 'tel:+971542019999',
    whatsapp: 'https://wa.me/97144569917',
  },
  {
    name: ' Saman Imran',
    title: 'Admin Executive',
    imageUrl: '/saman11.png',
    languages: 'English, Hindi, Urdu',
    email: 'mailto:info@bizvibezproperties.com',
    phone: 'tel:+971542019999',
    whatsapp: 'https://wa.me/97144569917',
  },
  {
    name: 'Wasi Ahmed',
    title: 'Head of Operations',
    imageUrl: '/wasi11.png',
    languages: 'English, Hindi, Urdu, Punjabi',
    email: 'mailto:info@bizvibezproperties.com',
    phone: 'tel:+971542019999',
    whatsapp: 'https://wa.me/97144569917',
  },
  {
    name: 'Sadia Awan',
    title: 'HR & Marketing Manager',
    imageUrl: '/sadia11.png',
    languages: 'Urdu, Hindi',
    email: 'mailto:info@bizvibezproperties.com',
    phone: 'tel:+971542019999',
    whatsapp: 'https://wa.me/97144569917',
  },
];

// A reusable component to handle the scroll animation
const AnimatedCard = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the card is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
    >
      {children}
    </div>
  );
};


export default function OurTeamPage() {
  const ceo = teamMembers.find(member => member.isCEO);
  const otherMembers = teamMembers.filter(member => !member.isCEO);

  // Style for the patterned purple background
  const cardBackgroundStyle = {
    backgroundColor: '#970060',
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 10 10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M-1 1 l2-2 M0 10 l10-10 M9 11 l2-2' stroke='%23FFF' stroke-width='0.5' stroke-opacity='0.2'/%3E%3C/svg%3E")`,
  };

  return (
    <div className="bg-white">
      {/* --- Hero Section --- */}
      <section 
        className="relative overflow-hidden mt-1" 
        style={{ backgroundColor: '#970060', height: '420px' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 h-full">
          <div className="flex items-center h-full">
            {/* Text Content */}
            <div className="w-full md:w-1/2 text-white text-left z-20">
              <p className="text-lg font-light tracking-widest uppercase text-gray-300">
                OUR TEAM
              </p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-2">
                Meet The People Behind
                <br />
                BizVibez Properties
              </h1>
              <a 
                href="/contact" 
                className="inline-block bg-white text-[#891e6d] font-bold py-3 px-8 rounded-md mt-8 transition-transform duration-300 hover:scale-105"
              >
                Get started today
              </a>
            </div>

            {/* --- CORRECTED IMAGE CONTENT --- */}
            <div className="hidden md:block absolute bottom-0 right-0 w-1/2 h-full z-10">
              <img 
                src="/teams11.png" 
                alt="Team decorative graphic" 
                className="absolute bottom-[-53%] right-0 h-[220%] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- Intro Text Section --- */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our Team Is A Dynamic And Dedicated Group Of Individuals United By A Shared Passion For Excellence. Comprising Diverse Talents And Backgrounds, We Collaborate Seamlessly To Achieve Common Goals.
          </p>
        </div>
      </section>

      {/* --- Team Members Section --- */}
      <section className="bg-gray-60 py-25">
        <div className="container mx-auto px-6">
          
          {/* CEO Card */}
          {ceo && (
            <AnimatedCard>
              <div 
                className="max-w-4xl mx-auto rounded-xl shadow-lg overflow-hidden md:flex mb-16 transition-all duration-300 hover:shadow-2xl hover:scale-105"
                style={cardBackgroundStyle}
              >
                <div className="md:w-1/3 flex items-center justify-center" style={{ backgroundColor: '#dfdfe4' }}>
                  <img className="h-full w-full object-contain" src={ceo.imageUrl} alt={ceo.name} />
                </div>
                <div className="md:w-2/3 p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-white">{ceo.name}</h3>
                  <p className="text-gray-300 mt-1">{ceo.title}</p>
                  <p className="text-sm text-gray-200 mt-4 flex items-center">
                    <span className="text-green-300 mr-2">✔</span> {ceo.languages}
                  </p>
                </div>
              </div>
            </AnimatedCard>
          )}

          {/* Other Team Members Grid */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherMembers.map((member, index) => (
              <AnimatedCard key={index}>
                <div 
                  className="rounded-xl shadow-lg overflow-hidden text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 h-full"
                  style={cardBackgroundStyle}
                >
                  <div className="h-64 w-full flex items-center justify-center" style={{ backgroundColor: '#dfdfe4' }}>
                    <img className="max-h-full max-w-full object-contain" src={member.imageUrl} alt={member.name} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white">{member.name}</h3>
                    <p className="text-gray-300 mt-1">{member.title}</p>
                    <p className="text-sm text-gray-200 mt-4 flex items-center justify-center">
                      <span className="text-green-300 mr-2">✔</span> {member.languages}
                    </p>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

