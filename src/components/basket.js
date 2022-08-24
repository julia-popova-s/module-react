import { Basket } from "./Basket.styled";
function BasketShop({ url, counter, sum }) {
  return (
    <Basket>
      <span className="basketshop__text">
        <p>{counter} товара</p>
        <p>на сумму {sum} ₽</p>
      </span>
      <img src={url} className="basketshop__icon" alt="Корзина" />
    </Basket>
  );
}
export default BasketShop;
