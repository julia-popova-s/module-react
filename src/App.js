import "./components/pages/styles/reset.css";
import "./components/pages/styles/variables.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import BasketPage from "./components/pages/basketPage";
import ProductsPage from "./components/pages/productsPage";
import NotFound from "./components/pages/notFoundPage/";
import ProductPage from "./components/pages/productPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/:id/:name" element={<ProductPage />} />
      <Route path="/shoplist" element={<BasketPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
