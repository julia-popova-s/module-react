import "./index.scss";
import { products } from "./menuList";
import BasketShopMini from "../../elements/basketMini";
import { useContext } from "react";
import { Context } from "../../../App";
import ProductList from "../../elements/productList";

function ProductsPage() {
  const { data, setData, sumСalculation } = useContext(Context);
  const sum = sumСalculation();
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
              const j = data.findIndex((elem) => elem.id === id);
              const index = products.findIndex((elem) => elem.id === id);

              if (j === -1) {
                return data.concat({
                  ...products[index],
                  quantity: 1,
                });
              } else {
                const updateData = [...data];
                updateData[j] = {
                  ...updateData[j],
                  quantity: updateData[j].quantity + 1,
                };
                return updateData;
              }
            })
          }
        />
      </div>
    </div>
  );
}

export default ProductsPage;
