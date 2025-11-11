import Image from 'next/image';
import Link from 'next/link';

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Image */}
          <div className="wow animate__animated animate__fadeInLeft">
            <Image
              src="/contact.jpg" 
              alt="Dubai Skyline and luxury properties"
              width={800}
              height={600}
              className="rounded-lg shadow-2xl w-full h-auto object-cover"
            />
          </div>

          {/* Right Column: Text Content */}
          <div className="wow animate__animated animate__fadeInRight">
            {/* --- THIS TEXT IS NOW PURPLE --- */}
            <p 
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: '#8D0169' }}
            >
              WHY CHOOSE BIZVIBEZ?
            </p>
            {/* --- THIS TEXT IS NOW PURPLE --- */}
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4 leading-tight"
              style={{ color: '#8D0169' }}
            >
              BizVibez Properties is Dubai&apos;s fastest-growing real estate brokerage firm.
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              BizVibez Properties stands out as a premier choice among real estate brokers in Dubai for several compelling reasons. Renowned for its unwavering commitment to excellence, BizVibez is dedicated to providing clients with an unparalleled experience in the dynamic Dubai real estate market.
            </p>
            <Link 
              href="/about"
              className="inline-block border border-[#8D0169] text-[#8D0169] font-bold py-3 px-8 rounded-md transition-colors duration-300 hover:bg-[#8D0169] hover:text-white"
            >
              FIND OUT MORE
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}