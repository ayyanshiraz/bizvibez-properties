"use client"; // This page requires client-side interactivity for animations

import { useEffect, useRef, useState } from 'react';

// --- Mock Data for Team Members ---
const teamMembers = [
  {
    isCEO: true,
    name: 'Emran Ahmed',
    title: 'CEO, Bizvibez Group of Companies',
    imageUrl: '/ceo.png',
    languages: 'English, Russian, Uzbek, Turkish, Persian, Hindi',
    email: 'mailto:info@bizvibezproperties.com',
    phone: 'tel:+971542019999',
    whatsapp: 'https://wa.me/97144569917',
  },
  {
    name: 'Abrar Qureshi',
    title: 'Property Sales Manager',
    imageUrl: '/abrar.png',
    languages: 'English, Arabic, Turkish, Russian, Uzbek',
    email: 'mailto:info@bizvibezproperties.com',
    phone: 'tel:+971542019999',
    whatsapp: 'https://wa.me/97144569917',
  },
  {
    name: 'Anne Dinglasan',
    title: 'Customer Relations Officer',
    imageUrl: '/annie.png',
    languages: 'English, Arabic',
    email: 'mailto:info@bizvibezproperties.com',
    phone: 'tel:+971542019999',
    whatsapp: 'https://wa.me/97144569917',
  },
  {
    name: 'Wasi Ahmed',
    title: 'Head of Operations',
    imageUrl: '/wasi.png',
    languages: 'English, Arabic',
    email: 'mailto:info@bizvibezproperties.com',
    phone: 'tel:+971542019999',
    whatsapp: 'https://wa.me/97144569917',
  },
  {
    name: 'Sadia Awan',
    title: 'HR & Marketing Manager',
    imageUrl: '/sadia.png',
    languages: 'English, Arabic',
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

  return (
    <div className="bg-white">
      {/* --- Hero Section --- */}
      <section 
        className="relative overflow-hidden mt-1" 
        style={{ backgroundColor: '#891e6d' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center" style={{ height: '420px' }}>
            {/* Text Content */}
            <div className="w-full md:w-1/2 text-white text-left z-10">
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

            {/* Image Content */}
            <div className="hidden md:flex w-1/2 h-full justify-end items-end z-10">
              <img 
                src="/About us.png" 
                alt="Team decorative graphic" 
                className="h-[480px] w-auto object-contain" // Height increased to fill the banner
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
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          
          {/* CEO Card */}
          {ceo && (
            <AnimatedCard>
              <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden md:flex mb-16 transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <div className="md:w-1/3 bg-gray-100 flex items-center justify-center">
                  <img className="h-full w-full object-contain" src={ceo.imageUrl} alt={ceo.name} />
                </div>
                <div className="md:w-2/3 p-8 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-gray-800">{ceo.name}</h3>
                  <p className="text-gray-500 mt-1">{ceo.title}</p>
                  <p className="text-sm text-gray-500 mt-4 flex items-center">
                    <span className="text-green-500 mr-2">✔</span> {ceo.languages}
                  </p>
                  <div className="flex space-x-3 mt-4">
                    <a href={ceo.email} style={{ backgroundColor: '#891e6d' }} className="p-2 rounded-full hover:opacity-80 transition-opacity">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                    </a>
                    <a href={ceo.phone} style={{ backgroundColor: '#891e6d' }} className="p-2 rounded-full hover:opacity-80 transition-opacity">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                    </a>
                    <a href={ceo.whatsapp} style={{ backgroundColor: '#891e6d' }} className="p-2 rounded-full hover:opacity-80 transition-opacity">
                       <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM6.62 14.58a5.98 5.98 0 01-4.2-4.2 6.01 6.01 0 018.4 0 5.98 5.98 0 01-4.2 4.2z"></path><path d="M10.25 11.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5zM10.25 6.25a.75.75 0 00-1.5 0v1.25a.75.75 0 001.5 0V6.25z"></path></svg>
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedCard>
          )}

          {/* Other Team Members Grid */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherMembers.map((member, index) => (
              <AnimatedCard key={index}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden text-center transition-all duration-300 hover:shadow-2xl hover:scale-105 h-full">
                  <div className="h-64 w-full bg-gray-100 flex items-center justify-center">
                    <img className="max-h-full max-w-full object-contain" src={member.imageUrl} alt={member.name} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800">{member.name}</h3>
                    <p className="text-gray-500 mt-1">{member.title}</p>
                     <p className="text-sm text-gray-500 mt-4 flex items-center justify-center">
                      <span className="text-green-500 mr-2">✔</span> {member.languages}
                    </p>
                    <div className="flex space-x-3 mt-4 justify-center">
                      <a href={member.email} style={{ backgroundColor: '#891e6d' }} className="p-2 rounded-full hover:opacity-80 transition-opacity">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>
                      </a>
                      <a href={member.phone} style={{ backgroundColor: '#891e6d' }} className="p-2 rounded-full hover:opacity-80 transition-opacity">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>
                      </a>
                       <a href={member.whatsapp} style={{ backgroundColor: '#891e6d' }} className="p-2 rounded-full hover:opacity-80 transition-opacity">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zM6.62 14.58a5.98 5.98 0 01-4.2-4.2 6.01 6.01 0 018.4 0 5.98 5.98 0 01-4.2 4.2z"></path><path d="M10.25 11.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5zM10.25 6.25a.75.75 0 00-1.5 0v1.25a.75.75 0 001.5 0V6.25z"></path></svg>
                      </a>
                    </div>
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

