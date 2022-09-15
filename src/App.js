import "./styles/reset.css";
import "./styles/variables.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import BasketPage from "./components/pages/basketPage";
import ProductsPage from "./components/pages/productsPage";
import NotFound from "./components/pages/notFoundPage/";
import ProductPage from "./components/pages/productPage";
import FormPage from "./components/pages/formPage";
function App() {
  return (
    <Routes>
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/:id/:name" element={<ProductPage />} />
      <Route path="/basket" element={<BasketPage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/" element={<FormPage />} />
    </Routes>
  );
}

export default App;
