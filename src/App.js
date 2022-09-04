import "./components/pages/styles/reset.css";
import "./components/pages/styles/variables.css";
import BasketPage from "./components/pages/basketPage";
import ProductsPage from "./components/pages/productsPage";

function App() {
  return (
    <>
      <ProductsPage />
      <BasketPage />
    </>
  );
}

export default App;
