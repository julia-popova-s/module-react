import "./styles/reset.css";
import "./styles/variables.css";
import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { ProductsPage } from "./components/pages/productsPage";
import { ProductPage } from "./components/pages/productPage";
import { BasketPage } from "./components/pages/basketPage";
import { FormPage } from "./components/pages/formPage";
import { NotFound } from "./components/pages/notFoundPage/";

export function App() {
  const navigate = useNavigate();

  const userAutho = localStorage.getItem("userAutho");
  useEffect(() => {
    if (userAutho === null) {
      navigate("/login");
    }
  }, [navigate, userAutho]);

  return (
    <Routes>
      <Route path="/" element={<ProductsPage />} />
      <Route path="/:id/:name" element={<ProductPage />} />
      <Route path="/basket" element={<BasketPage />} />
      <Route path="/registration" element={<FormPage />} />
      <Route path="/login" element={<FormPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
