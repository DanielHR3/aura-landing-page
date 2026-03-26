import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ShoppingBag, SlidersHorizontal } from 'lucide-react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';
import { AnimatePresence } from 'framer-motion';

// Extended product catalog
const generateProducts = (slug) => {
  const allProducts = {
    hombre: [
      { id: 1, name: 'Chaqueta Estructurada', category: 'Hombre • Exterior', price: 420, badge: 'Nuevo', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80&w=800' },
      { id: 2, name: 'Suéter Hilo Fino', category: 'Hombre • Punto', price: 189, badge: 'Bestseller', image: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?auto=format&fit=crop&q=80&w=800' },
      { id: 3, name: 'Camisa Oxford', category: 'Hombre • Camisas', price: 130, badge: null, image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&q=80&w=800' },
      { id: 4, name: 'Pantalón Chino', category: 'Hombre • Pantalones', price: 150, badge: null, image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&q=80&w=800' },
      { id: 5, name: 'Abrigo Oversize', category: 'Hombre • Exterior', price: 380, badge: 'Nuevo', image: 'https://images.unsplash.com/photo-1548126032-079a0fb0099d?auto=format&fit=crop&q=80&w=800' },
      { id: 6, name: 'Camiseta Premium', category: 'Hombre • Básicos', price: 75, badge: null, image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800' },
      { id: 7, name: 'Sudadera Cepillada', category: 'Hombre • Loungewear', price: 140, badge: 'Bestseller', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800' },
      { id: 8, name: 'Bermuda Casual', category: 'Hombre • Pantalones', price: 110, badge: null, image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=800' },
    ],
    mujer: [
      { id: 9, name: 'Abrigo Minimalista Lana', category: 'Mujer • Exterior', price: 345, badge: 'Nuevo', image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&q=80&w=800' },
      { id: 10, name: 'Pantalón Sastre Recto', category: 'Mujer • Pantalones', price: 210, badge: null, image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800' },
      { id: 11, name: 'Vestido Seda Cruda', category: 'Mujer • Vestidos', price: 290, badge: 'Bestseller', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=800' },
      { id: 12, name: 'Top Minimalista', category: 'Mujer • Tops', price: 110, badge: null, image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800' },
      { id: 13, name: 'Blazer Cruzado', category: 'Mujer • Exterior', price: 265, badge: 'Nuevo', image: 'https://images.unsplash.com/photo-1551803091-e20673f15770?auto=format&fit=crop&q=80&w=800' },
      { id: 14, name: 'Falda Midi Plisada', category: 'Mujer • Faldas', price: 175, badge: null, image: 'https://images.unsplash.com/photo-1583496661160-fb5218afa9a6?auto=format&fit=crop&q=80&w=800' },
      { id: 15, name: 'Jersey Cuello Alto', category: 'Mujer • Punto', price: 155, badge: 'Bestseller', image: 'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?auto=format&fit=crop&q=80&w=800' },
      { id: 16, name: 'Traje Sastre Completo', category: 'Mujer • Conjuntos', price: 420, badge: 'Nuevo', image: 'https://images.unsplash.com/photo-1594938298603-c8148c4b984a?auto=format&fit=crop&q=80&w=800' },
    ],
    accesorios: [
      { id: 17, name: 'Bolso Cuero Estructurado', category: 'Accesorios • Bolsos', price: 490, badge: 'Bestseller', image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80&w=800' },
      { id: 18, name: 'Gafas de Sol Clásicas', category: 'Accesorios • Gafas', price: 180, badge: null, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80&w=800' },
      { id: 19, name: 'Bufanda Cashmere', category: 'Accesorios • Invierno', price: 120, badge: 'Nuevo', image: 'https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?auto=format&fit=crop&q=80&w=800' },
      { id: 20, name: 'Gorra Estructurada', category: 'Accesorios • Sombreros', price: 45, badge: null, image: 'https://images.unsplash.com/photo-1521369909029-2afed882ba54?auto=format&fit=crop&q=80&w=800' },
      { id: 21, name: 'Cinturón Piel', category: 'Accesorios • Cinturones', price: 95, badge: null, image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&q=80&w=800' },
      { id: 22, name: 'Tote Bag Canvas', category: 'Accesorios • Bolsos', price: 65, badge: 'Bestseller', image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?auto=format&fit=crop&q=80&w=800' },
    ],
  };

  allProducts.colecciones = [...allProducts.hombre.slice(0, 3), ...allProducts.mujer.slice(0, 3)];
  allProducts.temporada = [allProducts.hombre[0], allProducts.mujer[0], allProducts.hombre[1], allProducts.mujer[2]];
  allProducts['lo-mas-vendido'] = [
    allProducts.mujer[2], allProducts.hombre[1], allProducts.accesorios[0],
    allProducts.mujer[6], allProducts.hombre[6], allProducts.accesorios[5],
  ];

  return allProducts[slug] || allProducts.colecciones;
};

const SORT_OPTIONS = [
  { label: 'Destacado', value: 'default' },
  { label: 'Precio: menor a mayor', value: 'price-asc' },
  { label: 'Precio: mayor a menor', value: 'price-desc' },
  { label: 'Más nuevos', value: 'new' },
];

function CategoryProductCard({ product, index }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <motion.div
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="relative overflow-hidden bg-zinc-100 mb-4" style={{ height: '380px' }}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
        {product.badge && (
          <span className="absolute top-3 left-3 bg-zinc-950 text-white text-[10px] font-medium uppercase tracking-widest px-2.5 py-1">
            {product.badge}
          </span>
        )}
        <button
          aria-label="Guardar producto"
          className="absolute top-3 right-3 p-2 bg-white/80 backdrop-blur-sm hover:bg-white transition-colors duration-200"
        >
          <Heart size={14} strokeWidth={1.5} className="text-zinc-700" />
        </button>
        <AnimatePresence>
          {hovered && (
            <motion.button
              className="absolute bottom-0 left-0 right-0 bg-zinc-950/90 flex items-center justify-center gap-2 py-3.5"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.18 }}
            >
              <ShoppingBag size={14} className="text-white" strokeWidth={1.5} />
              <span className="text-white text-xs uppercase tracking-widest font-medium">Agregar al carrito</span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>
      <div className="flex flex-col space-y-1">
        <span className="text-[11px] text-zinc-400 uppercase tracking-widest">{product.category}</span>
        <div className="flex justify-between items-center">
          <h3 className="text-sm font-medium text-zinc-900">{product.name}</h3>
          <span className="text-sm font-medium text-zinc-900">${product.price}</span>
        </div>
      </div>
    </motion.div>
  );
}

export function CategoryPage() {
  const { slug } = useParams();
  const rawProducts = generateProducts(slug);
  const [sortBy, setSortBy] = useState('default');
  const [filterOpen, setFilterOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setSortBy('default');
  }, [slug]);

  const products = [...rawProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'new') return (b.badge === 'Nuevo' ? 1 : 0) - (a.badge === 'Nuevo' ? 1 : 0);
    return 0;
  });

  const titleMap = {
    'lo-mas-vendido': 'Lo más vendido',
    colecciones: 'Colecciones',
    hombre: 'Hombre',
    mujer: 'Mujer',
    accesorios: 'Accesorios',
    temporada: 'Temporada',
  };
  const title = titleMap[slug] || (slug.charAt(0).toUpperCase() + slug.slice(1));

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />

      {/* Hero header */}
      <div className="h-24 md:h-28 bg-zinc-50 border-b border-zinc-200/50" />

      <main className="flex-1 py-12 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        {/* Breadcrumb + title */}
        <div className="mb-10">
          <Link to="/" className="text-xs text-zinc-400 hover:text-zinc-700 transition-colors uppercase tracking-widest mb-3 inline-block">
            ← Inicio
          </Link>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900">{title}</h1>
              <p className="text-zinc-500 mt-2 text-sm">{products.length} productos</p>
            </div>

            {/* Sort / Filter bar */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setFilterOpen(!filterOpen)}
                className="flex items-center gap-2 border border-zinc-200 px-4 py-2 text-xs uppercase tracking-widest text-zinc-700 hover:border-zinc-400 transition-colors"
              >
                <SlidersHorizontal size={13} />
                Filtrar
              </button>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-zinc-200 px-4 py-2 text-xs uppercase tracking-widest text-zinc-700 focus:outline-none focus:ring-1 focus:ring-zinc-400 hover:border-zinc-400 transition-colors bg-white cursor-pointer"
                aria-label="Ordenar productos"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Filter pills (collapsible) */}
        <AnimatePresence>
          {filterOpen && (
            <motion.div
              className="mb-8 flex flex-wrap gap-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
            >
              {['Nuevo', 'Bestseller', 'Menos de $200', '$200–$400', 'Más de $400'].map((filter) => (
                <button
                  key={filter}
                  className="border border-zinc-200 px-4 py-1.5 text-xs uppercase tracking-widest text-zinc-600 hover:border-zinc-900 hover:text-zinc-900 transition-colors"
                >
                  {filter}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product grid */}
        <motion.div
          key={slug + sortBy}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-5 gap-y-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {products.map((product, index) => (
            <CategoryProductCard key={product.id} product={product} index={index} />
          ))}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
