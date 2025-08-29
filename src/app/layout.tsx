import type { Metadata } from "next";
import { Inter } from "next/font/google"; // Using the standard Next.js font
import "./globals.css";
import Navbar from "@/components/Navbar";

// Initialize the standard font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Professional Website",
  description: "Built from scratch with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply the standard font's className to the body */}
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}