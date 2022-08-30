import "./components/styles/reset.css";
import "./components/styles/variables.css";
import "./index.scss";
import { BasketList } from "./components/blocks/BasketList.styled.js";
import CardForBasket from "./components/elements/сardForBasket";
import ButtonPlaceAnOrder from "./components/ui/ButtonPlaceAnOrder";

function App() {
  return (
    <div className="products">
      <div className="container">
        <header className="header">
          <h1 className="header__title">корзина с выбранными товарами</h1>
        </header>
        <BasketList>
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
        </BasketList>
        <div className="footer">
          <div className="footer__block-amount">
            <span className="footer__label">Заказ на сумму:</span>
            <span className="footer__sum">6 220 ₽</span>
            <ButtonPlaceAnOrder name={"Оформить заказ"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
