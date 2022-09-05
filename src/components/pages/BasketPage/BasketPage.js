import "./index.scss";
import OrderAmount from "../../elements/orderAmount";
import ButtonForOrder from "../../ui/buttonForOrder";
import BasketList from "../../elements/basketList";
import { useState } from "react";
const products = [
  {
    id: "1",
    name: "Устрицы по рокфеллеровски",
    description:
      "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры ",
    price: "2700",
    weight: "500 г",
    img: "4.png",
  },
  {
    id: "2",
    name: "Свиные ребрышки на гриле с зеленью",
    description:
      "Не следует, однако забывать, что реализация намеченных плановых",
    price: "1600",
    weight: "750 г",
    img: "2.png",
  },
  {
    id: "3",
    name: "Креветки по-королевски в лимонном соке",
    description:
      "Значимость этих проблем настолько очевидна, что укрепление и развитие структуры обеспечивает широкому кругу",
    price: "1820",
    weight: "7 шт",
    img: "3.png",
  },
];

function BasketPage() {
  const [data, deleteItem] = useState(products);
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
          deleteItem(() => {
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
            <OrderAmount sum={"6220"} />
            <ButtonForOrder type={"submit"} name={"Оформить заказ"} />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default BasketPage;
