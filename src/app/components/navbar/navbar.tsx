/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import { Heart, Menu, Search, ShoppingCart, User, X } from 'lucide-react'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  // Handle screen resize to check for mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <nav className="bg-[#FBEBB5] px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-10">
          <NavLinks />
        </div>

        {/* Mobile Hamburger and Icons */}
        <div className="flex items-center space-x-4">
          <NavIcons />
          {/* Hamburger Menu for Mobile */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && isOpen && (
        <div className="pt-4 space-y-2 text-center">
          <NavLinks mobile />
        </div>
      )}
    </nav>
  )
}

function NavLinks({ mobile }: { mobile?: boolean }) {
  const linkClass = mobile ? "block py-2 text-sm" : "text-sm font-medium text-center"
  return (
    <>
      <Link href="/" className={linkClass}>Home</Link>
      <Link href="/shop" className={linkClass}>Shop</Link>
      <Link href="/about" className={linkClass}>About</Link>
      <Link href="/contact" className={linkClass}>Contact</Link>
    </>
  )
}

function NavIcons() {
  return (
    <>
      <button className="p-2">
        <User className="h-5 w-5" />
      </button>
      <button className="p-2">
        <Search className="h-5 w-5" />
      </button>
      <button className="p-2">
        <Heart className="h-5 w-5" />
      </button>
      <button className="p-2">
        <ShoppingCart className="h-5 w-5" />
      </button>
    </>
  )
}