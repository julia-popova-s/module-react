import "./index.scss";
import { products } from "./menuList";
import BasketShopMini from "../../elements/basketMini";
import { useState } from "react";

import ProductList from "../../elements/productList/";

function ProductsPage() {
  const [count, setCountProduct] = useState(0);
  const [sum, setAmountOrder] = useState(0);

  return (
    <div className="products">
      <div className="container">
        <header className="header">
          <h1 className="header__title">наша продукция</h1>
          <BasketShopMini
            url={"/images/products/basket.svg"}
            counter={count}
            sum={sum}
          />
        </header>
        <ProductList
          products={products}
          onGetQuantityOfProducts={() => setCountProduct(count + 1)}
          onGetAmountOfOrder={(price) => setAmountOrder(sum + price)}
        />
      </div>
    </div>
  );
}

export default ProductsPage;
