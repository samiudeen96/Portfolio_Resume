import type { Metadata } from "next";
import { Poppins  } from "next/font/google";
import "./globals.css";
import Navbar from "./components/common/Navbar";

const poppins = Poppins({
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
      <body className={`${poppins.className} antialiased leading-6 overflow-x-hidden`}>
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
