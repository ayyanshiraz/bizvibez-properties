'use client'; 

import React, { useState } from 'react';

// --- SVG Icon components (Full Code Restored) ---
const MapPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const Phone = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const Mail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const WhatsApp = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-white">
        <path d="M16.75 13.96c.25.13.41.33.47.54.1.34.04.72-.18 1.02l-.1.12c-.22.28-.5.48-.82.64s-.68.25-1.04.17c-1.12-.25-2.19-.79-3.13-1.52s-1.68-1.58-2.22-2.62c-.15-.29-.24-.61-.26-.93s.03-.64.18-.93c.15-.29.35-.53.6-.71l.03-.02c.26-.18.56-.29.88-.3s.63.07.9.26l.4.35c.29.25.54.54.73.85s.32.65.37.99c.05.34.01.69-.12.99l-.38.88c-.08.18-.08.39.01.57s.25.33.44.4c.19.07.4.06.58-.02l.7-.3c.25-.1.53-.12.78-.07s.48.17.65.33zM12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"/>
    </svg>
);


export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send message.');
      }
      
      setStatusMessage('Message sent successfully!');
      setFormData({ fullName: '', email: '', subject: '', message: '' });

    } catch (error: any) {
      setStatusMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* --- Hero Section --- */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-white"
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/contact.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="text-center z-10 px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">
            We're Here To Help
          </h1>
          <p className="text-lg md:text-xl font-light">
            For inquiries or assistance, contact us anytime. Your satisfaction is our priority, and we're here to help with any questions or needs.
          </p>
        </div>
      </section>

      {/* --- Contact Form & Details Section --- */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#891e6d' }}>
              Contact Us
            </h2>
            <p className="text-gray-600 text-lg">We offer unique properties suitable for any kind of comfort.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            
            {/* Left Column: Contact Details & Map */}
            <div className="space-y-8">
               <div className="grid grid-cols-2 gap-4 text-center">
                 <div className="p-4 rounded-lg flex flex-col" style={{backgroundColor: '#891e6d'}}>
                     <div className="flex justify-center mb-2"><MapPin /></div>
                     <p className="text-white font-semibold">Our Address</p>
                     <p className="text-gray-200 text-sm break-words">602 Bays Water Tower, Business Bay Dubai, United Arab Emirates</p>
                 </div>
                 <div className="p-4 rounded-lg flex flex-col" style={{backgroundColor: '#891e6d'}}>
                     <div className="flex justify-center mb-2"><Phone /></div>
                     <p className="text-white font-semibold">Call Us</p>
                     <p className="text-gray-200 text-sm break-words">+971 54 201 9999</p>
                 </div>
                 <div className="p-4 rounded-lg flex flex-col" style={{backgroundColor: '#891e6d'}}>
                     <div className="flex justify-center mb-2"><Mail /></div>
                     <p className="text-white font-semibold">Email Us</p>
                     <p className="text-gray-200 text-sm break-words">info@bizvibezproperties.com</p>
                 </div>
                 <div className="p-4 rounded-lg flex flex-col" style={{backgroundColor: '#891e6d'}}>
                     <div className="flex justify-center mb-2"><WhatsApp /></div>
                     <p className="text-white font-semibold">WhatsApp</p>
                     <a href="https://wa.me/97144569917" target="_blank" rel="noopener noreferrer" className="text-gray-200 text-sm break-words hover:text-white transition-colors">
                       +971 4 456 9917
                     </a>
                 </div>
               </div>
              
               <div>
                 <div className="rounded-lg overflow-hidden shadow-lg h-80">
                   <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.5649920970577!2d55.26127867490336!3d25.184162232229475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f435782172a35%3A0xf6b77d7ae225eee7!2sBizVibeZ%20Consultants!5e0!3m2!1sen!2s!4v1719232909267!5m2!1sen!2s"
                     width="100%"
                     height="100%"
                     style={{ border: 0 }}
                     allowFullScreen={false}
                     loading="lazy"
                     referrerPolicy="no-referrer-when-downgrade"
                   ></iframe>
                 </div>
               </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" name="fullName" id="fullName" required value={formData.fullName} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#891e6d] focus:border-[#891e6d]" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input type="email" name="email" id="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#891e6d] focus:border-[#891e6d]" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input type="text" name="subject" id="subject" required value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#891e6d] focus:border-[#891e6d]" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea name="message" id="message" rows={5} required value={formData.message} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#891e6d] focus:border-[#891e6d]"></textarea>
                </div>
                
                {statusMessage && (
                  <div className={`p-3 text-center rounded-md text-sm ${statusMessage.startsWith('Error') ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'}`}>
                    {statusMessage}
                  </div>
                )}
                
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full text-white px-6 py-3 font-semibold rounded-md transition-all duration-300 hover:opacity-90 hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{ backgroundColor: '#891e6d' }}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}