import "./components/pages/styles/reset.css";
import "./components/pages/styles/variables.css";
import BasketPage from "./components/pages/BasketPage/BasketPage";
import ProductsPage from "./components/pages/ProductsPage/ProductsPage";

function App() {
  return (
    <>
      <ProductsPage />
      <BasketPage />
    </>
  );
}

export default App;
