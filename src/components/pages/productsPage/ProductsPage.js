import "./index.scss";
import { products } from "./menuList";
import BasketMini from "../../elements/basketMini";
import ProductList from "../../elements/productList";
import { useSelector } from "react-redux";
function ProductsPage() {
  const amount = useSelector((state) => state.basket.totalAmount);
  const quantity = useSelector((state) => state.basket.totalQuantity);

  return (
    <div className="products">
      <header className="header">
        <div className="container">
          <div className="header-block">
            <h1 className="header-block__title">наша продукция</h1>
            <BasketMini counter={quantity} sum={amount} />
          </div>
        </div>
      </header>
      <ProductList products={products} />
    </div>
  );
}

export default ProductsPage;
