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


// --- JOB APPLICATION PAGE COMPONENT ---
const PropertyConsultantPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        linkedin: '',
        resume: null as File | null,
        coverLetter: '',
    });
    const [loading, setLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };
    
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFormData(prevState => ({ ...prevState, resume: e.target.files![0] }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setStatusMessage('');

        if (!formData.resume) {
            setStatusMessage('Error: Please upload a resume.');
            setLoading(false);
            return;
        }

        const data = new FormData();
        data.append('name', formData.name);
        data.append('email', formData.email);
        data.append('phone', formData.phone);
        data.append('linkedin', formData.linkedin);
        data.append('coverLetter', formData.coverLetter);
        data.append('resume', formData.resume);

        try {
            const response = await fetch('/api/apply', {
                method: 'POST',
                body: data,
            });

            if (!response.ok) {
                const result = await response.json();
                throw new Error(result.error || 'Network response was not ok');
            }

            setStatusMessage('Your application has been submitted successfully!');
            setFormData({
                name: '', email: '', phone: '', linkedin: '',
                resume: null, coverLetter: ''
            });
            (e.target as HTMLFormElement).reset();

        } catch (error: any) {
            setStatusMessage(`Error: ${error.message}`);
        } finally {
            setLoading(false);
        }
    };

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
            
            <main className="container mx-auto px-6 py-20">
                <div className="max-w-4xl mx-auto">
                    {/* --- JOB DESCRIPTION SECTION --- */}
                    <AnimatedSection>
                        <div className="text-center">
                            <h2 className="text-4xl font-bold text-[#891e6d] mb-12">Property Consultant - Apply Now</h2>
                        </div>
                        <div className="bg-[#891e6d] text-white rounded-lg shadow-lg p-8 md:p-10 space-y-6 leading-relaxed">
                            <h3 className="text-2xl font-bold border-b border-white/50 pb-3">Job Description</h3>
                            <p><strong>Experienced Property Consultant – Join our Dynamic Real Estate Team in the UAE</strong></p>
                            <p>We seek talented and motivated individuals to join our growing team of Property Consultants and contribute to our ambitious vision. This is an opportunity for ambitious professionals to thrive in a fast-paced environment, supported by industry veterans and comprehensive training programs.</p>
                            <div>
                                <h4 className="text-xl font-bold mb-3">What you will do:</h4>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Build and nurture relationships with clients, understanding their needs and exceeding expectations.</li>
                                    <li>Expertly guide clients through the property buying, selling, or leasing process.</li>
                                    <li>Negotiate win-win deals on behalf of clients and the company.</li>
                                    <li>Actively prospect and generate new leads, contributing to team and company growth.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-3">What sets us apart:</h4>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Competitive compensation structure with lucrative commission opportunities.</li>
                                    <li>Generous quarterly and annual bonuses, rewarding your top performance and loyalty.</li>
                                    <li>Ongoing mentorship and guidance from experienced Sales Managers.</li>
                                    <li>A proven, award-winning brand and effective marketing programs.</li>
                                    <li>Comprehensive training and development programs, both internal and external.</li>
                                    <li>Prompt monthly commission payments and professional support systems.</li>
                                    <li>RERA registration, CRM access, UAE residence visa, and medical insurance.</li>
                                    <li>A vibrant and supportive work environment that fosters collaboration and career growth.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-3">Qualifications:</h4>
                                <ul className="list-disc list-inside space-y-2">
                                    <li>Bachelor’s degree or equivalent qualification.</li>
                                    <li>At least 6 to 9 months of demonstrably successful real estate experience in the UAE.</li>
                                    <li>Strong communication skills in written and verbal English; fluency in a second language is a plus.</li>
                                    <li>Proficiency in MS Office Suite (Excel, Word, PowerPoint, Outlook).</li>
                                    <li>Commitment to ethical standards and exceptional customer service.</li>
                                    <li>Proven ability to build and maintain strong professional relationships.</li>
                                    <li>A mature and confident demeanor that inspires trust and respect.</li>
                                    <li>Innovative mindset with a proactive approach to problem-solving.</li>
                                    <li>Results-oriented with a consistent track record of achieving goals.</li>
                                    <li>Punctual, positive, and possess a strong “can-do” attitude.</li>
                                </ul>
                            </div>
                            <p className="font-bold pt-4">Ready to join a winning team? We are!</p>
                            <p>Please submit your resume and cover letter, expressing your passion for real estate and why you are a perfect fit for our team.</p>
                        </div>
                    </AnimatedSection>
                    
                    {/* --- APPLICATION FORM --- */}
                    <AnimatedSection>
                       <div className="mt-20">
                         <h2 className="text-3xl font-bold text-center text-[#891e6d] mb-10">Submit Your Application</h2>
                         <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-lg shadow-lg">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input type="text" name="name" id="name" required className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#891e6d] focus:border-[#891e6d]" value={formData.name} onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input type="email" name="email" id="email" required className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#891e6d] focus:border-[#891e6d]" value={formData.email} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone No.</label>
                                    <input type="tel" name="phone" id="phone" required className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#891e6d] focus:border-[#891e6d]" value={formData.phone} onChange={handleChange} />
                                </div>
                                <div>
                                    <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-1">LinkedIn Profile (URL)</label>
                                    <input type="url" name="linkedin" id="linkedin" className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#891e6d] focus:border-[#891e6d]" value={formData.linkedin} onChange={handleChange} />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Upload Resume</label>
                                <input type="file" name="resume" required className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#891e6d]/10 file:text-[#891e6d] hover:file:bg-[#891e6d]/20" onChange={handleFileChange}/>
                                <input type="hidden" name="jobTitle" value="Property Consultant" />
                            </div>
                            <div>
                                <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
                                <textarea name="coverLetter" id="coverLetter" rows={6} required className="w-full border-gray-300 rounded-md shadow-sm focus:ring-[#891e6d] focus:border-[#891e6d]" value={formData.coverLetter} onChange={handleChange}></textarea>
                            </div>

                           {statusMessage && (
                             <div className={`p-3 rounded-md text-center text-sm ${statusMessage.startsWith('Error') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                               {statusMessage}
                             </div>
                           )}

                           <div className="text-right">
                             <button
                               type="submit"
                               disabled={loading}
                               className="inline-flex justify-center py-3 px-8 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-[#891e6d] hover:bg-opacity-90 disabled:bg-opacity-70"
                             >
                               {loading ? "Submitting..." : "Submit"}
                             </button>
                           </div>
                         </form>
                       </div>
                    </AnimatedSection>
                </div>
            </main>
        </div>
    );
};

export default PropertyConsultantPage;