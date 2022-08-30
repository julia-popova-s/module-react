import "./components/styles/reset.css";
import "./components/styles/variables.css";
import "./index.scss";
import CardForBasket from "./components/elements/сardForBasket";

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
            <div className="footer-block__label">
              Заказ на сумму:
              <span className="footer-block__sum">6 220 ₽</span>
            </div>
            <button className="footer-block__btn">
              <span className="footer-block__btn-name">Оформить заказ</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
