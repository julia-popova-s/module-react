import "./index.scss";
import { products } from "./menuList";
import BasketShopMini from "../../elements/basketMini";
import { useState } from "react";

import ProductList from "../../elements/productList";

function ProductsPage() {
  const [count, setCountProduct] = useState(0);
  const [sum, setAmountOrder] = useState(0);
  const [data, setData] = useState([]);

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
          onGetCard={(id) =>
            setData(() => {
              const index = products.findIndex((elem) => elem.id === id);
              const element = products[index];
              const newListshop = [...data, element];
              console.log(newListshop);
              return [...data, element];
            })
          }
        />
      </div>
    </div>
  );
}

export default ProductsPage;
