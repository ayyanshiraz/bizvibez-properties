import { notFound } from 'next/navigation';
import { LANDFORSALE, Plot } from '@/data/mockData';
import PlotDetailClient from '@/components/PlotDetailClient';

// This function tells Next.js which pages to pre-build based on your data.
// It is required for static export and MUST be in this file.
export async function generateStaticParams() {
  return LANDFORSALE.map((plot) => ({
    id: plot.id.toString(),
  }));
}

// This is a Server Component. 
// It fetches data based on the URL and then passes it to the interactive client component.
export default function LandDetailPage({ params }: { params: { id: string } }) {
  // Find the specific plot using the ID from the URL
  const plot = LANDFORSALE.find((p: Plot) => p.id === parseInt(params.id));

  // If no plot is found, call the notFound() function to render the 404 page.
  if (!plot) {
    notFound();
  }

  // Render the client component and pass the found plot data to it as a prop
  return <PlotDetailClient plot={plot} />;
}

