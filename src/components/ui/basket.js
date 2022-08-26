import { Basket } from "./Basket.styled";
import getPrice from "../base/getPrice.js";

function BasketShop({ url, counter, sum }) {
  const newSum = getPrice(sum);
  return (
    <Basket>
      <div className="basketshop__text">
        <p className="basketshop__text-item">{counter} товара</p>
        <p className="basketshop__text-item"> на сумму {newSum} ₽</p>
      </div>
      <img src={url} className="basketshop__icon" alt="Корзина" />
    </Basket>
  );
}
export default BasketShop;
