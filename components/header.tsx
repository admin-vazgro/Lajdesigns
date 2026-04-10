'use client'

import { useState } from 'react'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <a href="#" className="flex items-center gap-3">
            <img src="/laj-logo.png" alt="LAJ Designs" className="h-12 w-auto" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-10">
            <a href="#work" className="text-sm uppercase tracking-wider hover:text-muted-foreground transition-colors">
              Our Work
            </a>
            <a href="#services" className="text-sm uppercase tracking-wider hover:text-muted-foreground transition-colors">
              Services
            </a>
            <a href="#about" className="text-sm uppercase tracking-wider hover:text-muted-foreground transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm uppercase tracking-wider border border-foreground px-5 py-2 hover:bg-foreground hover:text-background transition-colors">
              Contact
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-px bg-foreground transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-px bg-foreground transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-px bg-foreground transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-border bg-background px-6 py-8 flex flex-col gap-6">
          <a href="#work" onClick={() => setMenuOpen(false)} className="text-sm uppercase tracking-wider">Our Work</a>
          <a href="#services" onClick={() => setMenuOpen(false)} className="text-sm uppercase tracking-wider">Services</a>
          <a href="#about" onClick={() => setMenuOpen(false)} className="text-sm uppercase tracking-wider">About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-sm uppercase tracking-wider">Contact</a>
        </div>
      )}
    </header>
  )
}
