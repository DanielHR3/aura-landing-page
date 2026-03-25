import React from 'react';
import { Button } from '../common/Button';
import { motion } from 'framer-motion';

export function Newsletter() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-white border-t border-zinc-100 overflow-hidden">
      <motion.div 
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="text-3xl font-medium tracking-tight text-zinc-900 mb-4">
          Únete a Aura
        </h2>
        <p className="text-zinc-500 mb-8 max-w-md mx-auto">
          Suscríbete a nuestra newsletter y recibe acceso anticipado a nuevas colecciones y contenido exclusivo.
        </p>
        
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Tu correo electrónico" 
            required
            className="flex-1 h-11 px-4 border border-zinc-200 bg-zinc-50 rounded-none focus:outline-none focus:ring-1 focus:ring-zinc-950 focus:border-zinc-950 transition-colors placeholder:text-zinc-400"
          />
          <Button type="submit" className="sm:w-auto w-full">
            Suscribirse
          </Button>
        </form>
        <p className="text-xs text-zinc-400 mt-4">
          Al suscribirte, aceptas nuestros Términos y Política de Privacidad.
        </p>
      </motion.div>
    </section>
  );
}
