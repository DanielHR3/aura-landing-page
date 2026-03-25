import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../common/Button';
import { useNavigate } from 'react-router-dom';

export function Hero() {
  const navigate = useNavigate();
  return (
    <section className="relative w-full h-[100svh] flex items-center justify-center overflow-hidden bg-zinc-100">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        {/* Using a highly aesthetic neutral fashion image from Unsplash */}
        <img 
          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80" 
          alt="Luxury minimalist fashion" 
          className="w-full h-full object-cover object-center"
        />
        {/* Subtle overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.h1 
          className="text-white text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Elegancia en <br className="md:hidden" /> cada costura
        </motion.h1>
        
        <motion.p 
          className="text-zinc-100 text-lg md:text-xl font-light max-w-xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          Descubre nuestra nueva colección. Diseño minimalista para el guardarropa moderno, confeccionado con materiales excepcionales.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-zinc-200"
            onClick={() => navigate('/categoria/colecciones')}
          >
            Comprar Ahora
          </Button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center text-white/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <span className="text-xs uppercase tracking-widest mb-2 font-medium">Descubrir</span>
        <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
          <motion.div 
            className="w-full h-1/2 bg-white absolute top-0"
            animate={{ y: [0, 48] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
