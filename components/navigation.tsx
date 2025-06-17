"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "IChO 2024",
      href: "/icho-2024",
      dropdown: [
        { name: "Event Details", href: "/icho-2024/details" },
        { name: "Archive", href: "/icho-2024/archive" },
      ],
    },
    { name: "Partnership", href: "/partnership" },
    { name: "Uzbekistan", href: "/uzbekistan" },
    {
      name: "About IChO",
      href: "/about",
      dropdown: [
        { name: "History", href: "/about/history" },
        { name: "Mission", href: "/about/mission" },
        { name: "Organization", href: "/about/organization" },
      ],
    },
    {
      name: "Results & Problems",
      href: "/results",
      dropdown: [
        { name: "Past Exams", href: "/results/exams" },
        { name: "Medalists", href: "/results/medalists" },
        { name: "Statistics", href: "/results/statistics" },
      ],
    },
    {
      name: "Hosting Info",
      href: "/hosting",
      dropdown: [
        { name: "Tashkent Overview", href: "/hosting/tashkent" },
        { name: "Venue & Labs", href: "/hosting/venue" },
        { name: "Accommodation", href: "/hosting/accommodation" },
        { name: "Visa & Travel", href: "/hosting/travel" },
      ],
    },
    {
      name: "News & Media",
      href: "/news",
      dropdown: [
        { name: "Press Releases", href: "/news/press" },
        { name: "Gallery", href: "/news/gallery" },
        { name: "Videos", href: "/news/videos" },
      ],
    },
    { name: "Contact Us", href: "/contact" },
  ]

  return (
    <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <img
                src="/images/images.jpg"
                alt="IChO 2026 Logo Icon"
                className="w-10 h-10 rounded-full bg-white p-0.5 shadow-sm"
              />
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-gray-900">IChO 2026</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
                {item.dropdown && (
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-600"
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
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-green-600"
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
  )
}
