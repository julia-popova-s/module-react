import "./index.scss";
import { products } from "./menuList";
import BasketShopMini from "../../elements/basketMini";
import { useContext } from "react";
import { Context } from "../../../App";
import ProductList from "../../elements/productList";

function ProductsPage() {
  const { data, setData, sumСalculation } = useContext(Context);
  const sum = sumСalculation();
  data.forEach((elem) => (elem.count = 0));
  return (
    <div className="products">
      <div className="container">
        <header className="header">
          <h1 className="header__title">наша продукция</h1>
          <BasketShopMini
            url={"/images/products/basket.svg"}
            counter={data.length}
            sum={sum}
          />
        </header>
        <ProductList
          products={products}
          onGetCard={(id) =>
            setData(() => {
              const index = products.findIndex((elem) => elem.id === id);
              const element = products[index];
              return [...data, element];
            })
          }
        />
      </div>
    </div>
  );
}

export default ProductsPage;
