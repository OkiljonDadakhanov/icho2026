"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Organization",
      href: "/icho-2026",
      dropdown: [
        { name: "Supervisory Committee", href: "/icho-2026#supervisory-committee" },
        { name: "Organizing Committee", href: "/icho-2026#organizing-committee" },
        { name: "Steering Committee", href: "/icho-2026#international-steering-committee" },
      ],
    },
    { name: "Programme", href: "/program" },
    { name: "Partnership", href: "/partnership" },
    { name: "Uzbekistan", href: "/uzbekistan" },
    {
      name: "About IChO",
      href: "/about",
      dropdown: [
        { name: "History", href: "/history" },
        { name: "Regulations", href: "/about/regulations" },
        { name: "Past IChOs", href: "/previous-icho" },
        { name: "Future IChOs", href: "/future-icho" },
        { name: "IChO key dates", href: "/key-dates" },
      ],
    },
    {
      name: "Competitions",
      href: "/competetions",
      dropdown: [
        { name: "Competitions", href: "/competetions" },
        { name: "Participants", href: "/participants" },
        { name: "Exam information", href: "/exam-info" },
        { name: "Problems", href: "/problems" },
        { name: "Results", href: "/results" },
      ],
    },
    {
      name: "Media & Press",
      href: "/press",
      dropdown: [
        { name: "Press-release", href: "/press" },
        { name: "News", href: "/press/news" },
        { name: "Catalyzers", href: "/catalyzer" },
        { name: "Gallery - photos & videos", href: "/gallery" },
        { name: "Report book", href: "/report" },
      ],
    },
    { name: "Contact Us", href: "/contact" },
  ];

  const toggleMobileDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <nav className="sticky top-0 z-[50] bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header */}
        <div className="flex justify-between items-center h-20 lg:h-24">
          {/* Logo */}
          <a href="/" className="flex items-center" aria-label="IChO 2026 Home">
            <img
              src="/logos/nav_logo.png"
              alt="IChO 2026 Logo"
              className="h-8 lg:h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className={`flex items-center py-2 text-sm xl:text-[15px] font-medium text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap ${
                    item.dropdown ? "gap-1" : ""
                  }`}
                >
                  {item.name}
                  {item.dropdown && (
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                  )}
                </a>

                {item.dropdown && (
                  <div className="absolute left-0 top-full w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-[9999]">
                    <div className="h-2" />
                    <div className="bg-white rounded-lg shadow-xl border border-gray-100">
                      <div className="py-2">
                        {item.dropdown.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 transition-colors"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden border-t border-gray-200">
            <div className="py-2 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.name}>
                  <div className="flex items-center justify-between">
                    <a
                      href={item.href}
                      className="flex-1 px-4 py-2.5 text-base font-medium text-gray-800 hover:text-green-600 hover:bg-gray-50 rounded-lg"
                      onClick={() => !item.dropdown && setIsOpen(false)}
                    >
                      {item.name}
                    </a>
                    {item.dropdown && (
                      <button
                        onClick={() => toggleMobileDropdown(item.name)}
                        className="px-4 py-2.5 text-gray-600 hover:text-green-600"
                      >
                        <ChevronDown
                          className={`h-5 w-5 transition-transform ${
                            openDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    )}
                  </div>

                  {item.dropdown && openDropdown === item.name && (
                    <div className="pl-4 pr-2 py-1 space-y-1 bg-gray-50 rounded-lg mx-2 mt-1">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-green-600 hover:bg-white rounded-lg"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
