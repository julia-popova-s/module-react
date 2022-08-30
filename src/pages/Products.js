import "./components/styles/reset.css";
import "./components/styles/variables.css";
import "./index.scss";
import { ProductList } from "./components/blocks/ProductList.styled";
import Card from "./components/elements/card";
import BasketShop from "./components/ui/basket.js";
import { products } from "./menuList";

function App() {
  return (
    <div className="product-list">
      <div className="container">
        <header className="header">
          <h1 className="header__title">наша продукция</h1>
          <BasketShop url={"images/basket.svg"} counter={3} sum={3500} />
        </header>
        <ProductList>
          {products.map((key) => {
            const { id, img, name, description, price, weight } = key;
            return (
              <Card
                key={+id}
                img={img}
                name={name}
                description={description}
                price={price}
                weight={weight}
              />
            );
          })}
        </ProductList>
      </div>
    </div>
  );
}

export default App;
