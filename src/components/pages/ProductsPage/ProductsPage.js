import "./index.scss";
import Card from "../../elements/card";
import BasketShopMini from "../../elements/basketMini";
import { products } from "./menuList";

function ProductsPage() {
  return (
    <div className="products">
      <div className="container">
        <header className="header">
          <h1 className="header__title">наша продукция</h1>
          <BasketShopMini
            url={"/images/products/basket.svg"}
            counter={3}
            sum={3500}
          />
        </header>
        <section className="product-list">
          {products.map((key) => {
            const { id, img, name, description, price, weight } = key;
            return (
              <Card
                key={id}
                img={img}
                name={name}
                description={description}
                price={price}
                weight={weight}
              />
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default ProductsPage;
