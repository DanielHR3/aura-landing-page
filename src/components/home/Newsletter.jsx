import React from 'react';
import { Button } from '../common/Button';
import { motion } from 'framer-motion';

export function Newsletter() {
  return (
    <section className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[460px]">
        {/* Left — editorial image */}
        <motion.div
          className="relative hidden lg:block overflow-hidden"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&q=80&w=1200"
            alt="Colección Aura newsletter"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-zinc-950/40" />
          <div className="absolute bottom-10 left-10">
            <span className="text-white/60 text-xs uppercase tracking-widest">Acceso exclusivo</span>
            <p className="text-white text-2xl font-medium tracking-tight mt-2 max-w-xs leading-snug">
              Sé el primero en descubrir cada colección
            </p>
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.div
          className="bg-zinc-950 flex items-center justify-center px-8 py-16 lg:px-16"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-md w-full">
            <span className="text-zinc-500 text-xs uppercase tracking-widest font-medium">Newsletter</span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mt-3 mb-4">
              Únete a Aura
            </h2>
            <p className="text-zinc-400 mb-8 leading-relaxed">
              Suscríbete y recibe acceso anticipado a nuevas colecciones, ofertas exclusivas y las últimas tendencias de Aura.
            </p>

            <form className="flex flex-col gap-3 w-full" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Tu nombre"
                aria-label="Tu nombre para el newsletter"
                className="h-12 px-4 border border-zinc-700 bg-zinc-900 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-white focus:border-white transition-colors text-sm"
              />
              <input
                type="email"
                placeholder="Tu correo electrónico"
                aria-label="Tu correo electrónico para el newsletter"
                required
                className="h-12 px-4 border border-zinc-700 bg-zinc-900 text-white placeholder:text-zinc-600 focus:outline-none focus:ring-1 focus:ring-white focus:border-white transition-colors text-sm"
              />
              <Button
                type="submit"
                className="w-full h-12 bg-white text-zinc-950 hover:bg-zinc-100 text-sm uppercase tracking-widest font-medium"
              >
                Suscribirse gratis
              </Button>
            </form>

            <p className="text-xs text-zinc-600 mt-4">
              Al suscribirte, aceptas nuestros{' '}
              <a href="#" className="underline hover:text-zinc-400 transition-colors">Términos</a>{' '}
              y{' '}
              <a href="#" className="underline hover:text-zinc-400 transition-colors">Política de Privacidad</a>.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
