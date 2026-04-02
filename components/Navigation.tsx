"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "App", href: "/app" },
    { name: "Protocols", href: "/protocols" },
    { name: "Agent", href: "/agent" },
    { name: "History", href: "/history" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] h-[var(--header-height)] flex items-center">
      <div className="content-wrapper flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold tracking-tight">
          arbi<em>.resolve</em>
        </Link>

        {/* Hamburger */}
        <button 
          onClick={toggleMenu}
          className="relative z-[110] flex flex-col gap-1.5 cursor-pointer p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`h-0.5 w-4 bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`h-0.5 w-6 bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Fullscreen Overlay */}
        <div className={`fixed inset-0 bg-[#0a0a0a] z-[105] flex items-center justify-center transition-transform duration-500 ease-in-out ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <ul className="flex flex-col items-center gap-8 list-none">
            {menuItems.map((item, index) => (
              <li key={item.name} className={`fade-in ${isOpen ? 'active' : ''}`} style={{ transitionDelay: `${index * 100}ms` }}>
                <Link 
                  href={item.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-4xl md:text-6xl font-serif hover:text-[var(--primary-accent)] transition-colors"
                >
                  {item.name === "Home" ? "Home" : <>{item.name}<em>.</em></>}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
