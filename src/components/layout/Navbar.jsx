import React, { useState, useEffect } from 'react';
import { ShoppingBag, User, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../common/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Solo usamos texto blanco si estamos en Home y NO hemos hecho scroll
  const isLightText = location.pathname === '/' && !isScrolled;

  const navLinks = [
    { name: 'Colecciones', href: '/categoria/colecciones' },
    { name: 'Hombre', href: '/categoria/hombre' },
    { name: 'Mujer', href: '/categoria/mujer' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-6 py-4 lg:px-12',
        isScrolled ? 'bg-zinc-50/90 backdrop-blur-md border-b border-zinc-200/50 py-3 shadow-sm' : 'bg-transparent',
        isLightText ? 'text-white' : 'text-zinc-900'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden p-2 -ml-2 text-inherit relative z-10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <Link 
          to="/" 
          className="text-2xl tracking-widest font-semibold uppercase relative z-10"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Aura
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link 
                key={link.name} 
                to={link.href}
                className={cn(
                  "text-sm font-medium transition-colors uppercase tracking-wider relative group",
                  isActive ? "text-current" : (isLightText ? "text-white/70 hover:text-white" : "text-zinc-500 hover:text-zinc-900")
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-[1px] transition-all duration-300",
                  isActive ? "w-full bg-current" : "w-0 bg-current group-hover:w-full"
                )}></span>
              </Link>
            );
          })}
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 lg:space-x-6">
          <button 
            className="transition-colors hover:opacity-70"
            aria-label="Perfil de usuario"
          >
            <User size={20} />
          </button>
          <button 
            className="transition-colors hover:opacity-70 relative"
            aria-label="Carrito de compras"
          >
            <ShoppingBag size={20} />
            <span className={cn(
              "absolute -top-1 -right-1.5 w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-bold",
              !isLightText ? "bg-zinc-900 text-white" : "bg-white text-zinc-900"
            )}>
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
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link 
                key={link.name} 
                to={link.href}
                className={cn(
                  "text-lg font-medium uppercase tracking-widest transition-colors",
                  isActive ? "text-zinc-500" : "text-zinc-900"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
                aria-current={isActive ? "page" : undefined}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
