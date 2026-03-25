import React, { useState, useEffect } from 'react';
import { ShoppingBag, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../common/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Colecciones', href: '/categoria/colecciones' },
    { name: 'Hombre', href: '/categoria/hombre' },
    { name: 'Mujer', href: '/categoria/mujer' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4 lg:px-12',
        isScrolled 
          ? 'bg-zinc-50/90 backdrop-blur-md border-b border-zinc-200/50 text-zinc-900 py-3 shadow-sm' 
          : 'bg-transparent text-zinc-900' // Keeping it dark text even when transparent for contrast on light hero, or white if hero is dark
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 -ml-2 text-inherit"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link to="/" className="flex-1 lg:flex-none text-center lg:text-left text-2xl font-semibold tracking-tight uppercase">
          Aura
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className="text-sm font-medium hover:text-zinc-500 transition-colors uppercase tracking-wider relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-current transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 lg:space-x-6">
          <button className="hover:text-zinc-500 transition-colors">
            <User size={20} />
          </button>
          <button className="hover:text-zinc-500 transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1.5 w-4 h-4 rounded-full bg-zinc-900 text-white text-[10px] flex items-center justify-center font-bold">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={cn(
        "lg:hidden absolute top-full left-0 right-0 bg-zinc-50 border-b border-zinc-200 overflow-hidden transition-all duration-300 ease-in-out",
        isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-6 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.href}
              className="text-lg font-medium text-zinc-900 uppercase tracking-widest"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
