import type { Metadata } from "next";
import "./globals.css";
// Using relative paths to fix build errors
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ClientSlideshow from "../components/ClientSlideshow";

export const metadata: Metadata = {
  title: "BizVibez Properties",
  description: "Luxury Real Estate",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Removed custom font to resolve build issues */}
      <body>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            {children}
          </main>
          <div className="my-8">
            <ClientSlideshow />
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}

