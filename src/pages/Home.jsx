import React from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/home/Hero';
import { ProductGrid } from '../components/home/ProductGrid';
import { BentoGrid } from '../components/home/BentoGrid';
import { Newsletter } from '../components/home/Newsletter';
import { Footer } from '../components/layout/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <BentoGrid />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
