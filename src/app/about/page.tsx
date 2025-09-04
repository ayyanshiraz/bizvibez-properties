"use client"; // This page now requires client-side interactivity for animations

import { useState, useEffect, useRef } from 'react';

// A reusable component for the animated number counter
const AnimatedCounter = ({ end, duration }: { end: number; duration: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const endValue = end;
          const animationDuration = duration;
          // Ensure stepTime is at least 1 to avoid infinite loops for small numbers
          const stepTime = Math.max(1, Math.floor(animationDuration / endValue));

          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start >= endValue) { // Use >= to ensure it always reaches the end
              setCount(endValue); // Set final count exactly
              clearInterval(timer);
            }
          }, stepTime);
          observer.disconnect(); // Stop observing once animation starts
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}</span>;
};


export default function AboutPage() {
  return (
    <>
      {/* --- Hero Section --- */}
      <section
        className="relative h-[80vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/about.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center z-10 px-4">
          <p className="text-lg font-light tracking-widest uppercase mb-2">
            Real Estate Agency in Dubai
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            BizVibez Properties
          </h1>
          <div className="mt-8 flex justify-center gap-4">
            <a href="/about/team" className="bg-transparent border-2 border-white text-white px-8 py-3 font-semibold transition-all duration-300 hover:bg-[#891e6d] hover:border-[#891e6d] hover:scale-105">
              OUR TEAM
            </a>
            <a href="/contact" className="bg-transparent border-2 border-white text-white px-8 py-3 font-semibold transition-all duration-300 hover:bg-[#891e6d] hover:border-[#891e6d] hover:scale-105">
              CONTACT US
            </a>
          </div>
        </div>
      </section>

      {/* --- Our Story Section --- */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#891e6d' }}>
              OUR STORY
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Founded in 2024, BizVibez Properties has quickly established itself as a leader in the Dubai real estate market. Since our inception, we have consistently upheld a standard of excellence and a commitment to providing our clients with unparalleled service.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our committed team is dedicated to meeting clients' needs with innovative solutions, and extensive knowledge of Dubai Real Estate facilitates seamless real estate transactions that align with their pace and requirements.
            </p>
          </div>
        </div>
      </section>

      {/* --- CEO Message Section --- */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto md:flex md:items-center md:gap-12">
            {/* CEO Image with decorative border */}
            <div className="md:w-2/5 mb-8 md:mb-0">
              <div style={{ backgroundColor: '#891e6d' }} className="p-2 rounded-2xl shadow-2xl inline-block">
                 <img src="/ceo.png" alt="CEO of BizVibez Properties" className="rounded-xl w-full h-full object-cover" />
              </div>
            </div>
            {/* CEO Message Content */}
            <div className="md:w-3/5 text-gray-600">
              <p className="text-6xl font-serif -mb-4" style={{ color: '#891e6d' }}>“</p>
              <p className="text-md text-justify leading-relaxed mb-6">
                At Bizvibez Properties, we believe that real estate is more than just a transaction; it's the foundation upon which dreams are built and ambitions are realized. As the property arm of the esteemed Bizvibez Management Consultants Co., we bring over a decade of market leadership in the UAE, having proudly served this dynamic region since 2009.
              </p>
              <p className="text-md text-justify leading-relaxed mb-6">
                In today's fast-paced and ever-evolving real estate landscape, a one-size-fits-all approach is no longer enough. We recognize that every client's journey is unique, which is why our mission is to provide a truly personalized and consultative experience. Whether you are buying, selling, or investing, our commitment is to understand your vision first, then meticulously tailor our services to achieve a successful outcome.
              </p>
              <p className="text-md text-justify leading-relaxed">
                Our team of dedicated agents leverages deep local knowledge, cutting-edge technology, and real-time market insights to uncover opportunities that align perfectly with your goals. Our practice is built on a foundation of unwavering core values: transparency, integrity, and collaboration. We are passionate not just about finding the perfect property, but about building lasting relationships and contributing positively to the communities we serve.
              </p>
              <p className="text-6xl font-serif text-right -mt-4" style={{ color: '#891e6d' }}>”</p>
              <div className="mt-4">
                <h4 className="font-bold text-lg text-gray-800">Emran Ahmed</h4>
                <p className="text-sm text-gray-500">CEO, Bizvibez Group of Companies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Animated Stats Section --- */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          {/* Wrapper to control width and center the grid */}
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            
            <div className="border-r border-gray-200">
              <h3 className="text-4xl md:text-5xl font-bold" style={{ color: '#891e6d' }}>
                <AnimatedCounter end={25} duration={2000} />+
              </h3>
              <p className="text-gray-500 mt-2">Real Estate Agents</p>
            </div>

            <div className="md:border-r border-gray-200">
              <h3 className="text-4xl md:text-5xl font-bold" style={{ color: '#891e6d' }}>
                <AnimatedCounter end={170} duration={2000} />M+
              </h3>
              <p className="text-gray-500 mt-2">Worth of Sales</p>
            </div>

            <div className="border-r border-gray-200">
              <h3 className="text-4xl md:text-5xl font-bold" style={{ color: '#891e6d' }}>
                <AnimatedCounter end={7} duration={2000} />
              </h3>
              <p className="text-gray-500 mt-2">Cities Covered</p>
            </div>

            <div>
              <h3 className="text-4xl md:text-5xl font-bold" style={{ color: '#891e6d' }}>
                {/* Duration changed to 3000 for a 3-second animation */}
                <AnimatedCounter end={2100} duration={3000} />+
              </h3>
              <p className="text-gray-500 mt-2">Transactions</p>
            </div>

          </div>
        </div>
      </section>

      {/* --- START: NEW SECTION ADDED --- */}
{/* --- Vision Section --- */}
<section
  className="relative py-20 flex items-center justify-center" // Centering classes added
  style={{
    backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/about.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  }}
>
  {/* This new wrapper constrains the grid's width and centers it within the section */}
  <div className="container mx-auto px-6">
    <div className="max-w-5xl mx-auto"> {/* This ensures the grid doesn't stretch too wide */}
      <div className="grid md:grid-cols-3 gap-8">

        {/* Card 1: Our Approach */}
        <div 
          className="aspect-square flex flex-col justify-center items-center p-8 text-center rounded-lg shadow-2xl transform hover:-translate-y-2 transition-transform duration-300"
          style={{ backgroundColor: '#891e6d' }}
        >
          <div className="flex justify-center items-center mb-4 h-16">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-white">Our approach</h3>
          <p className="text-gray-200 leading-relaxed text-sm">
            We deliver unparalleled services to clients looking to buy, sell, rent, or manage their properties. At BizVibez Properties, we are sure to guide you toward the right Real Estate investment opportunity.
          </p>
        </div>

        {/* Card 2: Our Goal */}
        <div 
          className="aspect-square flex flex-col justify-center items-center p-8 text-center rounded-lg shadow-2xl transform hover:-translate-y-2 transition-transform duration-300"
          style={{ backgroundColor: '#891e6d' }}
        >
          <div className="flex justify-center items-center mb-4 h-16">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
              <circle cx="12" cy="12" r="10" />
              <circle cx="12" cy="12" r="6" />
              <circle cx="12" cy="12" r="2" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-white">Our Goal</h3>
          <p className="text-gray-200 leading-relaxed text-sm">
            We are an innovative real estate brokerage concept. Our goal is to become one of Dubai's top real estate brokerage companies and to make a substantial and enduring impact on the marketplace.
          </p>
        </div>

        {/* Card 3: Our Experts */}
        <div 
          className="aspect-square flex flex-col justify-center items-center p-8 text-center rounded-lg shadow-2xl transform hover:-translate-y-2 transition-transform duration-300"
          style={{ backgroundColor: '#891e6d' }}
        >
          <div className="flex justify-center items-center mb-4 h-16">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-3 text-white">Our Experts</h3>
          <p className="text-gray-200 leading-relaxed text-sm">
            Our team is a synergy of dedicated experts who work collaboratively to deliver professional services to our clients with a commitment to excellence, striving to set new standards in the industry.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* --- END: NEW SECTION ADDED --- */}
    </>
  );
}
