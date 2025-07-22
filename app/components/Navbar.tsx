"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

const menu = [
  { label: "Home", path: "#home" },
  { label: "About", path: "#about" },
  { label: "Resume", path: "#resume" },
  { label: "Portfolio", path: "#portfolio" },
  { label: "Contact", path: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  // Handle scroll and active link
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;

      for (let i = 0; i < menu.length; i++) {
        const section = document.querySelector(menu[i].path);
        if (section) {
          const offsetTop = (section as HTMLElement).offsetTop;
          const offsetHeight = (section as HTMLElement).offsetHeight;
          if (
            scrollPos >= offsetTop - 80 &&
            scrollPos < offsetTop + offsetHeight - 80
          ) {
            setActiveSection(menu[i].path);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial run
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="shadow fixed top-0 left-0 w-full z-50 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-4 relative">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex gap-2 items-center">
            <Image src="/logo.svg" alt="logo" width={40} height={40} />
            <p className="font-semibold text-2xl">Samiudeen</p>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 items-center">
            {menu.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.path}
                  className={` border-b-2 pb-1 transition ${
                    activeSection === item.path
                      ? "text-[#915eff] border-[#915eff]"
                      : "border-transparent hover:border-[#915eff] hover:text-[#915eff] text-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <div className="md:hidden text-3xl cursor-pointer">
            {isOpen ? (
              <IoClose onClick={() => setIsOpen(false)} />
            ) : (
              <HiOutlineMenuAlt2 onClick={() => setIsOpen(true)} />
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 bg-white w-full h-[calc(100vh-68px)] shadow-md md:hidden transition-all duration-300">
            <ul className="flex flex-col py-4 px-6">
              {menu.map((item, index) => (
                <li
                  key={index}
                  className={`text-lg py-2 border-b border-gray-300 ${
                    activeSection === item.path
                      ? "text-[#915eff]"
                      : "text-gray-800"
                  }`}
                >
                  <Link
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block w-full ${
                      activeSection === item.path
                        ? "text-[#915eff]"
                        : "text-gray-800"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
