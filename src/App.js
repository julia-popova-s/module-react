import "./components/styles/reset.css";
import "./components/styles/variables.css";
import "./index.scss";
import { BasketList } from "./components/blocks/BasketList.styled.js";
import CardForBasket from "./components/elements/сardForBasket";
import ButtonPlaceAnOrder from "./components/ui/ButtonPlaceAnOrder";

function App() {
  return (
    <div className="basket-list">
      <div className="container">
        <header className="header">
          <h2 className="header__title">корзина с выбранными товарами</h2>
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
          </div>
          <ButtonPlaceAnOrder name={"Оформить заказ"} />
        </div>
      </div>
    </div>
  );
}

export default App;
