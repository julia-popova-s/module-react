import "./index.scss";
import { products } from "./menuList";
import BasketShopMini from "../../elements/basketMini";
import ProductList from "../../elements/productList";

function ProductsPage() {
  return (
    <div className="products">
      <header className="header">
        <div className="container">
          <div className="header-block">
            <h1 className="header-block__title">наша продукция</h1>
            <BasketShopMini
              url={"/images/products/basket.svg"}
              counter={0}
              sum={0}
            />
          </div>
        </div>
      </header>
      <ProductList products={products} />
    </div>
  );
}

export default ProductsPage;
