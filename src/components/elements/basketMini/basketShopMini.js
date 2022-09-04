import { BasketMini } from "./BasketMini.styled";
import getPriceWithSpace from "../utils/getPriceWithSpace";
import PropTypes from "prop-types";

function BasketShopMini({ url, counter, sum }) {
  const newSum = getPriceWithSpace(sum);
  return (
    <BasketMini>
      <div className="basket-mini__text">
        <p className="basket-mini__text-item">{counter} товара</p>
        <p className="basket-mini__text-item"> на сумму {`${newSum} ₽`}</p>
      </div>
      <img src={url} className="basket-mini__icon" alt="Корзина" />
    </BasketMini>
  );
}
BasketShopMini.propTypes = {
  url: PropTypes.string,
  counter: PropTypes.number,
  sum: PropTypes.number,
};
export default BasketShopMini;
