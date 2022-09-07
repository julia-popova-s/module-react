import "./components/pages/styles/reset.css";
import "./components/pages/styles/variables.css";
import React, { createContext, useState } from "react";
import BasketPage from "./components/pages/basketPage";
import ProductsPage from "./components/pages/productsPage";
export const Context = createContext();
function App() {
  const [data, setData] = useState([]);
  const sumСalculation = () => {
    const allAmount = [];
    data.forEach((elem) => allAmount.push(+elem.price * elem.quantity));
    return allAmount.reduce((sum, el) => sum + el, 0);
  };
  const totalQuantity = data.reduce((acc, elem) => elem.quantity + acc, 0);
  const context = {
    data,
    setData,
    sumСalculation,
    totalQuantity,
  };
  return (
    <Context.Provider value={context}>
      <ProductsPage />
      <BasketPage />
    </Context.Provider>
  );
}

export default App;
