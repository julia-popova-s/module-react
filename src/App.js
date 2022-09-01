import "./components/app/styles/reset.css";
import "./components/app/styles/variables.css";
import "./index.scss";
import CardForBasket from "./components/elements/cardBasket/сardForBasket";
import OrderAmount from "./components/elements/orderAmount/orderAmount";

function App() {
  return (
    <div className="basket">
      <header className="header">
        <div className="container">
          <h2 className="header__title">корзина с выбранными товарами</h2>
        </div>
      </header>
      <section className="basket-list">
        <div className="container">
          <CardForBasket
            img={"4.png"}
            name={"Устрицы по рокфеллеровски"}
            price={"2700"}
          />
          <CardForBasket
            img={"3.png"}
            name={"Креветки по-королевски в лимонном соке"}
            price={"1820"}
          />
          <CardForBasket
            img={"2.png"}
            name={"Свиные ребрышки на гриле с зеленью"}
            price={"1600"}
          />
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer-block">
            <OrderAmount sum={"6220"} />
            <button type="submit" className="footer-block__btn">
              Оформить заказ
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
