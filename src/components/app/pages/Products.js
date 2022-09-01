import "./components/styles/reset.css";
import "./components/styles/variables.css";
import "./index.scss";
import Card from "./components/elements/card";
import BasketShopMini from "./components/ui/basket.js.js";
import { products } from "./menuList";

function App() {
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

export default App;
