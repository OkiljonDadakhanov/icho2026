"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "Organization",
      href: "/icho-2026",
      dropdown: [
        {
          name: "Supervisory Committee",
          href: "/icho-2026#supervisory-committee",
        },
        {
          name: "Organizing Committee",
          href: "/icho-2026#organizing-committee",
        },
        {
          name: "Steering Committee",
          href: "/icho-2026#international-steering-committee",
        },
        // {
        //   name: "Scientific Committee",
        //   href: "/icho-2026#scientific-committee",
        // },
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
        { name: "Catalyzers", href: "/catalyzer" },
        { name: "Gallery - photos & videos", href: "/gallery" },
        { name: "Report book", href: "/report" },
      ],
    },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex justify-between items-center min-h-16 lg:min-h-20">
          {/* Brand (slightly shifted left) */}
          <div className="flex items-center shrink-0 -ml-1 sm:-ml-2 lg:-ml-3">
            <Link href="/" className="block" aria-label="IChO 2026 Home">
              <img
                src="/logos/nav_logo.png"
                alt="IChO 2026 Logo"
                className="block h-8 sm:h-12 lg:h-14 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2 whitespace-nowrap">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center px-3 py-2 text-[15px] font-medium text-gray-700 hover:text-green-600 transition-colors"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
                {item.dropdown && (
                  <div className="absolute left-0 mt-2 w-56 bg-white rounded-xl shadow-lg ring-1 ring-black/5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t rounded-b-xl">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-green-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <div className="pl-4 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-3 py-2 text-sm text-gray-600 hover:text-green-600"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
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
