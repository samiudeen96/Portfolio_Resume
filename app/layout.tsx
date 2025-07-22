import type { Metadata } from "next";
import { Outfit, Ovo } from "next/font/google";
import { Poppins  } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// export const outfit = Outfit({
//   subsets: ["latin"],
//   weight: ["400", "500", "600", "700"],
//   variable: "--font-outfit",
// });

// export const ovo = Ovo({
//   subsets: ["latin"],
//   weight: ["400"],
//   variable: "--font-ovo",
// });

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // add the font weights you need
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Created by samiudeen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} antialiased leading-8 overflow-x-hidden`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
