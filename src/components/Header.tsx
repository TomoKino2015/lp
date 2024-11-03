import React from 'react';
import { Menu, User } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/95 backdrop-blur-sm py-4">
      <div className="flex items-center justify-between gap-5 px-4 lg:px-5">
        
        {/* Logo & Menu Button */}
        <div className="flex items-center gap-5">
          <button 
            type="button" 
            className="block transition hover:text-primary lg:hidden"
            aria-label="Menu"
          >
            <Menu className="h-6 w-6" />
          </button>
          <a href="/" className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold">AtHearth</span>
            <span className="text-sm text-gray-500">since 2015</span>
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {['Rent', 'Buy', 'Short-term', 'Sell', 'Management'].map((link, index) => (
            <a key={index} href={`/${link.toLowerCase()}`} className="nav-link">{link}</a>
          ))}
        </nav>

        {/* Language & CTA Button */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block text-sm text-gray-600 hover:text-primary">
            EN | JP
          </button>
          <button className="btn-primary rounded-full px-6 py-2">
            Start here
          </button>
        </div>

      </div>
    </header>
  );
}