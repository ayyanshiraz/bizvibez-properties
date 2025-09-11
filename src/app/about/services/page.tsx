'use client';

import React, { useState, useEffect, useRef, FormEvent, ChangeEvent } from 'react';

// This component handles the fade-in and slide-up animation.
const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
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
            {
                threshold: 0.1, // Animate when 10% of the element is visible
            }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const baseClasses = 'transition-all duration-700 ease-out';
    const finalClasses = isVisible
        ? 'opacity-100 transform translate-y-0'
        : 'opacity-0 transform translate-y-8';

    return (
        <div ref={sectionRef} className={`${baseClasses} ${finalClasses}`}>
            {children}
        </div>
    );
};


const App = () => {
    // --- UPDATED: State and handlers for the Netlify contact form ---
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState(''); // Added for user feedback

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    // --- UPDATED: handleSubmit function to call Netlify function ---
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setStatusMessage('');

        // Combine first and last name to match backend expectation
        const { firstName, lastName, ...rest } = formData;
        const fullName = `${firstName} ${lastName}`;

        try {
            const response = await fetch('/.netlify/functions/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    fullName,
                    ...rest,
                    formType: 'Service Inquiry', // Add a unique identifier for this form
                }),
            });

            const result = await response.json();
            setStatusMessage(result.message);

            if (response.ok) {
                // Reset form on success
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    service: '',
                    message: '',
                });
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatusMessage('An error occurred. Please try again.');
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="font-sans antialiased text-gray-800 bg-white">
            {/* --- HERO HEADER SECTION (Unchanged) --- */}
            <div
                className="relative h-[85vh] bg-cover bg-center"
                style={{
                    backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/images.jpg')",
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }}
            >
                <div className="absolute inset-0 flex items-center p-6 md:p-12 lg:p-24">
                    <div className="text-white max-w-4xl">
                        <h2 className="text-sm font-semibold tracking-wide uppercase mb-2">
                            Real Estate Service
                        </h2>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-md">
                            Our expert service offers guidance, listings, and support for a seamless experience
                        </h1>
                        <a href="https://bizvibezproperties.com/contact" target="_blank" rel="noopener noreferrer" className="mt-8 inline-block px-8 py-3 border-2 border-white text-white font-bold tracking-wider hover:bg-white hover:text-gray-900 transition-colors">
                            CONTACT US
                        </a>
                    </div>
                </div>
            </div>

            {/* --- MAIN CONTENT AREA (Unchanged) --- */}
            <main className="container mx-auto px-4 py-16">
                <AnimatedSection>
                    <section className="bg-white rounded-xl shadow-lg p-8 md:p-12 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12 relative overflow-hidden mb-12">
                        <div className="lg:w-1/2 flex justify-center lg:justify-start z-10">
                            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-xl overflow-hidden shadow-2xl">
                                <img src="/image4.jpg" alt="Real estate agent showing a property" className="w-full h-auto object-cover rounded-xl" />
                            </div>
                        </div>
                        <div className="lg:w-1/2 z-10">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#891e6d] leading-tight mb-4">
                                Extraordinary Real Estate Service
                            </h2>
                            <p className="text-gray-600 mb-6 leading-relaxed">
                                Our reputation is built on delivering unparalleled real estate services that consistently surpass client expectations. By fostering strong alliances with the most respected property developers across the UAE, we guarantee a premium experience. Our core mission is to cultivate lasting relationships founded on trust, ensuring every client feels valued and receives the highest standard of care in their real estate journey.
                            </p>
                            <a href="https://bizvibezproperties.com/contact" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 border-2 border-[#891e6d] text-[#891e6d] font-semibold rounded-md hover:bg-[#891e6d] hover:text-white transition-colors">
                                Schedule Your Meeting NOW!
                            </a>
                        </div>
                    </section>
                </AnimatedSection>
                 <AnimatedSection>
                    <section className="bg-white rounded-xl shadow-lg p-8 md:p-12 flex flex-col lg:flex-row-reverse items-center space-y-8 lg:space-y-0 lg:space-x-12 relative overflow-hidden mb-12">
                        <div className="lg:w-1/2 flex justify-center lg:justify-end z-10">
                            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-xl overflow-hidden shadow-2xl">
                                <img src="/image6.jpg" alt="Apartment building" className="w-full h-auto object-cover rounded-xl" />
                            </div>
                        </div>
                        <div className="lg:w-1/2 z-10">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#891e6d] leading-tight mb-4">
                                Buy Property
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                "Your new home address is here: BizVibez expert will guide you to bespoke property investments that perfectly match your needs."
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                "Unlock Your new home address: Schedule a meeting with us. Join our exclusive offers community, and benefit from our top UAE real estate developers' alliance and our reputation."
                            </p>
                            <a href="https://bizvibezproperties.com/contact" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 border-2 border-[#891e6d] text-[#891e6d] font-semibold rounded-md hover:bg-[#891e6d] hover:text-white transition-colors">
                                Schedule Your Meeting NOW!
                            </a>
                        </div>
                    </section>
                </AnimatedSection>
                <AnimatedSection>
                    <section className="bg-white rounded-xl shadow-lg p-8 md:p-12 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12 relative overflow-hidden mb-12">
                        <div className="lg:w-1/2 flex justify-center lg:justify-start z-10">
                            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-xl overflow-hidden shadow-2xl">
                                <img src="/image7.jpg" alt="Handing over keys" className="w-full h-auto object-cover rounded-xl" />
                            </div>
                        </div>
                        <div className="lg:w-1/2 z-10">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#891e6d] leading-tight mb-4">
                                Sell Property
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                "Effortless For You. Our dedicated area specialist, daily buyers registrations, Real Estate portal exposure, professional videography/photography creation, VIP concierge service, SEO/PPC/SMM, automated messaging/emails, and our real estate investors database all ensure your property stands out to interested buyer."
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                "Unlock the True Value of Your Property: Schedule a valuation with us. Join our exclusive client list, and benefit from our marketing exposure."
                            </p>
                            <a href="https://bizvibezproperties.com/contact" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 border-2 border-[#891e6d] text-[#891e6d] font-semibold rounded-md hover:bg-[#891e6d] hover:text-white transition-colors">
                                Schedule Your Meeting NOW!
                            </a>
                        </div>
                    </section>
                </AnimatedSection>
                <AnimatedSection>
                    <section className="bg-white rounded-xl shadow-lg p-8 md:p-12 flex flex-col lg:flex-row-reverse items-center space-y-8 lg:space-y-0 lg:space-x-12 relative overflow-hidden mb-12">
                        <div className="lg:w-1/2 flex justify-center lg:justify-end z-10">
                            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-xl overflow-hidden shadow-2xl">
                                <img src="/image3.jpg" alt="Contract signing" className="w-full h-auto object-cover rounded-xl" />
                            </div>
                        </div>
                        <div className="lg:w-1/2 z-10">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#891e6d] leading-tight mb-4">
                                Leasing Property
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                "Let with BizVibez: Your choice for seamless rentals. Our dedicated area specialist, daily tenant registrations, professional videography/photography creation, VIP concierge. Real Estate portal exposure, SEO/PPC/SMM, automated messaging/emails, and our tenant database all ensure your property stands out to interested tenants."
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                "Unlock the True Value of Your Property: Schedule a valuation with us. Join our exclusive client list, and benefit from our marketing exposure."
                            </p>
                            <a href="https://bizvibezproperties.com/contact" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 border-2 border-[#891e6d] text-[#891e6d] font-semibold rounded-md hover:bg-[#891e6d] hover:text-white transition-colors">
                                Schedule Your Meeting NOW!
                            </a>
                        </div>
                    </section>
                </AnimatedSection>
                <AnimatedSection>
                    <section className="bg-white rounded-xl shadow-lg p-8 md:p-12 flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12 relative overflow-hidden mb-12">
                        <div className="lg:w-1/2 flex justify-center lg:justify-start z-10">
                            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-xl overflow-hidden shadow-2xl">
                                <img src="/image8.jpg" alt="Property management building" className="w-full h-auto object-cover rounded-xl" />
                            </div>
                        </div>
                        <div className="lg:w-1/2 z-10">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#891e6d] leading-tight mb-4">
                                Property Management
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                "Effortless For You. Our dedicated area specialist, daily buyers registrations, Real Estate portal exposure, professional videography/photography creation, VIP concierge service, SEO/PPC/SMM, automated messaging/emails, and our real estate investors database all ensure your property stands out to interested buyer."
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                "Unlock the True Value of Your Property: Schedule a valuation with us. Join our exclusive client list, and benefit from our marketing exposure."
                            </p>
                            <a href="https://bizvibezproperties.com/contact" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 border-2 border-[#891e6d] text-[#891e6d] font-semibold rounded-md hover:bg-[#891e6d] hover:text-white transition-colors">
                                Schedule Your Meeting NOW!
                            </a>
                        </div>
                    </section>
                </AnimatedSection>
                <AnimatedSection>
                    <section className="bg-white rounded-xl shadow-lg p-8 md:p-12 flex flex-col lg:flex-row-reverse items-center space-y-8 lg:space-y-0 lg:space-x-12 relative overflow-hidden mb-12">
                        <div className="lg:w-1/2 flex justify-center lg:justify-end z-10">
                            <div className="relative w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl rounded-xl overflow-hidden shadow-2xl">
                                <img src="/image5.jpg" alt="Concierge services" className="w-full h-auto object-cover rounded-xl" />
                            </div>
                        </div>
                        <div className="lg:w-1/2 z-10">
                            <h2 className="text-4xl md:text-5xl font-bold text-[#891e6d] leading-tight mb-4">
                                Concierge Services
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                At BizVibez, our concierge services are designed to meet your expectations in every aspect of your real estate experience with us.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                We prioritize your comfort by arranging for one of our luxurious vehicles to pick you up from your residence or workplace, ensuring a comfortable trip to your property. Following your coordinated viewing, your assigned chauffeur will efficiently transport you to your next destination, reflecting our dedication to providing the utmost convenience and sophistication in your real estate journey.
                            </p>
                            <a href="https://bizvibezproperties.com/contact" target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 border-2 border-[#891e6d] text-[#891e6d] font-semibold rounded-md hover:bg-[#891e6d] hover:text-white transition-colors">
                                Schedule Your Meeting NOW!
                            </a>
                        </div>
                    </section>
                </AnimatedSection>
            </main>

            {/* --- UPDATED CONTACT FORM SECTION --- */}
            <section id="contact" className="bg-gray-100 py-16 px-6">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center text-[#891e6d]">Contact Us</h2>
                    <form onSubmit={handleSubmit} className="mt-10 space-y-6 max-w-2xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-6">
                            <input type="text" name="firstName" placeholder="First Name" className="w-full border border-gray-300 px-4 py-3 rounded-md shadow-sm focus:ring-[#891e6d] focus:border-[#891e6d]" value={formData.firstName} onChange={handleChange} required />
                            <input type="text" name="lastName" placeholder="Last Name" className="w-full border border-gray-300 px-4 py-3 rounded-md shadow-sm focus:ring-[#891e6d] focus:border-[#891e6d]" value={formData.lastName} onChange={handleChange} required />
                        </div>
                        <div className="grid md:grid-cols-2 gap-6">
                            <input type="email" name="email" placeholder="Email" className="w-full border border-gray-300 px-4 py-3 rounded-md shadow-sm focus:ring-[#891e6d] focus:border-[#891e6d]" value={formData.email} onChange={handleChange} required />
                            <input type="tel" name="phone" placeholder="Phone" className="w-full border border-gray-300 px-4 py-3 rounded-md shadow-sm focus:ring-[#891e6d] focus:border-[#891e6d]" value={formData.phone} onChange={handleChange} required />
                        </div>
                        <select name="service" className="w-full border border-gray-300 px-4 py-3 rounded-md shadow-sm bg-white focus:ring-[#891e6d] focus:border-[#891e6d]" value={formData.service} onChange={handleChange} required >
                            <option value="">Select a service</option>
                            <option value="Buy Property">Buy Property</option>
                            <option value="Sell Property">Sell Property</option>
                            <option value="Letting Property">Letting Property</option>
                            <option value="Property Management">Property Management</option>
                            <option value="Concierge Services">Concierge Services</option>
                            <option value="General Inquiry">General Inquiry</option>
                        </select>
                        <textarea name="message" placeholder="Your Message" rows={4} className="w-full border border-gray-300 px-4 py-3 rounded-md shadow-sm focus:ring-[#891e6d] focus:border-[#891e6d]" value={formData.message} onChange={handleChange} required />
                        
                        {/* Status Message Display */}
                        {statusMessage && (
                            <div className={`p-3 text-center rounded-md text-sm ${statusMessage.toLowerCase().includes('error') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                                {statusMessage}
                            </div>
                        )}

                        <button type="submit" disabled={loading} className="w-full bg-[#891e6d] text-white py-3 rounded-md font-semibold hover:bg-opacity-90 disabled:bg-opacity-70 transition" >
                            {loading ? "Sending..." : "Submit"}
                        </button>
                    </form>
                </div>
            </section>

            {/* --- FINAL CTA (Unchanged) --- */}
            <section className="bg-gray-50 py-16 text-center">
                 <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-[#891e6d]">Ready to Find Your Perfect Property?</h2>
                    <p className="mt-4 text-gray-600">
                        Partner with us for expert real estate services that drive results.
                    </p>
                    <a href="https://bizvibezproperties.com/contact">
                        <button className="mt-6 bg-[#891e6d] px-8 py-3 rounded-md text-white font-semibold hover:scale-105 transition">
                            Contact Our Team
                        </button>
                    </a>
                </div>
            </section>
        </div>
    );
};

export default App;
