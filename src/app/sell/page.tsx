'use client';

import { useState, useEffect, useRef } from 'react';

// --- ANIMATION COMPONENT (for scroll animations) ---
interface AnimatedSectionProps {
  children: React.ReactNode;
}
const AnimatedSection = ({ children }: AnimatedSectionProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );
        const currentRef = sectionRef.current;
        if (currentRef) observer.observe(currentRef);
        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);
    const classes = `transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`;
    return <div ref={sectionRef} className={classes}>{children}</div>;
};

// --- SVG ICON COMPONENTS (Filled, matching new screenshots) ---
const ValuationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-black flex-shrink-0">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM8 19H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V9h2v2zm0-4H6V5h2v2zm4 8h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2zm4 8h-2v-2h2v2zm0-4h-2V9h2v2z"/>
    </svg>
);
const AdviceIcon = () => (
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-black flex-shrink-0">
        <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
    </svg>
);
const MarketingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-black flex-shrink-0">
        <path d="M14 10H2v2h12v-2zm0-4H2v2h12V6zm4 8v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zM2 16h8v-2H2v2z"/>
    </svg>
);
const TeamIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-black flex-shrink-0">
        <path d="M16.5 13c-1.2 0-3.07.34-4.5 1-1.43-.67-3.3-1-4.5-1C5.33 13 1 14.08 1 16.25V19h22v-2.75c0-2.17-4.33-3.25-6.5-3.25zm-4-1c-1.38 0-2.5-1.12-2.5-2.5S11.12 7 12.5 7s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM4.5 12c-1.38 0-2.5-1.12-2.5-2.5S3.12 7 4.5 7s2.5 1.12 2.5 2.5S5.88 12 4.5 12zm15 0c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
);
const ServiceIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-black flex-shrink-0">
        <path d="M12 1a9 9 0 0 0-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h4v1h-7v2h6c1.66 0 3-1.34 3-3V10a9 9 0 0 0-9-9z"/>
    </svg>
);
const SecurityIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8 text-black flex-shrink-0">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
    </svg>
);


// --- SELL PAGE COMPONENT ---
const SellPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        console.log("Form Data Submitted:", formData);
        setTimeout(() => {
            setLoading(false);
            alert('Thank you for your message!');
            setFormData({ name: '', email: '', phone: '', message: '' });
        }, 1500);
    };

    return (
        <>
            <style>{`
                .hero-bg-zoom, .hero-content-zoom, .cta-bg-zoom, .cta-content-zoom {
                    transition: transform 2.5s ease-out;
                }
                .hero-container:hover .hero-bg-zoom,
                .hero-container:hover .hero-content-zoom,
                .cta-container:hover .cta-bg-zoom,
                .cta-container:hover .cta-content-zoom {
                    transform: scale(1.25);
                }
                .form-input {
                    border: 1px solid #891e6d;
                    padding: 0.75rem 1rem;
                    border-radius: 0.5rem;
                    background-color: transparent;
                    width: 100%;
                }
                .form-input::placeholder {
                    color: #891e6d;
                }
            `}</style>
            <div className="font-sans bg-white text-gray-800">
                {/* --- HERO SECTION --- */}
                <section className="relative h-[70vh] text-white overflow-hidden hero-container">
                    <div
                        className="absolute inset-0 bg-cover bg-center hero-bg-zoom"
                        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images.jpg')" }}
                    ></div>
                    <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6 hero-content-zoom">
                        <h1 className="text-4xl md:text-5xl font-bold tracking-wide drop-shadow-sm">Sell Your Property In Dubai, UAE</h1>
                        <p className="mt-4 max-w-3xl text-lg md:text-xl tracking-wider">
                            Tailored Solutions for Your Property Sale: List with Us Today
                        </p>
                    </div>
                </section>
                
                {/* --- SELL WITH CONFIDENCE SECTION --- */}
                 <section className="py-28 bg-white">
                    <div className="container mx-auto px-6">
                        <AnimatedSection>
                            <div className="flex flex-col lg:flex-row items-center justify-center gap-16 max-w-7xl mx-auto">
                                <div className="lg:w-5/12">
                                    <div className="rounded-2xl shadow-2xl overflow-hidden p-2 bg-white">
                                        <div className="relative rounded-xl overflow-hidden group">
                                            <img 
                                                src="/sell2.png" 
                                                alt="Real estate professional" 
                                                className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" 
                                            />
                                            <div className="absolute inset-0 bg-opacity-60 transition-opacity duration-500 ease-in-out group-hover:opacity-0"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="lg:w-6/12 text-left">
                                    <h2 className="text-4xl md:text-5xl font-bold text-[#891e6d] leading-tight mb-6">Sell With Confidence,<br/>Partner With Our<br/>Proven Professionals</h2>
                                    <p className="text-gray-700 text-lg leading-relaxed">
                                        Effortless For You. Our dedicated area specialist, daily buyers registrations, Real Estate portal exposure, professional videography/photography creation, VIP concierge service, SEO/PPC/SMM, automated messaging/emails, and our real estate investors database all ensure your property stands out to interested buyers.
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>
    
                {/* --- TAILORED SOLUTIONS SECTION (Exact Match) --- */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6 text-center">
                        <AnimatedSection>
                            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#891e6d]">Tailored Solutions For Your Property Sale</h2>
                            <div className="max-w-6xl mx-auto border-4 border-[#891e6d] rounded-2xl shadow-lg px-8 md:px-12 py-20 md:py-24 bg-[#FEF8F1]">
                                <div className="grid md:grid-cols-3 gap-y-16 gap-x-8">
                                    {/* Feature Item */}
                                    <div className="flex items-start text-left gap-4">
                                        <ValuationIcon />
                                        <div>
                                            <h3 className="text-3xl font-bold mb-2 text-[#891e6d]">Valuation</h3>
                                            <p className="text-gray-700 leading-relaxed">Our representatives will offer a dependable property assessment, enabling you to initiate the selling process.</p>
                                        </div>
                                    </div>
                                    {/* Feature Item */}
                                    <div className="flex items-start text-left gap-4">
                                        <AdviceIcon />
                                        <div>
                                            <h3 className="text-3xl font-bold mb-2 text-[#891e6d]">Professional Advice</h3>
                                            <p className="text-gray-700 leading-relaxed">At Seven Luxury Real Estate, our agents stay current with the latest market trends. Armed with expert insights, they can protect the interests of their clients.</p>
                                        </div>
                                    </div>
                                    {/* Feature Item */}
                                    <div className="flex items-start text-left gap-4">
                                        <MarketingIcon />
                                        <div>
                                            <h3 className="text-3xl font-bold mb-2 text-[#891e6d]">In The Realm of Marketing</h3>
                                            <p className="text-gray-700 leading-relaxed">Our committed in-house team possesses a deep understanding of the real estate industry. They implement highly effective marketing strategies tailored for optimal lead generation.</p>
                                        </div>
                                    </div>
                                     {/* Feature Item */}
                                    <div className="flex items-start text-left gap-4">
                                        <TeamIcon />
                                        <div>
                                            <h3 className="text-3xl font-bold mb-2 text-[#891e6d]">Committed Team</h3>
                                            <p className="text-gray-700 leading-relaxed">Our team undergoes training to ensure clients receive a memorable experience throughout their entire real estate journey.</p>
                                        </div>
                                    </div>
                                     {/* Feature Item */}
                                    <div className="flex items-start text-left gap-4">
                                        <ServiceIcon />
                                        <div>
                                            <h3 className="text-3xl font-bold mb-2 text-[#891e6d]">Customer Service</h3>
                                            <p className="text-gray-700 leading-relaxed">The culture at Seven Luxury Real Estate places a strong emphasis on delivering top-notch customer service, making it a paramount priority within our firm.</p>
                                        </div>
                                    </div>
                                     {/* Feature Item */}
                                    <div className="flex items-start text-left gap-4">
                                        <SecurityIcon />
                                        <div>
                                            <h3 className="text-3xl font-bold mb-2 text-[#891e6d]">Security</h3>
                                            <p className="text-gray-700 leading-relaxed">Ensuring client confidentiality is our foremost priority. We adhere strictly to the rules and regulations set forth by Dubai's Real Estate Regulatory Agency (RERA).</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>
                
                {/* --- FINAL CTA SECTION (Exact Match with Animation) --- */}
                <section className="relative h-[70vh] text-white overflow-hidden cta-container">
                     <div
                        className="absolute inset-0 bg-cover bg-center cta-bg-zoom"
                        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/sell.jpeg')" }}
                     ></div>
                     <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-6 cta-content-zoom">
                        <h2 className="text-5xl md:text-6xl font-bold leading-tight text-white">Sell Smarter, Not Harder</h2>
                        <p className="mt-6 max-w-3xl text-lg md:text-xl font-light text-white">
                            Unlock the full potential of your property by choosing us as your trusted partner in the selling process. Our dedicated team of real estate experts is committed to maximizing the value of your asset
                        </p>
                        <a
                           href="https://bizvibezproperties.com/contact"
                           target="_blank"
                           rel="noopener noreferrer"
                           className="mt-8 inline-block px-10 py-3 bg-[#891e6d] text-white font-semibold rounded-lg border-2 border-white transition-all"
                        >
                            Get Started
                        </a>
                    </div>
                </section>

                 {/* --- CONTACT US SECTION --- */}
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <AnimatedSection>
                            <div className="max-w-2xl mx-auto text-center">
                                <h2 className="text-3xl md:text-4xl font-bold text-[#891e6d] mb-12">Contact Us</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        className="form-input"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="form-input"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone"
                                        className="form-input"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />
                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        rows={5}
                                        className="form-input"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    />
                                    <button
                                        type="submit"
                                        disabled={loading}
                                        className="w-full bg-[#891e6d] text-[#F5B041] py-4 rounded-full font-semibold text-lg hover:bg-[#F5B041] hover:text-[#891e6d] transition-colors duration-300 disabled:bg-opacity-70 uppercase tracking-wider"
                                    >
                                        {loading ? "SENDING..." : "SUBMIT"}
                                    </button>
                                </form>
                            </div>
                        </AnimatedSection>
                    </div>
                </section>
            </div>
        </>
    );
};

export default SellPage;

