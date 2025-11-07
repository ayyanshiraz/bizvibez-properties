// src/app/area-guides/[slug]/page.tsx

import { guidesData } from '@/data/guidesData';
import { notFound } from 'next/navigation';
import GuidePageClient from './GuidePageClient'; // Import our new client component

// This function can stay here because this is a Server Component
export async function generateStaticParams() {
  return guidesData.map((guide) => ({
    slug: guide.slug,
  }));
}

interface GuidePageProps {
  params: {
    slug: string;
  };
}

// This is the main Server Component for the page
export default function GuidePage({ params }: GuidePageProps) {
  const { slug } = params;
  const guide = guidesData.find((g) => g.slug === slug);

  // If no guide is found, show a 404 page.
  if (!guide) {
    notFound();
  }

  // Render the Client Component and pass the fetched guide data to it as a prop
  return <GuidePageClient guide={guide} />;
}