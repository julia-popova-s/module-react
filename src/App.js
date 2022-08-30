import "./components/styles/reset.css";
import "./components/styles/variables.css";
import "./index.scss";
import CardForBasket from "./components/elements/сardForBasket";

function App() {
  return (
    <div className="basket">
      <div className="container">
        <header className="header">
          <h2 className="header__title">корзина с выбранными товарами</h2>
        </header>
        <div className="basket-list">
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
        <div className="footer">
          <div className="footer__block-amount">
            <span className="footer__label">Заказ на сумму:</span>
            <span className="footer__sum">6 220 ₽</span>
          </div>
          <button className="footer__btn">Оформить заказ</button>
        </div>
      </div>
    </div>
  );
}

export default App;
