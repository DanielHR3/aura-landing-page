import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { CategoryPage } from './pages/CategoryPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoria/:slug" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
