'use client';

import { useEffect, useRef, useState } from 'react';

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

// --- CAREERS PAGE COMPONENT ---
const CareersPage = () => {
    return (
        <div className="font-sans bg-white text-gray-800">
            {/* --- HERO SECTION --- */}
            <section 
                className="relative h-[60vh] bg-cover bg-center text-white" 
                style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/careers.webp')" }}
            >
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <h1 className="text-5xl md:text-7xl font-bold">Careers</h1>
                    <p className="mt-4 text-xl md:text-2xl font-light">Be Empowered: Discover Your Full Potential!</p>
                </div>
            </section>
            
            {/* --- CURRENT OPENINGS SECTION --- */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <AnimatedSection>
                        <h2 className="text-4xl font-bold text-[#891e6d] mb-16">Current Openings</h2>
                        <div className="max-w-4xl mx-auto">
                            {/* Job Opening Card */}
                            <div 
                                className="bg-[#891e6d] text-white rounded-2xl shadow-lg text-left overflow-hidden"
                            >
                                <div className="p-8">
                                    <h3 className="text-3xl font-bold text-white mb-4">Property Consultant</h3>
                                    <p className="text-gray-200 leading-relaxed">
                                        To achieve our ambitious goals and fulfill our company's mission, we seek highly motivated Property Consultants who demonstrate resourcefulness, initiative, and a dedication to exceeding expectations. We require strong communication skills, a commitment to professional excellence, and a positive "can-do" attitude that fosters productive relationships with clients and colleagues.
                                    </p>
                                </div>
                                <div className="border-t border-white/30">
                                    <a href="/careers/property-consultant" className="block px-8 py-4 text-white font-semibold text-lg hover:bg-white/10 transition-colors">
                                        Apply now {'>'}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </AnimatedSection>
                </div>
            </section>
        </div>
    );
};

export default CareersPage;

