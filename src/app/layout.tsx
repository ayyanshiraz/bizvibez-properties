import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// Import the new conditional component instead of the original one
import ConditionalSlideshow from "../components/ConditionalSlideshow";

export const metadata: Metadata = {
  title: "Bizvibez Properties",
  description: "Luxury Real Estate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          
          {/* --- THIS IS THE AMENDED PART --- */}
          {/* Replaced ClientSlideshow with ConditionalSlideshow */}
          <div className="my-8">
            <ConditionalSlideshow />
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}