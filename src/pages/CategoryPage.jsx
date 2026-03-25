import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

// Dummy products to show variation based on slug
const generateProducts = (slug) => {
  const commonProducts = [
    { id: 11, name: 'Sudadera Premium', category: 'Temporada • Algodón', price: '$95', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80' },
    { id: 12, name: 'Minimal Sneakers', category: 'Calzado', price: '$250', image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80' },
    { id: 13, name: 'Bufanda Cashmere', category: 'Accesorios • Invierno', price: '$120', image: 'https://images.unsplash.com/photo-1608620864350-426b3c959dcd?auto=format&fit=crop&q=80' },
    { id: 14, name: 'Gorra Estructurada', category: 'Accesorios', price: '$45', image: 'https://images.unsplash.com/photo-1521369909029-2afed882ba54?auto=format&fit=crop&q=80' },
  ];

  const categories = {
    hombre: [
      { id: 1, name: 'Chaqueta Estructurada', category: 'Hombre • Exterior', price: '$420', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80' },
      { id: 2, name: 'Suéter Hilo Fino', category: 'Hombre • Punto', price: '$189', image: 'https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?auto=format&fit=crop&q=80' },
      { id: 3, name: 'Camisa Oxford', category: 'Hombre • Camisas', price: '$130', image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&q=80' },
      { id: 4, name: 'Pantalón Chino', category: 'Hombre • Pantalones', price: '$150', image: 'https://images.unsplash.com/photo-1548883354-94bcfe321cfa?auto=format&fit=crop&q=80' }
    ],
    mujer: [
      { id: 5, name: 'Abrigo Minimalista Lana', category: 'Mujer • Exterior', price: '$345', image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&q=80' },
      { id: 6, name: 'Pantalón Sastre Recto', category: 'Mujer • Pantalones', price: '$210', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80' },
      { id: 7, name: 'Vestido Seda Cruda', category: 'Mujer • Vestidos', price: '$290', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80' },
      { id: 8, name: 'Top Minimalista', category: 'Mujer • Tops', price: '$110', image: 'https://images.unsplash.com/photo-1434389678232-004652c6f1cd?auto=format&fit=crop&q=80' }
    ],
    accesorios: [
      { id: 9, name: 'Bolso Cuero Estructurado', category: 'Accesorios • Bolsos', price: '$490', image: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&q=80' },
      { id: 10, name: 'Gafas de Sol Clásicas', category: 'Accesorios • Gafas', price: '$180', image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&q=80' },
      commonProducts[2],
      commonProducts[3]
    ],
    temporada: [
      { id: 1, name: 'Chaqueta Estructurada', category: 'Hombre • Exterior', price: '$420', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&q=80' },
      { id: 5, name: 'Abrigo Minimalista Lana', category: 'Mujer • Exterior', price: '$345', image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?auto=format&fit=crop&q=80' },
      commonProducts[0],
      commonProducts[2]
    ]
  };

  // 'colecciones' and 'lo-mas-vendido' show a mix
  categories.colecciones = [...categories.hombre.slice(0, 2), ...categories.mujer.slice(0, 2)];
  categories['lo-mas-vendido'] = [categories.mujer[2], categories.hombre[1], categories.accesorios[0], commonProducts[1]];

  return categories[slug] || commonProducts;
};

export function CategoryPage() {
  const { slug } = useParams();
  const products = generateProducts(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const title = slug === 'lo-mas-vendido' ? 'Lo más vendido' : (slug.charAt(0).toUpperCase() + slug.slice(1));

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      
      {/* Spacer for fixed Navbar */}
      <div className="h-24 md:h-28 bg-zinc-50 border-b border-zinc-200/50"></div>
      
      <main className="flex-1 py-16 px-6 lg:px-12 max-w-7xl mx-auto w-full">
        <div className="mb-12">
          <Link to="/" className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors uppercase tracking-widest mb-4 inline-block">
            ← Volver al inicio
          </Link>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-zinc-900 mt-2">
            {title}
          </h1>
          <p className="text-zinc-500 mt-4 max-w-2xl">
            Explora nuestra colección de {title.toLowerCase()}. Minimalismo y calidad en cada pieza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
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
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
