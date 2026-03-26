import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const products = [
  {
    id: 1,
    name: 'Abrigo Minimalista Lana',
    category: 'Mujer • Exterior',
    price: '$345',
    badge: 'Nuevo',
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&q=80&w=800',
    slug: 'mujer',
  },
  {
    id: 2,
    name: 'Suéter Hilo Fino',
    category: 'Hombre • Punto',
    price: '$189',
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?auto=format&fit=crop&q=80&w=800',
    slug: 'hombre',
  },
  {
    id: 3,
    name: 'Pantalón Sastre Recto',
    category: 'Mujer • Pantalones',
    price: '$210',
    badge: null,
    image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800',
    slug: 'mujer',
  },
  {
    id: 4,
    name: 'Chaqueta Estructurada',
    category: 'Hombre • Exterior',
    price: '$420',
    badge: 'Nuevo',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800',
    slug: 'hombre',
  },
  {
    id: 5,
    name: 'Vestido Seda Cruda',
    category: 'Mujer • Vestidos',
    price: '$290',
    badge: null,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800',
    slug: 'mujer',
  },
  {
    id: 6,
    name: 'Bolso Cuero Estructurado',
    category: 'Accesorios • Bolsos',
    price: '$490',
    badge: 'Bestseller',
    image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=800',
    slug: 'accesorios',
  },
];

function ProductCard({ product, index }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      className="group cursor-pointer relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link to={`/categoria/${product.slug}`} className="block">
        {/* Image container */}
        <div className="relative overflow-hidden bg-zinc-100 mb-4" style={{ height: '360px' }}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
          />

          {/* Badge */}
          {product.badge && (
            <span className="absolute top-3 left-3 bg-zinc-950 text-white text-[10px] font-medium uppercase tracking-widest px-2.5 py-1">
              {product.badge}
            </span>
          )}

          {/* Heart save */}
          <button
            aria-label="Guardar producto"
            className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm hover:bg-white transition-colors duration-200"
            onClick={(e) => e.preventDefault()}
          >
            <Heart size={14} strokeWidth={1.5} className="text-zinc-700" />
          </button>

          {/* Quick Add overlay */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-zinc-950/90 backdrop-blur-sm flex items-center justify-center gap-2 py-3.5 cursor-pointer"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.preventDefault()}
              >
                <ShoppingBag size={14} className="text-white" strokeWidth={1.5} />
                <span className="text-white text-xs uppercase tracking-widest font-medium">Agregar al carrito</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Info */}
        <div className="flex flex-col space-y-1">
          <span className="text-[11px] text-zinc-400 uppercase tracking-widest">{product.category}</span>
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium text-zinc-900">{product.name}</h3>
            <span className="text-sm font-medium text-zinc-900">{product.price}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

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
          <p className="text-zinc-500">Piezas atemporales para el guardarropa moderno.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            to="/categoria/colecciones"
            className="hidden md:inline-block text-sm font-medium hover:text-zinc-500 transition-colors uppercase tracking-wider relative group pb-1"
          >
            Ver todo
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-zinc-900 transition-all duration-300 group-hover:w-0" />
          </Link>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
        {products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>

      <motion.div
        className="mt-10 text-center md:hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <Link
          to="/categoria/colecciones"
          className="inline-block text-sm font-medium hover:text-zinc-500 transition-colors uppercase tracking-wider border-b border-zinc-900 pb-1"
        >
          Ver todo
        </Link>
      </motion.div>
    </section>
  );
}
