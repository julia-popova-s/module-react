import "./index.scss";
import OrderAmount from "../../elements/orderAmount";
import ButtonForOrder from "../../ui/buttonForOrder";
import BasketList from "../../elements/basketList";
import { useContext } from "react";
import { Context } from "../../../App";

function BasketPage() {
  const { data, setData, sumСalculation } = useContext(Context);
  const sum = sumСalculation();

  return (
    <div className="basket">
      <header className="header">
        <div className="container">
          <h2 className="header__title">корзина с выбранными товарами</h2>
        </div>
      </header>
      <BasketList
        products={data}
        onDelete={(id) =>
          setData(() => {
            const index = data.findIndex((elem) => elem.id === id);
            const newListProducts = [
              ...data.slice(0, index),
              ...data.slice(index + 1),
            ];
            return newListProducts;
          })
        }
      />
      <footer className="footer">
        <div className="container">
          <div className="footer-block">
            <OrderAmount sum={sum} />
            <ButtonForOrder type={"submit"} name={"Оформить заказ"} />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BasketPage;
