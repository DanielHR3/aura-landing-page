import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Mujer',
    subtitle: 'Exterior, vestidos y más',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80&w=1200',
    className: 'md:col-span-2 md:row-span-2',
  },
  {
    title: 'Hombre',
    subtitle: 'Chaquetas y camisas',
    image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&q=80&w=800',
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Accesorios',
    subtitle: 'Bolsos, gafas y más',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800',
    className: 'md:col-span-1 md:row-span-1',
  },
  {
    title: 'Lo más vendido',
    subtitle: 'Las favoritas de la temporada',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=800',
    className: 'md:col-span-2 md:row-span-1',
  },
];

export function BentoGrid() {
  return (
    <section className="py-12 px-6 lg:px-12 max-w-7xl mx-auto">
      <motion.div
        className="mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-2">Explorar por categoría</h2>
        <p className="text-zinc-500">Encuentra tu próxima pieza favorita.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[280px]">
        {categories.map((category, index) => {
          const slug = category.title
            .toLowerCase()
            .replace(/\s+/g, '-')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '');
          return (
            <motion.div
              key={index}
              className={category.className}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={`/categoria/${slug}`}
                className="block w-full h-full relative group overflow-hidden bg-zinc-100"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover object-center transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent transition-opacity duration-300 group-hover:from-black/70" />

                <div className="absolute inset-0 p-7 flex flex-col justify-end">
                  <span className="text-white/60 text-xs uppercase tracking-widest mb-1 font-medium">{category.subtitle}</span>
                  <h3 className="text-white text-2xl md:text-3xl font-medium tracking-tight flex items-center gap-2">
                    {category.title}
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-2 text-white/80">
                      →
                    </span>
                  </h3>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
