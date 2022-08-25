import { Basket } from "./Basket.styled";
import getPrice from "../base/base.js";

function BasketShop({ url, counter, sum }) {
  const newSum = getPrice(sum);
  return (
    <Basket>
      <span className="basketshop__text">
        <p>{counter} товара</p>
        <p>на сумму {newSum} ₽</p>
      </span>
      <img src={url} className="basketshop__icon" alt="Корзина" />
    </Basket>
  );
}
export default BasketShop;
