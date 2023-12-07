import { Routes, Route } from 'react-router-dom';

import { ProductCatalogPage } from './components/pages/productCatalogPage';
import { ProductPage } from './components/pages/productPage';
import { CartPage } from './components/pages/cartPage';
import { FormPage } from './components/pages/formPage';
import { NotFound } from './components/pages/notFoundPage';

import './styles/reset.css';
import './styles/variables.css';

export function App() {
  localStorage.setItem('userAuth', 'false');

  return (
    <Routes>
      <Route path="/" element={<ProductCatalogPage />} />
      <Route path="/:id/:name" element={<ProductPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/registration" element={<FormPage />} />
      <Route path="/login" element={<FormPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
