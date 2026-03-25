import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const categories = [
  {
    title: 'Accesorios',
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80',
    className: 'md:col-span-2 md:row-span-2 aspect-[4/3] md:aspect-auto',
  },
  {
    title: 'Temporada',
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&q=80',
    className: 'md:col-span-1 md:row-span-1 aspect-square',
  },
  {
    title: 'Lo más vendido',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80',
    className: 'md:col-span-1 md:row-span-1 aspect-square',
  },
];

export function BentoGrid() {
  return (
    <section className="py-12 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:auto-rows-[300px]">
        {categories.map((category, index) => {
          const slug = category.title.toLowerCase().replace(/\s+/g, '-').normalize("NFD").replace(/[\u0300-\u036f]/g, "");
          return (
            <motion.div
              key={index}
              className={category.className}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <Link
                to={`/categoria/${slug}`}
                className={`block w-full h-full relative group overflow-hidden bg-zinc-100`}
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover object-center transition-transform duration-1000 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/20" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="text-white text-2xl md:text-3xl font-medium tracking-tight flex items-center gap-2">
                    {category.title}
                    <span className="inline-block transition-transform duration-300 group-hover:translate-x-2">
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
