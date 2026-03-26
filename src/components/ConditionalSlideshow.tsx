"use client";

import { usePathname } from 'next/navigation';
import ClientSlideshow from './ClientSlideshow';

/**
 * This component acts as a wrapper. It renders the ClientSlideshow
 * on every page EXCEPT for the homepage.
 */
export default function ConditionalSlideshow() {
  const pathname = usePathname();

  // If the current path is the homepage, render nothing.
  if (pathname === '/') {
    return null;
  }

  // Otherwise, for any other page, render the slideshow.
  return <ClientSlideshow />;
}