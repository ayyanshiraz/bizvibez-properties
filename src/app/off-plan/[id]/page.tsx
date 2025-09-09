import { notFound } from 'next/navigation';
import { properties } from '../data'; // Import from the centralized data file
import PropertyDetailsClient from './PropertyDetailsClient'; // Use the more advanced client component

// This function tells Next.js which pages to build at build time
export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id.toString(),
  }));
}

// --- Main Page Component (Server Component) ---
const PropertyDetailsPage = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const property = properties.find(p => p.id.toString() === id);

  // If no property is found for the given ID, show a 404 page
  if (!property) {
    notFound();
  }

  // We pass the found property data to the client component
  return <PropertyDetailsClient property={property} />;
};

export default PropertyDetailsPage;