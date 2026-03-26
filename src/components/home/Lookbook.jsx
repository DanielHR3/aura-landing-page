import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const editorialItems = [
  {
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200',
    tall: true,
  },
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&q=80&w=800',
    tall: false,
  },
  {
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800',
    tall: false,
  },
];

export function Lookbook() {
  return (
    <section className="py-20 px-6 lg:px-12 bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <span className="text-zinc-500 text-xs uppercase tracking-widest font-medium">Temporada 2026</span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mt-2 leading-tight">
              Lookbook<br />Editorial
            </h2>
          </div>
          <blockquote className="text-zinc-400 text-sm md:text-base font-light max-w-xs md:text-right italic leading-relaxed">
            "El estilo verdadero no grita,<br />susurra con confianza."
          </blockquote>
        </motion.div>

        {/* Editorial grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {/* Large left image */}
          <motion.div
            className="md:row-span-2 overflow-hidden"
            style={{ height: '580px' }}
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={editorialItems[0].image}
              alt="Editorial de moda Aura"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </motion.div>

          {/* Top right */}
          <motion.div
            className="md:col-span-2 overflow-hidden"
            style={{ height: '280px' }}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <img
              src={editorialItems[1].image}
              alt="Colección mujer Aura"
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </motion.div>

          {/* Bottom right */}
          <motion.div
            className="md:col-span-2 overflow-hidden"
            style={{ height: '280px' }}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            <img
              src={editorialItems[2].image}
              alt="Pantalón sastre Aura"
              className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-1000 ease-out"
            />
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-zinc-800 pt-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-zinc-400 text-sm">12 piezas seleccionadas · Disponibles ahora</p>
          <Link
            to="/categoria/colecciones"
            className="inline-flex items-center gap-2 bg-white text-zinc-950 text-sm font-medium uppercase tracking-widest px-8 py-3.5 hover:bg-zinc-100 transition-colors duration-200"
          >
            Ver lookbook completo
            <span className="text-base">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
