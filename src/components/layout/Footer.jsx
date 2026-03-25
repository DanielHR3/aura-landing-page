import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-zinc-800 pb-12">
        <div className="md:col-span-1">
          <h3 className="text-white text-2xl font-semibold tracking-tight uppercase mb-6">Aura</h3>
          <p className="text-sm max-w-xs">
            Redefiniendo el lujo minimalista. Diseñado para perdurar, creado para inspirar.
          </p>
        </div>
        
        <div>
          <h4 className="text-white text-sm font-medium tracking-wider uppercase mb-5">Comprar</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/categoria/mujer" className="hover:text-white transition-colors">Mujer</Link></li>
            <li><Link to="/categoria/hombre" className="hover:text-white transition-colors">Hombre</Link></li>
            <li><Link to="/categoria/accesorios" className="hover:text-white transition-colors">Accesorios</Link></li>
            <li><Link to="/categoria/colecciones" className="hover:text-white transition-colors">Colecciones</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white text-sm font-medium tracking-wider uppercase mb-5">Ayuda</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Atención al Cliente</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Envíos y Devoluciones</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Guía de Tallas</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Preguntas Frecuentes</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white text-sm font-medium tracking-wider uppercase mb-5">Social</h4>
          <div className="flex flex-col space-y-3 text-sm">
            <a href="#" aria-label="Visítanos en Instagram" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" aria-label="Visítanos en Twitter" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" aria-label="Visítanos en Facebook" className="hover:text-white transition-colors">Facebook</a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs">
        <p>&copy; {new Date().getFullYear()} Aura Clothing. Todos los derechos reservados.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          <a href="#" className="hover:text-white transition-colors">Términos</a>
          <a href="#" className="hover:text-white transition-colors">Accesibilidad</a>
        </div>
      </div>
    </footer>
  );
}
