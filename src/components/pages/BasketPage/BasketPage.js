import "./index.scss";
import CardForBasket from "../../elements/cardBasket";
import OrderAmount from "../../elements/orderAmount";
import ButtonForOrder from "../../ui/buttonForOrder";

function BasketPage() {
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
            <ButtonForOrder type={"submit"} name={"Оформить заказ"} />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BasketPage;
