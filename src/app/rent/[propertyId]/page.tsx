import { forRentProperties } from '@/app/rent/rent-data';
import PropertyDetailClientView from './PropertyDetailClientView';
import { notFound } from 'next/navigation';

// This function tells Next.js which property pages to build in advance
export async function generateStaticParams() {
  return forRentProperties.map((property) => ({
    propertyId: property.id,
  }));
}

// The main page component for a specific property
const PropertyDetailPage = ({ params }: { params: { propertyId: string } }) => {
    // Find the specific property from your data file based on the URL's id
    const propertyData = forRentProperties.find(p => p.id === params.propertyId);

    // If no property is found for the given id, show a 404 page
    if (!propertyData) {
        notFound();
    }
    
    // Render the interactive client view and pass the correct data to it.
    return <PropertyDetailClientView propertyData={propertyData} />;
};

export default PropertyDetailPage;
