// src/app/land-for-sale/[id]/page.tsx

import { notFound } from 'next/navigation';
import { LANDFORSALE, Plot } from '@/data/mockData';
import PlotDetailClient from '@/components/PlotDetailClient';
import type { Metadata } from 'next';

type Props = {
  params: { id: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const plot = LANDFORSALE.find((p: Plot) => p.id === parseInt(params.id));

  if (!plot) {
    return {
      title: 'Plot Not Found',
      description: 'The requested property could not be found.',
    };
  }

  return {
    title: plot.title,
    description: plot.mainDescription,
  };
}

export async function generateStaticParams() {
  return LANDFORSALE.map((plot) => ({
    id: plot.id.toString(),
  }));
}

// THIS IS THE ONLY LINE THAT HAS CHANGED
export default function LandDetailPage({ params }: Props) {
  const plot = LANDFORSALE.find((p: Plot) => p.id === parseInt(params.id));

  if (!plot) {
    notFound();
  }

  return <PlotDetailClient plot={plot} />;
}