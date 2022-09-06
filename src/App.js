import "./components/pages/styles/reset.css";
import "./components/pages/styles/variables.css";
import React, { createContext, useState } from "react";
import BasketPage from "./components/pages/basketPage";
import ProductsPage from "./components/pages/productsPage";
export const Context = createContext();
function App() {
  const [data, setData] = useState([]);
  console.log(data);
  const sumСalculation = () => {
    const allAmount = [];
    data.forEach((elem) => allAmount.push(+elem.price));
    return allAmount.reduce((sum, el) => sum + el, 0);
  };

  const context = {
    data,
    setData,
    sumСalculation,
  };
  return (
    <Context.Provider value={context}>
      <ProductsPage />
      <BasketPage />
    </Context.Provider>
  );
}

export default App;
