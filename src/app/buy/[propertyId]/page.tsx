import Link from 'next/link';
import { forSaleProperties } from '../buy-data';
import PropertyDetailClientView from './PropertyDetailClientView';

// This function tells Next.js which pages to build.
export async function generateStaticParams() {
  return forSaleProperties.map((property) => ({
    propertyId: property.id,
  }));
}

// This is the main Server Component for the page.
const PropertyDetailPage = ({ params }: { params: { propertyId: string } }) => {
    
    // Find the correct property data on the server.
    const propertyData = forSaleProperties.find(p => p.id === params.propertyId);

    if (!propertyData) {
        return (
            <div className="text-center py-20">
                <h1 className="text-2xl font-bold">Property not found</h1>
                <Link href="/buy" className="text-purple-600 hover:underline mt-4 inline-block">
                    Back to listings
                </Link>
            </div>
        );
    }
    
    // Render the interactive client view and pass the data to it.
    return <PropertyDetailClientView propertyData={propertyData} />;
};

export default PropertyDetailPage;