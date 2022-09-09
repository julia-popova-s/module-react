import "./components/pages/styles/reset.css";
import "./components/pages/styles/variables.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import BasketPage from "./components/pages/basketPage";
import ProductsPage from "./components/pages/productsPage";
import NotFound from "./components/pages/notFoundPage/";

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/shoplist" element={<BasketPage />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
