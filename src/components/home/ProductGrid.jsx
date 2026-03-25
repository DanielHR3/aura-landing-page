import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Abrigo Minimalista Lana',
    category: 'Mujer • Exterior',
    price: '$345',
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Suéter Hilo Fino',
    category: 'Hombre • Punto',
    price: '$189',
    image: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Pantalón Sastre Recto',
    category: 'Mujer • Pantalones',
    price: '$210',
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80',
  },
  {
    id: 4,
    name: 'Chaqueta Estructurada',
    category: 'Hombre • Exterior',
    price: '$420',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80',
  },
];

export function ProductGrid() {
  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-2">Colección Destacada</h2>
          <p className="text-zinc-500">Piezas atemporales para el día a día.</p>
        </motion.div>
        
        <motion.a 
          href="/categoria/colecciones" 
          className="hidden md:inline-block text-sm font-medium hover:text-zinc-500 transition-colors uppercase tracking-wider relative group pb-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Ver todo
          <span className="absolute bottom-0 left-0 w-full h-[1px] bg-zinc-900 transition-all duration-300 group-hover:w-0"></span>
        </motion.a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
        {products.map((product, index) => (
          <motion.div 
            key={product.id} 
            className="group cursor-pointer"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 mb-4 h-[400px]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col space-y-1">
              <span className="text-xs text-zinc-500 uppercase tracking-widest">{product.category}</span>
              <div className="flex justify-between items-center">
                <h3 className="text-sm font-medium text-zinc-900">{product.name}</h3>
                <span className="text-sm font-medium text-zinc-900">{product.price}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <motion.div 
        className="mt-10 text-center md:hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <a href="/categoria/colecciones" className="inline-block text-sm font-medium hover:text-zinc-500 transition-colors uppercase tracking-wider border-b border-zinc-900 pb-1">
          Ver todo
        </a>
      </motion.div>
    </section>
  );
}
