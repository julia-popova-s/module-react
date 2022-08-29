import { Basket } from "./Basket.styled";
import getPriceWithSpace from "../base/getPriceWithSpace.js";
import PropTypes from "prop-types";

function BasketShop({ url, counter, sum }) {
  const newSum = getPriceWithSpace(sum);
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
BasketShop.propTypes = {
  url: PropTypes.string,
  counter: PropTypes.number,
  sum: PropTypes.number,
};
export default BasketShop;
