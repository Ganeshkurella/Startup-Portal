"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Navbar() {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["guidance", "funding", "incubators", "workspaces", "startups", "living", "community"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveHash(`#${section}`);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-extrabold text-xl tracking-tight text-gray-900 flex items-center gap-2">
          <span className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-teal-400 block shadow-sm"></span>
          HYD:2026
        </div>
        
        <div className="hidden md:flex gap-6 text-sm font-semibold text-gray-500 tracking-wide">
          {[
            { id: "#guidance", label: "Guidance" },
            { id: "#funding", label: "Funding" },
            { id: "#workspaces", label: "Workspaces" },
            { id: "#startups", label: "Ecosystem" },
            { id: "#living", label: "Living" },
            { id: "#community", label: "Community" }
          ].map((item) => (
            <Link 
              key={item.id} 
              href={item.id} 
              className={`transition-colors py-1 relative ${activeHash === item.id ? 'text-indigo-600' : 'hover:text-gray-900'}`}
            >
              {item.label}
              {activeHash === item.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 rounded-full" />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
