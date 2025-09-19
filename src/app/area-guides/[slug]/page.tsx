// src/app/area-guides/[slug]/page.tsx

import { guidesData } from '@/data/guidesData';
import { notFound } from 'next/navigation';
import Link from 'next/link'; // Import the Link component

// This function tells Next.js which slugs to pre-render at build time.
export async function generateStaticParams() {
  return guidesData.map((guide) => ({
    slug: guide.slug,
  }));
}

// Props interface for the component
interface GuidePageProps {
  params: {
    slug: string;
  };
}

export default function GuidePage({ params }: GuidePageProps) {
  const { slug } = params;
  const guide = guidesData.find((g) => g.slug === slug);

  // If no guide is found for the given slug, show a 404 page.
  if (!guide) {
    notFound();
  }

  const headingStyles = {
    color: '#970060' // Keeping the brand's purple for headings
  };

  return (
    <div>
      {/* --- Hero Section --- */}
      <section 
        className="relative h-[80vh] bg-cover bg-center text-white flex items-end"
        style={{ backgroundImage: `url('${guide.imageUrl}')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="container mx-auto px-6 pb-12 relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold">{guide.name}</h1>
        </div>
      </section>

      {/* --- Main Content Section (Styling Updated) --- */}
      <main className="bg-white py-20">
        <div className="container mx-auto px-6 space-y-16">
          
          {/* --- Long Description 1 --- */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8" style={headingStyles}>
              One-Stop Destination for Waterfront Living: {guide.name}
            </h2>
            {/* AMENDMENT: Updated text styling for a more refined look */}
            <div className="text-gray-800 text-lg leading-8 space-y-6">
              {guide.longDescription1.split('\n').filter(p => p.trim() !== '').map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
            </div>
          </div>

          {/* --- Image Gallery --- */}
          {guide.galleryImages && guide.galleryImages.length > 0 && (
            <div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {guide.galleryImages.map((image, index) => (
                        <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                        <img 
                            src={image} 
                            alt={`${guide.name} gallery image ${index + 1}`} 
                            className="w-full h-full object-cover aspect-square transition-transform duration-500 hover:scale-110"
                        />
                        </div>
                    ))}
                </div>
            </div>
          )}

          {/* --- Location Features & Long Description 2 --- */}
          <div className="max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-6" style={headingStyles}>
                {guide.name} Location Features:
              </h3>
              <ul className="list-disc list-inside space-y-3 mb-12 text-lg">
                {guide.locationFeatures.map((feature, index) => (
                    <li key={index} className="text-gray-800">
                      <span style={{ color: '#970060', fontWeight: 'bold' }}>•</span> {feature}
                    </li>
                ))}
              </ul>
            <h3 className="text-3xl font-bold mb-8" style={headingStyles}>
              Cruise Around the {guide.name}
            </h3>
            {/* AMENDMENT: Updated text styling for a more refined look */}
            <div className="text-gray-800 text-lg leading-8 space-y-6">
              {guide.longDescription2.split('\n').filter(p => p.trim() !== '').map((paragraph, index) => (
                <p key={index}>{paragraph.trim()}</p>
              ))}
            </div>
          </div>
          
          {/* "Back to Area Guides" button */}
          <div className="text-center pt-10">
            <Link 
              href="/area-guides"
              className="inline-block bg-[#970060] text-white font-bold py-4 px-10 rounded-lg text-xl transition-all duration-300 hover:bg-[#800050] hover:scale-105 shadow-xl"
            >
              Back to Area Guides
            </Link>
          </div>

        </div>
      </main>
    </div>
  );
}